# ブランチ feat/2174 レビュー記録

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [ ] | RC-1 | なし | 🚨 必須修正 | 未着手 | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | `Rejected` を含む clientError が通知から除外されます。<br>`shokujii-functions-error.filter:10` の部分一致が原因です。<br>従来の完全一致より除外範囲が広がり、要対応エラーを見逃します。<br>`Rejected` / `rejected` の完全一致に戻してください。 |
| [ ] | RC-2 | なし | 🚨 必須修正 | 未着手 | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | 同じ `user_id` が別の resource/revision 時系列に分かれると複数人として数えられます。<br>`shokujii-failed-to-fetch-multi-user-policy.json:10` の `count` が全時系列を数えるためです。<br>実ユーザー数より早く5人しきい値へ達する可能性があります。<br>`user_id` ごとに集約してから人数を数えてください。 |

---

## 評価セッション（2026-10-11 14:25・shokujii-code-review）

- **評価日時**: 2026-10-11 14:25 JST
- **評価者**: Copilot（shokujii-code-review）
- **ブランチ名**: feat/2174
- **PR**: https://github.com/nijuniinc/bokudeli-event-new/pull/2465
- **Outdated 除外件数**: 該当なし
- **レビュー非該当スキップ件数**: 該当なし
- **重複除外**: なし

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [ ] | RC-1 | なし | 🚨 必須修正 | 未着手 | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | `Rejected` を含む clientError が通知から除外されます。<br>`shokujii-functions-error.filter:10` の部分一致が原因です。<br>従来の完全一致より除外範囲が広がり、要対応エラーを見逃します。<br>`Rejected` / `rejected` の完全一致に戻してください。 |
| [ ] | RC-2 | なし | 🚨 必須修正 | 未着手 | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | 同じ `user_id` が別の resource/revision 時系列に分かれると複数人として数えられます。<br>`shokujii-failed-to-fetch-multi-user-policy.json:10` の `count` が全時系列を数えるためです。<br>実ユーザー数より早く5人しきい値へ達する可能性があります。<br>`user_id` ごとに集約してから人数を数えてください。 |

---

**識別子**: RC-1（GitHub id: なし・エージェントレビュー）

**レビュワー**: Copilot（shokujii-code-review）

**指摘箇所**: `documents/09_運営向け機能/monitoring/shokujii-functions-error.filter:10`

**該当コード（レビュー時点の diff）**:

```diff
+    OR jsonPayload.error_message=~"Rejected"
```

**レビュワーのコメント（原文）**:

🚨 **必須修正** [🔧微修正/S]: `Rejected` の部分一致で、`Rejected` を含む別の clientError まで通常の1件通知から除外されます。既存の `isServiceWorkerStandaloneRejected` は部分一致が正当な ERROR を誤除外すると明記しており、通知対象まで狭まります。`"Rejected"` と `"rejected"` の完全一致条件に戻してください。

**コメント要約**: `Rejected` を含む clientError が通知から除外されます。<br>`shokujii-functions-error.filter:10` の部分一致が原因です。<br>従来の完全一致より除外範囲が広がり、要対応エラーを見逃します。<br>`Rejected` / `rejected` の完全一致に戻してください。

**評価**: 🚨 必須修正

**ステータス**: 未着手

**PRスコープ**: 📌 スコープ内

**ラベル**: 🐛 実害

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: 既存の完全一致条件を部分一致へ変えると、通知対象のエラーまで抑制されます。共通フィルターと仕様書の同期範囲内で修正できます。

---

**識別子**: RC-2（GitHub id: なし・エージェントレビュー）

**レビュワー**: Copilot（shokujii-code-review）

**指摘箇所**: `documents/09_運営向け機能/monitoring/shokujii-failed-to-fetch-multi-user-policy.json:10`

**該当コード（レビュー時点の diff）**:

```diff
+        "query": "count(increase(logging_googleapis_com:user_client_failed_to_fetch[10m]) > 0) >= 5",
```

**レビュワーのコメント（原文）**:

🚨 **必須修正** [🔧微修正/S]: この `count` は `user_id` だけでなく Cloud Monitoring の resource/revision ラベルで分かれた時系列も別々に数えます。同じユーザーのログが複数時系列に分かれた場合に5人未満でも発報しうるため、`user_id` ごとに `increase(...) > 0` の結果を集約してから、その人数を数えてください（例: `count(count by (user_id) (increase(...[10m]) > 0)) >= 5`）。

**コメント要約**: 同じ `user_id` が別の resource/revision 時系列に分かれると複数人として数えられます。<br>`shokujii-failed-to-fetch-multi-user-policy.json:10` の `count` が全時系列を数えるためです。<br>実ユーザー数より早く5人しきい値へ達する可能性があります。<br>`user_id` ごとに集約してから人数を数えてください。

**評価**: 🚨 必須修正

**ステータス**: 未着手

**PRスコープ**: 📌 スコープ内

**ラベル**: 🐛 実害

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: PromQL の `count` はラベルセットごとの時系列を数えるため、ユーザー単位で事前集約しないと resource/revision の違いで同一ユーザーを重複計上します。しきい値要件を満たすための修正です。
