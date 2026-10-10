# pstack 初期 sandbox プール台帳

予約の操作正本は Git に入れない次のファイル。worktree からは `git rev-parse --git-common-dir` の親を使う。

`<メインクローン>/.agents/state/sandbox-reservations.json`

実パスは `python3 .agents/scripts/sandbox_reservation.py path` で取得する。worktree 内に別台帳を作らない。

コマンドは [`.agents/scripts/sandbox_reservation.py`](../../../../.agents/scripts/sandbox_reservation.py)（`pick` / `reconcile` / `check` / `switch` / `release`）。このファイルは説明用の写しである。

最終棚卸し: **2026-10-10**（台帳 `selectable` と Hosting の画像修正。予約の正本は JSON）

## 環境一覧（F-2-1）

| 環境 ID | git remote | GitHub リポジトリ | GCP / Firebase プロジェクト | user URL | partner URL | selectable | 直近の feature 系 branch | 直近 user デプロイ |
| --- | --- | --- | --- | --- | --- | :---: | --- | --- |
| sandbox2603 | `sandbox2603` | `nijuni-yasu/bokudeli-event-yasu-2603-2` | `bokudeli-event-yasu-2603` | https://bokudeli-event-yasu-2603.web.app | https://bokudeli-event-yasu-2603-admin.web.app | はい | `fix/2423`（台帳の現行予約） | 2026-10-09 `fix/2423` |
| sandbox2606 | `sandbox2606` | `nijuni-yasu/bokudeli-event-yasu-2606` | `bokudeli-event-yasu-2606` | https://bokudeli-event-yasu-2606.web.app | https://bokudeli-event-yasu-2606-admin.web.app | はい | `doc/2398-pstack` | 2026-10-10 `doc/2398-pstack`（画像修正・user/storage） |
| sandbox2607 | `sandbox2607` | `nijuni-yasu/bokudeli-event-yasu-2607` | `bokudeli-event-yasu-2607` | https://bokudeli-event-yasu-2607.web.app | https://bokudeli-event-yasu-2607-admin.web.app | はい | なし（Hosting は `development`） | 2026-10-10 `development`（画像修正・user/storage） |
| sandbox2608 | `sandbox2608` | `nijuni-yasu/bokudeli-event-yasu-2608` | `bokudeli-event-yasu-2608` | https://bokudeli-event-yasu-2608.web.app | https://bokudeli-event-yasu-2608-admin.web.app | はい | `feat/957-form` | 2026-10-10 `feat/957-form`（画像修正・user/storage） |

共通: 2606〜2608 の構築手順は [sandbox2606-2608_環境構築手順.md](../../firebaseプロジェクト/sandbox2606-2608_環境構築手順.md)。**test データ移行は完了**（Firestore import / 0004 / `pass_code.user_email` / Storage コピー。2026-10-10）。

**デプロイ予約候補**: 標準フローの `pick` は selectable な **sandbox2603〜2608** から空きを取る。占有中は奪わない。イベント→カートの無人ログインは、割当時の seed と outbox が揃った予約環境で行う。

## 予約（2026-10-04 初期）

| 予約 ID | 世代 | 環境 ID | Issue / branch | 所有者 | 状態 | 解放条件 | 備考 |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| `pstack-res-20261004-001` | 1 | sandbox2606 | #2398 / `doc/2398-pstack` | pstack 導入作業 | 切替済み（履歴） | — | 2026-10-04 に正本を 2603 へ切替 |
| `pstack-res-20261004-002` | 1 | **sandbox2603** | #2398 / `doc/2398-pstack` / PR 2399 | pstack 導入作業 | 切替済み（履歴） | — | 2026-10-04 時点の現行。その後別予約へ切替 |

2026-10-10 時点の現行予約は JSON 台帳を見る。2606 / 2607 / 2608 は selectable かつ空き。2603 は占有中（`fix/2423`）。占有中を奪わない。

**操作**:

- `pick`: 同じブランチなら継続。無ければ selectable かつ空きを1つ取る。空きが無ければ失敗
- `reconcile`: 予約の PR が MERGED / CLOSED なら空きに戻す。エージェントはマージしない
- `check`: push / dispatch 前に予約 ID と世代を確認する。`sandboxRemote` は証明にしない
- `switch`: 人が別ブランチ指定をしたときだけ世代を増やす
- `release`: 人が返却を指示したとき

## 残件

- イベント→カートの無人ログインは、2607 / 2608 に `FUNCTIONS_ENV` の outbox と割当時 seed（D-12）が要る
- Auth UID 一致の partner ユーザー作成、Scheduler 再開、sandbox `development` の本流追従は人作業
- 別マシンからの台帳共有は未実装
