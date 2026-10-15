# 機能比較: マーケットプレイス型4サービス(Eventbrite・Meetup・DICE・Ticket Tailor)の77機能判定

> 調査日: 2026-10-11。機能タクソノミー v0.1([01_機能タクソノミー.md](/Users/yasukawanaohiro/Github/wt/tree-3/documents/14_競合調査/30_機能比較/01_機能タクソノミー.md))の77機能を、4サービス別に ✅/△/❌/？ で判定した。判定の正本はCSV(`features/eventbrite.csv`・`meetup.csv`・`dice.csv`・`ticket-tailor.csv`)で、本書はその要約・条件一覧・確認できなかった点・食い違いをまとめる。
> 判定の根拠は公式の機能ページ・ヘルプセンター・料金ページ・アプリストア説明と、実際に開いた公開ページ(実機)。二次情報(報道・第三者解説)だけを根拠にした行はない。
> **前提の注意**: 割り当てで指定された既存調査ノート(`.../research_notes/世界のイベント告知サービス 集客施策調査/*.md` と `イベント告知サービス グロースストーリー調査/*.md`)は、この作業環境のスクラッチパッドに存在しなかった。代わりに、同内容を集約してコミット済みの `documents/14_競合調査/10_概観/` の4文書(01_サービス概観・02_グロースストーリー・03_参加者獲得_機能と施策・04_主催者獲得_機能と施策)を既存ノートとして使った。「グロース根拠あり」の注記は、その4文書に書かれた根拠だけに基づく。

## 調べ方と全体の判定結果(4サービス共通)

### Takeaway

4サービスとも77行すべてを判定した。✅が最も多いのは Eventbrite(46)、次いで Meetup(43)、Ticket Tailor(34)、DICE(32)。Ticket Tailor と DICE に ？ が多い(28・26)のは、公開された公式資料が少ない(DICE のパートナー画面はログイン内)か、そもそも消費者向けの機能層(発見・フォロー・推薦)を持たない設計(Ticket Tailor は公式FAQで発見マーケットプレイスなしと明記)のためである。

### Cited Findings

