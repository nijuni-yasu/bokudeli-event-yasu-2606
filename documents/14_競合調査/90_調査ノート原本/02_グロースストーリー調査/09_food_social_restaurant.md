# 食事×社交イベント/飲食店プラットフォームのグロースストーリー(Timeleft / OpenTable / Dinner Lab / Eatwith / Resy / Tock / TableCheck / 222 / Pie)

調査時点: 2026年10月11日。目的: 各サービスの「初期トラクション → 成長施策 → 成長スピードと資金 → 失敗・停滞」を時系列で整理し、Shokujii(日本の食事コミュニティイベント基盤。幹事が立て、参加者がメニューを注文して参加。飲食店パートナー向け管理画面あり)への示唆を出す。

## 0. 読み方・制約・前回ノートの訂正(必読)

- 凡例: **[事実]** = 出典で確認 / **[推測]** = 調査者の解釈・計算 / **[不明]** = 確認できず。
- 信頼度: **高** = 一次資料(SEC 提出書類、公式プレスリリース、創業者本人の文章)または本文を取得して確認した報道 / **中** = 報道・二次ソース・創業者の自己申告(監査なし) / **低** = 検索結果の要約のみ、単一の非公式情報、出典が示されていない二次ブログ。
- 本調査の WebSearch は上限の18回を使い切った。残りは WebFetch で補った。WebFetch は要約モデル経由のため、数値の取り違えが起こり得る。重要な数値は複数の出典で突き合わせた。取得失敗(403/404/429)のページは「検索要約のみ」として低信頼扱いにしている。
- 「既存ノート06」= `世界のイベント告知サービス 集客施策調査/06_food_dining_social.md`。そこで本文確認済み(★)とされた情報は「既存ノート06由来」と明記して再利用した(本調査では再取得していない)。
- **前回ノートの訂正・注意**
  1. 既存ノート06は「2025年12月、Timeleft がパリに原点回帰で再参入(9/27開催予定、初回目標300人)」と書いている。しかし同じページには「€5割引コード DAILYMAX23」「14週間で17,000会員」「毎月100万人をつなぐ目標」があり、創業者のニュースレター(2024-12)は「2023年10月時点でパリ・マルセイユ・ポルトの4都市、毎週水曜に約300人」と書く。**このブログは2023年9月27日のパリ初ローンチ記事で、ページ上の日付(2025-12-15)はサイト移行などによる再掲日の可能性が高い [推測]**。パリ「再参入」を2025年12月の出来事として扱うのは避けること。
  2. 依頼文は TableCheck を「2012年東京創業」としているが、日本語版 Wikipedia と Kepple の記事(2025-03-31)はいずれも**2011年3月設立**。サービス(TableSolution)の提供開始は2013年10月/2014年2月。
  3. 依頼文は Dinner Lab を「2012年創業」としている。TechCrunch(2014-06-03)は「2012年8月創業」、Entrepreneur と Failory は「2011年開始」、Harvard D3 は「2012年」。出典間で食い違う。閉鎖は2016-04-14で確定。
  4. Timeleft の「Facebook グループから始まった」という説明は、取得できた出典では確認できなかった。確認できたのは WhatsApp グループ・Typeform・Stripe リンクでの検証(後述)。Facebook グループは [不明]。

---

## 1. Timeleft(最優先)

### Takeaway
2020年創業の別アプリから4度ピボットし、**2023年5月に「毎週水曜、知らない人6人の夕食」へ最後のピボット**。広告のみで都市を1年で320超に開き(2024)、2025年に200〜220都市へ縮小(臨界質量のある都市に集中)。創業者の主張では2025年8月に月15万人参加・ARR €18M・約100人体制。資金調達額は出典間で $2M〜$7M と食い違い、確定できない。

### Cited Findings

