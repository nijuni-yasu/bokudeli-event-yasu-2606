# 自社 Shokujii の77機能判定(機能タクソノミー v0.1 / リポジトリ読み取り専用調査)

調査対象: `/Users/yasukawanaohiro/Github/wt/tree-3`(ブランチ doc/2469, 2026-10-11 時点。`origin/main` = v2.14.0 リリースマージ 2026-10-10, HEAD は main より32コミット先で、ソース差分は functions/default の OGP・letter・クライアントエラー周辺など軽微なもの)。以下の `[path](path)` リンクはリポジトリルート相対。出力 CSV: `features/shokujii.csv`(77行・検証済み)。

## 判定方法と読み替え

### Takeaway

77機能のうち ✅40 / △19 / ❌17 / ？1。食事・店舗連携(FD)と共有・OGP・主催者運用(OP)・通知(CR)は厚い一方、発見面(DS: 検索・地図・推薦・ブックマーク)、ゲスト申込(JN01)・ウェイトリスト・QR受付、紹介/埋め込み、利用者の通報・ブロック、レビュー、AI作成支援、主催者分析が未実装。

### Cited Findings

- 判定基準(タクソノミー §4 の自社読み替えを具体化): ✅=コード(`user`/`partner`/`base`/`functions`/`common`/`support`)で実装を確認でき、かつ `origin/main`(v2.14.0)に同じパスが存在するもの。△=一部実装、または**仕様書(内容あり)か、本文/マイルストーン付きの GitHub Issue がある未実装**のもの。❌=コード探索で不在を確認し、上記の仕様書/Issueが無いもの(見出しのみのバックログ文書・ブレスト・施策案の言及は ❌ とし note に残した)。？=リポジトリから確認不可。evidence_level: コード確認=実機、文書のみ(△の計画)=公式、確認不可=なし。 — [documents/14_競合調査/30_機能比較/01_機能タクソノミー.md](documents/14_競合調査/30_機能比較/01_機能タクソノミー.md)
- ❌行の evidence_level=実機 は『コード探索(grep/ファイル確認)で不在を確認』の意味で、evidence_url は不在の根拠ではなく、最も近い見出し文書・施策文書・代表ページを指す(note に『コード確認(不在)』と明記)。△の未実装計画行(DS01/DS04/DS06/JN03/FD10)は evidence_level=公式(文書のみ)、？(AC08)は なし。
- 「本番で利用可能」の根拠:v2.14.0 のリリースPRが `main` にマージ済み(2026-10-10)で、全 ✅ の evidence パスは `git cat-file -e origin/main:<path>` で main に存在することを確認(実際のデプロイ状態そのものはリポジトリから確認不可)。development 先行で main 未反映の主なものは SNSクローラ向けOGPフォールバック(Issue #2163)と管理画面OGP(Issue #2082)(`git diff --stat origin/main..HEAD` で確認)。 — [functions/default/src/ogpRequest.ts](functions/default/src/ogpRequest.ts)
- 対象アプリ構成: `user`(参加者/幹事・PF)、`partner`(店舗)、`support`(運営)、`enterprise`(法人。MN02/MN04 で参照)。いずれも `origin/main` に存在。 — [AGENTS.md](AGENTS.md)
- Issue 番号は `gh issue list`(読み取りのみ)で 2026-10-11 時点の状態を確認した。マイルストーンは v2.15/v2.16/v2.18 など(最新リリースは v2.14.0)。

### Inferences

- ❌/△ の多くは『文書・Issue はあるが優先度が低い/未決』で、v2.15・v2.16 に積まれているのは ブックマーク(#946)・ともだち招待(#953/#1249)・短縮URL(#2322)・コミュニティチャット(#2217)・店舗一覧ページ(#963)・参加人数選択(#1696)・RSS(#898) など。

### Gaps

- 本番(実環境)のデプロイ状態・画面の実機確認はしていない(全てコード/文書/Issue 確認)。
- Firestore に入るデータ(運営の公式イベント実績=AC08、バナー設定内容=DS08)はコードから確認できない。

## 判定の内訳(77機能)

### Takeaway

✅40・△19・❌17・？1(evidence_level は 実機71・公式5・なし1)。分類別では FD(食事・店舗連携)・OP・CR・JN が強く、DS(発見)・MN(収益化)・AC(主催者獲得)が弱い。

### Cited Findings

| 分類 | ✅ | △ | ❌ | ？ | 計 |
| :-- | --: | --: | --: | --: | --: |
| DS 発見・探索(参加者側の入口) | 2 | 4 | 2 | 0 | 8 |
| JN 申込・参加体験(参加者側) | 8 | 1 | 3 | 0 | 12 |
| SH 共有・招待・バイラル | 4 | 2 | 2 | 0 | 8 |
| OP 主催者の作成・運用 | 8 | 2 | 2 | 0 | 12 |
| AC 主催者獲得の仕組み(供給側) | 3 | 2 | 2 | 1 | 8 |
| CR 通知・CRM・継続 | 5 | 1 | 2 | 0 | 8 |
| TS 信頼・安全 | 3 | 2 | 1 | 0 | 6 |
| FD 食事・店舗連携(Shokujii の固有領域) | 6 | 3 | 1 | 0 | 10 |
| MN 収益化・価格 | 1 | 2 | 2 | 0 | 5 |
| **合計** | **40** | **19** | **17** | **1** | **77** |

- 集計元(77行): [features/shokujii.csv](features/shokujii.csv)(自作成)。判定の詳細な根拠・不足点は各行の note に記載。

全77機能の一覧(根拠パスは代表1つ。複数ある場合は CSV の note 参照):

| ID | 機能 | 判定 | 根拠(レベル) | 代表パス |
| :-- | :-- | :--: | :-- | :-- |
| DS01 | キーワード・カテゴリ検索 | △ | 公式 | [documents/03_参加者獲得/05_イベントタグ機能.md](documents/03_参加者獲得/05_イベントタグ機能.md) |
| DS02 | 地域・地図検索 | ❌ | 実機 | [user/src/pages/index.vue](user/src/pages/index.vue) |
| DS03 | 日付・価格等の絞り込み | ❌ | 実機 | [user/src/pages/index.vue](user/src/pages/index.vue) |
| DS04 | パーソナライズ推薦 | △ | 公式 | [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md) |
| DS05 | フォロー | ✅ | 実機 | [base/src/components/CommunityMembershipButton.vue](base/src/components/CommunityMembershipButton.vue) |
| DS06 | ブックマーク・ウィッシュリスト | △ | 公式 | [documents/03_参加者獲得/03_いいね機能.md](documents/03_参加者獲得/03_いいね機能.md) |
| DS07 | 公開ディレクトリ・都市×カテゴリページ | △ | 実機 | [user/src/pages/communitylist/index.vue](user/src/pages/communitylist/index.vue) |
| DS08 | キュレーション・特集 | ✅ | 実機 | [user/src/pages/index.vue](user/src/pages/index.vue) |
| JN01 | アカウント不要の申込 | ❌ | 実機 | [user/src/pages/c/[communityAccount]/e/[eventId]/index.vue](user/src/pages/c/[communityAccount]/e/[eventId]/index.vue) |
| JN02 | 簡易ログイン | ✅ | 実機 | [user/src/pages/login.vue](user/src/pages/login.vue) |
| JN03 | 承認制・参加申請 | △ | 公式 | [documents/08_エンタープライズ/10_仕様/04_詳細_イベント管理.md](documents/08_エンタープライズ/10_仕様/04_詳細_イベント管理.md) |
| JN04 | ウェイトリスト | ❌ | 実機 | [documents/バックログ/キャンセル待ちの登録.md](documents/バックログ/キャンセル待ちの登録.md) |
| JN05 | 定員・残席の表示 | ✅ | 実機 | [base/src/components/EventDetailsCard.vue](base/src/components/EventDetailsCard.vue) |
| JN06 | 追加質問・同行者の入力 | ✅ | 実機 | [user/src/pages/cart/form/[communityAccount]/[eventId].vue](user/src/pages/cart/form/[communityAccount]/[eventId].vue) |
| JN07 | 参加者のセルフキャンセル | ✅ | 実機 | [base/src/components/UserEventCard.vue](base/src/components/UserEventCard.vue) |
| JN08 | カレンダー追加 | ✅ | 実機 | [base/src/components/CalendarAddDialog.vue](base/src/components/CalendarAddDialog.vue) |
| JN09 | 開催前リマインド | ✅ | 実機 | [functions/default/src/pollingTask.ts](functions/default/src/pollingTask.ts) |
| JN10 | QRチケット・当日受付 | ❌ | 実機 | [documents/バックログ/受取時のチェックインシステム.md](documents/バックログ/受取時のチェックインシステム.md) |
| JN11 | 参加者一覧の閲覧 | ✅ | 実機 | [base/src/components/EventMemberList.vue](base/src/components/EventMemberList.vue) |
| JN12 | イベント後の体験 | ✅ | 実機 | [functions/default/src/eventConclusionMail.ts](functions/default/src/eventConclusionMail.ts) |
| SH01 | 共有用URL・OGPカード | ✅ | 実機 | [functions/default/src/ogpRequest.ts](functions/default/src/ogpRequest.ts) |
| SH02 | SNS・メッセージ共有ボタン | ✅ | 実機 | [base/src/utils/shareSnsButton.ts](base/src/utils/shareSnsButton.ts) |
| SH03 | 友人・同行者の招待導線 | △ | 実機 | [base/src/components/UserSuccessJoinEventDialog.vue](base/src/components/UserSuccessJoinEventDialog.vue) |
| SH04 | 紹介リンク・紹介の可視化 | ❌ | 実機 | [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md) |
| SH05 | 連絡先・SNS連携で友人発見 | △ | 実機 | [functions/default/src/userFriends.ts](functions/default/src/userFriends.ts) |
| SH06 | 社会的証明の表示 | ✅ | 実機 | [base/src/components/EventMemberList.vue](base/src/components/EventMemberList.vue) |
| SH07 | QR・短縮URL・チラシ生成 | ✅ | 実機 | [functions/default/src/flyer.ts](functions/default/src/flyer.ts) |
| SH08 | 埋め込みウィジェット | ❌ | 実機 | [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md) |
| OP01 | 簡単な作成 | ✅ | 実機 | [base/src/components/EventEdit.vue](base/src/components/EventEdit.vue) |
| OP02 | コピー・繰り返し作成 | ✅ | 実機 | [functions/default/src/eventCopyRepeat.ts](functions/default/src/eventCopyRepeat.ts) |
| OP03 | 下書き・限定公開 | ✅ | 実機 | [base/src/components/EventEdit.vue](base/src/components/EventEdit.vue) |
| OP04 | AI作成支援 | ❌ | 実機 | [documents/バックログ/イベントAI生成機能（カバー画像・文言）.md](documents/バックログ/イベントAI生成機能（カバー画像・文言）.md) |
| OP05 | 共同主催・運営メンバー権限 | ✅ | 実機 | [base/src/components/manage/community/ManagerInvitationDialog.vue](base/src/components/manage/community/ManagerInvitationDialog.vue) |
| OP06 | 参加者管理・名簿出力 | ✅ | 実機 | [user/src/components/manage/event/member.vue](user/src/components/manage/event/member.vue) |
| OP07 | 一斉メッセージ | ✅ | 実機 | [base/src/components/manage/event/EventLetter.vue](base/src/components/manage/event/EventLetter.vue) |
| OP08 | 当日運営ツール | △ | 実機 | [user/src/components/manage/event/member.vue](user/src/components/manage/event/member.vue) |
| OP09 | 売上・入金管理 | △ | 実機 | [partner/src/pages/order/index.vue](partner/src/pages/order/index.vue) |
| OP10 | 流入・申込の分析 | ❌ | 実機 | [user/src/pages/manage/event/[eventId]/[tab].vue](user/src/pages/manage/event/[eventId]/[tab].vue) |
| OP11 | 主催者ページ・グループページ | ✅ | 実機 | [user/src/pages/c/[communityAccount]/index.vue](user/src/pages/c/[communityAccount]/index.vue) |
| OP12 | 外部ツール連携・API | ✅ | 実機 | [base/src/components/manage/community/CommunitySlackSetting.vue](base/src/components/manage/community/CommunitySlackSetting.vue) |
| AC01 | 無料イベントは無料 | ✅ | 実機 | [user/src/locales/messages/ja.ts](user/src/locales/messages/ja.ts) |
| AC02 | 手数料負担の選択 | ✅ | 実機 | [base/src/components/eventcreate/EventDetailCard.vue](base/src/components/eventcreate/EventDetailCard.vue) |
| AC03 | 参加者データの所有・出力 | △ | 実機 | [base/src/composable/memberCsvExport.ts](base/src/composable/memberCsvExport.ts) |
| AC04 | 他サービスからの移行 | ❌ | 実機 | [documents/02_主催者獲得と継続/17_主催自動化.md](documents/02_主催者獲得と継続/17_主催自動化.md) |
| AC05 | 主催者紹介・アンバサダー | ❌ | 実機 | [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md) |
| AC06 | 主催者向け教育・テンプレ | ✅ | 実機 | [user/src/navigation/manage.ts](user/src/navigation/manage.ts) |
| AC07 | 集客支援の商品 | △ | 実機 | [functions/default/src/eventInformationMail.ts](functions/default/src/eventInformationMail.ts) |
| AC08 | 運営主催・公式イベント | ？ | なし | [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md) |
| CR01 | ダイジェスト・おすすめ通知 | ✅ | 実機 | [functions/default/src/eventInformationMail.ts](functions/default/src/eventInformationMail.ts) |
| CR02 | 自動メンバー化 | ✅ | 実機 | [functions/default/src/orderConfirmedSideEffects.ts](functions/default/src/orderConfirmedSideEffects.ts) |
| CR03 | 前回参加者への優先案内 | △ | 実機 | [functions/default/src/orderCompletionMail.ts](functions/default/src/orderCompletionMail.ts) |
| CR04 | 主催者CRM・購読者リスト | ✅ | 実機 | [base/src/components/manage/community/CommunityMemberTable.vue](base/src/components/manage/community/CommunityMemberTable.vue) |
| CR05 | 参加履歴・バッジ・実績 | ✅ | 実機 | [base/src/components/profile/UserProfileStatsSummaryCard.vue](base/src/components/profile/UserProfileStatsSummaryCard.vue) |
| CR06 | レビュー・評価 | ❌ | 実機 | [documents/バックログ/イベントへのレビュー機能.md](documents/バックログ/イベントへのレビュー機能.md) |
| CR07 | グループチャット・掲示板 | ✅ | 実機 | [base/src/components/chat/ChatApp.vue](base/src/components/chat/ChatApp.vue) |
| CR08 | 年間まとめ・振り返り共有 | ❌ | 実機 | [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md) |
| TS01 | 本人確認・認証 | △ | 実機 | [user/src/pages/login.vue](user/src/pages/login.vue) |
| TS02 | 主催者の審査・認定 | ✅ | 実機 | [support/src/pages/communities/index.vue](support/src/pages/communities/index.vue) |
| TS03 | 通報・ブロック・モデレーション | △ | 実機 | [functions/default/src/recallChatMessage.ts](functions/default/src/recallChatMessage.ts) |
| TS04 | ドタキャン対策 | ✅ | 実機 | [base/src/components/CancelPolicyDialog.vue](base/src/components/CancelPolicyDialog.vue) |
| TS05 | 参加者情報の保護 | ✅ | 実機 | [common/src/utils/eventParticipantsVisibility.ts](common/src/utils/eventParticipantsVisibility.ts) |
| TS06 | 直接取引の抑止 | ❌ | 実機 | [terms/content/user.md](terms/content/user.md) |
| FD01 | メニューの事前注文・選択 | ✅ | 実機 | [base/src/components/EventMenuList.vue](base/src/components/EventMenuList.vue) |
| FD02 | アレルギー・食の好みの登録 | ❌ | 実機 | [documents/04_飲食店向け/02_オプションメニュー.md](documents/04_飲食店向け/02_オプションメニュー.md) |
| FD03 | 店舗向け管理画面 | ✅ | 実機 | [partner/src/pages/order/[eventId].vue](partner/src/pages/order/[eventId].vue) |
| FD04 | 人数確定の店舗通知・集計 | ✅ | 実機 | [functions/default/src/orderDeadlineMail.ts](functions/default/src/orderDeadlineMail.ts) |
| FD05 | 席の確保・貸切の連携 | △ | 実機 | [partner/src/pages/order/[eventId].vue](partner/src/pages/order/[eventId].vue) |
| FD06 | コース・固定メニュー | △ | 実機 | [base/src/components/eventcreate/EventMenu.vue](base/src/components/eventcreate/EventMenu.vue) |
| FD07 | 割り勘・個別会計 | ✅ | 実機 | [base/src/components/pages/cart.vue](base/src/components/pages/cart.vue) |
| FD08 | 店探し・店選び支援 | ✅ | 実機 | [base/src/components/eventcreate/EventShop.vue](base/src/components/eventcreate/EventShop.vue) |
| FD09 | 売り切れ・限定数の管理 | ✅ | 実機 | [functions/default/src/eventMenusSoldOutSync.ts](functions/default/src/eventMenusSoldOutSync.ts) |
| FD10 | 提供形態の選択 | △ | 公式 | [documents/04_飲食店向け/04_イートイン.md](documents/04_飲食店向け/04_イートイン.md) |
| MN01 | 手数料の明示 | ✅ | 実機 | [user/src/locales/messages/ja.ts](user/src/locales/messages/ja.ts) |
| MN02 | 主催者向け有料プラン | △ | 実機 | [functions/default/src/enterprise/billingSnapshots.ts](functions/default/src/enterprise/billingSnapshots.ts) |
| MN03 | 任意チップ・寄付 | ❌ | 実機 | [base/src/components/pages/cart.vue](base/src/components/pages/cart.vue) |
| MN04 | クーポン・割引コード | △ | 実機 | [common/src/utils/paymentCommunityBillOffAmount.ts](common/src/utils/paymentCommunityBillOffAmount.ts) |
| MN05 | ポイント・会員特典 | ❌ | 実機 | [documents/03_参加者獲得/07_アチーブメント系機能.md](documents/03_参加者獲得/07_アチーブメント系機能.md) |

### Inferences

- 分類別の強弱(上表)から、自社の差別化領域は FD と OP/CR(幹事向け運用・継続通知)、弱点は DS(参加者側の発見導線)と MN/AC の一部(クーポン・紹介・有料枠)。

### Gaps

- 境界判定(判断が分かれうるもの)は後節『境界ケース』に列挙。

## △(一部実装・計画あり)の一覧と足りない点

### Takeaway

△は19件。『一部実装』は SH03/SH05/OP08/OP09/AC03/AC07/CR03/TS01/TS03/FD05/FD06/MN02/MN04/DS07、『未実装だが仕様書/Issueあり』は DS01/DS04/DS06/JN03/FD10。優先度意思決定では計画の成熟度(仕様書あり/Issueのみ/施策案)とマイルストーンを併せて見ること。

### Cited Findings

- **DS01 キーワード・カテゴリ検索**(根拠: 公式) — 未実装(コード確認: 検索欄・カテゴリ絞り込みなし。トップ user/src/pages/index.vue は人気/開催予定/終了の一覧のみ)。計画: イベントタグ(主催者が付けるカテゴリ)の仕様書あり・未実装(05_イベントタグ機能.md)。検索の仕様書 03_参加者獲得/06_イベント検索(タグ・日付・場所) は見出しのみで仕様未記述。文書のみ — [documents/03_参加者獲得/05_イベントタグ機能.md](documents/03_参加者獲得/05_イベントタグ機能.md)
- **DS04 パーソナライズ推薦**(根拠: 公式) — 未実装(コード確認)。トップの『人気のイベント』は参加人数順で全員同一(パーソナライズなし)。プロフィールタグ(興味)は実装済みだが推薦には未使用。計画: Issue #966「気になるカテゴリ」(カテゴリ登録→公開/締切を通知。マイルストーンなし)、13_成長・露出 D4-3 related events(施策案 Tier3)。文書のみ — [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md)
- **DS06 ブックマーク・ウィッシュリスト**(根拠: 公式) — 未実装(コード確認: お気に入り/いいね/ブックマークの実装なし)。計画: 仕様書『いいね(行くかも)』あり(イベントカード/ページのボタン・マイページ一覧・主催者への一覧表示・注文期限前アラートメール)。Issue #946 お気に入り機能(マイルストーン v2.16)、#1095〜#1102 いくかも関連。文書のみ — [documents/03_参加者獲得/03_いいね機能.md](documents/03_参加者獲得/03_いいね機能.md)
- **DS07 公開ディレクトリ・都市×カテゴリページ**(根拠: 実機) — 一部実装(コード確認): 公開コミュニティ一覧(/communitylist, SEO用プリレンダー handleCommunityListSeoRequest)・公開イベント一覧(トップ)・sitemap・JSON-LD・動的メタを実装済み(functions/default/src/seo/)。都市×カテゴリのハブページ(エリア別・ジャンル別)は未実装。計画: documents/12_SEO対策/01_SEO対策_タスク.md Phase 4(P4-1 エリア構造化・P4-4 ハブページ。親Issue #2195 はクローズ済みで Phase 4 は未Issue化)、13_成長・露出 D2-5(エリアハブ・L・Tier5) — [user/src/pages/communitylist/index.vue](user/src/pages/communitylist/index.vue)
- **JN03 承認制・参加申請**(根拠: 公式) — 未実装(コード確認: 注文確定で即参加。主催者が参加可否を承認する機能なし)。計画: コミュニティ参加の承認制(join_type)=Issue #2333(v2.16, 仕様 08_エンタープライズ/10_仕様/04_詳細_イベント管理.md §4)、イベント参加の承認/非承認=Issue #959(本文なし・マイルストーンなし)、参加拒否+返金=Issue #1838(v2.16)。文書のみ — [documents/08_エンタープライズ/10_仕様/04_詳細_イベント管理.md](documents/08_エンタープライズ/10_仕様/04_詳細_イベント管理.md)
- **SH03 友人・同行者の招待導線**(根拠: 実機) — 一部実装(コード確認): 注文完了ダイアログでXシェア促進・カレンダー追加・チャット誘導、主催者向けに作成後の告知ガイド(SNS/DM/QR/Slack/チラシ)。未実装: アプリ内で『ともだち』を選んでメール招待=仕様 documents/03_参加者獲得/02_友人招待機能.md, Issue #953(v2.15)/#1249(v2.16)/13_成長・露出 D1-2(Tier3) — [base/src/components/UserSuccessJoinEventDialog.vue](base/src/components/UserSuccessJoinEventDialog.vue)
- **SH05 連絡先・SNS連携で友人発見**(根拠: 実機) — 代替実装(コード確認): 同じ食事会に参加した相手が自動で『ともだち』として蓄積(マイページ/プロフィール, 食事した回数順・最近会った順・共通イベント履歴, getUserFriends)。連絡先・SNSの友人からの招待/発見は未実装(ともだち招待は SH03 の計画に同じ) — [functions/default/src/userFriends.ts](functions/default/src/userFriends.ts)
- **OP08 当日運営ツール**(根拠: 実機) — 一部実装(コード確認): 参加者の注文一覧(当日名簿代わり)/CSV、店舗向けお名前シートPDF(namesprint, 弁当箱の名前貼付)、チラシ、主催者の受取連絡先(電話)を店舗へ通知。受付アプリ・チェックイン・QR受付は未実装(documents/バックログ/受取時のチェックインシステム.md は見出しのみ。17_主催自動化 D-02〜D-04 はブレスト) — [user/src/components/manage/event/member.vue](user/src/components/manage/event/member.vue)
- **OP09 売上・入金管理**(根拠: 実機) — 一部実装(コード確認): 店舗は注文一覧で注文数・注文金額を確認。主催者請求書払いは請求書PDF・請求金額一覧(manage 請求書払いタブ)と運営(support)の入金ステータス管理/督促メール(support/src/pages/invoices)。主催者への売上払い出し・売上ダッシュボードは未実装(documents/01_マネタイズと決済/04_有料チケットの払い出し.md は要改訂・未実装, Issue #958)。店舗精算は月末締め翌月末払いの手動運用で、明細自動化は Issue #2329(v2.15・本文なし) — [partner/src/pages/order/index.vue](partner/src/pages/order/index.vue)
- **AC03 参加者データの所有・出力**(根拠: 実機) — 一部実装(コード確認): 参加者名簿(ユーザー名・SNS・プロフィール・タグ・注文)とコミュニティメンバーをCSV出力でき、レターで直接配信できる。ただしメールアドレスは主催者に開示・エクスポートされない(送信は運営基盤経由・返信先のみ主催者アドレス) — [base/src/composable/memberCsvExport.ts](base/src/composable/memberCsvExport.ts)
- **AC07 集客支援の商品**(根拠: 実機) — 一部(無料のみ): レター配信・チラシ/QR・Slack通知に加え、公開イベントはトップ掲載・週次ダイジェストメール(全ユーザー向け・毎週火曜)・LINE週次一斉配信・人気イベントメールでプラットフォームが露出。有料の掲載ブースト/広告は未実装(13_成長・露出 D4-5 プラットフォーム内有料ブースト・L・Tier5 探索・在庫/DAU条件付き) — [functions/default/src/eventInformationMail.ts](functions/default/src/eventInformationMail.ts)
- **CR03 前回参加者への優先案内**(根拠: 実機) — 一部実装(コード確認): 参加者は自動でコミュニティメンバーになり、公開イベントの最初の注文時に新着イベントメールがメンバー全員へ届く。レターでメンバー/過去参加者へ個別案内も可。先行販売・優先枠・過去参加者限定の案内は未実装(17_主催自動化 A-08・13_成長・露出 D1-6 は施策案・M・Tier3) — [functions/default/src/orderCompletionMail.ts](functions/default/src/orderCompletionMail.ts)
- **TS01 本人確認・認証**(根拠: 実機) — 一部実装(コード確認): メール+6桁パスコード/Google/Facebook/Xでアカウント認証、メール変更時も再認証。主催者の電話番号は予約申請時に必須入力(店舗連絡用)だがSMS認証なし。本人確認書類・実名確認なし。計画: Issue #934 主催者の電話番号の登録と認証・#1592 主催者の電話番号認証機能(いずれもマイルストーンなし)。バックログ『主催者の電話番号を認証登録』は見出しのみ — [user/src/pages/login.vue](user/src/pages/login.vue)
- **TS03 通報・ブロック・モデレーション**(根拠: 実機) — 一部実装(コード確認): 運営(support)がコミュニティ/店舗の承認・公開を切替(support/src/pages/communities, shops)、利用規約でアカウント停止・イベント停止、チャットは送信者による送信取り消しのみ。利用者による通報・ブロック・管理者のメッセージ削除は未実装(計画: documents/05_コミュニケーションと通知/01_チャット機能_01.md §6.3 Phase 3『管理者によるメッセージ削除/ブロック/通報』) — [functions/default/src/recallChatMessage.ts](functions/default/src/recallChatMessage.ts)
- **FD05 席の確保・貸切の連携**(根拠: 実機) — 一部実装(コード確認): イベントは店舗への『予約申請』→店舗が承認/却下(48時間以内、期限切れは自動却下・functions/default/src/rejectOrderMail.ts)して初めて注文受付開始=配達日時・枠の確保。席・個室・貸切の確保(部屋の予約台帳・最低保証料金)は未実装(documents/04_飲食店向け/04_イートイン.md §1.4 でスコープ外)。承認遅延対策のTwilio電話通知は仕様のみ(01_予約申請時のTwilio電話通知.md, Issue #1728) — [partner/src/pages/order/[eventId].vue](partner/src/pages/order/[eventId].vue)
- **FD06 コース・固定メニュー**(根拠: 実機) — 一部実装(コード確認): 弁当等の内容固定のメニューを1品単位で選べ、オプション(サイズ/トッピング)も付けられる。コース/プリフィクス(複数品の構成)の概念は未実装。計画: メニューリスト(時間帯・業態別のメニュー束)=Issue #537・documents/04_飲食店向け/03_複数店舗・複数メニューリスト.md(コースとは別概念) — [base/src/components/eventcreate/EventMenu.vue](base/src/components/eventcreate/EventMenu.vue)
- **FD10 提供形態の選択**(根拠: 公式) — 未実装(コード確認: 提供形態の選択項目なし。配送中心地・配送距離・配送時間の配達前提。画面文言に『一部イートイン/テイクアウトも選択可能』とあるがコード上の切替は確認できず)。計画: 仕様書あり 04_イートイン.md・05_テイクアウト.md・03_複数店舗・複数メニューリスト.md(業態 eatin/takeout は Phase 2)、Issue #537 メニューリスト機能(デリバリー・テイクアウト・イートイン)、#2327 お店向けチラシ。文書のみ — [documents/04_飲食店向け/04_イートイン.md](documents/04_飲食店向け/04_イートイン.md)
- **MN02 主催者向け有料プラン**(根拠: 実機) — 一部実装(コード確認): 法人向け(enterprise)にプラットフォーム利用料=有効アカウント数×単価の月額席課金を請求(請求スナップショット・月次請求書PDF enterpriseBillInvoice.ts, 仕様 08_エンタープライズ/10_仕様/03_課金.md)。契約・請求書ベースでセルフサーブのプラン購入UIはなし(1年契約化の検討 Issue #2275)。PF(個人主催者)向けの有料プラン/サブスクはなし(documents/01_マネタイズと決済/07_コーポレート向けのサブスク課金.md は見出しのみ) — [functions/default/src/enterprise/billingSnapshots.ts](functions/default/src/enterprise/billingSnapshots.ts)
- **MN04 クーポン・割引コード**(根拠: 実機) — 一部実装(コード確認): 主催者『おごり』(全額 or 1個あたり定額を主催者負担、差額は参加者が事前決済)、エンプラの福利厚生割引(月次上限)。コード入力式クーポン・早割・先着割引は未実装(documents/01_マネタイズと決済/03_無料参加・割引参加・クーポン.md の Phase 2『クーポン』は仕様のみ。Issue #960 はクローズ=おごりまで) — [common/src/utils/paymentCommunityBillOffAmount.ts](common/src/utils/paymentCommunityBillOffAmount.ts)

### Inferences

- 計画の出典が仕様書として具体的なのは DS06(いいね/いくかも)・SH03(友人招待)・FD10/FD06(イートイン・テイクアウト・メニューリスト)・MN04(クーポン Phase 2)・DS01(イベントタグ)。それ以外の計画は Issue のみまたは施策案で、実装方針が未確定。
- Issue のマイルストーンが付いている計画(#946 v2.16, #953 v2.15, #1249 v2.16, #2322 v2.15, #2217 v2.15, #963 v2.15, #1696 v2.15, #2333 v2.16, #2203 v2.16, #1838 v2.16, #2323 v2.16, #2329 v2.15)は、直近2リリース内に着手される見込み(推測)。

### Gaps

- Issue のマイルストーン日付と実リリース日の対応は未確認(最新 v2.14.0 が 2026-10-10)。

## 実装済み(✅)の主要機能の所在

### Takeaway

✅は40件。参加者側は `user`+`base`(共有コンポーネント)、店舗側は `partner`、メール/Slack/Stripe/PDF/OGP は `functions/default/src`、運営承認は `support` に実装されている。

### Cited Findings

- **DS05 フォロー** — コード確認。フォロー相当=『コミュニティに参加する』(主催者/グループ単位)。参加すると開催予定イベントの通知を受け取れる。公開イベントは最初の注文時に新着メールをコミュニティ全メンバーへ送信(functions/default/src/orderCompletionMail.ts)。注文確定でも自動加入(CR02)。会場(店舗)のフォロー・非メンバーのフォロー通知は未実装(13_成長・露出 D4-4 施策案 Tier5) — [base/src/components/CommunityMembershipButton.vue](base/src/components/CommunityMembershipButton.vue)
- **DS08 キュレーション・特集** — コード確認: トップに『人気のイベント』(参加人数順)枠と、運営設定の広告バナー枠(top_banners/center_banners/event_banners, Firestore assets/*)がある。バナーの管理UIは確認できず(Firestore直接編集と推測)。特集ページ・編集型キュレーションは未実装 — [user/src/pages/index.vue](user/src/pages/index.vue)
- **JN02 簡易ログイン** — コード確認: Google/Facebook/X(Twitter)のSNSログイン+メールアドレス+6桁パスコード(メールOTP)ログイン。アプリ内ブラウザ向け案内あり(inapp-login.vue)。電話番号(SMS)ログインなし — [user/src/pages/login.vue](user/src/pages/login.vue)
- **JN05 定員・残席の表示** — コード確認: イベントページに『参加 N / 定員』、イベントカードに【参加】N人/M人、定員到達で『満席』ステータス表示・注文不可。残席数そのものの表記はなし — [base/src/components/EventDetailsCard.vue](base/src/components/EventDetailsCard.vue)
- **JN06 追加質問・同行者の入力** — コード確認: コミュニティで作るフォーム(短文/長文/メール/電話/日付/チェック/ラジオ/プルダウン)を事前アンケートとしてイベントに設定し、注文時に回答。回答一覧とCSV出力あり(EventFormResponsesPanel.vue)。同行者の個別入力は未実装(注文個数=人数。Issue #1696 注文時の参加人数の設定・v2.15 は計画)。エンプラ版イベントはフォーム非対応 — [user/src/pages/cart/form/[communityAccount]/[eventId].vue](user/src/pages/cart/form/[communityAccount]/[eventId].vue)
- **JN07 参加者のセルフキャンセル** — コード確認: 注文期限まで本人が注文履歴から個別キャンセルでき、事前決済分はStripeで自動返金(functions/default/src/cancelOrders.ts)。システム利用料は返金されない。期限後はキャンセル不可(CancelPolicyDialog.vue) — [base/src/components/UserEventCard.vue](base/src/components/UserEventCard.vue)
- **JN08 カレンダー追加** — コード確認: イベントページ・注文完了ダイアログからGoogleカレンダー/ICS追加。注文完了メールに invite.ics を添付(functions/default/src/makeIcs.ts)。コミュニティのカレンダー購読URLは未実装(13_成長・露出 D6-2 施策案)。Googleカレンダー自動登録は Issue #676(計画) — [base/src/components/CalendarAddDialog.vue](base/src/components/CalendarAddDialog.vue)
- **JN09 開催前リマインド** — コード確認(メール/Slack): 注文期限の前にコミュニティメンバーへ未注文リマインド(orderDeadlineMail.ts)、カート放置メール(inCartNotification.ts)、注文期限後に参加確定メール(参加者)、Slack連携先に期限N日前/開始N分前リマインド(slackEventNotification.ts)。確定参加者向けの開催前日リマインド(メール既存仕様 3.1.3)は実装未確認。プッシュ通知は未実装(仕様 05_コミュニケーションと通知/02_プッシュ通知.md, Issue #962/#2088) — [functions/default/src/pollingTask.ts](functions/default/src/pollingTask.ts)
- **JN11 参加者一覧の閲覧** — コード確認: イベントページに参加者アバター一覧、/c/{account}/e/{id}/members で参加者プロフィール(タグ・SNS)を閲覧。主催者が『常時表示/指定人数到達後に表示』を設定可(members_visible_min_count)。コミュニティの is_show_member=false で一覧を非表示にもできる(設定画面は確認できず・運営/DB設定と推測) — [base/src/components/EventMemberList.vue](base/src/components/EventMemberList.vue)
- **JN12 イベント後の体験** — コード確認: イベント終了時に参加者へ事後アンケートメール、主催者が登録するアルバム写真(イベント/コミュニティページ表示, base/src/components/manage/community/CommunityAlbum.vue)、イベントグループチャットは終了後も読み取り専用で閲覧可。参加者によるレビュー/写真投稿は未実装(バックログ『イベントへのレビュー機能』は見出しのみ) — [functions/default/src/eventConclusionMail.ts](functions/default/src/eventConclusionMail.ts)
- **SH01 共有用URL・OGPカード** — コード確認: /c/{account}/e/{id} とコミュニティURLにタイトル/画像/説明の動的OGPを注入(handleEventOgpRequest, handleCommunityOgpRequest)。SNSクローラ向けフォールバック(#2163)と管理画面URLのOGP(#2082, handleManageOgpRequest)は development のみで v2.14(main) 未反映 — [functions/default/src/ogpRequest.ts](functions/default/src/ogpRequest.ts)
- **SH02 SNS・メッセージ共有ボタン** — コード確認: イベントページにX/Facebook/LINE共有ボタンとURLコピー(文面・ハッシュタグ自動入り)、注文完了後にXシェア。WhatsApp/iMessage専用ボタンなし — [base/src/utils/shareSnsButton.ts](base/src/utils/shareSnsButton.ts)
- **SH06 社会的証明の表示** — コード確認: イベントページに参加者アバター・プロフィールタグ・人数(N/定員)、イベントカードに参加人数とアバター(トップ一覧はアバター非表示)。主催者が表示開始人数を設定可(members_visible_min_count) — [base/src/components/EventMemberList.vue](base/src/components/EventMemberList.vue)
- **SH07 QR・短縮URL・チラシ生成** — コード確認: イベントページでQRコード表示(vue-qrious)、QRコード付きチラシPDF自動生成(イベント管理『チラシ』タブ, flyer Function)、Canvaテンプレ配布。短縮URLは未実装(Issue #2322 イベントページ短縮URL・v2.15。仕様 documents/03_参加者獲得/08_短縮URL生成.md は見出しのみ) — [functions/default/src/flyer.ts](functions/default/src/flyer.ts)
- **OP01 簡単な作成** — コード確認: 5ステップのウィザード(場所・日時→店舗選択→メニュー→イベント詳細→店舗への連絡事項/予約申請)。各ステップで仮保存可、コミュニティ名/カバー画像の初期値、過去イベントのコピー作成で短縮。1ページ化(documents/02_主催者獲得と継続/07_イベント作成の1ページ化.md)は見出しのみ。公開には店舗の予約承認が必要(FD05)。エンプラ版向けテンプレイベントは Issue #2211/#2212 — [base/src/components/EventEdit.vue](base/src/components/EventEdit.vue)
- **OP02 コピー・繰り返し作成** — コード確認: 過去イベントの単発コピー(eventCopy)と繰り返しコピー(日/週/月/年間隔・毎月同日/同曜日・最大12回・店舗の営業日に合わせ自動スキップ)で下書き作成(CopyEventDialog.vue)。シリーズID管理・自動公開/自動予約申請の自動パイプラインは未実装(17_主催自動化 O-03/O-05/O-07 はブレスト) — [functions/default/src/eventCopyRepeat.ts](functions/default/src/eventCopyRepeat.ts)
- **OP03 下書き・限定公開** — コード確認: 各ステップで仮保存(in_draft)、公開イベント/URL限定公開(is_public)、論理削除。下書き中は参加者の注文不可。『告知開始前』ステータスは要検討(Issue #689) — [base/src/components/EventEdit.vue](base/src/components/EventEdit.vue)
- **OP05 共同主催・運営メンバー権限** — コード確認: コミュニティ管理者を招待URL(1週間有効・1回限り)で追加/解除、複数管理者可、追加/解除はメール通知(communityManager.ts)。ロールは管理者/メンバーの2段階のみ(オーナー/スタッフ等の権限細分化なし)。管理者リクエスト/承認は Issue #2203(v2.16) — [base/src/components/manage/community/ManagerInvitationDialog.vue](base/src/components/manage/community/ManagerInvitationDialog.vue)
- **OP06 参加者管理・名簿出力** — コード確認: イベント管理『参加者』タブで注文一覧(ステータス/メニュー/オプション/金額/注文日時)とCSVダウンロード(ユーザー名・SNS・プロフィール・タグ)。メールアドレス列はない(AC03)。フォーム回答もCSV出力可、コミュニティメンバー一覧もCSV可 — [user/src/components/manage/event/member.vue](user/src/components/manage/event/member.vue)
- **OP07 一斉メッセージ** — コード確認: レター(メール一斉配信): コミュニティメンバー/イベント参加者/イベント未登録者に配信、予約配信・テスト配信・下書き、個人宛レター(EmailDialog, sendIndividualLetter)。Slack連携の自動通知あり。LINEは運営アカウントの週次一斉配信のみで主催者は使えない。プッシュ通知は未実装(Issue #962) — [base/src/components/manage/event/EventLetter.vue](base/src/components/manage/event/EventLetter.vue)
- **OP11 主催者ページ・グループページ** — コード確認: コミュニティの公開ページ(/c/{account}: カバー・説明・アルバム・開催イベント一覧(終了分含む)・メンバー・SNS/お問い合わせ・参加/退会ボタン)。個人プロフィールページ(/u/{userId})もあり — [user/src/pages/c/[communityAccount]/index.vue](user/src/pages/c/[communityAccount]/index.vue)
- **OP12 外部ツール連携・API** — コード確認: Slack App連携(注文通知・注文期限リマインド・開始リマインド・終了通知。slackbot.ts/slackOrderNotification.ts/slackEventNotification.ts)、Googleカレンダー/ICS追加、Canva(外部テンプレ)。公開API/Webhook/Zoom/Mailchimp連携はなし(13_成長 D3-3 公開API/MCP・17_主催自動化 I-04 はブレスト・探索)。Googleカレンダー自動登録は Issue #676 — [base/src/components/manage/community/CommunitySlackSetting.vue](base/src/components/manage/community/CommunitySlackSetting.vue)
- **AC01 無料イベントは無料** — コード確認(文言・手数料ロジック): 主催者利用料は無料(コミュニティ作成・イベント開催・メール配信など全機能)。費用は選んだ支払い方式で発生(参加者の事前決済=参加者にシステム利用料110円/決済、主催者請求書払い=注文額の10%。common/src/utils/paymentUserFee.ts)。食事注文のない純粋な『無料イベント』は『食事は持参する』参加枠で可能だが、店舗予約が前提 — [user/src/locales/messages/ja.ts](user/src/locales/messages/ja.ts)
- **AC02 手数料負担の選択** — コード確認: イベント作成時に支払い方式を選択: 参加者事前決済(参加者がシステム利用料110円を負担・主催者は手数料なし)/主催者請求書払い(主催者に10%手数料。全額おごり・1個あたり定額おごり)/福利厚生割引(エンプラのみ)。予約申請後は変更不可 — [base/src/components/eventcreate/EventDetailCard.vue](base/src/components/eventcreate/EventDetailCard.vue)
- **AC06 主催者向け教育・テンプレ** — コード確認: 主催者管理画面のナビに『コミュニティガイド』『告知・集客のコツ』『カバーのテンプレ』『チラシのテンプレ』(Canva/Googleスライド等の外部リンク)、イベント開催手順の解説モーダル、noteマガジン、導入オンラインMTG(日程調整フォーム)。ガイドは外部ドキュメント中心でアプリ内の事例集・ウェビナーは未確認 — [user/src/navigation/manage.ts](user/src/navigation/manage.ts)
- **CR01 ダイジェスト・おすすめ通知** — コード確認: 公開イベント(定員未満・最大12件)の週次ダイジェストメールを全ユーザーへ毎週火曜10:15配信(配信停止グループあり)、LINE公式アカウントへ週次一斉配信(金曜12:15, lineBroadcast.ts)、人気イベントメール、コミュニティメンバーへの新着イベントメール。内容はパーソナライズなし。プッシュ通知は未実装 — [functions/default/src/eventInformationMail.ts](functions/default/src/eventInformationMail.ts)
- **CR02 自動メンバー化** — コード確認: 注文確定時に community.addMember で自動的にコミュニティメンバーになり、以後の新着イベントメール/レターの宛先に入る。『コミュニティに参加/退会』ボタンで手動の参加・退会も可(管理者は退会不可) — [functions/default/src/orderConfirmedSideEffects.ts](functions/default/src/orderConfirmedSideEffects.ts)
- **CR04 主催者CRM・購読者リスト** — コード確認: 注文確定で自動蓄積されるコミュニティメンバー一覧(CSV出力可)、レターの配信先セグメント(コミュニティメンバー全体/イベント参加者/イベント未登録者/個別)。任意条件(参加回数・タグ等)でのセグメントや外部CRM連携はなし。一覧からの個別配信強化は Issue #1089 — [base/src/components/manage/community/CommunityMemberTable.vue](base/src/components/manage/community/CommunityMemberTable.vue)
- **CR05 参加履歴・バッジ・実績** — コード確認: マイページ/プロフィールに参加イベント数・ともだち数・参加/運営コミュニティ数・フード注文数を集計表示(recountUserProfileCounts)、友人ごとの『食事した回数』。バッジ/アチーブメントは未実装(Issue #968 アチーブメント機能・マイルストーンなし、documents/03_参加者獲得/07_アチーブメント系機能.md は見出しのみ) — [base/src/components/profile/UserProfileStatsSummaryCard.vue](base/src/components/profile/UserProfileStatsSummaryCard.vue)
- **CR07 グループチャット・掲示板** — コード確認: イベント参加者のグループチャット(テキスト・画像添付・リアクション・送信取り消し・未読バッジ・未読メール通知 chatUnreadMail.ts)。注文完了後に開設、終了後は読み取り専用。コミュニティチャット(Issue #2217・v2.15)・既読表示(#2219)・モデレーション・プッシュ通知(#2088・v2.16)は未実装。掲示板なし — [base/src/components/chat/ChatApp.vue](base/src/components/chat/ChatApp.vue)
- **TS02 主催者の審査・認定** — コード確認: コミュニティは新規作成後に運営(support)が承認(is_approved)するまでイベント作成不可、店舗も運営承認制(support/src/pages/shops)。規約でイベント内容の審査・停止を明記(terms/content/user.md 第25条)。段階的な権限付与・認定バッジはなし。コミュニティの is_approved を自己承認できないようにする Issue #2452 は未解決 — [support/src/pages/communities/index.vue](support/src/pages/communities/index.vue)
- **TS04 ドタキャン対策** — コード確認: 事前決済(Stripe: カード/Apple Pay/Google Pay/PayPay)が基本で、キャンセルは注文期限まで0%・期限以降は不可(100%)、システム利用料は返金なし。最小催行人数による自動中止+全額返金(functions/default/src/minimumParticipants.ts)。規約で過度なキャンセルを禁止(第25条17)。欠席料・デポジットの別建てなし。当日払いはUIから除外済み — [base/src/components/CancelPolicyDialog.vue](base/src/components/CancelPolicyDialog.vue)
- **TS05 参加者情報の保護** — コード確認: 参加者一覧の表示開始人数(指定人数まで非表示・主催者が設定)、コミュニティ側の参加者表示OFF(is_show_member・設定画面は確認できず)、URL限定公開、参加者0人時は一覧非表示。強化計画: Issue #2368/#2378/#2379/#2380/#2387/#2388(段階表示・ぼかし・参加者本人の掲載選択・非公開時の応答除外)は未実装 — [common/src/utils/eventParticipantsVisibility.ts](common/src/utils/eventParticipantsVisibility.ts)
- **FD01 メニューの事前注文・選択** — コード確認: イベントページのメニュー一覧から選択→カート→事前決済(オプション: 単一/複数・必須/任意・金額差分に対応。Phase 1実装済み)、『食事は持参する』(注文なし参加)も選択可。サイドメニュー(Issue #542)・主催者独自メニュー(#2323・v2.16)は未実装 — [base/src/components/EventMenuList.vue](base/src/components/EventMenuList.vue)
- **FD03 店舗向け管理画面** — コード確認: partner アプリ(店舗管理画面): 店舗設定(配送範囲/最小注文数/営業時間/注文期限/複数メール)、メニュー・オプション管理(並び替え・売り切れ・限定食数・販売期間)、予約申請の承認/却下、注文一覧・詳細、お名前シートPDF。店舗主催イベントの作成画面(partner/src/pages/events/create.vue)はあるがナビ非掲載 — [partner/src/pages/order/[eventId].vue](partner/src/pages/order/[eventId].vue)
- **FD04 人数確定の店舗通知・集計** — コード確認: 注文期限になると確定注文(参加者名・メニュー・金額の明細と合計個数/金額)を店舗へメール自動送信(sendOrderDeadlineMailToShop。期限1日前の予告も)、店舗画面でメニュー別小計・合計個数を集計表示。定員変更時の店舗通知は未実装(documents/04_飲食店向け/11_定員数変更時の店舗通知.md は空)。予約申請時の電話通知(Twilio)も未実装(Issue #1728) — [functions/default/src/orderDeadlineMail.ts](functions/default/src/orderDeadlineMail.ts)
- **FD07 割り勘・個別会計** — コード確認: 参加者ごとに個別の注文・決済(Stripe Checkout: カード/Apple Pay/Google Pay/PayPay)と個別の領収書DL。主催者が全額/定額おごり→主催者に請求書払い。各自が自分の分だけ注文する設計で、1つの会計を按分する割り勘ツールはなし。当日払い(user_on_day)はUIから除外済み — [base/src/components/pages/cart.vue](base/src/components/pages/cart.vue)
- **FD08 店探し・店選び支援** — コード確認: 開催場所の郵便番号と開催日時から、配達可能・営業時間内の店舗一覧を表示し(common/src/utils/partnerShopDeliverable.ts)、店舗情報・注文最小個数・メニューを見比べて1店舗選択。店舗一覧/店舗公開ページ・評価での比較は未実装(Issue #963 飲食店一覧ページ・v2.15、12_SEO対策 P4-5 店舗公開ページ)。店舗リクエスト(#965)も未着手 — [base/src/components/eventcreate/EventShop.vue](base/src/components/eventcreate/EventShop.vue)
- **FD09 売り切れ・限定数の管理** — コード確認: 店舗が売り切れを切替→注文受付中の全イベントに数秒で反映(onPartnerMenuSoldOutChanged)、1イベントあたり限定食数の設定と残り食数表示・サーバー検証(common/src/utils/menuLimit.ts)、期間限定メニュー(販売期間)。1日あたり(複数イベント横断)の上限は Phase 2 未実装(documents/04_飲食店向け/14_限定食数機能.md) — [functions/default/src/eventMenusSoldOutSync.ts](functions/default/src/eventMenusSoldOutSync.ts)
- **MN01 手数料の明示** — コード確認: トップ/ガイドに料金を明記(主催者利用料無料・請求書払い手数料10%・最小個数未満は配送料)、カートで決済前にシステム利用料(1決済あたり税込110円・自己負担がある場合のみ)を総額表示(PaymentFeeNoteButton.vue)、請求書に手数料明細、特商法ページ(terms/content/specified_commercial_transactions.md)。飲食店向け手数料は現行3.6%→13.6%へ引上げ予定(Issue #969・v2.15) — [user/src/locales/messages/ja.ts](user/src/locales/messages/ja.ts)

### Inferences

- 実装は `base`(共有 Vue コンポーネント・store・composable)に集約され、`user`/`enterprise`/`partner` が薄く利用する構成のため、機能追加は `base` と `functions/default` が主な改修点になる(推測)。
- 注文・決済・メール・Slack・OGP・チラシ・チャットなどの重い処理は Firebase Functions(`functions/default/src/index.ts` の export)で完結しており、外部連携(SendGrid, Stripe, Slack, LINE, Adobe PDF)に依存している。

### Gaps

- 画面操作での動作確認(実機スクリーンショット)は未実施。コード・テスト・リリース状態で代替。

## ❌(なし)と文書での言及レベル

### Takeaway

❌は17件。うち『見出しのみのバックログ文書/ブレスト/施策案には言及がある』ものが多く、仕様書・本文付きIssueが無いため △ にしていない。

### Cited Findings

- **DS02 地域・地図検索** — コード確認(不在): 都市・駅・現在地・地図での絞り込みなし。地図はイベント詳細のGoogleマップ検索リンクのみ(base/src/components/EventDetailsCard.vue)。仕様書 06_イベント検索(場所検索)は見出しのみ。施策案: 13_成長・露出 D2-5 エリアハブ(Tier5)。主催者側の郵便番号→配達可能店舗検索は別機能(FD08) — [user/src/pages/index.vue](user/src/pages/index.vue)
- **DS03 日付・価格等の絞り込み** — コード確認(不在): 日付・曜日・価格帯などの絞り込み UI なし(開催予定は開催日時の昇順/終了は降順で並ぶだけ)。仕様書 06_イベント検索(日付検索)は見出しのみ。施策案: 13_成長・露出 D4-1(今週開催・満席間近の面を追加, Tier4) — [user/src/pages/index.vue](user/src/pages/index.vue)
- **JN01 アカウント不要の申込** — コード確認: 注文(参加)にはログイン必須(未ログインでメニュー選択すると『ご注文にはログインが必要です』で登録/ログイン画面へ誘導)。閲覧は未ログインで可。エンプラのゲスト参加(Issue #2332, v2.18)もメールOTP/SNSログイン前提でアカウント不要ではない — [user/src/pages/c/[communityAccount]/e/[eventId]/index.vue](user/src/pages/c/[communityAccount]/e/[eventId]/index.vue)
- **JN04 ウェイトリスト** — コード確認(不在): 満席時はカート追加不可(『定員に達しました』)で待ち登録なし。バックログ『キャンセル待ちの登録』は見出しのみ。17_主催自動化 O-15(Waitlist自動繰り上げ・確度中)はブレストのみ。Issue なし — [documents/バックログ/キャンセル待ちの登録.md](documents/バックログ/キャンセル待ちの登録.md)
- **JN10 QRチケット・当日受付** — コード確認(不在): QRチケット・チェックイン・受付機能なし。バックログ『受取時のチェックインシステム』は見出しのみ。17_主催自動化 D-02(当日注文一覧PDF/QR送付)はブレストのみ。Issue なし — [documents/バックログ/受取時のチェックインシステム.md](documents/バックログ/受取時のチェックインシステム.md)
- **SH04 紹介リンク・紹介の可視化** — コード確認(不在): 紹介リンク・紹介元の追跡/表示なし(UTM・referral パラメータの実装なし)。施策案のみ: 13_成長・露出 D6-4(共有URLのUTMプリセット)・D6-6(初回接触チャネル属性)・P2-1(招待キャンペーン)。Issue なし — [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md)
- **SH08 埋め込みウィジェット** — コード確認(不在): 埋め込みウィジェット・公開API・外部向け購読フィードなし。施策案のみ: 13_成長・露出 D6-1(Notion/社内ポータル向けウィジェット・M・Tier5・認証/テナント境界が未決§11#7)。関連: Issue #898 RSS対応(v2.15・本文なし) — [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md)
- **OP04 AI作成支援** — コード確認(不在): 生成AI/LLM連携のコードなし。バックログ『イベントAI生成機能』『イベントページテンプレート』は見出しのみ。ブレスト/施策案: 17_主催自動化 I-03(説明文のAI生成)、13_成長・露出 D1-1(SNS投稿文自動生成)・D5-1(イベント名ウィザード)。現状の補助はCanvaテンプレのリンクとタイトル/説明の初期値のみ — [documents/バックログ/イベントAI生成機能（カバー画像・文言）.md](documents/バックログ/イベントAI生成機能（カバー画像・文言）.md)
- **OP10 流入・申込の分析** — コード確認(不在): 主催者向けの閲覧数・申込転換・流入元(UTM)分析なし(Firebase Analytics は運営側計測のみ)。エンプラ版のみ全社管理者ダッシュボード(月別/メンバー別の利用金額・回数, CSV)。13_成長・露出 D6-4/D6-5・Issue #2382(人数表示の転換率計測)は運営側の計測施策 — [user/src/pages/manage/event/[eventId]/[tab].vue](user/src/pages/manage/event/[eventId]/[tab].vue)
- **AC04 他サービスからの移行** — コード確認(不在): 他サービス(Peatix/connpass等)からのイベント・参加者の取り込み/移行機能なし(エンプラ版のみ従業員CSV一括取込)。ブレスト/施策案: 17_主催自動化 A-01/A-02(外部への自動投稿・同期)、13_成長・露出 D3-1(検証前)・P4-1(手動の並行掲載) — [documents/02_主催者獲得と継続/17_主催自動化.md](documents/02_主催者獲得と継続/17_主催自動化.md)
- **AC05 主催者紹介・アンバサダー** — コード確認(不在): 主催者の紹介報酬/アフィリエイト/アンバサダー制度なし。施策案のみ: 13_成長・露出 P5-8(幹事アンバサダー・UGC)、P2-1(招待キャンペーン)。Issue #965『飲食店を紹介してね』は店舗側の紹介リクエスト(未着手)。documents/04_飲食店向け/09_飲食店紹介プログラム.md は見出しのみ — [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md)
- **CR06 レビュー・評価** — コード確認(不在): イベント/主催者/店舗/フードのレビュー・評価機能なし。バックログ『イベントへのレビュー機能』・documents/04_飲食店向け/08_フードのレビュー機能.md は見出しのみ(仕様未記述)。Issue なし — [documents/バックログ/イベントへのレビュー機能.md](documents/バックログ/イベントへのレビュー機能.md)
- **CR08 年間まとめ・振り返り共有** — コード確認(不在): 年間振り返り(Wrapped型)なし。施策案・ブレストのみ: 13_成長・露出 D2-8(年間振り返りSNSシェア・L・Tier5探索)、17_主催自動化 K-06。Issue なし — [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md)
- **TS06 直接取引の抑止** — コード確認(不在): 外部誘導・直接取引を禁止する規約/仕組みは確認できず(利用規約第25条は営業・勧誘行為の禁止で、取引迂回の禁止ではない)。決済はプラットフォーム(Stripe一括受領)経由が基本のため構造上の余地は小さい — [terms/content/user.md](terms/content/user.md)
- **FD02 アレルギー・食の好みの登録** — コード確認(不在): アレルギー/食の好み/ベジ・ハラル等の登録・店舗共有なし(オプションメニュー仕様 §1.4 でスコープ外と明記)。代替: 主催者が事前アンケートフォームで自由設問は可(主催者のみ閲覧・店舗へは共有されない)。プロフィールタグは趣味・関心用で食の制約ではない — [documents/04_飲食店向け/02_オプションメニュー.md](documents/04_飲食店向け/02_オプションメニュー.md)
- **MN03 任意チップ・寄付** — コード確認(不在): チップ・寄付の上乗せなし(『おごり』は主催者が参加者の食事代を負担する機能で別物)。仕様・Issue・施策案なし — [base/src/components/pages/cart.vue](base/src/components/pages/cart.vue)
- **MN05 ポイント・会員特典** — コード確認(不在): ポイント/ロイヤルティ/会員特典なし。近いもの: エンプラ版の福利厚生割引(企業負担の補助)は会員特典だがロイヤルティ施策ではない。バッジ/アチーブメント(Issue #968)は未着手で見出しのみ — [documents/03_参加者獲得/07_アチーブメント系機能.md](documents/03_参加者獲得/07_アチーブメント系機能.md)

- ？(確認不可)
  - **AC08 運営主催・公式イベント** — リポジトリから確認不可: 運営(ニジュウニ)自身の公式イベント開催実績はFirestoreデータ側にありコード/文書で確認できない。計画(施策案・ブレスト): 13_成長・露出 P5-9(季節の運営公式イベント)、17_主催自動化 S-04(公式オープンテーブル)。参考: 神田カレーグランプリ向けOEM(subdomain_tags: kanda-curry)の実績あり(共催/主催の別は確認不可) — [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md)

### Inferences

- 『バックログ見出しのみ』(キャンセル待ち・チェックイン・AI生成・レビュー・パスワード保護・日程調整・イベントページテンプレート・イベント管理者機能)は文書化はされたが仕様未記述で、決定材料としては『未着手』と同等に扱うのが安全。 — [documents/バックログ](documents/バックログ)

### Gaps

- DS02/DS03 は『見出しのみ』仕様(06_イベント検索)に対応する Issue が見当たらない(`gh issue list` を『検索』『地図』で絞って該当なし)。

## 競合の標準装備と比べた自社の穴(推測)

### Takeaway

参加者側の発見・低摩擦申込・共有拡散(招待/紹介/埋め込み)と、信頼・安全(通報/ブロック/本人確認)、主催者の分析・AI支援が、イベント告知サービス一般の標準装備に対して自社の穴になる(推測)。食事・店舗連携は自社固有の強み。

### Cited Findings

- 自社の発見面は『トップの人気/開催予定/終了一覧+公開コミュニティ一覧』のみで、検索・地図・絞り込み・推薦・ブックマークがない。 — [user/src/pages/index.vue](user/src/pages/index.vue), [user/src/pages/communitylist/index.vue](user/src/pages/communitylist/index.vue)
- 自社の露出戦略文書自身が『公開在庫の再配信・フィード・related が弱い』『参加者→幹事転換が未体系』『店頭QR・埋め込みが未整備』を弱点として挙げている。 — [documents/13_成長・露出/01_露出獲得施策.md](documents/13_成長・露出/01_露出獲得施策.md)
- 注文にはログイン必須(アカウント不要の申込なし)。 — [user/src/pages/c/[communityAccount]/e/[eventId]/index.vue](user/src/pages/c/[communityAccount]/e/[eventId]/index.vue)
- 通報・ブロックは未実装で、チャットのモデレーションは Phase 3 計画。 — [documents/05_コミュニケーションと通知/01_チャット機能_01.md](documents/05_コミュニケーションと通知/01_チャット機能_01.md)
- 食事固有でアレルギー/食の好み、提供形態(イートイン/テイクアウト)、コース、席・貸切の確保は未実装または計画のみ。 — [documents/04_飲食店向け/04_イートイン.md](documents/04_飲食店向け/04_イートイン.md), [documents/04_飲食店向け/02_オプションメニュー.md](documents/04_飲食店向け/02_オプションメニュー.md)

### Inferences

- **標準装備だが自社に無い(穴)**: DS01〜DS04(検索・地図・絞り込み・推薦)、DS06(ブックマーク)、JN01(アカウント不要の申込)、JN04(ウェイトリスト)、JN10/OP08(QRチケット・受付)、SH04/SH08(紹介リンク・埋め込み)、OP04(AI作成支援)、OP10(流入・申込分析)、CR06(レビュー)、TS03(通報・ブロック)、MN03/MN04(チップ・クーポンコード)。
- **自社の強み(競合に少ない・食事固有)**: FD01/FD03/FD04/FD07/FD08/FD09(事前注文・店舗管理画面・店舗への自動確定通知・個別決済・店舗選び・売り切れ/限定食数)と、OP02(繰り返しコピー)・OP07(レター)・CR02(注文で自動メンバー化)・SH07(QR+チラシPDF)・CR07(イベントグループチャット)。
- **穴の中でも事業モデル上 優先度が分かれる**: 低摩擦申込(JN01)とウェイトリスト(JN04)は『注文=決済』モデルのため実装コストが高い。発見面(DS)は SEO(公開一覧・sitemap・JSON-LD・OGP は✅)の延長で伸ばせるが、都市×カテゴリのハブページが未実装(DS07 △)。
- **飲食店SaaS(予約台帳系)との比較**: 席・個室・貸切の確保(FD05 △)、提供形態(FD10 △)、アレルギー(FD02 ❌)、コース(FD06 △)は予約系サービスの標準で、イートイン拡張(Phase 2 仕様あり)が実装されるまで穴。

### Gaps

- 競合各社の実際の提供状況は本ノートの対象外(別ノートで調査)。ここでの『標準装備』は一般的な認識に基づく推測。

## 境界ケース(判断が分かれうる判定)

### Takeaway

次の判定は基準のとり方で ✅/△/❌ が変わりうる。マトリクス化時に再確認すること。

### Cited Findings

- **JN09 開催前リマインド**(現判定 ✅) — 開催前の自動リマインドは『注文期限前の未注文リマインド・参加確定メール・Slack通知』で、確定参加者への開催前日リマインド(メール既存仕様 3.1.3)は未実装。厳密には△の可能性 — [functions/default/src/pollingTask.ts](functions/default/src/pollingTask.ts)
- **OP01 簡単な作成**(現判定 ✅) — 5ステップのウィザード+コピーで作成。『1ページ/テンプレートで短時間』を厳密に読むと△の可能性(1ページ化は見出しのみ) — [base/src/components/EventEdit.vue](base/src/components/EventEdit.vue)
- **OP05 共同主催・運営メンバー権限**(現判定 ✅) — 共同主催者の追加はあるが権限は管理者/メンバーの2段階のみ。『権限を分けられる』を厳密に読むと△ — [base/src/components/manage/community/ManagerInvitationDialog.vue](base/src/components/manage/community/ManagerInvitationDialog.vue)
- **OP12 外部ツール連携・API**(現判定 ✅) — 外部連携は Slack のみ(+カレンダーリンク)。API/Webhook/Zoom/Mailchimp なし。厳密には△ — [base/src/components/manage/community/CommunitySlackSetting.vue](base/src/components/manage/community/CommunitySlackSetting.vue)
- **DS08 キュレーション・特集**(現判定 ✅) — 人気ランキング(自動)とバナー枠(管理UIなし)のみ。編集型の特集面はなく、厳密には△ — [user/src/pages/index.vue](user/src/pages/index.vue)
- **AC01 無料イベントは無料**(現判定 ✅) — 主催者利用料は無料だが『無料イベント』の概念はなく店舗予約・食事注文が前提(注文なし参加は選択肢)。支払い方式で手数料が発生 — [user/src/locales/messages/ja.ts](user/src/locales/messages/ja.ts)
- **AC06 主催者向け教育・テンプレ**(現判定 ✅) — 教育コンテンツは外部リンク(Googleスライド/Canva/note)中心でアプリ内の事例集・ウェビナーは未確認 — [user/src/navigation/manage.ts](user/src/navigation/manage.ts)
- **SH03 友人・同行者の招待導線**(現判定 △) — 注文完了後のXシェア促進はあるため✅とみなす余地もあるが、アプリ内でのともだち招待(仕様あり)は未実装 — [base/src/components/UserSuccessJoinEventDialog.vue](base/src/components/UserSuccessJoinEventDialog.vue)
- **SH05 連絡先・SNS連携で友人発見**(現判定 △) — 『同席者が自動でともだち』という代替実装。連絡先/SNS連携による友人発見ではないため△ — [functions/default/src/userFriends.ts](functions/default/src/userFriends.ts)
- **JN03 承認制・参加申請**(現判定 △) — イベント参加の承認機能はなく、Issue(#959 本文なし, #1838 参加拒否+返金, #2333 コミュニティ承認制)のみ。❌とも読める — [documents/08_エンタープライズ/10_仕様/04_詳細_イベント管理.md](documents/08_エンタープライズ/10_仕様/04_詳細_イベント管理.md)
- **DS01 キーワード・カテゴリ検索**(現判定 △) — 検索は未実装。イベントタグ(カテゴリ)の仕様書のみを根拠に△。❌とも読める — [documents/03_参加者獲得/05_イベントタグ機能.md](documents/03_参加者獲得/05_イベントタグ機能.md)
- **MN02 主催者向け有料プラン**(現判定 △) — 法人向け(enterprise)の席課金のみ。PF の主催者向けプランはなし。❌とも読める — [functions/default/src/enterprise/billingSnapshots.ts](functions/default/src/enterprise/billingSnapshots.ts)
- **MN05 ポイント・会員特典**(現判定 ❌) — エンプラの福利厚生割引は会員特典とも読めるが、ロイヤルティ施策ではないため❌ — [documents/03_参加者獲得/07_アチーブメント系機能.md](documents/03_参加者獲得/07_アチーブメント系機能.md)
- **TS01 本人確認・認証**(現判定 △) — メールOTP/SNSログインを『認証』とみなして△。電話・本人確認書類による本人確認はなし — [user/src/pages/login.vue](user/src/pages/login.vue)
- **AC03 参加者データの所有・出力**(現判定 △) — 名簿CSVはあるがメールアドレスは主催者に出ない。レター配信で代替 — [base/src/composable/memberCsvExport.ts](base/src/composable/memberCsvExport.ts)

### Inferences

- 競合比較で『自社の標準装備カバー率』を出すときは、✅を厳密に読む場合 JN09/OP01/OP05/OP12/DS08 を△に落とす感度分析(✅40→35)を併記するのが安全(推測)。

### Gaps

- 関連する未解決のセキュリティ Issue(#2452 コミュニティの is_approved の自己承認・#2443 メールOTPの試行制限なし・#2440 名簿/チラシPDFがログイン確認のみで取得可・#2444 イベント説明HTMLの未サニタイズ)は信頼・安全(TS01/TS02)の実質的な強度に影響するが、本判定は『機能の有無』のみを対象とした。

