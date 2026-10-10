# ブランチ ai/2449 レビュー記録

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [x] | RC-1 | 5478500812 | 👌 修正不要 | — | — | — | 👀 確認のみ | — | Copilot の目次。<br>discussion_r4237208059 を指す。<br>実体は RC-3。<br>目次自体に追加の修正要求はない。 |
| [x] | RC-2 | 4237215384 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | — | 📄 ドキュメントのみ | S | OTP 取得コマンドが 2603 固定。<br>verify スキル 88 行付近。<br>予約が 2606 以降だと OTP が取れない。<br>`$GCLOUD_PROJECT` に直した。 |
| [x] | RC-3 | 4237208059 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 📄 ドキュメントのみ | S | 2607 / 2608 でも C1 に進む手順だった。<br>verify スキル手順 1。<br>outbox 未設定だと SendGrid 実送信になり得る。<br>受け口未設定なら OTP 前に停止するよう書いた。 |
| [x] | RC-4 | 4237215380 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 📄 ドキュメントのみ | S | RC-3 と同じ outbox 未整備の指摘。<br>verify スキル手順 1。<br>pick が 2607 / 2608 を返すと C1 が失敗する。<br>RC-3 と同じ停止条件で解消した。 |
| [x] | RC-5 | 4237215388 | 👌 修正不要 | — | 📤 スコープ外 | — | 👀 確認のみ | — | partner Auth 未整備を理由に selectable を外す提案。<br>sandbox-pool の表。<br>本 PR の完了条件はデプロイ予約。<br>Auth は人作業の残件として既に書いてある。 |

---

## 評価セッション（2026-10-10 18:50・review-comments-evaluate）

- **評価日時**: 2026-10-10 18:50 JST
- **評価者**: Cursor Agent（`/review-comments-evaluate` auto）
- **ブランチ名**: `ai/2449`
- **PR**: https://github.com/nijuniinc/bokudeli-event-new/pull/2450
- **Outdated 除外件数**: 0
- **レビュー非該当スキップ件数**: 4
  - 6096206221 レビュー依頼定型文
  - 6096206511 Codex Review Summary / 接続案内
  - 6096224660 Copilot 問題なしのみ
  - 5478508163 Codex 接続案内ボイラープレート
- **重複除外**: なし
- **手順 4a 自動修正**: RC-2〜RC-4（🚨 0件 / 🟡 3件）
- **partial**: false

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [x] | RC-1 | 5478500812 | 👌 修正不要 | — | — | — | 👀 確認のみ | — | Copilot の目次。<br>discussion_r4237208059 を指す。<br>実体は RC-3。<br>目次自体に追加の修正要求はない。 |
| [x] | RC-2 | 4237215384 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | — | 📄 ドキュメントのみ | S | OTP 取得コマンドが 2603 固定。<br>verify スキル 88 行付近。<br>予約が 2606 以降だと OTP が取れない。<br>`$GCLOUD_PROJECT` に直した。 |
| [x] | RC-3 | 4237208059 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 📄 ドキュメントのみ | S | 2607 / 2608 でも C1 に進む手順だった。<br>verify スキル手順 1。<br>outbox 未設定だと SendGrid 実送信になり得る。<br>受け口未設定なら OTP 前に停止するよう書いた。 |
| [x] | RC-4 | 4237215380 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 📄 ドキュメントのみ | S | RC-3 と同じ outbox 未整備の指摘。<br>verify スキル手順 1。<br>pick が 2607 / 2608 を返すと C1 が失敗する。<br>RC-3 と同じ停止条件で解消した。 |
| [x] | RC-5 | 4237215388 | 👌 修正不要 | — | 📤 スコープ外 | — | 👀 確認のみ | — | partner Auth 未整備を理由に selectable を外す提案。<br>sandbox-pool の表。<br>本 PR の完了条件はデプロイ予約。<br>Auth は人作業の残件として既に書いてある。 |

---

**識別子**: RC-1（GitHub id: 5478500812）

**レビュワー**: Copilot

**指摘箇所**: （インライン指摘なし）

**該当コード（レビュー時点の diff）**:

```diff
（インライン指摘なし）
```

**レビュワーのコメント（原文）**:

<!-- ccr-overview-v2 -->

### 🟡 Changes recommended

outbox未設定のsandbox2607・2608でも無人ログインへ進み、SendGrid送信経路へフォールバックする手順になっています。

<details open>
<summary><strong>1 open finding</strong></summary>

- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/high-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/high-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/high-v2-light.png" alt="High severity" width="62" height="18" align="texttop"></picture> [outbox未設定環境でのOTP実送信を防止する](https://github.com/nijuniinc/bokudeli-event-new/pull/2450#discussion_r4237208059) · New
</details>

