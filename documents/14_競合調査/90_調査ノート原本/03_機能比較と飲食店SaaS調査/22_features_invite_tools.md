# Luma・Partiful・Posh の機能判定(タクソノミー77機能)

判定の正本は同じフォルダの `features/luma.csv`、`features/partiful.csv`、`features/posh.csv`(各77行・ヘッダー除く)。本書はその要約と、確認できなかった点・食い違いの記録である。調査日は2026-10-11。判定ルールはタクソノミー(v0.1)に従い、「公式に存在を確認」=✅、有料プラン限定・地域限定・アプリのみ・一部のみ=△(条件を note に記載)、「非対応と明記」=❌、確認できない=？とした。

注意(入力ノートの不在): 依頼文で指定された3つの既存調査ノート(`02_social_invite_tools.md`、`07_cross_cutting_growth_tactics.md`、`03_luma_partiful_posh.md`)は指定パスに存在しなかった。代わりに、リポジトリ内でそれらを統合した `documents/14_競合調査/10_概観/` の4文書(01_サービス概観、02_グロースストーリー、03_参加者獲得_機能と施策、04_主催者獲得_機能と施策)を「既存ノート」として使い、機能の有無は公式ヘルプ・料金ページ・公式ブログを直接開いて確認した。「グロース根拠あり」の付与も、この4文書の記述に基づく。

## 1. Luma の77機能判定

### Takeaway
Luma は77機能中、✅44・△19・❌1・？13。主催者運用(承認制・待機リスト・CRM・Insights・紹介の可視化・埋め込み・API)と共有・発見(OGP、紹介リンク、都市ページ、キュレーション)が公式ヘルプで厚く確認でき、API・Zapier・Webhooks・check-inスタッフなどの一部だけがPlus(月$59)限定である。食事・店舗連携(FD)は専用機能が確認できなかった。