#### 一言サマリ
- [事実] Maxime Barbier(元 MinuteBuzz 共同創業者。SNSメディア出身)と Adrien De Oliveira。2023年5月に最後のピボットで現在の形に。初週の売上は €125(Frin)または約€110(Barbier 自身)。15日間で Typeform + WhatsApp + Stripe で検証。2024年に300超の都市へ急拡大→2025年に縮小。 — [Frin, How They Build(2025-10-09)](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)、[Barbier のニュースレター(2024-12-01)](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)、[Déclic #324 概要(2025-08-14)](https://podcast.ausha.co/le-declic-podcast-par-alec-henry/vire-par-tf1-de-sa-propre-entreprise-il-revient-avec-une-startup-mondiale-maxime-barbier-maxime-barbier-declic-324)。信頼度: 中(自己申告)。

#### 年表
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 2020-04〜10 | コロナ期に「夢リスト」型アプリ(ピボット1)。法人設立は2020-10-01 | 約5,000件の夢を収集(Barbier) | [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中)、[Tracxn](https://tracxn.com/d/companies/timeleft/__aDvq69-tMF73H6WNRLGae_DzNk5Jz5rVxD_kw2Poqpg)(低。ページにエラー表示あり) |
| 2021-09/10 | 「ノンデーティング」アプリで seed $2M 調達。米国で6か月試すも断念 | $2M | [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中)、[Caplight](https://www.caplight.com/company/timeleft)(低) |
| 2022-05 | リスボン発の都市アクティビティ型(ピボット)。約10か月で断念(技術チーム確保の難しさ、女性の安全懸念) | — | [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中) |
| 2023-01 | 都市でのグループ活動型(ピボット) | — | 同上 |
| 2023-04 | 最後のピボット決定。条件は「2週間以内に開始、有料、他人のプロフィールを見せない」。投資家が残金返却を求め、runway 約9か月との記述(要約) | — | 同上(中〜低) |
| 2023-05-03 | 最初のディナー(リスボン)。初週売上 約€110〜€125 | €110(Barbier)/€125(Frin) | [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)、[Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中) |
| 2023-06〜09 | リスボンは開始2か月余りで月2,500人、提携50店、毎週100卓超、ニュースレター購読者15,000人超。2023-06-19 に地元紙 Público 掲載。ポルト初回(9/13)は35卓 | 上記 | [Timeleft ブログ(2023-09-17)](https://timeleft.com/blog/2023/09/17/timeleft-expands-to-porto-join-the-dining-revolution/)(高。自社発表) |
| 2023-09-27 | パリ開始(目標300人。開始〜14週で会員17,000人) ※ページ日付は2025-12-15だが内容は2023年のもの [推測] | 17,000会員 | [Timeleft ブログ(パリ)](https://timeleft.com/post/back-to-basics-timeleft-launches-its-unique-dinners-in-paris/)(中) |
| 2023-10〜12 | 4都市(パリ・マルセイユ・ポルトほか)で毎週水曜に約300人。売上は約€20,000(10月)/ MRR €20k(12月) | MRR €20k | [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)、[Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中。時期が10月と12月で食い違う) |
| 2024-01 | 広告のみでバルセロナへ(初の国際展開)。1/31 時点でフランス10都市、「3か月未満で45都市」を宣言 | 10都市(仏) | [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)、[LinkedIn(2024-01-31)](https://www.linkedin.com/posts/maximebarbier_timeleft-is-now-in-10-cities-in-france-activity-7158403453159981058-oOBY)(中。投稿日は LinkedIn の ID から逆算 [推測]) |
| 2024-02-06 | 35都市・7か国。スイス・ベルギー・ルクセンブルクで初回(3か国で参加500人超)。2/28 にドイツ6都市で開始予定 | 35都市 | [LinkedIn(2024-02-06)](https://www.linkedin.com/posts/maximebarbier_timeleft-is-now-open-in-35-cities-and-7-countries-activity-7160606093683875840-548W)(中) |
| 2024(初頭〜春と推測) | ルクセンブルク記事: 約60都市・欧州約10か国、累計5万人超が参加、従業員15人、資金調達を模索中(額不明)。ルクセンブルクに country manager あり | 5万人超 | [Paperjam](https://paperjam.lu/article/timeleft-ou-comment-contrer-so)(中。記事日付不明) |
| 2024-07-19 | Series A $7M(データベース記録。会社の公式発表は確認できず) | $7M | [CB Insights](https://www.cbinsights.com/company/timeleft/financials)(低〜中) |
| 2024 | 1年で320超(別記述で325)の都市を開設、約1日1都市。チームは4人から70人へ。毎週1.8万人が参加と主張 | 320〜325都市 | [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)、[Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中) |
| 2024-11 | 11月の売上 €1.2M(前年同月比 +48倍)。Instagram フォロワー100万に迫る | €1.2M/月 | [Barbier NL(2024-12-01)](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中。同ページ内に「MRR €1M」「MRR €10M」「2025年目標 €25M」など整合しない記述もある) |
| 2025-02 | 300都市・60か国。毎週水曜に約11,500人が参加(サンフランシスコの記者が Instagram のターゲティング広告で認知) | 11,500人/週 | [Alta](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)(中〜高) |
| 2025-07 | 新フォーマット Timeleft Run(パリで毎週土曜朝のランニング)など拡張 | — | [Barbier NL 一覧](https://dailymax.substack.com/archive)(高。タイトルのみ) |
| 2025-08 | 月15万人参加・200超(約220)都市・ARR €18M・約100人。縮小へ。別の出典は「月12万人・275都市超・累計7,000回超のディナー」(Déclic 2025-08-14)、「250都市超・50か国超・300万ユーザー」(GDI 2025-08-12) | ARR €18M | [Frin(2025-10-09)](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)、[Déclic](https://podcast.ausha.co/le-declic-podcast-par-alec-henry/vire-par-tf1-de-sa-propre-entreprise-il-revient-avec-une-startup-mondiale-maxime-barbier-maxime-barbier-declic-324)、[GDI](https://www.globaldatinginsights.com/featured/gdi-podcast-maxime-barbier-ceo-and-founder-timeleft/)(中。出典間で食い違う) |
| 2026-07 | 従業員数 93(Tracxn)/76(Caplight)。「Series A $7M」の記録が2026-03-24付で出回る(掲載日の可能性) | 93人 / 76人 | [Tracxn](https://tracxn.com/d/companies/timeleft/__aDvq69-tMF73H6WNRLGae_DzNk5Jz5rVxD_kw2Poqpg)、[Caplight](https://www.caplight.com/company/timeleft)(低) |
| 2026-10 | 日本語ページ: **東京・大阪・名古屋**で提供。「4M+ メンバー、参加ディナー80,000+、1日720予約、52か国200都市超」と自称。夕食・「乾杯ナイト」・グループランの3種。言語は日本語/英語を選択 | 4M+ | [Timeleft JP](https://timeleft.com/jp/)(中。自社主張。「80,000+ ディナー」は月15万人参加と整合せず、定義不明 [推測]) |

#### 初期トラクション
- [事実] 検証は「2週間で開始・有料・プロフィール非公開」の3条件。Typeform で申込み、WhatsApp グループで運営、Stripe リンクで決済。 — [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中)、[Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中)
- [事実] **初期の飲食店獲得は人力**: 最初は紙に質問を印刷して昼に店を訪問し、「1グループにつき2卓必要」と説明。その後は店を訪問せず電話で予約し、「各自が自分の会計を払う」旨を伝えても翌日に苦情がなかった。 — [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中。要約経由)
- [事実] リスボン(第1都市)は開始2か月余りで月2,500人・提携50店・毎週100卓超。ニュースレター購読者は15,000人超(都市ローンチ前後の事前登録と読める [推測])。 — [Timeleft ブログ](https://timeleft.com/blog/2023/09/17/timeleft-expands-to-porto-join-the-dining-revolution/)(高)
- [事実] 創業者はフランスの SNS メディア MinuteBuzz の共同創業者(24歳で共同創業と紹介)。 — [Déclic 概要](https://podcast.ausha.co/le-declic-podcast-par-alec-henry/vire-par-tf1-de-sa-propre-entreprise-il-revient-avec-une-startup-mondiale-maxime-barbier-maxime-barbier-declic-324)(中)。[推測] SNS・メディア運営の経験が広告クリエイティブと PR の初動に効いた可能性があるが、因果は未確認。
- [事実] フィラデルフィア(2024-04開始)では利用者が自発的に WhatsApp グループを作り100人超。 — [Inquirer(2024-10)](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)(既存ノート06由来、高)

#### チャネル別施策
| チャネル | 実施 | 具体策 | 効果の根拠 | 信頼度 |
|---|---|---|---|---|
| ① SNS(TikTok/Instagram/Facebook グループ) | Instagram は実施。TikTok・Facebook グループは [不明] | Instagram のターゲティング広告(記者が広告で認知)。Barbier の Instagram は約100万フォロワー(2024-12)。利用者が WhatsApp グループを自発作成(米国) | Alta の取材者が Instagram 広告経由。フォロワー数は創業者発言 | 中 |
| ② SEO・コンテンツ | 実施(都市ごとの公式ブログ、多言語サイト) | 都市ローンチ告知記事(リスボン/ポルト/パリ)、言語別パス(/jp など) | 検索流入の寄与は [不明] | 低 |
| ③ メール | 実施 | リスボンのニュースレター15,000人超。創業者のニュースレターのコード(DAILYMAX23)で €5 割引 [推測: コード名は創業者のニュースレター名と一致] | 購読者数は自社発表。転換率 [不明] | 中 |
| ④ バズ・バイラル | 実施(自然発生含む) | 「孤独の解決」という社会的文脈。各国紙・雑誌が体験記を掲載(SF の Alta、フィラデルフィアの Inquirer、Tasting Table、VICE 2024-02) | 創業者は「成長は口コミとメディアの関心」と説明(GDI 2025-08)。定量は [不明] | 中 |
| ⑤ 飲食店・ホストへのアウトリーチ | 実施(初期は人力→電話→予約システム) | 昼に店を訪問(初期)→電話予約。店は Google 評価4以上(Paperjam)/4.3(Inquirer)、静かさ、写真映え、食事制限対応が基準。フィラデルフィアの店主は「向こうが OpenTable で勝手に予約してきた」と証言(既存ノート06)。ルクセンブルクには country manager(Paperjam)、フィラデルフィアは city manager に店が連絡(既存ノート06) | 2023年リスボンで50店提携。店舗数の公式推移 [不明] | 中 |
| ⑥ プレスリリース・PR | 実施 | 2023-06 Público(ポルトガル)掲載。創業者は「400本の記事・TV」と主張(2024-12) | 数は自己申告 | 中 |
| ⑦ マスメディア(NYT・BBC・TV 等) | 部分的に確認 | TechCrunch(2026-04)が「夕食が中核の唯一のアプリ」と整理。NYT・BBC は [不明]。テレビは「400本」に含まれるとの主張のみ | — | 中 |
| ⑧ 有料広告 | **実施。拡大期の主軸** | 2024年は「広告のみ・ローカルアンバサダーも都市マネージャーもなし」で1日1都市(Frin)。スペイン語の広告1本でスペインと中南米を兼用→後に地域ごとにクリエイティブ・文面・サポートの口調を調整([Frin の別記事](https://timfrin.substack.com/p/how-4-ceos-launch-their-product-internationally))。新フォーマットは「友人・家族テスト→有料広告テスト→CAC が合えばアプリへ組込み」。CAC の数値は [不明] | 同上。2023年の記述に「広告予算だけでは費用を賄えなかった」旨の要約があるが前後関係不明(低) | 中 |
| ⑨ パートナーシップ・BD | アフィリエイトのみ確認 | 日本語ページに**アフィリエイトプログラム: 専用リンク経由の売上の50%を毎月自動払い**、ダッシュボードあり、フォロワーを持つ「アンバサダー」向け。クレジットカード会社・ホテル・自治体・POS との提携は [不明] | 参加者数・売上寄与 [不明] | 中(自社ページ。2026-10取得) |
| ⑩ オフライン/自社イベント | 限定的 | 都市運営者: ルクセンブルクの country manager、米国の city manager(店舗窓口)。創業者は「都市に物理的な拠点は不要」と結論(2024-12)。パリで毎週土曜のランニング(2025-07) | 都市マネージャーの有無は出典間で矛盾(Frin: なし/Paperjam・Inquirer: あり)。時期・都市で運用が異なる可能性 [推測] | 中 |

#### 成長を牽引した機能
- [事実] **固定曜日・固定リズム**: 毎週水曜、6人(自分+5人)、約3時間。火曜にヒント、水曜に店と卓番号を通知、月曜24時で受付締切(パリ記事。既存ノート06の運用情報と一致)。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中)、[Timeleft ブログ](https://timeleft.com/post/back-to-basics-timeleft-launches-its-unique-dinners-in-paris/)(中)
- [事実] **サブスク + 都度**: パリ €19.90/月、お試し €12.90(ブログ)。ルクセンブルク €13.99/回、€19.99/月(Paperjam)。SF 約$16/回、$26/月(Alta)。食事代は店で各自払い。 — 各出典(中)
- [事実] **新フォーマットで利用頻度が上昇**: 月平均利用が1.4回→2.2回(バー、女性限定、ランニングの導入後。時期不明)。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中)
- [事実] 品質管理: 毎週15,000〜20,000件のレビューを収集。性格テストによるマッチングと、評価を次回マッチに反映(既存ノート06)。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中)
- [事実] 無断欠席料(サブスク月額の35%を翌請求に加算、米国除く)(既存ノート06のヘルプ要約。低)。導入時期と効果は [不明]。
- [事実] プロダクト基盤: 最初の16か月は Bubble + FlutterFlow、その後8か月かけて独自基盤へ移行。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中)

#### 成長スピード
| 時点 | 会員/参加者 | 都市 | 売上 | 従業員 | 出典 |
|---|---|---|---|---|---|
| 2023-05 | 初回週 | 1(リスボン) | €110〜125/週 | 数人 | Barbier NL、Frin |
| 2023-09 | リスボン 2,500人/月 | 約4 | — | — | Timeleft ブログ |
| 2023-10〜12 | 約300人/週 | 4 | €20k(月) | 4(年初) | Barbier NL、Frin |
| 2024-02 | — | 35(7か国) | — | — | LinkedIn |
| 2024 | 18,000人/週(自己申告) | 320〜325(peak) | 11月 €1.2M | 70 | Barbier NL、Frin |
| 2025-02 | 11,500人/週(水曜) | 300(60か国) | — | — | Alta |
| 2025-08 | 15万人/月(別出典 12万) | 200〜220(別出典 250〜275) | ARR €18M | 約100 | Frin、Déclic、GDI |
| 2026 | 「4M+ メンバー」(累計と思われる [推測]) | 200超 | [不明] | 76〜93 | Timeleft JP、Tracxn、Caplight |
- [推測] 計算: 月15万人÷約220都市≒1都市あたり月約680人(週約170人)。自社の目標「1都市で週50人以上」(Frin)を平均では上回るが、分布は不明で、小都市の失速と整合する。
- [事実] 月次売上の到達期間は「開始16か月で月商€1M」(Frin)と「10か月で0→月商€1M」(Barbier のニュースレター表題)で食い違う。[推測] 後者は国際展開開始(2024-01)からの起算かもしれない。

#### 資金調達(出典間の食い違いが大きい。確定不可)
| 日付 | ラウンド | 額 | 主な投資家 | 評価額 | 出典(信頼度) |
|---|---|---|---|---|---|
| 2021-09/10 | Seed | $2M(Barbier)、Dealroom/PitchBook は約$2.0M | Caplight: Kima Ventures、Global Founders Capital、EnjoyVenture、Smash Capital、Shilling Capital Partners、FJ Labs、Rocket Internet。Tracxn: Kima ほか | 不明 | [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中)、[Caplight](https://www.caplight.com/company/timeleft)(低)、[Tracxn](https://tracxn.com/d/companies/timeleft/__aDvq69-tMF73H6WNRLGae_DzNk5Jz5rVxD_kw2Poqpg)(低) |
| 2024-07-19 | Series A | $7M | CB Insights: Redstone、SIDE Angels(Series A 参加として表示)。投資家一覧に Kima Ventures、FJ Labs、Play Ventures | 不明(有料欄) | [CB Insights](https://www.cbinsights.com/company/timeleft/financials)(低〜中) |
| 2026-03-24(記録日) | 「Series A $7M」 | $7M | 不明 | 不明 | [Signalbase](https://www.trysignalbase.com/news/funding/timeleft-raises-70m-series-a-funding)(既存ノート06由来。2024年ラウンドの再掲の可能性 [推測])、[Caplight](https://www.caplight.com/company/timeleft)(総調達額は$4Mと表示。同ページ内で不整合) |
- 累計: $2M(Tracxn は seed のみ)/ $4M(Caplight)/ $7M(CB Insights)。**公表情報では $2M〜$7M で確定できない**。会社の公式な資金調達発表は見つからなかった。 — 複数の出典
- [推測] 2021年の seed は「夢リスト」「ノンデーティング」期のもので、夕食モデルへの転換(2023-04)は seed の残金で行われた。2024-07 の Series A(もし実在すれば)は広告型の拡大(2024-01〜)の後。広告費は売上で賄った可能性があるが、損益・黒字化は [不明]。
- [事実] 収益: 自己申告で ARR €18M(2025-08)。黒字化の言及は確認できず。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)

#### 転機・失敗・停滞
- [事実] 2024年に325都市を開き、運営と予算が逼迫。小都市は参加密度が足りず、利用者が毎週同じ約10人に会って飽き、失速。対応として約220都市に縮小し、「都市あたり週50人以上」の臨界質量を基準にパリを深さの目標とした。 — [Frin](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)(中)
- [事実] 利用者の不満: 騒がしい店、同じ人と再会する、欠席罰則が弱い(既存ノート06、Trustpilot/Tasting Table/Gazetteer)。
- [事実] ピボット4回(夢リスト→ノンデーティング→都市アクティビティ→夕食)で、最後のピボット時に資金が尽きかけていた(runway 約9か月との記述)。 — [Barbier NL](https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros)(中)

#### 出典
- Frin, How They Build(2025-10-09): https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting
- Frin, How 4 CEOs launch internationally(日付不明): https://timfrin.substack.com/p/how-4-ceos-launch-their-product-internationally
- Barbier, 1% better every day #173(2024-12-01): https://dailymax.substack.com/p/timeleft-de-0-a-1-million-deuros
- Timeleft ブログ(ポルト、2023-09-17): https://timeleft.com/blog/2023/09/17/timeleft-expands-to-porto-join-the-dining-revolution/ / (パリ、ページ日付2025-12-15・内容は2023年): https://timeleft.com/post/back-to-basics-timeleft-launches-its-unique-dinners-in-paris/
- LinkedIn(2024-01-31): https://www.linkedin.com/posts/maximebarbier_timeleft-is-now-in-10-cities-in-france-activity-7158403453159981058-oOBY /(2024-02-06): https://www.linkedin.com/posts/maximebarbier_timeleft-is-now-open-in-35-cities-and-7-countries-activity-7160606093683875840-548W
- Paperjam(日付不明、2024年前半と推測): https://paperjam.lu/article/timeleft-ou-comment-contrer-so
- Alta(2025-02): https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/
- Déclic #324(2025-08-14): https://podcast.ausha.co/le-declic-podcast-par-alec-henry/vire-par-tf1-de-sa-propre-entreprise-il-revient-avec-une-startup-mondiale-maxime-barbier-maxime-barbier-declic-324
- GDI Podcast(2025-08-12): https://www.globaldatinginsights.com/featured/gdi-podcast-maxime-barbier-ceo-and-founder-timeleft/
- Timeleft JP(2026-10取得): https://timeleft.com/jp/ 、アフィリエイト: https://timeleft.com/jp/affiliate/
- CB Insights: https://www.cbinsights.com/company/timeleft/financials / Caplight: https://www.caplight.com/company/timeleft / Tracxn: https://tracxn.com/d/companies/timeleft/__aDvq69-tMF73H6WNRLGae_DzNk5Jz5rVxD_kw2Poqpg
- Inquirer(2024-10): https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html(既存ノート06由来)

### Inferences
- [推測] Timeleft の成長は「店を先に口説く」ではなく「**参加者向けの広告で需要を先に作り、店は通常営業の枠として後から押さえる**」型。店に報酬を払わず、店側の負担は「卓を確保して通常の注文を取る」だけで済むため、都市を1日1つ開くことができた。
- [推測] 失敗の核心は広告で作れるのが「登録」までで、**週次の参加密度(同じ都市で毎週50人以上)は広告では作れない**点。密度が足りない都市は、再参加時に同じ顔ぶれが続き、離脱する。
- [推測] 創業者がメディア/SNS運営の経験者で、フォロワー約100万(2024-12)を持つ点は、他社が真似しにくい初期資産。Shokujii には「創業者個人の発信力」を使えるか確認する価値がある。

### Gaps
- Les Echos / Sifted / TechCrunch / BBC / NYT の創業者インタビューは、検索上限に達したため本調査では取得できなかった。広告費・CAC・店舗への営業手順は [不明]。
- 調達額($2M/$4M/$7M)と Series A の実在・日付は未確定。公式発表が必要。
- TikTok、Facebook グループ、クレジットカード/ホテル/自治体との BD は [不明]。
- 日本の運営実態(東京・大阪・名古屋の参加者数、提携店舗、価格)は未取得。日本語ページに価格表示はない。

---

## 2. OpenTable(店舗供給を先に取る古典)

### Takeaway
1998年にサンフランシスコで創業。**まず飲食店に電子予約台帳(Electronic Reservation Book, ERB)を導入して供給を取り、その後にオンライン予約を開いて需要を乗せた**(Harvard D3 の整理)。店ごとの直販営業+設置・研修+月額+1席ごとの手数料(Subscription 54% / Reservation 42% / Installation 4%)で収益化し、IPO(2009)まで約11年。2001年に50都市から4都市に絞って生き残り、2014年に Priceline が $2.6B で買収。

### Cited Findings

#### 一言サマリ
- [事実] 初期の収益は店舗側のみ(ダイナーは無料)。店は初期設置費・月額・オンライン予約の1名ごとの手数料を支払う。2008年1〜9月の収益構成は月額54%、予約手数料42%、設置4%。 — [SEC S-1(2009)](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高)、[TechCrunch(2009-01-30)](https://techcrunch.com/2009/01/30/opentable-files-for-ipo-and-reveals-its-finances)(高)

#### 年表
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 1998-10-13(S-1) | easyeats.com, Inc. として設立。創業者 Chuck Templeton ほか。Wikipedia は7月2日と記す | — | [S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高)、[Wikipedia](https://en.wikipedia.org/wiki/OpenTable)(中) |
| 1999-06 | OpenTable.com, Inc. に改称(2000-09 に Delaware で再設立) | — | S-1(高) |
| 初期 | 初期の対象は4都市圏: シカゴ、ニューヨーク、サンフランシスコ、ワシントン DC。1999-12 の発表では、シカゴ・シアトルで実店舗向けのリアルタイム予約を提供、8都市で提携店130超(検索要約) | 130店(1999-12) | S-1(高)、[press.opentable.com の資料](https://press.opentable.com/static-files/8eb44093-d1b7-43c8-b0b3-61cf86ea90e2)(低。検索要約のみ) |
| 2000-05〜08 | 2000-05 に750店超・15都市(Fast Company 引用)、2000-08 に800店超・17都市(学生資料)。2000-05 に Jeff Edwards が CEO に就任 | 800店(2000-08) | [Productmint](https://productmint.com/opentable-business-model-how-does-opentable-make-money/)(低)、[学生資料](https://www.slideshare.net/slideshow/mitesh-m-motwani-open-table-timeline-presentation-public/41652307)(低) |
| 2001-06〜09 | 2001-06 に月$1.1M の支出に対して売上$100K。2001-09 に Thomas Layton が CEO に就任、**50都市から4都市に絞る** | — | [学生資料](https://www.slideshare.net/slideshow/mitesh-m-motwani-open-table-timeline-presentation-public/41652307)(低。ただし S-1 が初期4都市圏と一致) |
| 2004-10 | IAC が$15M で約10% 出資 | — | 学生資料(低) |
| 2004〜2008 | 設置店: 2004 2,423 → 2005 3,944 → 2006 5,787 → 2007 7,861 → 2008 10,335 | 4年で約4.3倍 | S-1(高) |
| 2004〜2008 | 海外: 2004 ロンドン、2006 東京・メキシコ、2007 仏・独・西。仏・西は2008に閉鎖 | 国際店舗 2006 204 → 2008 1,040 | S-1(高) |
| 2007-06 | Jeff Jordan(元 PayPal)が CEO に就任 | — | 学生資料(低) |
| 2009-05-21 | NASDAQ 上場(OPEN)、公開価格 $20。IPO の純手取りは$35.0M | 設置店 約11,000(2009-06-30)、累計約1.1億人着席 | [Wikipedia](https://en.wikipedia.org/wiki/OpenTable)(中)、[S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高) |
| 2010-10-01 | Toptable(英国)を買収 | — | [Wikipedia](https://en.wikipedia.org/wiki/OpenTable)(中) |
| 2011-05〜06 | Jordan が退任し Matt Roberts が CEO に。主要市場の飽和、評価過大、欧州で無料の競合(Eveve、Livebookings)が台頭と整理(学生資料) | — | 学生資料(低) |
| 2013 | 収益 $190.05M、純利益 $33.4M | — | [Wikipedia](https://en.wikipedia.org/wiki/OpenTable)(中。10-K 由来) |
| 2014-06-13 | Priceline が1株$103(46%プレミアム)、総額約$2.6B で買収合意 | — | [Wikipedia](https://en.wikipedia.org/wiki/OpenTable)(中) |
| 2019 / 2024 | 5万店超(2019、Resy 記事内)/ 5.5万店超・80か国超(2024) | — | [NRN(2019-05-15)](https://www.nrn.com/restaurant-technology/resy-to-be-acquired-by-american-express)、Wikipedia(中) |

#### 初期トラクション
- [事実] 供給側の入口は ERB(タッチスクリーン、ソフトウェア+ハードウェアのパッケージ。ホストスタンドに設置)で、台帳管理・卓管理・顧客認識・メール配信を含む。ダイナー向けサイトは、店の台帳と連動したリアルタイム予約。 — [S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高)、検索結果の要約(中)
- [事実] **Harvard D3 の整理: 店向けの予約管理システムを先に提供 → 店が揃ってからオンライン予約を開始 → ダイナーに開放。ダイナー増が店舗を引き寄せる(cross-side network effects)**。 — [Harvard D3(2020-03-23更新)](https://d3.harvard.edu/platform-digit/submission/opentable-restaurant-reservations-made-easy/index.html)(中。学生投稿)
- [事実] 営業は「市場内で店を1軒ずつ、直販営業で導入する」。販売・マーケ人員は2008年末74人、2009-06に87人(総従業員297人/313人)。 — [S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高)
- [事実] 設置が赤字だった(1件あたり約$5,000の費用に対して約$500の設置料)、近隣の約10%の店で網が機能し始めた、という記述があるが、**出典が示されていない二次ブログのみ**。 — [Productmint](https://productmint.com/opentable-business-model-how-does-opentable-make-money/)(低)

#### チャネル別施策
| チャネル | 実施 | 具体策 | 効果の根拠 | 信頼度 |
|---|---|---|---|---|
| ① SNS | 該当なし(SNS前の時代) | — | — | — |
| ② SEO・コンテンツ | [不明] | ダイナー向けサイトと、提携サイト・店舗サイトの予約リンク | S-1 は「マーケ支出は大きくない」と記載 | 高 |
| ③ メール | 実施(店→ダイナー向け) | ERB の機能にメールマーケティングを含む | [不明] | 中 |
| ④ バズ・バイラル | 実施(口コミ) | S-1 は「ダイナーの口コミ紹介」を獲得経路に挙げる | 定量 [不明] | 高 |
| ⑤ 飲食店への営業 | **主軸** | 店を1軒ずつ直販、ERB 設置+研修、初期は4都市圏に集中 | 設置店 2004 2,423 → 2008 10,335。営業と設置の費用は S&M 人員74人など | 高 |
| ⑥ PR | [不明] | — | — | — |
| ⑦ マスメディア | [不明] | — | — | — |
| ⑧ 有料広告 | 限定的 | S-1:「現在、マーケティングに大きな支出は伴わない」 | — | 高 |
| ⑨ BD | 実施 | 2000年に GDS(Worldspan、Sabre、Galileo)と提携し旅行代理店へ配信。2014年時点で約600のパートナー(Google、Bing、Facebook、TripAdvisor、Yahoo、Yelp 等)。ロイヤルティ「Dining Points」(S-1 に言及) | 2014年の学生資料(低)。S-1 は提携サイト上の予約リンクを挙げる | 中〜低 |
| ⑩ オフライン | 営業チームの現地導入・研修が実質的な現場運営 | — | — | 中 |

#### 成長を牽引した機能/モデル
- [事実] 3本立ての課金(設置料・月額・1席ごとの手数料)で、店の月額が経常収益、手数料が成長連動。2008年の予約収益は$23.1M で、着席34.2M人(計算上は約$0.68/人。ポイント控除後で公式料金ではない)。 — [S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高。計算は取得ツールによる)
- [事実] 店の想定寿命は約6年(S-1、2009版。1月版は約7年)。 — S-1(高)
- [事実] 現行価格(参考): Basic $29、Core $249、Pro $449/月、1席あたり$1〜1.50、サービス料2%(2023-01更新のブログ)。 — [Productmint](https://productmint.com/opentable-business-model-how-does-opentable-make-money/)(低)

#### 成長スピード
| 年 | 設置店 | 着席ダイナー | 収益 | 営業利益 | 従業員 |
|---|---|---|---|---|---|
| 2004 | 2,423 | — | — | -$5.5M | — |
| 2005 | 3,944 | — | $16M(学生資料) | -$5.0M | — |
| 2006 | 5,787 | 15.3M | $27.2M | -$0.05M | 168 |
| 2007 | 7,861 | 24.9M | $41.1M | -$0.9M | 226 |
| 2008 | 10,335 | 34.2M | $55.8M | +$0.6M | 297 |
| 2013 | — | — | $190.05M | $46.4M | — |
出典: [S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高)、[Wikipedia](https://en.wikipedia.org/wiki/OpenTable)(中)。

#### 資金調達
| 日付 | ラウンド | 額 | 主な投資家 | 評価額 | 出典(信頼度) |
|---|---|---|---|---|---|
| 1998 | Seed | $750K(友人・家族) | 共同創業者の義父(Lettuce Entertain You の共同創業者)が初期出資者 | — | [Productmint](https://productmint.com/opentable-business-model-how-does-opentable-make-money/)(低。出典なし) |
| 2000-01 / 2000-10 | Series B / C | $10M / $36M | — | — | Productmint(低)。学生資料は「1998〜2000に$36M」と記載で不一致 |
| 2004-10 | 戦略出資 | $15M(約10%) | IAC | 約$150M を示唆 [推測。算術のみ] | [学生資料](https://www.slideshare.net/slideshow/mitesh-m-motwani-open-table-timeline-presentation-public/41652307)(低) |
| 〜2005 | 優先株 | S-1: 優先株の帳簿残高$21.9M(2004〜2008)、累積赤字$57.3M | — | — | [S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高) |
| 2009-05 | IPO | 純手取り$35.0M(公開価格$20) | — | 初日終値で時価総額約$689M(学生資料) | S-1(高)、学生資料(低) |
| 2014-06 | 買収 | $2.6B(現金、$103/株) | Priceline | — | [Wikipedia](https://en.wikipedia.org/wiki/OpenTable)(中) |
- [事実] 黒字化: S-1 の抜粋では営業利益が初めてプラスになったのは2008年($0.6M)。純損益は2006年$0.2M、2007年$9.2M(税効果を含む)、2008年-$1.0M。 — [S-1](https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm)(高)
- 優先株$21.9M と、Productmint の$36M+は食い違う。**調達総額は確定できない**。

#### 転機・失敗・停滞
- [事実] 2000〜2001年の過剰拡大(50都市、月$1.1M の支出に対し売上$100K)から、2001-09 に4都市(SF、NY、シカゴ、DC)に絞った。初期ローンチは4都市圏という S-1 の記述と整合。 — [学生資料](https://www.slideshare.net/slideshow/mitesh-m-motwani-open-table-timeline-presentation-public/41652307)(低)、S-1(高)
- [事実] 2011年以降の鈍化要因(学生資料の整理): 主要市場の飽和、評価過大、欧州の無料競合(Eveve、Livebookings は無料+メール配信・分析)。 — 学生資料(低)
- [事実] Harvard D3 は「遠く離れた都市の店とダイナーを同じ基盤に載せても、ネットワーク効果は限定的」と指摘。 — [Harvard D3](https://d3.harvard.edu/platform-digit/submission/opentable-restaurant-reservations-made-easy/index.html)(中)

#### 出典
- SEC S-1(2009): https://www.sec.gov/Archives/edgar/data/0001125914/000104746909008000/a2194323zs-1.htm
- TechCrunch(2009-01-30): https://techcrunch.com/2009/01/30/opentable-files-for-ipo-and-reveals-its-finances
- Wikipedia(取得2026-10): https://en.wikipedia.org/wiki/OpenTable
- Harvard D3(2020-03-23更新): https://d3.harvard.edu/platform-digit/submission/opentable-restaurant-reservations-made-easy/index.html
- 学生資料(時期不明、2014年頃): https://www.slideshare.net/slideshow/mitesh-m-motwani-open-table-timeline-presentation-public/41652307
- Productmint(2023-01更新): https://productmint.com/opentable-business-model-how-does-opentable-make-money/
- NRN(2019-05-15): https://www.nrn.com/restaurant-technology/resy-to-be-acquired-by-american-express

### Inferences
- [推測] OpenTable の「無償ハード提供」ではなく、**設置・研修を含む有償パッケージ(設置料は原価割れだった可能性)**で店を取り、月額と1席ごとの手数料で回収する構造だった。設置が高コストだったため、店ごとの直販営業と密度優先(4都市)が必須だったと読める。
- [推測] 成功の条件は「店の業務(予約台帳)がオンライン無しでも便利」という単体価値があったこと。ダイナー需要は、店舗網がそろった後に開いた。

### Gaps
- S-1 の設置料・月額・1席手数料の金額は取得範囲では不明(S-1 の残り約16万文字は未読)。2000年前後のユニットエコノミクスと資金調達の一次情報は確認できていない。
- Chuck Templeton 本人の回顧、Jeff Jordan の OpenTable 回顧(a16z)の一次資料は未取得。

---

## 3. Dinner Lab(成長と崩壊)

### Takeaway
会員制の覆面ポップアップ・ディナー。2012年(出典により2011年)にニューオーリンズで始まり、2014-06 に10都市・数万人の有料会員、2015-08 に30都市超・約25,000会員(Harvard は150,000会員)まで拡大したが、**各都市に常駐スタッフを置く固定費構造**と、開催数不足による会員の不満、データ販売の不発で採算が取れず、2016-04-14 に閉鎖。累計調達$9.1M。

### Cited Findings

#### 一言サマリ
- [事実] 「各都市にほぼ常勤のスタッフを置いてきた」が持続できず、2015-12 に約30人の常勤をレイオフし、イベントスタッフを契約型に変更。CEO は「1市場で年300イベントをこなさないと利益が出にくい」と述べた。 — [TechCrunch(2015-12-23)](https://techcrunch.com/2015/12/23/layoffs-hit-dinner-lab-as-company-shifts-to-contract-model-for-event-staffers/)(高)

#### 年表
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 2011〜2012-08 | ニューオーリンズで開始(Entrepreneur は2011年、TechCrunch は2012年8月創業) | — | [Entrepreneur](https://www.entrepreneur.com/article/274171)、[TechCrunch(2014-06-03)](https://techcrunch.com/2014/06/03/dinner-lab-raises-2-1-million-for-its-modern-day-supper-club/)(高。食い違いあり) |
| 2014-06-03 | 初の外部資金 seed $2.1M(Whole Foods 取締役会長 John Elstrott ら)。**10都市**(NOLA、SF、LA、NY、アトランタ、DC、マイアミ、シカゴ、ナッシュビル、オースティン)、**有料会員数万人**、累計800回、数百人のシェフ、社員約50人。会員費 $100〜175/年、1食$60〜85。十分成熟した市場で年約80イベント | seed $2.1M | [TechCrunch](https://techcrunch.com/2014/06/03/dinner-lab-raises-2-1-million-for-its-modern-day-supper-club/)(高) |
| 2015-08-06 | Series A $7M(James River Capital 主導、既存投資家も参加)。**30都市超、会員約25,000人**。1食約$65(飲み放題)+年会費約$150。利益の大半は会員費。B2B(企業イベント、スポンサー、企業会員)に注力 | Series A $7M | [TechCrunch](https://techcrunch.com/2015/08/06/dinner-lab-raises-a-7m-series-a-to-expand-its-social-dining-club/)(高) |
| 2015(秋) | 週25〜30回のディナーを開催、2016年末までに3倍にする目標。会員は当初 $125〜175 + 1食$55〜95 だったが、後に会員制(会員費の壁)を撤廃してゲストを増やそうとした | 週25〜30回 | [Entrepreneur](https://www.entrepreneur.com/article/274171)(中) |
| 2015-12-02 | 競合 Dishcrawl を買収 | — | [TechCrunch タグページ](https://techcrunch.com/tag/dinner-lab/)(中。見出しのみ) |
| 2015-12-23 | 約30人の常勤をレイオフ、契約型に移行。31都市で運営 | 31都市 | [TechCrunch](https://techcrunch.com/2015/12/23/layoffs-hit-dinner-lab-as-company-shifts-to-contract-model-for-event-staffers/)(高) |
| 2016-04-14 | 閉鎖を発表。「十分に利益の出る事業にできなかった」。累計約$9.1M | — | [TechCrunch](https://techcrunch.com/?p=1307899)(高) |

#### 初期トラクション
- [事実] 初期はブートストラップ(外部資金なし)で、会員費で運営。開始から約2年で10都市・数万人の有料会員。 — [TechCrunch(2014-06-03)](https://techcrunch.com/2014/06/03/dinner-lab-raises-2-1-million-for-its-modern-day-supper-club/)(高)
- [事実] 「会員から約$2M をクラウドファンディングで調達」という記述があるが(検索要約・Entrepreneur)、TechCrunch(2014-06)は seed $2.1M を「初の外部資金」と書くのみで、同一ラウンドか別の資金かは不明。 — [Entrepreneur](https://www.entrepreneur.com/article/274171)(中)

#### チャネル別施策
| チャネル | 実施 | 具体策 | 効果の根拠 | 信頼度 |
|---|---|---|---|---|
| ① SNS | [不明] | — | — | — |
| ② SEO | [不明] | — | — | — |
| ③ メール | 実施(会員向けのイベント招待が主) | 会員は年会費でイベントカレンダーにアクセスし、各回に申込み | 会員の「6週間に1回しか招待が来ない」苦情(Failory) | 中 |
| ④ バズ | [不明] | 屋上・ヘリパッドなど意外な会場、若手シェフ | 定量 [不明] | 低 |
| ⑤ 店舗・ホスト(シェフ)獲得 | 実施 | 数百人の若手シェフ・無名シェフが新メニューを試す場に | 数百人(2014) | 高 |
| ⑥〜⑦ PR・マスメディア | TechCrunch 等が資金調達・閉鎖を報じた | — | — | — |
| ⑧ 有料広告 | [不明] | — | — | — |
| ⑨ BD | 実施(B2B) | 企業イベント、スポンサー、企業会員(2015-08)。カクテル大会、シェフの全国ツアーなど副次事業 | 閉鎖の主因にはならなかった | 中 |
| ⑩ オフライン/都市運営 | **主軸(コスト源)** | 都市ごとに常勤の運営スタッフを配置(CEO 発言) | 約30人レイオフ(2015-12) | 高 |

#### 成長を牽引した機能/モデル
- [事実] 会員制(年会費)+1食固定価格(約$65、飲み放題)+アンケートによる料理の試作フィードバック。データを店に売る構想。 — [Harvard D3](https://d3.harvard.edu/platform-digit/submission/how-dinner-labs-attempt-to-crowdsource-restaurant-concepts-got-roasted/index.html)(中)、[TechCrunch(2015-08-06)](https://techcrunch.com/2015/08/06/dinner-lab-raises-a-7m-series-a-to-expand-its-social-dining-club/)(高)

#### 成長スピード
- 2014-06: 10都市 / 数万人 / 約50人 / 累計800回。 — TechCrunch(高)
- 2015-08: 30都市超 / 約25,000会員(TechCrunch)。Harvard D3 は「15万人超の会員・約30都市」と書く。**大きく食い違うため、15万人はサインアップ総数・待機者を含む可能性 [推測]**。 — [TechCrunch](https://techcrunch.com/2015/08/06/dinner-lab-raises-a-7m-series-a-to-expand-its-social-dining-club/)(高)、[Harvard D3](https://d3.harvard.edu/platform-digit/submission/how-dinner-labs-attempt-to-crowdsource-restaurant-concepts-got-roasted/index.html)(中)
- 2015-12: 31都市。週25〜30回(秋)。 — Entrepreneur(中)
- [推測] 計算: 31都市に対して週25〜30回は、1都市あたり週1回に満たない。成熟市場の年約80回(2014)に対し、CEO が利益に必要と述べた年300回は約4倍。

#### 資金調達
| 日付 | ラウンド | 額 | 主な投資家 | 評価額 | 出典(信頼度) |
|---|---|---|---|---|---|
| 2014-06 | Seed | $2.1M | John Elstrott(Whole Foods 取締役会長)ほかエンジェル | 不明 | [TechCrunch](https://techcrunch.com/2014/06/03/dinner-lab-raises-2-1-million-for-its-modern-day-supper-club/)(高) |
| 2015-08 | Series A | $7M | James River Capital 主導。既存投資家が追加出資 | 不明 | [TechCrunch](https://techcrunch.com/2015/08/06/dinner-lab-raises-a-7m-series-a-to-expand-its-social-dining-club/)(高) |
- 累計: 約$9.1M(TechCrunch)/ $10M 超(Harvard D3)。黒字化は一度もなし(閉鎖理由が「十分に利益の出る事業にできなかった」)。

#### 転機・失敗・停滞
1. [事実] 運営変動費と固定費: 各回ごとに食材、会場、スタッフ、規制対応が新規に発生。常勤スタッフを各都市に置く構造では利益が出ない。 — [TechCrunch(2015-12-23)](https://techcrunch.com/2015/12/23/layoffs-hit-dinner-lab-as-company-shifts-to-contract-model-for-event-staffers/)(高)、[Harvard D3](https://d3.harvard.edu/platform-digit/submission/how-dinner-labs-attempt-to-crowdsource-restaurant-concepts-got-roasted/index.html)(中)
2. [事実] 供給不足による会員の不満: 月2回以上を想定した会員が6週間に1回しか参加できない都市があった。 — [Failory](https://failory.com/cemetery/dinner-lab)(中)
3. [事実] データ販売構想の不発: 「ほとんどの店はすでに満足のいくメニューを持っている」(CEO 発言、Harvard)。 — Harvard D3(中)
4. [事実] 追加資金を調達できず閉鎖(CEO が NOLA.com に語ったとの検索要約。低)。2015-12 のレイオフは兆候。
5. [事実] 深夜開始で酔客が多く質が安定しなかった(Failory の単独記述。他報道で未確認)。 — [Failory](https://failory.com/cemetery/dinner-lab)(低)

#### 出典
- TechCrunch(2014-06-03): https://techcrunch.com/2014/06/03/dinner-lab-raises-2-1-million-for-its-modern-day-supper-club/
- TechCrunch(2015-08-06): https://techcrunch.com/2015/08/06/dinner-lab-raises-a-7m-series-a-to-expand-its-social-dining-club/
- TechCrunch(2015-12-23): https://techcrunch.com/2015/12/23/layoffs-hit-dinner-lab-as-company-shifts-to-contract-model-for-event-staffers/
- TechCrunch(2016-04-14): https://techcrunch.com/?p=1307899
- Entrepreneur(2016-04): https://www.entrepreneur.com/article/274171
- Failory: https://failory.com/cemetery/dinner-lab
- Harvard D3: https://d3.harvard.edu/platform-digit/submission/how-dinner-labs-attempt-to-crowdsource-restaurant-concepts-got-roasted/index.html

### Inferences
- [推測] Dinner Lab は「需要(会員)は作れたが、1都市あたりの開催頻度が足りず、常勤運営費だけが都市数に比例して増えた」。会員費ベースの収益は都市ごとに別の固定費を賄えなかった。
- [推測] Timeleft との差: Timeleft は通常営業の飲食店に卓を押さえ、食事代を客が店に払う。1回あたりの変動費がほぼ運営側にない。ただし両社とも「都市ごとの密度」が失敗の中心という点は共通している。

### Gaps
- 創業者の事後検証インタビュー(Bordainick の発言本文)、各都市の会員数・開催数の推移、ローンチ手順は確認できなかった(TechCrunch 2016-04 記事にも CEO の発言なし)。
- 会員から約$2M 調達した件と seed $2.1M の関係は未確認。

---

## 4. Eatwith(旧 VizEat を含む)

### Takeaway
イスラエル発・サンフランシスコ拠点の Eatwith(2012年創業)は2014年に Series A $8M、2016年に TripAdvisor 主導で追加調達し、TripAdvisor に体験を掲載する BD で需要を取った。パリの VizEat(2014年創業)が2017-09 に買収。成長指標の公開は乏しく、現在は旅行向けの食体験として存続(規模は不明)。

### Cited Findings

#### 一言サマリ
- [事実] 2017-09-07 に VizEat が Eatwith を買収(条件非公開)。Eatwith の創業者は離脱済みで、主要スタッフが VizEat に合流予定。 — [EU-Startups(2017-09)](https://www.eu-startups.com/2017/09/paris-based-vizeat-acquires-us-based-eatwith-to-create-the-worlds-leader-for-immersive-food-experiences-with-locals/)(高)、[Global Venturing(2017-09-08)](https://globalventuring.com/vizeat-wines-and-dines-eatwith)(中)

#### 年表
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 2012 | Eatwith 創業(テルアビブ。創業者 Guy Michlin、Shemer Schwartz。本拠はサンフランシスコ) | — | [NoCamels](https://nocamels.com/?p=58447)(中)、[Calcalist](https://www.calcalistech.com/ctech/articles/0,7340,L-3720778,00.html)(中) |
| 2014 | Eatwith Series A $8M(Greylock、Genesis Partners、エンジェル) | $8M | [Global Venturing](https://globalventuring.com/vizeat-wines-and-dines-eatwith)(中)、[CB Insights](https://www.cbinsights.com/company/eatwith)(低。合計$8M) |
| 2014-07 | VizEat 創業(パリ)。50人のホストから開始 | — | [EU-Startups](https://www.eu-startups.com/2017/09/paris-based-vizeat-acquires-us-based-eatwith-to-create-the-worlds-leader-for-immersive-food-experiences-with-locals/)(高) |
| 2015 | VizEat が Cookening(パリ)を買収 | — | 同上(高) |
| 2016-09 | VizEat の第2ラウンド(累計€5M、Eurovestech ほか) | €5M | 同上(高) |
| 2016-11 | Eatwith: TripAdvisor 主導の追加調達(額不明、Greylock 参加)。TripAdvisor が体験を掲載 | 不明 | [Calcalist](https://www.calcalistech.com/ctech/articles/0,7340,L-3720778,00.html)(中) |
| 2017-09-07 | VizEat が Eatwith を買収。VizEat は「ホスト25,000人以上・130か国」(NoCamels は「ゲスト」と書き食い違う)、Eatwith は「50か国の高品質なホスト、200都市超」(Calcalist) | — | EU-Startups、Calcalist、NoCamels(中) |
| 2018-01 | VizEat が Eatwith に社名統一(既存ノート06) | — | [Hospitality-on](https://hospitality-on.com/fr/restauration/vizeat-devient-eatwith)(低。既存ノート06由来) |
| 2026-10 | 公式サイトは「世界各地の地元民が主催する食ツアー・ディナー・料理教室」の検索ページ。数値の掲載なし | [不明] | [Eatwith](https://www.eatwith.com)(高) |

#### 初期トラクション
- [事実] VizEat は50人のホストから約3年で25,000人超(130か国)に拡大(自己申告)。 — [EU-Startups](https://www.eu-startups.com/2017/09/paris-based-vizeat-acquires-us-based-eatwith-to-create-the-worlds-leader-for-immersive-food-experiences-with-locals/)(中)
- [事実] Eatwith の初期獲得方法(ホスト、ゲスト)の一次情報は確認できなかった。 [不明]

#### チャネル別施策
| チャネル | 実施 | 具体策 | 効果の根拠 | 信頼度 |
|---|---|---|---|---|
| ⑤ ホスト獲得 | 実施(審査制) | 応募→写真・概要提出→運営の審査(最大14営業日)。新規ホストは目標価格の25%引きで開始(既存ノート06の公式ヘルプ) | 定量 [不明] | 中 |
| ⑨ BD | **実施(中心)** | TripAdvisor が出資し、「Dine with a Local Chef」として体験を掲載(2016)。アフィリエイト(Awin/Travelpayouts。既存ノート06) | TripAdvisor 提携は2017年買収後も継続 | 高 |
| ①〜④、⑥〜⑧、⑩ | [不明] | — | — | — |

#### 成長を牽引した機能/モデル
- [事実] 現行はゲスト側に30%の手数料を上乗せ(ホスト手取りは設定額の100%)、決済はイベントの2営業日後(既存ノート06のヘルプ)。 — [Eatwith ヘルプ](https://intercom.help/eatwith/en/articles/4118435-pricing-your-experiences)(既存ノート06由来、高)

#### 成長スピード / 資金調達
- 資金は合計約$8M(CB Insights)。評価額 [不明]。VizEat は累計€5M。成長の年次推移は [不明]。
- 買収は「投資家にとって残念なエグジット」という Skift の評価(既存ノート06由来、低)。

#### 転機・失敗・停滞
- [事実] 2017年の買収で創業者が離脱。買収後の統合や規模の推移は確認できず。 — [Global Venturing](https://globalventuring.com/vizeat-wines-and-dines-eatwith)(中)

#### 出典
- EU-Startups(2017-09-07): https://www.eu-startups.com/2017/09/paris-based-vizeat-acquires-us-based-eatwith-to-create-the-worlds-leader-for-immersive-food-experiences-with-locals/
- Global Venturing(2017-09-08): https://globalventuring.com/vizeat-wines-and-dines-eatwith
- Calcalist: https://www.calcalistech.com/ctech/articles/0,7340,L-3720778,00.html
- NoCamels: https://nocamels.com/?p=58447
- CB Insights: https://www.cbinsights.com/company/eatwith
- Eatwith: https://www.eatwith.com

### Inferences
- [推測] 旅行プラットフォーム(TripAdvisor)との BD が需要側の主要チャネルだったが、食事体験は「ホストが月に数回しか開けない」ため供給の継続性が弱く、規模化しにくかった。

### Gaps
- 2018年以降の規模、ホスト数、2024〜2026年の動向は確認できなかった。

---

## 5. Resy(店舗の囲い込みと Amex の需要)

### Takeaway
2014年にニューヨークで厳選した20店から開始(Gary Vaynerchuk、Ben Leventhal、Michael Montero)。当初は「ピークタイムの席に追加料金」というモデルだったが、のちに予約管理ソフト(Resy OS)へ。2018年に競合 Reserve を買収、2019年に American Express が買収(約4,000店・154都市)。Amex の Platinum 特典(Global Dining Access)と連携し、9,000店超(2021)→約16,000店(2023)。ただし英国は2024年に撤退。

### Cited Findings

#### 一言サマリ
- [事実] 2019-05-15 に Amex が買収を発表。約4,000店、米国154都市、10か国。Reserve(2018-11)と ClubKviar(2018、スペイン)を買収済み。 — [NRN(2019-05-15)](https://www.nrn.com/restaurant-technology/resy-to-be-acquired-by-american-express)(高)

#### 年表
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 2014-06 | ベータ開始 | — | [TechCrunch(2014-07-31)](https://techcrunch.com/2014/07/31/resy-the-app-that-lets-you-buy-a-reservation-eats-up-2-million-in-seed-funding)(高) |
| 2014-07-31 | ニューヨークで開始。**開始店舗は厳選した20店**(Minetta Tavern、Charlie Bird、Toro ほか)、セルフサインアップではなく手厚い個別対応。seed $2M(Vayner/RSE、Lerer Ventures 主導)。収益モデル: ダイナーが追加料金を払って予約し、Resy と店がレベニューシェア | 20店 | 同上(高) |
| 2016 | シアトル開始(予約は無料、OpenTable と直接競合)。2016-08 に約30市場、過去12か月で300万人超の着席(発表の検索要約) | 約30市場 | [GeekWire](https://www.geekwire.com/2016/restaurant-reservation-platform-resy-launches-seattle/)、[GlobeNewswire](https://www.globenewswire.com/fr/news-release/2016/08/10/863287/0/en/Resy-Continues-to-Power-a-New-Customer-Restaurant-Paradigm.html)(低。いずれも本文取得失敗、検索要約のみ) |
| 2017-01 | $13M(Airbnb、First Data、RSE Ventures、Lerer Hippeau) | $13M | [Wikipedia](https://en.wikipedia.org/wiki/Resy)(中) |
| 2018-04 / 2018-11 | Airbnb 経由の予約掲載、ClubKviar 買収 / Reserve(Expa 系)を買収 | — | Wikipedia(中)、[The Spoon](https://thespoon.tech/american-express-acquires-restaurant-tech-platform-resy/)(中) |
| 2019-05-15 | Amex が買収を発表(条件非公開)。約4,000店。累計調達は$15M(Crunchbase 引用) | 4,000店 | NRN(高)、The Spoon(中) |
| 2021-07-07 | Amex が Resy を「完全統合」。**Priority Notify は9,000店超**、Platinum 会員は Resy で直接「ピークタイムの席」を予約(従来のコンシェルジュ経由から変更) | 9,000店超 | [The Points Guy](https://thepointsguy.com/news/amex-resy-global-dining-access)(中) |
| 2023 | 世界で約16,000店が予約可能 | 約16,000店 | [Wikipedia](https://en.wikipedia.org/wiki/Resy)(中) |
| 2024-01 | 英国事業を2024年8月末(記事見出しは9月)までに終了すると発表 | — | Wikipedia(中) |
| 2025-12 | Global Dining Access(Amex Platinum、Hilton Aspire、Delta Reserve 向け。参加店が毎晩ピーク席を確保)。Platinum 年会費$895、Resy クレジットは年$400(後者2点は第三者ブログの検索要約) | — | [Amex 公式ガイド(2025-12)](https://www.americanexpress.com/en-us/credit-cards/credit-intel/your-guide-to-global-dining-access-by-resy/)(低。本文取得失敗、検索要約のみ)、[Pearl(2026-07)](https://joinpearl.co/blog/can-you-actually-use-amex-global-dining-access-on-resy-in-2026)(低) |

#### 初期トラクション
- [事実] 厳選20店で開始し、「追加収益の手段」「常連の囲い込み」(特に予約を取らない店)として売り込んだ。 — [TechCrunch(2014-07-31)](https://techcrunch.com/2014/07/31/resy-the-app-that-lets-you-buy-a-reservation-eats-up-2-million-in-seed-funding)(高)
- [事実] 創業者 Ben Leventhal は Eater.com の共同創業者。競合より安い価格でテーブル管理・顧客管理ソフトを提供。ニューヨークでは店が月額を支払って掲載(金額非公開)(検索要約)。 — [Miami New Times](https://www.miaminewtimes.com/food-drink/resys-cofounder-on-how-theyre-revolutionzing-restaurant-reservations-8143334/)(低。本文取得失敗)

#### チャネル別施策
| チャネル | 実施 | 具体策 | 効果の根拠 | 信頼度 |
|---|---|---|---|---|
| ⑤ 店舗への営業 | 実施 | 厳選した少数店で開始(キュレーション)、低価格のソフト、月額課金。**無償のハード提供は確認できず [不明]** | 2014: 20店 → 2019: 約4,000店 → 2021: 9,000店超 | 中 |
| ⑨ BD | **実施(中心)** | Airbnb(2018)、First Data(2017出資)、Amex の会員特典(2021〜)。競合 Reserve を買収(2018-11) | 2019〜2023で約4倍。因果は未確認 | 中 |
| ⑥〜⑦ PR・メディア | 実施 | 創業者の知名度(Eater、Vayner)を活用した [推測]。具体的な露出数は [不明] | — | 低 |
| ①〜④、⑧、⑩ | [不明] | — | — | — |

#### 成長を牽引した機能/モデル
- [事実] 当初のペイド・予約(席にプレミアム)は2016年のシアトルでは無料予約に変更され、OpenTable と直接競合。店が予約モデルを選べる。 — [Miami New Times / GeekWire の検索要約](https://www.geekwire.com/2016/restaurant-reservation-platform-resy-launches-seattle/)(低)
- [事実] 2019年以降は Amex の需要(Platinum 会員向け優先予約・Resy クレジット)。Resy OS は Resy クレジットの対象外。 — [The Points Guy](https://thepointsguy.com/news/amex-resy-global-dining-access)(中)、検索要約(低)

#### 成長スピード
| 時点 | 店舗数 | 市場 |
|---|---|---|
| 2014-07 | 20 | NYC |
| 2016-08 | 不明(約30市場) | 約30市場 |
| 2019-05 | 約4,000 | 米154都市・10か国 |
| 2021-07 | 9,000超 | — |
| 2023 | 約16,000 | — |
- 従業員数・売上は [不明]。

#### 資金調達
| 日付 | ラウンド | 額 | 主な投資家 | 評価額 | 出典(信頼度) |
|---|---|---|---|---|---|
| 2014-07 | Seed | $2M | Vayner/RSE、Lerer Ventures、TomsCapital/Panarea、Slow Ventures ほか | 不明 | [TechCrunch](https://techcrunch.com/2014/07/31/resy-the-app-that-lets-you-buy-a-reservation-eats-up-2-million-in-seed-funding)(高) |
| 2017-01 | — | $13M | Airbnb、First Data、RSE、Lerer Hippeau | 不明 | [Wikipedia](https://en.wikipedia.org/wiki/Resy)(中) |
| 2019-05 | 買収(Amex) | 非公開 | American Express | — | NRN(高) |
- 累計は$15M(Crunchbase 引用、The Spoon)。$2M+$13M=$15M と整合。黒字化は [不明]。

#### 転機・失敗・停滞
- [事実] 英国事業を2024年に終了(Wikipedia)。 — Wikipedia(中)。理由は [不明]。

#### 出典
- TechCrunch(2014-07-31): https://techcrunch.com/2014/07/31/resy-the-app-that-lets-you-buy-a-reservation-eats-up-2-million-in-seed-funding
- NRN(2019-05-15): https://www.nrn.com/restaurant-technology/resy-to-be-acquired-by-american-express
- The Spoon(2019-05-15): https://thespoon.tech/american-express-acquires-restaurant-tech-platform-resy/
- The Points Guy(2021-07-07): https://thepointsguy.com/news/amex-resy-global-dining-access
- Wikipedia: https://en.wikipedia.org/wiki/Resy

### Inferences
- [推測] Resy は「店のソフト」ではなく「**カード会員という需要**を持つパートナー(Amex)と組んで店を増やす」方向で伸びた。厳選20店の初期ブランディングが、のちの「予約が取れない店」の価値につながった。
- [推測] Resy の店舗獲得は、OpenTable のような設置型の営業ではなく、少数のブランド店を軸とした需要連動型。

### Gaps
- 店舗獲得の営業手順・価格(Resy OS の月額)、2016〜2018年の店舗数、Amex 買収額は確認できなかった。

---

## 6. Tock

### Takeaway
Nick Kokonas が2014年に自分のレストラン(Alinea、Next、The Aviary)の前払いチケット販売のために作ったシステム。French Laundry、Per Se、Coi などの高級店に採用が広がり、パンデミックで Tock To Go(2020)に転換。2021-03-31 に Squarespace が$400M超(現金+株)で買収。買収時に7,000超の運営者・30か国・200都市。

### Cited Findings

#### 年表
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 〜2014 | Next、Alinea、The Aviary が Tock の試験・開発の場(開始年は [不明])。Wikipedia に2014-11-30 の Eater 記事「Introducing Nick Kokonas's Ticketing System, Tock」が引用されている | — | [Wikipedia: Nick Kokonas](https://en.wikipedia.org/wiki/Nick_Kokonas)(中) |
| 2014 | Kokonas が Tock を創業(Alinea の前払い予約のため) | — | [NRN(2021-03-31)](https://www.nrn.com/news/ecommerce-platform-squarespace-buys-reservations-system-tock-more-400-million)(高) |
| 初期 | 採用: The French Laundry、Per Se、Coi | — | Wikipedia(中) |
| 2020 | Tock To Go(テイクアウト)。2020-05 までに100万食、$10M 調達(Valor Siren Ventures 主導) | $10M | [Restaurant Dive(2021)](https://www.restaurantdive.com/news/squarespace-buys-reservation-platform-tock-for-400m/597724/)(既存ノート06由来、高) |
| 2021-03-31 | Squarespace が$400M超(現金+株)で買収。7,000超の運営者、30か国、200都市、$1B 超の前払い体験の取扱い。Kokonas は CEO 継続 | 7,000超 | [Squarespace プレスリリース](https://www.squarespace.com/press-releases/2021/3/31/squarespace-acquires-tock-the-online-reservations-takeout-and-events-platform-to-advance-hospitality-offering)(高) |

#### 初期トラクション / チャネル別施策
- [事実] 前払い(チケット制)で no-show を減らし、ダイナーのデータを店が保有する点が店舗にとっての価値。柔軟な動的価格設定(ピーク席に追加料金)。 — [Squarespace Tock](https://www.squarespace.com/tock)(既存ノート06由来、中。自社主張)
- [不明] 店舗獲得の営業手順、価格の推移、店舗数の年次推移は確認できなかった。⑤⑨ 以外のチャネルも [不明]。
- [推測] 創業者が高級店のオーナー(Alinea)であるため、同業の高級店(French Laundry 等)への紹介力が初期の採用を後押しした可能性があるが、採用経緯の出典は確認できなかった。

#### 成長を牽引した機能 / 資金 / 転機
- [事実] 機能: 前払いチケット、動的価格、CRM、イベント。料金は月額と取引手数料の組合せ(検索要約。低)。 — [Squarespace プレスリリース](https://www.squarespace.com/press-releases/2021/3/31/squarespace-acquires-tock-the-online-reservations-takeout-and-events-platform-to-advance-hospitality-offering)(高)
- 資金調達: 公表は2020年の$10M(Valor Siren)のみ確認。累計・評価額・黒字化は [不明]。
- 転機: パンデミックで Tock To Go に転換し、買収に至った(2021-03)。

#### 出典
- Squarespace(2021-03-31): https://www.squarespace.com/press-releases/2021/3/31/squarespace-acquires-tock-the-online-reservations-takeout-and-events-platform-to-advance-hospitality-offering
- NRN(2021-03-31): https://www.nrn.com/news/ecommerce-platform-squarespace-buys-reservations-system-tock-more-400-million
- Wikipedia: https://en.wikipedia.org/wiki/Nick_Kokonas

### Inferences
- [推測] Tock は「前払い=no-show の解決」を売りにした高級店向けの特化型。Shokujii の「参加者がメニューを注文して参加」は、前払いと同様の no-show 抑制効果が期待できる。

### Gaps
- Squarespace 買収後(2021〜2026)の店舗数、価格、成長は未調査。

---

## 7. TableCheck(日本)

### Takeaway
2011年3月、谷口優氏が設立(依頼文の「2012年」は誤りで、2011年)。最初の「店舗紹介+フラッシュマーケ」案は店に拒否され、飲食店の紙台帳の課題に転換。2013-10 に TableSolution(店舗向け予約・顧客管理)、2014-02 に全テスト店が有料化に同意して提供開始。**月額固定・送客手数料なし**を創業時から貫き、ホテルレストランで首位級のシェア。2019年に約4,000店・19か国、2025年に約11,300店・35か国/地域。資金調達は2015〜2025に株式複数回+2025年のデット¥7億円。

### Cited Findings

#### 年表
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 2011-03 | 谷口優氏が VESPER Inc.(現 TableCheck)を設立。当初は「店舗紹介+フラッシュマーケ(ゴールドカード会員向け)」。店に拒否された(複数チャネルを管理できない) | — | [日本語版 Wikipedia](https://ja.wikipedia.org/wiki/TableCheck)(低)、[CEO インタビュー](https://www.tablecheck.com/blog/ceo-interview/)(高) |
| 2011〜2013 | 数百店舗に聞き取り(多くが紙台帳、Excel・自社システム・OpenTable・カレンダーも)。2013年初頭に開発着手 | 数百店 | [CEO インタビュー](https://www.tablecheck.com/blog/ceo-interview/)(高) |
| 2013-10 / 2013-11 | TableSolution(店舗向け)を開始 / TableCheck(ダイナー向け予約サービス) | — | 日本語版 Wikipedia(低) |
| 2014-02 | 全テストユーザーが有料化に同意し正式リリース。約2年かけて要望を反映 | — | CEO インタビュー(高)、検索要約(低) |
| 2015-07 | ¥2億(ジャフコ+個人) | ¥2億 | 日本語版 Wikipedia(低) |
| 2017 | 大阪・福岡・韓国に拠点。ポータルサイトを開始(「第2段階」)。2017-12 に SMBC VC から¥1.5億 | ¥1.5億 | 日本語版 Wikipedia(低)、CEO インタビュー(高) |
| 2018-01〜2019-11 | シンガポール(2018-01)、インドネシア(2019-02)、タイ・豪州(2019-07)、UAE(2019-11)に拠点 | — | 日本語版 Wikipedia(低) |
| 2019-06/07 | DNX Ventures と SMBC-VC から¥6億(累計¥10.65億)。**約4,000店・19か国、月間予約人数約100万人**。チャーン率1%以下。海外の導入店舗は前年比2倍、国内は1.7倍。国内外8拠点 | 4,000店 | [The Bridge(2019-07)](https://thebridge.jp/2019/07/tablecheck-jpy600m-funding)(高) |
| 2020-02〜08 | Google 予約連携(2月)、Insight(BI、3月)、Instagram 連携(5月)、TableSolution から TableCheck へ改称(8月)。26か国・地域。従業員99人(9月) | 26か国 | 日本語版 Wikipedia(低) |
| 2022-12 | 約8,000店・33か国/地域(Wikipedia) | 8,000店 | 日本語版 Wikipedia(低) |
| 2024-10 | 食べログ予約台帳「食べログノート」と公式連携 | — | [Kepple](https://kepple.co.jp/articles/lr2m1fhphk)(中) |
| 2025-03-28/31 | ¥4.3億(ひらまつ、ワンダーテーブル、Plan・Do・See、個人投資家)。約11,300店・35か国/地域・18言語 | 11,300店 | [TableCheck プレス](https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/)(高)、[Kepple](https://kepple.co.jp/articles/lr2m1fhphk)(中) |
| 2025-12-15 | デット¥7億(みずほキャピタル、SBI新生銀行、福岡銀行)。累計調達¥17.89億と報道(検索要約) | ¥7億 | [TableCheck プレス](https://www.tablecheck.com/ja/join/about-us/press/2025/1215_debt-financing/)(高)、[The Bridge](https://thebridge.jp/2025/12/tablecheck-raises-700-million-yen-debt-financing)(低) |
| 2026-02期 | 純損失¥2.1億・総資産¥25億(日本語版 Wikipedia。他で未確認) | — | [日本語版 Wikipedia](https://ja.wikipedia.org/wiki/TableCheck)(低) |

#### 初期トラクション
- [事実] 谷口氏は決済代行会社(CyberSource Japan)でホテルのオンライン予約のキャンセル料回収の難しさを見て起業した。最初のコンセプトは店舗が受け入れず、**店の台帳業務の痛み**を先に解く方向へ転換。 — [CEO インタビュー](https://www.tablecheck.com/blog/ceo-interview/)(高)、[Kepple](https://kepple.co.jp/articles/lr2m1fhphk)(中)
- [事実] 2014-02 の正式版は、テスト店が全員支払いに同意した状態で提供。約300回/年のアップデート、機能は約9割完成と自己評価。 — [CEO インタビュー](https://www.tablecheck.com/blog/ceo-interview/)(高)

#### チャネル別施策
| チャネル | 実施 | 具体策 | 効果の根拠 | 信頼度 |
|---|---|---|---|---|
| ⑤ 店舗への営業 | 実施(詳細は不明) | 聞き取り調査、テスト店の要望反映。**月額固定で送客手数料なし**(創業時から)。営業体制の詳細は [不明] | 4,000店(2019)→11,300店(2025) | 中 |
| ⑨ BD・提携 | **実施(中心)** | ホテル(Hilton、InterContinental、JR、Hotel Okura、Otani を顧客として列挙)、Google 予約連携、Instagram 連携、食べログ予約台帳との連携(2024-10)、TableCheck Channels(国内外メディアとの連携)。2025年の増資では上場飲食企業(ひらまつ、ワンダーテーブル、Plan・Do・See)が株主 | 導入数の増加と連動(因果は未確認) | 中 |
| ⑥ PR | 実施 | 経営者インタビュー(経営ハッカー 2020-03、Foodion 2019-12、日本ネット産業新聞 2020-10)、東洋経済(2019)。本文は一部のみ取得 | — | 低 |
| ①〜④、⑦、⑧、⑩ | [不明] | — | — | — |

#### 成長を牽引した機能/モデル
- [事実] 予約時のカード情報入力によるキャンセル(無断キャンセル)防止、18言語対応(インバウンド)、CRM。 — 検索要約(低)、[Kepple](https://kepple.co.jp/articles/lr2m1fhphk)(中)
- [事実] 月額課金モデル(送客手数料なし)。具体的な料金は取得資料で確認できず。 — [CEO インタビュー](https://www.tablecheck.com/blog/ceo-interview/)(高)

#### 成長スピード / 資金 / 黒字化
- 導入店舗: 2019 約4,000 → 2022-12 約8,000(低) → 2025-03 約11,300。従業員: 2020-09 に99人。売上は [不明]。
- 資金: 上記年表のとおり。累計は2019-07時点で¥10.65億、2025-12時点で¥17.89億(報道)。**¥10.65億+¥4.3億+¥7億=¥21.95億で、報道の¥17.89億とは合わない**。2019〜2024年の未確認ラウンドが存在するか、累計の定義(デットを含むか)が異なる可能性があり、確定できない。
- 黒字化: 2026-02期は純損失(Wikipedia、低)。黒字化の言及は [不明]。

#### 転機・失敗・停滞
- [事実] 最初のコンセプト(店舗紹介+フラッシュマーケ)の拒否が転機。 — [CEO インタビュー](https://www.tablecheck.com/blog/ceo-interview/)(高)

#### 出典
- CEO インタビュー(時期不明、2018年頃): https://www.tablecheck.com/blog/ceo-interview/
- The Bridge(2019-07): https://thebridge.jp/2019/07/tablecheck-jpy600m-funding
- TableCheck プレス(2025-03-31): https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/
- TableCheck プレス(2025-12-15): https://www.tablecheck.com/ja/join/about-us/press/2025/1215_debt-financing/
- Kepple(2025-03-31): https://kepple.co.jp/articles/lr2m1fhphk
- 日本語版 Wikipedia: https://ja.wikipedia.org/wiki/TableCheck

### Inferences
- [推測] 日本では「送客手数料型(ぐるなび、食べログ)」に対し、月額固定・送客手数料なしを選んだことが、飲食店の信頼を得た(創業者の説明)。ホテルレストランから入ったのは、外国人客のカード決済・キャンセル料の課題が最初に表面化した層だったため。
- [推測] 2025年の増資に飲食企業が入っているのは、将来の導入や共同開発の布石として読める(出資の目的は出典で説明なし)。

### Gaps
- 営業チームの規模・手法、料金、各年の導入数、売上、2019〜2024年の資金調達は確認できなかった。日本ネット産業新聞(2020-10)・東洋経済(2019)の全文は未取得。

---

## 8. 222(Two Two Two)

### Takeaway
Z世代の3人が2021年末に南カリフォルニアの裏庭ディナーから開始。2022年に LA で18〜27歳限定の週次ディナー(1回$2.22、Typeform 申込み)として始め、pre-seed $1.45M(General Catalyst 主導)。現在は iOS アプリ(約$22/月)・9市場。情報が薄いため短く。

### Cited Findings
- [事実] 2022-11 時点: 3人体制(年内に8人へ)、LA のみ、会場は運営が選定し会場が集客費として支払う、会員は席の確定に支払う、pre-seed $1.45M超(General Catalyst 主導、YC ほか)、USC のスタートアップガレージを拠点。裏庭ディナーの参加者が「実際の会場で再現して」と頼んだことが出発点。 — [TechCrunch(2022-11-14)](https://techcrunch.com/2022/11/14/2440702/)(高)
- [事実] 後年(日付不明、2024〜2025年頃と推測): 1回$17 または月$22の curation fee、会場が「パートナー料」を支払う。9市場(LA、NY、SF、ロンドン、トロントなど)、17人体制、「数十万ユーザー」。 — [SF Gazetteer](https://sf.gazetteer.co/pay-to-play)(既存ノート06由来、中)
- [事実] 2026-04: $22.22 のキュレーション料または同額の月額、iOS アプリ。 — [TechCrunch(2026-04-05)](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/)(既存ノート06由来、高)
- [不明] 年表の詳細、チャネル(TikTok 等)、追加の資金調達は本調査の検索(1回)でも新情報なし。⑤(会場)は「運営が選定、会場がフィーを払う」のみ確認。

### Inferences
- [推測] 222 は「会場がフィーを払う」点で Timeleft(店に払わない)と異なる収益構造。ただし金額は非公開で、成立条件は不明。

### Gaps
- 成長指標の一次情報、広告・SNS の使い方、追加資金は確認できなかった。

---

## 9. Pie(食に特化しない社交イベントアプリ)

### Takeaway
Bonobos 創業者 Andy Dunn 率いる。2022年にシカゴで開始。**主催者(creators)への報酬(Creator Fund、RSVP あたり$5〜10)**と、AI クイズで6人グループ化する方式で成長し、2026-08 時点で約30万人(シカゴ・オースティンで集中)。食に特化せず、飲食固有の課題への解は持たない。

### Cited Findings
| 年月 | 出来事 | 規模・数値 | 出典(信頼度) |
|---|---|---|---|
| 2022 | 現行版を開始(シカゴが最初) | — | [MediaPost](https://www.mediapost.com/publications/article/416426/can-pie-cure-loneliness-new-cmo-believes-it-can.html)(中) |
| 2024-09 | Series A $11.5M(Forerunner 主導、Ev Williams が$5.3M)。累計$24M | $11.5M | [TechCrunch(2024-11-19)](https://techcrunch.com/2024/11/19/irl-social-app-pie-is-coming-to-sf-to-make-you-less-lonely)(高) |
| 2024-10 | 約23,000ユーザー。シカゴ→サンフランシスコ(2都市目)。**Creator Fund $1M、RSVP あたり$5〜10**。主催者の一人は年約$10万の run rate(報道) | 23,000 | 同上(高) |
| 2025-03-04 | 130,000人超の MAU(サンフランシスコ・シカゴ)。AI クイズ「Sparked」のチームを採用し、6人グループで事前チャット。イベントが混雑し、マッチングを導入 | 130,000 MAU | [TechCrunch(2025-03-04)](https://techcrunch.com/2025/03/04/andy-dunns-new-app-pie-uses-ai-to-help-you-make-friends)(高) |
| 2025-12 | 「つながりの参加予定が見えるフィード」へ変更し、アプリ滞在が2分→10分(既存ノート06) | — | [TechCrunch(2026-08)](https://techcrunch.com/?p=3156057)(既存ノート06由来、高) |
| 2026-08 | 約30万ユーザー(シカゴ・オースティンで集中)。Nadya Okamoto(SNSフォロワー約600万)が共同創業者・CMO。NY・LAで「ホストと参加者を同時に募集」して社会的密度を作る。Creators Club(RSVP 経由で新規アカウントを連れてきた主催者に支払い)。Community Homes を2026-08-25 に開始 | 約30万 | [MediaPost](https://www.mediapost.com/publications/article/416426/can-pie-cure-loneliness-new-cmo-believes-it-can.html)(中)、TechCrunch(2026-08)(高) |
- [事実] 「友達の友達」構造で招待が広がる設計に転換し、1対1のマッチングクイズは「オーガニックでない」としてやめた。 — [TechCrunch(2024-11-19)](https://techcrunch.com/2024/11/19/irl-social-app-pie-is-coming-to-sf-to-make-you-less-lonely)(高)
- [事実] ユーザー数は出典で食い違う(2024-09 に MAU 2万・月次40%成長 [検索要約]、2024-10 に約23,000、2025-03 に13万 MAU、Wharton は5万 MAU、2026-08 に約30万)。時点・定義が異なる。 — 上記出典(中〜低)
- チャネル: ⑩ 主催者を有償化(RSVP 連動の報酬)、⑨ CMO の SNS 影響力。食の店舗獲得は [不明]。

### Inferences
- [推測] 主催者(幹事)に RSVP 連動の報酬を払う方式は、供給側を増やす最も直接的な策。ただし$1M の基金が前提で、低予算では再現しにくい。

### Gaps
- 収益化(課金)、イベント数、飲食店との連携の有無は確認できなかった。

---

## 10. 横断: 成長の型と Shokujii への示唆(推測)

### Takeaway
(1) 店舗網を先に取った OpenTable・Resy・Tock・TableCheck は、**「店の業務が便利になる」単体価値+月額/1席手数料**で店を取り、需要は後から(ダイナー、Amex、Google、媒体)乗せた。(2) 需要を先に作った Timeleft は、**広告で都市を量産できたが、1都市あたり週50人以上の密度が作れず縮小**。(3) 自社運営でイベントを作った Dinner Lab は、**都市ごとの固定費が重く、1市場あたりの開催数が足りず閉鎖**。

### Cited Findings(横断比較。詳細・出典は各節)
| 型 | サービス | 供給(店・ホスト)の取り方 | 需要(参加者)の取り方 | 結果 |
|---|---|---|---|---|
| 店舗SaaS先行 | OpenTable | 店ごとの直販営業+ERB 設置・研修(S-1) | 店網が揃ってからダイナーに開放 | 2008年に営業利益が黒字化、2014年に$2.6B で買収 |
| 店舗SaaS先行 | Resy | 厳選20店から開始(TechCrunch 2014)。Reserve 買収 | Amex 会員の優先予約(2021〜) | 2019: 約4,000店 → 2023: 約16,000店 |
| 店舗SaaS先行 | Tock | 前払いチケット(高級店の採用) | 店舗自身の集客 | 2021に$400M超で買収 |
| 店舗SaaS先行 | TableCheck | 紙台帳の課題から。月額固定・送客手数料なし | 店の自社サイト・Google・Instagram・食べログ連携 | 2025: 約11,300店。2026-02期は純損失(日本語版 Wikipedia のみ、信頼度低) |
| 需要先行 | Timeleft | 通常営業の店に卓を確保。店への報酬なし | Instagram 広告+口コミ+創業者の発信 | 2025: ARR €18M(自己申告)。都市は320→220に縮小 |
| 需要先行 | 222 | 運営が選定し、会場がフィーを支払う | 裏庭ディナーの口コミ、Typeform | 2022: LA のみ |
| 自社運営 | Dinner Lab | 各都市に常勤運営+若手シェフ | 会員制メール | 2016に閉鎖 |
| 二面市場 | Eatwith/VizEat | ホストの審査制応募 | TripAdvisor 掲載 | 2017に VizEat が買収 |
| 二面市場 | Pie | 主催者に RSVP 連動の報酬($5〜10) | 友達の友達、CMO の SNS | 2026: 約30万ユーザー |
出典はすべて各節の表に記載。

### Inferences(サービスごと3点以内。すべて [推測])
**Timeleft**
1. 「都市数」より「1エリアの週あたり参加者密度」を成長指標にする。Timeleft の自己基準は都市あたり週50人以上(Frin)。Shokujii は最初のエリア(例: 東京の1〜2駅圏)で週あたりの開催数と参加者数を揃えるまで、エリアを増やさない。
2. 店には報酬を払わず、**通常営業の枠に卓を確保+「メイン+ドリンクを注文」を条件**にして客単価を担保する構造が、拡大の速さを支えた(店が離脱する条件は「注文が少ない」こと)。Shokujii の「参加者がメニューを事前に注文して参加」は、この客単価担保をさらに強めた形で、店舗営業の最大の訴求材料にできる。
3. 低予算では広告の代わりに、創業者個人の発信、ニュースレター、アフィリエイト(Timeleft は売上の50%)、新フォーマットの小規模テスト(友人・家族→有料テスト→CAC が合えば本実装)を使う。広告のみの拡大は資金とクリエイティブ運用力が前提。

**OpenTable**
1. 店を先に取るなら、**店の業務が単体で便利**(予約・注文管理)であることが前提。Shokujii は既に飲食店向け管理画面があるため、イベント集客がなくても使える機能(事前注文の集計、仕込み数の見える化)を店舗営業の入口にする。
2. 密度優先: 50都市から4都市に絞って生き残った。Shokujii も、最初は1〜2エリアに店舗と開催を集中する。
3. 設置・導入が重いと赤字になる(Productmint の記述は低信頼)。Shokujii は導入ゼロコスト(ハード不要、管理画面のみ)を保つ。

**Dinner Lab**
1. 自社で食材・会場・スタッフを抱えない(店の通常営業に乗る)。
2. 会員・参加者に対して開催数が足りないと離脱する(6週間に1回しか招待が来ない)。参加者数に対して開催数を先に確保する。
3. 1都市あたりの開催数が年80回(2014、成熟市場)→ 年300回(利益に必要と CEO が発言)という差は、少数の開催では固定費が賄えないことを示す。

**Eatwith**
1. ホストの価格設計を指導し(新規は目標価格の25%引き)、レビューが貯まるまでの立ち上げ支援をする。
2. 旅行大手(TripAdvisor)の掲載に頼る BD は需要側の近道だが、月数回しか開けないホスト供給の継続性が弱点。

**Resy / Tock**
1. **需要を持つパートナー**(カード会社・会員組織)と組んで店を増やす。Shokujii が組める相手は、企業の福利厚生、自治体、鉄道・不動産などが候補(推測)。
2. 厳選した少数店で開始し、ブランド価値を作ってから拡大(Resy の20店)。
3. 前払い・事前注文による no-show の抑制(Tock)は、Shokujii の事前注文と同じ効果が期待できる。

**TableCheck**
1. 送客手数料型ではなく**月額固定・手数料なし**にすると、店の信頼を得やすい(創業者の説明)。
2. 最初の企画が店に拒否され、店の台帳の痛みへ転換した。Shokujii も、店の「痛み」(ドタキャン、席の埋まらない曜日)を先に解く営業にする。
3. 飲食企業を株主・パートナーに入れる動き(2025)は、導入のチャネルになり得る。

**222**
1. 小さな会食を口コミで広げ、実会場へ展開した(裏庭→LA)。
2. 会場がフィーを払う収益モデルは成立条件が不明(金額非公開)。

**Pie**
1. 主催者(幹事)に報酬を払う設計は供給増に有効だが、$1M 規模の基金が前提。低予算では「幹事特典」(初期無料、優先枠)に置き換える。
2. 創業チームの SNS 影響力(CMO フォロワー約600万)は再現しにくい資産。

### Gaps
- 日本市場で Timeleft の参加者・店舗数・価格は未確認(東京・大阪・名古屋で提供と自称、価格表示なし)。
- Shokujii の現状(検索流入3か月で約645クリック、幹事と参加者の両面獲得)に直結する、幹事(ホスト)獲得の定量事例は、Pie のみ(RSVP 連動報酬)。飲食系ホスト獲得の成功事例は薄い。
- 本調査の WebSearch は上限(18回)に達した。Les Echos / Sifted / BBC / NYT の Timeleft 取材、Resy の店舗獲得手順、OpenTable 創業者(Templeton)の回顧、Tock の店舗獲得手順は未取得。
