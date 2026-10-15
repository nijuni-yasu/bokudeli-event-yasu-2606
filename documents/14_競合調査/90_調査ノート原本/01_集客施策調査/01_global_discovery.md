# 世界のイベント告知・チケッティング・コミュニティ型プラットフォームの「参加者獲得」と「主催者獲得」(01: グローバル発見系)

調査時点: 2026-10-11(現在日)。対象: Eventbrite / Meetup / Facebook Events・Instagram(Meta) / Fever / Dice / AllEvents(必須6件)、追加: Luma / Universe / Ticketmaster / Google イベント構造化データ。

## 読み方・信頼性の注記(最初に読むこと)

- [事実] = 一次または二次ソースに明記された内容。[推測] = 本ノート作成者の推論。「[自社主張]」= 企業が自社で述べた数値(第三者検証なし)。「[競合発信]」= 競合他社のブログ等(利害関係あり)。
- [要確認] = 検索ツールの要約結果でしか確認できていない、または複数ソースで矛盾する項目。レポート本文で使う場合は注記を残すこと。
- 本セッションではウェブ検索の上限に達し、後半は WebFetch(既知URLの直接取得)のみで調査した。このため Nextdoor events、Instagram の最新イベント機能、Meta のイベント利用者数は調べられていない(各 Gaps 参照)。
- 日本語表記+原語併記。金額は原通貨表記。

---

## 1. Eventbrite

### Takeaway
Eventbrite は「主催者の無料公開+購入者負担の手数料(take rate 約10%)」で供給を集め、近年は Google 自然検索への依存を TikTok・アプリ・Eventbrite Ads・ML 推薦で補う。2023年の無料イベント主催者手数料の導入が主催者・在庫・チケット量を落とし、2024年9月に撤回(約$20M の売上減要因)。2026年3月に Bending Spoons が約$500Mで買収し、レイオフと「信頼性・主催者ツール・発見(SEO含む)」への再注力を公表した。

### Cited Findings

