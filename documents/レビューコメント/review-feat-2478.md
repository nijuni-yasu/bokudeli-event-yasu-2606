# ブランチ feat/2478 レビュー記録

PR #2479（アプリ内マニュアルの追加）のレビュー記録。RC 番号はブランチ内で通し。

### RC 一覧（サマリ）

**ブランチ全体の RC 通し表**

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [x] | RC-1 | 5556716278 | 👌 修正不要 | — | — | — | 👀 確認のみ | — | Copilot の review overview（6 件の open issues の目次）<br>対象は ManualViewer.vue・organizerManual.ts・partnerManual.ts の各インライン<br>指摘の実体は個別のインラインコメントで評価する<br>目次自体に追加の修正要求はない |
| [x] | RC-2 | 4301804991 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 📄 ドキュメントのみ | S | レビュー基準ドキュメントの OK 例で import が `// OK:` コメントと同じ行に結合された<br>`.agents/skills/shokujii-code-review/shokujii-code-review.md:567`<br>サンプルをコピーすると関数が未定義になり、正本の品質が下がる<br>prettier の自動整形が原因。ファイルを元に戻して追記分だけ再適用 |
| [x] | RC-3 | 4301805000 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 📄 ドキュメントのみ | S | AGENTS.md のバックフィル手順のリンクと `enterprise_id` が `*` に壊れた<br>`AGENTS.md:74`（関連リポジトリの節）<br>実在する仕様書へのリンクが切れ、識別子も誤記になる<br>prettier の自動整形が原因。ファイルを元に戻して追記分だけ再適用 |
| [x] | RC-4 | 4301798657 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | 検索欄の clearable で値が null になり `keyword.value.trim()` が TypeError<br>`ManualViewer.vue:23`（絞り込みの computed）<br>検索語を入力してクリアアイコンを押すと再描画に失敗し、両アプリで画面が壊れる<br>keyword を `string | null` にし、null を空文字として扱う |
| [x] | RC-5 | 4301804979 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | `route.hash` を onMounted で 1 回だけ読むため、ハッシュだけが変わる遷移で移動しない<br>`ManualViewer.vue:49`（scrollToHash）<br>`/manual#a` から `/manual#b` への遷移や戻る・進むでセクションに飛ばない<br>`watch(() => route.hash, scrollToHash)` を追加 |
| [x] | RC-6 | 4301798690 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭, 👤 UX | 🔧 微修正 | S | 請求書払いでも「金額指定おごり」で自己負担が残ると、参加者の事前決済が必要<br>`organizerManual.ts:405`（支払い設定）と 693 行目（請求書払い）<br>「事前決済なしで注文できる」と案内しており、実際の決済要否を誤解させる<br>自己負担が 0 円でない場合は差額を事前決済する旨を併記 |
| [x] | RC-7 | 4301798703 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭 | 🔧 微修正 | S | 最小催行人数による中止の返金を「全額」と案内している<br>`organizerManual.ts:431`（最小催行人数）<br>返金対象は食事代の自己負担分のみで、システム利用料は返金されない<br>「食事代が返金され、システム利用料は返金されません」に修正 |
| [x] | RC-8 | 4301804994 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | 配信済みレターを開いて「下書きに戻す」ができると案内したが、一覧に導線がない<br>`organizerManual.ts:619`（レター）<br>LetterTable は配信済みの「編集」を非表示にし「コピー」だけ出す。存在しない導線を探させる<br>該当の手順を削除 |
| [x] | RC-9 | 4301804998 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | 「イベントの参加者が0人のときは配信できない」がすべての配信先に読める<br>`organizerManual.ts:625`（レターの注意書き）<br>「イベント未登録者」宛ては参加者 0 人でも配信できるため、案内が実際より厳しい<br>配信先が「イベント参加者」の場合に限定 |
| [x] | RC-10 | 4301798715 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭 | 🔧 微修正 | S | 「金額指定おごり」の請求書払い手数料は主催者負担額に対して計算される<br>`organizerManual.ts:695`（請求書払い）と 409 行目（支払い設定）<br>「注文金額の10%」と案内しており、請求金額を実際より高く誤解させる<br>全額おごりは注文金額、金額指定おごりはおごり金額の合計に対する 10% と明記 |
| [x] | RC-11 | 4301804988 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭, 👤 UX | 🔧 微修正 | S | 「参加者や主催者はオンライン決済済み」と全イベントに言い切っている<br>`partnerManual.ts:32`（導入の流れ STEP 7）<br>請求書払いのイベントでは主催者はイベント終了後に請求書で支払うため、入金状況を誤解させる<br>支払い設定によって決済時期が異なる旨に書き換え |
| [x] | RC-12 | 4301798732 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | 限定食数の注意書きが「イベントを差し戻して再度予約承認」と案内している<br>`partnerManual.ts:242`（メニュー設定）<br>注文受付中のイベントを店舗が差し戻す操作はなく、手順が実行できない<br>予約承認前に限定食数を含むメニュー設定を確認する案内に変更 |
| [x] | RC-13 | 4301798750 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭, 👤 UX | 🔧 微修正 | S | 最小催行人数の中止条件が「以下」になっていた（実装は「未満」）<br>`partnerManual.ts:347`（予約の承認と変更依頼）<br>設定人数ちょうどでも中止されると店舗が誤解する。判定対象も店舗提供品目の注文者のみ<br>「店舗が提供する品目を注文済みの人数が最小催行人数に満たない場合」に修正し、ちょうどなら開催と明記 |
| [x] | RC-14 | 4301804973 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | `Date.parse` は `2026-02-30` を 3 月に繰り上げるため無効な更新日を通す<br>`validateManual.ts:40`（updatedAt の検証）<br>存在しない日付が検証とテストをすり抜けて画面に表示される<br>ISO 文字列へ往復変換して元の文字列と一致するかで検証し、テストを追加 |
| [x] | RC-15 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | テーマ色を `#0f7a3b` などの 16 進数で直接指定している<br>`ManualViewer.vue` の `--manual-accent-strong` / `--manual-warning-strong`（ダークテーマ用を含む）<br>テーマの色を変えても、マニュアルの緑・琥珀色の文字だけが追従しない<br>テーマの色を `color-mix` で暗く・明るくした値に置き換える |
| [x] | RC-16 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | アンカーの接頭辞 `manual-` を 3 つのコンポーネントがそれぞれ書いている<br>`ManualViewer.vue` の `ANCHOR_PREFIX`、`ManualToc.vue` の `ANCHOR_PREFIX`、`ManualSection.vue` の `manual-${id}`<br>どれか 1 つだけ変えると、目次のリンクと項目の `id` がずれて移動できなくなる<br>`manualView.ts` に `MANUAL_ANCHOR_PREFIX` と `getManualAnchorId` を置いて集約する |
| [x] | RC-17 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | 待ち時間・回数が `20`・`30`・`50`・`0` の数値のまま書かれている<br>`ManualViewer.vue` の `waitForScrollUnlock` と、下から開く目次の送り処理<br>何のための数値か読み取れず、調整するときに意図が分からない<br>名前付きの定数と `sleep` 関数にまとめる |
| [x] | RC-18 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | フォーカス表示のセレクタ `.manual-sheet a:focus-visible` が、どの要素にも当たらない<br>`ManualViewer.vue` の scoped スタイル末尾（下から開く目次の中のリンクは、子コンポーネント側の要素）<br>使われないスタイルが残り、キーボード操作の見た目を担っていると誤解される<br>削除し、章へのリンク（`.manual-chip`）のフォーカス表示に置き換える |

---

## 評価セッション（2026-10-17 16:00・review-comments-evaluate）

