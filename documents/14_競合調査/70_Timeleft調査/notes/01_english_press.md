# Timeleft 英語圏の報道・ポッドキャスト・ニュースレター調査(2026-10-14 時点)

> 凡例: **[事実]** = 本文を読んで確認できた記述(第三者の報道が書いたこと、公式ページに載っていること) / **[自社主張]** = 創業者・会社の自己申告(監査なし) / **[推測]** = 調査者の計算・解釈 / **[要約]** = 検索結果の要約、またはポッドキャスト番組ページの紹介文だけで、本文・音声を読めていないもの。
> 信頼度は一次(創業者本人・公式ページ)と孫引きを分けて書く。WebFetch は要約モデル経由のため、数値の取り違えが起こり得る(後述の MRR/ARR の揺れが例)。
> 検索は WebSearch 20回を使い切った。以降の裏取りは WebFetch。help.timeleft.com、Crunchbase、Seedtable、Reddit ミラーは取得できなかった(ドメイン検証失敗・タイムアウト)。Axios(DC/Denver)、SCMP、PodPulse、Recall.it、Socialclub(lareclame.fr)は 403/404 で本文を読めていない。
> 既知の既存調査(09_food_social_restaurant.md、06_food_dining_social.md、25_features_food_social.md)と重複する事実は再掲を避け、**新規に分かったこと・矛盾・裏取り**を中心に書いた。読んだ記事の一覧は `sources/01_english_press.csv`。
> 引用は 15 語未満で数か所に限定している。