- Eventbrite の判定の内訳(77機能): ✅46 / △15 / ❌0 / ？16。根拠レベルは 公式49・実機12・二次0・なし16 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/eventbrite.csv)
- Meetup の判定の内訳(77機能): ✅43 / △15 / ❌2 / ？17。根拠レベルは 公式57・実機3・二次0・なし17 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/meetup.csv)
- DICE の判定の内訳(77機能): ✅32 / △18 / ❌1 / ？26。根拠レベルは 公式46・実機5・二次0・なし26 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/dice.csv)
- Ticket Tailor の判定の内訳(77機能): ✅34 / △12 / ❌3 / ？28。根拠レベルは 公式46・実機3・二次0・なし28 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/ticket-tailor.csv)
- Eventbrite の機能ページ `/features/` は料金ページへ転送され、機能一覧は `organizer/features/all-features/` にある — [Eventbrite 機能一覧](https://www.eventbrite.com/organizer/features/all-features/)、[料金ページ](https://www.eventbrite.com/organizer/pricing/)
- DICE の公式サイト(dice.fm)と Meetup のヘルプセンター(help.meetup.com)は、WebFetch では 403 で取得できなかったため、Browser ペインで公開ページを開いて本文を読んだ。DICE のヘルプは dicefm.zendesk.com に置かれている — [DICE ヘルプ](https://dicefm.zendesk.com/hc/en-gb)、[Meetup ヘルプ](https://help.meetup.com/hc/en-us)
- 判定の根拠 URL は、実際に開いた公式ページ(または公開のイベントページ・ログインページ)に限った。OGP は各社の公開イベントページの `og:*` と schema.org を読んで確認した — [Eventbrite イベント](https://www.eventbrite.com/e/out-abt-halloween-edition-tickets-1996989228540)、[Meetup イベント](https://www.meetup.com/ja/tokyo-international-party-shibuya/events/315750739/)、[DICE イベント](https://dice.fm/event/923pw6-eazybaked-and-distinct-motive-at-exit-206-17th-oct-the-shop-seattle-tickets)、[Ticket Tailor イベント](https://www.tickettailor.com/events/thebaristaleague/1924213)

### Inferences

- 発見・推薦・フォロー・友人発見(DS・SH・CR の一部)は、消費者向けの需要側アプリを持つ Eventbrite・Meetup・DICE が厚く、主催者向けの発券ツールである Ticket Tailor は薄い。同じ「チケッティング」でも、機能の層が異なる。
- 飲食・店舗連携(FD)は、4サービスとも専用機能を確認できなかった。確認できたのは、追加商品の販売(Ticket Tailor の food and drink、Eventbrite のアドオン、DICE の Extras)、座席表、枚数管理といった汎用機能である。人数確定の店舗通知(FD04)、コース選択(FD06)、割り勘(FD07)、提供形態(FD10)は4サービスとも ？ のまま。

### Gaps

- 指定された既存調査ノートの原本は環境に無く、集約済みの `documents/14_競合調査/10_概観/` で代替した。原本にだけ書かれた詳細(ノート内の個別機能の記述)は反映できていない可能性がある。
- WebSearch は4回(上限12回)で足りた。Eventbrite のヘルプ検索(help center 内検索)と Meetup のヘルプ記事は Browser ペインで読んだ。
- 価格・手数料・ヘルプ記事の更新日はサービス・記事ごとに異なる。note に年を書いたのは、2021年のDICE機能発表など古さが判断に効く行だけである。

## 1. Eventbrite の77機能判定

### Takeaway

Eventbrite は 77機能中 ✅46・△15・❌0・？16。発見(DS)・主催者運用(OP)・収益化(MN)が厚く、機能名・料金・ヘルプで広く確認できた。飲食連携(FD)は専用機能が無く、アドオンや座席表などの汎用機能で代替する形(△)。

### Cited Findings

- Eventbrite の判定の内訳(77機能): ✅46 / △15 / ❌0 / ？16。根拠レベルは 公式49・実機12・二次0・なし16 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/eventbrite.csv)

#### △(一部・有料・条件付き)の条件一覧

- JN07 参加者のセルフキャンセル: 主催者が許可した場合のみアカウントから返金申請できる。返金ポリシーは主催者が設定。中止または45日超の延期は Eventbrite 経由で申請可 — [Source](https://www.eventbrite.com/help/en-us/articles/721549/can-i-get-a-refund/)
- JN11 参加者一覧の閲覧: アプリで友人の参加予定を表示(Find friends and see where they're going)。一般の参加者一覧の公開は確認できず — [Source](https://www.eventbrite.com/d/ny--new-york/events/)
- JN12 イベント後の体験: 主催者は開催中〜終了後10日まで参加者へメール送信可。レビュー・写真アルバム等の専用機能は確認できず — [Source](https://www.eventbrite.com/help/en-us/search/?q=email%20preferences%20recommended%20events%20notifications)
- SH04 紹介リンク・紹介の可視化: 主催者が作るトラッキングリンクで、リンク単位の訪問・購入を計測できる(アフィリエイト用途も想定)。参加者個人の紹介リンク・紹介元の可視化は確認できず — [Source](https://www.eventbrite.com/help/en-us/articles/835126/how-to-create-promotional-tracking-links/)
- SH06 社会的証明の表示: ステータスバッジ(Few tickets left 等)と主催者の followers・total attendees を表示。イベントごとの参加者アバター・人数の表示は確認できず — [Source](https://www.eventbrite.com/e/out-abt-halloween-edition-tickets-1996989228540)
- AC04 他サービスからの移行: 他プラットフォームの連絡先アップロードと過去参加者のインポートでメール配信リストを移せる。他サービスのイベント自体の移行ツールは確認できず — [Source](https://www.eventbrite.com/organizer/features/email-marketing/)
- CR03 前回参加者への優先案内: 過去参加者をメールリストへ取り込み再案内でき、Promo Codes の exclusive access(アクセスコード)で限定チケットも公開できる。過去参加者の自動優先枠は確認できず — [Source](https://www.eventbrite.com/organizer/features/email-marketing/)
- CR05 参加履歴・バッジ・実績: 主催者の Top Organizer バッジと主催者プロフィールの統計。参加者の参加履歴・バッジは確認できず — [Source](https://www.eventbrite.com/blog/whats-next-at-eventbrite/)
- TS01 本人確認・認証: 主催者のKYC(Stripe経由で本人・口座を確認、AU/CA/UK/US)。参加者の本人確認は確認できず — [Source](https://www.eventbrite.com/help/en-us/search/?q=verify%20identity%20payouts)
- TS06 直接取引の抑止: 非イベント規約でイベントは Eventbrite で登録・発券を提供する必要があると定める(ヘルプ検索結果)。外部誘導の禁止全般は未確認 — [Source](https://www.eventbrite.com/help/en-us/search/?q=approve%20registrations%20manually)
- FD01 メニューの事前注文・選択: Sell Merchandise(アドオン)で非チケット商品を追加販売できる。料理・ドリンクの選択専用機能は確認できず — [Source](https://www.eventbrite.com/organizer/features/all-features/)
- FD02 アレルギー・食の好みの登録: カスタム登録フォームで質問(食事制限等)を収集できる。専用のアレルギー管理・店舗共有機能は確認できず — [Source](https://www.eventbrite.com/organizer/features/all-features/)
- FD03 店舗向け管理画面: 汎用の主催者ダッシュボードで代替(シェフのポップアップ等の飲食イベント向けページはあるが店舗専用の管理画面ではない) — [Source](https://www.eventbrite.com/organizer/event-industry/food-drink-event-ticketing/)
- FD05 席の確保・貸切の連携: Reserved Seating(座席表)と Timed Entry。店舗の席・貸切管理との連動は確認できず — [Source](https://www.eventbrite.com/organizer/features/all-features/)
- MN03 任意チップ・寄付: Donation チケット種別で購入者が任意金額を決められる。カリフォルニア州では利用不可、寄付額に応じて手数料あり — [Source](https://www.eventbrite.com/help/en-us/articles/460357/how-to-fundraise-and-collect-donations-with-eventbrite/)

#### 根拠が強い項目

- DS01〜03・DS06〜08(検索・絞り込み・保存・都市ページ・Editor's Picks)は、都市ページとフィルタを実機で確認 — [都市ページ](https://www.eventbrite.com/d/ny--new-york/events/)、[全イベント一覧](https://www.eventbrite.com/d/ny--new-york/all-events/)
- SH01(OGP)・SH02(共有)・TS03(通報)・JN05(残席バッジ)は公開イベントページと共有ダイアログで確認(共有先はリンク・Facebook・Messenger・LinkedIn・X・メールで、LINE と WhatsApp は無い) — [イベントページ](https://www.eventbrite.com/e/out-abt-halloween-edition-tickets-1996989228540)
- JN04(ウェイトリスト)・OP05(権限)・OP06(CSV出力)・MN03(寄付チケット)は専用ヘルプで仕様まで確認 — [ウェイトリスト](https://www.eventbrite.com/help/en-us/articles/811539/how-to-set-up-an-event-waitlist/)、[権限](https://www.eventbrite.com/help/en-us/articles/362073/permissions-definitions/)、[Attendees レポート](https://www.eventbrite.com/help/en-us/articles/496608/download-an-attendees-report/)、[寄付](https://www.eventbrite.com/help/en-us/articles/460357/how-to-fundraise-and-collect-donations-with-eventbrite/)
- MN01・AC01・AC02(手数料・無料イベント・負担者)は料金ページに明記 — [料金ページ](https://www.eventbrite.com/organizer/pricing/)
- JN02(Apple・Google・Facebook・メールOTP)はサインイン画面を実機で確認 — [サインイン](https://www.eventbrite.com/signin/)

#### 根拠が弱い項目

- CR01(おすすめ通知)は、都市ページの「curated event recommendations」とメール購読設定の存在だけで、配信頻度・ダイジェスト形式は未確認 — [都市ページ](https://www.eventbrite.com/d/ny--new-york/events/)
- JN09(リマインド)は料金ページの機能名「Automated event reminders」と、ヘルプ検索結果の記述が根拠で、専用記事は読んでいない — [料金ページ](https://www.eventbrite.com/organizer/pricing/)
- SH05(連絡先同期)は都市ページの「Find friends」の記載で、連絡先同期の仕組みは既存ノート(2025-03 のアプリ刷新PR)に頼る — [都市ページ](https://www.eventbrite.com/d/ny--new-york/events/)
- TS01(KYC)・TS06(非イベント規約)はヘルプ内検索の結果ページの抜粋が根拠で、個別記事を開いていない — [KYC検索結果](https://www.eventbrite.com/help/en-us/search/?q=verify%20identity%20payouts)、[承認制検索結果](https://www.eventbrite.com/help/en-us/search/?q=approve%20registrations%20manually)

#### 資料間の食い違い・注意

- 主催者プラン: 料金ページは「Eventbrite Pro はメール配信が月$15〜」と記し、ヘルプの料金プラン記事は「Premium が米国で月$69(年$708)、Pro は旧プランで新規受付終了」と記す。2資料が食い違い、MN02 は後者を採用した — [料金ページ](https://www.eventbrite.com/organizer/pricing/)、[料金プラン記事](https://www.eventbrite.com/help/en-us/articles/193833/eventbrites-new-pricing-plans/)
- メール配信の上限: 無料は1日250通、Premium は2,000通、Pro は10,000通と、資料ごとに上限の表記が異なる — [Email Marketing ページ](https://www.eventbrite.com/organizer/features/email-marketing/)、[料金プラン記事](https://www.eventbrite.com/help/en-us/articles/193833/eventbrites-new-pricing-plans/)
- 買収後(2026-03完了)の手数料据え置きは競合(TickPick)の報告で、公式の料金改定発表は確認できていない(既存ノート) — [TickPick(競合発信)](https://www.tickpick.com/blog/organizer/eventbrite-2026-fee-changes)

#### 「グロース根拠あり」を付けた行(既存ノートの根拠)

- DS04: 自社主張で、ML推薦等で発見経由の販売が前年比+10%(2024 Q4)、アプリは購入確率3倍(2025 Q1) — [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm)、[Q1 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock)
- DS07: Google の事例で、構造化データ導入後に検索流入が前年比約+100%上乗せ(他施策と切り分け不能)。発券の30%超が発見経由(2022年) — [Google 事例](https://developers.google.com/search/case-studies/eventbrite-case-study)、[Eventbrite ブログ 2023-03](https://www.eventbrite.com/blog/?p=395362)
- SH02: 2010年の自前計測で、Facebook 共有1回あたり平均$1.78(Facebook は$2.52) — [TechCrunch 2010-10](https://techcrunch.com/2010/10/14/eventbrite-facebook-share)
- AC01(負の事例): 2023年に無料イベントへ主催者手数料を課し、有料チケットが2024年-10%、2024-09に撤回。無料を開いた主催者の約17%が12か月以内に有料開催 — [Q2 2024 決算コール](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock)、[10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm)
- AC07(弱): 自社主張で、プレミアムなマーケティングツールを使ったイベントは販売チケットが63%多い(因果は不明) — [Eventbrite ブログ 2023-03](https://www.eventbrite.com/blog/?p=395362)

### Inferences

- 食事会の主催者にとって、Eventbrite は「アドオン(非チケット商品)+カスタム質問+座席表」で近い形を作れるが、料理選択や店舗通知の専用機能はない。FD の差別化余地は Eventbrite に対しても残る。
- 無料イベントの無料維持(AC01)は、Eventbrite が一度手数料を課して撤回した最重要の教訓で、Ticket Tailor(年間上限つき)・Meetup(初回のみ無料)との対比で、無料枠の扱いが各社で異なる点が比較軸になる。

### Gaps

- ？とした16件(公式資料で確認できなかった): JN03 承認制・参加申請、JN08 カレンダー追加、SH03 友人・同行者の招待導線、AC05 主催者紹介・アンバサダー、AC08 運営主催・公式イベント、CR02 自動メンバー化、CR06 レビュー・評価、CR07 グループチャット・掲示板、CR08 年間まとめ・振り返り共有、TS05 参加者情報の保護、FD04 人数確定の店舗通知・集計、FD06 コース・固定メニュー、FD07 割り勘・個別会計、FD08 店探し・店選び支援、FD10 提供形態の選択、MN05 ポイント・会員特典
- JN08(カレンダー追加)は、イベントページと確認メールで追加リンクの有無を確認できなかった。購入後の画面・メールを実際に確認すれば解消できる。
- CR06(レビュー)・CR07(チャット)・TS05(参加者一覧の限定公開)は、公式資料に記載が無い。記載が無いことと機能が無いことは別で、❌にしていない。
- AC05(主催者紹介報酬)は、既存ノートで Eventbrite の B2B アフィリエイトの記述が資料間で不一致のため、公式で確認できる形に至らなかった。

## 2. Meetup の77機能判定

### Takeaway

Meetup は 77機能中 ✅43・△15・❌2・？17。コミュニティ運営(参加承認・チャット・評価・権限・出席管理)が厚く、決済まわりは主催者サブスク+参加者のサービス料という独自の構造。ヘルプは2025〜2026年に大きく更新されている。

### Cited Findings

- Meetup の判定の内訳(77機能): ✅43 / △15 / ❌2 / ？17。根拠レベルは 公式57・実機3・二次0・なし17 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/meetup.csv)

#### △(一部・有料・条件付き)の条件一覧

- DS03 日付・価格等の絞り込み: 日付範囲・種別(オンライン/対面)・距離・カテゴリで絞り込み、アプリは時間帯も可。価格での絞り込みは記載なし — [Source](https://help.meetup.com/hc/en-us/articles/39235072484109-Finding-an-event)
- DS08 キュレーション・特集: ホームに Local guides などのブログカテゴリ(編集コンテンツ)あり。運営の手動ランキング・特集の運用は確認できず — [Source](https://www.meetup.com/)
- JN04 ウェイトリスト: 定員設定があるイベントで自動ウェイトリスト。必須参加費ありのイベントでは設定不可。Meetup+会員が繰り上げで優先 — [Source](https://help.meetup.com/hc/en-us/articles/360003883411-Enable-a-Waitlist-for-your-Meetup-event)
- JN10 QRチケット・当日受付: RSVP確定でQR付きチケットを自動生成。主催者のQRスキャンはモバイルアプリのみ(Webは手動)。Apple/Google Wallet は未対応と明記(2026) — [Source](https://help.meetup.com/hc/en-us/articles/45352867716621-Your-event-ticket-and-QR-code)
- JN11 参加者一覧の閲覧: 出席者リスト・グループ会員リスト・Who will be there は Meetup+(有料)でフルアクセス、無料プランは制限あり — [Source](https://help.meetup.com/hc/en-us/articles/34744060726669-Meetup-vs-Free-Plan-Members-Key-Differences-and-Benefits)
- SH03 友人・同行者の招待導線: イベント告知後に共有モーダルが自動表示される(主催者向け)。参加者が申込後に友人を招待する専用導線は確認できず — [Source](https://help.meetup.com/hc/en-us/articles/39792225676813-Announcing-your-events)
- SH08 埋め込みウィジェット: Pro 限定の Meetup API で外部ページへデータ提供できる。埋め込みウィジェット・申込ボタンは確認できず — [Source](https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview)
- OP04 AI作成支援: 説明文の ChatGPT 連携生成は作成画面にある。AI によるイベント丸ごと生成(AI events)は Pro 限定 — [Source](https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview)
- OP12 外部ツール連携・API: Zoom 連携は利用可。Mailchimp 連携と Meetup API は Pro 限定。komoot 経路埋め込み(ベータ) — [Source](https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview)
- AC01 無料イベントは無料: 無料の Starter プランは初めての主催者のみ。以降は Standard 月$29.99〜(2024-06 値上げ)。グロース根拠あり(負の事例: 主催者課金後の離脱[OWASP が2026-01廃止]・2019年の参加者課金テストで反発) — [Source](https://help.meetup.com/hc/en-us/articles/40514667096589-I-used-to-have-access-to-the-free-plan-but-now-don-t-see-it-anymore-can-I-get-it-back)
- AC03 参加者データの所有・出力: メーリングリストのエクスポートは Pro のみ。Pro 以外は会員のメールが見えずダウンロード不可と明記(Contact members の記事) — [Source](https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview)
- AC07 集客支援の商品: Pro 限定の Paid promotions(有料イベント促進)とスポンサー募集 — [Source](https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview)
- CR03 前回参加者への優先案内: RSVP状況別に過去参加者へ連絡でき、Meetup+会員は新規イベントを先に通知される(First to Know)。主催者が前回参加者を優先する機能は確認できず — [Source](https://help.meetup.com/hc/en-us/articles/34744060726669-Meetup-vs-Free-Plan-Members-Key-Differences-and-Benefits)
- TS04 ドタキャン対策: RSVP後の欠席(Absent)・チェックイン済の記録と出席履歴、有料イベントの前払い。欠席料・デポジットは確認できず — [Source](https://help.meetup.com/hc/en-us/articles/45352992737677-Introducing-the-new-attendee-list-and-QR-code-check-in)
- FD02 アレルギー・食の好みの登録: イベント質問で任意に聞けるが、健康情報など機微情報の収集は非推奨と明記。専用のアレルギー登録は確認できず — [Source](https://help.meetup.com/hc/en-us/articles/360022471332-Profile-and-event-questions)

#### ❌(ないと確認できたもの)

- JN01 アカウント不要の申込: グループの会員のみイベントに参加可と明記。RSVPすると自動でグループ会員になる(Finding an event)ため、アカウントが必須 — [Source](https://help.meetup.com/hc/en-us/articles/360003883411-Enable-a-Waitlist-for-your-Meetup-event)
- AC02 手数料負担の選択: サービス料は参加者がRSVP時に負担し、主催者は払わないと明記。主催者負担への切替は記載なし — [Source](https://help.meetup.com/hc/en-us/articles/39489419634189--Event-fees-Why-does-Meetup-charge-a-service-fee-for-ticketed-events)

#### 根拠が強い項目

- DS01〜04(検索・距離・フィルタ・個別化推薦)は「Finding an event」と可視性ガイドに仕様が書かれている — [Finding an event](https://help.meetup.com/hc/en-us/articles/39235072484109-Finding-an-event)、[可視性ガイド](https://help.meetup.com/hc/en-us/articles/39489043789325-How-can-I-improve-visibility-for-my-events-and-groups)
- OP05(権限)・OP08(出席管理とQRチェックイン)・JN09(リマインド)・TS02(Super Organizer)は、専用の記事に役割・時期・基準が書かれている — [リーダーシップ](https://help.meetup.com/hc/en-us/articles/360002879411-Managing-a-leadership-team)、[出席者リストとQR](https://help.meetup.com/hc/en-us/articles/45352992737677-Introducing-the-new-attendee-list-and-QR-code-check-in)、[通知](https://help.meetup.com/hc/en-us/articles/40708711774221-What-notifications-Meetup-can-send)、[Super Organizer](https://help.meetup.com/hc/en-us/articles/42035449507853-FAQs-around-the-newly-released-Super-Organizer-badge)
- プラン差(AC01・AC03・OP04・OP12・AC07)は、Standard と Pro の比較表で確認 — [料金表](https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview)
- JN01(アカウント必須)は、会員のみ参加可の明記と、RSVPで自動入会する記述で確認 — [ウェイトリスト記事](https://help.meetup.com/hc/en-us/articles/360003883411-Enable-a-Waitlist-for-your-Meetup-event)、[Finding an event](https://help.meetup.com/hc/en-us/articles/39235072484109-Finding-an-event)
- SH01・SH06・TS02 の表示は、東京の公開イベントページで実機確認(FoodEvent の構造化データ、グループ評価、スーパーオーガナイザー表示) — [Meetup イベント](https://www.meetup.com/ja/tokyo-international-party-shibuya/events/315750739/)

#### 根拠が弱い項目

- DS08(特集)は、ホームに編集コンテンツ(Local guides)への導線があることだけで、記事は読んでいない — [Meetup ホーム](https://www.meetup.com/)
- DS07(都市別・トピック別ページ)は、ホームの導線と find ページの存在までで、検索流入への寄与は確認していない — [Meetup ホーム](https://www.meetup.com/)
- JN05(定員・残席)は、定員の設定と参加者数の表示を確認したが、残席数の表示は未確認 — [イベント作成](https://help.meetup.com/hc/en-us/articles/39790436736525-Creating-an-event)
- FD02(アレルギー等)は、イベント質問で聞けるが、健康情報など機微情報の収集は非推奨と明記されており、実運用が難しい — [プロフィール・イベント質問](https://help.meetup.com/hc/en-us/articles/360022471332-Profile-and-event-questions)

#### 資料間の食い違い・注意

- 料金: 公式ヘルプは Standard 月$29.99〜(6か月$99.99〜・年$174.99〜)、Pro 月$55〜/グループとし、地域・特典で変動すると注記する。既存ノート(2024-06 改定)とは一致 — [料金表](https://help.meetup.com/hc/en-us/articles/28677808413197-Organizer-Subscription-prices-overview)
- AC01: 無料の Starter プランは初めての主催者に限られ、既存の有料契約者は戻れない。既存ノートの「主催者課金」前提とは、初回無料の例外がある点で補足になる — [Starter プラン](https://help.meetup.com/hc/en-us/articles/40514667096589-I-used-to-have-access-to-the-free-plan-but-now-don-t-see-it-anymore-can-I-get-it-back)
- Super Organizer は、ヘルプ(2025-12)に「米国ではまだ提供されない」とあるが、日本語イベントページでは表示を確認した。提供地域は国により異なる — [Super Organizer](https://help.meetup.com/hc/en-us/articles/42035449507853-FAQs-around-the-newly-released-Super-Organizer-badge)、[Meetup イベント](https://www.meetup.com/ja/tokyo-international-party-shibuya/events/315750739/)

#### 「グロース根拠あり」を付けた行(既存ノートの根拠)

- DS02: 創業期の仕組みは ZIP×トピックで5人集まれば成立(既存ノートの牽引機能の記述) — [TechCrunch 2009-09](https://techcrunch.com/2009/09/15/leaked-shareholder-docs-meetup-hits-profitability-and-9-million-in-revenues/)
- AC01・MN02(負の事例): 2019年に参加者へRSVPごとに$2を課す試験で反発、2024年の値上げ後は OWASP が2026-01に Meetup を廃止 — [WP Tavern](https://wptavern.com/meetup-com-introduces-rsvp-fees-for-members-wordpress-meetup-groups-unaffected-by-pricing-changes)、[OWASP](https://owasp.github.io/blog/2026/01/13/retiring-meetup)

### Inferences

- Meetup は「参加承認(JN03)・チャット(CR07)・評価(CR06)・出席履歴(CR05)・通報(TS03)」がそろい、食事会のようにメンバーの質と継続が重要な場の機能を主催者に渡している。ただしサービス料(参加者負担)と主催者サブスクの二重課金構造で、無料維持(AC01)と手数料負担の選択(AC02)は弱い。
- 東京の飲食系の主催者が、説明文とRSVP割引で飲み放題や割引を運用している実例を確認した(FD01・MN04 が ？ の理由)。専用機能が無いことの傍証になるが、機能が無いと断言する根拠(❌)にはしていない。

### Gaps

- ？とした17件(公式資料で確認できなかった): SH04 紹介リンク・紹介の可視化、SH05 連絡先・SNS連携で友人発見、AC04 他サービスからの移行、AC05 主催者紹介・アンバサダー、AC08 運営主催・公式イベント、CR08 年間まとめ・振り返り共有、TS01 本人確認・認証、TS06 直接取引の抑止、FD01 メニューの事前注文・選択、FD03 店舗向け管理画面、FD04 人数確定の店舗通知・集計、FD05 席の確保・貸切の連携、FD06 コース・固定メニュー、FD07 割り勘・個別会計、FD08 店探し・店選び支援、FD10 提供形態の選択、MN04 クーポン・割引コード
- SH04(紹介追跡)・SH05(友人発見)・TS01(本人確認)・AC04(移行)・AC05(紹介報酬)・MN04(クーポン)は、ヘルプの主要カテゴリ(アカウント・グループ・イベント・支払い・ポリシー・サブスク)の記事一覧と該当記事を確認したが、記載を見つけられなかった。ヘルプ全記事を読み尽くしたわけではない。
- Meetup のヘルプ内検索は、結果ページの記事リンクを取得できず、検索結果の抜粋でしか見られない記事がある。

## 3. DICE の77機能判定

### Takeaway

DICE は 77機能中 ✅32・△18・❌1・？26。ファン向けアプリ(個別化推薦・フォロー・友人・ウェイトリスト・総額表示・QRチケット)は公式ヘルプで厚く確認できた。主催者側(MIO)はログイン内で非公開のため、2021年のブログ発表と営業用ページに頼り、△と？が多い。

### Cited Findings

- DICE の判定の内訳(77機能): ✅32 / △18 / ❌1 / ？26。根拠レベルは 公式46・実機5・二次0・なし26 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/dice.csv)

#### △(一部・有料・条件付き)の条件一覧

- JN07 参加者のセルフキャンセル: 原則返金不可。中止・延期、主催者設定のクーリングオフ(購入後24時間等)、Wait Listで売れた場合のみ返金。Refund Protection(第三者保険)あり — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/4409603669777-When-are-you-entitled-to-a-refund)
- JN11 参加者一覧の閲覧: 友人フォロー(フォローリクエスト制)で、友人が保存・購入したイベントを閲覧できる。一般参加者の公開一覧は未確認 — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/22365220986897-How-to-find-events-you-ll-love-on-DICE)
- SH04 紹介リンク・紹介の可視化: 主催者向けトラッキングリンクで購入元を計測(2021年発表)。参加者個人の紹介リンク・紹介報酬は確認できず — [Source](https://dice.fm/blog/dices-big-fat-2021-product-round-up)
- SH08 埋め込みウィジェット: 自社サイトでのチェックアウトと Spotify・YouTube からの購入導線(Smart integrations)。ウィジェットの形態は未確認 — [Source](https://dice.fm/partners/ticketing)
- OP01 簡単な作成: Creator tool(MIO)でイベントを作成・管理。プロモーターアカウント登録後に利用。所要時間・テンプレートは未確認 — [Source](https://dice.fm/partners/work-with-us/promoters)
- OP03 下書き・限定公開: ロックされたチケット(コード入力)とプリセール設定を確認。下書き・URL限定公開・非公開は公式資料で確認できず — [Source](https://dice.fm/event/923pw6-eazybaked-and-distinct-motive-at-exit-206-17th-oct-the-shop-seattle-tickets)
- OP06 参加者管理・名簿出力: 購入者・チェックイン済・Wait List 登録者の確認ができる(Hackney Church 事例の引用)。名簿のCSV出力は確認できず — [Source](https://dice.fm/blog/identify-fan-demand-with-the-waiting-list)
- OP07 一斉メッセージ: Wait List 登録者などへ DICE 経由でパーソナライズ配信ができる。主催者が自由に一斉送信できるかは未確認 — [Source](https://dice.fm/blog/identify-fan-demand-with-the-waiting-list)
- AC03 参加者データの所有・出力: Ticket Holder API と Mailchimp 連携でファンデータを取得可(2021年発表)。CSV出力の可否は未確認。競合比較表は DICE を No と評価[競合発信] — [Source](https://dice.fm/blog/dices-big-fat-2021-product-round-up)
- AC07 集客支援の商品: DICE の Discover・コミュニケーションでの露出と、ファンへの直接マーケ支援を提供。料金・ブースト商品としての有無は未確認 — [Source](https://dice.fm/partners/ticketing)
- CR04 主催者CRM・購読者リスト: Mailchimp 連携でファンを購買・属性タグ付きで取り込みセグメント配信できる。DICE 自体のCRM機能は確認できず — [Source](https://dice.fm/blog/dices-big-fat-2021-product-round-up)
- CR07 グループチャット・掲示板: Groups(イベントの共有・投票・購入通知)がある。チャットや掲示板は確認できず — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/20137793751441-Create-groups-to-make-plans-with-friends)
- TS05 参加者情報の保護: 友人フォローはリクエスト制、グループ内で共有したイベントのみ見える。参加者一覧の限定公開設定は確認できず — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/20137793751441-Create-groups-to-make-plans-with-friends)
- TS06 直接取引の抑止: チケットはアプリ内のみ・電話番号紐づけQRで転売を抑止、Wait List は定価で配分。外部取引全般の抑止は未確認 — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/22367835146513-Why-we-ask-you-to-download-our-app)
- FD01 メニューの事前注文・選択: Extras(チケット購入後にアプリで追加): meet&greet・VIP・クローク・food & drink vouchers 等。購入時の選択ではなく購入後の追加形式 — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/43363506255377-Extras)
- FD03 店舗向け管理画面: 会場・プロモーター向けの管理(Creator tool/MIO)があるが、飲食店専用ではない — [Source](https://dice.fm/partners/work-with-us/promoters)
- MN03 任意チップ・寄付: チャリティ登録の会場のみ、任意の寄付をチケットに追加できる(返金不可) — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/38838031250833-Venue-Donations)
- MN05 ポイント・会員特典: DICE Credit とギフトカード/バウチャーの記事あり(カテゴリ一覧で確認)。ポイント・ロイヤルティ制度は確認できず — [Source](https://dicefm.zendesk.com/hc/en-gb/categories/4409672160529-Payments-pricing-refunds)

#### ❌(ないと確認できたもの)

- JN01 アカウント不要の申込: 電話番号認証のアカウントとアプリが必須。チケットはアプリ内でのみ受け取れる、とヘルプに明記 — [Source](https://dicefm.zendesk.com/hc/en-gb/articles/4409604062481-Create-an-account)

#### 根拠が強い項目

- DS04・DS05・DS06・SH03・SH05・JN04・JN09・JN10 は、ファン向けヘルプに操作手順まで書かれている — [Getting started](https://dicefm.zendesk.com/hc/en-gb/articles/22365422759313-Getting-started-with-DICE)、[ウェイトリスト](https://dicefm.zendesk.com/hc/en-gb/articles/19958073128849-The-wait-list-explained)、[連絡先同期](https://dicefm.zendesk.com/hc/en-gb/articles/22363037002897-How-to-sync-your-contacts-and-find-friends-on-DICE)、[Groups](https://dicefm.zendesk.com/hc/en-gb/articles/20137793751441-Create-groups-to-make-plans-with-friends)
- JN01(アカウント必須・アプリ必須)・TS01(電話番号認証)は、アカウント作成の記事に明記 — [アカウント作成](https://dicefm.zendesk.com/hc/en-gb/articles/4409604062481-Create-an-account)、[アプリが必要な理由](https://dicefm.zendesk.com/hc/en-gb/articles/22367835146513-Why-we-ask-you-to-download-our-app)
- DS03・DS07・SH01・JN05 は、都市の一覧ページとイベントページを実機で確認 — [Browse](https://dice.fm/browse)、[イベントページ](https://dice.fm/event/923pw6-eazybaked-and-distinct-motive-at-exit-206-17th-oct-the-shop-seattle-tickets)
- MN01(総額表示)・FD09(ティア制)・JN07/TS04(返金条件)は、料金・返金のヘルプに明記 — [手数料](https://dicefm.zendesk.com/hc/en-gb/articles/19919684020113-How-DICE-fees-work)、[ティア](https://dicefm.zendesk.com/hc/en-gb/articles/19919859544337-How-ticket-tiers-work)、[返金](https://dicefm.zendesk.com/hc/en-gb/articles/4409603669777-When-are-you-entitled-to-a-refund)

#### 根拠が弱い項目

- 主催者向け(OP01・OP03・OP06・OP07・OP09・OP10・OP12・AC03・AC07)は、営業用ページの機能名と、2021年・Waiting List 解説ブログの記述が根拠で、MIO の画面そのものは確認していない。2021年の機能は現行仕様と違う可能性がある — [パートナー向けチケッティング](https://dice.fm/partners/ticketing)、[2021年の製品まとめ](https://dice.fm/blog/dices-big-fat-2021-product-round-up)、[Waiting List 解説](https://dice.fm/blog/identify-fan-demand-with-the-waiting-list)
- OP05(権限)・OP02(複製)・OP04(AI)は、公式の記載を取得できなかった。検索要約に「MIO でプロモーターをゲスト招待できる」とあったが、原文を開けておらず採用していない — [プロモーター向けページ](https://dice.fm/partners/work-with-us/promoters)
- AC03(データ所有)は、Ticket Holder API と Mailchimp 連携の公式発表(2021年)と、競合の比較表が DICE を No と評価する記述が食い違い、△とした(競合発信) — [2021年の製品まとめ](https://dice.fm/blog/dices-big-fat-2021-product-round-up)

#### 資料間の食い違い・注意

- 41%: パートナー向け公式ページは「DICE で売れるチケットの41%が Discovery 経由」と記し、既存ノートは同じ数値を検索要約・「40%超」としていた。公式ページで確認できたが、定義は自社のものである — [パートナー向けチケッティング](https://dice.fm/partners/ticketing)
- 手数料率: 公式ヘルプは総額表示で「手数料は DICE と主催者で分ける」とだけ書き、率は公開していない。競合が「10〜15%」「8.5%+2.5%」と書く不一致は解消できなかった(既存ノート) — [手数料](https://dicefm.zendesk.com/hc/en-gb/articles/19919684020113-How-DICE-fees-work)
- DICE は2025-06に Fever に買収された(既存ノート)。公式ブログに「DICE and Fever: One Year On」がある。買収後の機能変更は確認していない — [DICE ブログ一覧](https://dice.fm/blog)

#### 「グロース根拠あり」を付けた行(既存ノートの根拠)

- DS04: 販売の41%が Discovery 経由(自社主張) — [パートナー向けチケッティング](https://dice.fm/partners/ticketing)
- DS08: 創業時に音楽編集者が選んだ「ロンドンのベスト100公演」から開始し、O2・Koko・Scala・Village Underground が初日から参加 — [TechCrunch 2014-09](https://techcrunch.com/2014/09/18/dice/amp/)
- JN04: ウェイトリストで需要を検証(Fever は公開前に12,000人超で $60 の体験が数日で完売。DICE は追加公演の判断材料) — [TechCrunch 2018-07](https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties)
- CR01: New Shows Thursday で初週販売+320%(2019年・自社主張) — [Music Week 2019-10](https://www.musicweek.com/digital/read/we-help-promoters-and-venues-pack-shows-dice-founder-talks-ticketing/077698)
- MN01(弱): RA が単一価格表示で転換率が3〜5%高いと説明(検索要約。DICE 自身の数値ではない) — [RA サポート](https://support.ra.co/article/40-booking-fees)

### Inferences

- DICE は「転売防止のアプリ内QR・総額表示・ウェイトリスト(定価での再配分)」を一体にして、チケットの信頼を機能で担保している。食事会の欠席対策(TS04)・総額表示(MN01)の参考になる。ただし食事・店舗連携の機能は Extras(food & drink vouchers)の範囲に限られる。
- ファン側の機能(友人発見・グループ・フォロー)が強い一方、主催者のデータ出力・チーム権限は公開資料が薄く、主催者獲得の訴求は営業主体と読める(既存ノートの「営業が入口」と整合)。

### Gaps

- ？とした26件(公式資料で確認できなかった): JN03 承認制・参加申請、JN06 追加質問・同行者の入力、JN08 カレンダー追加、JN12 イベント後の体験、OP02 コピー・繰り返し作成、OP04 AI作成支援、OP05 共同主催・運営メンバー権限、AC01 無料イベントは無料、AC02 手数料負担の選択、AC04 他サービスからの移行、AC05 主催者紹介・アンバサダー、AC08 運営主催・公式イベント、CR02 自動メンバー化、CR05 参加履歴・バッジ・実績、CR06 レビュー・評価、CR08 年間まとめ・振り返り共有、TS02 主催者の審査・認定、TS03 通報・ブロック・モデレーション、FD02 アレルギー・食の好みの登録、FD04 人数確定の店舗通知・集計、FD05 席の確保・貸切の連携、FD06 コース・固定メニュー、FD07 割り勘・個別会計、FD08 店探し・店選び支援、FD10 提供形態の選択、MN02 主催者向け有料プラン
- DICE の主催者向けヘルプ(MIO 内)は公開されておらず、OP02・OP04・OP05・AC01・AC02・MN02 は確認できなかった。パートナー契約を結ぶか営業に確認するのが確実。
- CR08(Wrapped 型)は、検索でも言及を確認できなかった。

## 4. Ticket Tailor の77機能判定

### Takeaway

Ticket Tailor は 77機能中 ✅34・△12・❌3・？28。主催者向けの発券・運営・分析・連携は features ページで広く確認できた。一方、発見マーケットプレイス・推薦・購入者向けのメール(他イベント宣伝)は公式FAQで「ない」と明記され、消費者向けの機能層は持たない設計である。

### Cited Findings

- Ticket Tailor の判定の内訳(77機能): ✅34 / △12 / ❌3 / ？28。根拠レベルは 公式46・実機3・二次0・なし28 — [出力CSV](/private/tmp/claude-501/-Users-yasukawanaohiro-Github-wt-tree-3/3d89551e-3a6a-4078-b3d2-df17eb0bdabe/scratchpad/research_notes/機能比較と飲食店SaaS調査/features/ticket-tailor.csv)

#### △(一部・有料・条件付き)の条件一覧

- DS01 キーワード・カテゴリ検索: /discover にカテゴリ別の一覧(Theatre・Charity・Workshops & classes 等)。キーワード検索は未確認。公式FAQは組込みの公開イベントマーケットプレイスはないと明記 — [Source](https://www.tickettailor.com/discover)
- DS07 公開ディレクトリ・都市×カテゴリページ: /discover/categories/... のカテゴリ別公開ページがある(自社導入イベントのショーケース用途)。都市別は確認できず — [Source](https://www.tickettailor.com/discover)
- JN12 イベント後の体験: 予約・即時メール配信で事後の連絡は可能。レビュー・写真アルバム等の専用機能は確認できず — [Source](https://www.tickettailor.com/features)
- SH04 紹介リンク・紹介の可視化: チャネル別の referral tags(トラッキングリンク)で売上元を計測、アフィリエイト・紹介プログラム運用にも使える。参加者個人の紹介追跡は未確認 — [Source](https://www.tickettailor.com/promote-your-event)
- OP04 AI作成支援: AI assist(MCPコネクタ)で外部AIツールからイベント作成・チケット更新・売上要約ができる。文面・画像の生成機能そのものではない — [Source](https://www.tickettailor.com/features)
- AC01 無料イベントは無料: 無料チケットは年5,000枚まで無料(同ページのFAQは2,000枚と記載し不一致)。超過分は小額の手数料(要問合せ) — [Source](https://www.tickettailor.com/pricing)
- CR03 前回参加者への優先案内: パスワード付きチケット、バウチャーコード、メンバーシップで限定販売を設定できる。過去参加者への自動の優先案内は確認できず — [Source](https://www.tickettailor.com/features)
- CR04 主催者CRM・購読者リスト: Mailchimp・HubSpot・Constant Contact・ActiveCampaign 連携と、マーケ同意の質問。自前のCRM・セグメントは確認できず — [Source](https://www.tickettailor.com/promote-your-event)
- FD02 アレルギー・食の好みの登録: カスタムチェックアウトフォームで質問を収集できる。専用のアレルギー管理・店舗共有は確認できず — [Source](https://www.tickettailor.com/features)
- FD03 店舗向け管理画面: 汎用の box office・注文管理・チェックイン。飲食店専用の管理画面ではない — [Source](https://www.tickettailor.com/features)
- FD05 席の確保・貸切の連携: Reserved seating(座席表。fundraiser dinners を用途に例示)。店舗の席・貸切管理との連動は確認できず — [Source](https://www.tickettailor.com/features)
- MN05 ポイント・会員特典: メンバーシップ/シーズンパス、ギフトバウチャーを主催者が発行できる。ポイント制度は確認できず — [Source](https://www.tickettailor.com/features)

#### ❌(ないと確認できたもの)

- DS04 パーソナライズ推薦: 公式FAQ: Eventbrite のような組込みの公開イベント発見マーケットプレイスはない(ホワイトラベル型)。推薦機能の記載なし — [Source](https://www.tickettailor.com/eventbrite-alternative)
- CR01 ダイジェスト・おすすめ通知: 公式FAQ: 購入者は主催者の顧客で、他イベントの宣伝メールは送らないと明記。推薦・ダイジェスト配信はない — [Source](https://www.tickettailor.com/eventbrite-alternative)
- MN02 主催者向け有料プラン: 月額・契約なしの従量課金と明記。ホワイトラベルは別途少額(For a small fee) — [Source](https://www.tickettailor.com/)

#### 根拠が強い項目

- 機能の大半(JN04・JN06〜10・SH07・OP01〜03・OP05〜12・AC02・AC03・TS04・FD01・FD09・MN03・MN04)は、機能一覧ページ・注文管理ページ・プロモーションページに記載 — [All Features](https://www.tickettailor.com/features)、[注文管理](https://www.tickettailor.com/manage-your-orders)、[プロモーション](https://www.tickettailor.com/promote-your-event)
- DS04・CR01(❌)は、Eventbrite 比較ページの公式FAQ「組込みの公開イベント発見マーケットプレイスはない」「他イベントの宣伝メールは送らない」に明記 — [Eventbrite alternative](https://www.tickettailor.com/eventbrite-alternative)
- MN01・MN02(❌)・AC01・AC02 は、料金ページとトップページに明記(従量課金・サブスクなし・無料チケットの上限・購入者転嫁/主催者負担) — [料金ページ](https://www.tickettailor.com/pricing)、[トップページ](https://www.tickettailor.com/)
- AC04(移行)・AC05(アフィリエイト)は専用ページに仕様がある(Importer、紹介先の手数料の20%を毎月支払い) — [Eventbrite alternative](https://www.tickettailor.com/eventbrite-alternative)、[パートナープログラム](https://www.tickettailor.com/partner-program)
- SH01(OGP)は公開イベントページで実機確認 — [Ticket Tailor イベント](https://www.tickettailor.com/events/thebaristaleague/1924213)

#### 根拠が弱い項目

- DS01・DS07 は、/discover のカテゴリ別一覧を実機で見たのみで、導入事例のショーケースの位置づけ。検索・絞り込み・都市別は確認できていない — [Discover](https://www.tickettailor.com/discover)
- JN09 の SMS・WhatsApp リマインドは機能名の確認のみで、料金条件や対応国は確認できていない — [All Features](https://www.tickettailor.com/features)
- OP04(AI)は MCP コネクタで外部AIツールからの操作が可能という記述のみで、文面や画像の生成機能ではない — [All Features](https://www.tickettailor.com/features)

#### 資料間の食い違い・注意

- 無料チケットの上限: 料金セクションは年5,000枚まで無料、同ページのFAQは2,000枚と記し不一致。Eventbrite 比較ページは5,000枚と記載(既存ノートも不一致と記載)。AC01 は5,000枚(複数の公式ページ)を採用して△とした — [料金ページ](https://www.tickettailor.com/pricing)、[Eventbrite alternative](https://www.tickettailor.com/eventbrite-alternative)
- DS02: /discover のタイトルは「Discover Events Near You」だが、位置の絞り込みを確認できず、公式FAQは発見マーケットプレイスなしと明記するため、？とした — [Discover](https://www.tickettailor.com/discover)、[Eventbrite alternative](https://www.tickettailor.com/eventbrite-alternative)
- 紹介: パートナープログラムは存在するが、既存ノートでは創業者が「紹介インセンティブは効かなかった」と述べた。機能の有無(AC05 ✅)と効果の評価は別である — [パートナープログラム](https://www.tickettailor.com/partner-program)、[Starter Story](https://www.starterstory.com/how-to-start-a-ticketing-platform)

#### 「グロース根拠あり」を付けた行(既存ノートの根拠)

- MN01: 外部資金なし・口コミ・サポートの質・低価格で成長(創業者の発言) — [Starter Story](https://www.starterstory.com/how-to-start-a-ticketing-platform)
- OP12: Wix・WordPress 連携で発見性を確保(創業者の発言) — [Starter Story](https://www.starterstory.com/how-to-start-a-ticketing-platform)
- AC05(逆の根拠): 紹介インセンティブは効かなかったと創業者が述べた — [Starter Story](https://www.starterstory.com/how-to-start-a-ticketing-platform)

### Inferences

- Ticket Tailor は「消費者向けの層を持たず、主催者のブランドと顧客データを渡す」設計で、Eventbrite の乗換え先として機能(Importer・直接入金・データ所有)を揃えている。Shokujii が幹事側ツールを狙う場合、発見面を持たないことが「主催者の手数料・データ・ブランドの自由度」の訴求と表裏になる点が参考になる。
- 飲食の追加商品(food and drink)と座席表を持つため、食事イベントでも最低限の形は作れる。人数確定の店舗通知やコース選択といった専用機能は、Ticket Tailor でも未確認。

### Gaps

- ？とした28件(公式資料で確認できなかった): DS02 地域・地図検索、DS03 日付・価格等の絞り込み、DS05 フォロー、DS06 ブックマーク・ウィッシュリスト、DS08 キュレーション・特集、JN03 承認制・参加申請、JN05 定員・残席の表示、JN11 参加者一覧の閲覧、SH03 友人・同行者の招待導線、SH05 連絡先・SNS連携で友人発見、SH06 社会的証明の表示、AC07 集客支援の商品、AC08 運営主催・公式イベント、CR02 自動メンバー化、CR05 参加履歴・バッジ・実績、CR06 レビュー・評価、CR07 グループチャット・掲示板、CR08 年間まとめ・振り返り共有、TS01 本人確認・認証、TS02 主催者の審査・認定、TS03 通報・ブロック・モデレーション、TS05 参加者情報の保護、TS06 直接取引の抑止、FD04 人数確定の店舗通知・集計、FD06 コース・固定メニュー、FD07 割り勘・個別会計、FD08 店探し・店選び支援、FD10 提供形態の選択
- DS02・DS03・DS05・DS06・DS08 は、購入者向けの機能層が公式資料に出てこないため ？。❌と断定するには、非対応の明記か実機での確認が要る。
- TS01〜TS06 の信頼・安全は、Acceptable use policy の存在以外に機能として確認できなかった。