**コメント要約**: Copilot の目次。
discussion_r4237208059 を指す。
実体は RC-3。
目次自体に追加の修正要求はない。

**評価**: 👌 修正不要

**ステータス**: —

**PRスコープ**: —

**ラベル**: —

**変更種別**: 👀 確認のみ

**想定工数**: —

**判断理由**: リンク先のインラインは RC-3 として評価した。目次に独自の修正要求はない。

---

**識別子**: RC-2（GitHub id: 4237215384）

**レビュワー**: Codex

**指摘箇所**: `.agents/skills/shokujii-user-event-cart-verify/SKILL.md:8`

**該当コード（レビュー時点の diff）**:

```diff
@@ -5,7 +5,7 @@ description: Shokujii user アプリで、注文受付中イベントのメニ
 
 # user イベント → カート検証
 
-正本はこのファイル。正本経路は **予約 sandbox**（現状は sandbox2603）。`feature-map.md` は機能の地図、実行ログは `documents/AIエージェント/02_pstack/records/` に置く。2606〜2608 へはデータ構築の別 PR まで push / seed / `FUNCTIONS_ENV` 変更をしない。
+正本はこのファイル。正本経路は **予約 sandbox**（selectable な sandbox2603〜2608 のうち、台帳の現行予約）。`feature-map.md` は機能の地図、実行ログは `documents/AIエージェント/02_pstack/records/` に置く。予約のない環境へ push / seed / `FUNCTIONS_ENV` 変更をしない。
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  OTP の取得先を予約環境に追従させる**

この正本経路を sandbox2606〜2608 にも広げていますが、同じ手順の OTP 取得コマンドは88行目で `GCLOUD_PROJECT=bokudeli-event-yasu-2603` に固定されています。2606/2607/2608 を予約した場合、ブラウザは予約先で OTP を発行する一方、CLI は2603の Firestoreを検索するため `OTP がありません` で検証が停止します。seed コマンドと同様に台帳由来の `$GCLOUD_PROJECT` を使用してください。

AGENTS.md reference: [AGENTS.md:L56-L56](https://github.com/nijuniinc/bokudeli-event-new/blob/44d8435b3bb17ab8bb3bd0aad25c4cf2228eca9f/AGENTS.md#L56-L56)

Useful? React with 👍 / 👎.

**コメント要約**: OTP 取得コマンドが 2603 固定。
verify スキル 88 行付近。
予約が 2606 以降だと OTP が取れない。
`$GCLOUD_PROJECT` に直した。

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: —

**変更種別**: 📄 ドキュメントのみ

**想定工数**: S

**判断理由**: 冒頭は予約環境へ広げた一方、取得コマンド例だけ 2603 のままだった。seed と同じく `$GCLOUD_PROJECT` を使うのが一意。手順 4a で修正した。

---

**識別子**: RC-3（GitHub id: 4237208059）

**レビュワー**: Copilot

**指摘箇所**: `.agents/skills/shokujii-user-event-cart-verify/SKILL.md:22`

**該当コード（レビュー時点の diff）**:

```diff
@@ -19,7 +19,7 @@ D-05 / D-14 によりローカル UI と予約 sandbox の両方で C1〜C3 を
 
 dev サーバーは起動しない。ブラウザは Hosting URL を開く。
 