**この調査での最大の収穫(先に要点)**
1. 創業者本人が数字を語っている出典が3つ見つかった。(a) 2024-10 のポッドキャスト書き起こし(MaxPodcasting、Wild Business Growth #307)、(b) 2024-12-01 の創業者ニュースレター #173、(c) 2025〜2026 の創業者ニュースレター(Timeleft Run 告知、2026-04、2026-05)。
2. (a) で **「売上の約60%がサブスク」「単発で買った人は月1.5〜2回参加するとサブスクに移る」「店とはお金の交渉をしない」** と創業者が述べている。ユニットエコノミクスで創業者が口にした数字はほぼこれだけ。**CAC・広告費・継続率・粗利・LTV は誰も数字を出していない。**
3. **規模は2026年に入って縮小している可能性が高い。** 創業者のニュースレター(2026-05-04)は「月10万人超が参加」(Frin 2025-08 の15万人から減)、Now We Build(2026-06-03)の番組紹介は「162都市・47か国」(同じ紹介文に「月15万人」も残る)。一方、公式サイトは「200+都市・52か国・4M+メンバー」を出し続け、同じ公式サイトの拠点一覧は195都市だった。
4. 「店からお金を取らない」説と矛盾する報道が1件ある(Brussels Times 2024-08-06 は「店が手数料を払う」と書く)。創業者の発言・店主の証言と食い違うため、単独・出典不明として扱う。

---

## 1. ユニットエコノミクス(ARPU、サブスク比率、価格、コスト、CAC/CPA、継続、LTV)

### Takeaway
公表されているのは売上規模と価格、サブスク比率(約60%)、利用頻度の目安(月1.5〜2.2回)まで。広告費・CAC・継続率・粗利・LTV・回収期間は創業者・経営陣・投資家を含め誰も数字を出しておらず、**すべて「不明」**。参加1回あたりの売上は €10〜18 程度と逆算できるが、これは推測。

### Cited Findings

#### 1-1 売上・規模の時系列(創業者の自己申告が中心)
- [自社主張] 2023-05-03 に最初のディナー(リスボン、4卓×6人)、初週の売上は €110。 — [DailyMax #173(Barbier、2024-12-01、仏語、一次)](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)。別媒体は初週 €125([Frin、en、孫引き、既存ノート記載の日付 2025-10-09](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting))。Connexion France は初回ディナーの参加者を24人と書く([Connexion、2024-12-08](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998))。24人と €110 の対応関係(初週の定義)は不明。
- [自社主張] 2023-10(パリ・マルセイユ・ポルト開始時)は毎週水曜に約300人、売上は €20,000 に「近づく」(期間の記載なし)。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)。Frin は同じ €20k を 2023-12 の MRR とする(出典間で時期が2か月ずれる)。
- [自社主張] 2023-10 時点で「広告予算では会社の費用を賄えず、資金は2024年3月末までもつ見込み」。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)。別の書き起こしでも「約6か月で資金が尽きると気づき、現地拠点なしで急拡大した」と語る([MaxPodcasting 書き起こし、2024-10、en](https://maxpodcasting.com/maxime-barbier-transcript/))。
- [自社主張] 2024年1〜12月: 都市300超・65か国、チーム 4→70人、毎週1.8万人、**2024年11月の売上 €1.2M(前年比48倍)**、報道・TVは約400本、Instagram は100万に迫る。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)
- [自社主張] 「開始16か月で月商 €1M」(Frin)に対し、ニュースレターの表題は「10か月で0→月商€1M」。本文要約は「初の1ユーロから7か月で €1M、さらに7か月で €10M(MRR と要約された)」。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)、[DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)。**同じ数字を別のブロガーは ARR と書いている**: 「3年で初の€1、7か月後に€1M ARR、さらに7か月後に€10M ARR」(Instagram 投稿の転載)。 — [Niall Doherty(Goodreads 転載、2024-12-05、en、孫引き)](https://www.goodreads.com/author_blog_posts/25319669-3-years-to-first-dollar-10m-per-year-14-months-later)。**MRR と ARR のどちらが原文か、WebFetch の要約では確定できない。**月商 €1.2M(2024-11)と「ARR €10M」(2024-12)は年換算で €14M と €10M で、そのままは整合しない。
- [自社主張] 2025-08: **ARR €18M、月15万人、200都市超、約100人**(「20か月」)。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)。同月の別ポッドキャスト紹介は「**ARR $16M(net)**、月12万人」。 — [New Economies "$16M Net ARR In 2 Years"(2025-08-01、en、番組ページのみ)](https://www.neweconomies.co/p/16m-net-arr-in-2-years)[要約]。€18M ≒ $20M 前後のため、$16M は €18M と一致しない(「net」の定義は不明)。
- [自社主張] 2025-07: 「Wednesday の形式で月次の純売上(net revenue)€1M に到達」「登録3M超、ユニーク顧客 60万人超」「毎週水曜に2,500店超」「火曜の女性限定夕食で2か月に12,000人」。 — [DailyMax「Timeleft Run」(2025-07-06、仏語、一次)](https://dailymax.substack.com/p/timeleft-run-tous-les-samedis-matin)
- [自社主張] 2026-05: 登録は約400万に近づく、**月10万人超が対面イベントに参加**、女性55%、利用者の75%が20〜40歳、初回ディナーを5点満点で評価した人は50万人超、ディナーは平均3時間。 — [DailyMax「Le mec qui a failli ne pas être là」(2026-05-04、仏語、一次)](https://dailymax.substack.com/p/le-mec-qui-a-failli-ne-pas-etre-la)。売上・ARR は書かれていない。
- [自社主張] 2026-06 の番組紹介は 162都市・47か国(別欄は 160+/45+)、月15万人、登録3M+、Instagram 1.2M、売上の言及なし。 — [Now We Build #51(2026-06-03、en、番組ページのみ)](https://shows.acast.com/now-we-build/episodes/6a1f20269942b8f91f30d7a3)[要約]
- [自社主張] 公式サイトは「4M+メンバー、80,000+ディナー、1日720予約、52か国200+都市」。 — [Timeleft 公式トップ(取得日 2026-10)](https://timeleft.com/?p=2472)、[公式アフィリエイト](https://timeleft.com/affiliate/)。**「1日720予約」が日次の予約数なら月約2.2万で、月10〜15万人参加と桁が合わない。**定義不明のためどれも ARPU 計算には使わない。

#### 1-2 価格の変遷(地域別・時点別。会社の公式価格表は存在しない)
公式ページは価格を掲載せず、アプリ内の予約画面で初めて表示される([公式 blog、2026-04-13](https://timeleft.com/blog/dinner-with-strangers/)、[Tokyo ページ](https://timeleft.com/tokyo/))。以下は報道から拾った値。

| 時点 | 地域 | 単発 | サブスク | 出典(信頼度) |
|---|---|---|---|---|
| 2023-09 | パリ | 試用 €12.90 | €19.90/月 | 公式 blog(既存ノート記載) |
| 2024-01-08 | フランス | — | €19.99/月(月4〜5回まで) | [Le Bonbon、en](https://en.lebonbon.fr/paris/society/a-crazy-concept-of-dinners-between-strangers-for-singles-is-coming-to-paris)(中) |
| 2024 前半(日付不明) | ルクセンブルク | €13.99 | €19.99/月 | [Paperjam、仏語](https://paperjam.lu/article/timeleft-ou-comment-contrer-so)(中。ページの日付表示が取得日になっており記事日付不明) |
| 2024-08-06 | ベルギー | €12.99 | 月額サブスクあり(額なし) | [Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)(中) |
| 2024-08-16 | マレーシア | RM55 | RM100/月、RM250/3か月、RM350/6か月 | [Vulcan Post(スポンサード記事)](https://vulcanpost.com/?p=867937)(低〜中) |
| 2024-10-22 | フィラデルフィア | $16 | 最大 $86(6か月) | [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)、[News Tribune 転載 2024-11-03](https://www.newstribune.com/news/2024/nov/03/is-dining-with-strangers-the-cure-for-loneliness/)(中〜高) |
| 2024-12-08 | フランス | €12.99 から | €14.99 から/月 | [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)(中) |
| 2025-02-27 | サンフランシスコ | 約$16 | $26/月(「無制限」) | [Alta](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)(中〜高) |
| 2025-03-31 | ダブリン | €14.99 | 6か月 €62.99 | [The Gown(学生紙)](https://the-gown.com/2025/03/31/timeleft-connecting-people-or-capitalising-on-loneliness/)(低〜中) |
| 2025-07-10 | 日本 | ¥1,890 | ¥2,290/月 | [Tokyo Weekender](https://www.tokyoweekender.com/entertainment/tech-trends/timeleft-app-japan-review/)(中) |
| 2026-08〜10 | 米国 | 約$20〜35 | 約$20〜26/月、期間は1・3・6か月 | [NexSpark(競合の比較ブログ)](https://nexspark.org/journal/timeleft-review)(低。利害関係あり) |

- [事実] **値上がりの傾向**: 米国の単発が $16(2024-10、2025-02)から $20〜35(2026-08)へ。ただし後者は競合ブログの記載で、都市・予約時期で幅があるとも書かれ、確度は低い。Lille は「サブスク €14.99、翌1月1日から €19.99」と告知しており(年不明。2023-12-22 の都市ローンチ記事と読める [推測])、サブスクの値上げ事例は確認できる([Timeleft Lille ローンチ記事(検索結果の要約のみ)](https://timeleft.com/fr/post/timelefts-northern-charm-welcoming-friendly-dinners-in-lille/))[要約]。メキシコシティは単発 MXN140、月額 MXN230、6か月 MXN730 と紹介する現地ガイドもある(年不明)([CDMX Secreta、検索結果の要約のみ](https://cdmxsecreta.com/timeleft-cdmx/))[要約]。
- [事実] **価格はサブスク期間で割引**: 米国は1・3・6か月プラン(自動更新で同じ期間が続く)。 — [NexSpark](https://nexspark.org/journal/timeleft-review)(低)。マレーシアも1・3・6か月。
- [事実] 食事代は含まれず、各自が店に払う。米国は1人 $20〜40(酒類除く)。 — [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [事実] 公式の割引・無料トライアルの規定は確認できない。初回割引コードが出回るという記述のみ(NexSpark、低)。創業者のニュースレターのコードで €5 割引(既存ノート記載)。
- [自社主張] 価格は国・都市ごとに変える。「ニューヨークとボゴタでは同じ額を取らない」。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)

#### 1-3 サブスクと都度払いの比率、転換、利用頻度
- [自社主張] **売上の約60%がサブスク**。新しい街では単発チケットから入り、月1.5〜2回参加するようになるとメンバーシップに移る人が多い。人によってはジムや瞑想アプリのように「習慣」として契約し続ける。 — [MaxPodcasting 書き起こし(Barbier 本人の発言、2024-10)](https://maxpodcasting.com/maxime-barbier-transcript/)。書き起こしは「100%正確ではない」と注記あり。
- [自社主張] 新フォーマット(バー、女性限定、ランニング)導入後、**メンバーの月平均利用が 1.4回→2.2回**。新フォーマットは友人・家族テスト → 有料広告テスト → **CAC が合えばアプリに組み込む**の3段階。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(孫引き。Barbier への取材記事)
- [自社主張] 登録 3M 超に対し「ユニーク顧客 60万人超」(2025-07)。 — [DailyMax「Timeleft Run」](https://dailymax.substack.com/p/timeleft-run-tous-les-samedis-matin)
- [事実] TechCrunch(2026-04-05)は Timeleft を「イベント単位のチケット制(サブスクではない)」と整理し、価格は国・店で異なるとだけ書く。創業者の「売上の約60%がサブスク」と食い違うが、TechCrunch は価格の確認をしておらず、創業者発言を優先するのが妥当 [推測]。 — [TechCrunch](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/)
- [自社主張] 東京(日本)の月次: 予約 2,856件、新規 259人、イベント 46回(年は記載なし。同ページに 2026-10 の予定が載るため 2026-09 の値と読める [推測])。 — [Timeleft Tokyo](https://timeleft.com/tokyo/)

#### 1-4 コスト構造(言及のあるものだけ)
- [自社主張] **店に支払わない**: 創業者は「ビジネスはレストラン側ではなく利用者側」で、店とは「お金の交渉をしない」旨を述べ、店は「6人卓2卓の予約」を受けるだけ、ホスト役の人員も置かない。参加者は各自の会計を払う。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)。**矛盾する報道**: 「Timeleft は月に6人卓2卓の予約を店に保証し、店が手数料を払う。金額は不明」 — [Brussels Times(2024-08-06)](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)。出典・金額の記載がなく、創業者発言と食い違うため**採用しない**。どちらが正しいか確定できない。
- [事実] 店は OpenTable で一方的に予約されている(店主談「向こうから勝手に予約してきた」)。 — [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [自社主張] **運営の自動化**: マッチング、つながり、運営の多くは自動化済み。サポートは水曜のイベント後の木曜に集中。チームは約20国籍・11タイムゾーン。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)
- [自社主張] 初期は店を毎日訪問して質問を紙で配布。のち、店を訪問せず予約だけにしても苦情が出なかったため、物理拠点なしで運営できると学んだ。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)
- [自社主張] 店舗数: 水曜に同時に約1,400店(2024-10)、2024-12 までに累計5,100店超を予約(Connexion)、2025-07 に「毎週水曜に2,500店超」(DailyMax)。ほぼ訪問したことがない店が大半で、公開レビューに頼る。評価の高い店には2〜3か月続けて追加の卓を出す。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)、[Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)、[DailyMax「Timeleft Run」](https://dailymax.substack.com/p/timeleft-run-tous-les-samedis-matin)
- [自社主張] アプリは最初の16か月、Bubble と FlutterFlow で運営。独自基盤への移行に8か月。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)
- [自社主張] 初期のマッチングは3か月間手作業、その後ローコードと簡易アルゴリズム。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)

#### 1-5 返金・欠席料・決済まわり
- [事実] 利用規約(2026-06-29 更新と NexSpark が記載)はすべての課金を返金不可、サブスクは同じ期間で自動更新。EU/EEA/英国は最初のサブスクに14日の撤回権(ディナー登録で消滅)。 — [NexSpark(低。競合)](https://nexspark.org/journal/timeleft-review)
- [事実] 欠席料: 月額の35%(公式 blog の FAQ)。 — [公式 "Is Timeleft safe?"](https://timeleft.com/blog/is-timeleft-safe/)。**同じ公式の別 blog(2026-04-13)は「欠席の罰則はない」と書く。** — [公式 "Dinner with strangers"](https://timeleft.com/blog/dinner-with-strangers/)。公式ページ同士が矛盾している(更新時期の違い、あるいは国別運用の違い [推測])。
- [要約] Trustpilot と苦情サイトには、二重請求、キャンセル後の返金遅れが複数ある(Sikayetvar、検索結果の要約のみ)。
- 決済手数料(Stripe・アプリストア手数料)の率: **不明**。アプリストア経由の課金比率も不明。

#### 1-6 広告費・CAC・CPA・LTV・回収期間
- **確認できた数字は一件もない。** 創業者が語ったのは方法論(友人家族テスト→有料広告テスト→CAC が合えば本採用)だけ。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)
- [要約] 「広告での顧客獲得」を扱う章が2つの音声に存在する: New Economies(13:38)、Now We Build #51(19:09 "Paid Ads and Market Expansion")。いずれも番組ページに数値の記載はなく、音声・書き起こしは入手できていない。 — [New Economies](https://www.neweconomies.co/p/16m-net-arr-in-2-years)、[Now We Build #51](https://shows.acast.com/now-we-build/episodes/6a1f20269942b8f91f30d7a3)

#### 1-7 その他の収益源
- [自社主張] **ブランド提携**(スポンサー付きイベント): 事例は Teremana、Netflix(Addams Family)、Coca-Cola、Bolt France。問い合わせフォームの予算帯は「$25K未満」から「$500K+」。対面イベント、アプリ内の予約導線・アイスブレイクゲームへの露出、SNS・メール・プッシュの配信をセットで売る。 — [Timeleft Brand Partnerships(公式、2026)](https://timeleft.com/brand-partnerships/)。売上に占める比率は**不明**。
- [自社主張] ポーランド5都市で 250人同時のスペシャルディナー(PURO ホテルがスポンサー、ELLE がメディアパートナー、サブスク会員も別チケットが必要)。 — [Luma イベントページ(年不明)](https://luma.com/bm6s5f8t)

### Inferences
- [推測] **参加1席あたりの売上は €10〜18 程度。** (a) 2024-11 の月商 €1.2M ÷(水曜参加 1.5〜1.6万人×約4.3回=約6.5〜6.9万席)≒ €17〜18、毎週1.8万人(曜日問わず)で割ると ≒ €15.5。(b) 2025-08 の ARR €18M÷12=€1.5M/月 ÷ 月15万人 ≒ €10(月12万人なら €12.5)。単発 €13〜16、サブスク €15〜20/月(月2回なら1回あたり €8〜10)、ブラジル・メキシコ・マレーシアなど低価格地域の混在という価格帯と整合する。ただし「参加者数」が人数か席数か、売上が総額か純額かは不明で、**精度は ±30% 以上**。
- [推測] サブスク比率60%と、単発→月1.5〜2回でサブスク移行という創業者発言は、**「月2回以上来る人にだけサブスクが得になる価格設計」**を示す。単発€13〜16 ×2 = €26〜32 に対しサブスク €15〜20 なので、2回目以降の限界収益は1回あたり約 €8〜10 に下がる。
- [推測] 2026-05 の月10万人超を ARPU €10 で機械的に置くと月商 約€1.0M(年換算 約€12M)。これは**報告された売上ではなく、参加者の減少から見た単純な感度計算**(価格上昇があれば上振れる)。
- [推測] 東京の予約 2,856件/月 × ¥1,040〜1,890(サブスク会員の1回あたり〜単発)≒ **月 ¥3〜5.4M(約€18〜32k)**。日本の売上規模は世界全体の 2〜3% 程度の可能性。粗い目安で、サブスクの利用頻度が不明のため幅が大きい。
- [推測] 店に払わず、運営の人手も少ない設計のため、粗利は高い可能性があるが、**広告費が最大のコスト**になる。2023-10 に「広告予算が会社の費用を賄えなかった」と語った(WebFetch 要約。文意はやや曖昧)ことは、広告の回収が楽ではなかった初期の様子を示す可能性がある。

### Gaps
- 広告費の総額・推移、CAC/CPA(登録・初回参加・サブスク転換)、初回→再参加率、月次・年次の継続率、LTV、回収期間、粗利、決済手数料、返金率、サポート・運営人件費は**不明**(創業者の公開発言に数字なし)。
- MRR と ARR のどちらが原文かの確定。創業者の Instagram/LinkedIn 投稿の原文は未取得。
- New Economies、Now We Build、My First Million("He built a $1M/MRR dinner club app in 2 weeks"と題する回。PodPulse は 403、Recall.it は 404 で本文未取得)の音声。広告の話が出る可能性が最も高い。

---

## 2. 流入経路(広告、SNS、口コミ、アフィリエイト、PR、アプリストア、検索)

### Takeaway
成長の主軸は有料のソーシャル広告(特に Instagram/Meta)で、複数の記者・参加者が「広告で知った」と書く。創業者の個人 SNS(Instagram 約100〜120万)と大量の PR(自称400本)、口コミ・WhatsApp グループが補強。チャネル別の比率・CPA は誰も出していない。

### Cited Findings
- [事実] **Instagram のターゲティング広告で知った**(サンフランシスコの記者)。 — [Alta(2025-02-27)](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)
- [事実] マレーシアの記事は「同席者の多くが Instagram 広告で知った」と書く(スポンサード記事)。 — [Vulcan Post(2024-08-16)](https://vulcanpost.com/?p=867937)
- [事実] 友人の紹介で知った参加者(フィラデルフィア)、LA Times の記事を知らせるメールで知った筆者(Laitio)。 — [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)、[Tommi Laitio Substack(2025-02-03)](https://tommilaitio.substack.com/p/dinner-with-complete-strangers)
- [自社主張] **2024年は「広告のみ」で1日1都市**。ローカルのアンバサダーも都市マネージャーもなし。スペイン語の広告1本でスペインと中南米をカバー、のち地域ごとに広告ビジュアル・文面・サポートの口調を調整。 — [Frin Substack(2026-03-26 "How 4 CEOs launch internationally"、一次は Barbier の発言)](https://timfrin.substack.com/p/how-4-ceos-launch-their-product-internationally)、[Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)。「We opened 325 cities in one year」(Barbier、2026-03 の記事内)。
- [自社主張] 創業者は Instagram で約100万フォロワー(2024-12、「もうすぐ」)、1.2M(2026-06 の番組紹介)。ブランド提携ページは「エンゲージした SNS フォロワー 1.5M+」。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)、[Now We Build #51](https://shows.acast.com/now-we-build/episodes/6a1f20269942b8f91f30d7a3)[要約]、[Brand Partnerships](https://timeleft.com/brand-partnerships/)。**フォロワーが創業者個人のものか会社のものかは出典で曖昧。**
- [自社主張] 創業者の前職 Vertical Station(縦型動画メディア。SNS 運営)の経験があり、2024-10 のポッドキャストは「縦型動画に全振りする話」から入る。 — [MaxPodcasting 番組ページ(2024-10-16、en)](https://maxpodcasting.com/maxime-barbier/)。ただし番組ページは、縦型動画が Timeleft のチャネルとは書いていない。
- [自社主張] **PR**: 「約400本の記事・テレビ」(2024-12、自称)。成長要因として「孤独をめぐるメディアの関心と口コミ」と創業者が説明(要約)。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)、[GDI Podcast(2025-08-12)](https://www.globaldatinginsights.com/featured/gdi-podcast-maxime-barbier-ceo-and-founder-timeleft/)[要約]
- [事実] **有料の地方メディア記事**: Dallas・Seattle の 6AMcity に「Sponsored Content」の Timeleft 記事、マレーシアの Vulcan Post もスポンサード。 — [DalToday(検索結果、本文未読)](https://daltoday.6amcity.com/food/go-to-dinner-with-strangers-in-dallas-with-timeleft)[要約]、[Vulcan Post](https://vulcanpost.com/?p=867937)。**「報道」に見える露出の一部は買った枠**。
- [要約] 2025-10 に Paris のメトロと SNS で屋外広告キャンペーン(7〜15日、代理店 Socialclub が媒体オーケストレーション。Adrien De Oliveira は「Global Head of Marketing」として窓口)。 — [La Réclame / Socialclub(403、検索結果の要約のみ)](https://lareclame.fr/socialclub/realisations/trompez-vos-amis)。2026-03-30 掲載。キャンペーン名や費用は未取得。
- [事実] **ユーザーが自発的に WhatsApp グループを作る**: DC のグループは約400人、フィラデルフィアは100人超。 — [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [事実] 参加者同士の2次会(最大500人規模のアフターパーティを夏のパリで開催する例)。 — [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)
- [自社主張] **アフィリエイト/アンバサダー**: 専用リンク経由の**全売上の50%**、月次の自動払い、ダッシュボードあり。申請後にプロフィールを審査。**期間(初回のみか継続か)、資格基準(フォロワー数)、収益例は書かれていない。** — [Timeleft Affiliate(公式、2026)](https://timeleft.com/affiliate/)。利用者数・売上貢献は不明。
- [事実] 参加者向けの紹介機能: 招待リンク(+1)があるが、報酬は確認できない(既存ノート25)。
- [事実] アプリストア: Apple 編集部のおすすめバッジ、Google Play 4.4(約11,500件の評価、NexSpark 2026-08)、公式は App Store 4.8。 — [NexSpark(低)](https://nexspark.org/journal/timeleft-review)、[公式アフィリエイトページ](https://timeleft.com/affiliate/)。アプリストア経由のインストール比率は不明。
- [事実] 公式 SEO コンテンツ: 都市別の多言語ローンチ記事(言語別パス)と汎用解説記事(例: "dinner with strangers")。検索流入の比率は不明。 — [Timeleft blog](https://timeleft.com/blog/dinner-with-strangers/)
- [自社主張] **創業者のニュースレター**(DailyMax)は Timeleft の告知に使われる(Timeleft Run の予約は lu.ma、パリの土曜ラン)。LinkedIn 投稿が20万ビューを超えた例も創業者が書く。 — [DailyMax「Timeleft Run」](https://dailymax.substack.com/p/timeleft-run-tous-les-samedis-matin)、[DailyMax 2026-04-11](https://dailymax.substack.com/p/la-feature-qui-manque-a-votre-startup)
- [事実] TikTok・Snapchat・インフルエンサーを Timeleft の集客チャネルとして明記した記事は**確認できなかった**(Vertical Station の話題として言及があるだけ)。

### Inferences
- [推測] 広告の効きは「新しい街で最初の登録を作る」まで。再参加は WhatsApp グループ・友人の同席・サブスクの習慣化で支えられている。
- [推測] 「ローカルの現地チームなし」の成長を可能にしたのは、**創業者個人の発信力(約100万フォロワー)+ Meta 広告の創造的な文面の使い回し + 孤独というニュース性**の三つ。Shokujii が同じ型を再現するには、広告のクリエイティブ運用力が要る。
- [推測] アフィリエイト50%は、広告費(CPA)より高い手数料を払ってでも成果報酬型の流入を増やす狙いに見える。**LTV が広告の限界 CPA を上回る**と会社が見ている示唆だが、継続の有無が不明なため断定できない。

### Gaps
- チャネル別の比率、CPA、Meta/TikTok/Google 広告の予算、アフィリエイト経由の売上比率、アプリストア経由の比率: 不明。
- 創業者の Instagram のフォロワー数が個人アカウントか会社アカウントか。
- 2025-10 のパリのメトロ広告の費用・成果。

---

## 3. 成長と縮小の経緯

### Takeaway
2023-05 に最後のピボット、2023-10 に4都市(約300人/週)、2024 に広告のみで 300超の都市へ。報道ベースのピークは 2024-12〜2025-03(都市278〜300超)。2025-08 以降は 200〜220、2026-06 の番組紹介は162。公式サイトは 200+ を維持しつつ、拠点一覧は195。**参加人数は 2024-12 の毎週1.5〜1.8万人から、2026-05 の月10万人超へ減少したように見える。**

### Cited Findings

#### 3-1 都市数・参加者数の出典別時系列(会社の自己申告。矛盾はそのまま併記)
| 記事・発言日 | 都市 | 国 | 規模 | 出典 |
|---|---|---|---|---|
| 2024-01-08 | — | — | 会員5万人、毎週800人超が新規参加、2,350卓 | [Le Bonbon](https://en.lebonbon.fr/paris/society/a-crazy-concept-of-dinners-between-strangers-for-singles-is-coming-to-paris) |
| 2024-02-05 | 欧州43 | — | — | [VICE](https://www.vice.com/en/article/timeleft-friend-finding-platform-review/) |
| 2024-07-26(収録日不明) | 80 | 18 | 初回は25人→35→70→81人 | [Temy(広告記事)](https://www.temy.co/breaking-bread-building-bonds-how-maxime-barbiers-timeleft-is-redefining-connections-in-cities-worldwide/) |
| 2024-08-06 | 150超 | 30超 | — | [Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner) |
| 2024-10-22 | 275超 | — | — | [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html) |
| 2024-10(収録) | 約280 | 62 | 水曜に約1.6万人、約1,400店、**「今年40万人が着席」**、アプリ100万ユーザー到達、チーム約68〜70人 | [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/) |
| 2024-12-01 | 300超 | 65 | 毎週1.8万人、チーム70 | [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros) |
| 2024-12-08 | 278 | 61 | 水曜に1.5万人超、5,100店超、**累計4.4万ディナー・23.6万人**(2023-09 以来) | [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998) |
| 2025-02-27 | 300超 | 60 | 水曜に1.15万人、68%が女性 | [Alta](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/) |
| 2025-03-31 | 約300 | 60 | 毎週約2万人(会社の主張) | [The Gown](https://the-gown.com/2025/03/31/timeleft-connecting-people-or-capitalising-on-loneliness/) |
| 2025-07-06 | — | — | 登録3M超、ユニーク顧客60万、水曜に2,500店超 | [DailyMax](https://dailymax.substack.com/p/timeleft-run-tous-les-samedis-matin) |
| 2025-08(Frin) | 200超(約220) | — | 月15万人、ARR €18M、約100人 | [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting) |
| 2025-08-12 | 250超 | 50超 | 300万ユーザー | [GDI Podcast](https://www.globaldatinginsights.com/featured/gdi-podcast-maxime-barbier-ceo-and-founder-timeleft/)[要約] |
| 2025-08-14 | 275超 | — | 月12万人、水曜に7,000ディナー(別欄 15,000/週) | [Déclic #324](https://podcast.ausha.co/le-declic-podcast-par-alec-henry/vire-par-tf1-de-sa-propre-entreprise-il-revient-avec-une-startup-mondiale-maxime-barbier-maxime-barbier-declic-324)[要約] |
| 2026-04-13(公式 blog) | 200超 | 52 | 4M+メンバー | [Timeleft blog](https://timeleft.com/blog/dinner-with-strangers/) |
| 2026(「独立した報道」として公式が引用) | — | — | **週約6,500ディナー**(席数換算は週約3.5万、月約15万 [推測]) | [公式 "Is Timeleft safe?"](https://timeleft.com/blog/is-timeleft-safe/) |
| 2026-05-04 | — | 50超 | 登録約400万、**月10万人超が参加** | [DailyMax](https://dailymax.substack.com/p/le-mec-qui-a-failli-ne-pas-etre-la) |
| 2026-06-03 | **162**(別欄160+) | **47**(別欄45+) | 登録3M+、月15万人(紹介文は更新されていない可能性) | [Now We Build #51](https://shows.acast.com/now-we-build/episodes/6a1f20269942b8f91f30d7a3)[要約] |
| 2026 の公式拠点一覧 | 195(表記200+) | 50(表記52) | 米国55、ブラジル12、フランス10、豪9、加9、スペイン9、英8、独7、インド4、日本3 | [Timeleft Locations](https://timeleft.com/locations/) |

- [事実] **登録数の伸び**: 100万(2024-10)→300万超(2025-07)→約400万(2026-05)。9か月で+200万だったものが、次の10か月は+100万で、**新規登録の伸びは鈍化**。 — 上記の各出典から。[推測]を含む。
- [事実] 2025年の縮小の理由: 2024年に325都市を開き運営と予算が逼迫。小都市は参加密度が足りず、同じ約10人と毎週会って飽きられ失速。「1都市で週50人以上」を深さの目安にし、約220都市に縮小。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(既知。再確認)。2026 の162都市という数字についての**説明・報道は見つからなかった**。
- [事実] 展開順(報道ベース): リスボン(2023-05)→ポルト・パリ・マルセイユ(2023-09〜10)→フランス他都市(2023-12〜2024-01、Bordeaux・Lille など)→バルセロナ(2024-01、広告のみ)→英国(Brighton・Birmingham・Liverpool・London・Manchester、2024-01)→ベルギー(Antwerp・Brussels、2024-02)→ NYC(2024-02-24)→フィラデルフィア(2024-04)→ロサンゼルス(2024-05)→マレーシア・シンガポール(2024-08前後。アジア最初)→日本(2024-12 時点の Japan Times 記事あり。内容は 402 で未読)。 — [Timeleft blog の都市ローンチ記事(検索結果のタイトル・URL)](https://timeleft.com/blog/2024/02/24/timeleft-launches-in-nyc-choose-chance-in-the-city-of-infinite-possibilities/)、[Vulcan Post](https://vulcanpost.com/?p=867937)、[Tommi Laitio](https://tommilaitio.substack.com/p/dinner-with-complete-strangers)、[Japan Times(2024-12-02、402 で本文未読)](https://www.japantimes.co.jp/community/2024/12/02/issues/timeleft-app-japan-loneliness/)[要約]
- [事実] ロサンゼルスは 2024-05 開始から約8か月で1万人が利用(LA Times の引用、Laitio 経由の孫引き)。 — [Tommi Laitio](https://tommilaitio.substack.com/p/dinner-with-complete-strangers)
- [事実] 国別の規模: 米国が最大市場で、ニューヨークは水曜に約1,000人(2024-10)、米国は約50都市。2位はブラジル。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)。2026 の拠点一覧でも米国55、ブラジル12が最多。
- [事実] 日本: 東京・大阪・名古屋。東京は水・金に夕食、月曜に女性限定、木に飲み、土に朝ラン・散歩・コーヒー。2026-09 の東京は予約 2,856件、新規 259人、イベント 46回。 — [Timeleft Tokyo](https://timeleft.com/tokyo/)
- [自社主張] 2025-07 に新フォーマット: 土曜朝のパリのラン(Timeleft Run)。木曜の Social Drinks をパリ・マドリード・東京・ニューデリーで試験。 — [DailyMax](https://dailymax.substack.com/p/timeleft-run-tous-les-samedis-matin)
- [自社主張] 2025-12 の公式 post(検索結果の要約): 「14か国・55都市」と書く別の post と、パリ再起動で14週に会員1.7万人という post が併存。いずれも日付が信頼できない(ページ日付の付け替えの可能性)。 — [Timeleft 公式 post(検索結果の要約)](https://timeleft.com/post/back-to-basics-timeleft-launches-its-unique-dinners-in-paris/)[要約]

#### 3-2 city manager / country manager の有無(出典間の矛盾の整理)
- [自社主張] Frin: 2024年の拡大は広告のみで、**ローカルアンバサダーも都市マネージャーもなし**。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)
- [事実] 一方、**country manager は存在**: Luxembourg(Aya Tohme、Paperjam)、**同じ Aya Tohme が Benelux manager**(Brussels Times 2024-08)、シンガポール・マレーシア・インドネシアを担当する country manager(Vulcan Post)、Inquirer は「店は city manager に WhatsApp で連絡」と書く。 — 各記事
- [推測] **整合する読み方**: 「都市を開く作業」は広告のみ(現地人員なし)だが、国単位では少数の country manager を置き、店からの問い合わせ窓口・現地パートナー対応を担う。都市単位の常駐マネージャーは(米国で WhatsApp 窓口として)少なくとも一部にいる。Frin の「なし」は誇張を含む。

### Inferences
- [推測] 都市を広げる速度は広告と自動化で上限なく上がるが、**1都市あたりの週次参加者数(密度)は広告で作れない**。縮小は経営判断というより、小都市のユニットエコノミクス(最低催行密度)の崩れ。
- [推測] 新規登録の鈍化、参加者の減少(15万→10万超)、162都市という数字、サブスク/価格の引き上げ(米国 $16→$20〜35、前述)は、**成長から収益性へ軸足を移した**ことを示す一連の兆候。ただし 2026 の売上・黒字化の公式な数字はない。
- [推測] 日本は世界の中でも小さな市場(東京の月予約約2,900件)で、本格投資の対象になっているかは疑わしい。

### Gaps
- 縮小(162都市説)の公式な説明・閉鎖都市の一覧。2026-05 の「10万人」と 2026-06 の「15万人」が同時に出る理由(紹介文の更新漏れか、定義の違いか)。
- 2024 の都市別の参加者分布(1都市あたり週50人以上の都市が何割か)。
- Japan Times(2024-12)・Hong Kong(SCMP)・インド、豪、加の現地記事は本文未読。インド・豪・加は拠点一覧に都市があるが、検索では現地報道を確認できなかった。

---

## 4. 製品・運営(参加費・卓・マッチング・欠席料・店・店との契約・新フォーマット)

### Takeaway
基本は「水曜夜、6人(自分+5人、国によっては4〜6人)、約3時間、会計は各自」。参加費はアプリ側の前払い(単発/サブスク)。店は評価・静かさ・雰囲気で選び、お金の交渉をしない。新フォーマット(ドリンク、ラン、コーヒー、女性限定)で週内の利用機会を増やしている。

### Cited Findings
- [事実] 卓の人数: 6人(自分+5人)が標準。ルクセンブルク・ベルギー・マレーシアも6人、東京は4〜6人、日本の体験記は5人。 — [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)、[Tokyo ページ](https://timeleft.com/tokyo/)、[Tokyo Weekender](https://www.tokyoweekender.com/entertainment/tech-trends/timeleft-app-japan-review/)。体験者の卓は実際には 7人(KC、Laitio)から 3人(Tasting Table)まで揺れる。
- [事実] マッチング: 約40問(Connexion、Barbier 書き起こし)の性格診断。言語・予算・食事制限・政治の話題の可否、年齢差は約10年以内(Barbier)、事後の評価が次回に反映。**婚姻・交際状況は取得するがマッチングには使わない**(Barbier)。既存ノートの「約50問」は Connexion・書き起こしの「約40問」と異なる。 — [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)、[MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)
- [事実] 情報の出し方: 前日(火曜)に職業・国籍・星座の概要、当日の朝に店、予約は月曜24時締切(Connexion 2024)。2026 は予約が開始の13時間前まで、店の公開は12時間前。 — [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)、[公式 blog 2026-04](https://timeleft.com/blog/dinner-with-strangers/)。**予約締切が「月曜24時」から「13時間前」へ短縮された**(運用の柔軟化、直前キャンセルの余地が増えた)[推測]。
- [自社主張] 事後の評価(マッチ、食事・サービス、コスパ)。「前回の同席者との再会リクエスト」を可能にし、2人が互いに「はい」なら個別メッセージが可能(2024)。 — [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)、[Le Bonbon](https://en.lebonbon.fr/paris/society/a-crazy-concept-of-dinners-between-strangers-for-singles-is-coming-to-paris)
- [自社主張] 固定の週リズム: 「年50回の試行 vs 月1回の12回」という理由で毎週。水曜は店が空いており、早すぎず遅すぎない。国によって開始時間だけ変える(パリ20時、ドイツ19時)。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)
- [自社主張] 「選択肢を削った」ことが転機: 最初の3年間にヨガ・ラン・料理教室・ハイキングを試して全部失敗し、「水曜の夕食6人、活動も日程も選べない」に一本化した。**無料の期間が3年続き、課金が遅すぎたのが最大の失敗**。 — [DailyMax 2026-04-11](https://dailymax.substack.com/p/la-feature-qui-manque-a-votre-startup)
- [事実] 店の選定: Google 評価 4.3 以上(米国、Inquirer)、4.3 以上(Barbier 書き起こし、「4.3 以上、静か、ライブ音楽なし、クレジットカード可、写真」)、4 以上・Instagram 映え(ルクセンブルク)、中価格帯。ほとんどの店はチームが訪問していない。高評価の店は2〜3か月続けて追加の卓が入る。 — [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)、[MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)、[Paperjam](https://paperjam.lu/article/timeleft-ou-comment-contrer-so)
- [事実] 店との契約: 店に Timeleft が払う・受け取る規定は確認できず。**店は「6人卓2卓の予約」を受け取るだけ**。OpenTable 経由で予約される場合がある。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)、[Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)。矛盾する Brussels Times の記述は第1節参照。
- [事実] 店からの不満: 取得できた報道に、**店主が Timeleft に不満を述べた記事はなかった**(店主の唯一のコメントは「向こうが勝手に予約してきた」)。 — [Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [自社主張] 欠席料: 月額の35%(米国を除く)。同卓の2人以上の報告で記録(既存ノート)。 — [公式 "Is Timeleft safe?"](https://timeleft.com/blog/is-timeleft-safe/)。公式の別 blog(2026-04)は「欠席の罰則はない」と書き、矛盾。
- [事実] 同卓の無断欠席の記録: DC で「同じ店の別の卓は大半が来なかった」(Axios、検索結果の要約)、卓に自分以外2人しか来なかった(Tasting Table 2025-05)。Barbier は「情報を与えるほど欠席が増える」と述べた。 — [Axios DC(403、検索要約)](https://www.axios.com/local/washington-dc/2024/08/18/timeleft-app-dinner-friends-dc)[要約]、[Tasting Table](https://www.tastingtable.com/1859085/dinner-parties-with-strangers-timeleft)、[Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)
- [事実] 新フォーマット(2026 時点の東京のスケジュール): 夕食(水・金)、女性限定夕食(月)、ドリンク(木)、コーヒー(土 13時)、ラン(土 8時)、散歩(土 10時)。女性限定は火曜に50都市超(2026-04 公式)。 — [Tokyo ページ](https://timeleft.com/tokyo/)、[公式 blog](https://timeleft.com/blog/dinner-with-strangers/)
- [自社主張] 利用者属性: 女性60〜68%(2024〜2025)、55%(2026-05)。年齢は 30〜45/50 が中心(2024-10)、20〜40歳が75%(2026-05)。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)、[Alta](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)、[DailyMax 2026-05](https://dailymax.substack.com/p/le-mec-qui-a-failli-ne-pas-etre-la)
- [自社主張] 安全: 実名・実写真、電話認証、18歳以上(UAE は21歳)、ブロック・通報、「グループチャットの94%は懸念なし」「99%の体験に事故なし」。 — [公式 blog 2026-04](https://timeleft.com/blog/dinner-with-strangers/)、[公式 "Is Timeleft safe?"](https://timeleft.com/blog/is-timeleft-safe/)
- [自社主張] 日本語版は日本語/英語を選べ、同じ言語の人を同卓にする。 — [Tokyo ページ](https://timeleft.com/tokyo/)

### Inferences
- [推測] **選択肢を削る設計(曜日・店・活動を選ばせない)**と**情報を隠す設計(同席者のプロフィールは職業・国籍・星座のみ、店は当日)**は、欠席の削減と運用の単純化の両方を狙うもの。創業者は「情報を与えるほど欠席が増える」と述べている。
- [推測] 店は通常営業の水曜夜に「6人×2卓」を受ける。店の負担が小さく交渉コストがほぼないため、店舗拡大の速度が広告速度と同じになった。店側に利点(送客・収益の保証)を明示する営業は、報道では確認できない。

### Gaps
- 店への営業フロー、店のブラックリスト基準、店の離脱率(「注文しない客が多いと店が提携終了」という既存ノートの記述の一次出典)。
- 欠席率、卓の充足率(実参加人数の分布)。
- 新フォーマットごとの価格・利用率。

---

## 5. 調達・体制・評価額

### Takeaway
公式の資金調達発表は見つからなかった。2021年に seed $2M(創業者本人が語る)。Series A $7M(2024-07-19)は CB Insights 単独の記録で、投資家名に混同の疑いがあり**未確定**。評価額は不明。人数は 4(2024-01)→約70(2024-12)→約100(2025-08)で、2026 の人数は低信頼ソースのみ(76〜93)。

### Cited Findings
- [自社主張] seed: 「$2M 超を NY・パリ・リスボンの国際ファンドから調達」(2021-09 のピボット「非婚活アプリ」時)。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)、[DailyMax「100 cafés」(2021-11 頃、日付不明)](https://dailymax.substack.com/p/100-cafes-avec-100-inconnues-timeleft)。
- [自社主張] 2023-04 の最後のピボット時、共同創業者2人は約9か月の資金を持ち、投資家は残りの返却を求めた。 — [DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)
- [事実] 2024年前半(推定)の Paperjam 記事は「**現在、資金調達を模索中**」と書き、従業員15人、累計参加5万人。 — [Paperjam](https://paperjam.lu/article/timeleft-ou-comment-contrer-so)(記事日付不明)
- [要約] **Series A $7M、2024-07-19**。投資家は Redstone、Kima Ventures、FJ Labs、Play Ventures(CB Insights、合計2ラウンドで $7M と表示)。 — [CB Insights](https://www.cbinsights.com/company/timeleft/financials)(検索結果の要約のみ。本文は未読)。**「Redstone」は同名のブロックチェーン企業 RedStone(同時期に Series A $15M)との名前の取り違えの可能性があり、未確認**。会社・投資家側の発表は見つからなかった(Sifted、TechCrunch、Forbes、Les Echos、Maddyness などで調達記事は検索に出なかった)。
- [事実] 調達額の累計は出典で $2M(seed のみ)〜$7M と食い違い(既存ノート)。Crunchbase と Seedtable は取得に失敗し、再確認できなかった。
- [事実] 体制の推移(自己申告): チーム 4人(2024-01)→約68〜70人(2024-10〜12)→約100人(2025-08)。2026 は 76〜93(Caplight/Tracxn、既存ノート。低信頼)。国籍約20、タイムゾーン11、2024-10 に初のオフサイト(ノルマンディー、25国籍超)。 — [MaxPodcasting 書き起こし](https://maxpodcasting.com/maxime-barbier-transcript/)、[DailyMax #173](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)、[Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)
- [事実] 体制: Maxime Barbier が共同創業者・CEO、Adrien De Oliveira が共同創業者・マーケティング責任者(Global Head of Marketing)。サポートは全タイムゾーンで分散配置。 — [Connexion](https://www.connexionfrance.com/news/how-to-meet-new-people-over-dinner-in-france-we-try-out-new-app/682998)、[Frin(2026-03-26)](https://timfrin.substack.com/p/how-4-ceos-launch-their-product-internationally)
- [事実] 創業者の経歴: 前職のメディア会社 MinuteBuzz/Vertical Station を共同創業し、2019年に離れた。経緯について TF1 との係争報道がある(検索結果のタイトルのみ。本文未読)。 — [FrenchWeb(タイトルのみ)](https://www.frenchweb.fr/maxime-barbier-et-laure-lefevre-attaquent-tf1-suite-a-leur-eviction-de-minute-buzz-vertical-station/382175)[要約]、[MaxPodcasting 番組ページ](https://maxpodcasting.com/maxime-barbier/)、[Déclic #324](https://podcast.ausha.co/le-declic-podcast-par-alec-henry/vire-par-tf1-de-sa-propre-entreprise-il-revient-avec-une-startup-mondiale-maxime-barbier-maxime-barbier-declic-324)[要約]
- 評価額: 公開情報は**確認できなかった**。

### Inferences
- [推測] 2023-10 の「資金は 2024-03 末まで」という状況から、2024年の「広告のみ」の拡大は **seed の残りと売上の再投資**で賄われ、2024-07 の Series A(もし実在すれば)は成長の結果として入った可能性が高い。この順序は「広告費を売上で回収できていた」ことの間接的な示唆(確証なし)。
- [推測] 約100人の体制の大半は、サポート・運営・開発・広告運用で、都市単位の営業人員ではない。国別の country manager は少数。

### Gaps
- Series A の発表・投資家・金額・評価額の一次情報、2025〜2026 の追加調達や借入、黒字化の有無。
- Crunchbase / PitchBook / Dealroom の有料欄(取得できず)。

---

## 6. 批判・リスク・失敗談

### Takeaway
体験記は総じて好意的だが、(a) 欠席で卓が成り立たない、(b) 会計や店のばらつき、(c) 同じ顔ぶれ・再来の疲れ、(d) 自動更新・返金・サポートの苦情、(e) 価格の格差(孤独な人ほど払えない)が繰り返し出る。Trustpilot は 3.2/5(766件、1つ星26%)。安全面では 2026 年に嫌がらせの報告が1件ある。

### Cited Findings
- [事実] **Trustpilot**: 3.2/5、766件(直近12か月 121件)、5つ星48%・1つ星26%、会社は否定的レビューの100%に返信(通常2週間以内)。会社は最近、利用者にレビュー依頼をしていない。主な苦情は、価格(「店が高すぎた」2026-10)、自動更新・解約のしにくさ、イベントの無通知変更・欠席(「自分の卓に誰も来なかった」2026-09)、店の騒音・空調なし(2026-08)、年齢差・男女比の偏り、サポートの返信が5〜7日、2026年のハラスメントの報告。 — [Trustpilot(取得 2026-10)](https://www.trustpilot.com/review/timeleft.com)(中。投稿は自己選択)。競合ブログは 3.4(2026-08 末)から 3.2(2026-10-05)へ低下と書く。 — [NexSpark](https://nexspark.org/journal/timeleft-review)(低)
- [事実] 利用規約: 全課金は返金不可、サブスクは同期間で自動更新、アプリ削除では解約にならない。Timeleft 側が中止した場合の扱いは規約に書かれていない。 — [NexSpark](https://nexspark.org/journal/timeleft-review)(低。規約原文は未取得)
- [事実] 同卓の欠席・少人数: 自分以外2人だけ(Tasting Table 2025-05)、DC の別の卓は大半が欠席(Axios、要約)、人数が少ない都市や非水曜の枠は直前に中止される(NexSpark)。 — 各記事
- [事実] **再会・疲れ**: 毎週卓が入れ替わるため友情が深まらない(NexSpark)、「毎週自己紹介し直すのは疲れるので再訪しないかも」(Vulcan Post)、2024-02 の VICE は会話が早い段階で深くなりすぎる、診断の質問が奇妙、マッチが機械的と評価。 — [VICE](https://www.vice.com/en/article/timeleft-friend-finding-platform-review/)、[Vulcan Post](https://vulcanpost.com/?p=867937)
- [事実] 会計・店: 共有メニューが合わない、個別注文で割高(Vulcan Post)、店が騒がしい(Inquirer の2次会)、予算外の店(Trustpilot)。
- [事実] **価格の公平性**: 「社会的孤立の最も深刻な層(学生・高齢者・低賃金労働者)を価格が排除する」(The Gown、学生紙の論説)。マレーシアの記事も「英語教育を受けた比較的裕福な層に偏る」と指摘。 — [The Gown](https://the-gown.com/2025/03/31/timeleft-connecting-people-or-capitalising-on-loneliness/)、[Vulcan Post](https://vulcanpost.com/?p=867937)
- [事実] **デートアプリ化**: 「デーティングアプリではないと言うが、その気配は漂う」(Alta)。同席者の2人が会で出会った人と交際していた例(Alta)、参加者の68%が女性(Alta)。 — [Alta](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)
- [事実] 日本の体験記: 最初は詐欺だと思った(インタビュー対象)、相性は運次第。 — [Tokyo Weekender](https://www.tokyoweekender.com/entertainment/tech-trends/timeleft-app-japan-review/)
- [事実] **失敗の自認**: 325都市を1年で開き運営・予算が逼迫、小都市は密度不足で失速、「深さを先に作るべきだった」。3年間無料のまま成長を追い、課金が遅すぎた。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)、[DailyMax 2026-04-11](https://dailymax.substack.com/p/la-feature-qui-manque-a-votre-startup)
- [事実] Benelux manager の発言: 「We do the opposite of dating apps.」。創業者は「情報を与えるほど、欠席が増える」と述べた(英語記事内の発言)。 — [Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)
- [事実] 公式ページ間の矛盾(欠席料の有無、都市数、「ユーザー」の定義)があり、規約・価格・規模の確認が利用者にも難しい。 — 第1・3節参照
- 取得できなかった主要媒体: Guardian、BBC、NYT、WSJ、Bloomberg、Forbes、Fast Company、Business Insider、Inc.、Sifted、Les Echos は、検索でも Timeleft の記事が**出てこなかった**(検索インデックスの限界の可能性があり、存在しないとは言えない)。

### Inferences
- [推測] 苦情の中心は「製品の核(卓の成立・マッチ・店)の品質のばらつき」と「課金・解約の不透明さ」の2つ。前者は都市の密度・欠席率に、後者はサブスク中心の収益構造に直結する。
- [推測] 欠席への罰則を設けた(35%)後も報道で欠席は続き、公式 blog が「罰則なし」とも書く点から、罰則の運用が揺れている可能性がある。

### Gaps
- 欠席率、再来しない理由の定量データ、解約率。Trustpilot 以外の定量(App Store の低評価の中身)。
- 店側の不満を述べた報道は確認できなかった(「店が不満を言わない」ことと「不満がない」ことは別)。

---

## Shokujii の付け入る隙の示唆(推測)

1. **「卓の成立」を広告ではなく幹事で作る。** Timeleft の縮小の核心は、広告で作れるのは登録までで、週次の参加密度(都市で週50人以上)は広告で作れないこと。幹事が人を連れてくる Shokujii は、少人数の街でも卓が成立しやすい。比較軸は「1都市あたりの週次参加者」。
2. **同じ顔ぶれ・毎週の自己紹介疲れ・友情が深まらない点が弱点。** 同じコミュニティで繰り返す仕組み(幹事の継続開催、再会)は Timeleft が後付けで足した Repeat 機能の領域。Shokujii の幹事型はここで優位に立てる可能性がある。
3. **課金の透明性と欠席対策で差をつける。** Timeleft の苦情は自動更新・返金不可・欠席料の運用ぶれ・サポート遅延に集中(Trustpilot 3.2)。単発課金中心・返金条件の明示・メニュー事前注文(前払いで欠席が減る)は、同じ苦情に対する明確な答えになる。
4. **店と組む価値を数字で出せる。** Timeleft は店に払わず、店は「勝手に予約された」と感じ、注文しない客のリスクも店が負う。メニューを事前注文する Shokujii は、店に「確定売上」を渡せる。店の不満を直接述べた報道は見つからなかったが、これは Timeleft が見落としている余白。
5. **日本市場は Timeleft にとって小さい(東京の月予約約2,900件、価格¥1,890/¥2,290、3都市)。** 日本語の運用・日本の店(個室・コース・予約文化)・企業や自治体との提携(Timeleft は提携先不明)で狙える余地はあるが、**Timeleft のブランド提携(最大 $500K+ の予算帯)と創業者の約100万フォロワーの発信力は、広告費が張れる相手として強い**。正面から広告で競わず、幹事・店・企業の関係で勝つほうが現実的。
