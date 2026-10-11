# Eventbrite グロースストーリー(2006–2026)

調査時点: 2026-10-11。範囲: 初期トラクション → 成長フェーズごとの施策 → 成長速度と資金 → 転機・失敗 → Shokujii への示唆。
基本情報・手数料・機能の詳細は既存ノート(`世界のイベント告知サービス 集客施策調査/01_global_discovery.md` の Eventbrite 節、`07_cross_cutting_growth_tactics.md` の A-2-2 節)にあるため重複を避け、本ノートはグロース史に集中する。既存ノートから転記した事項は「(既存ノート由来)」と明記する。

凡例: [事実]=一次資料または本文を読めた記事で確認。[二次]=検索結果の要約のみ(本文は未取得)。[推測]=調査者の推論。[不明]=確認できず。[自社主張]=同社の発信で第三者検証なし。出典間で食い違う数値は併記。

---

## Eventbrite は、どう成長し、何にいくらかかり、どこでつまずいたか

### Takeaway
Eventbrite は「創業者3人だけで約2年のブートストラップ → 2009年に Sequoia から $6.5M(累計約 $8M)→ 2018年 IPO(累計調達 $334M の優先株+IPO $230M 規模)」という資本効率の高い成長で、初期の主催者獲得を「自己登録のセルフサービス+参加者が次の主催者になる口コミ(主催者の約70%)+検索(SEO)+Facebook 共有」で賄った(2017年は主催者の95%超が自己登録、S&M は売上の約27%)。一方で、2017〜18年の買収(Ticketfly $201M など)の統合失敗、2020年のコロナ(売上-68%、45%解雇)、2023年の無料イベント主催者手数料の失敗(有料チケット 2023→2024 -10%、2025 -6%)で成長が止まり、2025-12 に Bending Spoons が約 $500M(1株 $4.50、IPO 時評価額 $1.76B の約3割)で買収した。

---

### Cited Findings