-1. [sandbox-pool.md](../../../documents/AIエージェント/02_pstack/records/sandbox-pool.md) で予約を確認する。正本 JSON の現在の作業ブランチに対応する予約 ID・世代・環境を取得する。#2398 の過去の予約 ID をコピーしない。現状の候補は **sandbox2603**。予約のない環境へ push / dispatch しない。2606〜2608 へはデータ構築の別 PR まで触れない。
+1. [sandbox-pool.md](../../../documents/AIエージェント/02_pstack/records/sandbox-pool.md) で予約を確認する。正本 JSON の現在の作業ブランチに対応する予約 ID・世代・環境を取得する。#2398 の過去の予約 ID をコピーしない。候補は **sandbox2603〜2608**。予約のない環境へ push / dispatch しない。
```

**レビュワーのコメント（原文）**:

[must] ここで検証先を全 selectable 環境へ広げると、`sandbox2607` / `sandbox2608` が予約された場合にも後続の OTP 手順へ進みますが、`sandbox-pool.md:45` では両環境の `FUNCTIONS_ENV` outbox が未設定です。未設定時は `deliverUserPassCodeForLogin` が `off` と判定して SendGrid を呼ぶため、無人検証が失敗するだけでなく「通常検証で実送信しない」という F-2-2 の条件も満たしません。冒頭の対象記述も含め、outbox 設定済み環境だけを検証候補に制限するか、OTP 発行前に設定を確認して未整備環境では停止してください。

**コメント要約**: 2607 / 2608 でも C1 に進む手順だった。
verify スキル手順 1。
outbox 未設定だと SendGrid 実送信になり得る。
受け口未設定なら OTP 前に停止するよう書いた。

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 🐛 実害

**変更種別**: 📄 ドキュメントのみ

**想定工数**: S

**判断理由**: デプロイ予約候補を外すと #2449 の目的と衝突する。検証スキル側で受け口未設定なら停止するのが本 PR 内の一意な直し方。手順 4a で修正した。selectable は維持する。

---

**識別子**: RC-4（GitHub id: 4237215380）

**レビュワー**: Codex

**指摘箇所**: `.agents/skills/shokujii-user-event-cart-verify/SKILL.md:22`

**該当コード（レビュー時点の diff）**:

```diff
@@ -19,7 +19,7 @@ D-05 / D-14 によりローカル UI と予約 sandbox の両方で C1〜C3 を
 
 dev サーバーは起動しない。ブラウザは Hosting URL を開く。
 
