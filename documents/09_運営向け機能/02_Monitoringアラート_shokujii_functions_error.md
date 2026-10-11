# Monitoring アラート: shokujii functions error

本番 GCP プロジェクト `bokudeli-event-dev` の Log-based Alert 正本。Issue: [#2166](https://github.com/nijuniinc/bokudeli-event-new/issues/2166)。

単体 `Failed to fetch` の通知分けは [#2174](https://github.com/nijuniinc/bokudeli-event-new/issues/2174)。

## 概要

| 項目 | 値 |
|------|-----|
| 表示名 | `shokujii functions error` |
| Policy ID | `6102542799444339153` |
| リソース | `projects/bokudeli-event-dev/alertPolicies/6102542799444339153` |
| 通知レート制限 | 1 時間に 1 回 |
| 自動クローズ | 7 日 |
| Log match filter | [`monitoring/shokujii-functions-error.filter`](./monitoring/shokujii-functions-error.filter) |

## Log match filter（正本）

適用する文字列は [`monitoring/shokujii-functions-error.filter`](./monitoring/shokujii-functions-error.filter)。

```
severity>=ERROR
NOT (logName=~"cloudaudit.googleapis.com" OR logName=~"cloudscheduler.googleapis.com")
NOT (
  jsonPayload.module="clientError"
  AND (
    jsonPayload.error_message="Failed to fetch"
    OR jsonPayload.error_message=~"Failed to fetch dynamically imported module"
    OR jsonPayload.error_message=~"Failed to register a ServiceWorker"
    OR jsonPayload.error_message=~"Connection failed."
    OR jsonPayload.error_message=~"Rejected"
    OR jsonPayload.error_message=~"Load failed"
    OR jsonPayload.error_message=~"ServiceWorker"
    OR jsonPayload.error_message=~"serviceworker"
  )
)
```

`jsonPayload.error_message="Failed to fetch"` は完全一致です。`Failed to fetch dynamically imported module` には一致しません。

### 除外されるもの（ノイズ、または別ポリシー）

- clientError の chunk 読み込み失敗、ServiceWorker 失敗、`Connection failed.`、`Load failed`、`Rejected` を含むメッセージ
- 単体 **`Failed to fetch`**（`error_message="Failed to fetch"`）。ログは ERROR のまま残し、このポリシーでは通知しない。複数ユーザーへの広がりは下の別ポリシー
- Cloud Audit / Cloud Scheduler の infra ERROR

### 通知されるもの（要対応）

- **ZodError**（`error_type=ZodError`）。filter でも server 側でも ERROR 維持
- Storage / Rules 系 clientError（`storage/unauthorized` 等）
- サーバー Functions ERROR（Slack 404、`handleEventOgpRequest` HTTP 500 等）
- 未知の clientError（shareSns TypeError、partner 権限不一致等）

ノイズ判定のコード正本は [`functions/default/src/utils/clientErrorNoise.ts`](../../functions/default/src/utils/clientErrorNoise.ts) です。単体 `Failed to fetch` はここでは WARN にしません。人数アラートの指標が `severity>=ERROR` を数えるためです。[`parse_logs.py`](../../.agents/skills/gcp-logging-error-analysis/scripts/parse_logs.py) でも P1 のままです。

## 単体 Failed to fetch の人数アラート

1人の再送ではメールを出さず、短い時間に複数のログインユーザーから出たときだけ通知します。

| 項目 | 値 |
|------|-----|
| 表示名 | `shokujii failed to fetch multi user` |
| 指標 | `logging.googleapis.com/user/client_failed_to_fetch` |
| 指標定義 | [`monitoring/client-failed-to-fetch-metric.json`](./monitoring/client-failed-to-fetch-metric.json) |
| ポリシー定義 | [`monitoring/shokujii-failed-to-fetch-multi-user-policy.json`](./monitoring/shokujii-failed-to-fetch-multi-user-policy.json) |
| 条件 | 直近 10 分の `user_id` が 5 人以上 |
| 評価間隔 | 60 秒 |
| 自動クローズ | 30 分 |
| 対象外 | `user_id` が無い報告（未ログイン） |

指標は作成後に入ったログだけを数えます。過去分は遡りません。

PromQL:

```
count(increase(logging_googleapis_com:user_client_failed_to_fetch[10m]) > 0) >= 5
```

`user_id` ラベルが時系列を分けるので、同じ人が何件出しても 1 人です。通知チャネルは `shokujii functions error` と同じものを付けます。

## 変更手順

Functions の再デプロイは不要です。単体 `Failed to fetch` のログレベルは ERROR のままです。

### 1. 1件通知の filter を更新する

```bash
PROJECT=bokudeli-event-dev
POLICY=projects/${PROJECT}/alertPolicies/6102542799444339153
FILTER_FILE=documents/09_運営向け機能/monitoring/shokujii-functions-error.filter

gcloud monitoring policies describe "$POLICY" \
  --project="$PROJECT" --format=json > /tmp/alert-policy.json

python3 - "$FILTER_FILE" <<'PY'
import json
import pathlib
import sys

policy = json.loads(pathlib.Path("/tmp/alert-policy.json").read_text())
policy["conditions"][0]["conditionMatchedLog"]["filter"] = pathlib.Path(sys.argv[1]).read_text().strip()
for key in ("name", "creationRecord", "mutationRecord"):
    policy.pop(key, None)
pathlib.Path("/tmp/alert-policy-updated.json").write_text(
    json.dumps(policy, ensure_ascii=False, indent=2) + "\n"
)
PY

gcloud monitoring policies update "$POLICY" \
  --project="$PROJECT" \
  --policy-from-file=/tmp/alert-policy-updated.json
```

### 2. 人数指標を作る

```bash
gcloud logging metrics create client_failed_to_fetch \
  --project=bokudeli-event-dev \
  --config-from-file=documents/09_運営向け機能/monitoring/client-failed-to-fetch-metric.json
```

同名があるときは `gcloud logging metrics update client_failed_to_fetch` に読み替えます。

### 3. 人数アラートを作る

通知チャネルは既存ポリシーから写します。

```bash
python3 - <<'PY'
import json
import pathlib

existing = json.loads(pathlib.Path("/tmp/alert-policy.json").read_text())
policy = json.loads(
    pathlib.Path(
        "documents/09_運営向け機能/monitoring/shokujii-failed-to-fetch-multi-user-policy.json"
    ).read_text()
)
policy["notificationChannels"] = existing["notificationChannels"]
pathlib.Path("/tmp/failed-to-fetch-multi-user-policy.json").write_text(
    json.dumps(policy, ensure_ascii=False, indent=2) + "\n"
)
PY

gcloud monitoring policies create \
  --project=bokudeli-event-dev \
  --policy-from-file=/tmp/failed-to-fetch-multi-user-policy.json
```

作成後、この文書の概要表に Policy ID を追記します。

## 適用前検証

単体 `Failed to fetch` が 1件通知の filter から落ちることと、それ以外の ERROR が残ることを見ます。

```bash
# 1件通知の新 filter（.filter を1行に潰して渡す）
python3 .agents/skills/gcp-logging-error-analysis/scripts/fetch_logs.py \
  --project=bokudeli-event-dev --freshness=24h \
  --filter='severity>=ERROR AND NOT (logName=~"cloudaudit.googleapis.com" OR logName=~"cloudscheduler.googleapis.com") AND NOT (jsonPayload.module="clientError" AND (jsonPayload.error_message="Failed to fetch" OR jsonPayload.error_message=~"Failed to fetch dynamically imported module" OR jsonPayload.error_message=~"Failed to register a ServiceWorker" OR jsonPayload.error_message=~"Connection failed." OR jsonPayload.error_message=~"Rejected" OR jsonPayload.error_message=~"Load failed" OR jsonPayload.error_message=~"ServiceWorker" OR jsonPayload.error_message=~"serviceworker"))' \
  -o /tmp/after.json --parse
```

`gcloud logging read` では `REGEXP_MATCH` は使えません。`ServiceWorker` と `serviceworker` は個別に指定します。

人数の確認は、同じ期間の単体 `Failed to fetch` を `user_id` ごとに数えます。1人に偏っていれば、このアラートは開きません。

## 関連

- [01_520エラー通知.md](./01_520エラー通知.md) — clientError レポート仕様
- [error-patterns.md](../../.agents/skills/gcp-logging-error-analysis/references/error-patterns.md) — triage パターン

## Functions デプロイ（`#2166` WARN 格下げ）

`reportClientError` の server 側変更を反映するには hybrid Functions デプロイが必要です。今回の人数アラートではログレベルを変えないため、Functions のデプロイは不要です。

```bash
# 本番（bokudeli-event-dev）— CI 経由が正規（production ブランチ push → deploy_functions workflow）
# ローカル単体デプロイは FUNCTIONS 用 .env（EVENT_HOST 等）が必要
firebase deploy --only functions:reportClientError --project bokudeli-event-dev
```

2026-07-06: 当時の Monitoring filter は本番適用済み。Functions コードは PR マージ後の `deploy_functions` で反映する。