- **評価日時**: 2026-10-17 16:00 JST
- **評価者**: Claude Code（`/review-comments-evaluate` auto）
- **ブランチ名**: `feat/2478`
- **PR**: https://github.com/nijuniinc/bokudeli-event-new/pull/2479（REVIEW_REQUEST_SINCE=2026-10-17T06:45:16Z、partial=false）
- **Outdated 除外件数**: 0
- **レビュー非該当スキップ件数**: 3（レビュー依頼の定型文 6230832848 / Codex 接続案内・サマリ表のみ 6230834127 / Codex review 本文の接続案内のみ 5556723262）
- **重複除外**: 4301804965 → 既存 RC-4、差分なし / 4301804983 → 既存 RC-7、差分なし / 4301804968 → 既存 RC-13、差分なし / 6230878231（Copilot 会話コメント）→ 既存 RC-13、差分なし

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [x] | RC-1 | 5556716278 | 👌 修正不要 | — | — | — | 👀 確認のみ | — | Copilot の review overview（6 件の open issues の目次）<br>対象は ManualViewer.vue・organizerManual.ts・partnerManual.ts の各インライン<br>指摘の実体は個別のインラインコメントで評価する<br>目次自体に追加の修正要求はない |
| [x] | RC-2 | 4301804991 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 📄 ドキュメントのみ | S | レビュー基準ドキュメントの OK 例で import が `// OK:` コメントと同じ行に結合された<br>`.agents/skills/shokujii-code-review/shokujii-code-review.md:567`<br>サンプルをコピーすると関数が未定義になり、正本の品質が下がる<br>prettier の自動整形が原因。ファイルを元に戻して追記分だけ再適用 |
| [x] | RC-3 | 4301805000 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 📄 ドキュメントのみ | S | AGENTS.md のバックフィル手順のリンクと `enterprise_id` が `*` に壊れた<br>`AGENTS.md:74`（関連リポジトリの節）<br>実在する仕様書へのリンクが切れ、識別子も誤記になる<br>prettier の自動整形が原因。ファイルを元に戻して追記分だけ再適用 |
| [x] | RC-4 | 4301798657 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | 検索欄の clearable で値が null になり `keyword.value.trim()` が TypeError<br>`ManualViewer.vue:23`（絞り込みの computed）<br>検索語を入力してクリアアイコンを押すと再描画に失敗し、両アプリで画面が壊れる<br>keyword を `string | null` にし、null を空文字として扱う |
| [x] | RC-5 | 4301804979 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | `route.hash` を onMounted で 1 回だけ読むため、ハッシュだけが変わる遷移で移動しない<br>`ManualViewer.vue:49`（scrollToHash）<br>`/manual#a` から `/manual#b` への遷移や戻る・進むでセクションに飛ばない<br>`watch(() => route.hash, scrollToHash)` を追加 |
| [x] | RC-6 | 4301798690 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭, 👤 UX | 🔧 微修正 | S | 請求書払いでも「金額指定おごり」で自己負担が残ると、参加者の事前決済が必要<br>`organizerManual.ts:405`（支払い設定）と 693 行目（請求書払い）<br>「事前決済なしで注文できる」と案内しており、実際の決済要否を誤解させる<br>自己負担が 0 円でない場合は差額を事前決済する旨を併記 |
| [x] | RC-7 | 4301798703 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭 | 🔧 微修正 | S | 最小催行人数による中止の返金を「全額」と案内している<br>`organizerManual.ts:431`（最小催行人数）<br>返金対象は食事代の自己負担分のみで、システム利用料は返金されない<br>「食事代が返金され、システム利用料は返金されません」に修正 |
| [x] | RC-8 | 4301804994 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | 配信済みレターを開いて「下書きに戻す」ができると案内したが、一覧に導線がない<br>`organizerManual.ts:619`（レター）<br>LetterTable は配信済みの「編集」を非表示にし「コピー」だけ出す。存在しない導線を探させる<br>該当の手順を削除 |
| [x] | RC-9 | 4301804998 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | 「イベントの参加者が0人のときは配信できない」がすべての配信先に読める<br>`organizerManual.ts:625`（レターの注意書き）<br>「イベント未登録者」宛ては参加者 0 人でも配信できるため、案内が実際より厳しい<br>配信先が「イベント参加者」の場合に限定 |
| [x] | RC-10 | 4301798715 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭 | 🔧 微修正 | S | 「金額指定おごり」の請求書払い手数料は主催者負担額に対して計算される<br>`organizerManual.ts:695`（請求書払い）と 409 行目（支払い設定）<br>「注文金額の10%」と案内しており、請求金額を実際より高く誤解させる<br>全額おごりは注文金額、金額指定おごりはおごり金額の合計に対する 10% と明記 |
| [x] | RC-11 | 4301804988 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭, 👤 UX | 🔧 微修正 | S | 「参加者や主催者はオンライン決済済み」と全イベントに言い切っている<br>`partnerManual.ts:32`（導入の流れ STEP 7）<br>請求書払いのイベントでは主催者はイベント終了後に請求書で支払うため、入金状況を誤解させる<br>支払い設定によって決済時期が異なる旨に書き換え |
| [x] | RC-12 | 4301798732 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 👤 UX | 🔧 微修正 | S | 限定食数の注意書きが「イベントを差し戻して再度予約承認」と案内している<br>`partnerManual.ts:242`（メニュー設定）<br>注文受付中のイベントを店舗が差し戻す操作はなく、手順が実行できない<br>予約承認前に限定食数を含むメニュー設定を確認する案内に変更 |
| [x] | RC-13 | 4301798750 | 🚨 必須修正 | ✅ 対応済み | 📌 スコープ内 | 💰 金銭, 👤 UX | 🔧 微修正 | S | 最小催行人数の中止条件が「以下」になっていた（実装は「未満」）<br>`partnerManual.ts:347`（予約の承認と変更依頼）<br>設定人数ちょうどでも中止されると店舗が誤解する。判定対象も店舗提供品目の注文者のみ<br>「店舗が提供する品目を注文済みの人数が最小催行人数に満たない場合」に修正し、ちょうどなら開催と明記 |
| [x] | RC-14 | 4301804973 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 🐛 実害 | 🔧 微修正 | S | `Date.parse` は `2026-02-30` を 3 月に繰り上げるため無効な更新日を通す<br>`validateManual.ts:40`（updatedAt の検証）<br>存在しない日付が検証とテストをすり抜けて画面に表示される<br>ISO 文字列へ往復変換して元の文字列と一致するかで検証し、テストを追加 |

---

**識別子**: RC-1（GitHub id: 5556716278）

**レビュワー**: Copilot

**指摘箇所**: PR トップレベル（レビュー本文）

**該当コード（レビュー時点の diff）**:

（インライン指摘なし）

**レビュワーのコメント（原文）**:

<!-- ccr-overview-v2 -->

### 🟡 Changes recommended

検索クリア時の例外と、決済・返金・中止条件・操作手順の誤案内を修正する必要があります。

<details open>
<summary><strong>6 open issues</strong></summary>

- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/medium-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/medium-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/medium-v2-light.png" alt="Medium severity" width="62" height="18" align="texttop"></picture> [検索クリア時のnullでtrimがエラーになる](https://github.com/nijuniinc/bokudeli-event-new/pull/2479#discussion_r4301798657) · New
- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.png" alt="Low severity" width="62" height="18" align="texttop"></picture> [請求書払いの事前決済と主催者後払いの説明が不正確](https://github.com/nijuniinc/bokudeli-event-new/pull/2479#discussion_r4301798690) · New
- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.png" alt="Low severity" width="62" height="18" align="texttop"></picture> [中止時の返金対象にシステム利用料を含めない](https://github.com/nijuniinc/bokudeli-event-new/pull/2479#discussion_r4301798703) · New
- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.png" alt="Low severity" width="62" height="18" align="texttop"></picture> [金額指定おごりの手数料計算対象を主催者負担額と明記する](https://github.com/nijuniinc/bokudeli-event-new/pull/2479#discussion_r4301798715) · New
- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.png" alt="Low severity" width="62" height="18" align="texttop"></picture> [予約承認前に限定食数を確認する手順へ修正する](https://github.com/nijuniinc/bokudeli-event-new/pull/2479#discussion_r4301798732) · New
- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.png" alt="Low severity" width="62" height="18" align="texttop"></picture> [最小催行人数の境界条件を「未満」に修正する](https://github.com/nijuniinc/bokudeli-event-new/pull/2479#discussion_r4301798750) · New
</details>

<details>
<summary><strong>What changed in this PR</strong></summary>

主催者・飲食店向けの操作案内をアプリ内に集約し、機能変更に合わせて更新する仕組みを追加します。

**変更内容:**
- 両アプリにマニュアルページとメニュー導線を追加。
- 目次・検索・セクションへのジャンプに対応した共通ビューアと本文検証テストを追加。
- マニュアル更新ルールをスキル・レビューチェックリスト・PRテンプレートに反映。

| File | Description |
| ---- | ----------- |
| user/​src/​router/​utils.ts | マニュアルのパス関数を追加 |
| user/​src/​pages/​manage/​manual.vue | 主催者向けページを追加 |
| user/​src/​navigation/​manage.ts | メニュー最下部に導線を追加 |
| partner/​src/​pages/​manual.vue | 飲食店向けページを追加 |
| partner/​src/​navigation/​utils.ts | マニュアルのパス関数を追加 |
| partner/​src/​navigation/​index.ts | 外部マニュアルをアプリ内導線に置換 |
| partner/​src/​locales/​messages/​ja.ts | 不要な旧メニュー文言を削除 |
| base/​src/​manual/​validateManual.ts | 本文検証と検索用文字列生成を追加 |
| base/​src/​manual/​types.ts | マニュアルの共通型を定義 |
| base/​src/​manual/​partnerManual.ts | 飲食店向け操作案内を追加 |
| base/​src/​manual/​organizerManual.ts | 主催者向け操作案内を追加 |
| base/​src/​manual/​manual.test.ts | データ整合性と検索のテストを追加 |
| base/​src/​locales/​messages/​ja.ts | ビューアの共通文言を追加 |
| base/​src/​components/​manual/​ManualViewer.vue | 共通ビューアを追加 |
| AGENTS.md | マニュアル更新ルールを追加 |
| .github/​pull_request_template.md | 更新内容の記入欄を追加 |
| .agents/​skills/​shokujii-code-review/​shokujii-code-review.md | 更新確認項目を追加 |
| .agents/​skills/​manual-update/​SKILL.md | マニュアル更新手順を新設 |
</details>

<sub>Review effort: Balanced</sub>

**コメント要約**:
- Copilot の review overview（6 件の open issues の目次）
- 対象は ManualViewer.vue・organizerManual.ts・partnerManual.ts の各インライン
- 指摘の実体は個別のインラインコメントで評価する
- 目次自体に追加の修正要求はない

**評価**: 👌 修正不要

**ステータス**: —

**PRスコープ**: —

**ラベル**: —

**変更種別**: 👀 確認のみ

**想定工数**: —

**判断理由**: 目次内の 6 件（discussion_r4301798657 / 690 / 703 / 715 / 732 / 750）はいずれもインライン取得結果にあり、RC-4・6・7・10・12・13 として評価済み。目次自体に修正要求は無い。

---

**識別子**: RC-2（GitHub id: 4301804991）

**レビュワー**: Codex

**指摘箇所**: `.agents/skills/shokujii-code-review/shokujii-code-review.md:567`

**該当コード（レビュー時点の diff）**:

```diff
@@ -559,8 +564,7 @@ vue-i18n の datetimeFormats は廃止済み。新規実装では `common` の L
 // NG: vue-i18n datetimeFormats に依存する
 {{ $d(event.event_start_datetime, 'datetime_weekday_short') }}
 
-// OK: common の convertToXxx を使う
-import { convertToDatetimeWeekdayShort } from '@shokujii/common/utils/datetime.js'
+// OK: common の convertToXxx を使う import { convertToDatetimeWeekdayShort } from '@shokujii/common/utils/datetime.js'
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P3 Badge](https://img.shields.io/badge/P3-lightgrey?style=flat)</sub></sub>  OK例の import をコメントから分離する**

この変更で `import { convertToDatetimeWeekdayShort } ...` が直前の `// OK:` コメントと同じ行へ結合され、サンプルをコピーすると関数が未定義のままになります。このファイルはレビュー時の正本として参照されるため、import を元どおり独立した行へ戻してください。

AGENTS.md reference: [AGENTS.md:L298-L303](https://github.com/nijuniinc/bokudeli-event-new/blob/8d9acc9e6e35f2cb831a76c13c680170417bdee8/AGENTS.md#L298-L303)

Useful? React with 👍 / 👎.

<!-- codex-code-review-finding:v1 -->

**コメント要約**:
- レビュー基準ドキュメントの OK 例で import が `// OK:` コメントと同じ行に結合された
- `.agents/skills/shokujii-code-review/shokujii-code-review.md:567`
- サンプルをコピーすると関数が未定義になり、正本の品質が下がる
- prettier の自動整形が原因。ファイルを元に戻して追記分だけ再適用

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 📏 規約

**変更種別**: 📄 ドキュメントのみ

**想定工数**: S

**判断理由**: 本 PR で `prettier --write` をレビュー基準ファイルにも掛けたことによる意図しない整形。`origin/development` の内容に戻し、マニュアル確認項目の追記だけを再適用して解消した（差分は追記 6 行のみ）。

---

**識別子**: RC-3（GitHub id: 4301805000）

**レビュワー**: Codex

**指摘箇所**: `AGENTS.md:74`

**該当コード（レビュー時点の diff）**:

```diff
@@ -66,30 +67,30 @@ AIエージェント向けプロジェクトガイド。
 
 ## 関連リポジトリ
 
-| リポジトリ | 役割 |
-| :-- | :-- |
+| リポジトリ                                                                            | 役割                                                                               |
+| :------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------- |
 | [`nijuniinc/bokudeli-event-batch`](https://github.com/nijuniinc/bokudeli-event-batch) | Firestore 既存データの backfill / migration など、アプリ本体外で実行するバッチ処理 |
 
-既存 Firestore データへの backfill は、原則として本リポジトリの `functions/default` ではなく `bokudeli-event-batch` 側で実装・実行する。アプリ本体側は schema / converter / store / Rules / index / テストを整備する。エンプラ MVP の enterprise_id null materialize バックフィル手順は [documents/08_エンタープライズ/00_計画/02_developmentマージ.md](documents/08_エンタープライズ/00_計画/02_developmentマージ.md) §2.4 を参照。
+既存 Firestore データへの backfill は、原則として本リポジトリの `functions/default` ではなく `bokudeli-event-batch` 側で実装・実行する。アプリ本体側は schema / converter / store / Rules / index / テストを整備する。エンプラ MVP の enterprise*id null materialize バックフィル手順は [documents/08*エンタープライズ/00*計画/02_developmentマージ.md](documents/08*エンタープライズ/00\_計画/02_developmentマージ.md) §2.4 を参照。
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  AGENTS.md のバックフィル手順リンクを復元する**

この変更で実在する `documents/08_エンタープライズ/00_計画/02_developmentマージ.md` のアンダースコアがアスタリスクへ置き換わり、リンク先が存在しないパスになっています。同時にフィールド名 `enterprise_id` も `enterprise*id` へ壊れているため、元の識別子とリンク先を復元してください。

Useful? React with 👍 / 👎.

<!-- codex-code-review-finding:v1 -->

**コメント要約**:
- AGENTS.md のバックフィル手順のリンクと `enterprise_id` が `*` に壊れた
- `AGENTS.md:74`（関連リポジトリの節）
- 実在する仕様書へのリンクが切れ、識別子も誤記になる
- prettier の自動整形が原因。ファイルを元に戻して追記分だけ再適用

**評価**: 🚨 必須修正

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 📏 規約

**変更種別**: 📄 ドキュメントのみ

**想定工数**: S

**判断理由**: 同じく `prettier --write` による意図しない整形（表の再整形とアンダースコアの `*` 化）。`origin/development` の内容に戻し、スキル表 1 行とマニュアル節の追記だけを再適用して解消した。リンク切れは AGENTS.md の指示（リンク先ドキュメント参照）を損なうため 🚨 とした。

---

**識別子**: RC-4（GitHub id: 4301798657）

**レビュワー**: Copilot

**指摘箇所**: `base/src/components/manual/ManualViewer.vue:23`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +1,213 @@
+<script setup lang="ts">
+import { mdiMagnify, mdiInformationOutline, mdiAlertOutline, mdiFormatListBulleted } from '@mdi/js'
+import { useDisplay } from 'vuetify'
+import { getSectionSearchText } from '@shokujii/base/manual/validateManual.js'
+import type { ManualCategory, ManualDocument } from '@shokujii/base/manual/types.js'
+
+const props = defineProps<{
+  manual: ManualDocument
+}>()
+
+const { t: $t } = useI18n()
+const { mdAndUp } = useDisplay()
+const route = useRoute()
+
+const keyword = ref('')
+const isTocOpen = ref<number[]>([])
+
+const SECTION_ANCHOR_PREFIX = 'manual-'
+const anchorOf = (id: string) => `${SECTION_ANCHOR_PREFIX}${id}`
+
+/** 検索キーワードに一致するセクションだけを残したカテゴリ一覧 */
+const filteredCategories = computed<ManualCategory[]>(() => {
+  const word = keyword.value.trim().toLowerCase()
```

**レビュワーのコメント（原文）**:

[must] 検索欄のクリアボタンを押すと、Vuetify の clearable が v-model に null を設定し、この trim() が TypeError になります。両アプリで検索解除後の再描画が失敗するため、keyword を nullable にし、null を空文字列として扱ってください。

**コメント要約**:
- 検索欄の clearable で値が null になり `keyword.value.trim()` が TypeError
- `ManualViewer.vue:23`（絞り込みの computed）
- 検索語を入力してクリアアイコンを押すと再描画に失敗し、両アプリで画面が壊れる
- keyword を `string | null` にし、null を空文字として扱う

**評価**: 🚨 必須修正

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 🐛 実害

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: Vuetify の VTextField は clearable のクリア操作で modelValue を null にする（Codex 4301804965 も同一指摘）。ユーザー操作で例外が出る実害のため 🚨。`ref<string | null>` に変更し `(keyword.value ?? "")` で正規化した。

---

**識別子**: RC-5（GitHub id: 4301804979）

**レビュワー**: Codex

**指摘箇所**: `base/src/components/manual/ManualViewer.vue:49`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +1,213 @@
+<script setup lang="ts">
+import { mdiMagnify, mdiInformationOutline, mdiAlertOutline, mdiFormatListBulleted } from '@mdi/js'
+import { useDisplay } from 'vuetify'
+import { getSectionSearchText } from '@shokujii/base/manual/validateManual.js'
+import type { ManualCategory, ManualDocument } from '@shokujii/base/manual/types.js'
+
+const props = defineProps<{
+  manual: ManualDocument
+}>()
+
+const { t: $t } = useI18n()
+const { mdAndUp } = useDisplay()
+const route = useRoute()
+
+const keyword = ref('')
+const isTocOpen = ref<number[]>([])
+
+const SECTION_ANCHOR_PREFIX = 'manual-'
+const anchorOf = (id: string) => `${SECTION_ANCHOR_PREFIX}${id}`
+
+/** 検索キーワードに一致するセクションだけを残したカテゴリ一覧 */
+const filteredCategories = computed<ManualCategory[]>(() => {
+  const word = keyword.value.trim().toLowerCase()
+  if (word === '') {
+    return props.manual.categories
+  }
+  return props.manual.categories
+    .map((category) => ({
+      ...category,
+      sections: category.sections.filter((section) => getSectionSearchText(section).includes(word)),
+    }))
+    .filter((category) => category.sections.length > 0)
+})
+
+const scrollToSection = (id: string) => {
+  document.getElementById(anchorOf(id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
+  isTocOpen.value = []
+}
+
+const scrollToHash = async () => {
+  const hash = route.hash.replace(/^#/, '')
+  if (hash === '') {
+    return
+  }
+  await nextTick()
+  document.getElementById(hash.startsWith(SECTION_ANCHOR_PREFIX) ? hash : anchorOf(hash))?.scrollIntoView()
+}
+
+onMounted(scrollToHash)
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  ハッシュ変更のたびに対象セクションへ移動する**

`route.hash` を読むのが `onMounted` の一度だけなので、同じマニュアル画面で `/manual#order-list` から `/manual#order-detail` へ遷移した場合やブラウザの戻る・進むでハッシュだけが変わった場合、コンポーネントは再マウントされず移動しません。さらに共通ルーターの `base/src/plugins/router/index.ts:11-15` はハッシュを無視して常に先頭へ戻すため、案内しているセクションアンカーを継続して利用できるよう `route.hash` の変更も監視してください。

Useful? React with 👍 / 👎.

<!-- codex-code-review-finding:v1 -->

**コメント要約**:
- `route.hash` を onMounted で 1 回だけ読むため、ハッシュだけが変わる遷移で移動しない
- `ManualViewer.vue:49`（scrollToHash）
- `/manual#a` から `/manual#b` への遷移や戻る・進むでセクションに飛ばない
- `watch(() => route.hash, scrollToHash)` を追加

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 👤 UX

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: 共通ルーターはハッシュを無視して先頭へ戻す（base/src/plugins/router）ため、画面側で追従する必要がある。副作用（スクロール）を伴うため computed ではなく watch が妥当。

---

**識別子**: RC-6（GitHub id: 4301798690）

**レビュワー**: Copilot

**指摘箇所**: `base/src/manual/organizerManual.ts:405`

**該当コード（レビュー時点の diff）**:

```diff
…（diff 先頭省略・326 行）
+          title: 'イベントの作成・設定（5ステップ）',
+          summary:
+            '開催場所・日時、店舗、メニュー、イベント詳細、店舗への連絡事項を5ステップで入力し、お店に予約申請します。',
+          where: 'メニュー > イベント管理 > イベント作成 / イベント管理画面 > イベント設定',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              title: '作成の流れ',
+              items: [
+                'ステップ1「場所・日時」: 郵便番号・住所2・開催日時を入力します。会場名・会場URLは任意です。「進む」を押します。',
+                'ステップ2「店舗選択」: 「〒 で注文できるお店」から店舗を選びます。カードで注文期限と注文の目安を確認できます。',
+                'ステップ3「メニュー」: 参加者が注文できるメニューを選び、「保存して進む」を押します。ここで下書きが保存されます。',
+                'ステップ4「イベント詳細」: タイトル・カバー画像・開催内容・公開設定・定員数・支払い設定などを入力します。',
+                'ステップ5「店舗への連絡事項」: 担当者氏名・会社名/団体名・メールアドレス・電話番号・配達受取場所を入力します。',
+                '「お店に予約申請する」を押し、確認で「予約申請メールを送信する」を押します。',
+              ],
+            },
+            {
+              type: 'list',
+              title: 'ステップ4「イベント詳細」の項目',
+              items: [
+                'イベントカバー画像: 推奨サイズは 1200 x 630 ピクセルです。',
+                '公開設定: 「公開イベント」または「限定公開イベント」を選びます。',
+                '参加者一覧の表示: 常に表示するか、指定人数に達してから表示するかを選びます。',
+                '最小催行人数: 「最小催行人数を設定する」をオンにすると、人数（1〜5）と判断日（注文締切の何日前か、1〜5）を選べます。',
+                '支払い設定: 「参加者 事前決済」または「主催者 請求書払い」を選びます。',
+                'フォーム: 事前アンケートのフォームを設定できます。',
+              ],
+            },
+            {
+              type: 'list',
+              title: 'ステップ3「メニュー」について',
+              items: [
+                'メニューのカードを押すと、「選択中」と「非表示」を切り替えられます。',
+                '末尾の「食事は持参する」は、メニューを注文できない参加者向けの参加方法です。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '開催日時は、予約申請日から3日後以降に設定してください。予約申請後は、開催場所・開催日時・店舗・支払い設定・請求先情報・店舗への連絡事項を変更できません。',
+            },
+            {
+              type: 'list',
+              title: '予約申請の前提条件',
+              items: [
+                '選んだ店舗が営業時間内で、開催地が配達エリア内であること',
+                '注文できるメニューを1件以上選んでいること',
+                'プロフィールのユーザー名・プロフィール画像・メールアドレスが登録済みであること',
+                '店舗への連絡事項が入力済みであること',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'info',
+              text: '条件を満たさないときは「予約申請できません」と表示され、不足している項目が一覧で示されます。予約申請の期間は最大2日間（48時間）です。お店に却下された場合は、お店などを変更して再度予約申請します。',
+            },
+          ],
+        },
+        {
+          id: 'event-payment',
+          title: '支払い設定（事前決済と請求書払い）',
+          summary: '参加者がその場で支払うか、主催者が請求書でまとめて支払うかを選びます。',
+          where: 'イベント設定 > ステップ4「イベント詳細」 > 支払い設定',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'list',
+              title: '参加者 事前決済',
+              items: [
+                '参加者が、クレジットカード等で事前に支払います。',
+                '自己負担がある場合は、システム利用料（1回の決済につき税込110円）がかかります。キャンセルしても返金されません。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '主催者 請求書払い',
+              items: [
+                '参加者は事前のオンライン決済なしで注文できます。',
```

**レビュワーのコメント（原文）**:

[must] 請求書払いでも「金額指定おごり」で自己負担が残る場合は、参加者の事前決済が必要です（functions/default/src/memberOrders.ts:443–451）。決済不要なのは自己負担が0円の場合に限定し、差額がある場合の事前決済を案内してください。同じ説明の693行目も修正が必要です。また、partnerManual.ts:32 の「参加者や主催者はオンライン決済済み」も、主催者がイベント終了後に銀行振込する請求書払いには当てはまりません。両マニュアルで、参加者の事前決済と主催者の後払いを区別してください。

**コメント要約**:
- 請求書払いでも「金額指定おごり」で自己負担が残ると、参加者の事前決済が必要
- `organizerManual.ts:405`（支払い設定）と 693 行目（請求書払い）
- 「事前決済なしで注文できる」と案内しており、実際の決済要否を誤解させる
- 自己負担が 0 円でない場合は差額を事前決済する旨を併記

**評価**: 🚨 必須修正

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 💰 金銭, 👤 UX

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: `functions/default/src/memberOrders.ts` が community_bill かつ支払額 > 0 の注文を「差額のある割引参加は Stripe Checkout で決済してください」で拒否することを確認。金銭の案内の誤りのため 🚨。2 か所とも修正した。

---

**識別子**: RC-7（GitHub id: 4301798703）

**レビュワー**: Copilot

**指摘箇所**: `base/src/manual/organizerManual.ts:431`

**該当コード（レビュー時点の diff）**:

```diff
…（diff 先頭省略・352 行）
+                '支払い設定: 「参加者 事前決済」または「主催者 請求書払い」を選びます。',
+                'フォーム: 事前アンケートのフォームを設定できます。',
+              ],
+            },
+            {
+              type: 'list',
+              title: 'ステップ3「メニュー」について',
+              items: [
+                'メニューのカードを押すと、「選択中」と「非表示」を切り替えられます。',
+                '末尾の「食事は持参する」は、メニューを注文できない参加者向けの参加方法です。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '開催日時は、予約申請日から3日後以降に設定してください。予約申請後は、開催場所・開催日時・店舗・支払い設定・請求先情報・店舗への連絡事項を変更できません。',
+            },
+            {
+              type: 'list',
+              title: '予約申請の前提条件',
+              items: [
+                '選んだ店舗が営業時間内で、開催地が配達エリア内であること',
+                '注文できるメニューを1件以上選んでいること',
+                'プロフィールのユーザー名・プロフィール画像・メールアドレスが登録済みであること',
+                '店舗への連絡事項が入力済みであること',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'info',
+              text: '条件を満たさないときは「予約申請できません」と表示され、不足している項目が一覧で示されます。予約申請の期間は最大2日間（48時間）です。お店に却下された場合は、お店などを変更して再度予約申請します。',
+            },
+          ],
+        },
+        {
+          id: 'event-payment',
+          title: '支払い設定（事前決済と請求書払い）',
+          summary: '参加者がその場で支払うか、主催者が請求書でまとめて支払うかを選びます。',
+          where: 'イベント設定 > ステップ4「イベント詳細」 > 支払い設定',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'list',
+              title: '参加者 事前決済',
+              items: [
+                '参加者が、クレジットカード等で事前に支払います。',
+                '自己負担がある場合は、システム利用料（1回の決済につき税込110円）がかかります。キャンセルしても返金されません。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '主催者 請求書払い',
+              items: [
+                '参加者は事前のオンライン決済なしで注文できます。',
+                '「全額おごり」または「金額指定おごり」を選びます。金額指定は100円以上、100円単位で、1個あたりの上限として計算されます。',
+                '「請求先情報」（担当者名・メールアドレス）の入力が必要です。',
+                'イベント終了後に請求書が届きます。支払いは銀行振込で、期限はイベント開催日の翌月末日です。',
+                '請求書払い手数料として、支払額に10%が加算されます。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '支払い設定は、予約申請後に変更できません。注文の目安の個数を下回ると、配送料を請求する場合があります。',
+            },
+          ],
+        },
+        {
+          id: 'event-minimum',
+          title: '最小催行人数',
+          summary: '参加者が最小催行人数に達しなかったとき、イベントを自動で中止します。',
+          where: 'イベント設定 > ステップ4「イベント詳細」',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'list',
+              items: [
+                '注文期限の判断日前の時点で、参加者が最小催行人数に満たない場合、自動で中止します。',
+                '判定は1回だけです。',
+                '事前決済された方には全額が返金され、メールで通知されます。',
```

**レビュワーのコメント（原文）**:

[must] 最小催行人数による中止も共通の返金処理を呼びますが、返金対象は食事代の自己負担分だけです（functions/default/src/utils/refundMemberOrdersStripe.ts:30–41）。「全額」では実際より多い返金額を案内してしまうため、システム利用料は返金されないことを明記してください。

**コメント要約**:
- 最小催行人数による中止の返金を「全額」と案内している
- `organizerManual.ts:431`（最小催行人数）
- 返金対象は食事代の自己負担分のみで、システム利用料は返金されない
- 「食事代が返金され、システム利用料は返金されません」に修正

**評価**: 🚨 必須修正

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 💰 金銭

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: `refundMemberOrdersStripe.ts` の computeStripeRefundAmountForMemberOrders は menu_price − 割引のみを返金し、pay_user_fee_amount は返金しないことを確認（Codex 4301804983 も同一指摘）。

---

**識別子**: RC-8（GitHub id: 4301804994）

**レビュワー**: Codex

**指摘箇所**: `base/src/manual/organizerManual.ts:619`

**該当コード（レビュー時点の diff）**:

```diff
…（diff 先頭省略・540 行）
+            },
+          ],
+        },
+        {
+          id: 'event-cancel',
+          title: 'イベントのキャンセル',
+          summary: '参加者がいないイベントについて、理由を選んでキャンセルします。',
+          where: 'メニュー > イベント管理 > イベント > 概要 > イベントキャンセル',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「イベントキャンセル」を押します。',
+                '「キャンセル理由を選択してください。」から理由を1つ選びます。「その他」を選んだ場合は、理由を入力します。',
+                '「次へ（確認）」を押します。',
+                '確認で「はい」を押します。',
+                '「イベントのキャンセルが完了しました」で OK を押します。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: 'キャンセル処理は元に戻せません。ボタンが表示されるのは「予約申請中」「参加受付中」のときだけです。参加者がいるイベントはこの画面からキャンセルできません。返金が必要な場合は、サポートまでお問い合わせください。',
+            },
+          ],
+        },
+        {
+          id: 'event-delete',
+          title: 'イベントの削除',
+          summary: '下書きのイベントを削除します。',
+          where: 'メニュー > イベント管理 > イベント > 概要 > イベント削除',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「イベント削除」を押します。',
+                '確認で「削除」を押します。',
+                '完了後、コミュニティの管理画面に戻ります。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '削除は取り消せません。ボタンが表示されるのは、「下書き」で確定した注文がないときだけです。予約申請後のイベントは、キャンセルを使ってください。',
+            },
+          ],
+        },
+      ],
+    },
+    {
+      id: 'communication',
+      title: '連絡・アンケート・請求',
+      sections: [
+        {
+          id: 'letter',
+          title: 'レター（メール配信）',
+          summary:
+            'コミュニティメンバーやイベント参加者などに、メールを一斉に配信します。予約配信、下書き保存、テスト配信もできます。',
+          where: 'コミュニティ管理画面 > レター / イベント管理画面 > レター',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「レター作成」を押します。コミュニティ側では、配信先として「イベント参加者に配信」か「コミュニティメンバーに配信」を選びます。',
+                '「配信先」を選びます。「コミュニティメンバー全体」「イベント参加者」「イベント未登録者」があり、横に人数が表示されます。',
+                '「配信日時」を選びます。「今すぐ配信」か、日付・時・分（5分刻み）を指定した予約配信です。',
+                '「件名」と「メッセージ」を入力します（どちらも必須）。',
+                '「下書き保存」「テスト配信」「今すぐ配信」または「予約配信」を押します。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '一覧の操作',
+              items: [
+                'ステータスは「下書き」「配信予約中」「配信済」です。',
+                '「配信済」以外は「編集」「削除」ができます。「コピー」はすべてのレターで使えます。',
+                '配信済みのレターを開くと、「下書きに戻す」ができます。',
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  配信済みレターを開けるという案内を削除する**

レター一覧の `base/src/components/LetterTable.vue:166-191` では配信済みレターの「編集」を非表示にし、「コピー」だけを表示しているため、通常の画面操作では配信済みレターを開いて「下書きに戻す」ことができません。一覧から実行できる操作としてこの手順を案内すると利用者が存在しない導線を探すことになるため、案内を削除するか、実際に開く導線を追加してください。

AGENTS.md reference: [AGENTS.md:L202-L204](https://github.com/nijuniinc/bokudeli-event-new/blob/8d9acc9e6e35f2cb831a76c13c680170417bdee8/AGENTS.md#L202-L204)

Useful? React with 👍 / 👎.

<!-- codex-code-review-finding:v1 -->

**コメント要約**:
- 配信済みレターを開いて「下書きに戻す」ができると案内したが、一覧に導線がない
- `organizerManual.ts:619`（レター）
- LetterTable は配信済みの「編集」を非表示にし「コピー」だけ出す。存在しない導線を探させる
- 該当の手順を削除

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 👤 UX

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: LetterTable.vue 166〜191 行で `status !== "sent"` のときだけ編集・削除ボタンを出すことを確認。画面から実行できない操作は書かない方針（manual-update スキルにも追記）。

---

**識別子**: RC-9（GitHub id: 4301804998）

**レビュワー**: Codex

**指摘箇所**: `base/src/manual/organizerManual.ts:625`

**該当コード（レビュー時点の diff）**:

```diff
…（diff 先頭省略・546 行）
+          summary: '参加者がいないイベントについて、理由を選んでキャンセルします。',
+          where: 'メニュー > イベント管理 > イベント > 概要 > イベントキャンセル',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「イベントキャンセル」を押します。',
+                '「キャンセル理由を選択してください。」から理由を1つ選びます。「その他」を選んだ場合は、理由を入力します。',
+                '「次へ（確認）」を押します。',
+                '確認で「はい」を押します。',
+                '「イベントのキャンセルが完了しました」で OK を押します。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: 'キャンセル処理は元に戻せません。ボタンが表示されるのは「予約申請中」「参加受付中」のときだけです。参加者がいるイベントはこの画面からキャンセルできません。返金が必要な場合は、サポートまでお問い合わせください。',
+            },
+          ],
+        },
+        {
+          id: 'event-delete',
+          title: 'イベントの削除',
+          summary: '下書きのイベントを削除します。',
+          where: 'メニュー > イベント管理 > イベント > 概要 > イベント削除',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「イベント削除」を押します。',
+                '確認で「削除」を押します。',
+                '完了後、コミュニティの管理画面に戻ります。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '削除は取り消せません。ボタンが表示されるのは、「下書き」で確定した注文がないときだけです。予約申請後のイベントは、キャンセルを使ってください。',
+            },
+          ],
+        },
+      ],
+    },
+    {
+      id: 'communication',
+      title: '連絡・アンケート・請求',
+      sections: [
+        {
+          id: 'letter',
+          title: 'レター（メール配信）',
+          summary:
+            'コミュニティメンバーやイベント参加者などに、メールを一斉に配信します。予約配信、下書き保存、テスト配信もできます。',
+          where: 'コミュニティ管理画面 > レター / イベント管理画面 > レター',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「レター作成」を押します。コミュニティ側では、配信先として「イベント参加者に配信」か「コミュニティメンバーに配信」を選びます。',
+                '「配信先」を選びます。「コミュニティメンバー全体」「イベント参加者」「イベント未登録者」があり、横に人数が表示されます。',
+                '「配信日時」を選びます。「今すぐ配信」か、日付・時・分（5分刻み）を指定した予約配信です。',
+                '「件名」と「メッセージ」を入力します（どちらも必須）。',
+                '「下書き保存」「テスト配信」「今すぐ配信」または「予約配信」を押します。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '一覧の操作',
+              items: [
+                'ステータスは「下書き」「配信予約中」「配信済」です。',
+                '「配信済」以外は「編集」「削除」ができます。「コピー」はすべてのレターで使えます。',
+                '配信済みのレターを開くと、「下書きに戻す」ができます。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: 'コミュニティの「メールアドレス」が未設定だと、レターを配信できません（コミュニティ設定に移動します）。「イベント参加者」「イベント未登録者」を選べるのは、イベントに紐づくレターだけです。イベントの参加者が0人のときは、配信できません。',
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  参加者0人でも未登録者へ配信できる旨に直す**

イベント参加者が0人でも、配信先が「イベント未登録者」なら `LetterEdit.vue:45-47` の送信不可条件には該当せず、バックエンドもコミュニティメンバー全員を未登録者として抽出するため配信できます。この注意書きはすべての配信先で送信できないように読めるので、「イベント参加者」を選んだ場合だけ配信できない旨に限定してください。

AGENTS.md reference: [AGENTS.md:L202-L204](https://github.com/nijuniinc/bokudeli-event-new/blob/8d9acc9e6e35f2cb831a76c13c680170417bdee8/AGENTS.md#L202-L204)

Useful? React with 👍 / 👎.

<!-- codex-code-review-finding:v1 -->

**コメント要約**:
- 「イベントの参加者が0人のときは配信できない」がすべての配信先に読める
- `organizerManual.ts:625`（レターの注意書き）
- 「イベント未登録者」宛ては参加者 0 人でも配信できるため、案内が実際より厳しい
- 配信先が「イベント参加者」の場合に限定

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 👤 UX

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: LetterEdit.vue の isSubmitDisabled は letter_type が event_participant かつ参加者 0 人のときだけ送信不可。限定する形に修正した。

---

**識別子**: RC-10（GitHub id: 4301798715）

**レビュワー**: Copilot

**指摘箇所**: `base/src/manual/organizerManual.ts:695`

**該当コード（レビュー時点の diff）**:

```diff
…（diff 先頭省略・616 行）
+              items: [
+                'ステータスは「下書き」「配信予約中」「配信済」です。',
+                '「配信済」以外は「編集」「削除」ができます。「コピー」はすべてのレターで使えます。',
+                '配信済みのレターを開くと、「下書きに戻す」ができます。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: 'コミュニティの「メールアドレス」が未設定だと、レターを配信できません（コミュニティ設定に移動します）。「イベント参加者」「イベント未登録者」を選べるのは、イベントに紐づくレターだけです。イベントの参加者が0人のときは、配信できません。',
+            },
+            {
+              type: 'note',
+              variant: 'info',
+              text: '配信されたメールの返信先は、コミュニティ設定で登録したメールアドレスになります。',
+            },
+          ],
+        },
+        {
+          id: 'form',
+          title: 'フォーム（事前アンケート）',
+          summary: '参加者に聞きたい質問をまとめた事前アンケートを作り、イベントに設定します。',
+          where: 'メニュー > コミュニティ管理 > コミュニティ > フォーム',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「フォームを作成」を押します。',
+                '「フォーム名」（必須）と「説明」を入力します。',
+                '「設問を追加」で設問を追加します。「設問文」「補足」「種類」「必須／任意」を設定します。',
+                '選択式（チェックボックス・ラジオボタン・プルダウン）の設問は、「選択肢を追加」で選択肢を入れます。',
+                '「プレビュー」で回答画面を確認します。',
+                '「保存」を押します。',
+                'イベント設定の「フォーム」で、作成したフォームを設定します。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '設問の種類と上限',
+              items: [
+                '種類: 短文 / 長文 / メールアドレス / 電話番号 / 日付 / チェックボックス / ラジオボタン / プルダウン',
+                '設問は20問まで、選択肢は1設問あたり30件まで',
+                'フォーム名は100文字、説明は500文字、設問文は200文字まで',
+              ],
+            },
+            {
+              type: 'list',
+              title: '一覧での操作',
+              items: ['「フォームを編集」/「…」メニューの「複製」「アーカイブ」「アーカイブ解除」'],
+            },
+            {
+              type: 'note',
+              variant: 'info',
+              text: '1つのイベントだけ設問を変えたいときは、フォームを複製して編集し、そのイベントに設定します。設問を削除しても、過去の回答は回答一覧とCSVに残ります。個人情報を取得する場合は、説明欄にプライバシーポリシーへの同意を促す文言とリンクを入れてください。',
+            },
+          ],
+        },
+        {
+          id: 'invoice',
+          title: '請求書払い（請求書のダウンロード）',
+          summary: '「主催者請求書払い」を設定したイベントの請求金額を確認し、請求書PDFをダウンロードします。',
+          where: 'メニュー > コミュニティ管理 > コミュニティ > 請求書払い',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「請求書払い」タブを開きます。',
+                '表で、開催日・イベント名・ステータス・おごり金額・請求金額を確認します。',
+                'イベント終了後、請求金額が0円を超えるイベントの「請求書をダウンロード」を押します。別タブでPDFが開きます。',
+              ],
+            },
+            {
+              type: 'list',
+              title: 'お支払いについて',
+              items: [
+                '請求書払いにすると、参加者は事前のオンライン決済なしで注文できます。',
+                '支払い方法は銀行振込、期限はイベント開催日の翌月末日です。',
+                '請求書払い手数料は、注文金額の10%です（2025年11月1日以降のイベント開催分から）。',
```

**レビュワーのコメント（原文）**:

[must] 「金額指定おごり」の手数料は注文金額全体ではなく、主催者負担額に対して計算されます（common/src/utils/invoice.ts:273–275）。例えば1,000円の注文に300円おごる場合、手数料は100円ではなく30円です。請求金額を誤解させないよう、計算対象を主催者負担額と明記してください。

**コメント要約**:
- 「金額指定おごり」の請求書払い手数料は主催者負担額に対して計算される
- `organizerManual.ts:695`（請求書払い）と 409 行目（支払い設定）
- 「注文金額の10%」と案内しており、請求金額を実際より高く誤解させる
- 全額おごりは注文金額、金額指定おごりはおごり金額の合計に対する 10% と明記

**評価**: 🚨 必須修正

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 💰 金銭

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: common/src/utils/invoice.ts の calculateEventBillInvoiceTotal は discount モード（金額指定おごり）では subsidyTotal + 手数料(subsidyTotal) で計算することを確認。2 か所とも修正した。

---

**識別子**: RC-11（GitHub id: 4301804988）

**レビュワー**: Codex

**指摘箇所**: `base/src/manual/partnerManual.ts:32`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +1,480 @@
+import type { ManualDocument } from './types.js'
+
+/**
+ * 飲食店画面（partner）のマニュアル本文。
+ * 画面・操作・文言を変更したら、該当セクションと updatedAt を同じ PR で更新する（.agents/skills/manual-update/SKILL.md）。
+ */
+export const partnerManual: ManualDocument = {
+  title: '店舗管理画面マニュアル',
+  intro:
+    '店舗管理画面の機能ごとの使い方をまとめています。はじめての方は「はじめに」の導入の流れから順に進めてください。画面の表記と異なる場合は、サポートチームまでご連絡ください。',
+  categories: [
+    {
+      id: 'start',
+      title: 'はじめに',
+      sections: [
+        {
+          id: 'flow',
+          title: '導入の流れ',
+          summary: '掲載の申し込みから、開店、予約の承認、商品のお届け、入金までの流れです。',
+          where: 'メニュー > HOME',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '「店舗掲載申し込みフォーム」に「飲食店営業許可証」や「銀行口座」などを入力して送信します。送信前に「店舗利用規約」をご確認ください。',
+                '「店舗設定」で「店舗情報」「注文最小個数」「配送距離」「営業曜日・時間」「注文期限」「メールアドレス」などを入力します。',
+                '「メニュー設定」で「メニュー名」「メニュー説明文」「メニュー価格」「メニュー画像」を入力して追加します。',
+                'すべての設定が完了したら、「店舗設定」の「開店設定」を「開店」にして保存します。サポートチームの確認後に公開されます。',
+                '主催者から予約申請メールが届いたら、「注文一覧」で内容を確認し、「予約内容を承認する」か「予約内容の変更を依頼する」を選んでメッセージを送信します。',
+                '「注文期限」になると、注文個数と内容が確定します。デリバリーやテイクアウトで商品をお届けください。お弁当箱への「お名前」と「メニュー名」の記載もお忘れなく。',
+                '参加者や主催者はWEBでオンライン決済済みです。注文金額から決済手数料を差し引いた上で、月末締め・翌月末払いで銀行振込します。',
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  請求書払いを決済済みと案内しない**

「主催者請求書払い」のイベントでは、`base/src/locales/messages/ja.ts:370-371` のとおり参加者は事前オンライン決済をせず、主催者もイベント終了後に請求書で支払います。そのため全イベントについて「参加者や主催者はオンライン決済済み」とするこの手順は、請求書払いの注文を扱う店舗に誤った入金状況を伝えます。支払い方法によって決済時期が異なる旨に分けて案内してください。

AGENTS.md reference: [AGENTS.md:L202-L204](https://github.com/nijuniinc/bokudeli-event-new/blob/8d9acc9e6e35f2cb831a76c13c680170417bdee8/AGENTS.md#L202-L204)

Useful? React with 👍 / 👎.

<!-- codex-code-review-finding:v1 -->

**コメント要約**:
- 「参加者や主催者はオンライン決済済み」と全イベントに言い切っている
- `partnerManual.ts:32`（導入の流れ STEP 7）
- 請求書払いのイベントでは主催者はイベント終了後に請求書で支払うため、入金状況を誤解させる
- 支払い設定によって決済時期が異なる旨に書き換え

**評価**: 🚨 必須修正

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 💰 金銭, 👤 UX

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: base/src/locales/messages/ja.ts の支払い設定の説明（参加者は事前決済なし・主催者は請求書で後払い）と食い違う。金銭の案内のため 🚨。

---

**識別子**: RC-12（GitHub id: 4301798732）

**レビュワー**: Copilot

**指摘箇所**: `base/src/manual/partnerManual.ts:242`

**該当コード（レビュー時点の diff）**:

```diff
…（diff 先頭省略・163 行）
+              ],
+            },
+          ],
+        },
+        {
+          id: 'shop-misc',
+          title: 'サブメールアドレス・適格請求書・開店設定',
+          summary: '注文メールの宛先追加、領収書に表示する適格請求書登録番号、開店・閉店を設定します。',
+          where: 'メニュー > 店舗設定',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'list',
+              title: 'サブメールアドレス',
+              items: [
+                '「メールアドレス」はログイン用で、変更できません。',
+                '「サブメールアドレス1〜3」を設定すると、注文メールも配信されます。入力ミスにご注意ください。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '適格請求書登録事業者情報',
+              items: [
+                '「登録している」にすると、「適格請求書登録番号」（T+数字13桁）を入力します。',
+                '設定すると、参加者がダウンロードする領収書に番号が表示されます。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '開店設定',
+              items: [
+                '「開店(OPEN)」にすると、ユーザーからの予約や注文が可能になります。',
+                '「閉店(CLOSE)」にすると非公開となり、新規の予約は入りません。',
+                'すべての設定が完了したら「開店」にして保存してください。サポートチームが確認したのちに店舗が公開されます。',
+              ],
+            },
+          ],
+        },
+        {
+          id: 'menu',
+          title: 'メニュー設定',
+          summary: 'メニューの追加、編集、削除、並び替え、売り切れの切り替えを行います。',
+          where: 'メニュー > メニュー設定',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              title: 'メニューを追加する',
+              items: [
+                '「メニューの追加」を押します。',
+                '画像を設定します（必須。推奨サイズは 600x600）。',
+                '「メニュー名称」「説明文」（300文字まで）「税込価格」を入力します（すべて必須）。',
+                '必要に応じて「販売期間」「限定食数」「設定するオプション」を設定します。',
+                '「保存する」を押します。「メニューを保存しました」と表示されます。',
+              ],
+            },
+            {
+              type: 'list',
+              title: 'そのほかの操作',
+              items: [
+                '編集: カードをクリックし、「保存する」で保存します。',
+                '並び替え: カードをドラッグ&ドロップします。自動で保存されます。',
+                '削除: カードの×を押し、確認で OK を押します。',
+                '売り切れ: 編集画面のスイッチを「売り切れ」にします。注文受付中の全イベントに数秒で反映されます。',
+              ],
+            },
+            {
+              type: 'list',
+              title: '入力のポイント',
+              items: [
+                '「税込価格」は10〜100000の整数です。',
+                '「販売期間」は、開始日と終了日を両方設定するか、両方未設定にします。設定すると、イベント開催日が販売期間内のときだけ注文できます。',
+                '「1イベントあたりの限定食数」は1〜1000の整数です。空欄で無制限になります。',
+                '1つのメニューに付けられるオプションは最大10個です。チェックしたオプションは「↑」「↓」で表示順を変えられます。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '限定食数は、すでに注文受付中のイベントには反映されません。反映するには、イベントを差し戻してから再度予約承認してください。',
```

**レビュワーのコメント（原文）**:

[must] 注文受付中のイベントを店舗側で差し戻す操作はありません。承認・変更依頼のフォームは partner/src/pages/order/[eventId].vue:253 で「予約申請中」にだけ表示されます。この手順では限定食数を変更できないため、予約承認前に設定を確認する案内に直してください。

**コメント要約**:
- 限定食数の注意書きが「イベントを差し戻して再度予約承認」と案内している
- `partnerManual.ts:242`（メニュー設定）
- 注文受付中のイベントを店舗が差し戻す操作はなく、手順が実行できない
- 予約承認前に限定食数を含むメニュー設定を確認する案内に変更

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 👤 UX

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: partner/src/pages/order/[eventId].vue の承認・変更依頼フォームは「予約申請中」のときだけ表示される。実行できない手順は載せない。

---

**識別子**: RC-13（GitHub id: 4301798750）

**レビュワー**: Copilot

**指摘箇所**: `base/src/manual/partnerManual.ts:347`

**該当コード（レビュー時点の diff）**:

```diff
…（diff 先頭省略・268 行）
+              title: '入力のポイント',
+              items: [
+                '項目は1〜20件です。項目名は重複できません。',
+                '「金額差分」は -10000〜10000 の整数です。マイナスの値で割引にもできます。',
+                '編集は一覧の行をクリックします。削除はごみ箱アイコンから行います（メニューからも外れます）。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '保存や削除によって、メニューの選べる組み合わせの合計が1円未満になる場合は、保存・削除できません。先にメニューの価格やオプションを変更してください。',
+            },
+          ],
+        },
+      ],
+    },
+    {
+      id: 'orders',
+      title: '注文の受付とお届け',
+      sections: [
+        {
+          id: 'order-list',
+          title: '注文一覧',
+          summary: '自店舗が選ばれたイベントを、開催日時の新しい順に一覧表示します。',
+          where: 'メニュー > 注文一覧',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: ['「注文一覧」を開きます。', '対象イベントの「イベント名」をクリックして、注文詳細を開きます。'],
+            },
+            {
+              type: 'list',
+              title: '一覧の列',
+              items: ['イベント名 / 開始日時 / 注文期限 / 開催場所 / 定員数 / 注文個数 / 注文金額 / ステータス'],
+            },
+            {
+              type: 'note',
+              variant: 'info',
+              text: '「下書き」のイベントは表示されません。「注文個数」「注文金額」には、確定済みの注文のうち店舗が提供する品目だけが集計されます。「食事は持参する」を選んだ参加者は含まれません。',
+            },
+          ],
+        },
+        {
+          id: 'order-approve',
+          title: '予約の承認と変更依頼',
+          summary: '主催者からの予約申請に対して、「承認」または「変更依頼」を選び、メッセージを送ります。',
+          where: 'メニュー > 注文一覧 > イベント名',
+          updatedAt: '2026-10-17',
+          blocks: [
+            {
+              type: 'steps',
+              items: [
+                '予約申請中のイベントの注文詳細を開き、イベント情報（開催場所・配送日時・注文期限・定員数など）を確認します。',
+                '「予約を承認しますか？」で、「予約内容を承認する」か「予約内容の変更を依頼する」を選びます。',
+                '「お店から主催者へのメッセージ」を確認し、必要なら編集します（必須）。選んだ内容に応じて初期文が入ります。',
+                '「主催者へメッセージを送信する」を押します。',
+                '確認ダイアログで「予約承認を確定する」（承認の場合）または「予約を変更依頼する」（変更依頼の場合）を押します。',
+                '「メールを送信しました」と表示されたら完了です。',
+              ],
+            },
+            {
+              type: 'list',
+              title: 'ステータスの変わり方',
+              items: [
+                '承認すると、イベントは「参加受付中」になり、参加者が注文できます。',
+                '変更依頼を送ると、イベントは「下書き」に戻り、入力したメッセージが主催者に伝わります。',
+              ],
+            },
+            {
+              type: 'note',
+              variant: 'warning',
+              text: '承認後は、キャンセルやメニュー内容の変更ができません。メニューの内容を変更する場合は、予約承認前に対応してください。',
+            },
+            {
+              type: 'list',
+              title: '注文詳細に表示される情報',
+              items: [
+                '配送日時は、イベント開始の30分前〜開始時刻です。',
+                '最小催行人数を設定したイベントでは、判断日の時点で参加者が最小催行人数以下の場合、イベントが自動で中止されます。',
```

**レビュワーのコメント（原文）**:

[must] 中止条件は最小催行人数「以下」ではなく「未満」です。functions/default/src/minimumParticipantsJudgment.ts:56–68 は、店舗の提供対象品目を注文済みの人数が設定値以上なら開催を継続します。設定値ちょうどのイベントまで中止されると誤解させないよう、判定対象と境界を実装に合わせてください。

**コメント要約**:
- 最小催行人数の中止条件が「以下」になっていた（実装は「未満」）
- `partnerManual.ts:347`（予約の承認と変更依頼）
- 設定人数ちょうどでも中止されると店舗が誤解する。判定対象も店舗提供品目の注文者のみ
- 「店舗が提供する品目を注文済みの人数が最小催行人数に満たない場合」に修正し、ちょうどなら開催と明記

**評価**: 🚨 必須修正

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 💰 金銭, 👤 UX

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: minimumParticipantsJudgment.ts は店舗提供品目の注文済みユニーク人数が `>= mp.count` なら継続する。Codex 4301804968・Copilot 会話コメント 6230878231 も同一指摘（重複除外）。organizerManual 側は元から「達しない場合」で正しい。

---

**識別子**: RC-14（GitHub id: 4301804973）

**レビュワー**: Codex

**指摘箇所**: `base/src/manual/validateManual.ts:40`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +1,80 @@
+import type { ManualDocument } from './types.js'
+
+const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/
+const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
+
+/**
+ * マニュアルデータの整合性を検証し、問題点を日本語メッセージで返す（問題なければ空配列）。
+ * テストから呼び出し、セクション ID の重複・更新日の書式・空の本文を検出する。
+ */
+export const validateManual = (manual: ManualDocument): string[] => {
+  const errors: string[] = []
+  const seenIds = new Set<string>()
+
+  if (manual.categories.length === 0) {
+    errors.push('カテゴリが 1 件もありません')
+  }
+
+  for (const category of manual.categories) {
+    if (!ID_PATTERN.test(category.id)) {
+      errors.push(`カテゴリ ID の形式が不正です: ${category.id}`)
+    }
+    if (seenIds.has(category.id)) {
+      errors.push(`ID が重複しています: ${category.id}`)
+    }
+    seenIds.add(category.id)
+    if (category.sections.length === 0) {
+      errors.push(`カテゴリ「${category.title}」にセクションがありません`)
+    }
+    for (const section of category.sections) {
+      if (!ID_PATTERN.test(section.id)) {
+        errors.push(`セクション ID の形式が不正です: ${section.id}`)
+      }
+      if (seenIds.has(section.id)) {
+        errors.push(`ID が重複しています: ${section.id}`)
+      }
+      seenIds.add(section.id)
+      if (section.title.trim() === '' || section.summary.trim() === '' || section.where.trim() === '') {
+        errors.push(`セクション「${section.id}」のタイトル・概要・開き方のいずれかが空です`)
+      }
+      if (!DATE_PATTERN.test(section.updatedAt) || Number.isNaN(Date.parse(section.updatedAt))) {
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  実在しない更新日を検証で拒否する**

`Date.parse` は `2026-02-30` のような存在しない日付を `NaN` にせず3月の日付へ正規化するため、この検証と `manual.test.ts` を通過して無効な `updatedAt` が画面に表示されます。年月日を分解して日数範囲を検証するか、生成した日付を元の文字列と往復比較してください。

Useful? React with 👍 / 👎.

<!-- codex-code-review-finding:v1 -->

**コメント要約**:
- `Date.parse` は `2026-02-30` を 3 月に繰り上げるため無効な更新日を通す
- `validateManual.ts:40`（updatedAt の検証）
- 存在しない日付が検証とテストをすり抜けて画面に表示される
- ISO 文字列へ往復変換して元の文字列と一致するかで検証し、テストを追加

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 🐛 実害

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: `new Date("2026-02-30T00:00:00Z")` は有効な Date（3/2）になるため往復比較が必要。manual.test.ts に実在しない日付のケースを追加した。

---

## 評価セッション（2026-10-17 16:45・shokujii-code-review）

- **評価日時**: 2026-10-17 16:45 JST
- **評価者**: Claude Code（`/shokujii-code-review`）
- **ブランチ名**: `feat/2478`
- **PR**: https://github.com/nijuniinc/bokudeli-event-new/pull/2479
- **対象**: マニュアル本文の読みやすさの改善（yomiyasu）と、表示のデザイン改善（frontend-design）の差分
- **Outdated 除外件数**: 該当なし
- **レビュー非該当スキップ件数**: 該当なし
- **重複除外**: なし
- **確認して修正不要とした点**: イベントハンドラ・ライフサイクルから呼ぶ非同期関数（`selectTarget` / `scrollToHash` 等）に `try/catch` は付けていない。待つのは `nextTick` と待機だけで、失敗する処理を含まないため。

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [x] | RC-15 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | テーマ色を `#0f7a3b` などの 16 進数で直接指定している<br>`ManualViewer.vue` の `--manual-accent-strong` / `--manual-warning-strong`（ダークテーマ用を含む）<br>テーマの色を変えても、マニュアルの緑・琥珀色の文字だけが追従しない<br>テーマの色を `color-mix` で暗く・明るくした値に置き換える |
| [x] | RC-16 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | アンカーの接頭辞 `manual-` を 3 つのコンポーネントがそれぞれ書いている<br>`ManualViewer.vue` の `ANCHOR_PREFIX`、`ManualToc.vue` の `ANCHOR_PREFIX`、`ManualSection.vue` の `manual-${id}`<br>どれか 1 つだけ変えると、目次のリンクと項目の `id` がずれて移動できなくなる<br>`manualView.ts` に `MANUAL_ANCHOR_PREFIX` と `getManualAnchorId` を置いて集約する |
| [x] | RC-17 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | 待ち時間・回数が `20`・`30`・`50`・`0` の数値のまま書かれている<br>`ManualViewer.vue` の `waitForScrollUnlock` と、下から開く目次の送り処理<br>何のための数値か読み取れず、調整するときに意図が分からない<br>名前付きの定数と `sleep` 関数にまとめる |
| [x] | RC-18 | なし | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | フォーカス表示のセレクタ `.manual-sheet a:focus-visible` が、どの要素にも当たらない<br>`ManualViewer.vue` の scoped スタイル末尾（下から開く目次の中のリンクは、子コンポーネント側の要素）<br>使われないスタイルが残り、キーボード操作の見た目を担っていると誤解される<br>削除し、章へのリンク（`.manual-chip`）のフォーカス表示に置き換える |

---

**識別子**: RC-15（GitHub id: なし・エージェントレビュー）

**レビュワー**: Claude Code（shokujii-code-review）

**指摘箇所**: `base/src/components/manual/ManualViewer.vue:390`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +384,18 @@
+<style lang="scss">
+// 画面の外（下から開く目次）にも同じ色・書体を使うため、スコープを付けずに定義する
+.manual-viewer,
+.manual-sheet {
+  --manual-line: rgba(var(--v-border-color), var(--v-border-opacity));
+  // 文字に使う緑・琥珀色は、背景に対して十分なコントラストが出る濃さにする
+  --manual-accent-strong: #0f7a3b;
+  --manual-warning-strong: #8a5a00;
+  ...
+}
+
+.v-theme--dark .manual-viewer,
+.v-theme--dark .manual-sheet {
+  --manual-accent-strong: #5fe08e;
+  --manual-warning-strong: #ffd166;
+}
```

**レビュワーのコメント（原文）**:

🟡 **修正提案** [🔧微修正/S]: テーマ色を `#0f7a3b` などの 16 進数で直接指定している。`ManualViewer.vue` の `--manual-accent-strong` / `--manual-warning-strong`（ダークテーマ用を含む）（テーマの色を変えても、マニュアルの緑・琥珀色の文字だけが追従しない） → テーマの色を `color-mix` で暗く・明るくした値に置き換える

**コメント要約**:
- テーマ色を `#0f7a3b` などの 16 進数で直接指定している
- `ManualViewer.vue` の `--manual-accent-strong` / `--manual-warning-strong`（ダークテーマ用を含む）
- テーマの色を変えても、マニュアルの緑・琥珀色の文字だけが追従しない
- テーマの色を `color-mix` で暗く・明るくした値に置き換える

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 📏 規約

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: チェックリスト「テーマカラーを直接指定していないか（Vuetify Theme を使う）」に該当する。コントラストのための濃淡は必要なので、テーマ変数から `color-mix` で導出する形にした（ライトは黒、ダークは白と混ぜる）。未対応ブラウザでは変数が無効になり、周囲の文字色で表示される（背景色には使っていないため読めなくなることはない）。画面で計算結果が `rgb(16,123,61)` になることを確認した。

---

**識別子**: RC-16（GitHub id: なし・エージェントレビュー）

**レビュワー**: Claude Code（shokujii-code-review）

**指摘箇所**: `base/src/components/manual/ManualSection.vue:22`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +22,1 @@
+const anchorId = computed(() => `manual-${props.section.id}`)
```

**レビュワーのコメント（原文）**:

🟡 **修正提案** [🔧微修正/S]: アンカーの接頭辞 `manual-` を 3 つのコンポーネントがそれぞれ書いている。`ManualViewer.vue` の `ANCHOR_PREFIX`、`ManualToc.vue` の `ANCHOR_PREFIX`、`ManualSection.vue` の `manual-${id}`（どれか 1 つだけ変えると、目次のリンクと項目の `id` がずれて移動できなくなる） → `manualView.ts` に `MANUAL_ANCHOR_PREFIX` と `getManualAnchorId` を置いて集約する

**コメント要約**:
- アンカーの接頭辞 `manual-` を 3 つのコンポーネントがそれぞれ書いている
- `ManualViewer.vue` の `ANCHOR_PREFIX`、`ManualToc.vue` の `ANCHOR_PREFIX`、`ManualSection.vue` の `manual-${id}`
- どれか 1 つだけ変えると、目次のリンクと項目の `id` がずれて移動できなくなる
- `manualView.ts` に `MANUAL_ANCHOR_PREFIX` と `getManualAnchorId` を置いて集約する

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 📏 規約

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: 同じ文字列の重複はずれの原因になる。純粋関数なので `manualView.ts` に置き、テスト（`getManualAnchorId`）を追加した。3 つのコンポーネントはこの関数を使う。

---

**識別子**: RC-17（GitHub id: なし・エージェントレビュー）

**レビュワー**: Claude Code（shokujii-code-review）

**指摘箇所**: `base/src/components/manual/ManualViewer.vue:176`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +176,7 @@
+/** 下から開く目次を閉じたあとは、画面のスクロール固定が外れるまで待つ（固定中は移動できない） */
+const waitForScrollUnlock = async () => {
+  await nextTick()
+  for (let i = 0; i < 20 && document.documentElement.classList.contains('v-overlay-scroll-blocked'); i++) {
+    await new Promise((resolve) => setTimeout(resolve, 30))
+  }
+}
```

**レビュワーのコメント（原文）**:

🟡 **修正提案** [🔧微修正/S]: 待ち時間・回数が `20`・`30`・`50`・`0` の数値のまま書かれている。`ManualViewer.vue` の `waitForScrollUnlock` と、下から開く目次の送り処理（何のための数値か読み取れず、調整するときに意図が分からない） → 名前付きの定数と `sleep` 関数にまとめる

**コメント要約**:
- 待ち時間・回数が `20`・`30`・`50`・`0` の数値のまま書かれている
- `ManualViewer.vue` の `waitForScrollUnlock` と、下から開く目次の送り処理
- 何のための数値か読み取れず、調整するときに意図が分からない
- 名前付きの定数と `sleep` 関数にまとめる

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 📏 規約

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: チェックリスト「マジックナンバーを定数に切り出す」に該当する。`SCROLL_UNLOCK_POLL_MS` / `SCROLL_UNLOCK_MAX_POLLS` / `SHEET_SCROLL_DELAY_MS` に名前を付け、`new Promise(setTimeout)` の繰り返しを `sleep` にまとめた。

---

**識別子**: RC-18（GitHub id: なし・エージェントレビュー）

**レビュワー**: Claude Code（shokujii-code-review）

**指摘箇所**: `base/src/components/manual/ManualViewer.vue:799`

**該当コード（レビュー時点の diff）**:

```diff
@@ -0,0 +799,5 @@
+.manual-viewer :deep(a:focus-visible),
+.manual-sheet a:focus-visible {
+  outline: 2px solid rgb(var(--v-theme-primary));
+  outline-offset: 2px;
+}
```

**レビュワーのコメント（原文）**:

🟡 **修正提案** [🔧微修正/S]: フォーカス表示のセレクタ `.manual-sheet a:focus-visible` が、どの要素にも当たらない。`ManualViewer.vue` の scoped スタイル末尾（下から開く目次の中のリンクは、子コンポーネント側の要素）（使われないスタイルが残り、キーボード操作の見た目を担っていると誤解される） → 削除し、章へのリンク（`.manual-chip`）のフォーカス表示に置き換える

**コメント要約**:
- フォーカス表示のセレクタ `.manual-sheet a:focus-visible` が、どの要素にも当たらない
- `ManualViewer.vue` の scoped スタイル末尾（下から開く目次の中のリンクは、子コンポーネント側の要素）
- 使われないスタイルが残り、キーボード操作の見た目を担っていると誤解される
- 削除し、章へのリンク（`.manual-chip`）のフォーカス表示に置き換える

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 📏 規約

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: scoped スタイルの属性は、このコンポーネントの要素にだけ付く。目次のリンクは `ManualToc.vue` の要素なので当たらず、`ManualToc.vue` 側に同じ指定がすでにある。チェックリスト「置換・刷新後に未使用のものが残っていないか」に該当するため、削除して `.manual-chip:focus-visible` に置き換えた。

---
