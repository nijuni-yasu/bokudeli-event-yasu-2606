# 予約台帳と顧客管理

> 関連: [README](../00_README.md) / [概観](./01_概観.md) / [予約台帳とCRM](./02_予約台帳とCRM.md) / [イベントと貸切](./03_イベントと貸切.md) / [コミュニティとロイヤルティ](./04_コミュニティとロイヤルティ.md) / [partnerへの示唆](./05_partnerへの示唆.md)


調査日 2026-10-11 時点で、飲食店の予約台帳・テーブル管理・顧客管理(CRM)を提供する日本と海外のサービスについて、料金・機能・外部連携・店舗獲得の方法を整理した。

タグは、[事実]=本文を読んで確認、[自社主張]=ベンダー自身の数値・事例、[要約]=検索結果の要約のみで本文未読、[推測]=調査者の推論を表す。表の「？」は未確認で、非対応ではない。OpenTable・Resy・Tock・TableCheck の成長史は先行の競合調査の文書 [../10_概観/02_グロースストーリー.md](../10_概観/02_グロースストーリー.md) にあり、ここでは繰り返さない。

## 台帳の前提:人数課金のポータルが「脱グルメサイト」訴求の土台になっている

日本のグルメポータルのネット予約は「掲載無料+来店人数×単価」で、ディナーは1人約200円が相場である。ホットペッパーグルメは夜150円+50ポイント/人、昼40円+10ポイント/人で、3人のディナー来店は600円になる([掲載案内](https://www.hotpepper.jp/lcp_keisai/))。食べログは夜200円・昼100円、ぐるなびのスタートは夜205円・昼41円で、LINE や Google ビジネスプロフィール経由でもぐるなびは同じ手数料である(2022年8月の整理)([TableCheck ブログ](https://www.tablecheck.com/ja/blog/seo-gourmet-media/))。台帳各社が訴える「自社予約ページは送客手数料なし」は、この人数課金への不満が土台と見える [推測]。

## 国内の台帳:グルメサイト一元管理・カード与信・POS 連携が共通の核

### TableCheck(テーブルチェック)

- **基本情報と料金**: [事実] 株式会社TableCheck(旧 VESPER、2011-03-11 設立)。2013年に台帳・顧客管理の TableSolution と消費者向け予約の TableCheck を公開した([沿革](https://tablecheck.com/ja/join/about-us/history/))。料金は公式に掲載がなく、問い合わせの導線のみである([店舗向けトップ](https://www.tablecheck.com/ja/join/))。[要約] 2022年の Makuake 提携の資料に、オプション機能は通常「月2,000円+5円/取引」とある([PDF](https://a.storyblok.com/f/66216/x/7f4d1a189b/tablecheck_makuake_partnership_20220407.pdf))。導入店舗数は時点で異なり、一方を採らず併記する [自社主張]。公式トップは約13,000店以上、沿革は約11,300店、2024-05-31 は10,143店(継続率99.6%、月間予約300万件超、自社サイト経由約40%)([プレス](https://www.tablecheck.com/ja/join/about-us/press/2024/20240604-10000-restaurants-tablecheck/))、2026-08-18 は14,000店超である([BEENOS 提携](https://www.tablecheck.com/ja/join/about-us/press/tablecheckbeenos-entertainment/))。資金は2025-03-31 に4.3億円(ひらまつ、ワンダーテーブル等の飲食企業)、2025-12-15 に7億円のデットファイナンスで、累計17.89億円である([2025-03](https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/)、[2025-12](https://www.tablecheck.com/ja/join/about-us/press/2025/1215_debt-financing/))。
- **主要機能**: [事実] 顧客管理は来店履歴・注文・アレルギー・誕生日を蓄積して系列店で共有し、複合条件で検索できる(メール配信は外部サービス連携で、SMS 配信の記載はない)([顧客管理](https://tablecheck.com/ja/join/features/customer-relationship-management/))。キャンセル対策は、予約時にカードを預かる与信型と事前決済型があり、メニュー・人数・客層(団体、海外客)別に設定できる([キャンセル対策](https://tablecheck.com/ja/join/features/cancel-and-no-show-protection/))。予約受付は、送客手数料なしの公式 Web 予約、グルメサイト25媒体の自動取込、電話予約の入力である([予約受付](https://tablecheck.com/ja/join/features/reservation-and-table-management/))。ほかに TableCheck Pay、FastPass、Channels、データ活用があり、コース事前選択・宴会/貸切・卓割りの個別説明は読めた範囲で未確認である。
- **外部連携**: [事実] POS は13社以上。Channels は Instagram/Facebook、LINE予約、Google、ミシュランガイドと連携し(ぐるなび・食べログ・Tripadvisor は同ページに記載なし)、2023年に日本の予約システムとして初めて Michelin Guide と Tripadvisor の両方と連携した([Channels](https://tablecheck.com/ja/join/features/tablecheck-channels/))。公開 API は確認できなかった。
- **店舗獲得とグロース**: [事実] 2014年に POS 連携、2015年に1,000店を突破してヒルトンが初のグローバルホテル顧客になり、2017年のソウルから海外へ広げた([沿革](https://tablecheck.com/ja/join/about-us/history/))。出資者と導入事例に飲食グループが並ぶことから、チェーン本部経由の導入が有力ルートの一つと読める [推測]。効果は [自社主張] で、やきにく亭 六歌仙は無断キャンセルが月100件からほぼゼロ(決め手はカード与信と、予約集中時に落ちない安定性)([事例](https://tablecheck.com/ja/join/success-stories/cancel-protection/rokkasen_2026/))、MOTHERS はグルメサイト手数料が月または年300〜400万円減(見出しと本文で不一致)で、顧客データを自社に残せる点を理由に挙げる([事例](https://tablecheck.com/ja/join/success-stories/ota-vs-ownedmedia/mothers/))。

### トレタ(toreta)

- **基本情報と料金**: [事実] LINEヤフーが2026-01-30 に株式取得を合意し、2026-02-25 に過半数を取得して子会社化した。LINE を基盤にした飲食業向け SaaS を目指す([プレス](https://corp.toreta.in/press/2026-02-25-9570/))。導入は「累計1万9000店舗超」で、稼働数ではない([トラベルボイス](https://www.travelvoice.jp/20260130-159175))。料金は公式に記載がなく、2017年の「月額1.2万円」は記者の試算である([ITmedia](https://www.itmedia.co.jp/news/article/1711/29/1171129125/))。過去は、2016年8月に約7,000店(予約台帳のシェア33.5%)、2017年10月に9,000店超・継続利用率99%(トレタ側の数値)である([The Bridge](https://thebridge.jp/2016/08/toreta-got-7k-accounts-two-and-a-half-years))。
- **主要機能**: [事実] 製品は予約台帳、トレタO/X(店内モバイルオーダー)、トレタ予約番(AI 電話予約)、トレタスタンプ(アプリ不要のスタンプカード兼 CRM)である([コーポレート](https://corp.toreta.in/))。台帳はテーブルマネジメント、グルメサイト予約の一元管理、POS 連携、通話録音を持つ。「かんたんネット予約プラス」(2025-11-27)は表示言語ごとにコースを出し分け、外国語の客にはカード登録(与信枠確保)の予約フォームを使う([プレス](https://corp.toreta.in/press/2025-11-27-8877/))。Payn 連携(2026-03-23)は、キャンセル予約のデータを毎朝 Payn へ自動送信してキャンセル料の回収を自動化し、台帳導入店は連携費用が無料(Payn 本体は別途申込)である([プレス](https://corp.toreta.in/press/2026-03-23-9756/))。「コース予約の来店率100%」(駒形どぜう浅草店)は [自社主張] である([公式](https://toreta.in/))。リマインド・配信・アンケートの詳細は未確認である。
- **外部連携**: [事実] 2025-10-31 に CASHIER と API 連携、2026-02-19 に東芝テックPOS、2026-03-05 にスマレジの決済連携に対応した([お知らせ](https://corp.toreta.in/news/))。連携先グルメサイト名と公開 API は確認できなかった。LINE公式アカウントとの連携を計画する。
- **店舗獲得とグロース**: [事実] 導入先は2017年時点で大半が東京で、地方拡大が課題だった。[推測] 2026年以降は LINEヤフーの顧客接点・来店促進・モバイルオーダーと組み合わせた拡販が見込まれる。

### ebica(エビカ / 株式会社エビソル)

- **基本情報と料金**: [事実] 運営はエビソル(親会社はジャパンチケットホールディングス、グループ会社に Japanticket)。「全国15,000店舗を支援」は累計の表現である([公式](https://www.ebica.jp/))。価格表はフォーム経由で、第三者の ASPIC に「月約10,000円から、初期30,000円が目安」とあるが、日付不明で公式確認はできていない([ASPIC](https://www.aspicjapan.org/asu/service/47698))。
- **主要機能**: [事実] グルメサイトコントローラー(複数サイトの予約を自動取得し、空席を更新してダブルブッキングを防ぐ)、AI電話予約「さゆり」、スマート予約(自社サイト・Instagram から予約、英語・中国語対応)、顧客管理、配席管理、POS 連携を持つ。Payn 連携(2026-08-18)は、no-show・キャンセルの予約データを API で渡して請求書の下書きを自動作成し、Payn の費用は成功報酬型(率は未記載)で連携の追加費用はない([ebica × Payn](https://www.ebica.jp/news/info/ebica-payn-system-cooperation/))。
- **外部連携**: [事実] Google、中国の口コミ「大衆点評」、LINE、Japanticket(海外 OTA)から予約を受ける。2026年に Japanticket が Traveloka・Myrealtrip と API 連携し([お知らせ](https://www.ebica.jp/news/info/traveloka-jt-system-cooperation/))、Yappli Mobile Order とも連携した。[要約]「10以上のグルメサイトへ席在庫を自動反映」とされるが、ぐるなびとの連携は明記されない。
- **店舗獲得とグロース**: [事実] 販売パートナー制度は、飲食店を支援する事業者に「積み上げ型のランニングマージン」を訴求し(率は非公開)、エビソルが設定・納品(約2週間)・運用サポート、勉強会・商談同行・専任窓口を提供する。商談獲得から契約まで担う形と、商談獲得までの形がある([販売パートナー](https://www.ebica.jp/sales-partners/))。台帳の導入が Japanticket 経由の訪日客予約の入口になる。

### OMAKASE・Airリザーブ・ぐるなび台帳

- **OMAKASE(GMO OMAKASE)**: [事実] 2021-05-24 に GMO インターネットが子会社化。当時230店舗以上で、利用者が予約時に1席・1予約あたり390円を払う([GMO](https://group.gmo/en/news/article/813/))。[要約] ミシュラン掲載店中心に約1,000店舗に導入(求人サイトの記載で本文は店舗数なし)、2022年に利用者向けキャンセル保険、2025年4月に JCB のプレミアム会員向けサービス。店舗側の料金は公式が403で読めず確認できなかった。
- **Airリザーブ(リクルート)**: [事実] フリー月0円(予約・顧客管理、オンライン決済)、ベーシック5,500円(リマインドメール、Google カレンダー連携)、スタンダード11,000円(予約時アンケート、CSV)、プレミアムは非公開。初期費用0円、解約金なし、決済手数料3.24%。Air ペイ・Air レジ・Air ウェイトと AirID で連携する汎用の予約管理で、飲食専用の機能と導入数は確認できなかった([Airリザーブ](https://airregi.jp/reserve/))。[推測] 無料プラン+決済手数料の入口設計である。
- **ぐるなび台帳**: [事実] 予約管理・顧客管理・集計分析・POS 連携・他社予約の取り込みを備え、オプションで電話自動受付・着信顧客通知がある([ぐるなび台帳](https://pro.gnavi.co.jp/gnavi_daicho/))。料金はスタート月0円(ランチ41円・ディナー205円/人)、ライト月11,000円、ベーシック月33,000円(11円〜/55円〜/人)である([アイミツ](https://saas.imitsu.jp/cate-reservation/service/4586/price))。コース予約の扱いは出典間で不一致で、マネーフォワードはライトを席のみ・ベーシックを席とコースとし([記事](https://biz.moneyforward.com/restaurant/basic/3318/))、検索結果の要約にはライトがコース予約に対応との記述がある [要約]。

## 海外の台帳:ゲスト CRM とカバー課金の有無が差別化軸

### SevenRooms

- **基本情報と料金**: [事実] DoorDash が2025-06-13 に買収を完了し、世界13,000以上の施設を支援とする([DoorDash](https://about.doordash.com/en-us/news/doordash-completes-acquisition-of-sevenrooms))。自社トップは15,000店超と主張する [自社主張] ([トップ](https://www.sevenrooms.com/))。対価は、[要約] SEC 開示で11.52億ドル([10-Q](https://www.sec.gov/Archives/edgar/data/1792789/000179278925000020/dash-20250930.htm))、別の出典は現金12億ドルで表現が異なる([Wikipedia](https://en.wikipedia.org/wiki/SevenRooms))。料金は Starter/Growth/Premium の見積で、アドオンに Email Marketing、Event Management、Voice AI、API、Group Portal がある([Pricing](https://sevenrooms.com/pricing/))。競合の Eat App は会場あたり月$400〜$1,200超と推定する([Eat App](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026))。$149/$299/$499 は SevenRooms 自身の比較ページでは OpenTable の価格である([比較ガイド](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/))。
- **主要機能・連携**: [事実] 予約・来店・注文を横断した顧客データ、予約チャネル(自社サイト、DoorDash/Deliveroo、Google、Instagram、Yelp)、Voice AI、ウェイトリスト、AI 卓管理、メール/SMS を備え、Starter にも5,000万人超の DoorDash/Deliveroo マーケットプレイスへのアクセス(カバーフィーなし)が含まれる([Platform](https://sevenrooms.com/platform/))。「100以上の連携」は [自社主張]、API は有料アドオンである。直接予約は店舗の一次データで、DoorDash 経由のデータは DoorDash 側にとどまる(比較ページの記載)。
- **店舗獲得とグロース**: [事実] ホテル・MGM・Marriott など大規模グループ向けの見積営業で、買収後は DoorDash の需要側を武器に訴求する。[要約] OpenTable・Resy・Tock・SevenRooms 間の店舗移籍に5〜7桁の支払いがあるとの報道・噂がある([Fast Company(未読)](https://www.fastcompany.com/91496951/amex-resy-tock-restaurant-reservation-wars))。

### OpenTable

- **基本情報と料金**: [事実] 2025年下半期から米国の多くの店舗で、予約サイト経由の決済(no-show 違約金、デポジット、前払い体験)に2%のサービス料が加わり、店が吸収するか客に転嫁するかを選べる([Inquirer](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html))。CEO は「Restaurants hated us」と述べ、パンデミック中に3年契約を迫った例があり、店舗が年最大6,000ドルを払う場合がある([Bloomberg](https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching))。月額は出典間で不一致で、SevenRooms の比較ページは Basic $149/Core $299/Pro $499+ネットワークのカバーあたり約$1〜1.50、競合ブログは Basic $39〜99/Core 約$249/Pro 約$449+ネットワーク$1.00〜1.25(自社直接予約は無料)とする([Loop.fans](https://loop.fans/blog/opentable-for-restaurants-pricing-fees-alternatives))。公式料金ページは未読である。[要約]「60,000店超」、繁忙店で月$2,000〜3,000のオーナー談([Atlanta Magazine](https://www.atlantamagazine.com/dining-news/atlanta-restaurants-ditching-opentable/))。
- **主要機能・導入理由**: [事実] カード必須+no-show 違約金($15/人の例)、20分のグレース、リマインド SMS 3回、来店前の電話確認が運用できる。Pizzata は no-show で席を失って導入した。POS 連携は Core/Pro で、OpenTable を「プライマリ予約システム」にすることが要件とされる(競合記載)。離脱理由は、高コスト・長期契約・店舗より客を優先する姿勢と報じられた。

### Resy と Tock(予約側)

- **統合の経緯**: [事実] Amex は Tock を Resy に統合する方針で、統合後の Resy は2万5千超の施設を予約できる。Tock のアプリ/サイトは終了していく([Thrifty Traveler](https://thriftytraveler.com/news/credit-card/amex-resy-tock-integration-dining-credits/))。Amex IR は Tock の買収完了を2024-10-15 とし、導入は約7,000である([Amex IR](https://ir.americanexpress.com/news/investor-relations-news/investor-relations-news-details/2024/American-Express-Completes-Acquisition-of-Tock/default.aspx))。別の要約は「2024年6月、約4億ドル」で時期が合わず([Restaurant Business(未読)](https://www.restaurantbusinessonline.com/technology/reservation-services-resy-tock-are-merging))、4億ドルは2021年の Squarespace による買収額(4億ドル超)と同水準で、どの取引の金額か確認が要る [推測]。[要約] 店舗向け技術の統合は2027年で、既存の Resy 店舗に変化はない([Fast Company(未読)](https://www.fastcompany.com/91496951/amex-resy-tock-restaurant-reservation-wars))。
- **料金は出典間で不一致**: [自社主張/競合] Resy は SevenRooms の比較ページで月$249/$399・カバー課金なし、Eat App で Basic $249/Pro $399/Enterprise $899 とされ、Resy OS のページは Essential/Premium/Platform/Platform 360 のプラン名に言及して価格は載せない([Resy OS](https://resy.com/resyos/features/events))。Tock の公式料金は未読で、2025-04 の第三者レビューは予約向け Base $99(前払いに3%)〜Premium Unlimited $899(0%)、イベント向け Intro $0(3%)〜Pro $699(0%)の1年契約とする([The Restaurant HQ](https://www.therestauranthq.com/technology/tock-to-go-review/))。
- **店舗獲得**: [推測] カード会社が特典で需要をつくり、台帳が供給(店舗)を囲う二面モデルである。[要約] Resy は OpenTable のカバー課金への対抗として月額サブスクを提示した。

### Toast Tables・Yelp Guest Manager・Eat App・resos

- **Toast Tables**: [事実] Toast POS 専用で、卓状態・双方向 SMS・Toast Marketing/Loyalty に連動するプロファイルを持つ。現行価格は非公開で、2023年の発売時は月$50/$199と報じられた(競合推定)。離脱理由は POS ロックインと、予約の流入がほぼ Google と Toast アプリに限られる点(競合の見方)である([Katalyst](https://www.katalystos.com/alternatives/toast-tables-alternatives))。
- **Yelp Guest Manager**: [事実] Yelp・Google・Apple Maps・ChatGPT・Instagram などへの掲載を一元管理し、ウェイトリストと AI 電話(Yelp Host、30日無料)を持つ。カバー課金なし、利用11,000店以上は [自社主張]。価格は Basic $159/Plus $349(競合記載)である([Yelp](https://business.yelp.com/restaurants/))。
- **Eat App**: [事実] 月払いで Free $0(月100ゲスト)、Lite $99、Core $199、Pro $389。デポジット/前払いはアドオン$19、メールマーケ$39、自動化$49。「ノーショー90%減」「予約コミッション$0」は [自社主張] で、店舗数は不明(90か国超とのみ)である([Pricing](https://restaurant.eatapp.co/pricing))。
- **resos**: [事実] 月額 Free €0(25予約)〜Unlimited €63。コミッション・カバー課金なし。決済(前払い・no-show 料)€11.99、SMS €0.10/通、API €11.99などのアドオン制で、3,000店以上が利用と主張する [自社主張] ([Pricing](https://resos.com/pricing/))。

## 機能×サービスの比較

凡例は ✅=確認済み、△=一部・有料・上位プランのみ、❌=なしと確認、？=未確認(非対応ではない)である。ぐるなび台帳の列は、公式ページと比較サイトの記載から調査者がまとめた。

### 国内

| 機能 | TableCheck | トレタ | ebica | OMAKASE | Airリザーブ | ぐるなび台帳 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 台帳・卓管理 | ✅ | ✅ | ✅ | △ | ✅(卓は？) | ✅ |
| 顧客プロファイル/CRM | ✅(アレルギー・誕生日) | ✅(詳細？) | ✅(詳細？) | ？ | ✅ | ✅ |
| no-show 対策 | ✅(与信+事前決済) | ✅(与信+Payn) | △(Payn 連携) | △(利用者向け保険[要約]) | △(オンライン決済のみ) | ？ |
| コース事前選択 | △(メニュー単位の設定) | ✅(出し分け) | ？ | ？ | ？ | △(プラン差、不一致) |
| グループ/宴会/貸切 | △(団体向けポリシー) | ？ | ？ | ？ | ？ | ？ |
| リマインド・配信 | ✅(メール/SMS。配信は外部連携) | ？ | ？ | ？ | △(メール) | ？ |
| アンケート/口コミ導線 | ？ | ？ | ？ | ？ | △(予約時アンケート) | ？ |
| 公開 API | ？ | ？(パートナー連携) | ？(パートナー連携) | ？ | ？ | ？ |
| POS 連携 | ✅(13社以上) | ✅ | ✅ | ？ | △ | ✅ |
| グルメサイト/Google/Instagram/LINE | ✅(25サイト+Google+IG+LINE) | ✅(LINE は計画) | ✅(コントローラー+Google+LINE) | 自体が予約サイト | ？ | ✅(他社予約の取込) |
| 無料プラン | ？ | ？ | ？ | ？ | ✅ | △(スタート0円+人数手数料) |
| 人数課金なしの主張 | ✅(自社 Web 予約) | ？ | ？ | ❌(利用者から390円) | ✅ | △ |

### 海外

| 機能 | SevenRooms | OpenTable | Resy/Tock | Toast Tables | Yelp GM | Eat App | resos |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 台帳・卓管理 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| CRM | ✅ | ？ | △(競合記載) | △ | △(Basic なし) | ✅ | ？ |
| no-show 対策 | ？ | ✅(カード必須+違約金) | △(Tock は前払い) | ？ | ？ | △(アドオン) | △(アドオン) |
| グループ/貸切 | △(Group Portal アドオン) | ？ | ？ | ？ | ？ | ？ | ？ |
| リマインド・配信 | ✅(一部アドオン) | ✅(SMS 3回の運用例) | ？ | △ | ？ | △(アドオン) | △(SMS €0.10) |
| 公開 API | △(有料アドオン) | ？ | ？ | ？ | ？ | ？ | △(アドオン) |
| POS 連携 | ✅(100+は自社主張) | △(Core/Pro) | △(Platform 以上) | ✅(Toast 専用) | △(Plus 以上) | △ | ？ |
| 無料プラン | ❌(見積) | ？ | ？ | ？ | △(Host 30日無料) | ✅ | ✅ |
| カバー課金なしの主張 | ✅(自社) | ❌(ネットワーク) | △(Resy なし、Tock は競合が課金と記載) | ✅(競合記載) | ✅(自社) | ✅(自社) | ✅(自社) |

読み取れる点は3つある。日本の3社は「グルメサイト予約の一元管理」が共通の核で、差は与信・事前決済の作り込み(TableCheck、トレタ)とインバウンド・OTA 連携(ebica)にある。「アンケート/口コミ導線」と「宴会/グループ」は主要各社の公式本文で明示されておらず、強調する余地のある空白に見えるが、読めなかっただけの可能性がある [推測]。小規模店向けは「無料プラン+決済・SMS・API・マーケをアドオン課金」が標準で、チェーン・ホテル向けは見積制の SevenRooms 型に分かれる [推測]。

## 2025〜2026年の動きと導入・乗り換えの理由:台帳は外部連携と提携で機能を補う

2025〜2026年は、DoorDash による SevenRooms の買収、OpenTable の2%手数料、LINEヤフーによるトレタの子会社化、Amex による Tock の Resy への統合計画が重なった。トレタ(2026-03)と ebica(2026-08)が Payn(成功報酬型)と連携した点は、国内の台帳が自社開発よりエコシステム連携で機能を補う方針に見える [推測]。導入理由は、無断キャンセル防止(カード与信・事前決済)、グルメサイト手数料の削減、紙・電話予約の工数削減、インバウンド対応である(TableCheck の事例 [自社主張])。海外では OpenTable の導入理由が no-show 対策、離脱理由が多重課金・長期契約・客優先の姿勢である。[要約]「2%はダブルディップ」という店の声もあるが、競合系サイト由来を含み裏取りが不十分である。日本の台帳の解約・乗り換えの理由は独立した情報で確認できなかった。

## 出典

[ホットペッパーグルメ](https://www.hotpepper.jp/lcp_keisai/)、[TableCheck ブログ 2022-08](https://www.tablecheck.com/ja/blog/seo-gourmet-media/)。TableCheck: [トップ](https://www.tablecheck.com/ja/join/)、[沿革](https://tablecheck.com/ja/join/about-us/history/)、[顧客管理](https://tablecheck.com/ja/join/features/customer-relationship-management/)、[キャンセル対策](https://tablecheck.com/ja/join/features/cancel-and-no-show-protection/)、[予約受付](https://tablecheck.com/ja/join/features/reservation-and-table-management/)、[Channels](https://tablecheck.com/ja/join/features/tablecheck-channels/)、[六歌仙](https://tablecheck.com/ja/join/success-stories/cancel-protection/rokkasen_2026/)、[MOTHERS](https://tablecheck.com/ja/join/success-stories/ota-vs-ownedmedia/mothers/)、[2025-03-31](https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/)、[2025-12-15](https://www.tablecheck.com/ja/join/about-us/press/2025/1215_debt-financing/)、[2024-06-05](https://www.tablecheck.com/ja/join/about-us/press/2024/20240604-10000-restaurants-tablecheck/)、[BEENOS 提携](https://www.tablecheck.com/ja/join/about-us/press/tablecheckbeenos-entertainment/)、[Makuake 提携 PDF](https://a.storyblok.com/f/66216/x/7f4d1a189b/tablecheck_makuake_partnership_20220407.pdf)。トレタ: [2026-02-25](https://corp.toreta.in/press/2026-02-25-9570/)、[2026-03-23](https://corp.toreta.in/press/2026-03-23-9756/)、[2025-11-27](https://corp.toreta.in/press/2025-11-27-8877/)、[お知らせ](https://corp.toreta.in/news/)、[コーポレート](https://corp.toreta.in/)、[公式](https://toreta.in/)、[トラベルボイス](https://www.travelvoice.jp/20260130-159175)、[The Bridge 2016](https://thebridge.jp/2016/08/toreta-got-7k-accounts-two-and-a-half-years)、[ITmedia 2017](https://www.itmedia.co.jp/news/article/1711/29/1171129125/)。ebica: [公式](https://www.ebica.jp/)、[販売パートナー](https://www.ebica.jp/sales-partners/)、[Payn 連携](https://www.ebica.jp/news/info/ebica-payn-system-cooperation/)、[Traveloka 連携](https://www.ebica.jp/news/info/traveloka-jt-system-cooperation/)、[ASPIC](https://www.aspicjapan.org/asu/service/47698)。OMAKASE・Air・ぐるなび: [GMO](https://group.gmo/en/news/article/813/)、[Airリザーブ](https://airregi.jp/reserve/)、[ぐるなび台帳](https://pro.gnavi.co.jp/gnavi_daicho/)、[アイミツ](https://saas.imitsu.jp/cate-reservation/service/4586/price)、[マネーフォワード](https://biz.moneyforward.com/restaurant/basic/3318/)。海外: [DoorDash](https://about.doordash.com/en-us/news/doordash-completes-acquisition-of-sevenrooms)、[10-Q(要約)](https://www.sec.gov/Archives/edgar/data/1792789/000179278925000020/dash-20250930.htm)、[SevenRooms Pricing](https://sevenrooms.com/pricing/)、[Platform](https://sevenrooms.com/platform/)、[トップ](https://www.sevenrooms.com/)、[比較ガイド](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)、[Wikipedia](https://en.wikipedia.org/wiki/SevenRooms)、[Inquirer](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html)、[Bloomberg](https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching)、[Loop.fans](https://loop.fans/blog/opentable-for-restaurants-pricing-fees-alternatives)、[Atlanta Magazine(要約)](https://www.atlantamagazine.com/dining-news/atlanta-restaurants-ditching-opentable/)、[Thrifty Traveler](https://thriftytraveler.com/news/credit-card/amex-resy-tock-integration-dining-credits/)、[Amex IR](https://ir.americanexpress.com/news/investor-relations-news/investor-relations-news-details/2024/American-Express-Completes-Acquisition-of-Tock/default.aspx)、[Fast Company(未読)](https://www.fastcompany.com/91496951/amex-resy-tock-restaurant-reservation-wars)、[Restaurant Business(未読)](https://www.restaurantbusinessonline.com/technology/reservation-services-resy-tock-are-merging)、[Eat App 2026-07](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026)、[The Restaurant HQ](https://www.therestauranthq.com/technology/tock-to-go-review/)、[Resy OS](https://resy.com/resyos/features/events)、[Katalyst](https://www.katalystos.com/alternatives/toast-tables-alternatives)、[Yelp](https://business.yelp.com/restaurants/)、[Eat App Pricing](https://restaurant.eatapp.co/pricing)、[resos](https://resos.com/pricing/)

## 未確認・留意点

- 公式本文が読めなかったもの: OpenTable 公式料金、Tock 公式、Resy 公式料金、Toast 公式、Restaurant Business、Fast Company、omakase.in の店舗向けページ(403・タイムアウト)。該当する記述は [要約] か競合記事による。
- 料金が非公開または不一致: TableCheck・トレタ・ebica は非公開、SevenRooms は見積、OpenTable・Tock・Resy は出典間で不一致。TableCheck の導入店舗数も併記にとどめた。
- Tock の Resy 統合は、実行時期(「2026年8月に Tock 会場が Resy に表示され始めた」とする単一の二次情報は未検証)、手数料・前払いの扱い、統合後の価格、日本展開の有無が未確認である。
- 日本の台帳の公開 API は確認できず、パートナー限定の連携が実態に見える。リマインド・アンケート・コース事前選択・宴会/貸切・卓割りの個別仕様は、TableCheck・トレタ・ebica の公式本文で未確認である。
- 日本の台帳の解約・乗り換え理由、1店舗あたりの実際の月額、トレタの稼働店舗数、LINEヤフー子会社化後の料金・機能変更、OMAKASE の店舗側料金と現行店舗数は不明である。