#### 基本情報(運営/規模/収益モデル)
- [事実] 運営は Eventbrite, Inc.(2006年創業、サンフランシスコ)。2018年9月20日に NYSE 上場(IPO価格 $23)。2025年12月2日に Bending Spoons による現金買収(1株 $4.50、約$500M)に合意、2026年3月10日に完了し非上場化。 — [Wikipedia: Eventbrite](https://en.wikipedia.org/wiki/Eventbrite); [Skift (2025-12-02)](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/); [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)(合併完了日 2026-03-10 の注記)
- [事実] 2025年: クリエイターは約460万件のイベントを開催し 2.58億枚のチケット(無料含む)を発行、チケット総売上(gross ticket sales)は$30億超。純収益 $291.8M(2024年 $325.1M、約-10%)、純損失 $10.5M(2024年 $15.6M)。海外売上比率 28%。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 有料チケット数: 2025年 78,862千枚(2024年 83,834千枚、-6%)。2024年は 2023年比 -10%。 — [10-K FY2025 MD&A](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 2024年通年: 有料クリエイター 368,000(-7%)、take rate 9.9%(+70bp)、有料1枚あたり純収益 $3.88(前年 $3.49)。 — [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm)
- [事実] 2025年 Q3: 有料チケット 19.1M(-3%)、有料クリエイター 162,000(-1%未満)、純収益 $71.7M(-8%、組織手数料廃止が一因)、gross ticket sales $748.3M(-6%)、Eventbrite Ads は前年比+38%。 — [Q3 2025 決算プレスリリース](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000114/ebq32025earningspressrelea.htm)
- [事実] 2024年の月間平均ユーザー 8,900万、配布チケット 2.7億枚、イベント 470万超、約180か国(同社プレスリリース 2025-03-04)。2025年 Q3 の月間平均ユーザーは 9,200万(CEO発言)。 — [プレスリリース](https://www.silicon.co.uk/press-release/get-into-it-eventbrites-reimagined-app-makes-discovering-your-next-favorite-live-experience-as-enjoyable-as-being-there); [Q3 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-11-6-eventbrite-inc-stock)
- [事実] 供給の集中: Julia Hartz は「有料クリエイターの13%が有料チケットの約60%、チケット手数料総額の約半分を生んでいる」と発言(2025年Q3決算コール)。別資料(Q4 2024 株主レター)は「上位クリエイター(全体の40%未満)が2024年有料チケットの4分の3超」と記載(指標・時点が異なる)。 — [Q3 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-11-6-eventbrite-inc-stock); [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm)
- [事実] 料金(米国等の公式ページ、2026-10取得): サービス料 3.7% + $1.79 /有料チケット、決済手数料 2.9% /注文。デフォルトは購入者負担、主催者が吸収も可。無料イベントは無料(無制限公開)。Eventbrite Pro のメール配信は月$15〜(1日最大1万通)。対象市場は US/CA/AU/NZ/UK/IE。大型イベントは Contact Sales(セールスパートナーシップ、個別料金)。 — [Eventbrite 料金ページ](https://www.eventbrite.com/organizer/pricing/)
- [事実] 10-K は手数料を「チケット当たり固定額+価格の一定割合」と説明、無料公開層(free tier)があり、追加メール送信用のサブスクリプションアドオンがあると記載。従業員 636名(米 319/米国外 317、2025年末)。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 売上・マーケ・サポート費 $81.2M(2025年、-12%)。マーケ施策費は内訳非開示。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 現金 $299.9M のうち $253.6M はクリエイターへの預り金。主催者への前払い・非回収型支払いが貸借上に存在(Advance payouts 残高 $101.1M、非回収型支払い純額 $6.5M、クリエイター前払い純額 $8.6M)。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実・二次] 2025通年の Adjusted EBITDA $25.3M(2024年 $35.1M)との第三者要約あり(原資料未確認)。 — 検索要約(出典: 2026-03 の第三者決算要約)[要確認]

#### 参加者獲得 - 機能(プロダクト実装)
- [事実] 新アプリ(2025-03-04発表): Discover タブ(パーソナライズ推薦)、It-Lists(文化の目利き・地元専門家が作る厳選リスト、12大都市で60超)、Book It(チェックイン時間・年齢制限・駐車・FAQ・主催者動画を掲載)、連絡先同期で友人を発見し「友人が参加するイベント」を表示、Saved の共有。 — [Eventbrite プレスリリース (2025-03-04)](https://www.silicon.co.uk/press-release/get-into-it-eventbrites-reimagined-app-makes-discovering-your-next-favorite-live-experience-as-enjoyable-as-being-there)
- [自社主張] Q4 2024: ML 推薦等でディスカバリー経由のチケット販売が前年比+10%、アプリ利用者は来訪頻度約2倍・支出約1/3増。Q1 2025: アプリ経由有料チケット+11%、discovery ユーザー+16%、アプリユーザーは Web より購入確率3倍。 — [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm); [Q1 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock)
- [事実] SEO/地域ハブ: ニューヨークの都市ページ(2026-10取得)は、パンくず(Home / United States / Things to do in New York / Events in New York)、「Best events in New York」ヒーロー、SEO導入文、近隣(neighborhood)リンク、複数カルーセル(After 8pm / Editor's Picks / Popular in New York / Online Events)、イベントカードのステータスバッジ(Going fast / Almost full / Just added)、約18のランドマーク(POI)リンク、8問のFAQブロック、フッターに他都市・カテゴリ導線。「Promoted」タグ付き広告枠と、主催者名+フォロワー数の表示あり。 — [Eventbrite NY ページ](https://www.eventbrite.com/d/ny--new-york/events/)
- [事実] 10-K は「Google など検索エンジンに大きく依存(主に自然検索)」「App Store / Google Play 経由のダウンロードに依存」と明記。競合分類として、他社チケッティング、Google(検索)、地域検索、SNS、AI対話型の発見インターフェースを挙げる。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] Lineup(音楽主催者・会場がアーティスト情報を付与し、第三者の発見プラットフォームへ配信)、Timed Entry(2024年10月〜)、BNPL(一部市場)。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm); [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm)
- [事実] 2026年4月(買収後): チケットの Apple/Google Wallet 保存、(近日)オフライン表示。確認メールの明確化。主催者プロフィールページ刷新(カバー画像・ギャラリー・主要指標・外部リンク)、Top Organizer バッジ、QRコード付きフライヤー作成ツール。 — [Eventbrite 公式ブログ "What's next at Eventbrite" (2026-04-13)](https://www.eventbrite.com/blog/whats-next-at-eventbrite/)
- カレンダー連携・口コミ(レビュー)・ウィッシュリスト相当: Eventbrite 側の機能として今回の取得資料では確認できず(Saved は存在)。

#### 参加者獲得 - 施策(マーケ・BD・パートナー)
- [事実] 10-K: マーケ手段は SEO、SEM、アフィリエイト&ディスプレイ、ソーシャル、メール、デジタル動画。「消費者需要を高めるためマーケ支出を増やす計画」。Google・TikTok は競合であり「消費者リーチで依存するパートナー」。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 2025年: ブランドキャンペーンとアプリ刷新を Q1 に実施。Q3 には「パフォーマンスマーケ起点の消費者有料注文が前期比+28%」(CEO発言)。2026年はよりパーソナライズした推薦を予定(2025年Q3時点)。 — [Q1 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock); [Q3 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-11-6-eventbrite-inc-stock)
- [自社主張] TikTok 提携(2024年7月発表)は「1日1億超のインプレッション」(Q2 2024 コール)。主催者はイベントリンクを TikTok 動画に貼れる(検索要約・要確認)。 — [Q2 2024 決算コール](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock)
- [事実] ソーシャル共有ツールを「需要創出戦略の要(cornerstone)」と位置づけ(CEO発言)。 — [Q1 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock)
- [事実] 歴史: 創業初期は SEO・コンテンツマーケで「検索と発見」に最適化 → Facebook・Twitter の普及で「参加者が行き先を共有すること」が成長の転換点に(Julia Hartz、2014年)。2011年には Facebook が最大の流入源(「Facebook is the number one driver of traffic」)。 — [SmartCompany (2014-03-19)](https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/); [TechCrunch (2011-06-17)](https://techcrunch.com/2011/06/17/founder-stories-eventbrite-facebook)
- [事実・二次] ソーシャル共有の価値(時点不明、同社「Social Commerce Report」を引用した記事): Facebook シェア1回あたり追加チケット売上約$4.15・訪問14、Twitter 約$1.85・33訪問、LinkedIn 約$0.92・10訪問。同記事は Eventbrite を「Facebook の events API に最初にアクセスできた企業」と記し、2008年に Facebook Connect と連携したと記述(記事の記述であり第三者検証なし)。 — [7x7](https://www.7x7.com/amp/co-founder-julia-hartz-on-her-role-as-the-operator-at-eventbrite-1786195744)

#### 主催者獲得 - 機能
- [事実] 公式の主催者機能: AI イベント作成、カスタムページ、複数チケット種別、独自登録フォーム、埋め込みチェックアウト、アドオン販売、プロモコード、スマートオーディエンス、自動リマインダー、Facebook/Instagram 広告ツール、TikTok プロモーション、メール配信、オーガナイザーアプリ、モバイルチェックイン、ウェイトリスト、事前ペイアウト(pre-event payouts)、データ/レポート。App Marketplace に100超のアプリ連携。 — [Eventbrite 機能ページ](https://www.eventbrite.com/features/); [料金ページ](https://www.eventbrite.com/organizer/pricing/); [Eventbrite パートナーページ](https://www.eventbrite.com/l/partner-program)
- [事実] 2024-25年の新機能: Instant Payouts(オンデマンド出金)、Stripe POS 連携、強化レポート、24/7ライブサポート、戦略的サクセスパートナー(Q4 2024 レター)。2026年4月: イベント作成の読み込み時間-40%、保存してから公開、チェックアウト質問の順序変更、チェックイン時間窓・複数スロットスキャン(予定)。 — [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm); [Eventbrite 公式ブログ (2026-04-13)](https://www.eventbrite.com/blog/whats-next-at-eventbrite/)
- [事実] Eventbrite Ads: 主催者がイベントをホーム・カテゴリ・類似イベント・アプリ・検索結果の目立つ位置に有料掲載。デフォルト半径50マイル。入札/予算は日額、選択市場のみ。2023年コールでは広告主の80%がクリック課金(CPC)。同社事例のCPC は $0.50〜$1.67(自社事例のため一般化不可)。 — [Eventbrite ヘルプ: Eventbrite Ads(検索要約)](https://www.eventbrite.com/help/en-us/articles/202739/)[要確認]
- [自社主張] Ads: 2024年 +83%、Q2 2024 に売上 $2.9M・広告主19,500超、広告利用クリエイターは1人当たり売上+27%。Q3 2025: 大型クリエイターの広告 ROAS 200%超。 — [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm); [Q2 2024 決算コール](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock); [Q3 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-11-6-eventbrite-inc-stock)

#### 主催者獲得 - 施策(手数料設計・営業・プログラム)
- [事実] 手数料設計: 無料イベントは無料、有料は購入者負担が基本。2023年に「無料イベントでも25人超で主催者手数料」を導入 → Q2 2024 に経営陣が「組織手数料の導入がクリエイター獲得・維持を阻害し、在庫・クリエイターのロイヤルティ・チケット量に不当に大きな影響」と認め、2024年9月4日に手数料なしの free tier を再導入(容量上限撤廃)。2025年ガイダンスで約$20M の収益逆風。 — [Q2 2024 決算コール](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock); [Q4 2024 株主レター](https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm); [Skift](https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/)
- [事実] 営業: 有料クリエイターは 177,000(2024 Q2、前年 189,000)と減少する一方、セールス経由の新規予約は前年比約+60%。Q1 2025 は「Self Sign-On(セルフ登録)チャネルの再活性化」を近い目標とし、成長は「100〜1,000人規模のイベントを頻繁に開く大型クリエイター」が最も収益性が高いコホートと説明。Q4 2024 レターでも「営業チーム拡大」「頻繁なクリエイター・戦略的在庫を優先」。 — [Q2 2024 決算コール](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock); [Q1 2025 決算コール](https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock)
- [事実] 10-K: クリエイター獲得はセルフサービス中心(「最小限のトレーニング・サポート・プロフェッショナルサービス」)で広い裾野を取り、営業組織は大型・高頻度クリエイターを担当。前払い・非回収型支払いの残高が存在(上記)。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実・二次] アフィリエイト: 「主催者を紹介する B2B アフィリエイト」は FlexOffers 等のネットワーク経由で新規有料公開に $8 程度の成果報酬との掲載があるが、「公開プログラムはない」とする記述もあり不一致。イベント単位の紹介リンク機能(主催者が販売者へ報酬を支払う)は2019年の記事に記載。 — 検索要約(FlexOffers/Affonso/Hypebot)[要確認]
- [事実] 「参加者→主催者」導線: 都市ページ・ヘッダーに「Create Events」「Post your event online」「Sell Tickets Online」が常設。 — [Eventbrite NY ページ](https://www.eventbrite.com/d/ny--new-york/events/)
- [事実] 初期の主催者獲得: 「最初は顧客獲得が難しく、競合は Email と Excel だった」。最初のユーザーは少数のテックイベント、その後は大会場ではなく独立系の主催者に狙いを定めた(Julia Hartz、2014年)。 — [SmartCompany (2014-03-19)](https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/)
- [事実] 買収後(2026-04-13): 優先5領域(信頼性・主催者ツール・リーチ&発見(販促・アトリビューション・リスティングSEO)・チケット体験・チェックアウト)。「何百人ものクリエイターに聞き、何千件のサポートケースを分析」。「大半の買収前チームと別れる(part ways)」「より小さく速いチーム」。 — [Eventbrite 公式ブログ (2026-04-13)](https://www.eventbrite.com/blog/whats-next-at-eventbrite/); [New Industry Focus](https://newindustryfocus.com/articles/bending-spoons-lays-off-eventbrite-staff-after-acquisition)

#### 弱み・失敗
- [事実] 無料イベント手数料: 上記の通り、自社が「不可避の大きな悪影響」と認めて撤回。有料チケット数は 2023→2024 -10%、2024→2025 -6%、クリエイター数も減少。 — [Q2 2024 決算コール](https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock); [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 検索エンジン依存、ユーザー獲得をアプリストアに依存(10-K リスク要因)。 — [10-K FY2025](https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm)
- [事実] 従業員 866名(2023年末)→ 636名(2025年末)、買収後に人員の大部分が削減(米国・インド拠点への影響は Ticket Tailor / IQ Magazine の報道ベース、人数は非公表)。新責任者 Andrea Parodi(公式ブログ上の肩書は General Manager)。 — [heise (2026-04-14)](https://heise.de/-11257427); [Eventbrite 公式ブログ](https://www.eventbrite.com/blog/whats-next-at-eventbrite/)
- [競合発信] 買収後の料金: TickPick(競合)は「チケット単価の手数料(3.7%+$1.79)は変更なし、Flex プラン廃止、Pro $15〜$100/月は任意」と報告(2026-07-20)。同記事の試算では $20 のチケットの実効手数料は 15.6%($3.11)、$100 で 8.4%。Ticket Tailor(競合)は「確定した価格変更なし」としつつ Bending Spoons の過去パターンから値上げ・無料枠縮小を予測(2026-04-23)。いずれも予測は事実ではない。 — [TickPick](https://www.tickpick.com/blog/organizer/eventbrite-2026-fee-changes); [Ticket Tailor](https://www.tickettailor.com/blog/bending-spoons-acquires-eventbrite-what-does-this-mean)
- [競合発信] Bending Spoons の過去事例(Evernote の値上げ・人員削減、WeTransfer、Vimeo 等)からの類推が競合ブログに多い。 — [TicketPeak](https://ticketpeak.com/blog/what-eventbrite-users-should-know-about-the-bending-spoons-acquisition/)
- [事実] 評判傾向: Trustpilot 4.4/5(13,145件、1つ星22%)。不満は Web サイトの導線・購入時のエラー・広告ポップアップなど。手数料への言及は取得範囲では少ない(2026-10取得)。 — [Trustpilot: Eventbrite](https://www.trustpilot.com/review/eventbrite.com)
- [事実] 過去: 2018年4月、加盟店契約の「イベント録画の権利」条項で炎上し削除。2020年4月に従業員約45%をレイオフ(COVID)。 — [Wikipedia: Eventbrite](https://en.wikipedia.org/wiki/Eventbrite)

#### 出典(取得日はすべて 2026-10-11 または記載日)
- 10-K FY2025: https://www.sec.gov/Archives/edgar/data/1475115/000147511526000005/eb-20251231.htm
- Q3 2025 決算PR(2025-11-06): https://www.sec.gov/Archives/edgar/data/1475115/000147511525000114/ebq32025earningspressrelea.htm
- Q4 2024 株主レター(2025-02): https://www.sec.gov/Archives/edgar/data/1475115/000147511525000025/q4shareholderletterfinal.htm
- 決算コール(第三者書き起こし) Q2 2024: https://www.marketbeat.com/earnings/reports/2024-8-8-eventbrite-inc-stock / Q1 2025: https://www.marketbeat.com/earnings/reports/2025-5-8-eventbrite-inc-stock / Q3 2025: https://www.marketbeat.com/earnings/reports/2025-11-6-eventbrite-inc-stock
- 料金・機能: https://www.eventbrite.com/organizer/pricing/ , https://www.eventbrite.com/features/ , https://www.eventbrite.com/d/ny--new-york/events/
- 公式ブログ(2026-04-13): https://www.eventbrite.com/blog/whats-next-at-eventbrite/
- アプリ刷新PR(2025-03-04): https://www.silicon.co.uk/press-release/get-into-it-eventbrites-reimagined-app-makes-discovering-your-next-favorite-live-experience-as-enjoyable-as-being-there
- 買収: Skift https://meetings.skift.com/2025/12/02/bending-spoons-to-acquire-eventbrite-in-500-million-cash-deal/ , heise https://heise.de/-11257427 , New Industry Focus https://newindustryfocus.com/articles/bending-spoons-lays-off-eventbrite-staff-after-acquisition
- 競合発信: https://www.tickpick.com/blog/organizer/eventbrite-2026-fee-changes , https://www.tickettailor.com/blog/bending-spoons-acquires-eventbrite-what-does-this-mean , https://ticketpeak.com/blog/what-eventbrite-users-should-know-about-the-bending-spoons-acquisition/
- 創業期: https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/ (2014-03-19) , https://techcrunch.com/2011/06/17/founder-stories-eventbrite-facebook , https://www.7x7.com/amp/co-founder-julia-hartz-on-her-role-as-the-operator-at-eventbrite-1786195744
- 評判: https://www.trustpilot.com/review/eventbrite.com ; 沿革: https://en.wikipedia.org/wiki/Eventbrite

### Inferences
- [推測] 供給(主催者)側は創業期のボトルネックで、「参加者のSNS共有→新規流入→参加者が次の主催者候補」というループで解いた。現在は主催者基盤が広い一方、売上は上位13%の主催者に集中するため、営業・Ads・前払いは「大型・高頻度主催者」の囲い込みに振り向けられている。
- [推測] 無料イベントに主催者手数料を課すと「在庫(イベント数)が減り、購入者側の発見面が弱くなる」ことを自社データで認めている点が、無料開催を基本とするコミュニティ型サービスの最重要の教訓。
- [推測] Eventbrite の都市ページは、フッターの都市・カテゴリ導線、FAQ、近隣・POIリンクで SEO のロングテールを取る設計。ただし 10-K 自身が Google 依存をリスクと認めている。

### Gaps
- 有料クリエイター数の FY2025 確定値、take rate の FY2025 値は取得資料内に見つからず。
- Eventbrite の「カレンダー連携」「レビュー」「ウィッシュリスト」機能の公式記載は未確認。
- Eventbrite Ads の課金方式の最新公式記載(2023年の CPC 移行以降)は検索要約のみで直接確認できていない。
- アフィリエイト/パートナー制度の公式条件は不一致(上記)。Listener.com 提携(2025-11)の詳細は未取得。
- Bending Spoons 買収後の料金改定の公式発表は確認できていない(2026-10時点)。Julia Hartz の退任有無は TickPick のみの記載で未確認。

---

## 2. Meetup

### Takeaway
Meetup は「参加者(会員)は無料、主催者(organizer)が月額課金」という逆の収益構造で2005年から運営してきたため、供給(主催者)が支払い意思を持つかが常に論点。創業期は会場スポンサー・政治キャンペーン(Dean)などの塊で伸び、2013年時点では自社マーケ・PR・BD担当・広告を持たなかった(拡大は主催者・口コミ主導と推測)。近年(2019 RSVP有料化テスト、2024年6月の値上げ)は主催者の不満と競合への流出が目立つ。2024年1月から Bending Spoons 傘下(Eventbrite と同じ親会社)。

### Cited Findings

#### 基本情報
- [事実] 2002年6月創業(Scott Heiferman ら)。2005年初頭から主催者に課金開始。2009年7月に黒字化、年換算売上約$900万。2017年11月 WeWork が約$1.56億で買収、2020年3月に AlleyCorp 主導の投資家へ売却、2024年1月 Bending Spoons が買収。 — [Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup)
- [事実] 規模の推移: 2011年6月 9.2M ユーザー・6万超の meetup・毎分約30 RSVP。2013年 10M meetup・100M RSVP・約14万グループ(2013-11時点)・1日1万〜1.5万件。2017年 3,200万会員・25万超のグループ・月50万 meetup・182か国。2024年1月 6,000万超の登録会員。 — [Entrepreneur (2011-06)](https://www.entrepreneur.com/article/219753); [NBC (2013-12)](https://www.nbcnews.com/id/wbna53820139); [TechCrunch (2013-05)](https://techcrunch.com/2013/05/28/meetup-com-surpasses-100-million-rsvps-to-10-million-meetups); [Hackernoon (2017)](https://www.hackernoon.com/the-past-present-and-future-of-meeting-people-with-meetup-founder-scott-heiferman-ae7f08951be8); [BuiltIn NYC (2024-01-31)](https://builtinnyc.com/articles/meetup-bending-spoons-acquisition-20240131)
- [事実] 公式メディアページ(日付不明、2026-10取得): 5,200万超の会員、30万超のグループ、週10万超のイベント、193か国、1万都市。2024年の「6,000万超」と数値が食い違う(古い記述か、非アクティブ整理の影響か不明)。主催者数は非公開。 — [Meetup media](https://meetup.com/media) [要確認]
- [事実] 非アクティブアカウント整理: 3年以上非アクティブのアカウントを 2026年1月15日に無効化(主催者のメンバー数が一時的に減る)。「生涯会員数はグループのランキング指標ではない」と説明。 — [Meetup Product Updates](https://product.meetup.com/date/2025/12); [Meetup ヘルプ(検索要約)](https://help.meetup.com/hc/en-us/articles/360002862532-How-do-I-see-my-Meetup-group-s-stats)
- [事実] 主催者の料金(Meetup 公式ヘルプ、記事更新 2026-10-05): Standard は月$29.99〜 / 6か月$99.99〜 / 年$174.99〜。PRO は月$55/グループ〜(6か月契約で月$47)。2024年6月6日から値上げ(28日前に通知。既存 Standard は更新まで旧価格)。メンバー会費やイベント参加費で運営費を賄える旨を案内。 — [Meetup ヘルプ: Organizer Subscription prices](https://help.meetup.com/hc/en-us/articles/28677808413197); [Meetup ヘルプ: My subscription got increased](https://help.meetup.com/hc/en-us/articles/30923029605133)
- [事実] 2013年: 主催者は1/3/6か月で $19 / $45 / $72、参加者(約98%)は無料。主催者はサイト内で会費を集められ、処理手数料を Meetup が取る。 — [NBC (2013-12)](https://www.nbcnews.com/id/wbna53820139)
- [事実] 過去に第三者広告を会員向けメールに掲載、2026年初頭(相対表示「8か月前」)に削除。 — [Meetup Product Updates](https://product.meetup.com/) [推定時期は相対表示から算出]

#### 参加者獲得 - 機能
- [事実] ホーム: 10カテゴリ(Travel and Outdoor / Social Activities / Hobbies and Passions / Sports and Fitness / Health and Wellbeing / Technology / Art and Culture / Games / Career and Business / Science and Education)、位置情報ベースの検索、対面/オンラインの区分、「Find your people」(興味マッチング)、人気都市ページ、ローカルガイド、トピックページ、サイトマップ、iOS/Android アプリ。会員登録は無料。 — [Meetup ホーム](https://www.meetup.com/)
- [事実] RSVP 確認メールが Google カレンダーにイベントを自動追加(非Googleユーザーには .ics)。ウェルカムメールの不具合修正。 — [Meetup Product Updates](https://product.meetup.com/date/2025/12)
- [事実] グループ評価の公開: 主催者の平均評価・メンバーのイベントレビューを公開(「3月27日以降」の投稿のみ。相対表示は約1年前=2025年と推定)。 — [Meetup Product Updates](https://product.meetup.com/date/2025/12) [年は推定]
- [事実] グループの可視性は活動量・エンゲージメント・品質に依存、と説明(会員総数はランキングに使われないと説明)。 — [Meetup Product Updates](https://product.meetup.com/date/2025/12)

#### 参加者獲得 - 施策
- [事実] 2013年: マーケ・PR・BD・パートナーシップ担当は置かず広告も出さない、プロダクト集中、新入社員は近隣グループを訪問する「Meetup crawl」。海外成長が速い(フランス・スペイン・アジア・インド)。 — [NBC (2013-12)](https://www.nbcnews.com/id/wbna53820139)
- [事実] 2004年の Howard Dean 大統領選キャンペーンが利用し、ピーク時に14.3万人が Dean 支持者グループに参加。2017年2月に「#resist」1,000グループを自社が作成(トランプ入国禁止令への抗議調整)。 — [Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup)
- [事実] Bending Spoons 買収時の方針: 自社技術で国際展開、ホスト体験の改善、会員増。$50,000 の Meetup Community Fund を創設。 — [BuiltIn NYC (2024-01-31)](https://builtinnyc.com/articles/meetup-bending-spoons-acquisition-20240131)

#### 主催者獲得 - 機能
- [事実] ホームに「Start a new group」「Create your own Meetup group」が複数常設(参加者→主催者導線)。ホストは「既存の大きな観客にリーチする手段」と説明。 — [Meetup ホーム](https://www.meetup.com/)
- [事実] 最近の機能: 出席者リスト+QRコードチェックイン、イベント検索・日付フィルタ、コメントのオン/オフ、プライベート会場の検索、ワンクリックの出席者/会員エクスポート、会費の「Grace」ステータス(Stripe 再試行中の表示)、komoot ハイキングルート連携(ベータ)。 — [Meetup Product Updates](https://product.meetup.com/) ; [同 (2025-12 アーカイブ)](https://product.meetup.com/date/2025/12)
- [事実] Meetup Pro: カスタムブランディング、メールリスト構築、無制限のグループ/複数グループイベント、エンゲージメント分析。自社主張で「RSVP+40%、会員+50%、エンゲージメント+400%」(基準・方法は非開示)。価格はページ上なし。 — [Meetup Pro](https://www.meetup.com/pro/)

#### 主催者獲得 - 施策
- [事実] 収益構造が「主催者課金」なので、料金改定が主催者獲得・維持に直結。2019年10月に米国の2州でテスト: 主催者 $23.99/月または $98.94/6か月、参加者は RSVP ごとに $2。会員・主催者の反発が強く、主催者の一部は他サービスへの移行を表明(Meetup 側の説明は「検討中(exploring)」で、主催者が会員から費用を集める機能も「近日提供」と案内)。2024年6月の値上げ後、Meetup のヘルプは、主催者がメンバー会費やイベント参加費でサブスク費用を賄えると案内している。 — [Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup); [WP Tavern (2019-10-15)](https://wptavern.com/meetup-com-introduces-rsvp-fees-for-members-wordpress-meetup-groups-unaffected-by-pricing-changes); [Meetup ヘルプ](https://help.meetup.com/hc/en-us/articles/30923029605133)
- [事実] 歴史的な供給側施策: 初期は会場が Meetup に費用を支払い、グループ成立後に会員が3つの提携会場から1つを投票。 — [Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup)
- [事実] 営業・BD 不在(2013年時点)。B2B は Meetup Pro(ネットワーク・企業向け)で提供。 — [NBC (2013-12)](https://www.nbcnews.com/id/wbna53820139); [Meetup Pro](https://www.meetup.com/pro/)

#### 弱み・失敗
- [事実] Trustpilot 3.6/5(1,105件、1つ星58%、2026-10取得)。不満の主題は料金・サブスクの解約困難・請求トラブル・アカウント停止・広告・動作の重さ。肯定は主催者の人柄・コミュニティ。 — [Trustpilot: Meetup](https://www.trustpilot.com/review/meetup.com)
- [事実] 2019年 RSVP 有料化テスト時、主催者が Kommunity / gettogether.community 等へ移行表明。2026年1月の WordPress コミュニティの記事は、Meetup 利用の非効率・ベンダーロックイン・現地語UIの不足を指摘し、GatherPress へ移行検討。 — [WP Tavern (2019)](https://wptavern.com/meetup-com-introduces-rsvp-fees-for-members-wordpress-meetup-groups-unaffected-by-pricing-changes); [WordPress Community Team (2026-01-28)](https://make.wordpress.org/community/2026/01/28/2026-big-picture-goals-our-focus-on-meetups/)
- [事実] 会員数はグループ活性の指標として「虚栄指標(vanity metric)」との批判(2020年)。 — [DEV Community (2020-10-08)](https://dev.to/xeraa/meetup-com-members-are-a-vanity-metric-3b3g)
- [競合発信] Group.app(競合)は「長年の主催者で80%以上の値上げ」「公開 API 制限」「会員への RSVP 課金や Meetup+ サブスク」「最も活動的な主催者の離脱」を主張(数値・根拠の提示なし)。 — [Group.app](https://www.group.app/blog/meetup-alternatives/)
- [競合発信] 2024年値上げは「Bending Spoons の定型(値上げ・有料壁)」との論調が競合ブログに多いが、Meetup 公式は「コミュニケーション機能・統合プラットフォームとアプリ・バグ修正」を理由に挙げる。 — [TicketPeak](https://ticketpeak.com/blog/what-eventbrite-users-should-know-about-the-bending-spoons-acquisition/); [Meetup ヘルプ](https://help.meetup.com/hc/en-us/articles/30923029605133)

#### 出典
- Meetup 公式: https://meetup.com/media , https://www.meetup.com/ , https://www.meetup.com/pro/ , https://product.meetup.com/ , https://product.meetup.com/date/2025/12 , https://help.meetup.com/hc/en-us/articles/28677808413197 , https://help.meetup.com/hc/en-us/articles/30923029605133(いずれも 2026-10-11 取得)
- 歴史・取材: https://en.wikipedia.org/wiki/Meetup , https://www.nbcnews.com/id/wbna53820139 (2013-12-13) , https://www.entrepreneur.com/article/219753 (2011-06-07) , https://techcrunch.com/2013/05/28/meetup-com-surpasses-100-million-rsvps-to-10-million-meetups , https://www.hackernoon.com/the-past-present-and-future-of-meeting-people-with-meetup-founder-scott-heiferman-ae7f08951be8 (2017) , https://builtinnyc.com/articles/meetup-bending-spoons-acquisition-20240131 , https://wptavern.com/meetup-com-introduces-rsvp-fees-for-members-wordpress-meetup-groups-unaffected-by-pricing-changes (2019-10-15)
- 評判: https://www.trustpilot.com/review/meetup.com , https://make.wordpress.org/community/2026/01/28/2026-big-picture-goals-our-focus-on-meetups/ , https://dev.to/xeraa/meetup-com-members-are-a-vanity-metric-3b3g , https://www.group.app/blog/meetup-alternatives/(競合)

### Inferences
- [推測] Meetup は「参加者無料・主催者有料」のため、参加者側(会員数)は大きくても、主催者の支払い意思・離脱が主要リスクになる。公式メディアページの「会員5,200万」と2024年の「6,000万」の差は、整理や記載時点の違いの可能性がある(確定不能)。
- [推測] 創業期のコールドスタートは「会場スポンサー」「政治キャンペーン(Dean)」という既存コミュニティの塊を取り込んだ点が大きい(自社が作った #resist のような塊の創出も後年あり)。個別の最初の都市・主催者の手動勧誘は取得資料に記載なし。

### Gaps
- Meetup の主催者数・売上・MAU(公式)は非公開で未確認。
- 2024年 Bending Spoons 買収後の人員削減・API 制限・会員課金(Meetup+)に関する一次情報は未確認(競合発信のみ)。
- 創業期のシード方法(最初の都市・主催者の勧誘方法)の一次資料は未確認。Heiferman の完全インタビュー(The Next Web 初出)は未取得。
- Meetup のレコメンド・通知ロジック(公式詳細)は確認できていない。

---

## 3. Facebook Events / Instagram(Meta)

### Takeaway
Facebook Events は「既存SNSのソーシャルグラフ」で供給(誰でも作れる)と需要(通知・招待)を同時に持つが、収益化されたチケッティングは薄く、第三者へのAPIは2018年に閉じられた。2024年10月には若年層(young adults)向けに「Local」タブとイベントの週次ダイジェスト、Instagram フォロワー/SMS/メール招待(非ユーザーも RSVP 可)を発表。利用者数・Events の売上は公開情報で確認できなかった。

### Cited Findings

#### 基本情報
- [事実] 運営は Meta。Events 単体の MAU・イベント数・収益は今回の資料では確認できず。公式 Events API ページは「Facebook は月間27億超のユーザー」と記載(COVID期のページ、新規パートナー受付は一時停止と注記)。 — [Meta: Official Events API](https://developers.facebook.com/products/official-events-api/)
- 収益モデル: Events 機能自体は無料。主催者向けの有料要素は広告(Meta Ads)とパートナー経由のチケット連携という位置づけ [推測](公式資料で Events の take rate は確認できず)。

#### 参加者獲得 - 機能
- [事実] 2024年10月: Local タブ(Marketplace・Groups・Events を集約)を米国10都市(Austin / NYC / LA / Washington DC / Chicago / Charlotte / Dallas / Houston / San Francisco / Phoenix)でテスト。「Weekly / Weekend Digest」で近隣の関心に合うイベントを通知。スワイプ式フィードにローカルイベントを表示。 — [Meta Newsroom (2024-10)](https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/amp/)
- [事実] 招待: Instagram フォロワーを Facebook イベントに招待可能。SMS・メール招待で「Facebook 非ユーザーも閲覧・RSVP 可」。 — [Meta Newsroom (2024-10)](https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/amp/)
- [事実] 基本機能: イベント作成、写真・動画追加、ゲスト招待、公開範囲/参加可否の管理、Page 向け繰り返しイベント、参加者はカレンダー追加・過去イベント閲覧。 — [Facebook ヘルプ: Events](https://www.facebook.com/help/events)
- [事実・二次] Instagram は2015年に Explore を刷新してイベント・場所・ハッシュタグを強調、2016年8月にライブイベント動画の Explore チャンネルを追加(2025年の Instagram のイベント発見機能は確認できず)。 — 検索要約(TechCrunch 2016-08-17 ほか)[要確認]

#### 参加者獲得 - 施策
- [事実] Meta のこの領域の戦略は若年層(young adults)の取り戻しとして、Local タブ等を投入(同社資料は「若年層はアプリ内で動画に約60%の時間を使う」と説明)。 — [Meta Newsroom (2024-10)](https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/amp/)
- Events 専用のマーケ施策(広告・提携・アフィリエイト)の公式資料は確認できず。

#### 主催者獲得 - 機能
- [事実] Official Events API: 外部プラットフォームの主催者が、複数の Page へイベントを一括公開・管理(オンライン/対面、単発/繰り返し)でき、自動リマインダー・通知を使える。申請はパートナー問い合わせフォーム。非営利チケッティング Humanitix が採用事例。 — [Meta: Official Events API](https://developers.facebook.com/products/official-events-api/)
- [事実] 2018年4月4日: Events API と Groups API は新規開発者に閉鎖、既存アプリも同日アクセス喪失、今後は審査制。RSVPリスト・フィード・投稿・コメント等のエンドポイントも非推奨。 — [Facebook for Developers (2018-04-04)](https://developers.facebook.com/blog/post/2018/04/04/facebook-api-platform-product-changes/)

#### 主催者獲得 - 施策
- [事実] Eventbrite は2008年に Facebook Connect と events API に連携し、2011年には Facebook が最大の流入源だった(第三者サービスが Facebook 上の配布に依存して成長)。 — [7x7](https://www.7x7.com/amp/co-founder-julia-hartz-on-her-role-as-the-operator-at-eventbrite-1786195744); [TechCrunch (2011-06-17)](https://techcrunch.com/2011/06/17/founder-stories-eventbrite-facebook)
- Meta 自身の主催者向け勧誘プログラム(アンバサダー等)は今回の資料では確認できず。

#### 弱み・失敗
- [事実] 2018年の API 閉鎖で、イベント集約サービス・WordPress プラグイン等が Facebook イベントを取得できなくなり、AllEvents のようなアグリゲータは別ソースに依存せざるを得ない構造になった(AllEvents の具体的な影響は資料なし)。 — [Facebook for Developers (2018-04-04)](https://developers.facebook.com/blog/post/2018/04/04/facebook-api-platform-product-changes/)
- [競合発信] 「Facebook Events は Meta のロードマップ上で優先度が下がった」とのチケット事業者ブログ記述があるが、Meta の根拠は示されていない。 — 検索要約[要確認]
- [事実] Local タブは「テスト」段階で、全面展開・成果は公表されていない。若年層戦略の成否は不明(「米加の若年層4,000万人超」を同社が主張するが全体に対して小規模との報道があり、検索要約のみ・要確認)。 — [Meta Newsroom (2024-10)](https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/amp/)

#### 出典
- https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/amp/ (2024-10) , https://developers.facebook.com/products/official-events-api/ , https://developers.facebook.com/blog/post/2018/04/04/facebook-api-platform-product-changes/ (2018-04-04) , https://www.facebook.com/help/events (2026-10-11 取得)

### Inferences
- [推測] Meta は「発見」より「招待・告知」でイベントを使わせる設計(ソーシャルグラフ起点)で、他社(Eventbrite・Luma 等)は Facebook/Instagram を流入元として使う関係。第三者 API を閉じた結果、Facebook 上のイベントは外部で可視化されにくく、独立系の発見プラットフォームやイベント集約の余地を残している。

### Gaps
- Facebook Events の利用者数・イベント数・収益・チケッティング機能の現行仕様は確認できず。
- Instagram の2025〜2026年のイベント機能は確認できず。
- Nextdoor events は今回調査できず(WebFetch が証明書エラー、検索上限到達)。

---

## 4. Fever

### Takeaway
Fever は「発見プラットフォーム+自社オリジナル体験(Fever Originals、Candlelight Concerts)+パートナー向けチケッティング/Cashless」の三位一体で、参加者側は自社メディア網(Secret Media Network)・アプリ・アフィリエイト、主催者(パートナー)側は営業主導と手数料(マーケ手数料型)で獲得。2025年6月に DICE を買収し、2026年9月17日に$250M(EQT主導)を調達。F1 とは2027〜2031年の公式サプライヤー契約。

### Cited Findings

#### 基本情報
- [事実・不一致] 設立年・本社は資料間で異なる: Wikipedia は2012年設立・本社ロンドン(アプリ公開2014年)、MBW(2026-09)は「スペイン創業・本社NY」、Fever 自身のDICE関連PRは「2014年創業」(MBW 2025-06 も同様)。共同創業者は Alexandre Perez・Francisco Hein・Ignacio Bachiller(CEO)ほか。調達: 2015年€11M(Accel)、2018年$20M、2019年$35M、2022年1月$227M(Goldman、評価額$1B)、2023年1月$110M(評価額$1.8B)、2025年6月$100M超(L Catterton・Point72)、2026年9月17日$250M(EQT主導、Baillie Gifford 新規)。 — [Wikipedia: Fever](https://en.wikipedia.org/wiki/Fever_(app)); [MBW (2026-09-17)](https://musicbusinessworldwide.com/dice-owner-fever-raises-250m-led-by-eqt-in-what-it-calls-the-largest-ever-round-for-a-live-entertainment-tech-company)
- [自社主張] 売上は3年で3倍超、EBITDA 黒字、55か国、北米・アジアで拡大、資金は国拡大・カテゴリ深耕・パートナー向け技術(需要予測・オーディエンスリーチ・チケッティング)に使用。評価額は非公表(Atresmedia の約5%持分売却が約€2.27億=評価額約€45億/約$52億相当と報道)。 — [MBW (2026-09-17)](https://musicbusinessworldwide.com/dice-owner-fever-raises-250m-led-by-eqt-in-what-it-calls-the-largest-ever-round-for-a-live-entertainment-tech-company)
- [自社主張・不一致] 到達規模の表記が資料ごとに異なる: 「3億人にリーチ/インスパイア」(2025年プレスリリース)、「月間3億ユーザー相互作用(interactions)」「500都市超・55か国超・20万体験超」(business サイト)、国数は 30+(Wikipedia 2026-06)・40+(2025-06)・55(2026-09、2025-05)。MAU として使える値は確認できず。 — [Fever プレス (2025-06-05)](https://newsroom.feverup.com/en-US/250537-fever-and-dice-join-forces-to-build-a-live-entertainment-tech-powerhouse/); [Fever Business](https://business.feverup.com/); [Wikipedia: Fever](https://en.wikipedia.org/wiki/Fever_(app))
- [事実] 収益モデル(取材ベース): 2018年時点、Originals はユーザーの予約手数料なしで、主催者は Fever が生む追加販売に応じた手数料(通常のチケット処理手数料の3〜5倍と報道)を支払う。現行の手数料率は公開されていない(business サイトは「Contact sales」)。 — [TechCrunch (2018-07-05)](https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties); [Fever Business](https://business.feverup.com/)
- [事実] 企業向け: 2025年5月時点で1,000社超(Meta、MGM、Pfizer、Accenture ほか)が Fever for Business を利用、Candlelight for Business を米国で開始。 — [Fever Newsroom (2025-05-13)](https://newsroom.feverup.com/en-US/249796-fever-strengthens-its-corporate-events-division-in-the-us-with-the-launch-of-candlelight-for-business/)

#### 参加者獲得 - 機能
- [事実] 推薦アルゴリズムによるパーソナライズ表示、アプリ/Web。 — [TechCrunch (2018)](https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties); [Wikipedia: Fever](https://en.wikipedia.org/wiki/Fever_(app))
- [自社主張] パートナー向けページでの説明: マーケットプレイス露出(提携内容による)、Secret Media Network による編集型の告知、配信はアプリ・Web・メール・CRM・アフィリエイト・OTA、SEO 最適化されたイベント LP、先行販売(presale)・ウェイトリスト・オーディエンスターゲティング。モバイル購入フローは「3クリック」。 — [Fever Business](https://business.feverup.com/)
- [事実] ウェイトリストによる需要検証(例: Alice in Wonderland 体験で公開前に12,000人超がウェイトリスト登録、$60/人で6月分が数日で完売)。 — [TechCrunch (2018-07-05)](https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties)

#### 参加者獲得 - 施策
- [事実] 自社メディア網(Secret London / Secret NYC などの都市ブランドSNS・Webメディア)で告知と行動データ収集を行う(2018年に週間ユニークユーザー1,200万超を主張)。 — [TechCrunch (2018-07-05)](https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties)
- [事実] アフィリエイト: 公開サイト運営者向けは無料で参加可、トラッキングリンク・バナー・ディープリンク・レポート、選別パートナーにはフィード/API。料率はページ上非公開(「提携条件により異なる」)。サインアップは impact.com 経由。インフルエンサーは Ambassador Program、旅行代理店・OTA・再販は Distributors Program に誘導。 — [Fever Affiliate Program](https://business.feverup.com/en/partner-programs/affiliate-program/)
- [要確認] 第三者ネットワーク掲載の料率: Tradedoubler は基本8%・Candlelight 10%・約50件の限定イベントは6%固定、FlexOffers は平均6.4%(Candlelight 8%)と記載(不一致)。 — 検索要約(Tradedoubler / FlexOffers)
- [事実] Fever Originals(Candlelight Concerts 等): 自社データで需要を予測し、自社制作・共同制作(Netflix・Warner Bros. 等)のIPイベントを企画。Candlelight は2019年開始。 — [Fever Business](https://business.feverup.com/); [Wikipedia: Fever](https://en.wikipedia.org/wiki/Fever_(app))
- [競合発信/分析] 「Secret Club」サブスク($1.99〜$3.99/月)や「Originals が成長の主因」は分析ブログの記述(AI要約で作成と明記、信頼度低)。 — [Vertical Breakdowns (2026-01-12)](https://vertical-breakdowns.beehiiv.com/p/fever-the-quiet-entertainment-unicorn) [要確認]

#### 主催者獲得 - 機能
- [自社主張] 公式 business サイト: イベント設定(チケット種別・時間指定入場・座席表・多言語)、動的価格・プロモコード・バンドル・会員/シーズンパス・ギフトカード・寄付、モバイル検証(オフライン対応)・ボックスオフィスPOS・RFID キャッシュレス・キオスク・電子同意書、リアルタイム分析・AI 売上インサイト、Reporting API / Transactional API / MCP 連携、24/7多言語サポート。 — [Fever Business](https://business.feverup.com/)
- [事実] パートナープログラム: 代理店/OTA(流通)、アフィリエイト、アンバサダー、ブランド広告・アクティベーション、Fever イベント運営ライセンス、イベント資金調達(live events financing)、会場/出演者/サプライヤー、法人サービス。 — [Fever Business](https://business.feverup.com/)

#### 主催者獲得 - 施策
- [事実] 営業型: 「Contact sales」「デモ予約」が入口で、セルフ登録型の料金表はない。パートナー向けの求人(Partner Manager 等)は、契約締結後から終了までの運営を担うと記載。 — [Fever Business](https://business.feverup.com/); 検索要約(Fever 求人)[要確認]
- [事実] 戦略提携: F1 公式サプライヤー(2027〜2031、全グランプリ+F1公式サイトのチケッティング)、FC Barcelona、Atlético de Madrid、SailGP、X Games、FIFA Arab Cup、Primavera Sound(2024年10月公式チケッティング)、Kew Gardens、Palace of Versailles、Frida Kahlo Museum。 — [MBW (2026-09-17)](https://musicbusinessworldwide.com/dice-owner-fever-raises-250m-led-by-eqt-in-what-it-calls-the-largest-ever-round-for-a-live-entertainment-tech-company); [Wikipedia: Fever](https://en.wikipedia.org/wiki/Fever_(app))
- [事実] 2025年6月5日に DICE を買収(価格非公開)。DICE は継続運営、Fever の発見エンジンとグローバルオーディエンスを DICE 側の主催者が利用でき、Fever の音楽パートナーは DICE で体験を掲載・配信できる。 — [Fever プレス (2025-06-05)](https://newsroom.feverup.com/en-US/250537-fever-and-dice-join-forces-to-build-a-live-entertainment-tech-powerhouse/)

#### 弱み・失敗
- [事実] Trustpilot 4.6/5(約11.3万件、1つ星10%、2026-10取得)。不満は価格/追加料金の透明性・アプリ予約エラー・体験の質(音響等)・混雑。サポートは好評が多い。 — [Trustpilot: Fever](https://www.trustpilot.com/review/feverup.com)
- [事実] マーケ手数料が通常のチケット手数料の3〜5倍と報道(2018年)。主催者の自社集客依存度が高い場合のコスト感は未確認 [推測]。 — [TechCrunch (2018-07-05)](https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties)
- [事実] 規模表記(ユーザー・国数)に一貫性がなく、第三者検証可能な MAU が非公開。 — 上記

#### 出典
- https://musicbusinessworldwide.com/dice-owner-fever-raises-250m-led-by-eqt-in-what-it-calls-the-largest-ever-round-for-a-live-entertainment-tech-company (2026-09-17)
- https://newsroom.feverup.com/en-US/250537-fever-and-dice-join-forces-to-build-a-live-entertainment-tech-powerhouse/ (2025-06-05) , https://newsroom.feverup.com/en-US/249796-fever-strengthens-its-corporate-events-division-in-the-us-with-the-launch-of-candlelight-for-business/ (2025-05-13)
- https://business.feverup.com/ , https://business.feverup.com/en/partner-programs/affiliate-program/ (2026-10-11 取得)
- https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties , https://en.wikipedia.org/wiki/Fever_(app) , https://vertical-breakdowns.beehiiv.com/p/fever-the-quiet-entertainment-unicorn , https://www.trustpilot.com/review/feverup.com

### Inferences
- [推測] Fever は「需要を先に作る(自社メディア+ウェイトリストで需要検証 → Originals で供給も自作)」ことで、主催者(供給)ボトルネックを自社制作で回避している。パートナー獲得は営業・戦略提携(F1・クラブ・フェス)に寄せ、セルフサーブの裾野は取っていない。
- [推測] マーケ手数料型(売上への貢献に連動)は、主催者から見て「集客を買う」価格設計。コミュニティ型のイベント(少額・低頻度)には合いにくい。

### Gaps
- 現行のパートナー向け手数料(take rate)は公開資料なし。
- 現行 MAU・アプリDL数・売上は未開示。
- アンバサダープログラムのページは 403 で未取得(条件不明)。
- 「Fever Plus」等の会員施策の公式資料は確認できず。

---

## 5. Dice

### Takeaway
Dice は「ファンに優しい(all-in 表示価格、アンチスキャルピング、ウェイトリスト)」音楽特化のモバイル専用チケッティングで、主催者は審査/提携制(セルフ登録ではない)。2025年6月に Fever が買収(ブランドは継続)。月間アクティブファン1,000万超(自社主張)。Discovery(Spotify/Apple Music連携の推薦)がチケット販売の約4割に寄与するとの主張がある(要確認)。

### Cited Findings

#### 基本情報
- [事実] 2014年ロンドン創業(Phil Hutcheon)、米国展開は2017年9月(SF・LA)。累計調達$200M超(2021年Series C $122M、2023年8月$65M)。2021年に Boiler Room を買収し 2025年1月に Superstruct へ売却。 — [Wikipedia: Dice](https://en.wikipedia.org/wiki/Dice_(ticketing_company)); [MBW (2025-06-05)](https://www.musicbusinessworldwide.com/dice-acquired-by-live-events-discovery-platform-fever/)
- [自社主張] 2025年6月時点: 月間アクティブファン1,000万超、2年でチケット販売が2倍超。展開は UK/US/カナダ/フランス/ドイツ/インド/イタリア/スペイン。取引先は Club Space、Sonar、Newport Jazz and Folk Festival、Alexandra Palace、Rough Trade。 — [Fever プレス (2025-06-05)](https://newsroom.feverup.com/en-US/250537-fever-and-dice-join-forces-to-build-a-live-entertainment-tech-powerhouse/)
- [事実] 買収: 2025年6月5日、価格非公開。 — [MBW (2025-06-05)](https://www.musicbusinessworldwide.com/dice-acquired-by-live-events-discovery-platform-fever/)
- [要確認] 2022年売上$28.5M(+359%)・営業損失$51.1M との記載が検索要約にある(一次未確認)。「破産管財人任命の意向通知提出後の買収」との報道も検索要約にあるが、MBW・Fever の本文にはなし。 — 検索要約

#### 参加者獲得 - 機能
- [事実] アプリに Spotify・Apple Music を連携しておすすめイベントを表示、ホームで推薦。チケットはアプリ内のQRのみ(イベント直前まで表示されない)、友人へ譲渡可能、完売時のウェイティングリスト(返却された券を先着で配分)、二次流通(転売業者)非対応。 — [Wikipedia: Dice](https://en.wikipedia.org/wiki/Dice_(ticketing_company))
- [自社主張] 表示価格に手数料込み(all-in)の「ファンファースト」。 — [Fever プレス (2025-06-05)](https://newsroom.feverup.com/en-US/250537-fever-and-dice-join-forces-to-build-a-live-entertainment-tech-powerhouse/)
- [要確認] Dice の Discovery(アルゴリズム+音楽ストリーミングデータ)がチケット販売の約41%を促す、とする Dice パートナーページの主張を検索要約が引用。EDM Identity(2023)も「40%超」と匿名情報として記載。 — 検索要約(dice.fm/blog, EDM Identity)

#### 参加者獲得 - 施策
- 有料広告・アフィリエイト・インフルエンサー等の公式資料は確認できず。[事実] 主催者側ツールとして、トラッキングリンク(購入経路の把握)、フラッシュセール/先行販売(Promotions)、QRコードでアプリ非保有者も購入可、Mailchimp 連携(購入者をタグ付き連絡先へ)、Laylo 連携(購入者をメッセージリストへ同期)がある。 — 検索要約(dice.fm/blog)[要確認]
- [事実] Fever 傘下入りにより Fever の発見エンジン・グローバルオーディエンスが Dice 経由の主催者に開放される。 — [Fever プレス (2025-06-05)](https://newsroom.feverup.com/en-US/250537-fever-and-dice-join-forces-to-build-a-live-entertainment-tech-powerhouse/)

#### 主催者獲得 - 機能
- [要確認] ウェイティングリスト数が需要の可視化となる(例: 200人規模で600人のウェイトリストなら追加3公演、パリ公演で484人のウェイトリストから追加公演で410枚販売)。 — 検索要約(dice.fm/blog: identify-fan-demand-with-the-waiting-list)
- [競合発信] セルフサービス設定なし(提携/申請制)、ホワイトラベルなし、API・前払いなし、購入者データは Dice エコシステム内に留まるとの記載(Ticket Fairy)。ただし同ページ自身が情報不正確の可能性を注記。 — [Ticket Fairy](https://www.ticketfairy.com/event-ticketing/dice-vs-skiddle)

#### 主催者獲得 - 施策
- [事実] 提携型: 独占/主要チケッティング提携(Ministry of Sound、Brooklyn Made、Dead Melodies、GoodLive 等の事例が検索結果に出る)。 — 検索要約(Music Week / Pollstar)[要確認]
- [競合発信・不一致] 主催者手数料: Ticket Fairy は「チケット価格内に含む、通常10〜15%」、tickts は「サービス料8.5%(最低£1)+取引手数料2.5%」と主張(いずれも競合、DICE の公式料金ではない)。 — [Ticket Fairy](https://www.ticketfairy.com/event-ticketing/dice-vs-skiddle); 検索要約(tickts)

#### 弱み・失敗
- [事実] 「アプリ必須・QRの別形式なし」への批判、2022年に営業損失が拡大し2025年に Fever に吸収(経営的な弱さ)。 — [Wikipedia: Dice](https://en.wikipedia.org/wiki/Dice_(ticketing_company)); 検索要約
- [事実] 2018年に UK で手数料免除を終了(Pollstar 見出し)。 — 検索要約(Pollstar)[要確認]
- Dice 固有の評判データ(Trustpilot 等)は今回未取得。

#### 出典
- https://newsroom.feverup.com/en-US/250537-fever-and-dice-join-forces-to-build-a-live-entertainment-tech-powerhouse/ (2025-06-05)
- https://www.musicbusinessworldwide.com/dice-acquired-by-live-events-discovery-platform-fever/ (2025-06-05) , https://en.wikipedia.org/wiki/Dice_(ticketing_company) , https://www.ticketfairy.com/event-ticketing/dice-vs-skiddle(競合・2026比較ページ)
- 一次未確認(403): https://betamax.dice.fm/partners/ticketing/live , https://dice.fm/partners , https://edmidentity.com/2023/04/01/dice-event-ticketing-fan-first/

### Inferences
- [推測] Dice は「発見(推薦)・ウェイトリスト・アプリ内完結」で、需要側のロイヤルティと反転売り防止を価値にしている。主催者側は審査制のため供給は絞られ、買収後は Fever の主催者ネットワークと統合する方向。

### Gaps
- Dice の現行手数料(主催者・ファン)の公式値、Discovery の寄与率の一次確認、Trustpilot 等の評判、Fever 買収後のアプリ/ブランド方針(2026年時点)は未確認。

---

## 6. AllEvents

### Takeaway
AllEvents(インド・アーメダバード発、2011年創業)は「Web上のイベントを集約する発見サイト」から始まり、第三者広告が止まって収益ゼロになった経験から自前の広告・販促(Featured・ニュースレター・プッシュ)と、購入者負担$1/枚のチケッティング、月額サブスク(Free〜Power $200)へ展開。規模は自社主張(月間2,000万人・主催者30万・4万都市超)のみで、数値は資料間で不一致。日本(東京)の都市ページにはイベントが掲載され、e+・tiget 等の外部リンクも含む。

### Cited Findings

#### 基本情報
- [自社主張] 2011年創業(Amit Panchal CEO・Ruchit Patel CTO)。月間約2,000万人がイベントを発見、約30万の主催者、2億件のイベント、4万超の都市。 — [AllEvents About](https://allevents.in/about)
- [自社主張・不一致] 2017年のインタビューでは月間約400万ユーザー、1.2億イベント、約3万都市。別の自社ページでは主催者1万超、イベント販促キャンペーン1.2万件超(10年)。Capterra は「300,000の主催者が毎月利用」「年間チケット取扱$10M超」(検索要約)。 — [SoftwareSuggest (2017-11-21)](https://www.softwaresuggest.com/blog/allevents-founder-interview/); [AllEvents Event Marketing](https://allevents.in/pages/event-marketing); 検索要約(Capterra)[要確認]
- [事実] 収益: 創業期は第三者広告に依存し、ある広告ネットワークが配信停止して売上ゼロになったため、自社の広告・販促プラットフォームを構築して複数の収益源を追加。 — [SoftwareSuggest (2017-11-21)](https://www.softwaresuggest.com/blog/allevents-founder-interview/)
- [事実] ソース: 「Web上の様々なソースやサイトからイベント情報を集約」(取得方法の詳細は不明)。 — [SoftwareSuggest (2017-11-21)](https://www.softwaresuggest.com/blog/allevents-founder-interview/)
- [事実] 料金: 参加者が1枚あたり$1を負担(料金ページ)。主催者が負担することも可。ただしチケッティング紹介ページでは「PayPal/Stripe では 0.5% または $1 の高い方」と記載され不一致。無料イベントは無料。決済は PayPal/Stripe で主催者アカウントへ直送(AllEvents は資金を保持しない)、INR は終了後3〜5営業日。 — [AllEvents Pricing](https://allevents.in/pages/pricing); [AllEvents Ticketing](https://allevents.in/pages/event-ticketing)
- [事実] 月額プラン: Free $0(アクティブイベント5件)、Essential $12(20件)、Professional $60(100件)、Power $200(100件超)。リード獲得・一斉配信の上限が段階制。 — [AllEvents Pricing](https://allevents.in/pages/pricing)

#### 参加者獲得 - 機能
- [自社主張] イベントページは検索エンジン最適化、興味・場所に基づくレコメンド、プロモーションチャネルとパートナーサイト(5,000)経由の配信。 — [AllEvents Ticketing](https://allevents.in/pages/event-ticketing)
- [事実] 東京の都市ページ構造(2026-10取得): カテゴリ別件数(Parties 40 / Business 38 / Music 32 / Performances 30 ほか)、日付別ページ(今日/今週末/月別)、Featured / Most-Loved / Popular、カテゴリ別セクション、Moments from Events(参加者レビュー)、Interested Audience 件数表示。外部リンク付きの日本のイベント(Meetup、e+、tiget、Google Forms)が掲載されている。 — [AllEvents: Tokyo](https://allevents.in/tokyo)
- [事実] Google イベント掲載向けの申請支援ツール(「Google event featuring submission tool」)、リンク/QR/短縮URL生成。 — [AllEvents Ticketing](https://allevents.in/pages/event-ticketing)

#### 参加者獲得 - 施策
- [事実] 発見面でのプッシュ/ニュースレター(都市ごとに購読者へ配信)、「同種イベントに参加した近隣ユーザーへのターゲティング」を主催者向け有料施策として販売。 — [AllEvents Event Marketing](https://allevents.in/pages/event-marketing)

#### 主催者獲得 - 機能
- [事実] 無制限のチケット種別、割引コード、メール/SMS 配信、ページビルダー、座席表、参加者管理、チェックインアプリ(無料)、Events API・リスティングプラグイン(フッターリンクのみ、詳細なし)。Facebook 連携・イベントインポートは該当ページに記載なし。 — [AllEvents Ticketing](https://allevents.in/pages/event-ticketing)

#### 主催者獲得 - 施策
- [事実] 手数料: 購入者負担$1で「主催者は設定価格の100%を受け取れる」と訴求、無料イベントは無料、月額は任意。 — [AllEvents Pricing](https://allevents.in/pages/pricing)
- [事実] 販促商品(価格は非公開、Black Friday オファー表示あり): プレミアム掲載、ニュースレター掲載、プッシュ/Web通知、類似イベント参加者へのターゲティング、Featured バッジ、専用メール(100語・3日前までに申込、政治・ギャンブル・金融等は不可)、広告出稿代行、キャンペーン期間は最大1か月、開始前48時間の返金。「10倍リーチ」は根拠なしの訴求。 — [AllEvents Event Marketing](https://allevents.in/pages/event-marketing)

#### 弱み・失敗
- [競合発信/二次] レビューサイト要約には「イベント情報の無断掲載/コピー」「不正確な情報」「購入者への誤解を招く販売」「連絡が遅い」を挙げる声あり(SaaSworthy 4/5・382件、Reviews.io 4.5・471件で一部)。直接取得した Reviews.io の一般ページには該当苦情は見つからず、引用元は未検証。自動スキャナーが「中程度の疑わしさ」と評価した旨の検索要約もあるが信頼度は低い。 — [Reviews.io](https://www.reviews.io/company-reviews/store/allevents-in); 検索要約(SaaSworthy / MalwareTips)[要確認]
- [事実] 規模・組織数の自社表記が複数ページで不一致(上述)。

#### 出典
- https://allevents.in/about , https://allevents.in/pages/pricing , https://allevents.in/pages/event-marketing , https://allevents.in/pages/event-ticketing , https://allevents.in/tokyo(いずれも 2026-10-11 取得) , https://www.softwaresuggest.com/blog/allevents-founder-interview/ (2017-11-21、更新 2025-08-08) , https://www.reviews.io/company-reviews/store/allevents-in

### Inferences
- [推測] AllEvents は「集約+自前広告」で需要を作り、主催者へ販促を売る構造。供給は「既存ソースの集約」で埋めるためコールドスタートを回避できるが、元イベントの無断利用・情報の鮮度が信頼面のリスクになる(苦情の事実関係は未確認)。
- [推測] 日本の都市ページに外部チケット(e+ / tiget)や Meetup イベントが並ぶことは、日本市場でも集約型の発見面に既存ソースを載せられることを示す。

### Gaps
- 日本での AllEvents の月間利用者・日本の主催者数は不明。
- AllEvents の集約元(クロール/ユーザー投稿/Facebook)は未確認。
- 手数料額(0.5%/$1 vs $1)の最新値、販促商品の価格は不明。

---

## 7. 追加調査(Luma / Universe / Ticketmaster / Google イベント構造化データ)

### Takeaway
Luma は「無料プランで5%手数料、月$59 の Plus で0%」という主催者向けSaaS型、Universe は「2%+$0.59/枚」で無料イベント無料かつ Ticketmaster/Live Nation 網へ上位プランで接続、Ticketmaster は自社の販売・マーケ(TM1)・アフィリエイト網で流通。Google は構造化データで検索上のイベント体験を提供するが、公式ドキュメント上の対応言語・地域に日本・日本語は含まれない。

### Cited Findings

#### 基本情報
- [事実] Luma(luma.com)料金: Free は $0 で無制限のイベント/ゲスト、メール・SMS・プッシュ・WhatsApp 一斉送信、週500通の招待/ニュースレター、有料イベントの手数料5%。Plus は月$59(年払い)で手数料0%・週5,000通・API/Zapier/優先サポート。Stripe の決済手数料(約2.9%+30¢)は別。Zoom 連携・参加承認制・CSV入出力は Free でも可。 — [Luma Pricing](https://luma.com/pricing)
- [事実] Universe 料金: Starter/Standard は有料チケット 2% + $0.59 /枚、無料イベントは100%無料、Pro は個別見積もり(Ticketmaster での販売、専任アカウントマネージャー、RFID、ダイナミックプライシング、Live Nation ネットワークでのスポンサーシップ・マーケ)。Universe Discover 掲載とパートナーアフィリエイト(Ticket Runner・Social Ladder)は全プランに含まれる。Google Analytics・Facebook Pixel・Mailchimp 連携。 — [Universe Pricing](https://www.universe.com/pricing)
- [事実] Ticketmaster の business サイト: 「アフィリエイト網で330M のファン訪問」、TM1 のマーケアプリ(ピクセル設置・データベースからのオーディエンス抽出・オンプラットフォーム広告ネットワークでのキャンペーン)、Expert Partnerships(第三者プラットフォームへのイベント配置)、Open Platform(API/SDK)。Universe は Ticketmaster のポートフォリオブランドとして記載。TM1 でイベントを「8分未満で作成」の自社主張。 — [Ticketmaster for Business](https://business.ticketmaster.com/)
- [事実] Google イベント構造化データ(Search Central、最終更新 2026-09-08): イベントの構造化データでロゴ・説明つきの検索・Maps 等への表示対象になる。1イベント=1つの固有URL(一覧ページ不可)、必須は name・startDate・location。offers.price は手数料込みの最低価格、無料は 0。会員限定・招待制・仮想のみ・学内限定は対象外。対応言語・地域は英語(AU/CA/IN/UK/US)、ポルトガル語(ブラジル)、ドイツ語(ドイツ)、スペイン語(中南米・スペイン)で、日本・日本語は記載なし。マークアップしても表示は保証されない。 — [Google Search Central: Event structured data](https://developers.google.com/search/docs/appearance/structured-data/event)

#### 参加者獲得・主催者獲得(要点)
- [事実] Google は、プラットフォームがすでに Google のイベント検索に参加している場合はそこへ投稿し続ける、CMS プラグインや Data Highlighter、HTMLへの JSON-LD 追加の3経路を案内。 — [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/event)
- [事実] Luma の発見面は料金ページ上で「Discover Events」へのリンクのみで詳細不明。Universe は Universe Discover とアフィリエイト網を標準提供。 — [Luma Pricing](https://luma.com/pricing); [Universe Pricing](https://www.universe.com/pricing)

#### 弱み・失敗
- Luma / Universe / Ticketmaster の評判・弱みは今回の取得資料では確認できず。Group.app(競合)は Meetup の代替として Luma を挙げている。 — [Group.app](https://www.group.app/blog/meetup-alternatives/)

#### 出典
- https://luma.com/pricing , https://www.universe.com/pricing , https://business.ticketmaster.com/ , https://developers.google.com/search/docs/appearance/structured-data/event (いずれも 2026-10-11 取得)

### Inferences
- [推測] 手数料の下限は、Luma(0〜5% + Stripe)、Universe(2% + $0.59)、Eventbrite(3.7% + $1.79 + 2.9%)、AllEvents($1 購入者負担)で大きく異なる。SaaS型(Luma Plus 月$59)は主催者が少数の大型イベントを持つ場合に有利で、固定額型は小口の多数開催に有利。
- [推測] Google のイベント検索体験は日本・日本語が公式の対応リストにないため、日本向けは構造化データの効果を過大視しない方がよい(日本でのイベント検索表示は別途検証が必要)。

### Gaps
- Nextdoor events、Instagram のイベント機能、Partiful、AXS は未調査。
- Luma の発見面・成長施策(Discover、主催者招待)の詳細は未確認。
- Universe の所有関係の詳細沿革(Ticketmaster 買収年)は取得資料内で未確認(business.ticketmaster.com がポートフォリオとして記載する事実のみ)。

---

## 8. 横断: 供給ボトルネックとコールドスタート

### Takeaway
成熟期の各社は「主催者(供給)の確保」を主戦場にしつつ、需要側の施策を重ねている。創業期のコールドスタートは、Eventbrite=既存のメール/Excel運用を置き換える独立系主催者+SNS共有の拡散、Meetup=会場スポンサーと既存コミュニティの塊(政治キャンペーン)、Fever=自社メディアによる需要創出+自社制作、AllEvents=既存イベントの集約、Dice=提携制で供給を絞った音楽特化、と手法が分かれる。

### Cited Findings
- [事実] Eventbrite: 競合はメールと Excel、最初の顧客獲得は難しく、少数のテックイベント → 独立系主催者に絞る。成長転換点は SNS 共有(2011年 Facebook が最大流入源)。 — [SmartCompany (2014)](https://www.smartcompany.com.au/startupsmart/top-five-tips-for-startup-success-from-eventbrite-founders/); [TechCrunch (2011)](https://techcrunch.com/2011/06/17/founder-stories-eventbrite-facebook)
- [事実] Meetup: 初期は会場から手数料、成立した会員数に応じて会場に投票、2004年 Dean 陣営で14.3万人、2005年から主催者課金、2013年は営業・BD・広告なし。 — [Wikipedia: Meetup](https://en.wikipedia.org/wiki/Meetup); [NBC (2013)](https://www.nbcnews.com/id/wbna53820139)
- [事実] Fever: ウェイトリストで需要を確認してから自社制作、都市別メディア網で需要創出。 — [TechCrunch (2018)](https://techcrunch.com/2018/07/05/fever-gets-20m-to-delight-more-hipsters-with-a-b-tested-madhatters-gt-parties)
- [事実] AllEvents: Web 上のイベントを集約し、広告収入が止まった経験から自前の販促商品を作った。 — [SoftwareSuggest (2017)](https://www.softwaresuggest.com/blog/allevents-founder-interview/)
- [事実] Dice: 提携/申請制で主催者を限定、ウェイトリストとアプリ内チケットでファンを保持。 — [Wikipedia: Dice](https://en.wikipedia.org/wiki/Dice_(ticketing_company)); [Ticket Fairy](https://www.ticketfairy.com/event-ticketing/dice-vs-skiddle)(競合)
- [事実] 現在の Eventbrite: 供給(主催者)は集中し、大型・高頻度の主催者向けに営業・Ads・前払い、需要側は TikTok・アプリ・ブランドキャンペーン・パフォーマンスマーケ・ML推薦(上記)。 — 各社決算資料

### Inferences
- [推測] 主催者課金(Meetup)・主催者手数料(Eventbrite 2023)は、供給側の増減に直結する一方、購入者負担の手数料や広告・販促商品は供給の障壁が低い。複数社が「無料イベントは無料+購入者負担/広告」へ寄っている。
- [推測] 「参加者→主催者」導線は Eventbrite の「Create Events」、Meetup の「Start a new group」のようにホーム/ヘッダーに常設する形が標準で、参加者が主催者に転換する施策(紹介報酬等)の公式資料は取得できなかった。

### Gaps
- 各社の「参加者が主催者に転換する割合」の公式データは確認できず(Eventbrite の「attendee が organizer になった」とする創業者発言は、検索要約にはあったが取得した記事で確認できず、本ノートでは採用していない)。

---

## 9. 示唆(推測)— Shokujii 向け(短く)

- [推測] 幹事が供給(主催者)。Eventbrite が無料イベントへの手数料で在庫と創業者基盤を失った事例と、Meetup の主催者課金への不満(Trustpilot 3.6/5)から、幹事側の手数料・月額は避け、課金は参加者のメニュー注文(Shokujii の収益源)側に寄せる設計が安全。
- [推測] 需要側の施策は、都市/カテゴリ別ページ+FAQ(Eventbrite NY ページ)、カレンダー自動追加(Meetup)、友人招待・SMS/メール招待での非会員 RSVP(Meta 2024)を参考に。ただし Google イベントのリッチ表示は日本・日本語が公式の対応リストに載っていないため、効果は別途検証が必要。
- [推測] Dice のウェイトリスト(需要の可視化)と Fever の「需要検証→企画」は、幹事マッチングの前に「この街・このテーマで参加したい人」を集めて幹事候補に見せる使い方に転用できる。
- [推測] 売上が上位13%の主催者に集中する(Eventbrite)ので、定例開催の幹事への機能(繰り返し・テンプレ・フォロワー・Top Organizer バッジ等)を優先する価値がある。
- [推測] AllEvents の東京ページには Meetup や外部チケットのイベントが混在しており、既存イベントの集約掲載で供給の薄さを補う選択肢がある(ただし無断掲載の苦情に注意)。