-1. [sandbox-pool.md](../../../documents/AIエージェント/02_pstack/records/sandbox-pool.md) で予約を確認する。正本 JSON の現在の作業ブランチに対応する予約 ID・世代・環境を取得する。#2398 の過去の予約 ID をコピーしない。現状の候補は **sandbox2603**。予約のない環境へ push / dispatch しない。2606〜2608 へはデータ構築の別 PR まで触れない。
+1. [sandbox-pool.md](../../../documents/AIエージェント/02_pstack/records/sandbox-pool.md) で予約を確認する。正本 JSON の現在の作業ブランチに対応する予約 ID・世代・環境を取得する。#2398 の過去の予約 ID をコピーしない。候補は **sandbox2603〜2608**。予約のない環境へ push / dispatch しない。
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P1 Badge](https://img.shields.io/badge/P1-orange?style=flat)</sub></sub>  未整備の sandbox をイベント検証候補から除外する**

この候補拡大により `sandbox_reservation.py pick` は任意の selectable 環境を返しますが、`sandbox-pool.md` の残件には sandbox2607/2608 で `FUNCTIONS_ENV` の outbox が未整備と明記されています。2603/2606 が占有中の場合、この手順は未整備環境を選び、検証用メールが outbox に記録されないため OTP を取得できず C1 が必ず失敗します。outbox 準備済みの環境だけを検証候補にするか、予約前に検証能力を判定してください。

AGENTS.md reference: [AGENTS.md:L56-L56](https://github.com/nijuniinc/bokudeli-event-new/blob/44d8435b3bb17ab8bb3bd0aad25c4cf2228eca9f/AGENTS.md#L56-L56)

Useful? React with 👍 / 👎.

**コメント要約**: RC-3 と同じ outbox 未整備の指摘。
verify スキル手順 1。
pick が 2607 / 2608 を返すと C1 が失敗する。
RC-3 と同じ停止条件で解消した。

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 🐛 実害

**変更種別**: 📄 ドキュメントのみ

**想定工数**: S

**判断理由**: RC-3 と同じ論点。selectable を狭めず、無人ログイン前の停止条件で対応した。

---

**識別子**: RC-5（GitHub id: 4237215388）

**レビュワー**: Codex

**指摘箇所**: `documents/AIエージェント/02_pstack/records/sandbox-pool.md:20`

**該当コード（レビュー時点の diff）**:

```diff
@@ -8,27 +8,29 @@
 
 コマンドは [`.agents/scripts/sandbox_reservation.py`](../../../../.agents/scripts/sandbox_reservation.py)（`pick` / `reconcile` / `check` / `switch` / `release`）。このファイルは説明用の写しである。
 
-最終棚卸し: **2026-10-04**（GitHub API・workflow 実行履歴。Firebase コンソールのデータ内容は未確認）
+最終棚卸し: **2026-10-10**（台帳 `selectable` と Hosting の画像修正。予約の正本は JSON）
 
 ## 環境一覧（F-2-1）
 
 | 環境 ID | git remote | GitHub リポジトリ | GCP / Firebase プロジェクト | user URL | partner URL | selectable | 直近の feature 系 branch | 直近 user デプロイ |
 | --- | --- | --- | --- | --- | --- | :---: | --- | --- |
-| sandbox2603 | `sandbox2603` | `nijuni-yasu/bokudeli-event-yasu-2603-2` | `bokudeli-event-yasu-2603` | https://bokudeli-event-yasu-2603.web.app | https://bokudeli-event-yasu-2603-admin.web.app | はい | `doc/2398-pstack` | 2026-10-04 `doc/2398-pstack` 成功（`e97ee241b`） |
-| sandbox2606 | `sandbox2606` | `nijuni-yasu/bokudeli-event-yasu-2606` | `bokudeli-event-yasu-2606` | https://bokudeli-event-yasu-2606.web.app | https://bokudeli-event-yasu-2606-admin.web.app | いいえ | なし（`development` のみ運用痕跡） | 2026-08-31 `development` 成功 |
-| sandbox2607 | `sandbox2607` | `nijuni-yasu/bokudeli-event-yasu-2607` | `bokudeli-event-yasu-2607` | https://bokudeli-event-yasu-2607.web.app | https://bokudeli-event-yasu-2607-admin.web.app | いいえ | なし | 2026-08-30 `development` 成功 |
-| sandbox2608 | `sandbox2608` | `nijuni-yasu/bokudeli-event-yasu-2608` | `bokudeli-event-yasu-2608` | https://bokudeli-event-yasu-2608.web.app | https://bokudeli-event-yasu-2608-admin.web.app | いいえ | `feat/957-form`（2026-10-01 storage/user デプロイあり） | 2026-10-01 `feat/957-form` 成功 |
+| sandbox2603 | `sandbox2603` | `nijuni-yasu/bokudeli-event-yasu-2603-2` | `bokudeli-event-yasu-2603` | https://bokudeli-event-yasu-2603.web.app | https://bokudeli-event-yasu-2603-admin.web.app | はい | `fix/2423`（台帳の現行予約） | 2026-10-09 `fix/2423` |
+| sandbox2606 | `sandbox2606` | `nijuni-yasu/bokudeli-event-yasu-2606` | `bokudeli-event-yasu-2606` | https://bokudeli-event-yasu-2606.web.app | https://bokudeli-event-yasu-2606-admin.web.app | はい | `doc/2398-pstack` | 2026-10-10 `doc/2398-pstack`（画像修正・user/storage） |
+| sandbox2607 | `sandbox2607` | `nijuni-yasu/bokudeli-event-yasu-2607` | `bokudeli-event-yasu-2607` | https://bokudeli-event-yasu-2607.web.app | https://bokudeli-event-yasu-2607-admin.web.app | はい | なし（Hosting は `development`） | 2026-10-10 `development`（画像修正・user/storage） |
+| sandbox2608 | `sandbox2608` | `nijuni-yasu/bokudeli-event-yasu-2608` | `bokudeli-event-yasu-2608` | https://bokudeli-event-yasu-2608.web.app | https://bokudeli-event-yasu-2608-admin.web.app | はい | `feat/957-form` | 2026-10-10 `feat/957-form`（画像修正・user/storage） |
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P1 Badge](https://img.shields.io/badge/P1-orange?style=flat)</sub></sub>  partner 検証未整備の環境を selectable にしない**

2606〜2608を一律 selectable にしていますが、同じ台帳の残件には「Auth UID 一致の partner ユーザー作成」が未完了とあり、構築手順の §6.3 でもこのユーザーが無いと移行済み `partners/{uid}` に紐づく店舗・イベントを取得できないと説明されています。標準フローは user・partner の両方を対象とし、`pick` にはアプリ別の能力判定がないため、partner の変更がこれらの環境に割り当てられるとデプロイ後のログイン・動作確認を完遂できません。UID を一致させた Auth ユーザーを用意してから selectable にするか、partner 対応可否を予約条件に含めてください。

AGENTS.md reference: [AGENTS.md:L58-L58](https://github.com/nijuniinc/bokudeli-event-new/blob/44d8435b3bb17ab8bb3bd0aad25c4cf2228eca9f/AGENTS.md#L58-L58)

Useful? React with 👍 / 👎.

**コメント要約**: partner Auth 未整備を理由に selectable を外す提案。
sandbox-pool の表。
本 PR の完了条件はデプロイ予約。
Auth は人作業の残件として既に書いてある。

**評価**: 👌 修正不要

**ステータス**: —

**PRスコープ**: 📤 スコープ外

**ラベル**: —

**変更種別**: 👀 確認のみ

**想定工数**: —

**判断理由**: Issue #2449 と承認済み方針は、空きがあれば 2603〜2608 へ push / デプロイできることまで。partner Auth は人作業として残件に残す。selectable を戻すと本 PR の目的と衝突する。

---