#### 一言サマリ
- [事実] 2006年に Kevin Hartz・Julia Hartz・Renaud Visage が創業。法人は 2003年設立の Mollyguard Corporation で、2006年に事業開始、2009年に Eventbrite, Inc. に改称。 — [424B4(2018-09)](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm)(目論見書本文は一部のみ読了。Wikipedia 経由で創業者名は [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite))
- [事実] 初期は「創業者3人で2年」(Julia Hartz)。最初の採用はプロダクト・マーケット・フィット(PMF)後で、エンジニアだった。 — [Adam Mendler 要約(2022-06-21)](https://www.adammendler.com/blog/julia-hartz/)
- [事実] 2009年11月時点で「前年比3桁成長が継続、月間ユニーク 300万、2009年のチケット売上見込み $100M 超、登録者 500万超、毎月 1万件超の新規イベント掲載」。累計調達は約 $8M。 — [Eventbrite 公式ブログ(2009-11-09)](https://www.eventbrite.com/blog/?p=49641)
- [事実] 2017年: 主催者 70万超、発行チケット約2.03億枚(有料 71.0M 枚)、イベント約300万、純収益 $201.6M(+51%)、純損失 $38.5M、Adjusted EBITDA が初めて黒字($4.2M)、FCF +$21.1M。 — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [Crunchbase News(2018-08-23)](https://news.crunchbase.com/news/a-quick-peek-at-eventbrites-s-1/)
- [事実] 2025年: 純収益 $291.8M(2024年 $325.1M、-10%)、有料チケット 78.9M 枚(-6%)、純損失 $10.5M、従業員 636人(2025年末)。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)

#### 年表

| 年月 | 出来事 | 規模・数値 | 出典 |
| :-- | :-- | :-- | :-- |
| 2006 | 創業(サンフランシスコ)。創業者3人のみで約2年ブートストラップ | 「Email と Excel が最大の競合」。最初のユーザーは少数のテックイベント → 独立系の主催者へ | [Adam Mendler](https://www.adammendler.com/blog/julia-hartz/); [SmartCompany(2014-03-19)](https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/) |
| 2008 | 金融危機で機関投資家ラウンドが頓挫。創業者が追加自己資金+既存エンジェル(Bebo 創業者 Michael Birch 等)に頼る。Facebook Connect(2008年開始)に早期統合 | 金額 [不明] | [Entrepreneur/NBC(2012-12-14)](https://www.nbcnews.com/news/amp/wbna50196531); [VentureBeat(2017-05-19)](https://venturebeat.com/business/eventbrite-events-on-facebook-result-in-2x-the-ticket-sales) |
| 2009-11 | Series C: Sequoia が $6.5M(Roelof Botha が取締役に) | 累計 $8M 超。前年比3桁成長、月間UU 300万、2009年売上見込み $100M 超、10,000+ 新規イベント/月 | [Eventbrite ブログ(2009-11-09)](https://www.eventbrite.com/blog/?p=49641); [TechCrunch(2009-11-04)](https://www.techcrunch.com/2009/11/04/eventbrite-gets-a-6-million-infusion-from-sequoia-capital) |
| 2010-03 | Kevin Hartz が Mixergy で「累計調達 $10M 未満、手元に約 $7M」と発言。流入順位は Google 自然検索 1位、Facebook 2位、Twitter 3位 | 月間 460万人がサイト訪問(2010年3月) | [Mixergy(2010-03-30)](https://mixergy.com/?p=6825) |
| 2010-09 | Facebook ログインで「友人が参加するイベント」を表示する「event graph」を発表 | — | [TechCrunch(2010-09-23)](https://techcrunch.com/2010/09/23/eventbrite-facebook) |
| 2010-10 | Series D $20M(DAG Ventures 主導、Sequoia、Tenaya) | 累計 $29.5M。2010年は 7.5M 枚(約半分は無料)・平均単価 $60・年 $200M 見込み。海外比率 約15%。Facebook が前四半期に Google を抜き最大の流入源に | [TechCrunch(2010-10-06)](https://techcrunch.com/2010/10/06/eventbrite-20-million) |
| 2010 通年 | 年間実績(二次) | 11M 枚超・GTS $206.8M(約 $207M) | [hostmds(2011-01)](https://blog.hostmds.com/2011/01/eventbrite-ticket-sales-grossed-nearly-207-million-in-2010/) [二次・検索要約のみ] |
| 2011-03〜05 | Series E $50M(Tiger Global 主導)。日付は Wikipedia が 2011-03-18、Clay が 2011-05 で不一致 | 累計約 $80M | [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite); [Clay](https://clay.com/dossier/eventbrite-funding) [二次]; 累計は [Fortune(2013-04-16)](https://fortune.com/2013/04/16/eventbrite-just-the-ticket-for-smaller-events)(約 $80M) |
| 2012 | ロンドンに初の海外拠点。14か国で現地語サイト。6月に累計 GTS $1B 突破。Vans Warped Tour の2012年5公演を独占ネット販売、Disco Donnie Presents と提携(7月) | 2012年 GTS $600M 見込み(同社) | [Entrepreneur/NBC(2012-12-14)](https://www.nbcnews.com/news/amp/wbna50196531) |
| 2012-10 | 「Social Commerce Report」を公表(データ PR) | Facebook の共有1回 $4.15、訪問14 | [Eventbrite ブログ(2012-10-23)](https://www.eventbrite.com/blog/?p=49597) |
| 2013-04 | $60M(Tiger Global 主導、T. Rowe Price が新規) | 累計 $140M。累計 100M 枚・179か国・累計 GTS $1.5B 超、うち1/3は直近9か月。従業員 229人 | [Eventbrite ブログ(2013-04-22)](https://www.eventbrite.com/blog/?p=49589); [Fortune(2013-04-16)](https://fortune.com/2013/04/16/eventbrite-just-the-ticket-for-smaller-events) |
| 2013-09 | Lanyrd・Eventioz を買収(創業以来初の買収) | 価格非開示 | [VentureBeat(2013-09-03)](https://venturebeat.com/technology/eventbrite-makes-first-acquisitions-in-7-years-buys-lanyrd-and-eventioz) |
| 2014-03 | $60M(Fortune 初報は約 $50M)。評価額 $1B 超(ユニコーン) | 累計 $190M。2013年の GTS は $1B 超 | [TechCrunch(2014-03-13)](https://techcrunch.com/2014/03/13/eventbrite-50-million-1-billion-valuation) |
| 2016-04 | Julia Hartz が CEO、Kevin Hartz は執行会長 | 年200万件超のイベント、累計 GTS $5B 超。「2016年末までの黒字化」目標(2014年末設定) | [Fortune(2016-04-21)](https://fortune.com/2016/04/21/eventbrite-ceo-julia-hartz) |
| 2016-07 | Facebook 上で直接チケット購入できる提携(distributed commerce) | 「Facebook 経由の販売が提携前の2倍」(同社の未検証の主張、2017-05) | [VentureBeat(2017-05-19)](https://venturebeat.com/business/eventbrite-events-on-facebook-result-in-2x-the-ticket-sales) |
| 2016〜17 | Queue Ticketing・Nvite 買収。ticketscript(オランダ、2017-01)買収 | Queue+Nvite は現金 $1.7M(純額)、ticketscript は取得時公正価値 $33.4M | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) |
| 2017 | Ticketfly(Pandora から)買収($201.1M)。Series G $133.9M(純額) | 累計の優先株調達 $334.0M | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) |
| 2018-04〜08 | Ticketea(スペイン)、Picatic(カナダ)買収 | Ticketea $11.2M、Picatic CAD 1.8M+株式 | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) |
| 2018-06 | Ticketfly が不正アクセス被害。Q2 2018 に $6.3M の費用 | — | [Q1 2019 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000014/ebshareholderletter1q19.htm) |
| 2018-09-20 | NYSE 上場(IPO 価格 $23、10M 株+追加売出し) | 評価額 $1.76B。初日終値 $36.50(+59%) | [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite); [Skift(2025-12-02)](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/) |
| 2018-11〜2019 | Ticketfly プラットフォームの停止を決定。2019年3月、移行ロス警告で株価が IPO 価格割れ | 2019年5月に1日で-31%[二次] | [Q1 2019 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000014/ebshareholderletter1q19.htm); [Digital Music News(2019-05-02)](https://www.digitalmusicnews.com/2019/05/02/eventbrite-stock-woes/) [二次] |
| 2020-04 | コロナ対応で従業員約45%を解雇。営業チームの約9割が対象(二次) | 年換算 $100M の費用削減計画。再編費用 $10〜14M 見込み | [Demand Gen Report](https://www.demandgenreport.com/industry-news/eventbrite-lays-off-45-of-workforce-in-response-to-covid-19/6185/) [二次] |
| 2020-06 | 転換社債 $150M(年5.000%、2025年満期) | — | [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm) |
| 2021 | Boost(主催者向け総合マーケ)を 2021-05-06 に発表。転換社債 $212.75M(0.750%、2026年満期)を3月に発行 | 純収益 +77% | [Destination CRM](https://www.destinationcrm.com/Articles/CRM-News/CRM-Across-the-Wire/Eventbrite-Launches-Eventbrite-Boost-146744.aspx) [二次]; [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm) |
| 2022-06 | Eventbrite Ads を導入(主催者の有料掲載) | — | [Eventbrite ブログ](https://www.eventbrite.com/blog/?p=412664) [二次] |
| 2023 | 1月以降の値上げ+6月の主催者手数料(無料イベント含む)導入。Skift は「2023年後半」と記載(10-K は 6月と記載) | 純収益 $326.1M(+25%)だが有料チケット +7% | [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm); [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/) |
| 2024-09-04 | 無料イベント主催者手数料を撤回(公開無料に) | 有料チケット 2024年 -10% | [10-K FY2024](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000026/eb-20241231.htm) |
| 2025-03 | ブランド刷新+アプリ再構築+「Get Into It」キャンペーン | アプリ経由の有料チケット +11%(Q1、同社主張) | [Eventbrite ブログ](https://www.eventbrite.com/blog/?p=436270); [Q1 2025 決算コール(既存ノート由来)](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock) |
| 2025-12-02 | Bending Spoons が全額現金で買収を発表(1株 $4.50、約 $500M、2.50 ドル近辺からの約8割プレミアム) | — | [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/) |
| 2026-03-10 | 買収完了、非上場化 | — | [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)(既存ノート由来) |
| 2026-04-13 | 新体制の方針公表。Andrea Parodi(公式ブログ上の肩書は General Manager)が統括、旧チームの大半と離別、優先5領域(信頼性・主催者ツール・リーチ&発見・チケット体験・チェックアウト) | 発見は「オーガニックで見つかる」ための SEO 改善を明記 | [Eventbrite 公式ブログ(2026-04-13)](https://www.eventbrite.com/blog/whats-next-at-eventbrite/) |

#### 初期トラクション

- [事実] 立ち上げ: 2006年創業。Julia Hartz は「最初の顧客獲得は難しく、最大の競合は Email と Excel だった」と述べ、最初のユーザーは少数のテックイベント。その後、大会場ではなく独立系のイベント主催者に狙いを定めた。成長は「最初から有機的」だった。 — [SmartCompany(2014-03-19)](https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/)
- [事実] 体制: 創業者3人が2年間ブートストラップ。Julia がマーケ・カスタマーサービス・財務、Kevin がプロダクト、Renaud がエンジニアリング。最初の採用は PMF 後のエンジニア。 — [Adam Mendler(2022-06-21)](https://www.adammendler.com/blog/julia-hartz/)
- [二次] 「2年で $250,000 未満の支出で損益均衡」との証言が複数の紹介記事にある(検索要約のみ。原典の Amex 記事は取得できず)。 — [American Express 記事](https://americanexpress.com/en-us/business/trends-and-insights/articles/julia-hartz-of-eventbrite-building-a-business-full-of-vibrant-energy)(404、検索要約のみ)。なお別の記事は「4年ブートストラップ」と書き、期間の記述が食い違う([FF.co](https://ff.co/julia-hartz-eventbrite/))。
- [事実] プロダクト: 最初の版は「チケット種別を作り、取引を走らせる」だけで、RSVP もなかった(Kevin Hartz「早期ローンチ派」)。料金は当初からチケット1枚ごとの手数料で、初期費用・招待送信費用なし。最初の仮説は SEO(「検索と発見に最適化」)。市場規模の見積もりは「始めた後に、資金調達の練習としてやった」。 — [Mixergy(2010-03-30)](https://mixergy.com/?p=6825); [TechCrunch(2011-06-17)](https://techcrunch.com/2011/06/17/founder-stories-eventbrite-facebook)
- [事実] 顧客の声: 主催者の要望は一貫して「もっとチケットを売りたい」。個別の主催者でチケット売上 $1,000〜$100,000、1〜2組は約 $1M を売った。 — [Mixergy](https://mixergy.com/?p=6825)
- [事実] 初期の著名顧客: TechCrunch が自社イベントの多くで Eventbrite を利用(2009-11)。Eventbrite は TechCrunch50 のようなイベントを現金ではなく役務の対価でスポンサーした。 — [TechCrunch(2009-11-04)](https://www.techcrunch.com/2009/11/04/eventbrite-gets-a-6-million-infusion-from-sequoia-capital); [Mixergy](https://mixergy.com/?p=6825)(スポンサーの件は聞き手の発言)
- [事実] 最初の外部資金: Sequoia 以前はエンジェル(Michael & Xochi Birch、Jeff Clavier、Jawed Karim、David Sacks、Keith Rabois、Ron Conway、Saran Chari、Joe Greenstein)。Series A 2008-06 が非開示額、2008-12 に $1.5M の負債(いずれも Clay、二次・未確認)。 — [Eventbrite ブログ(2009-11-09)](https://www.eventbrite.com/blog/?p=49641); [Clay](https://clay.com/dossier/eventbrite-funding) [二次]
- [事実] 最初の機関投資家ラウンド時点の規模(Series C、2009-11): 前年比3桁成長、月間UU 300万、登録者 500万超、毎月 1万件超の新規イベント、2009年チケット売上見込み $100M 超、「数万」の主催者(個人・企業・団体)、数千の NPO・大学・図書館・宗教団体。料金は 2.5%+$0.99/枚。 — [Eventbrite ブログ(2009-11-09)](https://www.eventbrite.com/blog/?p=49641); [TechCrunch(2009-11-04)](https://www.techcrunch.com/2009/11/04/eventbrite-gets-a-6-million-infusion-from-sequoia-capital)
- [事実] 資本効率: 2010-03 時点で累計調達は $10M 未満、手元約 $7M。「資本効率の高いビジネス」。Series D(2010-10)前の累計は $9.5M($29.5M-$20M)で整合する。 — [Mixergy](https://mixergy.com/?p=6825); [TechCrunch(2010-10-06)](https://techcrunch.com/2010/10/06/eventbrite-20-million)
- [事実] 2008年: Series 相当の機関投資家ラウンドが頓挫し、創業者が追加自己資金、既存エンジェルに依頼。 — [Entrepreneur/NBC(2012-12-14)](https://www.nbcnews.com/news/amp/wbna50196531)
- [事実] PMF の証拠(第三者検証可能な範囲): 主催者の要望が「もっと売りたい」で一貫(Mixergy)、2009年に3桁成長・月間UU 300万(公式ブログ)、10,000件超/月の自然流入のイベント掲載、平均イベント規模は約40人(2012年時点の Entrepreneur 記事)。「PMF」という語での直接の証言は Julia の「最初の採用は PMF 後」のみ。 — [Adam Mendler](https://www.adammendler.com/blog/julia-hartz/); [Entrepreneur/NBC](https://www.nbcnews.com/news/amp/wbna50196531)
- [事実] 規模の目安: 創業から約2年半で月間UU 300万(2009)、約4年で GTS $207M(2010、二次)、約7年で累計 GTS $1.5B(2013-03)。

#### チャネル別施策(10チャネル)

| チャネル | 実施 | 具体策 | 効果の根拠 | 信頼度 |
| :-- | :-- | :-- | :-- | :-- |
| ① SNS(Facebook・Twitter・LinkedIn・TikTok 等) | 実施(最重要) | 2008年 Facebook Connect に早期統合。2010-09 に Facebook ログインで「友人が参加するイベント」を表示(event graph)。2010-10 に共有の価値を数値化して公表。2012年 Twitter・LinkedIn も計測。2016-07 から Facebook 上で直接購入。2018年時点の配信パートナー50超(Google・Facebook・Spotify・Instagram・Bandsintown 等)。2020-11 に ToneDen(SNS マーケ)を買収。2024-07 TikTok 提携(既存ノート由来)。 | 2010-03 は Google 1位・Facebook 2位・Twitter 3位 → 2010-10 の報道で「前四半期に Facebook が Google を抜いた」。2010年: Facebook の共有1回あたり $2.52(Twitter $0.43、LinkedIn $0.90、「友人にメール」$2.34、平均 $1.78)、訪問11回。2012年: Facebook $4.15、Twitter $1.85(訪問33)、LinkedIn $0.92、全体 $3.23。2016年提携は「提携前の2倍」と同社が主張(数値なし)。 | 高(2010・2012 は同社の自前分析、事実として確認。2倍は自社主張) — [Mixergy](https://mixergy.com/?p=6825); [TechCrunch(2010-09-23)](https://techcrunch.com/2010/09/23/eventbrite-facebook); [TechCrunch(2010-10-06)](https://techcrunch.com/2010/10/06/eventbrite-20-million); [TechCrunch(2010-10-14)](https://techcrunch.com/2010/10/14/eventbrite-facebook-share); [公式ブログ(2012-10-23)](https://www.eventbrite.com/blog/?p=49597); [VentureBeat(2017-05-19)](https://venturebeat.com/business/eventbrite-events-on-facebook-result-in-2x-the-ticket-sales); [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) |
| ② SEO・コンテンツ | 実施(当初の仮説) | 創業時の仮説が「検索エンジンと発見に最適化」。2018年: eventbrite.com は最もリンクされた上位100サイトに入る(自然流入)、プロ制作コンテンツ約1,400本(5言語)。2015年から schema.org の Event 構造化データ、都市×カテゴリの一覧ページ(既存ノート由来)。10-K は Google 自然検索への依存を明記。 | 2010-03 時点で流入1位は Google 自然検索。2017年 Google のモバイルイベント検索開始の翌月に「Google 検索からの流入が前年比約+100%」(Google 事例、他施策と切り分け不可、既存ノート由来)。 | 高(10-K、Mixergy)。構造化データの効果は中(Google 事例、原因の切り分けなし) — [TechCrunch(2011-06-17)](https://techcrunch.com/2011/06/17/founder-stories-eventbrite-facebook); [Mixergy](https://mixergy.com/?p=6825); [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm); [Google 事例(既存ノート由来)](https://developers.google.com/search/case-studies/eventbrite-case-study) |
| ③ メール(ニュースレター・主催者経由) | 部分的に実施 | 「友人にメール」アプリ(共有1回 $2.34、2010)。主催者が招待メールを無料で送れる(初期)。2023年に「発見(マーケットプレイス・アプリ・ニュースレター)」が発券の30%超(既存ノート由来)。主催者向けメール配信は有料アドオン(Pro 月 $15〜、既存ノート由来)。消費者向けメールは FY2018 10-K では「チャネルとして記述なし」。 | 「友人にメール」$2.34 は上記 TechCrunch の数値。ニュースレター単独の寄与は [不明]。Q1 2019 は「直接・裁量的マーケ費が減少」。 | 中〜低 — [TechCrunch(2010-10-14)](https://techcrunch.com/2010/10/14/eventbrite-facebook-share); [Mixergy](https://mixergy.com/?p=6825); [Q1 2019 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000014/ebshareholderletter1q19.htm); [Eventbrite blog 2023-03-28(既存ノート由来)](https://www.eventbrite.com/blog/?p=395362) |
| ④ バズ・バイラル(参加者の共有・参加者→主催者) | 実施(成長の核) | 購入後に共有できる導線。ウィジェット・埋め込み・割引コード・イベント紹介の「アフィリエイト」(主催者が紹介者に報酬、2010)。参加者→次の主催者の連鎖。無料イベントで試して有料へ。 | 2016年の主催者調査(3,000人超): 34%が「他の主催者のイベントに参加して Eventbrite を知った」、36%が口コミ → 合わせて約70%。Kevin Hartz(2010-10)「新規顧客の No.1 は、イベントに参加した人」。無料イベントを開いた主催者の約17%が12か月以内に有料イベントを開催(2015年以降)。 | 高(10-K と TechCrunch。調査は同社実施・2016年・サンプル 3,000人超) — [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm); [TechCrunch(2010-10-06)](https://techcrunch.com/2010/10/06/eventbrite-20-million); [Mixergy](https://mixergy.com/?p=6825); [Motley Fool(2018-08-30)](https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx) |
| ⑤ 主催者へのアウトリーチ・営業 | 実施(セルフ中心+標的営業) | 2017年: 主催者の95%超、2018年・2019年: 98%超が自己登録。自己登録主催者が純収益に占める割合: 2017年 54%、2018年 56%、2019年 51%。「特定カテゴリ・国の主催者を狙う営業チーム」で補完。営業インセンティブ約 $9M(2017)・$6.3M(2018上期)(Motley Fool)。クリエイター契約金(純)$17.0M・前払い(純)$23.1M(2018年末)。2017年は主催者の約13%が前払い。2012年は Warped Tour・Disco Donnie など大口と提携。2013年に iPad 用決済端末「At the door」。 | 自己登録が総売上の過半を生む。S&M は売上比で36%(2016)→27%(2017)に低下(低下の原因が口コミ中心の獲得経路にあるかは [推測]。10-K に因果の説明はない)。2020-04 に営業の約9割を解雇(二次)。 | 高(S-1/10-K) — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm); [10-K FY2019](https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm); [Motley Fool(2018-08-31)](https://www.fool.com/investing/2018/08/31/eventbrite-carves-out-its-niche-in-the-middle-mark.aspx); [Entrepreneur/NBC](https://www.nbcnews.com/news/amp/wbna50196531); [Fortune(2013-04-16)](https://fortune.com/2013/04/16/eventbrite-just-the-ticket-for-smaller-events) |
| ⑥ プレスリリース・PR | 実施(資金調達・マイルストーン・データ PR) | 各ラウンドを TechCrunch 等が報道(2009〜2014)。「$1B 突破(2012-06)」「100M 枚(2013-04)」を発表。Social Commerce Report(2010・2012)をデータ PR として公表。創業者インタビュー(TechCrunch、Mixergy、Fortune、Entrepreneur)。 | PR 単独の流入・登録への効果は [不明]。 | 中(実施は事実、効果は不明) — [TechCrunch(2010-10-14)](https://techcrunch.com/2010/10/14/eventbrite-facebook-share); [公式ブログ(2012-10-23)](https://www.eventbrite.com/blog/?p=49597); [公式ブログ(2013-04-22)](https://www.eventbrite.com/blog/?p=49589) |
| ⑦ マスメディア | 限定的 | 2025-03 のブランド刷新+「Get Into It」キャンペーンは自社の SNS・コンテンツ・アプリ内で展開と記載(テレビ等は確認できず)。それ以前の TV・屋外広告は確認できず。 | キャンペーン後 Q1 2025 の「アプリ経由の有料チケット +11%、アプリ月間利用者 +13%、discovery ユーザー +16%」(同社主張)。費用は [不明]。 | 低(自社主張・費用不明) — [Eventbrite ブログ](https://www.eventbrite.com/blog/?p=436270); [Q1 2025 決算コール(既存ノート由来)](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock) |
| ⑧ 有料広告 | 後期に本格化 | 初期は現金のスポンサーを避け役務払い(2010)。10-K のマーケ手段は SEO・SEM・アフィリエイト&ディスプレイ・ソーシャル・メール・デジタル動画(既存ノート由来)。2023年に消費者向けキャンペーン・SEM・広告で +$11.0M。2024年は広告費が減少。2025年 Q3 は「パフォーマンスマーケ起点の有料注文 +28%(前期比)」(既存ノート由来)。主催者向けには Boost(2021-05)、Ads(2022-06)。 | 総マーケ費は非開示。S&M(Sales, marketing and support)の推移は後述。広告費の売上比は [不明]。 | 中(増減額は10-K、総額は不明) — [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm); [10-K FY2024](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000026/eb-20241231.htm); [Mixergy](https://mixergy.com/?p=6825) |
| ⑨ パートナーシップ・BD・買収 | 実施(売上成長の大きな要因) | 下表。配信パートナー(Facebook・Google・Spotify・Bandsintown 等)、App Marketplace(100超連携、2019年)、買収で海外・音楽に拡大。2018年上期の成長の約6割は自力、残りは買収(Motley Fool 推定)。 | 海外売上比率: 2012年 18% → 2017年 30%。ただし Ticketfly は失敗(後述)。 | 高 — 下表の出典 |
| ⑩ オフライン・自社イベント | 小規模 | 現金でなく役務でのイベントスポンサー(TechCrunch50 等、2010)。SXSW で多数の関連イベントを扱った例を公式ブログが記載。2021年に主催者向けの無料バーチャルサミット RECONVENE を開催。自社主催の大型リアルイベントによる集客策は確認できず。 | 効果は [不明]。 | 低 — [Mixergy](https://mixergy.com/?p=6825); [Business Wire(2021-04-21)](https://www.businesswire.com/news/home/20210421006043/en) [二次]; [公式ブログ(SXSW)](https://www.eventbrite.com/blog/?p=15642) [二次] |

買収・BD の個別(⑨の内訳):

| 年月 | 相手 | 価格・条件 | 目的 | その後 |
| :-- | :-- | :-- | :-- | :-- |
| 2013-09 | Lanyrd(英、会議ディレクトリ、YC 2011、シード $1.4M)、Eventioz(アルゼンチン) | 非開示 | Lanyrd=発見・構造化データ、Eventioz=ラテンアメリカ(アルゼンチン・ブラジル・チリ・コロンビア・メキシコ・ペルー、主催者 15,000・イベント 20,000、Kaszek から $1.5M 調達) | Lanyrd サイトは終了(Wikipedia・Dealroom、二次) — [VentureBeat](https://venturebeat.com/technology/eventbrite-makes-first-acquisitions-in-7-years-buys-lanyrd-and-eventioz); [Wikipedia: Lanyrd](https://en.wikipedia.org/wiki/Lanyrd) |
| 2016〜17 | Queue Ticketing、Nvite | 2社合計の現金 $1.7M(純額、目論見書の記載。Nvite の時期は Wikipedia が 2017-03 で不一致) | 音楽・主催者ツール | 個別の成果は [不明] — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite) |
| 2017-01 | ticketscript(オランダ) | 取得時公正価値 $33.4M(現金 $7.7M、約束手形 $7.5M、株式 270万株、オプション) | 欧州 | 欧州拡大に寄与とされるが個別成果は [不明] — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) |
| 2017-09 | Ticketfly(Pandora から) | $201.1M(現金 $151.1M+年6.5%の転換社債 $50.0M。同社債は 2018-03 に $34.7M で償還し $16.3M の利益) | 北米音楽・会場の箱 | 2018-06 の不正アクセス、2018-11 に停止決定、2019年の移行ロス(後述)。のれん減損は2020・2021年の10-Kでは「なし」と記載、2019年は未確認 — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [10-K FY2021](https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm) |
| 2018-04 | Ticketea(スペイン) | 取得時公正価値 $11.2M(現金 $3.6M+株式 70万株) | 南欧 | 個別成果は [不明] — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) |
| 2018-08 | Picatic(バンクーバー) | CAD 1.8M 現金+株式 10万株 | セルフサービス型チケット | 個別成果は [不明] — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm) |
| 2020-11 | ToneDen(ロサンゼルス、SNS マーケ) | 非開示 | 主催者の SNS 広告 | 個別成果は [不明] — [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite) |
| 2025-12 | Eventbrite 自身が Bending Spoons に買収される | 1株 $4.50、約 $500M | — | 後述 — [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/) |

目論見書は「2015年以降に7社を買収」と記載([10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm))、Motley Fool は「5年で9件」と記載(数え方が異なる)。

#### 成長を牽引した機能

| 時期 | 機能 | 指標への影響(確認できた範囲) | 出典 |
| :-- | :-- | :-- | :-- |
| 2006 | セルフサービスのチケット発行(1枚ごとの手数料、初期費用なし、無料イベントは無料) | 主催者の要望「もっと売りたい」と整合。2018年: 主催者の98%超が自己登録 | [Mixergy](https://mixergy.com/?p=6825); [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm) |
| 2008〜2010 | Facebook Connect/ログイン、友人が参加するイベント表示、共有ボタン、ウィジェット・埋め込み、割引コード、アフィリエイト | 2010年に Facebook が最大の流入源に。共有1回 $2.52 | [TechCrunch(2010-10-06)](https://techcrunch.com/2010/10/06/eventbrite-20-million); [TechCrunch(2010-10-14)](https://techcrunch.com/2010/10/14/eventbrite-facebook-share) |
| 2012〜2013 | 現地語サイト(14か国)、At the door(iPad で決済)、モバイル | 海外売上比率 2012年 18% → 2017年 30%。At the door の数値効果は [不明] | [Entrepreneur/NBC](https://www.nbcnews.com/news/amp/wbna50196531); [Fortune(2013-04-16)](https://fortune.com/2013/04/16/eventbrite-just-the-ticket-for-smaller-events); [Motley Fool(2018-08-30)](https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx) |
| 2015〜 | Event 構造化データ(schema.org)(既存ノート由来) | Google 事例で前年比約+100%(切り分けなし) | [Google 事例](https://developers.google.com/search/case-studies/eventbrite-case-study) |
| 2016〜 | distributed commerce(他サイトでの販売: Facebook 直接購入など) | Facebook 上の販売が提携前の約2倍(自社主張、数値なし)。Facebook 公開イベント 50万件超、週200万枚超(2017-05、多くは第三者経由) | [VentureBeat(2017-05-19)](https://venturebeat.com/business/eventbrite-events-on-facebook-result-in-2x-the-ticket-sales); [Fortune(2016-04-21)](https://fortune.com/2016/04/21/eventbrite-ceo-julia-hartz) |
| 2017-09 | 料金パッケージ(Essentials/Professional/Premium 相当) | 効果は [不明] | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [Motley Fool(2018-08-31)](https://www.fool.com/investing/2018/08/31/eventbrite-carves-out-its-niche-in-the-middle-mark.aspx) |
| 2017〜 | 前払い(Advance payouts) | 2017年は主催者の約13%が利用。2018年末の貸借上の前払い(純)$23.1M。コロナ期の不良債権の源にもなった | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm); [10-K FY2021](https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm)(2021年は前払い損失引当金が $39.5M 減少) |
| 2019 | App Marketplace(100超の連携) | アプリ利用は前年同期比2.5倍(Q1 2019) | [Q1 2019 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000014/ebshareholderletter1q19.htm) |
| 2021〜22 | Boost(2021-05)、Eventbrite Ads(2022-06) | Boost 利用で「観客が63%増」(自社の主張)。Ads は 2023年に「14倍の露出」、2024年に+83%(既存ノート由来) | [Destination CRM](https://www.destinationcrm.com/Articles/CRM-News/CRM-Across-the-Wire/Eventbrite-Launches-Eventbrite-Boost-146744.aspx) [二次]; [Eventbrite ブログ](https://www.eventbrite.com/blog/?p=412664) [二次] |
| 2022〜23 | ML 推薦・パーソナライズ・発見(マーケットプレイス/アプリ/ニュースレター) | 2023-03: 発券の30%超が発見経由(過去最高)。Q2 2023: 推薦で閲覧数+64%(既存ノート由来) | [Eventbrite ブログ(2023-03-28、既存ノート由来)](https://www.eventbrite.com/blog/?p=395362) |
| 2025-03 | アプリ再構築(Discover、It-Lists、Book It、友人同期) | Q1 2025: アプリ経由の有料チケット +11%、アプリは Web より購入確率3倍(自社主張、既存ノート由来) | [公式ブログ](https://www.eventbrite.com/blog/?p=436270); [Q1 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock) |

#### 成長スピード

年次の規模(S&M は Sales, marketing and support。人件費・引当金を含み、純粋なマーケ費ではない点に注意):

| 年 | 発行チケット/有料チケット | 純収益 | 純損失 / Adj. EBITDA | S&M(売上比) | 従業員・備考 | 出典 |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 2009 | — | [不明] | — | — | GTS 見込み $100M 超、月間UU 300万 | [公式ブログ](https://www.eventbrite.com/blog/?p=49641) |
| 2010 | 11M 枚超(二次) | [不明] | — | — | GTS $206.8M(二次)。Series D 時点では年 $200M 見込み・平均単価 $60 | [TechCrunch](https://techcrunch.com/2010/10/06/eventbrite-20-million); [hostmds](https://blog.hostmds.com/2011/01/eventbrite-ticket-sales-grossed-nearly-207-million-in-2010/) |
| 2012 | 「50 millionth ticket」(Entrepreneur)/年36M 枚・GTS $600M(Vator の二次要約。表記が食い違う) | [不明] | — | — | 2012年 GTS $600M 見込み(同社)。累計 GTS $1B(2012-06) | [Entrepreneur/NBC](https://www.nbcnews.com/news/amp/wbna50196531) |
| 2013 | 累計 100M 枚(2013-03) | [不明] | — | — | GTS $1B 超(2013年)、従業員 229人(2013-04)、SmartCompany は「350人」と記載 | [TechCrunch(2014-03-13)](https://techcrunch.com/2014/03/13/eventbrite-50-million-1-billion-valuation); [Fortune](https://fortune.com/2013/04/16/eventbrite-just-the-ticket-for-smaller-events); [SmartCompany](https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/) |
| 2016 | 有料 44.6M | $133.5M | 損失 $40.4M / Adj. EBITDA -$17.6M | $48.4M(36.2%) | 年200万件超のイベント、累計 GTS $5B 超 | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm) |
| 2017 | 発行 約203M / 有料 71.0M | $201.6M(+51%) | 損失 $38.5M / +$4.2M | $55.2M(27.4%)。FY2019 の組替後は $59.7M(29.6%) | 主催者 70万超、イベント約300万、170か国、従業員 855人(年末) | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm); [10-K FY2019](https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm) |
| 2018 | 発行 約265M / 有料 97.3M | $291.6M(+45%) | 損失 $64.1M / +$28.8M | $69.8M(23.9%)。組替後 $83.4M(28.6%) | 主催者 79万超、イベント約380万、従業員 1,094人 | [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm); [10-K FY2019](https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm) |
| 2019 | 発行 約309M / 有料 109.4M | $326.8M(+12%) | 損失 $68.8M / -$5.6M | $102.9M(31.5%) | 主催者 94.9万超、イベント約470万、従業員 1,140人 | [10-K FY2019](https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm) |
| 2020 | 有料 47.1M(-57%) | $106.0M(-68%) | 損失 $224.7M / -$134.1M | $84.3M(79%) | 4月に約45%解雇 | [10-K FY2021](https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm) |
| 2021 | 有料 67.4M(+43%) | $187.1M(+77%) | 損失 $139.1M / +$1.0M | $35.9M(19%)。引当金の戻し $39.5M を含む | 2019年比で人員約40%減 | [10-K FY2021](https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm); [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm) |
| 2022 | 発行 約284M / 有料 87.1M(+29%) | $260.9M(+39%) | 損失 $55.4M / +$22.3M | $49.3M(19%) | イベント約500万、購入者 約9,000万、平均単価 $40(Fortune) | [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm); [Fortune(2023-10-02)](https://fortune.com/2023/10/02/julia-hartz-eventbrite-ceo-powering-everyday-life-events) |
| 2023 | 300M 枚超 / 有料 93.4M(+7%) | $326.1M(+25%) | 損失 $26.5M / +$28.7M | $74.6M(23%)。うち消費者キャンペーン・SEM・広告で +$11.0M | GTS $3.5B 超、従業員 866人 | [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm); 従業員数は [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite)(10-K を引用)と既存ノート |
| 2024 | 270M 枚 / 有料 83.8M(-10%) | $325.1M(-0.3%) | 損失 $15.6M / +$35.1M | $92.0M(28%)。チャージバック・不正対応 +$14.1M、広告費は減少 | GTS $3.2B 超、有料クリエイター 368,000(-7%、既存ノート由来) | [10-K FY2024](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000026/eb-20241231.htm) |
| 2025 | 258M 枚 / 有料 78.9M(-6%) | $291.8M(-10%) | 損失 $10.5M / +$25.3M | $81.2M(28%) | GTS $3.0B 超、従業員 636人 | [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm) |

- [事実] S&M の定義の変更: 2018年の S&M は FY2018 の10-Kで $69.8M(売上比 23.9%)、FY2019 の10-Kでは同じ 2018年が $83.4M(28.6%)、2017年は $55.2M → $59.7M と組み替えられた。理由は10-Kの抜粋では確認できない。 — [10-K FY2018](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm); [10-K FY2019](https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm) [推測: 費目の再分類]
- [事実] S&M には「マーケ施策費」「営業・マーケの人件費」に加え、チャージバック・払戻し・前払い損失の引当が含まれる(2021年は引当 $39.5M 減、2024年はチャージバック対応 $14.1M 増、2025年は同 $10.1M 減)。純粋な広告費ではなく、マーケ施策費の総額は10-Kに開示がない。 — [10-K FY2021](https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm); [10-K FY2024](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000026/eb-20241231.htm); [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 2017年は Adjusted EBITDA が初めて黒字、FCF も黒字。2016-04 の時点で「2016年末までに黒字化」を目標としていたが、2016年の Adjusted EBITDA は -$17.6M。GAAP の通期純利益は 2025年まで確認できず(2025年 Q3 単独は純利益 $6.4M)。 — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [Fortune(2016-04-21)](https://fortune.com/2016/04/21/eventbrite-ceo-julia-hartz); [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/)
- [事実] 主催者の定着: 前年の主催者群が生んだ手数料ベースのリテンションは 2016年 93%、2017年 97%(既存ノート由来)。 — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm)
- [事実] マイルストーン: 累計 GTS $1B(2012-06)、$1.5B・累計 100M 枚(2013-03)、$5B 超(2016-04)、IPO(2018-09-20)。2017年の累計 GTS を $10B 超と書く記事もある(Motley Fool)が、$5B(2016-04)→$10B(2017〜18)の整合は未検証。 — [Fortune(2016-04-21)](https://fortune.com/2016/04/21/eventbrite-ceo-julia-hartz); [Motley Fool(2018-08-31)](https://www.fool.com/investing/2018/08/31/eventbrite-carves-out-its-niche-in-the-middle-mark.aspx)
- [事実] 成長の内訳: 2018年上期の純収益成長(+61%)のうち、自力(オーガニック)は約6割で、残りは買収由来(Motley Fool の推計)。従業員は 2017-06-30 の 609人から 2018-06-30 の 1,016人へ約1.7倍(買収による増員を含む)。 — [Motley Fool(2018-08-30)](https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx); [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm)

#### 資金調達

| 日付 | ラウンド | 額 | 主な投資家 | 評価額 | 出典 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| 2006〜2008 | 自己資金・エンジェル(Series A 相当) | [不明](Clay は 2008-06 の Series A を「非開示」、2008-12 に $1.5M の負債と記載。Dealroom は Series A $1.3M・$1.5M の2件) | Michael & Xochi Birch(Bebo)、Jeff Clavier、Jawed Karim、David Sacks、Keith Rabois、Ron Conway、Saran Chari、Joe Greenstein | [不明] | [公式ブログ(2009-11-09)](https://www.eventbrite.com/blog/?p=49641); [Clay](https://clay.com/dossier/eventbrite-funding) [二次] |
| 2009-11-04 | Series C | $6.5M | Sequoia Capital(Roelof Botha が取締役) | [不明] | [TechCrunch](https://www.techcrunch.com/2009/11/04/eventbrite-gets-a-6-million-infusion-from-sequoia-capital); 累計 $8M 超 |
| 2010-10-06 | Series D | $20M | DAG Ventures(主導)、Sequoia、Tenaya Capital | [不明] | [TechCrunch](https://techcrunch.com/2010/10/06/eventbrite-20-million); 累計 $29.5M |
| 2011-03(Wikipedia)/ 2011-05(Clay) | Series E | $50M | Tiger Global(主導) | [不明] | [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite); [Clay](https://clay.com/dossier/eventbrite-funding) [二次] |
| 2013-04-22 | 成長資金(Clay は Series F) | $60M | Tiger Global(主導)、T. Rowe Price(新規)、Sequoia、DAG、Tenaya | [不明] | [公式ブログ](https://www.eventbrite.com/blog/?p=49589); 累計 $140M |
| 2014-03-13 | 非公開の追加ラウンド | $60M(Fortune 初報は約 $50M) | Tiger Global、T. Rowe Price(既存。他の既存投資家は不参加) | $1B 超(報道) | [TechCrunch](https://techcrunch.com/2014/03/13/eventbrite-50-million-1-billion-valuation); 累計 $190M |
| 2017-09 | Series G | $133.9M(純額。報道は $134M) | [不明](Crunchbase News は主要既存投資家を Sequoia・Tiger Global・DAG と記載) | $1B 超(報道) | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [Crunchbase News](https://news.crunchbase.com/news/a-quick-peek-at-eventbrites-s-1/) |
| 2017-06 / 2018-05 | 借入(Western Technology Investment) | $60.0M / $15.0M(2018-06-30 時点の元本残高 $74.2M) | WTI | — | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm)(リスク要因) |
| 2018-09-20 | IPO(NYSE: EB) | 10M 株×$23=$230M(売出し)。追加売出しを含め 11.5M 株、純手取り $246.0M(10-Q 要約)。目論見書の見積もり純手取りは約 $209.4M(10M株の場合) | — | IPO 価格時 $1.76B。初日終値 $36.50(+59%)、時価総額は約 $3B(報道の概算) | [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [Q3 2018 10-Q](https://www.sec.gov/Archives/edgar/data/0001475115/000147511518000008/ebform10-qxq32018093018.htm) [検索要約]; [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/) |
| 2020-06 / 2021-03 | 転換社債 | $150M(5.000%、2025満期)/ $212.75M(0.750%、2026満期) | — | — | [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm) |
| 2025-12-02 | Bending Spoons による買収(現金) | 約 $500M、1株 $4.50(約 $2.50 近辺から約8割プレミアム) | Bending Spoons | IPO 時評価額 $1.76B の約28% | [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/) |

- [事実] 累計: IPO 前の優先株の調達(純額)は $334.0M(2018-06-30 時点)。Wikipedia も累計 $334M と記載。 — [424B4](https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm); [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite)
- [事実] IPO 直前の主な株主構成の見通し: Hartz 家が約35%、Tiger Global と Sequoia が各約20%(Motley Fool の推計)。 — [Motley Fool(2018-08-30)](https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx)
- [事実] IPO 時点の財務: 現金約 $260M、負債 $70M 未満、2017年 FCF 約 $21M、国際売上比率 30%。 — [Motley Fool(2018-08-30)](https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx); [Crunchbase News](https://news.crunchbase.com/news/a-quick-peek-at-eventbrites-s-1/)
- [事実] 損益: 2016〜2025年はすべて GAAP 通期赤字(2016年 -$40.4M から 2025年 -$10.5M)。Adjusted EBITDA は 2017〜2018年に黒字、2019〜2020年に赤字、2021年以降黒字。 — 上表の各10-K
- [事実] 初期の資金効率: 2010-03 時点で累計 $10M 未満・手元約 $7M で GTS 年約 $200M 規模に到達(Series D 前)。Series D・E の大型調達は海外展開・発見機能・ソーシャル機能に充当すると説明。 — [Mixergy](https://mixergy.com/?p=6825); [TechCrunch(2010-10-06)](https://techcrunch.com/2010/10/06/eventbrite-20-million); [公式ブログ(2013-04-22)](https://www.eventbrite.com/blog/?p=49589)

#### 転機・失敗・停滞

- [事実] 買収の統合失敗(Ticketfly): 2017年に $201.1M で買収。2018-06 の不正アクセスで一時停止し統合が遅れ、2018-11 に Ticketfly の停止を決定。2019年 Q1 は「プラットフォーム停止に向けた意味のある移行ロス」と警告し、Q2 2019 のガイダンスは純収益 $74〜78M。2019年3月に株価が IPO 価格割れ。2019年は純収益 +12%(2018年 +45%)・純損失 $68.8M・Adjusted EBITDA -$5.6M。会場向けの箱売りの要件(指定席・複数入口のリアルタイム報告など)が想定以上に難しかったと分析する記事がある。 — [10-K FY2019](https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm); [Q1 2019 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511519000014/ebshareholderletter1q19.htm); [CNBC(2019-03-08、検索要約)](https://www.cnbc.com/2019/03/08/eventbrite-plunges-after-revealing-ticketfly-merger-challenges.html) [二次]; [Digital Music News](https://www.digitalmusicnews.com/2019/05/02/eventbrite-stock-woes/) [二次]
- [事実] 2018年4月: 加盟店契約の「イベント録画の権利」条項で炎上し、同社が削除。 — [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite)
- [事実] コロナ: 2020年の純収益 $106.0M(-68%)、有料チケット 47.1M(-57%)、純損失 $224.7M、Adjusted EBITDA -$134.1M。2020-04 に約45%解雇(営業の約9割を含むとの報道)、$100M の年換算コスト削減。一方で S&M は 2020年に売上比 79%(払戻し・前払い引当を含む)。2021年 +77%、2022年 +39%で回復。 — [10-K FY2021](https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm); [Demand Gen Report](https://www.demandgenreport.com/industry-news/eventbrite-lays-off-45-of-workforce-in-response-to-covid-19/6185/) [二次]
- [事実] 2023年の手数料変更(成長への影響の観点): 2023年に値上げ+主催者手数料(無料イベント25人超を含む)を導入し、2023年は有料チケット +7%・純収益 +25%(単価 $3.00 → $3.49 が主因)。2024年は有料チケット -10%、純収益はほぼ横ばい($325.1M)。2024年 Q2 に経営陣が「価格モデルと主催者手数料が、クリエイター獲得・維持を阻害し、在庫・ロイヤルティ・チケット量に不当に大きな影響」と認め、2024-09-04 に撤回。2024年の有料クリエイターは 368,000(-7%)。撤回後も 2025年は有料チケット -6%、純収益 -10%(約 $20M の売上逆風)。同社の win-back キャンペーンは 14万枚超の有料チケットを戻した(Q2 2024、既存ノート由来)。 — [10-K FY2023](https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm); [10-K FY2024](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000026/eb-20241231.htm); [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm); [Q2 2024 決算コール(既存ノート由来)](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock)
- [事実] 構造的な停滞要因: Google 自然検索と App Store・Google Play への依存、AI の発見インターフェースによる流入変化のリスク(10-K)。主催者の収益集中(有料クリエイターの13%が有料チケットの約60%、2025年 Q3 発言、既存ノート由来)。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm); [Q3 2025 決算コール(既存ノート由来)](https://www.marketbeat.com/earnings/reports/2025-11-6-eventbrite-inc-stock)
- [事実] 人員: 2019年 1,140人 → 2021年は約40%減(2020年の削減) → 2023年 866人 → 2025年 636人。Wikipedia は「2019年に8%解雇」と記載するが、出典の日付は 2023-03-01 で時期の誤りの可能性がある。 — [10-K FY2019](https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm); [10-K FY2021](https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm); [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)(既存ノート由来); [Wikipedia](https://en.wikipedia.org/wiki/Eventbrite)
- [事実] 買収後(2025-12〜2026): 新体制は旧チームの大半と離別し、少人数で速く動く方針。優先5領域に「リーチ&発見(SEO を含む)」。Julia Hartz の去就は公式ブログでは触れられず、TickPick は退任と記すが一次確認できず。1枚あたり手数料(3.7%+$1.79、決済 2.9%)は変更なしとの競合の報告(2026-07)。値上げ予測は競合ブログの推測で未確認。 — [Eventbrite 公式ブログ(2026-04-13)](https://www.eventbrite.com/blog/whats-next-at-eventbrite/); [TickPick(既存ノート由来)](https://www.tickpick.com/blog/organizer/eventbrite-2026-fee-changes)
- [事実] 買収価格の評価: 1株 $4.50(IPO 価格 $23 の約2割)、約 $500M。上場後の株価は 2019年に $20 前後、2021年に再度 $20 前後、2022年以降は下落傾向(Skift)。 — [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/)

#### 出典(URL と日付)

一次資料(SEC・同社):
- Eventbrite 424B4(IPO 目論見書、2018-09、全体の約 36 万字のうち冒頭〜MD&A を読了。Business 節は取得上限で未読): https://www.sec.gov/Archives/edgar/data/0001475115/000119312518277997/d618448d424b4.htm
- 10-K FY2018(2019-03): https://www.sec.gov/Archives/edgar/data/1475115/000147511519000007/ebform10-kx2018123118.htm
- 10-K FY2019(2020-03): https://www.sec.gov/Archives/edgar/data/1475115/000147511520000021/eb-20191231.htm
- 10-K FY2021(2022-03): https://www.sec.gov/Archives/edgar/data/1475115/000147511522000032/eb-20211231.htm
- 10-K FY2023(2024-02): https://www.sec.gov/Archives/edgar/data/1475115/000147511524000042/eb-20231231.htm
- 10-K FY2024(2025-02): https://www.sec.gov/Archives/edgar/data/1475115/000147511525000026/eb-20241231.htm
- 10-K FY2025(2026-03): https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm
- Q1 2019 株主レター(2019-05): https://www.sec.gov/Archives/edgar/data/1475115/000147511519000014/ebshareholderletter1q19.htm
- Q3 2018 10-Q(検索要約のみ): https://www.sec.gov/Archives/edgar/data/0001475115/000147511518000008/ebform10-qxq32018093018.htm
- Eventbrite 公式ブログ: Series C(2009-11-09) https://www.eventbrite.com/blog/?p=49641 ; $60M(2013-04-22) https://www.eventbrite.com/blog/?p=49589 ; Social Commerce Report(2012-10-23) https://www.eventbrite.com/blog/?p=49597 ; ブランド刷新(2025-03) https://www.eventbrite.com/blog/?p=436270 ; What's next at Eventbrite(2026-04-13) https://www.eventbrite.com/blog/whats-next-at-eventbrite/

報道・インタビュー:
- Mixergy: Kevin Hartz(2010-03-30) https://mixergy.com/?p=6825
- TechCrunch: Series C(2009-11-04) https://www.techcrunch.com/2009/11/04/eventbrite-gets-a-6-million-infusion-from-sequoia-capital ; Series D(2010-10-06) https://techcrunch.com/2010/10/06/eventbrite-20-million ; Facebook 統合(2010-09-23) https://techcrunch.com/2010/09/23/eventbrite-facebook ; 共有の価値(2010-10-14) https://techcrunch.com/2010/10/14/eventbrite-facebook-share ; Founder Stories(2011-06-17) https://techcrunch.com/2011/06/17/founder-stories-eventbrite-facebook ; 2014-03-13 https://techcrunch.com/2014/03/13/eventbrite-50-million-1-billion-valuation
- Entrepreneur(NBC 転載、2012-12-14): https://www.nbcnews.com/news/amp/wbna50196531
- Fortune(2013-04-16): https://fortune.com/2013/04/16/eventbrite-just-the-ticket-for-smaller-events ; Fortune(2016-04-21): https://fortune.com/2016/04/21/eventbrite-ceo-julia-hartz ; Fortune(2023-10-02): https://fortune.com/2023/10/02/julia-hartz-eventbrite-ceo-powering-everyday-life-events
- VentureBeat(2013-09-03): https://venturebeat.com/technology/eventbrite-makes-first-acquisitions-in-7-years-buys-lanyrd-and-eventioz ; VentureBeat(2017-05-19): https://venturebeat.com/business/eventbrite-events-on-facebook-result-in-2x-the-ticket-sales
- SmartCompany(2014-03-19): https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/
- Motley Fool(2018-08-30): https://www.fool.com/investing/2018/08/30/eventbrite-going-public-heres-what-you-need-to-kno.aspx ; (2018-08-31): https://www.fool.com/investing/2018/08/31/eventbrite-carves-out-its-niche-in-the-middle-mark.aspx
- Crunchbase News(2018-08-23): https://news.crunchbase.com/news/a-quick-peek-at-eventbrites-s-1/
- Skift(2025-12-02): https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/
- Adam Mendler による Julia Hartz 回(2022-06-21): https://www.adammendler.com/blog/julia-hartz/
- Wikipedia: https://en.wikipedia.org/wiki/Eventbrite ; Lanyrd https://en.wikipedia.org/wiki/Lanyrd

本文を読めなかった(検索結果の要約のみ)で補った出典: Clay https://clay.com/dossier/eventbrite-funding ; hostmds https://blog.hostmds.com/2011/01/eventbrite-ticket-sales-grossed-nearly-207-million-in-2010/ ; Demand Gen Report https://www.demandgenreport.com/industry-news/eventbrite-lays-off-45-of-workforce-in-response-to-covid-19/6185/ ; CNBC(2019-03-08) https://www.cnbc.com/2019/03/08/eventbrite-plunges-after-revealing-ticketfly-merger-challenges.html ; Digital Music News(2019-05-02) https://www.digitalmusicnews.com/2019/05/02/eventbrite-stock-woes/ ; Destination CRM(Boost, 2021-05) https://www.destinationcrm.com/Articles/CRM-News/CRM-Across-the-Wire/Eventbrite-Launches-Eventbrite-Boost-146744.aspx ; Eventbrite ブログ(Ads) https://www.eventbrite.com/blog/?p=412664 ; Business Wire(RECONVENE, 2021-04-21) https://www.businesswire.com/news/home/20210421006043/en ; Amex(Julia Hartz) https://americanexpress.com/en-us/business/trends-and-insights/articles/julia-hartz-of-eventbrite-building-a-business-full-of-vibrant-energy ; FF.co https://ff.co/julia-hartz-eventbrite/

取得に失敗した資料: Stanford eCorner・STVP の Hartz 講演書き起こし(403/404)、NBC/Fortune 以外の一部の TechCrunch 記事、CNBC 2019 本文(403)、IQ Magazine 2026-04(403)。

---

### Inferences

- [推測] Eventbrite の初期成長は「2つのループ」で説明できる。(a) 参加者が主催者に転じるループ(主催者の約70%が参加経験・口コミ経由、無料で試して有料へ約17%)と、(b) 共有ループ(Facebook 共有1回 = 平均 $1.78〜$4.15 の売上と7〜17回の訪問)。広告費ではなく製品内の導線でユーザーを獲得したため、S&M は売上比で36%(2016)→27%(2017)に下がった。ただし S&M の定義が組み替えられており、純粋なマーケ費の比較はできない。
- [推測] 創業期の資本効率の高さ(約2年のブートストラップ、$10M 未満で GTS 年約 $200M)は、「最初に主催者が稼げる(もっと売れる)」という価値が明確で、手数料が売上に連動する(売れた分だけ支払う)料金設計だったことが大きい。
- [推測] 2017〜2018年は「成長を買う」局面で、買収で国際比率(18% → 30%)と音楽領域を伸ばしたが、Ticketfly では統合・セキュリティ・会場向け要件の見積もりが甘く、IPO 直後に成長鈍化・株価下落を招いた。コロナと 2023年手数料変更はいずれも「主催者の供給(イベント数)を落とすと、チケット数と検索・発見の在庫が同時に減る」ことを示す。
- [推測] 2023年の失敗は、既に最大の供給源(無料公開の入口)に課金したこと。入口の層は主催者の約17%が有料に転じる母集団でもあり、短期の単価上昇($3.00 → $3.49)と引き換えに長期の主催者基盤を失った。撤回後も回復していない(2025年 -6%)点は、離脱した主催者が戻りにくいことを示唆する(10-K のリスク記述とも整合)。

#### Shokujii への示唆(推測、5点以内)

1. 「参加者の体験の中に次の幹事を生む導線」を最優先にする。Eventbrite は主催者の約70%が他者のイベントに参加した経験か口コミで知った(2016年の同社調査)。Shokujii でも、注文完了画面・参加者向けメール・イベントページの末尾に「自分も幹事になる」導線を置き、既存の幹事の周囲(会社の同僚、サークル、友人)から増やす。[推測、一般化には注意: Eventbrite は 2016年の英語圏調査]
2. 入口は無料のまま保ち、課金は成果に連動させる。Eventbrite は無料イベントを開いた主催者の約17%が12か月以内に有料イベントを開いた。2023年に無料イベントへ手数料を課して主催者・チケット量が減り、撤回後も回復しなかった。Shokujii は幹事の立てる手間を無料にし、収益はメニュー注文など発生ベースにするほうが安全。[推測]
3. 「共有」を機能にする。Eventbrite は Facebook ログインで友人が参加するイベントを表示し、共有1回の価値を測った($2.52、訪問11)。日本では LINE・Instagram 等が対象になる。注文確定後に共有しやすい画像・リンクを出す、参加者一覧(誰が来るか)を見せる、共有経由の来訪・注文を計測する、までを最初の機能にする。[推測、日本での効果は未検証]
4. SEO は初日から設計するが、依存リスクも見ておく。Eventbrite は初期仮説が検索で、2010年時点の流入1位は Google 自然検索、10-K は今も Google 依存をリスクに挙げる。Shokujii の検索流入(3か月で約645クリック)を伸ばすには、都市×ジャンル(例: 渋谷 × 誕生日会)の一覧ページ、Event 構造化データ(schema.org)、イベント終了後も残る開催実績ページが有効と考えられる。ただし Eventbrite の「構造化データ後に流入約2倍」の事例は他施策との切り分けがなく、効果の見込みは保守的に置く。[推測]
5. 小さく始め、買収・大口営業・値上げは後回しにする。Eventbrite は約2年のブートストラップ+累計 $10M 未満(2010-03)で月間UU 300万・GTS 年約 $200M に達した。営業は標的型にとどまり(2017年は主催者の95%超がセルフ登録で、自己登録主催者の売上が54%。残り46%に営業が関与する大口が含まれると Motley Fool は説明)、営業費は約 $9M だった。Ticketfly($201M)の統合失敗やコロナ・手数料変更の失敗は、規模拡大後に取り返しがつかなくなる例。Shokujii は店舗(パートナー)側の営業も必要になるが、まずは自己登録+口コミで両面の最小密度を作る(例: 特定の地域・業態の幹事+数店舗)ことが、低予算では現実的と考えられる。[推測]

---

### Gaps

- 2006〜2009年の実数: 最初の1,000人・10,000人の主催者に到達した時期、最初の年の取扱チケット数・売上は確認できなかった(2009-11 の「数万の主催者」「月間UU 300万」が最古の公式数値)。
- Series A・B の金額・日付・評価額、各ラウンドの評価額(2014年の $1B 超以外)、Series G の投資家と評価額は非開示または未確認。Clay・Dealroom の初期ラウンドは二次情報で相互に不一致。
- マーケ施策費(marketing programs spend)の総額は一度も開示されていない。S&M は人件費・チャージバック・前払い引当を含み、定義が 2019年に組み替えられた(2018年: $69.8M → $83.4M)。理由は10-Kの抜粋では確認できなかった。
- 年次の GTS: 2010年($206.8M、二次)、2013年($1B 超)、2023〜2025年(それぞれ $3.5B 超・$3.2B 超・$3.0B 超)は取得。2011・2012・2014〜2022年の通年値は一次資料で確認できていない(2011年 20M 枚/$360M、2012年 36M 枚/$600M は検索要約のみで、Entrepreneur の「50 millionth ticket」とも表記が食い違う)。2017年の累計 $10B 超(Motley Fool)と 2016年の $5B 超(Fortune)の整合も未確認。
- 424B4 の Business 節(取得上限で未読)にあるはずの「他の主催者のイベントで知った」割合の元データ、営業インセンティブ($9M/$6.3M)は、Motley Fool と FY2018 10-K 経由の二次的確認に留まる。
- Ticketfly ののれん減損: 2020・2021年の10-Kは「減損なし」と記載。2019年以前の処理は未確認。Ticketfly が稼いだ収益の実績も不明。
- 購入後の共有が購入前の10倍、購入後共有は1枚あたり+20%の売上、という主張は検索要約のみで出典の本文を確認できなかったため本文に載せていない。
- 創業者の証言の原典(Stanford eCorner・STVP の書き起こし、How I Built This、First Round Review、Acquired など)は取得できなかった(403/404 または該当エピソードを特定できず)。Julia Hartz の「2年で $250,000 未満・損益均衡」は二次情報のみ。
- マスメディア(TV・屋外広告)の出稿は、2025年のブランドキャンペーンを含めて確認できなかった。費用も不明。
- Bending Spoons 買収後の料金改定・主催者数の変化(2026年7月以降の確認可能な一次情報)と Julia Hartz の去就は一次資料で確認できていない。
- 「2019年に8%解雇」(Wikipedia)の日付は誤りの可能性がある(出典の日付は 2023年)。
- 2023年の主催者手数料の導入時期は、10-K FY2023 が「2023年6月」、Skift が「2023年後半」と記載し、食い違う。