### Cited Findings
- 判定の内訳: ✅44(DS01 DS02 DS04 DS05 DS07 DS08 JN01〜JN04 JN08〜JN12 SH01 SH03〜SH06 SH08 OP01〜OP03 OP05〜OP11 AC01 AC03 AC06 CR01 CR02 CR04 CR07 TS03〜TS05 MN01 MN02 MN04)、△19、❌1(AC02)、？13(DS06 JN05 OP04 AC05 AC08 CR08 FD03〜FD08 FD10)。
- △の条件一覧:
  - DS03: 地域・オンライン・タグの絞り込みはあるが、日付・価格の汎用絞り込みは記載なし — [Searching for Events](https://help.luma.com/p/searching-for-events)
  - JN06: 登録質問は可。券種別質問・条件分岐・同行者ごとの氏名入力は非対応と明記 — [Collect Registration Questions](https://help.luma.com/p/collect-registration-questions)、[Group Registration](https://help.luma.com/p/group-registration)
  - JN07: 登録・待機リストの取消は可。返金はホスト操作で、返金ポリシーは文書のみ — [Refunding a Guest](https://help.luma.com/p/refunding-a-guest)
  - SH02・SH07(アプリ限定の条件付き): 共有ボタン、QRコード表示、ポスター生成はiOSアプリで確認。Web・Androidは未確認。カスタムURLはPlus限定 — [How to Promote Your Event](https://help.luma.com/p/promote-your-event)
  - OP12(有料プラン限定の条件付き): Zoom・iCal・埋め込みはFree。API・Zapier・WebhooksはPlus、HubSpot・SalesforceはEnterprise — [Integrations](https://help.luma.com/p/integrations)、[Webhooks](https://help.luma.com/p/webhooks)
  - AC04: 自動移行機能なし。参加者CSVから招待する手順とサポート相談のみ(自社比較ページ、料金記述は2025-06時点) — [Luma vs Eventbrite](https://help.luma.com/p/luma-vs-eventbrite)
  - AC07: 配信枠を増やす有料アドオン(週1万〜10万件、月$50〜$800)のみ。有料掲載・広告は確認できず — [料金](https://luma.com/pricing)
  - CR03: アンロックコードとタグ・People単位の招待で代替でき、過去参加者への自動の優先案内は未確認 — [Unlock Codes](https://help.luma.com/p/unlock-codes)
  - CR05: ホスト側のPeopleで参加回数を見られるが、ゲスト向けバッジ・実績表示は確認できず — [Managing Calendar Contacts](https://help.luma.com/p/managing-calendar-contacts)
  - CR06: 参加後の絵文字評価とコメントはホストだけが閲覧でき、公開レビューはない — [Collect Feedback](https://help.luma.com/p/collect-feedback-from-your-event-guests)
  - TS01・TS02: メール・電話のコード認証のみ(実名・ID確認なし)。Calendar検証で送信上限が週15件→500件(Free)・5,000件(Plus)へ段階解放される — [Signing In](https://help.luma.com/p/signing-in)、[Send Limits](https://help.luma.com/p/send-limits)
  - TS06: 都市ページの特集対象を「登録が全てLuma上で完結する公開イベント」に限る要件のみ — [Featuring Your Event](https://help.luma.com/p/featuring-your-event-on-luma)
  - FD01・FD02・FD09・MN03・MN05: FDは汎用の登録質問・券種枚数上限で代用できる程度。MN03は最低額・推奨額の寄付型価格、MN05はホスト単位の会員制度のみ — [Setting Up Ticket Types](https://help.luma.com/p/setting-up-ticket-types)、[Calendar Memberships](https://help.luma.com/p/calendar-memberships)
- ❌(AC02): 「手数料を上乗せする選択肢はない」と公式ヘルプに明記。価格を上げて実質転嫁する方法を案内している — [Creating a Paid Event](https://help.luma.com/p/creating-a-paid-event)
- 根拠が強い項目(公式ヘルプに明示記述):
  - JN01 名前とメールのみで登録でき、アカウントやサインインは不要 — [Event Registration Process](https://help.luma.com/p/event-registration-process)
  - JN04 待機リストは有料チケットでも使える(与信保留、承認時に課金)。暗号資産建ては不可 — [Waitlist](https://help.luma.com/p/waitlist)
  - JN09 リマインドは1日前と1時間前(メール・SMS・プッシュ) — [Update to Reminders](https://help.luma.com/p/update-to-reminders-on-luma)
  - SH04 ゲスト個別の紹介リンクで誰が誰を招待したかをInsightsで可視化(報酬なし、公開イベントのみ) — [Event Referrals](https://help.luma.com/p/event-referrals)
  - SH08 登録ボタン・イベントページ・Calendar一覧を埋め込める — [Embed Luma](https://help.luma.com/p/embed-luma-on-your-website)
  - OP02 複製は参加者・ブラスト以外を全コピー、Webで最大30件の日程を一括作成 — [Cloning Events](https://help.luma.com/p/cloning-events)
  - OP05 共同ホスト・マネージャーは無制限(Free)、受付専任のcheck-inスタッフはPlus限定 — [Adding Hosts and Managers](https://help.luma.com/p/adding-hosts-and-managers-to-your-event)、[Check In Guests](https://help.luma.com/p/check-in)
  - MN01・MN02 Freeは有料イベント5%+Stripe手数料、Plus月$59(年払い)は0%+Stripe — [料金](https://luma.com/pricing)
  - DS07・DS08 50都市超のexploreページを自動・人手のキュレーションで編成し、提出は不要 — [Featuring Your Event](https://help.luma.com/p/featuring-your-event-on-luma)。実ページでも「Featured in Tokyo」「Report Event」「162 Going」を確認 — [Luma イベント例](https://luma.com/kue3uokk)
- 根拠が弱い項目: OP09 のInstant Payoutsは自社比較ページの主張で、入金自体はStripe管理 — [Payouts](https://help.luma.com/p/understanding-payouts-and-event-proceeds)。DS04 は購読・フォローに基づくフィードの記述のみで、閲覧履歴ベースは未確認 — [Discovering Events](https://help.luma.com/p/discovering-events)。OP12 のGoogle Meet連携はヘルプ見出しのみ確認。
- 「グロース根拠あり」を付けた項目: JN01(アカウント不要RSVP)、MN01・MN02(手数料5%・Plus$59)、OP11(CalendarsとTech Weeks)。既存ノートが牽引機能として挙げたもの — 出典は `02_グロースストーリー.md`(Luma の節)。Tech Weeks 自体はコミュニティ主催で、中央チームがCalendarに編成する形 — [Tech Weeks](https://help.luma.com/p/tech-weeks)
- 既存ノートで「確認できなかった」とされた項目の再確認結果: Wrapped 型の振り返り(CR08)は、Discoverページ・ホーム・ヘルプ索引に該当リンクがなく、検索結果も別物の「LUMA」ばかりで見つからず？とした — [Luma Discover](https://luma.com/discover)。AIによるイベントページ生成(OP04)は作成ガイドとテーマ説明に記載がなく？とした — [Creating an Event](https://help.luma.com/p/creating-an-event)、[Themes](https://help.luma.com/p/event-themes-and-customization)。

### Inferences
- Luma は「主催者のCRMと配信」を軸にした設計で、フォロー(DS05)→自動蓄積(CR02)→タグ配信(CR04)→招待(CR03)までが1つのCalendarに束ねられている。✅一覧では OP・CR・SH の行が多く埋まる。
- Luma のみが✅の行は DS01(キーワード検索)・DS04・DS07(都市ページ)・JN01・SH01・CR01・MN02。発見面と有料プランは Partiful・Posh と差が出る。
- FD(食事・店舗連携)は、FD01・FD02・FD09を除き専用機能が見当たらない。ただし「確認できず」であり、非対応の明記ではない点に注意。

### Gaps
- 参加者への残席表示(JN05)は公式ヘルプで確認できなかった(実ページの例は定員なしのイベント)。
- DS06(保存・ブックマーク)、AC05(紹介報酬・アンバサダー。City Leads募集は既存ノートに記載のみ)、AC08(Luma 主催の公式イベント)は確認できなかった。
- AI作成支援(OP04)・Wrapped(CR08)は、公式ヘルプと検索で確認できなかったが、アプリ内の新機能や未公開の機能は見えていない可能性がある。
- 料金ページとヘルプのアドオン記述が食い違う: 料金ページは配信枠の追加が月$50〜$800、ヘルプ [Luma Plus](https://help.luma.com/p/luma-plus) は「追加の送信枠・管理者席が月$12($9は年払い)」と書く。同じアドオンかどうかは未確定。

## 2. Partiful の77機能判定

### Takeaway
Partiful は77機能中、✅30・△25・❌0・？22。招待・共有・社会的な見せ方(ゲスト一覧、コメント、写真、Mutuals)と、SMS中心の運営(テキストブラスト、リマインド)は公式ヘルプで確認できた。一方、有料チケット販売は米国・英国のホストのみ(2026-06開始)で、ticketing に依存する機能は地域限定の△にした。検索・フォロー・分析・API・埋め込みは確認できず？が多い。

### Cited Findings
- 判定の内訳: ✅30(DS06 DS08 JN02〜JN04 JN06 JN08 JN09 JN11 JN12 SH02 SH03 SH05 SH06 OP01 OP03 OP05〜OP08 OP11 AC01 AC03 AC06 CR03 CR07 TS01 TS03 TS05 TS06)、△25、❌0、？22(DS01 DS03 DS05 JN05 SH04 SH08 OP04 AC04 AC05 AC07 AC08 CR01 CR06 CR08 TS02 FD03〜FD06 FD08 FD10 MN05)。
- チケット販売は米国・英国のホストのみ。それ以外は意向を出すフォームに誘導される — [Who can sell tickets](https://help.partiful.com/en-us/articles/15525289-who-can-sell-tickets-on-partiful)、[Ticketing(2026-10-07公開)](https://partiful.com/ticketing)
- △の条件一覧:
  - 地域限定(米英): JN10(QRチケット受付)、OP09(売上・入金。入金はイベント終了の3〜7営業日後) — [When do I get paid](https://help.partiful.com/en-us/articles/15525384-when-do-i-get-paid)、AC02(手数料負担をホストが選べる) — [Who pays the fee](https://help.partiful.com/en-us/articles/15525399-who-pays-the-ticket-service-fee)、TS04(購入後返金不可が原則。イベント中止時は全額返金) — [Refund policy](https://help.partiful.com/en-us/articles/15525401-what-is-your-refund-policy)、MN04(プロモコード) — [Promo code](https://help.partiful.com/en-us/articles/15525305-how-do-i-create-a-promo-code)
  - 地域限定(都市): DS02・DS07。Exploreの都市ページは米英9都市(NYC・LA・SF・Boston・DC・Chicago・London・Miami・Austin) — [Explore](https://partiful.com/explore)、[Explore の場所変更](https://help.partiful.com/en-us/articles/15525566-how-can-i-change-my-location-for-the-partiful-explore-page)
  - アプリのみ: SH07。共有用QRはアプリのみで、Web版は非対応 — [QR code](https://help.partiful.com/en-us/articles/15525327-how-do-i-generate-a-qr-code-that-i-can-use-to-share-my-event)
  - 一部のみ: DS04(友人Mutualsの参加予定+キュレーション。個人化の記述なし) — [What is Explore](https://help.partiful.com/en-us/articles/15525568-what-is-the-partiful-explore-page)、OP02(複製はあるが定例は「提供しない」と明記) — [Recurring events](https://help.partiful.com/en-us/articles/15525373-can-i-set-up-recurring-events)、OP10(売上・入金状況のみ) — [Track revenue](https://help.partiful.com/en-us/articles/15525382-how-do-i-track-my-revenue)、OP12(カレンダー同期のみ) — [Calendar sync](https://help.partiful.com/en-us/articles/15525654-how-can-i-customize-my-calendar-sync-settings)、CR02(Mutualsでつながるが主催者フォローは未確認) — [Mutuals](https://help.partiful.com/en-us/articles/15525549-what-are-mutuals)、CR04(名前付きリストの保存は「ない」と明記) — [Guest lists](https://help.partiful.com/en-us/articles/15525329-can-i-save-my-guests-to-different-lists-groups)、CR05(プロフィールは共有イベントのみ) — [Shared Events](https://help.partiful.com/en-us/articles/15525633-can-i-hide-which-events-i-ve-attended-from-other-users)、JN07(チケットは原則返金不可) — [Refund](https://help.partiful.com/en-us/articles/15525553-can-i-get-a-refund-if-i-can-no-longer-attend)
  - 条件付き: JN01(アプリ不要は公式、アカウント・電話番号認証の要否は二次情報) — [Do guests need the app](https://help.partiful.com/en-us/articles/15525328-do-my-guests-need-to-download-the-app)。SH01(OGPカードの記述なし)。FD01・FD02(アンケートで代用) — [Collecting guest info](https://help.partiful.com/en-us/articles/15525424-collecting-guest-info-dietary-restrictions-names-of-1s-etc)。FD07(Chip Inは外部決済で未検証) — [Chip In](https://help.partiful.com/en-us/articles/15525460-how-do-i-use-the-chip-in-feature)。FD09(定員・待機リストのみ) — [Limit group size](https://help.partiful.com/en-us/articles/15525379-how-can-i-limit-group-size)。MN01(料率は非公開、表示価格が最終金額) — [Fees](https://help.partiful.com/en-us/articles/15525398-what-fees-does-partiful-charge)。MN02(有料プランなし、プレミアムデザインの任意購入のみ) — [Does Partiful cost money](https://help.partiful.com/en-us/articles/15525599-does-partiful-cost-money)。MN03(Chip Inの「払える額でよい」設定のみ)
- 根拠が強い項目:
  - JN09 「行く」へ開催2時間前、「たぶん・未回答」へ約1週間前にSMS・プッシュ(メールは非対象) — [Event reminders](https://help.partiful.com/en-us/articles/15525436-what-event-reminders-do-you-send)
  - TS06 RSVP・チケットはPartiful上で行う規約で、外部誘導を禁止(違反はフラグ・削除) — [Why can't I link out](https://help.partiful.com/en-us/articles/16825273-why-can-t-i-link-out-to-promote-events-on-other-platforms)、[Event flagged](https://help.partiful.com/en-us/articles/16823960-i-received-a-text-that-my-event-was-flagged-what-do-i-do)
  - JN04 定員を決めると自動で待機リストに入り、初回RSVP順に繰り上げる — [Waitlist](https://help.partiful.com/en-us/articles/15525364-how-does-the-waitlist-move-my-guests-off-of-the-list)
  - OP05 共同ホストは設定変更とテキストブラストが可能 — [Cohost](https://help.partiful.com/en-us/articles/15525429-how-do-i-make-someone-a-cohost-or-become-a-cohost)
  - AC01 無料イベントの主催・参加は無料 — [Fees for free events](https://help.partiful.com/en-us/articles/15525405-are-there-fees-for-free-events)
  - DS08 公開イベントを編集チームが審査して掲載(提出トグルあり) — [公式ブログ 2026-10](https://partiful.com/blog/post/heres-how-to-actually-grow-your-audience)
  - OP07・JN12 テキストブラストはイベント後60日まで送れる — [After the event](https://help.partiful.com/en-us/articles/15525395-how-can-i-message-my-guests-after-the-event)
- 根拠が弱い項目: JN03(チケット販売イベントでの承認制)・JN08(各カレンダー同期の手順)・OP08(複数スタッフの同時受付)・TS03(ディープフェイク報告)は、ヘルプの見出しだけを確認し本文は開いていない。OP11 の Org Profile は「1リンクで全イベントを見せる」という公式紹介文のみで、公開ページの中身は未確認 — [Org Profiles](https://partiful.com/org-profiles)。
- 「グロース根拠あり」を付けた項目: JN01(アカウント不要RSVP+SMS)、OP01(デザイン・ブランド)、DS08(Discoverの手作業キュレーション)、SH02(招待リンクのバイラル)。いずれも既存ノートが牽引機能・効いたチャネルとして挙げたもの — 出典は `02_グロースストーリー.md`(Partiful の節)。
- 確認できなかった項目の再確認: Wrapped 型(CR08)は公式ページ・ヘルプ・検索のいずれでも出ず？とした。AI生成(OP04)も同様で、公式記事はむしろ「AI生成コンテンツは避ける」と助言する — [Featured on Explore](https://help.partiful.com/en-us/articles/15525571-how-can-i-get-featured-on-the-partiful-explore-page)。Partiful の英語のみ対応も確認(2026-06付) — [Languages](https://help.partiful.com/en-us/articles/15525591-what-languages-is-partiful-available-in)。

### Inferences
- Partiful の✅は「招待→共有→当日の空気づくり」(SH・JN・CR07)に集中し、成長指標に結びつく分析・紹介追跡(OP10・SH04)は弱い。
- Partiful のみが✅なのは SH02(共有ボタン相当)・CR03(過去ゲストの一括再招待)・TS06(外部取引の抑止)。TS06 は「Partiful 上で完結させる」という方針が規約として明文化されている点で Luma・Posh と異なる。
- ticketing(US/UK限定、2026-06開始)は新しい領域で、今後の判定変更の余地が最も大きい。

### Gaps
- 検索(DS01)・日付や価格の絞り込み(DS03)・主催者フォロー(DS05)は公式ヘルプとExploreページで確認できず？とした。アプリ内にある可能性は残る。
- ticketing の手数料率、チケット販売イベントの待機リスト、即時入金、公開API、埋め込みは公式で確認できなかった。Luma の比較ページは「待機リストなし・公開APIなし・10%+$2/枚・米国ホストのみ」と主張するが、競合発信であり、公式の「米英」と食い違う — [Luma vs Partiful(2026-09)](https://help.luma.com/p/luma-vs-partiful)。
- AC05: Partiful の公式ヘルプにブランド提携窓口(15525618)とクリエイターのFTC規定(15525620)はあるが、主催者向けのアンバサダー・紹介報酬は確認できない。Campus Growth 職の求人は二次情報(`04_主催者獲得_機能と施策.md`)で、公式の採用ページは役職を取得できなかった — [Partiful 採用ページ](https://jobs.ashbyhq.com/partiful)。
- JN01 のアカウント要否は、公式ヘルプが「アプリ不要」としか書かず、電話番号認証が必要という点は既存ノートの二次情報に依存する。

## 3. Posh の77機能判定

### Takeaway
Posh は77機能中、✅37・△25・❌1・？14。プロモーター経済圏(Kickback、主催者紹介報酬)、SMSによる顧客リスト運用、卓販売、入金・資金管理、チーム権限、広告ピクセルまで主催者向け運用が公式サポート記事で細かく確認できた。参加者側の発見は、Homeタブが「NYC限定テスト・アプリのみ」で条件付き。アカウント不要の申込(JN01)は購入時のログインが必須と明記されたため❌。

### Cited Findings
- 判定の内訳: ✅37(DS02 DS05 DS06 DS08 JN02 JN03 JN06 JN08 JN10 JN11 SH03 SH04 SH06〜SH08 OP02, OP03, OP05〜OP12 AC03 AC05 AC06 CR02 CR04 TS01 TS02 TS04 TS05 FD05 MN01 MN04)、△25、❌1(JN01)、？14(JN05 OP04 AC01 AC08 CR01 CR06 CR08 FD03 FD04 FD07 FD08 FD10 MN02 MN03)。
- △の条件一覧:
  - アプリのみ: DS01(検索はアプリのみと明記) — [App Search](https://support.posh.vip/en/articles/10723772-your-guide-to-posh-app-search)。JN04(ウェイトリスト経由の購入はアプリのみ。オファー期限30分) — [Waitlist setup](https://support.posh.vip/en/articles/12063814-waitlist-setup-guide-for-organizers)
  - 地域限定: DS03・DS04。Homeタブ(クイックフィルタ、For You)は「NYC限定テスト・iOS先行・アプリのみ」 — [Home tab](https://support.posh.vip/en/articles/12460155-discover-more-with-the-new-home-tab)
  - 一部のみ: DS07(Exploreはあるが都市×カテゴリの公開一覧は未確認) — [Explore](https://posh.vip/explore)、JN07(返金は主催者判断。返却→再販でのみ自動返金。Poshの手数料は返金不可) — [Refund requests](https://support.posh.vip/en/articles/10723777-how-to-request-ticket-refunds)、JN09(取引SMSは確認、開催前の定時リマインドは未確認)、JN12(終了後3日までのSMSのみ) — [SMS](https://support.posh.vip/en/articles/15089436-sms-campaigns-messaging-guidelines-best-practices)、SH01・SH02(共有ページ・共有の公式説明なし) — [Posh](https://posh.vip/)、OP01(テンプレート・所要時間の記述なし) — [作成ガイド](https://support.posh.vip/en/articles/15089963-creating-customizing-and-managing-your-posh-events-the-complete-guide)
  - 二次: SH05(友人の動きに基づくフィード・ゲストリストは報道のみ。公式ヘルプのHomeタブは友人セクションを「今後追加」と記載) — [Fortune 2026-03](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/)
  - その他: AC02(標準は購入者負担) — [Posh vs DICE(2026-06自社記事)](https://posh.vip/university/post/posh-vs-dice)、AC04(下記の食い違い)、AC07(Marketplace掲載・SMS・広告ピクセルはあるが有料枠の価格は不明) — [ピクセルと販促](https://support.posh.vip/en/articles/15076349-set-up-ad-tracking-pixels-and-promote-your-event)、CR03(SMS+パスワード保護券種の組合せで代用) — [券種管理](https://support.posh.vip/en/articles/15075671-ticket-management-creating-ticket-tiers-groups-and-advanced-toggles)、CR05(参加イベントの公開設定と主催者の認証バッジのみ)、CR07(主催者への問い合わせのみ) — [Contact organizer](https://support.posh.vip/en/articles/10723761-how-to-contact-your-event-organizer)、TS03(ブロックのみで通報記述なし) — [Blocking](https://support.posh.vip/en/articles/10723769-blocking-users)、TS06(Third-Party Linksで他社チケットの掲載を許容し、独占契約者のみPosh専用を要求) — [Third-Party Links](https://support.posh.vip/en/articles/17299835-third-party-links-list-your-event-elsewhere-share-them-on-posh)、FD01・FD02(チェックアウト質問で代用) — [Checkout settings](https://support.posh.vip/en/articles/15076421-checkout-settings-customize-the-attendee-s-experience)、FD06(卓パッケージ)、FD09、MN05(Kickbackは現金報酬で、ポイントではない) — [Kickback](https://support.posh.vip/en/articles/10723760-start-earning-with-posh-kickback-program)
- ❌(JN01): チケット購入時はログインが必要と公式ヘルプが明記し、アカウントはメール・電話のOTPで自動作成される。Paylink経由の支払いのみアカウント不要 — [How to Purchase](https://support.posh.vip/en/articles/10723762-how-to-purchase-tickets-with-posh)、[Paylinks](https://support.posh.vip/en/articles/15075861-paylinks-collecting-high-value-payments-on-posh)
- 根拠が強い項目:
  - AC05 Organizer Affiliate: 紹介した新規主催者の手数料の10%を最大12か月支払う — [Organizer Affiliate](https://support.posh.vip/en/articles/15091893-organizer-affiliate-program-earn-commissions-by-inviting-event-creators)
  - SH03・SH04 Kickback: 購入後に紹介リンクを提示し、ダッシュボードで売上・コンバージョンを追跡。Poshが報酬額の20%を徴収 — [Kickback ガイド](https://posh.vip/university/post/a-guide-to-kickback-at-posh)、[Event Marketing](https://support.posh.vip/en/articles/15077072-event-marketing-managing-kickback-affiliates-tracking-links-host-sales)
  - FD05 卓販売: 座席マップに卓ピンを置き、価格・席数・在庫を設定(卓購入に固定$5) — [Table Service](https://support.posh.vip/en/articles/15255266-offering-table-service-creating-your-seating-map)
  - OP05 Admin・Host・Doorpersonの役割と権限 — [Team](https://support.posh.vip/en/articles/15090297-adding-team-members-and-managing-permissions)
  - OP09 標準入金は無料でACH 3〜5営業日、Instant Payoutは手数料5%(GMV$2,000以上) — [Payouts](https://support.posh.vip/en/articles/15090213-managing-your-balance-payouts-bank-accounts)
  - OP12 Mailchimp同期、Webhook(最大5宛先)、広告ピクセル。公開APIの記述なし — [Mailchimp & Webhooks](https://support.posh.vip/en/articles/15091630-mailchimp-webhooks-connecting-external-tools)
  - TS02 認証バッジは累計GMV$10万で自動審査 — [Public Profiles](https://support.posh.vip/en/articles/15091575-managing-your-organization-settings-public-profiles)
- 根拠が弱い項目: JN08(確認メッセージが「カレンダー招待」にも載るという記述のみ)、MN01(10%+$0.99は Posh 自社の2026-06記事で、公式の料金ページは本文を取得できず。Luma の比較ページも同額と記す=競合発信) — [Luma vs Posh(2026-07確認)](https://help.luma.com/p/luma-vs-posh)。OP09 の同日入金・資金前貸しは自社記事の主張で、サポート記事とは食い違う。TS01 のStripeオンボーディングは見出しのみ確認。
- 「グロース根拠あり」を付けた項目: SH03・SH04(Kickback)、AC05(主催者紹介報酬)。既存ノートが効いたチャネルとして挙げたもの — 出典は `02_グロースストーリー.md`(Posh の節)。紹介経由の売上比は非公表。
- 確認できなかった項目の再確認: キャンパスアンバサダー — 公式の採用ページに該当役職がなく(2026-10。Staff Product Designer、Senior React Native Engineer 等のみ) — [Posh Careers](https://posh.vip/careers)、Wellfound 等の求人票でのみ「Campus Growth Ambassador」が見つかる(二次)。このため AC05 の✅は Organizer Affiliate 制度に基づき、学生アンバサダーは公式で確認できていない。Wrapped 型(CR08)は検索・公式ページで見つからず？とした。AI作成支援(OP04)は、AI機能が運用Q&A・データ分析用のPosh Atlasのみで、Atlas は2026-10-13に提供終了と記載 — [Posh Atlas](https://support.posh.vip/en/articles/14436493-getting-started-with-posh-atlas)。

### Inferences
- Posh の✅は「お金と人を動かす仕組み」に集中する: Kickback・主催者紹介・SMS・入金・卓販売。Posh のみ✅は SH07・OP12・AC05・TS02・FD05。
- FD05(卓販売)はナイトライフ向けで、食事会の「席の確保」とは用途が違うが、「席・卓を商品として売る」UIの先行例として参照価値がある(推測)。
- 参加者側の体験(Home、For You、友人フィード)は変化の途上で、△のまま次回の再判定が必要になる可能性が高い。

### Gaps
- 無料RSVPの手数料(AC01)は、ToSとヘルプで言及がなく？とした。公式の料金ページ(`posh.vip/pricing`)は本文が取得できなかった。
- プラットフォーム紹介ページ(`posh.vip/platform`)の「$640・$2,983・$8,395」は用途不明で、MN02(主催者サブスク)を確認できなかった。
- OP04: Atlas の提供終了後にAI作成支援が出るかは不明。
- 食い違い: インポートについて、サポート記事は「参加者リストのインポートは非対応」(2026-10時点)と明記する一方、Posh 自社記事は過去参加者のCSV取込を移行手順に挙げる(2026-06) — [Export Event Report](https://support.posh.vip/en/articles/15267292-export-event-report-downloading-your-attendee-info)、[Switching from Eventbrite](https://posh.vip/university/post/switching-from-eventbrite-to-posh)。AC04 は△とし、両方を note に残した。
- 食い違い: 入金速度は自社記事が「同日入金・資金前貸し」、サポート記事が標準3〜5営業日・即時は5%手数料(GMV$2,000以上)。サポート記事を採用した。

## 4. 3サービス横断の整理と調査上の制約

### Takeaway
3サービスとも✅なのは16機能(DS08 JN02 JN03 JN08 JN11 SH03 SH06 OP03 OP05 OP06 OP07 OP08 OP11 AC03 AC06 TS05)。3サービスとも？なのは8機能(JN05 OP04 AC08 CR08 FD03 FD04 FD08 FD10)で、残席表示・AI作成支援・運営主催イベント・Wrapped・店舗向け画面などは、3社とも公式で確認できなかった。

### Cited Findings
- 3サービスとも✅(16): DS08(キュレーション)、JN02(簡易ログイン)、JN03(承認制)、JN08(カレンダー追加)、JN11(参加者一覧の閲覧)、SH03(友人招待導線)、SH06(社会的証明)、OP03(下書き・限定公開)、OP05(共同主催・権限)、OP06(名簿出力)、OP07(一斉メッセージ)、OP08(当日運営)、OP11(主催者ページ)、AC03(データ出力)、AC06(教育コンテンツ)、TS05(参加者情報の保護)。判定根拠は各CSVを参照。
- 1社のみ✅: Luma のみ=DS01 DS04 DS07 JN01 SH01 CR01 MN02、Partiful のみ=SH02 CR03 TS06、Posh のみ=SH07 OP12 AC05 TS02 FD05(いずれも、他の2社は△か？か❌)。
- 3社の「確認できず(？)」の多くは、Webの公式ページに書かれていない機能という意味で、非対応の確認ではない。FD03〜FD08・FD10(食事・店舗連携)は3社のほぼ全部が？で、Posh の卓販売(FD05)が唯一の✅である。
- 補助的な競合発信: Luma は自社ヘルプに Partiful・Posh の比較ページを持つ — [Luma vs Partiful](https://help.luma.com/p/luma-vs-partiful)、[Luma vs Posh](https://help.luma.com/p/luma-vs-posh)。これらは判定の根拠(公式)ではなく、食い違いの検出にだけ使った。
- 食い違いの記録(CSV に反映済み):
  - Luma の待機リストは、検索結果の要約が「無料イベントのみ」とするが、現行ヘルプは有料でも使えると記す。現行ヘルプを採用 — [Waitlist](https://help.luma.com/p/waitlist)
  - Partiful のチケット販売地域は、公式が米英、Luma の比較ページが米国のみ。公式を採用。
  - Posh の入金・インポートの記述は上記のとおり。

### Inferences
- 「✅一覧」を作るときは、△を✅と別色にし、note の条件(Plus・地域・アプリ・テスト中)を併記するのが適切である。Partiful の ticketing 系は地域条件で、Luma の API 系はPlus条件で、Posh の Home 系はNYCテスト条件で、それぞれ△になっている。
- Shokujii の固有領域(FD)は、3社とも専用機能を持たない(Posh の卓販売を除く)。確認できていないだけの可能性はあるが、公式ヘルプの網羅調査で見つからなかったことは、差別化余地の参考情報になる(推測)。

### Gaps
- 指定の既存ノート3本が存在せず、`documents/14_競合調査/10_概観/` の統合文書で代替した。元ノートにあった細部(原典へのリンクや「確認できなかった」の詳細)は、統合文書に残っている範囲でしか使えていない。
- WebSearch は8回使用(上限12回)。Wrapped・AI・アンバサダーの確認に使い、いずれも公式記述は見つからなかった。Bash からの直接取得(curl)は許可されず、OGP(SH01)のメタタグは直接確認できていない。
- 公式ヘルプはいずれも更新が早い(Partiful の ticketing は2026-06開始、Posh の Home は限定テスト中、Atlas は2026-10-13終了)。判定は2026-10-11時点で、数か月後の再確認が必要。
