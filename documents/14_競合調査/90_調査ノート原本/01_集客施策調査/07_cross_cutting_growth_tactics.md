# イベント系プラットフォーム横断: 参加者獲得・主催者獲得の施策パターン集

調査時点: 2026年10月。依頼元は日本の食事コミュニティイベント基盤「Shokujii」(幹事がイベントを立て、参加者がメニューを注文して参加)。
本ノートは特定サービスの紹介ではなく、複数サービスで再利用できる「施策パターン」を、公開された一次情報・数値・創業者発言から体系化したもの。

## 凡例(読み方)

- **[事実]** = 出典で確認できた内容。**[推測]** = 本ノート作成者の解釈・計算。**[不明]** = 確認できなかった。
- 出典の信頼度タグ: **[一次]** SEC 提出書類・公式ブログ/ヘルプ・本人の公開文書、**[報道]** 報道機関・専門メディア、**[ベンダー]** 当該企業または競合のマーケティング主張(自社に有利)、**[要約]** 検索結果の要約でのみ確認し、ページ本文を直接読めていないもの(要再確認)。
- 「機能」(プロダクトに実装された仕組み)と「施策」(人や運用が行う働きかけ)は各パターンで分けて書く。
- 各パターンは「実例 / 根拠 / 前提・失敗条件」の3点で記述する。
- 調査上の訂正: 依頼文の「Dinner Lab の縮小(2018年想定)」は、TechCrunch の報道では **2016年4月14日の閉鎖発表** だった([TechCrunch](https://techcrunch.com/?p=1307899))。また Luma の創業者は Victor Pontis と Danqing(Pontis 自身の文書より)であり、後述する。

---

# (A) コールドスタート戦略の比較

## A-0. 先に結論(Takeaway)

- [事実] 検証できた範囲では、「ツールで来て、ネットワークで残る」型(Eventbrite、Luma、Partiful、Posh)と、「マーケットプレイス/キュレーション先行」型(Dice、Fever)、「人手で運営する自社供給」型(Dinner Lab)で、成長の起点も失敗の仕方も異なる。
- [事実] ツール型の 4 社はいずれも、供給側(主催者)が自分の手元の既存コミュニティを持ち込むことで最初の密度を作っている。Eventbrite は 2017 年に 95% 超の主催者が自己登録、Luma は「ほぼ完全にクチコミ」と創業者が述べている(詳細は後述)。
- [推測] 「どの1都市・1ジャンルで原子ネットワークを作るか」が、全パターンに共通する決定事項である。

## A-1. 比較表

| 型 | サービス | 起点(最初に提供したもの) | 最初の密度の作り方 | その後のネットワーク化 |
|---|---|---|---|---|
| ネットワーク先行(地域×興味) | Meetup (2002) | 「近所の人を見つける」ためのグループ作成サイト。初期収益は会場からの手数料 | 同じ関心のメンバーが集まるとメールで会場を投票 | 主催者課金(2005)、Meetup Everywhere(2010)で他サイトの読者を現地開催に変換 |
| ツール先行 | Eventbrite (2006) | オンライン発券の自己完結ツール(当時オンラインでチケットを売る手段が乏しかった) | 主催者が自己登録(2017 年に 95% 超)、SEO・コンテンツ、後に SNS API 連携 | 参加者→主催者の転換、マーケットプレイスの発見流入(2023 年に発券の 30% 超) |
| ツール先行(コミュニティ内) | Luma (2020〜) | Zoom 上のヨガクラス向けイベントページ(ZmURL)から出発 | 創業者の周辺コミュニティ(テック、スタートアップ)。ホストが既存ネットワークを招待 | ホスト→ゲスト→新規ホストの連鎖、カレンダー購読、Tech Weeks |
| ツール先行(友人グループ内) | Partiful | リンクで送れる招待状(アカウント不要で RSVP) | 20代の友人グループ・大学・都市間の移動 | 招待を受けた人が自分の会を開く。Halloween 等の季節ピーク |
| ツール先行(プロモーター) | Posh (2019〜) | 自分たち(NYU 学生)がイベント運営に使うソフトを自社運用し、他の主催者に開放 | NYU・Columbia 圏の夜イベント。後に学生アンバサダー | 取引を握る→CRM/紹介報酬で主催者を囲い込み→消費者向けフィード |
| マーケットプレイス/キュレーション先行 | Dice (2014) | 手数料なし・定価・アプリ内チケットのロンドンのライブ案内アプリ | 約 100 公演を人が選び、販売可能公演数に上限(250 以内)を設ける | 都市ごとに拡大(2015 年に英国 5 都市)。後に欧州・北米 |
| 自社供給(Originals) | Fever (Candlelight) | 都市ごとの発見アプリ+自社企画のイベント(2019 年マドリード発) | 各都市の地元音楽家ネットワークでフォーマットを複製 | 100 都市超(2023 年時点の報道) |
| 人手運営の自社供給 | Dinner Lab (〜2016) | 会員制の覆面ポップアップ・ディナー | 都市ごとにシェフ・会場を手配 | 閉鎖(31 都市で運営中の 2016 年 4 月に発表) |

## A-2. 事例ごとの詳細

### A-2-1. Meetup(創業期: 2002〜2010。年代注意)

**実例**
- [事実] 創業者 Scott Heiferman は 9/11 後に近隣住民と話す機会が増えたことが着想で、サイトは「9 か月強後」に開設された([Entrepreneur, 2011-06-07](https://www.entrepreneur.com/article/219753))。Wikipedia は 2002 年 6 月 12 日開始と記す([Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup))。[報道]
- [事実] 初期収益モデルは会場からの課金。グループに十分なメンバーが集まると、メンバーが 3 つのスポンサー会場から投票する仕組みだった([Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup))。[二次]
- [事実] 2004 年の Howard Dean 陣営が Meetup を使い、最大時に 143,000 人が支持者グループに参加した([Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup))。
- [事実] 2005 年初頭に主催者への課金を開始した([Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup)。この脚注は 2015 年の Inc. 記事で、日付は要再確認)。2009 年 7 月に黒字化、年換算収益 $900 万([Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup))。
- [事実] 2010 年 5 月下旬、TechCrunch Disrupt で Meetup Everywhere を発表。組織・企業・運動が同時多発的に各地で Meetup を立ち上げられる仕組み。TechCrunch 5 周年記念を最初のユースケースとし、告知時点(2010-05-28)で約 150、3 日後に 252、その後 352 超の Meetup が世界で立った([TechCrunch 2010-05-28](https://techcrunch.com/2010/05/28/150-meetups-birthday/)、[TechCrunch 2010-05-31](https://techcrunch.com/2010/05/31/techcrunch-meetups))。Fortune によると同年 8 月には埋め込みウィジェットとして提供され、Huffington Post の原油流出テーマでは 25 か国 1,812 人が 439 の Meetup に参加した([Fortune, 2010-08-17](https://fortune.com/2010/08/17/meetup-wants-to-be-facebook-for-the-real-world))。[要約:Fortune 本文は直接未読]
- [事実] 2011 年 6 月時点で 920 万ユーザー、60,000 超の Meetup、毎分 30 件の RSVP([Entrepreneur](https://www.entrepreneur.com/article/219753))。

**根拠(効果の読み取り)**
- [推測] 「会場に集客を送る」ことで供給側(会場)に収益を求め、主催者・参加者は無料で始められた。のちに収益を主催者課金へ切り替え、持続可能性を得た(黒字化は 2009 年)。
- [事実] Meetup Everywhere は「他サイトの読者(オーディエンス)をリアルの小規模開催に分散して変換する」施策で、TechCrunch は 3 日間で約 100 件の追加開催が読者側で自発的に立ったと報じた([TechCrunch 2010-05-31](https://techcrunch.com/2010/05/31/techcrunch-meetups))。

**前提・失敗条件**
- [事実] 主催者課金への切り替え後に「活動が 95% 落ち、その後回復した」とする検索要約があったが、取得できた Wikipedia 本文には該当記述がなく、[不明/未確認]として扱う。
- [事実] 2019 年 10 月、主催者費用を下げる代わりに参加者に RSVP ごとの $2 を課す試験を 2 州で実施し、利用者の反発を招いた([Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup)、[WP Tavern](https://wptavern.com/meetup-com-introduces-rsvp-fees-for-members-wordpress-meetup-groups-unaffected-by-pricing-changes))。[報道]

### A-2-2. Eventbrite(2006〜2018)

**実例**
- [事実] 創業者 Kevin Hartz・Julia Hartz は「オンラインでチケットを売る手段がない」ことを機会と捉え、自己完結(セルフサービス)の発券プラットフォームを 2006 年に開始した([Stanford 講演書き起こし](https://stvp.stanford.edu/wp-content/uploads/sites/3/2024/09/democratizing-an-industry-transcript.pdf)、[SmartCompany](https://www.smartcompany.com.au/?p=111724))。[要約:検索結果の抜粋のみ]
- [事実] Julia Hartz は成長が「少しずつ、かつ有機的」で、初期は SEO とコンテンツマーケティングに注力し、Facebook・Twitter の台頭を転機として API 連携を急いだと述べている([SmartCompany](https://www.smartcompany.com.au/?p=111724))。[要約]
- [事実] 2018 年 S-1 の目論見書(424B4)では、2017 年に利用した主催者の **95% 超が自己登録**で、自己登録の主催者が純収益の **54%** を生んだ。特定カテゴリ・国の主催者を狙う営業チームで補完している。主催者獲得経路として、他の主催者からの口コミ、参加者としての利用経験、検索結果での露出、無料イベントで試せること、コンテンツライブラリを挙げる([SEC: Eventbrite 424B4, 2018-09](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm))。[一次]
- [事実] 同目論見書のリテンション率(前年の主催者群が生んだ総チケット手数料ベース)は 2016 年 93%、2017 年 97%([SEC 424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm))。[一次]
- [事実] 2023 年 3 月、Eventbrite は「発券の 30% 超が Eventbrite の発見(マーケットプレイス、アプリ、ニュースレター)経由で過去最高」「ほぼ 5 イベントに 1 つは売上の半分以上が発見経由」と公表した。2022 年は 2 億人超がイベントを検索し 9,000 万人超が購入([Eventbrite blog, 2023-03-28](https://www.eventbrite.com/blog/?p=395362))。[一次/ベンダー]

**根拠**
- [事実] 「ツールで主催者を獲得 → 参加者の利用が次の主催者を生む → 検索・発見で参加者が増える」という流れが S-1 の経路列挙と整合する。ただし取得できた S-1 の抜粋には「network effects」「flywheel」という語は出ていない([SEC 424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm))。一方、Motley Fool は Julia Hartz が SNS を通じた「フライホイール」に言及したと報じる([Motley Fool, 2018](https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx))。[要約]
- [事実] Motley Fool は、Eventbrite のサイト経由の売上と、各イベントの自前サイトを訪れた人の購入との寄与が S-1 からは不明確だと指摘している([Motley Fool](https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx))。[要約]

**前提・失敗条件**
- [事実] 2023 年に手数料を引き上げ(5 年ぶり)、2024 年 9 月に「公開は無料」へ戻した。2024 年 Q2 の決算説明で「価格モデルと主催者手数料が有料チケットの不振の主因」「主催者数とチケット数の減少につながった」と説明([Eventbrite FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)、[MarketBeat: Q2 2024 transcript](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock))。[一次/要約]

### A-2-3. Luma(2020〜2026)

**実例**
- [事実] 共同創業者 Victor Pontis は 2025-01-07 の文書で「Luma はほぼ完全に口コミで有機的に成長」「マーケティングや営業に時間を使わずに成長できた」「ゼロから数百万ユーザーまで 6 人のフルタイム(エンジニア 3、デザイナー 3)」と述べ、ライブデモ・営業・提携にも割く余力がないと書いている([Victor Pontis, How Luma Works](https://pont.is/p/how-luma-works))。[一次(創業者本人)]
- [事実] 創業は 2020 年初頭(COVID 期)。出発点は友人のヨガクラスを Zoom で運営するためのツール(ZmURL)で、初版はログイン不要。のちにホストのログイン、招待、課金を追加した([One Year Wiser のインタビュー要約。検索結果経由](https://www.readoneyearwiser.com/p/luma-and-victor-pontis))。[要約]
- [事実] 最初の外部資金は $3M(Crunchbase News)で、Maven Ventures ほかが出資([Crunchbase News](https://news.crunchbase.com/startups/exclusive-luma-raises-3m-to-enable-business-growth-on-top-of-zoom/)、[Maven Ventures](https://medium.com/maven-ventures/announcing-our-investment-in-luma-to-enable-creators-f45076ccbc81))。[要約]  後続ラウンドは情報が錯綜するため[不明]。
- [事実] Luma のヘルプには Tech Weeks(都市単位のテックイベント週間)の仕組みがある。中央チームが「チームカレンダー」を作り、各コミュニティ主催者が自分のイベントを提出・承認されて 1 つの公開スケジュールに載る([Luma Help: Tech Weeks](https://help.luma.com/p/tech-weeks))。[一次]
- [事実] Pontis は 2024 年に、世界各地で主催者のオンボードとイベントのキュレーションを担う「City Leads」の採用を告知した(LinkedIn。検索結果経由)([LinkedIn: Victor Pontis](https://www.linkedin.com/posts/vpontis_hi-were-seeing-a-lot-of-growth-with-luma-activity-7167977701897682945-Mkmg))。[要約]。なお 2025 年 1 月の文書では「営業・提携の余力はない」と書いており、運用の位置づけは[不明]。

**根拠**
- [推測] Luma は「コミュニティ運営者(テック・創業者・クリエイター)のホスト」を原子ネットワークとし、ホストの既存の招待リストでゲストを連れてくる。ゲストの一部が次のホストになる連鎖を、ツールの使い心地で促していると解釈できるが、ゲスト→ホストの転換率は公開されていない([不明])。

**前提・失敗条件**
- [推測] 6 人体制・営業なしという運営は、ホスト自身が集客できるコミュニティ(都市のテックコミュニティなど)を持っていることに依存する。集客力のない新規ホストを増やす局面では別の仕組みが必要になる可能性がある。

### A-2-4. Partiful(〜2026)

**実例**
- [事実] CEO Shreya Murthy は 2025-10 の発言で、成長はネットワーク効果と口コミで、広告ではない。現地チームがない DC・ボストン・シカゴでも有機的に伸び、現地拠点があるのは London のみ([TBPN Digest, 2025-10-31](https://www.tbpndigest.com/story/2025-10-31/shreya-murthy-on-partiful-building-the-social-layer-for-gen-z-events-and-the-future-of-offline-connection))。[報道/発言要約]
- [事実] 2026-03 の Marketing Brew では「バイラルを追うより一貫性を追う方が健全」「マーケティングチームは 3 人、予算は小さい」「Discover フィードは人が手作業でキュレーション」「現在は広告なし。有料機能を検討中」「TikTok の UGC 増幅やクリエイター提携を試験中」([Marketing Brew, 2026-03-09](https://www.marketingbrew.com/stories/2026/03/09/partiful-marketing-strategy-organic-mentions-the-pitt))。[報道]
- [事実] 招待はリンクで送れ、ゲストはアカウントやアプリなしで RSVP でき、ゲストは電話番号で SMS 更新を受ける([Sacra, 2025-10-22](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/))。[二次分析]
- [事実] Apple が 2025-02-05 に Apple Invites を発表(iCloud+ 契約者向け、ゲストは他端末からも RSVP 可)([Sacra](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/)経由)。Murthy は Apple の招待ツールは iPhone 限定で「磨かれているが楽しくない」ため定着していないと述べる([TBPN Digest](https://www.tbpndigest.com/story/2025-10-31/shreya-murthy-on-partiful-building-the-social-layer-for-gen-z-events-and-the-future-of-offline-connection))。

**根拠**
- [事実] Halloween は 1 ユーザーあたり 6 件以上のイベントが作られる最大ピーク(Murthy は「Super Bowl」と表現)([TBPN Digest](https://www.tbpndigest.com/story/2025-10-31/shreya-murthy-on-partiful-building-the-social-layer-for-gen-z-events-and-the-future-of-offline-connection))。
- [推測] 「アカウント不要のリンク RSVP」はゲスト側の摩擦を最小化し、各招待がそのまま製品の露出になる(各招待ページがブランドの広告面になる)。

**前提・失敗条件**
- [事実] ゲストが主催者に転換する比率・MAU・イベント数は、取得できた発言・記事では公開されていない([不明])。ある解説ブログは「2025 年 Q1 に MAU 50 万、前年比 400% 成長」と書くが、一次情報で確認できず信頼度が低いので採用しない。

### A-2-5. Posh(2019〜2026)

**実例**
- [事実] 2019 年に NYU の学生 Avante Price・Eli Taylor-Lemire が、自分たちのイベント運営のためにソフトを作り、プロモーターに搾取され、Eventbrite の機能にも限界を感じたことが起点([Fortune, 2026-03-19](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。[報道]
- [事実] 手数料は有料チケットの約 10% + 1 枚 99 セント。2024 年の売上は約 $1,000 万・チケット売上 $8,300 万超。2026 年 3 月時点で累計売上約 $4,000 万・GMV $3.5 億・販売 2,500 万枚、主催者約 5 万・ユーザー約 800 万([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。2025-12 の AfroTech は約 600 万ユーザー・主催者約 5 万・累計チケット売上 $3 億超([AfroTech, 2025-12-11](https://afrotech.com/posh-brought-in-10m-in-annualized-revenue-in-2024))。[報道]
- [事実] Price は「まず取引(トランザクション)を握らなければならない」と述べ、第1フェーズ(最初の 4 年)は「イベントの Shopify」として白ラベルページ、SMS の CRM、紹介報酬(キックバック)、紐づけたチケット層、即時払い出しを提供。第2フェーズで社会グラフに基づく「Netflix 風フィード」へ(消費者側の需要)([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。[報道]
- [事実] Posh は学生アンバサダーを募集し、学生団体・イベント主催者・Greek life・プロモーターのスカウトを職務とする(求人掲載。検索結果経由)([startup.jobs: Campus Growth Ambassador](https://startup.jobs/campus-growth-ambassador-posh-8113513))。[要約。ページは 403 で直接未読]

**根拠・前提**
- [推測] 「ツールで供給(プロモーター)を囲い込み、取引と顧客リストを握ったうえで、需要側のフィードを後から足す」という順序。第2フェーズの需要側の効果(フィード経由の予約比率など)は公開されていない([不明])。
- [事実] 競合 Luma が自社ヘルプで「Posh はナイトライフ・クラブ・プロモーター主導のイベント向け」と位置づけている([Luma Help: Luma vs Posh](https://help.luma.com/p/luma-vs-posh)。検索結果の抜粋のみ)。[ベンダー/要約]

### A-2-6. Dice と Fever(都市ごとのローンチ)

**Dice**
- [事実] 2014-09 にロンドンで開始。手数料なし・定価・アプリ内チケット。ローンチ時は DJ の Jen Long が約 100 公演を選び、同時販売公演は 250 を上限とする方針。2015 年には 5 都市に拡大、チケット販売は 1 四半期で 4 倍([Design Week, 2014-09](https://www.designweek.co.uk/issues/september-2014/new-gig-ticketing-service-dice-aims-to-be-loved-by-music-fans/)、[EU-Startups, 2016-08](https://www.eu-startups.com/2016/08/mobile-ticketing-platform-dice-raises-6-million-to-fuel-the-expansion-in-europe-and-north-america/))。[報道/要約]
- [事実] 売り切れ時のウェイトリスト(定価で購入可)、チケットはユーザー端末に紐づけ転売不可という設計([Wikipedia: Dice](https://en.wikipedia.org/wiki/Dice_(ticketing_company)))。2016 年に創業者は「現時点の焦点は成長で、収益化は主要都市で数百万ユーザーに達してから」と述べた([EU-Startups](https://www.eu-startups.com/2016/08/mobile-ticketing-platform-dice-raises-6-million-to-fuel-the-expansion-in-europe-and-north-america/))。[要約]
- [推測] 「人が選ぶ+上限を設ける」はキュレーションで需要側の信頼を先に作り、少数の主催者・会場に対して「売れる」体験を保証する、供給コントロール型の密度戦略に見える。

**Fever**
- [事実] Candlelight は Fever Original(自社企画)で、2019 年マドリード発。地元音楽家のネットワークでフォーマットを都市ごとに複製し、2023 年報道で 100 都市超。リージョナルマネージャーは「ブランド広告はせず、費用は体験とプラットフォームへの送客に使う」と述べた([Calgary Journal, 2023-03](https://calgaryjournal.ca/2023/03/14/candlelight-concerts-light-up-the-city/)、[CityHub](https://cityhub.com.au/?p=267882))。[報道/要約]
- [事実] Fever の求人は Meta・TikTok 等の有料獲得を運用し、目標値として ROAS 3:1 超、CPA を四半期で 10〜15% 削減といった数値を掲げる([Growth Talent の求人(アーカイブ)](https://www.growthtalent.org/jobs/growth-marketing/fever/growth-marketing-associate-fever))。これは**目標値**であり実績値ではない。[要約]
- [不明] Fever の都市別ローンチの具体的手順(最初の何件を自社で作るか等)、各都市の成否率は確認できなかった。

### A-2-7. 「ツールで来てネットワークで残る」型 vs 「マーケットプレイス先行」型の比較

- [事実] ツール型は、主催者側の自己登録・既存コミュニティを使って供給を先に作る。ネットワークは、ゲストの再利用・次の主催者転換・発見(検索/フィード)が後から乗る(Eventbrite の 2017 年 95% 自己登録、Luma の無営業、Partiful の口コミ)。
- [事実] マーケットプレイス/キュレーション型(Dice、Fever)は、需要側(アプリ利用者)に価値のある供給を人手で揃える。Fever は自社企画(Originals)で供給も握る。
- [事実] 人手運営の自社供給(Dinner Lab)は、イベントごとの調達・スタッフ調整が変動し、利益率が不安定で、2016 年に閉鎖した(後述 E)。
- [推測] ツール型は初期コストが低く再現しやすいが、ツール価値が小さいと「競合に取って代わられる」(Posh の創業者が取引を握ることを重視する理由)。マーケットプレイス型は都市ごとの運営コスト・調達コストが残る。

---

# (B) 主催者獲得の施策パターン集

## B-1. 手数料ゼロ・低手数料・無料公開

- **機能/施策の別**: [機能] 無料プランの料金設計・手数料の転嫁先(参加者負担/主催者負担)。[施策] 手数料改定のタイミングと告知。
- **実例**
  - [事実] Eventbrite は 2024-09-04 から、無料・有料を問わずイベントの公開を無料にした(参加者が払うチケット手数料は変更なし)。2023 年には無料イベント(25 人超)にも主催者手数料を導入していた([Eventbrite blog(AU)](https://www.eventbrite.com.au/blog/?p=430197))。[一次/要約]
  - [事実] Dice は創業時から手数料なし・定価([Design Week](https://www.designweek.co.uk/issues/september-2014/new-gig-ticketing-service-dice-aims-to-be-loved-by-music-fans/))。[報道]
  - [事実] Luma の自社比較ページは、無料プランの有料チケットに 5% の手数料(Stripe 手数料は別)、Luma Plus は 0% と記載(2025-06-10 時点)([Luma Help: Luma vs Eventbrite](https://help.luma.com/p/luma-vs-eventbrite))。[ベンダー]。別の検索結果では旧 3% の記載もあり、時期で異なる([要約])。
  - [事実] Posh は約 10% + 99 セント/枚([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。
- **根拠**
  - [事実] Eventbrite は 2024 年 Q2 に「価格モデルと主催者手数料が有料チケット不振の主因で、主催者数・チケット数が減った」と説明し、公開無料化後の Q3 に「安定化の兆し」を報告した([MarketBeat: Q2 2024](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock)、[MarketBeat: Q3 2024](https://www.marketbeat.com/earnings/reports/2024-11-7-eventbrite-inc-stock))。[一次/要約]
  - [事実] 公開無料化後の主催者数:2025 年 Q3 の有料主催者数は約 162,000(前年同期比 1% 未満の減少)、新規有料主催者獲得は約 4% 増、ただし純収益は前年比 8% 減(主催者手数料の廃止が一因)([Business Wire / SEC 8-K 要約:検索結果](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000114/ebq32025earningspressrelea.htm))。[一次/要約]
- **前提・失敗条件**
  - [事実] 手数料の引き上げは主催者離脱として即座に現れる(Eventbrite 2023→2024)。10-K は「離脱した主催者を取り戻せないおそれ」をリスクとして明記する([Eventbrite FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm))。[一次]
  - [事実] 無料化は収益を減らす(2025 年 Q3 純収益 -8%)。無料化と引き換えに広告収益(Eventbrite Ads は 2025 年 Q3 に前年比 +38%)等の別の収益源が必要([Business Wire / SEC 8-K 要約:検索結果](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000114/ebq32025earningspressrelea.htm))。[一次/要約]

## B-2. 無料イベントを無料にする(無料イベントを入口にする)

- **機能/施策の別**: [機能] 無料イベント向けの無料枠。[施策] 無料イベントの主催者を有料へ誘導する。
- **実例**: [事実] Eventbrite の S-1 は「主催者の多くが無料の集まりから始め、有料イベントに移る」ことを前提とし、無料で試せることを獲得経路に挙げる([SEC 424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm))。Luma は無料イベントは両者とも無料と記載([Luma Help: Luma vs Eventbrite](https://help.luma.com/p/luma-vs-eventbrite))。[一次/ベンダー]
- **根拠**: [事実] 無料→有料への転換率は公開されていない([不明])。Eventbrite は「プラットフォームは無料イベントで無料」と 10-K に記載([FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm))。
- **前提・失敗条件**: [事実] 2023 年に Eventbrite が無料イベント(25 人超)に手数料を導入した結果は上記 B-1 の通り。[推測] 無料枠の上限を下げると、入口であった層が離脱する。

## B-3. 参加者データ(メール・電話・CRM)の所有権と取引の掌握

- **機能/施策の別**: [機能] ゲストの CRM、CSV エクスポート、SMS、ゲスト一覧の権限分離。[施策] 「データはあなたのもの」を主催者向けの訴求にする。
- **実例**
  - [事実] Posh の第1フェーズは SMS の CRM を含む。Price は「まず取引を握る」と述べる([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。
  - [事実] Luma はゲスト CRM とセグメント、CSV 取り込み/エクスポートを持つ。Tech Weeks では中央チームが見られるゲストデータは、自分が管理するイベントのものに限られる([Luma Help: Luma vs Eventbrite](https://help.luma.com/p/luma-vs-eventbrite)、[Luma Help: Tech Weeks](https://help.luma.com/p/tech-weeks))。[一次/ベンダー]
  - [事実] Partiful は電話番号を使ったテキスト更新で、メールを集める代わりに SMS で連絡([Sacra](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/))。[二次分析]
- **根拠**: [推測] データを主催者に渡すことは、主催者がプラットフォーム外で再集客できることを意味し、迂回(disintermediation)のリスクにもなるが、プラットフォーム側が取引を握り続ける設計(決済・チケット・ゲストの連絡手段)と組み合わせて採用されている。効果の定量値は公開されていない([不明])。
- **前提・失敗条件**: [推測] 主催者が自前の連絡先リスト(LINE・メール)を持ち、決済も外に出せるなら、プラットフォームの価値は決済・手間削減だけに縮む。

## B-4. 競合からの移行ツール・キャンペーン

- **機能/施策の別**: [機能] CSV インポート/移行サポート。[施策] 「Eventbrite から移る」比較ページ・win-back。
- **実例**
  - [事実] Luma は高ボリュームの主催者向けに、過去イベントの CSV を送ればサポートが移行を支援し得ると案内し、通常は Eventbrite のゲスト CSV から招待する方式を勧める([Luma Help: Luma vs Eventbrite](https://help.luma.com/p/luma-vs-eventbrite))。[ベンダー]
  - [事実] Posh は「Eventbrite から Posh へ乗り換える理由」の記事を公開し、2026-06 のブログで「ナイトライフ・コメディ等の主催者の Posh への移行が加速している」と主張する([Posh University](https://posh.vip/university/post/switching-from-eventbrite-to-posh))。[ベンダー]
  - [事実] Eventbrite は 2024 年 Q2 に win-back キャンペーンで 14 万枚超の有料チケットをプラットフォームに戻したと説明([MarketBeat: Q2 2024](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock))。[要約]
- **根拠**: [事実] 実際に Eventbrite から Luma/Posh へ移った主催者数の独立した数値は見つからなかった([不明])。Luma は NBA・Stripe 等が Eventbrite から Luma へ移ったと自社発信するが、検証できない([Luma Help](https://help.luma.com/p/luma-vs-eventbrite)、[ベンダー])。
- **前提・失敗条件**: [推測] 移行コストが下がっても、競合の「発見(検索・アプリ経由の集客)」の価値が大きい主催者は移らない。Eventbrite の発見経由は 2023 年時点で発券の 30% 超であり、ここが乗り換えの抑止になる([Eventbrite blog](https://www.eventbrite.com/blog/?p=395362))。

## B-5. アンバサダー・パートナー・アフィリエイト(主催者の紹介報酬)

- **機能/施策の別**: [機能] 紹介リンク、報酬計算・支払い。[施策] 大学アンバサダー、プロモーターの勧誘。
- **実例**
  - [事実] Posh の Organizer Referral: 紹介した新規主催者のイベントで Posh が受け取る手数料の 10% を 12 か月間受け取れる。月初に PayPal 払い。紹介者は参加者・主催者でもよい。同社は紹介者が過去 1 年に合計「$25 万超」を得たと主張する([Posh University: Affiliate Program](https://university.posh.vip/university/post/posh-affiliate-program)、[Posh Support](https://support.posh.vip/en/articles/12611504-getting-started-with-organizer-referrals))。[ベンダー]
  - [事実] Posh の Kickback: 主催者が公開(購入者誰でも)または非公開(指名したプロモーター)のオファーを作り、チケット 1 枚/1 注文あたりの定額または比率を設定する。支払いは主催者の売上から出る。オファーを有効にすると、購入後に購入者へ招待が届くモードもある([Posh Support: Creating Kickback Offers](https://support.posh.vip/en/articles/10723700-creating-kickback-affiliate-offers-public-private)、[Posh University](https://posh.vip/university/post/a-guide-to-kickback-at-posh))。[一次(ヘルプ)/要約]
  - [事実] Posh と Partiful は学生アンバサダー/Campus Growth Manager の求人を出している。Partiful は「学生・学生団体・会場にイベント作成を促す」「launch week を実施」「Greek life・会場管理者との関係構築」を職務に挙げる(求人。集約サイト経由)([Resumegeni: Campus Growth Manager, Partiful](https://resumegeni.com/jobs/campus-growth-manager-us-spring-2026-partiful-f02c13c7d2))。[要約。一次の採用ページ未確認]
  - [事実] Luma は Tech Weeks を中心に、各都市のコミュニティ主催者を掲載するチームカレンダーを運営し、City Leads を募集した([Luma Help: Tech Weeks](https://help.luma.com/p/tech-weeks)、[LinkedIn](https://www.linkedin.com/posts/vpontis_hi-were-seeing-a-lot-of-growth-with-luma-activity-7167977701897682945-Mkmg))。[一次/要約]
- **根拠**: [事実] Posh のヘルプによれば、紹介の対象は「新たにイベントを開催する主催者」に限られ、既存主催者は対象外。紹介者が獲得する金額は Posh の手数料収益の一部で、獲得コストを成果報酬化している([Posh University: Affiliate Program](https://university.posh.vip/university/post/posh-affiliate-program))。[ベンダー]。紹介経由の主催者比率は公開されていない([不明])。
- **前提・失敗条件**: [推測] 報酬を主催者の売上から払うモデル(Kickback)は、主催者の粗利が薄い場合に回らない。紹介報酬は不正(自己紹介・架空主催者)対策が要る。ガイドは条件付き(「新規主催者のみ」「Stripe 連携必須」)で運用している([Posh Support](https://support.posh.vip/en/articles/12611504-getting-started-with-organizer-referrals))。

## B-6. 主催者向け教育コンテンツ(ガイド・テンプレート・ウェビナー)

- **機能/施策の別**: [機能] テンプレート、ポスター、QR、Insights。[施策] ヘルプ記事、University、ブログ。
- **実例**
  - [事実] Luma ヘルプ「How to Promote Your Event」は、過去ゲストを招待、カレンダー購読者へのニュースレター、共同ホスト・スピーカーに共有してもらう、埋め込み、ポスター/QR、早割・割引コード、残席表示、ゲスト紹介リンク(Insights で上位紹介者を確認)、UTM 付きリンク、終了後アンケートなどを推奨する。数値目標や転換率の記載はない([Luma Help: Promote your event](https://help.luma.com/p/promote-your-event))。[一次]
  - [事実] Partiful のブログは、毎回のイベントページを拡散資産として扱う、ゲストに友人を招待してもらう、次のイベントをすぐ公開する、Explore に応募する、Org Profile を使う、紹介元(ゲストの共有経由)を計測する、などを助言する([Partiful: Here's How to Actually Grow Your Audience](https://partiful.com/blog/post/heres-how-to-actually-grow-your-audience))。[一次]
  - [事実] Posh は「Posh University」で、プロモーター向けの手順(例: 有料プロモーターになる方法、Kickback、移行の理由)を公開している([Posh University](https://posh.vip/university/post/how-to-become-paid-event-promoter))。[一次/要約]
  - [事実] Eventbrite は 2023 年のブログで「プレミアムなマーケティングツールを使ったイベントは販売チケットが 63% 多い」と公表した([Eventbrite blog](https://www.eventbrite.com/blog/?p=395362))。[一次]。ただし因果は不明(ツールを使う主催者は元から積極的な可能性が高い)[推測]。
- **根拠**: [事実] 教育コンテンツそのものが主催者の獲得・活性化に寄与した定量効果は、いずれのサービスも公開していない([不明])。
- **前提・失敗条件**: [推測] 主催者側に集客スキルがない市場では、ガイドだけでは供給増にならず、プラットフォーム側の発見(検索・フィード)や代行が補完要素になる。

## B-7. 「参加者→主催者」転換導線

- **機能/施策の別**: [機能] 招待・確認ページ・参加後ページの「自分もイベントを作る」、ゲスト用の紹介リンク、アカウント不要の参加。[施策] 次回の開催をすぐ公開するよう主催者に促す。
- **実例**
  - [事実] Eventbrite S-1 は、主催者の獲得経路の 1 つに「参加者としての利用経験」を挙げる([SEC 424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm))。[一次]
  - [事実] Partiful は招待がリンクで広がり、受け取った人が自分の会を開くループとされる(Sacra・マーケティング解説)。ゲスト→ホストの転換率は公開されていない([Sacra](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/)、[不明])。[二次分析]
  - [事実] Luma の最初のクチコミ経路は「ホストが既存ネットワークを招待し、ゲストが製品を体験する」流れと説明されている(第三者の UI 分析)([ScreensDesign](https://screensdesign.com/showcase/luma-delightful-events))。[二次分析]
  - [事実] Posh は紹介プログラムを「参加者も含め誰でも」利用可能にしている(上記 B-5)。
- **根拠**: [事実] 転換率の公開値はなし([不明])。
- **前提・失敗条件**: [推測] 参加者が「自分でも主催できる」と思う動機(コミュニティを持つ/友人グループの幹事役がいる)がある層でしか効かない。主催の負担(決済・運営)が重いほど転換は低くなる。

## B-8. 会場・店舗・コミュニティ運営者への BD

- **機能/施策の別**: [機能] 会場向けページ、会場の送客課金、ネットワーク管理者向け機能(Meetup Pro)。[施策] 営業・アンバサダーによる会場開拓。
- **実例**
  - [事実] Meetup の初期は会場に課金して集客を送る方式だった(上記 A-2-1)。
  - [事実] Eventbrite は「特定カテゴリ・国の主催者を狙う営業チーム」で自己登録を補完する([SEC 424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm))。[一次]
  - [事実] Meetup Pro は組織内の複数グループを束ねるネットワーク管理者向けプランで、Python Software Foundation の Pro ネットワークでは各グループが個別支払いをせず財団に四半期請求が来る([Meetup Help](https://help.meetup.com/hc/en-us/sections/39489682552461--Resources-for-New-and-Experienced-Pro-Organizers)、[PSF Community](https://comunidad.es.python.org/t/como-entrar-en-la-red-meetup-com-pro-de-la-psf/1237))。[要約]
  - [事実] Partiful の Campus Growth Manager は会場管理者・Greek life との関係構築を職務とする(上記 B-5)。
- **根拠**: [事実] BD の成果(会場数、会場経由の主催者数)は公開されていない([不明])。
- **前提・失敗条件**: [推測] BD は人手で、都市ごとの再現コストが高い。会場・店舗側にとってのリターン(送客)が見えないと続かない。

## B-9. API・連携(Zoom、Slack、SNS、カレンダー)

- **機能/施策の別**: [機能] 他サービス連携・埋め込み・Zapier。[施策] 連携先の既存ユーザーを獲得経路にする。
- **実例**
  - [事実] Eventbrite は Facebook・Twitter の台頭に合わせ API 連携を急ぎ、SNS で行き先や自分のイベントを共有できる機能を成長の転機とした([SmartCompany](https://www.smartcompany.com.au/?p=111724))。[要約]
  - [事実] Luma は Zoom 上のビジネス向けに $3M を調達した(Crunchbase News の見出し)。初期は Zoom 向けの利用が中心だった([Crunchbase News](https://news.crunchbase.com/startups/exclusive-luma-raises-3m-to-enable-business-growth-on-top-of-zoom/))。[要約]
  - [事実] Luma は Zapier・Slack 連携(自社比較表)、Web サイトへの埋め込みを提供([Luma Help: Luma vs Eventbrite](https://help.luma.com/p/luma-vs-eventbrite)、[Luma Help: Promote](https://help.luma.com/p/promote-your-event))。[ベンダー/一次]
  - [事実] Meetup Everywhere はウィジェットとして他サイトに埋め込める([Fortune](https://fortune.com/2010/08/17/meetup-wants-to-be-facebook-for-the-real-world))。[要約]
  - [事実] Eventbrite は Google・TikTok に消費者到達を依存し、同時に競合でもあると 10-K に記載([FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm))。[一次]
- **根拠**: [事実] Mailchimp・Google Calendar・Instagram 連携が主催者獲得にどれだけ寄与したかの定量値は確認できなかった([不明])。
- **前提・失敗条件**: [事実] 連携先のプラットフォームが競合化する(Google、Apple、WhatsApp)リスクがある(Apple Invites、WhatsApp Events は [Sacra](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/) の分析)。[二次分析]

## B-10. 主催者向けアナリティクス・紹介元の可視化

- **機能/施策の別**: [機能] Insights、UTM、上位紹介者の表示、Event Insights。[施策] 上位紹介者への感謝・早期アクセス付与の推奨。
- **実例**: [事実] Luma は登録推移・流入元・ゲスト紹介リンク経由(誰が誰を招いたか)を Insights で見られ、主催者に上位紹介者への感謝や早期アクセスを勧める([Luma Help: Promote](https://help.luma.com/p/promote-your-event)、[Luma Help: Event Insights](https://help.luma.com/p/event-insights))。Posh は Instagram/Facebook/メールに付けるトラッキングリンクでチャネル別のクリック・転換を計測できる([Posh Support: Kickback](https://support.posh.vip/en/articles/10723700-creating-kickback-affiliate-offers-public-private))。[一次/要約]
- **根拠**: [事実] 効果の定量値は公開されていない([不明])。
- **前提・失敗条件**: [推測] 数字が見えることは主催者の「次も開く」動機になるが、データが少ない小規模イベントでは意味が薄い。

## B-11. 共同主催(co-host)による主催者の連鎖

- **機能/施策の別**: [機能] 共同ホスト/マネージャー権限、カレンダーの共有管理。[施策] 共同ホスト・スピーカーに共有を頼む。
- **実例**: [事実] Luma は共同ホスト・スピーカーに自分のオーディエンスへ共有してもらうことを推奨([Luma Help: Promote](https://help.luma.com/p/promote-your-event))。Tech Weeks では主催者を「ホスト/マネージャー」として追加できる([Luma Help: Tech Weeks](https://help.luma.com/p/tech-weeks))。Posh は「パフォーマンス階層」に達した紹介者に共同ホスト機会を与える([Posh University: Affiliate Program](https://university.posh.vip/university/post/posh-affiliate-program))。[一次/ベンダー]
- **根拠**: [事実] 共同ホストを経由して新規主催者が増える割合は、公開されていない([不明])。
- **前提・失敗条件**: [推測] 共同ホストの権限設計(誰が決済・ゲスト名簿を持つか)が曖昧だと、主催者間の摩擦や、データが分散する問題が出る。Luma は Tech Weeks で「掲載のみ」「共有管理」「中央管理」の 3 形態を分けている([Luma Help: Tech Weeks](https://help.luma.com/p/tech-weeks))。

---

# (C) 参加者獲得の施策パターン集

## C-1. SEO(都市×カテゴリのページ、構造化データ、AI 検索)

- **機能/施策の別**: [機能] イベントごとの公開ページ、都市×カテゴリの一覧ページ、Event 構造化データ、サイトマップ。[施策] 新しいカテゴリ・都市ページの継続拡大。
- **実例**
  - [事実] Eventbrite は 2015 年から Event 構造化データ(schema.org)の導入を始め、公開済みの全イベントにマークアップが付く。Google が 2017 年 5 月にモバイルのイベント検索体験を始めた後、導入の翌月に「Google 検索から掲載ページへのトラフィックの典型的な前年比成長が約 100% 増(上乗せ)」と報告。ただし同時期に複数の SEO 施策があり、原因の切り分けは難しいと注記([Google Search Central 事例, 2018-05-08](https://developers.google.com/search/case-studies/eventbrite-case-study))。[一次(Google 公式)]
  - [事実] Eventbrite のカテゴリ×都市の一覧は `/d/<都市>/<カテゴリ>--events/` の URL 構造を持つ(スクレイパー文書より)。トラフィックの大部分がこれらからか、は確認できない([Apify の Eventbrite スクレイパー説明](https://apify.com/eiv/eventbrite-scraper))。[要約]
  - [事実] Google の Event 構造化データ文書は、イベントを検索結果と Maps に表示するための手順(マークアップ、リッチリザルトテスト、サイトマップ)を示す([Google: Event structured data](https://developers.google.com/search/docs/appearance/structured-data/event))。[一次/要約]
  - [事実] Eventbrite の FY2025 10-K は、Web トラフィックの大きな割合が無料の検索結果(主に Google)から来ること、アルゴリズム変更や AI 搭載の発見インターフェースが「トラフィックの流れとコンバージョンに影響し得る」ことをリスクとして挙げる([FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm))。[一次/要約]
- **根拠**: [事実] 有機検索流入の「割合」は Eventbrite の開示にはない。Semrush の英国版スナップショット(2025-11)では直接アクセスが約 45%、google.com 経由が約 19% といったデータがあるが、国別・参照元別の推計であり、有機検索比率そのものではない([Semrush: eventbrite.co.uk](https://cw.semrush.com/website/eventbrite.co.uk/overview))。[ベンダー/要約]
- **前提・失敗条件**: [推測] 各ページの内容が薄い(同一テンプレートで中身が空)と検索評価が得られない。公開イベントの量(供給密度)が SEO の前提で、小規模な供給では成立しにくい。Google のイベントリッチリザルトの表示仕様は変更されうるため、現行仕様は都度確認が必要(古い Search Engine Land の記事にはイベントのリッチスニペット削除の報道があるが、日付が未確認)([Search Engine Land](https://searchengineland.com/google-rich-results-for-events-removed-from-search-snippets-43364)、[不明])。

## C-2. メール/プッシュのダイジェストとパーソナライズ

- **機能/施策の別**: [機能] 推薦、ニュースレター、アプリ通知。[施策] 手作業のキュレーション。
- **実例**
  - [事実] Eventbrite は「発見(マーケットプレイス・アプリ・ニュースレター)経由が発券の 30% 超」と公表。パーソナライズされたおすすめでイベントページへのエンゲージメントが 9 倍と述べる(2023 年 3 月)([Eventbrite blog](https://www.eventbrite.com/blog/?p=395362))。[一次/ベンダー]
  - [事実] Eventbrite は Q2 2023 の決算説明で、機械学習による推薦が「Things to Do」「For You」の閲覧数を 64% 押し上げたと述べた([MarketBeat: Q2 2023](https://www.marketbeat.com/earnings/reports/2023-8-3-eventbrite-inc-stock))。[要約]
  - [事実] Partiful の Discover フィードは担当者が手作業でキュレーション([Marketing Brew](https://www.marketingbrew.com/stories/2026/03/09/partiful-marketing-strategy-organic-mentions-the-pitt))。Posh は 2026 年にソーシャルグラフに基づくフィード(Netflix 風)を主軸にし始めた([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。[報道]
- **根拠**: [事実] メールの開封率・クリック率・購入転換率の公開値は確認できなかった([不明])。
- **前提・失敗条件**: [推測] 推薦の精度はユーザーごとの履歴・位置・ソーシャルグラフに依存し、供給量が少ない市場では推薦できる件数がそもそも足りない。

## C-3. カレンダー購読(ICS / Google / Apple)

- **機能/施策の別**: [機能] 主催者カレンダーのフォロー、カレンダー購読、イベントの「カレンダーに追加」。[施策] 購読者へのニュースレター。
- **実例**: [事実] Luma は主催者の「カレンダー」をフォローでき、購読者へニュースレターを送れる。有料のカレンダーメンバーシップもある([Luma Help: Promote](https://help.luma.com/p/promote-your-event)、[Luma Help: Luma vs Eventbrite](https://help.luma.com/p/luma-vs-eventbrite))。Luma の招待に「カレンダーに追加」リンクを付ける方法を解説する第三者記事もある([CalendarLink](https://calendarlink.com/blog/how-to-improve-your-luma-event-invites-with-add-to-calendar-links))。[一次/ベンダー/二次]
- **根拠**: [事実] ICS/Google/Apple カレンダー購読が参加率やリピートに与える効果の数値は確認できなかった([不明])。
- **前提・失敗条件**: [推測] 購読の価値は定期開催(シリーズ)の主催者に偏る。単発イベントでは効果が小さい。

## C-4. ソーシャルログイン、連絡先、友達グラフ

- **機能/施策の別**: [機能] 連絡先の取り込み、友達の参加状況の表示、SNS 共有。[施策] SNS 連携の初期優先。
- **実例**: [事実] Eventbrite は Facebook・Twitter の台頭期に API 連携を優先([SmartCompany](https://www.smartcompany.com.au/?p=111724))。Posh は「友達がどこへ行くか」を含むフィードを導入([AfroTech](https://afrotech.com/posh-brought-in-10m-in-annualized-revenue-in-2024))。Partiful は参加者の一覧(誰が来るか)を招待ページに表示([Sacra](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/))。[要約/二次分析]
- **根拠**: [事実] 効果の数値は未公開([不明])。Posh の創業者は「解決済みの問題はグループチャット。難しいのは、会いたい 10〜20 人との調整」と述べる([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。[報道]
- **前提・失敗条件**: [推測] 連絡先・友達グラフの取り込みは、個人情報の取り扱い(同意・各国の法令)を伴う。

## C-5. 友達招待・同行者・グループ購入・紹介報酬

- **機能/施策の別**: [機能] 個人別の共有リンク、紹介者の追跡、チケットの紐づけ、Kickback。[施策] 紹介報酬、早期アクセス。
- **実例**
  - [事実] Luma は登録者ごとに個人の共有リンクを発行し、Insights で上位紹介者を確認、主催者に感謝や早期アクセスを勧める([Luma Help: Promote](https://help.luma.com/p/promote-your-event))。[一次]
  - [事実] Posh の Kickback は、購入者へ紹介報酬(主催者の売上から支払い)を出せる。主催者が全参加者に Kickback を有効にすると、購入後に招待が届く([Posh Support](https://support.posh.vip/en/articles/10723700-creating-kickback-affiliate-offers-public-private))。[一次/要約]
  - [事実] Partiful は友人の招待をホストに勧める([Partiful blog](https://partiful.com/blog/post/heres-how-to-actually-grow-your-audience))。[一次]
- **根拠**: [事実] k-factor・招待ループの定量値は、Partiful・Evite・Luma のいずれも公開されていない(検索で確認できず)。一般論として K = 招待数 × 転換率で、ある待機リスト用ツールのベンダーは「健全な待機リストは K=0.3〜0.7」と書くが、イベント領域の値ではない([LaunchList ブログ](https://blog.getlaunchlist.com/blog/viral-coefficient-k-factor-guide))。[ベンダー/不明]
- **前提・失敗条件**: [推測] イベントでは「招待を送るのは主催者(一部のユーザー)」であり、全ユーザーの平均 K は低い。招待ループは K<1 でも、既存ベースを数倍にする効果はある(算数的な話)[推測]。

## C-6. OGP / シェアカード / QR / 短縮 URL

- **機能/施策の別**: [機能] 共有カード(カバー画像)、ポスター、QR コード、埋め込み。[施策] 画像・説明文のクオリティを主催者に指導。
- **実例**: [事実] Luma は生成されるイベントポスター(特に Instagram ストーリー向け)と QR コードで対面登録を促し、Discover にも表示されるカバー画像を整えるよう勧める([Luma Help: Promote](https://help.luma.com/p/promote-your-event))。Partiful は招待を SMS/Instagram DM/WhatsApp などで送れる([Sacra](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/))。[一次/二次]
- **根拠**: [事実] OGP/短縮 URL の効果の定量値は確認できなかった([不明])。
- **前提・失敗条件**: [推測] 共有の起点となる SNS(日本では LINE・X・Instagram)の仕様変更に依存する。

## C-7. リマインド・当日導線

- **機能/施策の別**: [機能] SMS/プッシュのリマインド、チケットのアプリ内表示、イベントチャット。[施策] 開催前のホスト告知。
- **実例**: [事実] Partiful は SMS で更新を送る([Sacra](https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/))。Luma はゲスト向けチャットを持つ([Pontis](https://pont.is/p/how-luma-works))。Dice はチケットをアプリ内に保存し入場時にスキャン([Design Week](https://www.designweek.co.uk/issues/september-2014/new-gig-ticketing-service-dice-aims-to-be-loved-by-music-fans/))。Eventbrite は 2025 年 Q3 に「モバイルでのチケットアクセスの改善」を重点施策に挙げた([Q3 2025 書き起こし要約:検索結果](https://statementdog.com/analysis/EB/earnings_calls/303037))。[一次/二次/要約]
- **根拠**: [事実] リマインドによる出席率の改善値は確認できなかった([不明])。

## C-8. ウェイトリスト・希少性

- **機能/施策の別**: [機能] ウェイトリスト、残席表示、早割。[施策] 販売数の上限設計。
- **実例**: [事実] Dice は売り切れ時のウェイトリスト(定価)を提供し、同時販売公演数に上限を設けた([Wikipedia: Dice](https://en.wikipedia.org/wiki/Dice_(ticketing_company))、[Design Week](https://www.designweek.co.uk/issues/september-2014/new-gig-ticketing-service-dice-aims-to-be-loved-by-music-fans/))。Luma は残席表示と早割価格を勧める([Luma Help: Promote](https://help.luma.com/p/promote-your-event))。[一次/二次]
- **根拠**: [事実] 希少性施策の転換効果の数値は確認できなかった([不明])。
- **前提・失敗条件**: [推測] 需要が供給を上回る状況でのみ意味がある。供給過多の市場で残席を煽ると信頼を損なう。

## C-9. リピート施策(前回参加者への優先案内)

- **機能/施策の別**: [機能] 過去ゲストの再招待、カレンダー購読、紹介元の追跡。[施策] 定期開催・次回をすぐ公開。
- **実例**: [事実] Luma は過去イベントの参加者を新しいイベントに招待(すでに内容を知っており戻りやすい)、定期的に開催すると次の集客が楽になる、と案内([Luma Help: Promote](https://help.luma.com/p/promote-your-event))。Partiful は「次のイベントをすぐ公開する」ことを主催者に勧める([Partiful blog](https://partiful.com/blog/post/heres-how-to-actually-grow-your-audience))。[一次]
- **根拠**: [事実] Eventbrite の「頻繁に開催する主催者」が売上の大半を占める。2022 年の発表では 60%、2025 年 Q3 には「有料主催者の 13% が有料チケットの約 60%・ゲスト手数料の約半分」(第三者の書き起こし要約。公式の書き起こしとの照合は未実施)([Eventbrite Q4 2022(要約)](https://www.roic.ai/quote/EB/transcripts/2022-year/4-quarter)、[Q3 2025(要約)](https://statementdog.com/analysis/EB/earnings_calls/303037))。[要約]
- **前提・失敗条件**: [推測] 売上の集中は、リピート主催者を失ったときの打撃が大きいことも意味する。

## C-10. 有料広告・アフィリエイト

- **機能/施策の別**: [機能] プラットフォーム内広告(Eventbrite Ads)、アフィリエイト追跡。[施策] Meta/TikTok 運用。
- **実例**: [事実] Eventbrite Ads の収益は 2025 年 Q3 に前年比 +38%([SEC 8-K 要約:検索結果](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000114/ebq32025earningspressrelea.htm))。2023 年の発表では Ads が「14 倍の露出」と述べる([Eventbrite blog](https://www.eventbrite.com/blog/?p=395362))。Fever の求人は Meta/TikTok 等の有料獲得を運用し ROAS 3:1 超を目標とする(目標値)([Growth Talent](https://www.growthtalent.org/jobs/growth-marketing/fever/growth-marketing-associate-fever))。Partiful は TikTok の UGC 増幅などを試験中([Marketing Brew](https://www.marketingbrew.com/stories/2026/03/09/partiful-marketing-strategy-organic-mentions-the-pitt))。[一次/要約/報道]
- **根拠**: [事実] 実際の CAC・ROAS の実績値は公開されていない([不明])。
- **前提・失敗条件**: [推測] 都市・ジャンル単位で供給が薄いと、広告で需要を作っても予約できる枠が足りない。

## C-11. PR・メディア・文化的な話題

- **機能/施策の別**: [施策] 取材、テレビ番組・ドラマでの自然な言及、ブランド連携(試写会)。
- **実例**: [事実] HBO のドラマ「The Pitt」の台詞で Partiful が言及され、有料掲載かと利用者に聞かれたが同社は仕込んでいない。ブランド連携(Lionsgate の試写会)も実施([Marketing Brew](https://www.marketingbrew.com/stories/2026/03/09/partiful-marketing-strategy-organic-mentions-the-pitt))。Meetup は 2004 年の Dean 陣営での利用と、2010 年の TechCrunch 5 周年で認知を得た([Wikipedia](https://en.wikipedia.org/wiki/Meetup)、[TechCrunch](https://techcrunch.com/2010/05/31/techcrunch-meetups))。[報道]
- **根拠**: [事実] 定量効果は未公開([不明])。Murthy は「私たちの仕事は文化的な瞬間を増幅することで、作ることではない」と述べる([Marketing Brew](https://www.marketingbrew.com/stories/2026/03/09/partiful-marketing-strategy-organic-mentions-the-pitt))。
- **前提・失敗条件**: [推測] 再現性が低い。プロダクトに「話題になる理由(使うと楽しい)」があって初めて機能する。

## C-12. イベント後のレビュー・アルバム・振り返りシェア

- **機能/施策の別**: [機能] 写真共有、フィードバックアンケート、年間振り返り。[施策] 終了後フォローアップ。
- **実例**: [事実] Luma は終了後のフィードバックアンケートとフォローアップを勧める([Luma Help: Promote](https://help.luma.com/p/promote-your-event))。Partiful は過去イベントの写真を Org Profile に掲載することを勧める([Partiful blog](https://partiful.com/blog/post/heres-how-to-actually-grow-your-audience))。[一次]
- **根拠**: [事実] 「Wrapped 的な振り返りシェア」を実装した例は、今回の調査では確認できなかった([不明])。
- **前提・失敗条件**: [推測] 写真・レビューは検索(SEO)と信頼形成の材料になるが、プライバシーへの配慮が必要。

---

# (D) 数値・ベンチマーク

出典と時点を付す。計算値は [推測(計算)] と明示する。

## D-1. 主催者(供給)側

| 指標 | 値 | 時点 | 出典 |
|---|---|---|---|
| Eventbrite 主催者の自己登録率 | 95% 超(自己登録主催者が純収益の 54%) | 2017 年 | [SEC 424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) [一次] |
| Eventbrite 主催者リテンション率(前年の主催者群の手数料ベース) | 93%(2016)/97%(2017) | 2016-2017 | 同上 [一次] |
| Eventbrite の年間イベント数・発券数 | 約 460 万件・2.58 億枚・GTV $30 億超 | 2025 年 | [FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm) [一次] |
| 同(2022 年) | 500 万件超・2.84 億枚 | 2022 年 | [Eventbrite blog](https://www.eventbrite.com/blog/?p=395362) [一次] |
| 1 イベントあたり平均チケット数 | 約 56 枚(2.58 億 ÷ 460 万 ≒ 56.1。2022 年は 2.84 億 ÷ 500 万 ≒ 56.8)。無料イベントを含む | 2022/2025 | [推測(計算)] |
| Eventbrite 有料主催者数 | 約 162,000(前年同期比 1% 未満減) | 2025 年 Q3 | [SEC 8-K 要約](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000114/ebq32025earningspressrelea.htm) [一次/要約] |
| 売上の集中 | 頻繁に開催する主催者が 2022 年の販売の 60%(2021 年は月 1 回以上開催の主催者が有料チケットの約 2/3) | 2021-2022 | [Q4 2022 要約](https://www.roic.ai/quote/EB/transcripts/2022-year/4-quarter)、[Q1 2021 要約](https://statementdog.com/analysis/EB/earnings_calls/29336) [要約] |
| 同(2025 年 Q3) | 有料主催者の 13% が有料チケットの約 60%・ゲスト手数料の約半分 | 2025 年 Q3 | [Q3 2025 要約](https://statementdog.com/analysis/EB/earnings_calls/303037) [要約。公式の書き起こしで未確認] |
| Posh 主催者数・ユーザー数 | 約 5 万・約 800 万(2025-12 の報道は約 600 万) | 2026-03 | [Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/)、[AfroTech](https://afrotech.com/posh-brought-in-10m-in-annualized-revenue-in-2024) [報道] |
| ユーザー/主催者 | 約 160(800 万 ÷ 5 万) | 2026-03 | [推測(計算)] |
| Posh 手数料(取り分) | 約 10% + $0.99/枚。2024 年の売上 ÷ チケット売上 ≒ 12%($1,000 万 ÷ $8,300 万超) | 2024 | [Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/) [報道]、割合は [推測(計算)] |
| Meetup の Meetup あたり平均会員数 | 約 150(920 万 ÷ 60,000 超) | 2011-06 | [Entrepreneur](https://www.entrepreneur.com/article/219753)、計算は [推測] |
| Luma 体制 | フルタイム 6 人で「数百万ユーザー」 | 2025-01 | [Pontis](https://pont.is/p/how-luma-works) [一次] |
| 「ゲスト→ホスト」転換率 | 不明(Partiful・Luma・Eventbrite とも未公開) | — | — |
| リピート主催率(定義が揃ったもの) | 不明。Eventbrite のリテンション率(上記)が近いが、定義は「手数料ベースのコホート」 | — | — |

## D-2. 参加者(需要)側

| 指標 | 値 | 時点 | 出典 |
|---|---|---|---|
| Eventbrite の発見経由の発券比率 | 30% 超(過去最高)。ほぼ 5 イベントに 1 つは売上の半分超 | 2023-03(2022 年実績) | [Eventbrite blog](https://www.eventbrite.com/blog/?p=395362) [一次/ベンダー] |
| 同(その後の比率) | 不明(最新の 10-K 抜粋には掲載なし) | 2025 年 | [FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm) |
| 主催者以外が購入した比率 | 有料チケットの 2/3(2 年前 45%、前年 50%)。Eventbrite 自身が購入者を新規取得した経路ではなく、主催者の招待外の購入者を指すとみられる([不明/要確認]) | 2021 年 Q1 | [Q1 2021 要約](https://statementdog.com/analysis/EB/earnings_calls/29336) [要約] |
| Eventbrite の検索ユーザー | 2 億人超が検索、9,000 万人超が購入 | 2022 年 | [Eventbrite blog](https://www.eventbrite.com/blog/?p=395362) [一次] |
| 推薦のエンゲージメント | イベントページの 9 倍 | 2022 年 | 同 [一次/ベンダー] |
| Google 構造化データ導入 | 検索経由トラフィックの典型的な前年比成長が約 100% 上乗せ(因果は切り分け不能) | 2017〜2018 | [Google 事例](https://developers.google.com/search/case-studies/eventbrite-case-study) [一次] |
| Meetup RSVP | 毎分 30 件 | 2011-06 | [Entrepreneur](https://www.entrepreneur.com/article/219753) |
| Partiful の Halloween | 1 ユーザーあたり 6 件超のイベント | 2025 | [TBPN Digest](https://www.tbpndigest.com/story/2025-10-31/shreya-murthy-on-partiful-building-the-social-layer-for-gen-z-events-and-the-future-of-offline-connection) |
| 紹介経由の比率・k-factor | 不明(公開なし) | — | — |
| 無料→有料の転換 | 不明(公開なし) | — | — |
| Meetup の新規登録 | 2025 年に前年比 20% 超の増加(同社発表) | 2025-09 | [Business Wire / 要約](https://www.businesswire.com/news/home/20250930132044/it) [ベンダー/要約] |

## D-3. マーケットプレイス経由 vs 主催者の自己集客

- [事実] Eventbrite は発見経由が 30% 超と開示したが、残り約 70% の内訳(主催者自身の SNS・メール・直リンク等)は開示がない([Eventbrite blog](https://www.eventbrite.com/blog/?p=395362))。
- [推測] 大半は主催者の自己集客であり、競合(TicketSignup 等)は 2022 年にそう主張している(競合視点)([TicketSignup](https://info.ticketsignup.io/founders-corner-eventbrites-misguided-marketplace-strategy))。[ベンダー]
- [事実] Luma は「営業・マーケティングなし」で、発見機能(Discover)は参考程度の言及で、主催者の既存ネットワークが主要経路([Luma Help: Promote](https://help.luma.com/p/promote-your-event))。

## D-4. 価格・手数料の比較(時点つき)

| サービス | 手数料 | 時点 | 出典 |
|---|---|---|---|
| Eventbrite | 公開は無料、参加者がチケット手数料を負担 | 2024-09 以降 | [Eventbrite blog](https://www.eventbrite.com.au/blog/?p=430197)、[FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm) |
| Luma | 無料プラン: 5%(Stripe 手数料は別)、Luma Plus: 0% | 2025-06-10 | [Luma Help](https://help.luma.com/p/luma-vs-eventbrite) [ベンダー] |
| Posh | 約 10% + $0.99 | 2026-03 | [Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/) |
| Meetup(主催者サブスク) | Standard 約 $29.99/月〜、Pro は 1 グループあたり $55/月〜(2024 年 6 月に改定)。2016 年は $9.99〜$14.99/月 | 2024/2016 | [Meetup Help(要約)](https://help.meetup.com/hc/en-us/categories/39489490734605-Subscriptions-and-features-Overview)、[Wayback: 2016 pricing](https://web-wp.archive.org/web/20160430012931/http://www.meetup.com/pricing/) [要約] |

---

# (E) 失敗パターン

## E-1. 供給過多・需要不足(あるいは逆)

- **実例**
  - [事実] Hopin: 2021 年 8 月に評価額 $78 億、従業員は 2019 年初頭の 10 人未満から 2021 年末に 800 人超へ。2022 年に 2 回のレイオフ(2 月に 12%、後に 29%)で従業員は 1,100 人→505 人。「explore」タブのイベント掲載は 2020 年 11 月の 15,000 件超から 2022 年 4 月に 500 件未満(FT 報道を TechCrunch が引用)。2023 年 8 月にイベント事業を RingCentral へ売却($1,500 万+最大 $3,500 万の業績連動)。2024 年 2 月に英国事業を縮小([Sifted](https://sifted.eu/articles/hopin-sells-off-its-original-events-platform)、[TechCrunch](https://techcrunch.com/2023/08/02/hopin-ringcentral)、[UKTN](https://www.uktech.news/events/hopin-winds-down-uk-business-us-headquarters-20240227))。[報道/要約]
  - [事実] Dinner Lab: 31 都市で運営、約 $910 万を調達(2015 年 8 月に $700 万)。イベントごとの調達と、人員を増減させにくい運営(後に契約形態へ移行)で、利益を出せないと判断し 2016-04-14 に閉鎖を発表([TechCrunch](https://techcrunch.com/?p=1307899))。[報道]。会員制の有料枠をなくして席を埋めようとした等の補足は別報道([Technical.ly](https://technical.ly/startups/dinner-lab-shutting)。要約)。
  - [事実] Eventbrite の主催者の増減は手数料と連動(B-1)。
- **根拠(原因の読み取り)**: [推測] Hopin はパンデミック需要が消え、供給側(主催者)の利用が一斉に減少した。Dinner Lab は各回の運営コストが重く、規模の経済が働かなかった。
- **前提・失敗条件**: [推測] 需要が一過性(パンデミック)だったか、オペレーションが固定費化していたか、のいずれかに注意。

## E-2. 主催者による迂回(disintermediation)

- **実例**: [事実] Eventbrite の 10-K・S-1 は、主催者が別のソリューションに移る・リスクを明記し、離脱した主催者を取り戻せないおそれを記載([SEC 424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm)、[FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm))。Posh の Price は「取引を最初に握る」ことを強調する([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。
- **根拠**: [事実] Meetup の利用規約は、主催者の正当性は保証できず、支払い紛争は参加者と主催者の間の問題と明記([Wayback: Meetup terms](https://web-wp.archive.org/web/20141218003207/http://www.meetup.com/terms/))。[要約]
- **前提・失敗条件**: [推測] 決済を握らないモデル(Meetup の会費は主催者が外で集める)は迂回を防げない。取引を握るモデルでは、手数料が主催者の許容を超えると外に出される。

## E-3. スパム・低品質イベント

- [不明] 今回の調査では、スパムイベントの発生率や対策(審査・通報)に関する一次情報を確認できなかった。Meetup の規約が「主催者の正当性を保証できない」と書く点が、関連する唯一の記述([Wayback: Meetup terms](https://web-wp.archive.org/web/20141218003207/http://www.meetup.com/terms/))。

## E-4. 手数料・価格への反発

- **実例**
  - [事実] Eventbrite: 2023 年の手数料引き上げ後に主催者離脱 → 2024 年 9 月の公開無料化(B-1)。
  - [事実] Meetup: 2019 年の RSVP 手数料(参加者 $2)試験で反発([WP Tavern](https://wptavern.com/meetup-com-introduces-rsvp-fees-for-members-wordpress-meetup-groups-unaffected-by-pricing-changes))。2024 年 6 月の主催者価格改定(Bending Spoons 傘下)後は、年約 $300 になったと不満を述べる口コミ・グループ閉鎖の事例が出ている(NJHN は 2024-12 に閉鎖、会員の実質活動は十数人)([NJHN](https://njhn.org/?p=4361)、[Trustpilot](https://ca.trustpilot.com/review/meetup.com?page=10))。[要約。個別事例]
  - [事実] Meetup は 2026-01-15 から 3 年以上利用がないアカウントを停止し、グループの会員数が一時的に減る可能性があると案内([Meetup Help](https://help.meetup.com/hc/en-us/articles/22390174695949-Making-Connections-with-Meetup))。[要約]
- **根拠**: [事実] 2024〜2025 年の Meetup の会員数・グループ数の全体的な減少を示す公式データは見つからなかった([不明])。
- **前提・失敗条件**: [推測] 主催者が「無料の代替(LINE グループ、Luma、Partiful)」に簡単に移れる場合、料金改定の影響が大きい。

## E-5. ネットワーク効果が地域・ジャンルで閉じる/ローカル密度不足

- **実例**: [事実] Partiful は現地チームのない DC・ボストン・シカゴでも有機的に伸びる一方、London には現地拠点を置いた([TBPN Digest](https://www.tbpndigest.com/story/2025-10-31/shreya-murthy-on-partiful-building-the-social-layer-for-gen-z-events-and-the-future-of-offline-connection))。Dice は都市ごとに拡大(ロンドン→英国 5 都市→欧州・北米)([EU-Startups](https://www.eu-startups.com/2016/08/mobile-ticketing-platform-dice-raises-6-million-to-fuel-the-expansion-in-europe-and-north-america/))。Fever は各都市の地元音楽家ネットワークに依存([CityHub](https://cityhub.com.au/?p=267882))。Posh は競合 Luma から「ナイトライフ向け」と位置づけられる([Luma Help: Luma vs Posh](https://help.luma.com/p/luma-vs-posh))。[報道/要約/ベンダー]
- **根拠**: [事実] Andrew Chen と NFX は「小さく密度の高い原子ネットワーク」と「ネットワーク密度は不均一で、まず『白熱した中心』に集中する」ことを説く(F 節)。
- **前提・失敗条件**: [推測] 都市・ジャンルの密度が閾値に満たないと、探している人が何も見つけられず離脱する。これは全国一律の広告で解決しにくい。

## E-6. 過剰な成長・固定費・買収後の方針転換

- **実例**: [事実] Eventbrite は 2026-03-10 に Bending Spoons による買収が完了した([FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm))。Meetup は 2024 年 1 月に Bending Spoons が取得し、価格改定が続いた(上記)。Appfigures は Bending Spoons の買収後に「人員削減・値上げ・ユーザーの不満」のパターンがあると分析する([Appfigures](https://appfigures.com/resources/insights/the-company-squeezing-money-from-apps-you-used-to-love/amp))。[一次/報道]
- **前提・失敗条件**: [推測] 買収・所有者の変更による価格・機能の変更は、代替サービスに主催者が移るきっかけになる。

---

# (F) 理論フレームワーク

## F-1. Andrew Chen「The Cold Start Problem」

- [事実] 原子ネットワーク(atomic network)=「単独で自立できる最小のネットワーク」。十分な密度と安定性で初期の反ネットワーク効果を超えると自力で成長し、同じ手順を繰り返して大きなネットワークを作る。初期の原子ネットワークの規模は「数百人程度」のこともある。Uber は SF の 7×7 マイル、PayPal は $5 の紹介報酬を使った([Lenny's Newsletter: The Atomic Network](https://www.lennysnewsletter.com/p/atomic-network))。[一次(書籍抜粋)]
- [事実] 二面市場では「難しい側(hard side)」を先に獲得するという助言。Tinder が大学のパーティーで利用者の密度を作った、という例もある(読者の要約)([Indie Hackers 要約](https://www.indiehackers.com/post/how-to-kickstart-a-marketplace-lessons-learned-from-andrew-chens-book-the-cold-start-problem-b0fdf81f6b))。[要約。Lenny's の抜粋には「hard side」「Tinder」の記述は確認できず、二次要約に基づく]
- **イベント領域への当てはめ [推測]**: 原子ネットワーク = 「1 都市×1 ジャンル×(複数の主催者+その常連)」。難しい側は多くの場合「継続して開催する主催者」で、Eventbrite の売上の大半が少数の頻繁な主催者に集中する事実と整合する(D-1)。

## F-2. Chris Dixon「Come for the tool, stay for the network」

- [事実] 2015-01-31。ツールが初期の臨界量を作り、ネットワークが長期的な価値と防御性を生む。「単独利用のツールは焚き付け」。例は Delicious(ブックマーク→タグ共有)と Instagram(フィルター→ネットワーク)。Facebook・Twitter のように、ツールなしで巨大化した例もあると Dixon 自身が付記([cdixon.org](https://cdixon.org/2015/01/31/come-for-the-tool-stay-for-the-network/))。[一次]
- [事実] 反論として、TechCrunch の 2016 年記事は「ツールに明確な 1 人あたりの ROI があればコールドスタートは解けるが、初期プロダクトに重要なソーシャル機能が含まれないと、後からネットワークを作りにくい」と論じる([TechCrunch 2016-12-01](https://techcrunch.com/2016/12/01/come-for-the-tool-stay-for-the-network-reconsidered/))。[要約]
- **当てはめ [推測]**: Eventbrite(発券ツール)、Luma(イベントページ)、Partiful(招待リンク)、Posh(プロモーター用ツール)は「ツール先行」。ゲストが製品に触れる(ツールが他人の目に触れる)ため、ツール自体にソーシャルな露出があるのが共通点で、TechCrunch の反論への一つの答えになっている。

## F-3. NFX の network effects

- [事実] NFX は「ネットワーク効果が 1994 年以降のテクノロジー価値の約 70% を生んだ」と主張し、ネットワーク効果を複数の種類に分類する(NFX の資料間で 13 種・16 種と表記が揺れる)([NFX: Network Effects Bible](https://nfx.com/post/network-effects-bible)、[Medium: NFX](https://medium.com/@nfx/the-network-effects-bible-c6a06b8ae75b))。[要約/二次]
- [事実] 密度はノードに対するリンクの比率で、一般に密度が高いほど効果が強い。密度は不均一で、まず「白熱した中心(white-hot center)」に集中して外側へ広げる。マーケットプレイスは混雑(congestion)が自然な敵と James Currier は述べる([Practical Ecommerce](https://www.practicalecommerce.com/network-effects-drive-ecommerce-marketplace-growth)、[NFX Marketplace Scorecard](https://nfx.com/post/the-nfx-marketplace-scorecard))。[要約]
- **当てはめ [推測]**: イベントは「場所と時間」に縛られるローカルなネットワーク。密度は都市×ジャンル×日時の単位で測るのが妥当で、全国のユーザー数は指標にならない。

## F-4. 初期の「手作業(スキャフォールディング)」と評価指標

- [事実] 初期の成功指標は、総登録数ではなく、密度・マッチ率・応答時間・コミュニティ内のリピート利用([二次要約: Antoine Buteau](https://www.antoinebuteau.com/network-effects-that-actually-compound-series-5-solving-the-cold-start-problem.md))。[二次]
- **当てはめ [推測]**: Dice の人手キュレーション、Partiful の Discover の手作業選定、Luma の City Leads / Tech Weeks、Posh のアンバサダーは、スケールしない手作業で密度を作る実例にあたる。

## F-5. 本調査で扱えなかった理論

- [不明] 二面市場の経済学(Rochet-Tirole、Evans-Schmalensee の「鶏と卵」)や、学術論文の実証研究は今回の調査範囲では確認していない。必要なら別途調査する。

---

# 示唆(推測): Shokujii への含意(短く)

以下はすべて **[推測]** であり、調査対象の事実ではない。

1. **供給は二層(幹事+飲食店)**。ツール型の成功例は「主催者が自分の既存コミュニティを持ち込む」ことで初期密度を作っている。Shokujii は幹事の既存の友人・コミュニティが最初の参加者になる設計(アカウント不要のリンク参加、LINE などでの共有)と相性が良い可能性がある。
2. **原子ネットワークは 1 エリア×少数の店舗**。Dice(上限 250 公演・手選び)や Fever(各都市の地元ネットワーク)のように、店舗(メニュー)が薄いエリアに需要を集めても、予約できる選択肢が足りない。
3. **決済・注文を握る構造は、迂回に強い側面がある**。Posh の「取引を最初に握る」に近く、メニュー注文がプラットフォーム内にあれば、幹事がプラットフォームの外へ出る動機は小さいかもしれない。ただし手数料への反発(Eventbrite 2023→2024、Meetup の価格改定)は、幹事・店舗のどちらの負担かを慎重に設計すべき論点。
4. **参加者→幹事の転換導線**: 参加後ページ・確認画面からの導線は、Eventbrite の S-1(参加者としての利用経験が主催者獲得経路)と Luma/Partiful の仕組みから、検証する価値が高い。転換率の公開値はないため、自社で計測する前提になる。
5. **データ所有**: 参加者リスト・連絡手段(CRM)を幹事に渡す設計は、獲得の訴求になる一方で迂回の入り口にもなる。Luma は管理権限を分けた設計(Tech Weeks の 3 形態)の例がある。
6. **指標**: 総ユーザー数ではなく「エリア×ジャンル単位の、開催成立率・リピート幹事率・店舗あたり月間開催数」を見る(F-4)。

---

# 出典(本ノートで参照した主要 URL と信頼度)

## 一次(SEC・公式・本人発言)
- Eventbrite, Form 424B4 (2018-09): https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm
- Eventbrite, Form 10-K FY2025: https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm
- Eventbrite, Q3 2025 決算プレスリリース (8-K): https://www.sec.gov/Archives/edgar/data/1475115/000147511525000114/ebq32025earningspressrelea.htm
- Eventbrite blog (2023-03-28): https://www.eventbrite.com/blog/?p=395362
- Eventbrite blog (2024-09 公開無料化): https://www.eventbrite.com.au/blog/?p=430197
- Google Search Central, Eventbrite case study (2018-05-08): https://developers.google.com/search/case-studies/eventbrite-case-study
- Google, Event structured data: https://developers.google.com/search/docs/appearance/structured-data/event
- Victor Pontis, How Luma Works (2025-01-07): https://pont.is/p/how-luma-works
- Luma Help (Promote / Tech Weeks / vs Eventbrite / Event Insights / vs Posh): https://help.luma.com/p/promote-your-event , https://help.luma.com/p/tech-weeks , https://help.luma.com/p/luma-vs-eventbrite , https://help.luma.com/p/event-insights , https://help.luma.com/p/luma-vs-posh
- Partiful blog: https://partiful.com/blog/post/heres-how-to-actually-grow-your-audience
- Posh Support / University: https://support.posh.vip/en/articles/10723700-creating-kickback-affiliate-offers-public-private , https://support.posh.vip/en/articles/12611504-getting-started-with-organizer-referrals , https://university.posh.vip/university/post/posh-affiliate-program , https://posh.vip/university/post/how-to-become-paid-event-promoter , https://posh.vip/university/post/switching-from-eventbrite-to-posh
- Chris Dixon, Come for the tool, stay for the network (2015-01-31): https://cdixon.org/2015/01/31/come-for-the-tool-stay-for-the-network/
- Lenny's Newsletter, The Atomic Network (Andrew Chen 抜粋): https://www.lennysnewsletter.com/p/atomic-network

## 報道・専門メディア
- Fortune, Posh Series B (2026-03-19): https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/
- AfroTech, Posh (2025-12-11): https://afrotech.com/posh-brought-in-10m-in-annualized-revenue-in-2024
- Marketing Brew, Partiful (2026-03-09): https://www.marketingbrew.com/stories/2026/03/09/partiful-marketing-strategy-organic-mentions-the-pitt
- TBPN Digest, Shreya Murthy (2025-10-31): https://www.tbpndigest.com/story/2025-10-31/shreya-murthy-on-partiful-building-the-social-layer-for-gen-z-events-and-the-future-of-offline-connection
- Entrepreneur, Meetup (2011-06-07): https://www.entrepreneur.com/article/219753
- TechCrunch, Meetup Everywhere / TC 5 周年 (2010): https://techcrunch.com/2010/05/28/150-meetups-birthday/ , https://techcrunch.com/2010/05/31/techcrunch-meetups
- Fortune, Meetup (2010-08-17): https://fortune.com/2010/08/17/meetup-wants-to-be-facebook-for-the-real-world
- TechCrunch, Dinner Lab (2016-04-14): https://techcrunch.com/?p=1307899
- Sifted / TechCrunch / UKTN, Hopin: https://sifted.eu/articles/hopin-sells-off-its-original-events-platform , https://techcrunch.com/2023/08/02/hopin-ringcentral , https://www.uktech.news/events/hopin-winds-down-uk-business-us-headquarters-20240227
- WP Tavern, Meetup RSVP fee (2019): https://wptavern.com/meetup-com-introduces-rsvp-fees-for-members-wordpress-meetup-groups-unaffected-by-pricing-changes
- Design Week (2014), EU-Startups (2016), Dice: https://www.designweek.co.uk/issues/september-2014/new-gig-ticketing-service-dice-aims-to-be-loved-by-music-fans/ , https://www.eu-startups.com/2016/08/mobile-ticketing-platform-dice-raises-6-million-to-fuel-the-expansion-in-europe-and-north-america/
- Calgary Journal (2023) / CityHub, Fever: https://calgaryjournal.ca/2023/03/14/candlelight-concerts-light-up-the-city/ , https://cityhub.com.au/?p=267882
- Crunchbase News, Luma $3M: https://news.crunchbase.com/startups/exclusive-luma-raises-3m-to-enable-business-growth-on-top-of-zoom/
- Appfigures, Bending Spoons: https://appfigures.com/resources/insights/the-company-squeezing-money-from-apps-you-used-to-love/amp
- Motley Fool (2018-08-30): https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx
- SmartCompany (Julia Hartz): https://www.smartcompany.com.au/?p=111724

## 二次分析・要約・ベンダー(信頼度が低い、または本文未確認)
- Sacra, Partiful (2025-10-22): https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/
- Wikipedia, Meetup / Dice: https://en.wikipedia.org/wiki/Meetup , https://en.wikipedia.org/wiki/Dice_(ticketing_company)
- 決算説明会の書き起こし(第三者サイト): https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock , https://www.marketbeat.com/earnings/reports/2024-11-7-eventbrite-inc-stock , https://www.marketbeat.com/earnings/reports/2023-8-3-eventbrite-inc-stock , https://www.roic.ai/quote/EB/transcripts/2022-year/4-quarter , https://statementdog.com/analysis/EB/earnings_calls/29336 , https://statementdog.com/analysis/EB/earnings_calls/303037(いずれも公式の書き起こしで照合していない)
- Meetup Help / Wayback(価格・規約): https://help.meetup.com/hc/en-us/categories/39489490734605-Subscriptions-and-features-Overview , https://web-wp.archive.org/web/20160430012931/http://www.meetup.com/pricing/ , https://web-wp.archive.org/web/20141218003207/http://www.meetup.com/terms/
- NJHN, Trustpilot(Meetup 利用者の個別事例): https://njhn.org/?p=4361 , https://ca.trustpilot.com/review/meetup.com?page=10
- Growth Talent(Fever の求人アーカイブ): https://www.growthtalent.org/jobs/growth-marketing/fever/growth-marketing-associate-fever
- Resumegeni(Partiful の求人、集約サイト): https://resumegeni.com/jobs/campus-growth-manager-us-spring-2026-partiful-f02c13c7d2
- startup.jobs(Posh の求人。403 で直接未読): https://startup.jobs/campus-growth-ambassador-posh-8113513
- Semrush(Eventbrite 流入推計): https://cw.semrush.com/website/eventbrite.co.uk/overview
- TicketSignup(競合視点): https://info.ticketsignup.io/founders-corner-eventbrites-misguided-marketplace-strategy
- LaunchList(K-factor 一般論、ベンダー): https://blog.getlaunchlist.com/blog/viral-coefficient-k-factor-guide
- NFX / 要約: https://nfx.com/post/network-effects-bible , https://medium.com/@nfx/the-network-effects-bible-c6a06b8ae75b , https://nfx.com/post/the-nfx-marketplace-scorecard , https://www.practicalecommerce.com/network-effects-drive-ecommerce-marketplace-growth
- Indie Hackers(Chen の要約): https://www.indiehackers.com/post/how-to-kickstart-a-marketplace-lessons-learned-from-andrew-chens-book-the-cold-start-problem-b0fdf81f6b
- TechCrunch(Dixon への反論): https://techcrunch.com/2016/12/01/come-for-the-tool-stay-for-the-network-reconsidered/

---

# 確認できなかった事項・矛盾(まとめ)

- [不明] ゲスト→ホスト転換率、リピート主催率、紹介経由比率、k-factor、無料→有料転換率: いずれも一次情報では公開されていない。
- [不明] Eventbrite の発見経由比率の 2023 年以降の最新値、有機検索の割合。
- [矛盾] Posh のユーザー数: 2025-12 に約 600 万([AfroTech](https://afrotech.com/posh-brought-in-10m-in-annualized-revenue-in-2024))、2026-03 に約 800 万([Fortune](https://fortune.com/2026/03/19/exclusive-posh-lands-37m-series-b-what-are-we-doing-tonight-problem/))。時点が異なるため整合する可能性が高いが、算出基準は不明。
- [矛盾] Luma の手数料: 過去は 3% と記載されたページがあり、2025-06 時点の自社比較ページは無料プラン 5%・Plus 0%。時期により変化していると思われる。
- [矛盾] Eventbrite 比較ページ(Luma 作成)の Eventbrite 手数料の合計額が、内訳の和と一致しない箇所があった([Luma Help](https://help.luma.com/p/luma-vs-eventbrite))。
- [未確認] Meetup の主催者課金後の「活動が 95% 低下」は検索要約にのみ登場し、取得した Wikipedia 本文にはなかった。
- [未確認] Meetup の会員数: 2011 年に 920 万([Entrepreneur](https://www.entrepreneur.com/article/219753))、2013 年に 2,550 万([Wikipedia](https://en.wikipedia.org/wiki/Meetup))と記載があり、数え方(登録・会員・累計)が異なる可能性。
- [未確認] 検索ツールが返した要約(特に [要約] タグ)は、本文を直接読めていない。重要な引用は元ページでの再確認を推奨。
- [不明] スパムイベント対策、OGP/短縮 URL の効果、Wrapped 型の振り返りシェア、Mailchimp・Google Calendar 連携の寄与: 確認できる情報なし。
