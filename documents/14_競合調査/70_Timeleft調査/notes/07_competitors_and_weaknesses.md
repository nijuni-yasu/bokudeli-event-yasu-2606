# Timeleft の競合・模倣・代替・隣接モデルと、Timeleft の弱点(2026年10月時点)

調査日: 2026-10-14。担当範囲: 競合・模倣・隣接モデル・弱点・法安全・市場の見立て。Timeleft 自体の成長・資金・機能判定は既存ノート(`09_food_social_restaurant.md`、`25_features_food_social.md`)で扱い済みのため、ここでは再調査していない。

## 0. 読み方と制約

- 凡例: **[事実]** = 出典本文で確認 / **[競合発信]** = 競合・当事者の自己主張(比較記事を含む) / **[声]** = 個人の感想・口コミ / **[推測]** = 調査者の解釈 / **[要約]** = 検索結果の要約のみで本文を読めていない / **[不明]** = 確認できず。
- WebSearch は割当 20 回のうち 19 回を使用。検索ツールは米国向けで、各言語の比較記事を網羅的には拾えなかった。WebFetch は要約モデル経由のため数値の取り違えが起こり得る。重要な数値は複数出典で突き合わせたが、単一出典のものは「単一」と明記した。
- 比較記事・「Timeleft alternatives」記事の大半は、掲載サービス自身が運営する(Timeleft 自身を含む)。第三者の独立した比較は見つからなかった。評価は競合発信として扱う。
- 取得できなかったもの: Business Insider の原文(取得拒否)、Hankyung(403)、thevc.kr(403)、むすびえの PDF(本文を取り出せず検索要約のみ)、Timeleft の利用規約(404)、Timeleft ヘルプの個別記事(403/404)、The Breakfast の公式サイト(空ページ)。
- 読んだ資料の一覧は `sources/07_competitors_and_weaknesses.csv`。

---

## 1. 競合・代替の網羅(Key question 1・2)

### Takeaway
「Timeleft と同じ形式(アルゴリズムで知らない人を5〜6人の卓に組む)」の直接競合は、都市限定の小規模サービスと中国の盲盒饭局が中心で、資金・規模で Timeleft に並ぶものは確認できなかった。大きく伸びているのは、同じ「IRL 社交」でも形式が違う Pie(イベント→コミュニティへ軸足を移動、約30万人)で、Timeleft の周囲は「形式を変えて弱点を突く」動きが主流になっている。

### Cited Findings

#### 1-A 競合・代替の一覧表

| サービス | 国・拠点 | 形式 | 価格 | 規模・資金 | Timeleft との違い | 出典(日付・言語・種別) |
|---|---|---|---|---|---|---|
| Pie | 米国(Andy Dunn 創業) | 参加者を相性クイズで6人前後の小グループに分け、事前にグループチャット。イベントは主催者が立てる。2026年は「Community Homes」で常設コミュニティ型へ | 無料イベントとの記載(TechCrunch 2026)。主催者へは1 RSVP あたり $5〜10 の Creator Fund [要約] | 月間アクティブ13万人超・SF/シカゴ(2025-03)→ 約30万人・シカゴ/NY/LA で拡大(2026-08)。Series A $11.5M(2024-09、Forerunner 主導)、累計 $24M [要約]。投資家に Lightspeed・Accel も記載 | 運営ではなく主催者が供給。食事に限らない。卓は都度組む点は同じ | [TechCrunch 2025-03-04 英](https://techcrunch.com/2025/03/04/andy-dunns-new-app-pie-uses-ai-to-help-you-make-friends)、[TechCrunch 2026-08-25 英](https://techcrunch.com/?p=3156057)、[Insider(FITT)2024-09-24 英 要約](https://insider.fitt.co/pie-raises-11-5m-for-irl-friendships/) |
| 222 | 米国(LA 発。NY など) | 性格診断で知らない人をグループ化し、近くの公開イベント(ディナー+コメディ等)に招待。iOS のみ。同伴者1名可 | $22.22 の curation fee、または同額の月額(TechCrunch 2026-04) | 資金: 既存ノートは $1.45M 超、検索要約は $2.5M(YC 後)で食い違う [要約]。規模は [不明] | 会員制の週次ではなく、都度のキュレーション。同伴者OKで友人連れを許す | [TechCrunch 2026-04-05 英](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/)、[222 公式 英](https://www.222.place) |
| Strangrs | フランス | ディナー・ドリンク・カフェ・散歩。4〜6人。アプリのスワイプなし。事後に双方が望めばプロフィールが開く | 公式ページに価格記載なし。DayOfUs は €15.99/月〜と記載 [競合発信] | 公式ページでは現在はパリのみ(他都市は「近日」)。DayOfUs は7都市と記載しており矛盾。資金・規模 [不明] | 認証済みアカウント、位置情報を他人に出さない点を訴求。事後のみ相互開示 | [Strangrs 公式 2026-10取得 仏/英](https://www.strangrs.com)、[DayOfUs 2026-01-23 英](https://dayofus.com/blog/timeleft-alternative) |
| DayOfUs | カナダ(Linxura Inc. トロント) | ディナーとブランチ。性格ベース。4〜6人 | 1回 $9.99〜19.99、月額 $15.99〜23.99 [競合発信] | 13都市以上(NY・トロント・北京・上海・大阪など)と自称。規模・資金 [不明] | 1回払いを前面に出す。**大阪を含むとの自称**(実績は未確認) | [DayOfUs 2026-01-23 英](https://dayofus.com/blog/dinner-with-strangers-apps) |
| KF.Social | 英国(KaneFilous Limited) | ロンドンで6人の卓。サブスク任意 | 予約手数料 £15、Premium 会員は £5 | ロンドンのみ。[競合発信] | 会員化せず1回課金。比較ページは自社運営と明記 | [KF.Social 2026-09-26 英](https://kf.social/compare/timeleft-alternatives) |
| The Breakfast | 拠点国は不明(記者がリスボンのステッカーで知った) | 深い会話を求める人同士の朝食。1日に新しい1人と会える | 週額または月額 | 17都市(2024-08)。招待制で待機あり(Xataka) | 夕食でなく朝食。1対1中心。恋愛・人脈作りを明確に否定 | [Stars and Stripes(WaPo 転載)2024-08-26 英](https://www.stripes.com/living/2024-08-26/web-lifestyle-loneliness-app-meals-meetup-conversation-networking-community-14981930.html)、[Xataka Móvil 2024-08-26 西](https://www.xatakamovil.com/movil-y-sociedad/novedad-aplicaciones-sociales-encontrar-gente-que-compartir-comida-objetivo-luchar-soledad) |
| Creative Lunch Club | 欧州 | 同じ都市のクリエイター2人を毎月紹介→3人でランチ(日時は当人同士で調整)。固定日の大人数ミートアップは会員無料 | 月 €7.5、または3か月 €15(公式)。WaPo は最初の3か月でランチ1回あたり約$11 | 100都市超(公式の自称)。創業者 Klaus Heller(WaPo)。資金 [不明] | **業種で絞る**。店は当人たちが選ぶので店への営業が不要 | [公式 英](https://creativelunchclub.com)、[Stripes 2024-08-26 英](https://www.stripes.com/living/2024-08-26/web-lifestyle-loneliness-app-meals-meetup-conversation-networking-community-14981930.html) |
| Les Amís | 欧州8都市+米国2都市(NY など) | 女性・トランス・LGBTQ+向け。AI が毎週月曜にマッチングし、会う計画を支援 | NY $70、アムステルダム €55(会員制) | 規模・資金 [不明] | **属性特化**。食事に限らない | [TechCrunch 2026-04-05 英](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/) |
| Meet5 | 欧州発、米国進出 | 40歳以上向け。ピクニック・コンサート・ハイキングなど | [不明] | 米国で約77.7万ダウンロード(Appfigures 推計) | **年齢特化** | 同上 |
| Wyzr Friends / Washed Up / Clyx / Mmotion / Synchrony | 米国ほか | 40歳以上 / LAの"plans"(2026初頭) / イベント統合 / NY の地図型 / 神経多様性の成人向け(2026-03開始、30日無料後 $44.99/月) | 各記事に記載のもののみ | 規模・資金 [不明] | 食事特化ではない | 同上(いずれも TechCrunch の一覧記載) |
| Bumble BFF / Geneva | 米国 | BFF は2023年に独立アプリ化し2025年に刷新。Geneva は2024年7月に Bumble が買収完了 | BFF は無料DL(TechCrunch)。競合記事は $16.99/月と書くが矛盾 [競合発信] | BFF のマッチ後の実際の対面率は「約30%」と競合記事が引用(Bumble 調査を引用した二次情報)[要約] | スワイプ型。会う計画は利用者任せ | [Stripes 2024-08-26](https://www.stripes.com/living/2024-08-26/web-lifestyle-loneliness-app-meals-meetup-conversation-networking-community-14981930.html)、[TechCrunch 2026-04-05](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/) |
| Meetup | 米国 | 趣味別グループ。主催者依存 | 参加は無料が基本。主催者は月 $29.99〜(Timeleft ブログの記載) | 「65M+ 会員」は Timeleft ブログの記載 [競合発信] | 品質が主催者次第 | [Timeleft ブログ 2026-09-18 英](https://timeleft.com/blog/timeleft-vs-other-dinner-with-strangers-apps/) |
| Eatwith | 欧州(旧 VizEat 統合) | 現地ホストの自宅・体験型。個別に予約 | ホスト手数料なし、ゲストに30%上乗せ(既存ノート)。体験ごとに $2M の保証(公式) | 公式ページに規模の記載なし | 友人作りではなく旅行者向け体験。ホスト選別と保証が強み | [Eatwith 公式 英](https://www.eatwith.com/about) |

注記: 競合名として挙がる Thursday(週次の独身者向け交流。公式サイトの見出しは "Everyone Single. Every Week")、Hey! Vina(女性向け)、After5、Locals、WeMeet は、Timeleft ブログと DayOfUs の比較表に名前が出るだけで、本調査では公式情報を読めていない [競合発信/要約]。

#### 1-B 国別の模倣・類似と結果

| 国・地域 | サービス | 事実関係 | 結果・状況 | 出典 |
|---|---|---|---|---|
| 中国 | 薯岛(Shudao)、BlindGo、Fandada | 薯岛: 59元の入場券、27問のアンケート、5人を算法でマッチ、店と同卓者は食事の2時間前に開示。月79元・季219元のプランあり。2026-03時点で北京・上海・広州・杭州で1.6万人超をマッチ。北京では週末の予約が200人超。店からは手数料を取らず、収入は参加者の入場券。BlindGo/Fandada: 参加費約40元、食事は1人約150元、参加者の中心は32〜37歳(新卒想定より高い)。BlindGo は上海語グループを開設し広東語・英語を追加予定 | 流行は継続中。ただし「低い参入障壁で模倣が多い」「欠席で4人未満になると解散」「新鮮さが落ちて離脱」と記事が指摘。資金調達は記載なし | [36kr 2026-08-03 中](https://www.36kr.com/p/3923485499895427)、[Pedaily 2026-08-03 中](https://news.pedaily.cn/202608/567181.shtml)、[Huxiu 2026-05-27 中](https://m.huxiu.com/article/4862047.html)、[Sixth Tone 2025-11-11 英](https://www.sixthtone.com/news/1017835/Eat,%20Pay,%20Love:%20Dining%20With%20Strangers%20Is%20China’s%20New%20Social%20Fix)、[中国新聞網 2025-08-06 中 要約](https://www.chinanews.com/sh/2025/08-06/10459898.shtml) |
| 南アフリカ | DinnerMatch(ケープタウン) | 創業者 Jody De Mink(27歳)。性格診断→チケット購入→5人と組んで6人。店の選定・予約は運営。ケープタウンのみ。価格は記事に記載なし | 開始時期は「1年前」とだけ表示。規模 [不明] | [Daily News 2025-06-19 英](https://dailynews.co.za/lifestyle/2025-06-19-meet-new-people-over-dinner-the-cape-town-social-experience-changing-the-way-we-connect) |
| オーストラリア | The First Round(メルボルン) | 一人で参加し、事前アンケートで同じ傾向の人と組む。会場は24時間前に開示。チケットに入場が含まれ、飲食は別 | 規模・価格 [不明] | [Secret Melbourne 2025-07-21 英](https://secretmelbourne.com/the-first-round-melbourne-meet-new-people/) |
| インドネシア→オーストリア | Supper Social | バリで始まった毎週のディナー。1回15〜30人超。2025-07 時点で200回以上、いずれも完売、初の海外拠点がウィーン。会員は無料で、ディナーはチケット制 | 小〜中規模の共食コミュニティ型。Timeleft の6人卓とは別形式 | [What's New Indonesia 2025-07-14 英](https://www.whatsnewindonesia.com/bali/feature/supper-social-expands-internationally-new-wave-community-dining) |
| 米国・その他 | Dinner Club(1人 $16 の例)、Meet & Mangia(卓上限6人) | 日本語検索の要約が挙げただけで、本文は未読 [要約] | [不明] | 検索結果(2025年。URL は CSV 参照) |
| 韓国 | Munto(문토) | 2019-02-19 設立。Series A まで調達(ラウンドの詳細は非公開で確認できず)。アプリは「関心事ベースの小規模コミュニティ」で、月15,000件超の集まりが開設され、評価4.6(6,500件超)。「カフェ・グルメ」を含むワンデイ体験はあるが、ソーシャルダイニング専門ではない。課金は「キャンディ」というアプリ内通貨。2022年の記事では35万人・90%が20〜30代 [要約] | 食事の知らない人卓というより、趣味会の巨大プラットフォーム | [Munto App Store 韓](https://apps.apple.com/kr/app/%EB%AC%B8%ED%86%A0-%EC%86%8C%EB%AA%A8%EC%9E%84-%EC%B7%A8%EB%AF%B8-%EB%8F%99%ED%98%B8%ED%9A%8C-%EB%8F%99%EB%84%A4%EC%B9%9C%EA%B5%AC-%EC%9B%90%EB%8D%B0%EC%9D%B4%ED%81%B4%EB%9E%98%EC%8A%A4/id1535886772?uo=4)、[Innoforest 韓](https://innoforest.co.kr/company/CP00011078)、[Hankyung 2022-09-19 韓 要約](https://www.hankyung.com/amp/202209190713i) |
| 日本 | (Timeleft 自身) | 東京・横浜・名古屋・大阪・神戸で開催(2026-01-29 の記事)。月額2,290円、1回1,890円(2025-07)。飲食代は別 | 国内で「初対面6人のマッチング食事会」の直接競合は検索では見つからなかった [要約]。近いのは1対1の食事相手探し: Homies Matti(女性限定・無料・本人確認あり、2025-08-01 開始)[要約]、Dine、Gourmate [要約] | [Tokyo Weekender 2025-07-10 英](https://www.tokyoweekender.com/?p=271573)、[Dime 2026-01-29 日](https://dime.jp/genre/2076741/)、[San-Tatsu PR 日 要約(取得時404)](https://san-tatsu.jp/pressrelease/443113/) |
| 韓国(Frip・Trevari)、ドイツ語圏、Instagram/WhatsApp 運営のローカル版 | — | 検索で拾えなかった | **[不明]**(後述 Gaps) | — |

### Inferences
- [推測] 直接の模倣は「アルゴリズムで5人を選び、運営が店を手配する」点まで同じで、差は価格体系(都度払い・手数料)と対象(都市・属性)にある。Timeleft の形式そのものに特許的な障壁はなく、中国記事も「参入障壁が低く模倣が多い」と書いている。
- [推測] 規模が確認できる非 Timeleft の IRL 社交は Pie(約30万人)と薯岛(1.6万人)で、Timeleft(月15万人参加の自称)とは桁が違う。欧州・米国の小規模模倣は、都市数が少ないことが共通点。
- [推測] 模倣サービスの多くが「会員制より都度払い」を差別点にしていることは、Timeleft のサブスク運用への不満(下記)と同じ方向にある。

### Gaps
- Instagram・WhatsApp で運営する個人運営の模倣、撤退事例(閉鎖した模倣サービスの一覧)は、検索ツールが拾えず確認できなかった。
- 韓国の Frip・Trevari、ドイツ語圏のサービス、スペイン語圏の現地模倣(例: エクアドルの記事は Timeleft 自体の紹介だった)の実態は未確認。
- DayOfUs・KF.Social・Strangrs の「複数都市」「会員数」は自己申告のみで、実績の裏付けが取れていない。

---

## 2. Timeleft の弱点と、それを突く動き(Key question 3)

### Takeaway
弱点として複数の独立した出典(Trustpilot の口コミ、メディアの体験記)に繰り返し出るのは、(1) サブスク・解約・返金、(2) 年齢や属性の不一致と会話の質、(3) 欠席・少人数・直前の会場変更、(4) 同じ常連との再会、(5) 安全面の個別事例。事前注文・当日の会計(割り勘)は Timeleft の機能に存在せず(既存ノート)、日本の体験記でも不満として出ている。

### Cited Findings

#### 2-A 口コミの全体像
- [事実] Trustpilot の Timeleft ページ(2026-10-14 取得)は TrustScore 3.2/5、766件。5つ星48%、4つ星14%、3つ星6%、2つ星6%、1つ星26%。Trustpilot 生成の要約は、肯定面を「独自性・良い店・会話・新しい友人」、否定面を「自動更新と請求」「マッチングの質と騒がしい店」「サポートの対応」としている。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com)
- [事実] 同ページを別の時期に参照した検索結果では 3.5/約714件だった(検索要約)。つまり件数が増えるなかでスコアが下がっている可能性があるが、時期の差は断定できない [推測]。 — [Trustpilot 旧ページ 要約](https://www.trustpilot.com/review/timeleft.com?page=8)
- [注意] 個別の1つ星レビューでは「騒がしい店」への言及は確認できず、要約欄に出るのみ。 — [Trustpilot 1つ星](https://www.trustpilot.com/review/timeleft.com?stars=1)

#### 2-B 弱点 × 証拠 × 誰が突いているか

| # | 弱点 | 証拠(誰が・いつ・何と) | 突いている動き |
|---|---|---|---|
| 1 | 自動更新・解約・返金 | [声] 1回だけ参加して請求が続いた、解約が難しい(米国 Jonathan 2026-10-06)。2024年に1回申込んだだけで請求が継続、返金拒否(米国 Leonard Fenton 2026-07-06)。全プランが自動更新で誤解を招く(Janie Dominique 2026-09-09)。開催不成立でも返金なし(カナダ Silva 2026-08-14)。解約後に自動フィードバック依頼が大量に届く(Noelle 2026-09-20)。[Trustpilot](https://www.trustpilot.com/review/timeleft.com)、[1つ星](https://www.trustpilot.com/review/timeleft.com?stars=1) | KF.Social は会員登録を任意にし1回 £15 [競合発信]。DayOfUs は1回 $9.99〜 を掲示 [競合発信]。薯岛は59元の1回券を主軸にし、月・季券は選択式 [事実]。**Strangrs もチケット制を併記** [競合発信] |
| 2 | 年齢・属性の不一致、マッチング | [声] 約10歳上の年齢層(Jonathan 2026-10-06)。年齢が合わず会話がぎこちない(Amanda Meimin 2026-08-15)。3回目は高齢者ばかり(英国 Sahar 2026-08-18)。サインアップ診断が地域の会員数・アクセシビリティ・飲酒の好みなどを聞かない(Jamie Rubin 2026-10-01)。VICE のロンドン体験記は、卓の人の星座・職業の比率しか事前に分からず相性を信頼しづらいと指摘(2024-02-05)。ムンバイの体験記は、2回とも全員が独身か離婚経験者で、恋愛を後押ししているように感じたと書く(The Nod Mag 2025-05-05)。ルクセンブルクでは女性が約60%(Paperjam)、シドニー大学の学生紙は参加者の約68%が女性と記載(Honi Soit 2024-11-30)。[VICE](https://www.vice.com/en/article/timeleft-friend-finding-platform-review/)、[Nod](https://thenodmag.com/content/timeleft-networking-app-dining-with-strangers)、[Honi Soit](https://honisoit.com/2024/11/loneliness-is-a-popular-business/)、[Paperjam](https://en.paperjam.lu/article/meet-five-likeminded-strangers) | DayOfUs はマッチングを「基本的」と評価(自社比較)。Strangrs は事後の相互開示と(DayOfUs の記載では)プロフィール閲覧機能。Les Amís・Meet5 は属性で最初から絞る。薯岛は「アルゴリズム+人手の審査」と欠席者のブラックリスト、テーマ別の「主題局」を追加 [事実: Huxiu] |
| 3 | 欠席・少人数・直前の変更 | [声] 来たのは自分を含め3人(Tasting Table 2025-05-19、筆者 Michelle Welsch)。登録後2週間会えない、コーヒー会が毎回中止(Fabienne Mas 2026-07-30)。会場が通知されず誰も来ない、返信に5〜7日(オーストラリア Cynthia O. 2026-09-15)。店が直前に変更(Karine 2026-09-30、日本の Dime 2026-01-29)。ブリュッセルの記事は、事前情報を増やすと当日来ない人が増えたと伝える(Brussels Times 2024-08-06)。欠席料は月額の35%(Timeleft 公式) [Trustpilot](https://www.trustpilot.com/review/timeleft.com?stars=1)、[Tasting Table](https://www.tastingtable.com/1859085/dinner-parties-with-strangers-timeleft)、[Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner) | 薯岛も欠席が多く4人未満で解散と記事が書く [事実]。つまり**欠席問題は形式に固有**で、突いている競合は確認できない。「友人連れ可」の 222 が間接的に緩和 |
| 4 | 同じ常連との再会、深さ | [声] 同じ人が20〜30回来ている(英国 Samir Sirdeshpande 2026-09-18)。日本の体験記は30〜40回参加のベテランがいたと書き、1回2時間では表面的になりがちと評価(Dime 2026-01-29)。VICE は意味のある関係は得られなかったと評価。中国でも話題が繰り返され新鮮さが落ちるとの指摘(Huxiu 2026-05-27)。「社交にお金を払っているのかもしれない」との学生紙の皮肉(Honi Soit)。既存ノートの Frin 記事は同じ約10人に会う問題を失速要因とする [事実: 既存] | **Pie は2026-08に「Community Homes」で常設グループ化。イベントは「コミュニティの産物」と説明**(共同創業者 Nadya Okamoto)[TechCrunch 2026-08-25]。The Breakfast は朝食1人ずつで深さを訴求 [競合発信]。Creative Lunch Club は業種で固定 |
| 5 | 店・価格・騒音・会計 | [声] 高価な店が選ばれた(Jonathan)。会場の情報が直前まで出ないのに価格が高い(Ginger 2026-10-11)。空調のない店、閉店していた店(Karine)。ピザなどをシェアしたのに飲酒量が違い割り勘が不公平(Dime 2026-01-29、日本)。ある客は Venmo で割り勘を受け取った(Inquirer 2024-10-22、米国)。割り勘は交渉が必要(Tasting Table)。**既存ノートの確認: Timeleft に事前注文・店への注文通知はない(FD01・FD06 は ❌)**。[Dime](https://dime.jp/genre/2076741/)、[Inquirer](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html) | 中国では「店の客単価が高く、社交需要の強い人が払える額とは限らない」と指摘(Huxiu 2026-05-27)。Fandada は参加者が価格帯を指定 [事実: Sixth Tone]。突いている動きは確認できず |
| 6 | 店側の扱い(報酬・提携) | [事実] フィラデルフィアの店主は、Timeleft 側から OpenTable で予約が入り、予約を受けるまでアプリを知らなかったと証言(Inquirer 2024-10)。一方で Brussels Times(2024-08)と Paperjam(日付不明)は「提携店は予約保証の対価を Timeleft に払う契約」と書く。**店が払うのか、無償なのかは出典間で矛盾**。既存ノートは「店に対価を払わない」「注文が少ないと提携終了の例」(ヘルプ要約)。 | 36kr は薯岛が店から料金を取らないと記載。店の収益を共有する動きは確認できず |
| 7 | 安全・ハラスメント・勧誘 | [声] 卓で意図しない身体接触が繰り返された(Ashley Isaacs 2026-08-20)。ハラスメントや薬物の懸念を報告したが同じ人と再会(ポーランド User Private 2026-08-28)。日本の体験記は、他の参加者の話として、2人で会った際にネットワークビジネスの勧誘があったと紹介(Dime 2026-01-29)。Timeleft の公式は「99% は安全上の問題なし」「電話認証必須、ID確認は場合により」(2026-09-18 のブログ)。公式ガイドラインは自衛を参加者の役割と明記 | Strangrs は認証済みアカウントを訴求。Eatwith はホスト審査と $2M の保証。Homies Matti は本人確認 [要約]。中国は実名確認が義務でない例が多いと36kr |
| 8 | 地域密度・対応地域 | [声] 「住んでいる地域が遠く利用できない」「年齢層が限定的」というコメント(Athena Scalzi のブログのコメント欄、2025-09-25)。メキシコでは一部の行政区に限られ通勤が障壁(Expansión 2024-06-25)。外国人との交流を期待したが確認できなかった(同)。DayOfUs は「主に欧州と北米の一部」と書くが自社比較 | Timeleft 自身が2025年に約325→220都市へ縮小(既存ノート) |
| 9 | サポート | [声] 返信に5〜7日(Cynthia O.)、メールのみ(Kirsten Lunoe 2026-08-23)。 | 突いている動きは確認できず |
| 10 | 企業・チーム用途 | [事実] `timeleft.com/business/` は404。既存ノートはブランド向けスポンサー商品のみ確認。企業向けチームビルディング商品は**確認できなかった**(存在しないとは断定できない) | 日本では Tomatalk(下記)が社内シャッフルランチを狙う |

### Inferences
- [推測] 弱点1(課金・解約)は規制リスクにもなり得る。競合の都度払い・会員任意は、Timeleft の最大の不満点と直接対応する。
- [推測] 弱点4(同じ人・深さ)への最も大きな動きは Pie の常設コミュニティ化。1回きりの卓を増やしても、関係が続かなければ離脱するという課題認識は、Pie の2026年の方針転換と整合する。ただし Pie の記事は「イベントだけでは定着しない」とは明言していない。
- [推測] 事前注文・会計は、確認できた限り Timeleft も競合も解いていない領域。日本の体験記に割り勘の不公平感が出ている点は、Shokujii の「メニューを事前注文」の差別点と合う。

### Gaps
- Timeleft に対する投資家や業界アナリストの公開批評(Sifted・Dealroom の分析)は見つからなかった。
- 「Timeleft の弱点」を第三者が体系的に調べた調査はない。Trustpilot の件数は自己選択バイアスがある。
- 店側からの不満(注文しない参加者など)は既存ノートのヘルプ要約以外の一次証言が少ない。
- 食のアレルギー・本人確認以外の食の好みに関する不満の個別証言は未発見(Timeleft 側にアレルギー専用欄がないことは既存ノート)。

---

## 3. 隣接モデル(Key question 4)

### Takeaway
属性別(女性・LGBTQ+・40歳以上・業種)、企業内ランチ、信仰の食卓(Shabbat)、地域食堂(こども食堂)では、それぞれ「主催者・資金源・会場」が Timeleft と異なる形で成立している。日本では、こども食堂が約1.26万か所と最も裾野が広く、社内シャッフルランチは福利厚生の枠組みで運用されている。

### Cited Findings
- 属性・目的別 [事実]: Les Amís(女性・トランス・LGBTQ+、NY $70、アムステルダム €55)、Meet5(40歳以上)、Wyzr Friends(40歳以上)、Synchrony(神経多様性のある成人、$44.99/月)、Creative Lunch Club(クリエイター、月 €7.5)。規模・黒字化は [不明]。 — [TechCrunch 2026-04-05](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/)、[Creative Lunch Club](https://creativelunchclub.com)
- 女性向けのオンライン起点コミュニティ: The Lonely Girls Club は Facebook グループ起点で約6万人、ヨガやキャンドル作り等(VICE 2024-02)。 — [VICE](https://www.vice.com/en/article/timeleft-friend-finding-platform-review/)
- 企業向け(日本): Tomatalk は社内シャッフルランチの組み合わせを AI が決めるアプリ(2022-11-24 リリース、当時は無料。2023年の目標は大企業10社・中小40社・5,000アクティブ)。導入実績は記事に数値なし。手動運営の課題は、毎回の企画・調整の負担で継続が難しいこと。 — [ASCII 2022-11-24 日](https://ascii.jp/elem/000/004/114/4114603/)
- 企業向け(運用と税): エデンレッドの解説(2026-03-07 更新)は、シャッフルランチの課題として、会話のネタがない・組み合わせのマンネリ・店の固定化・参加の義務感を挙げ、任意参加や月1回程度を提案。食事補助の非課税条件は「本人が食事代の半分以上を負担し、会社負担は月3,500円以下(税抜)」。令和8年度税制改正の大綱で7,500円への引き上げ方針が示されているとの記載。 — [Edenred 日](https://edenred.jp/article/workstyle-reform/4441/)。企業の実例(弁護士ドットコムは月1回のシャッフルランチ・ディナー、pera_ichi は3か月に1回で補助2,000円まで、ほか)は検索結果の要約のみ [要約]。
- レストラン主催/共食コミュニティ: Supper Social(バリ→ウィーン、毎回15〜30人超、200回超完売、会員無料・ディナーはチケット)。 — [What's New Indonesia 2025-07-14](https://www.whatsnewindonesia.com/bali/feature/supper-social-expands-internationally-new-wave-community-dining)。Dinner Lab は2016年閉鎖(既存ノート)。
- ホームダイニング: Eatwith はホスト手数料なし、ゲスト側に30%上乗せ、体験ごとに $2M 保証(公式)。 — [Eatwith](https://www.eatwith.com/about)
- 信仰の食卓: OneTable(米国の非営利、主に21〜39歳向けの Shabbat ディナー)。2025年の自己報告で3万回のディナー、8万席、25.5万のエンゲージメント、Z世代42%。主催者に最大 $100 の「Nourishment」クレジットを出し、財団助成で運営(CauseIQ に Marcus Foundation $1M などの助成記録)。資金は参加費でなく助成。 — [OneTable Year in Review 要約](https://onetable.org/year-in-review/)、[CauseIQ 要約](https://causeiq.com/organizations/onetable,464715368) [要約]
- 地域食堂(日本): むすびえの2025年度調査(2025-12-11 発表、速報値)でこども食堂は全国12,601か所。2024年度確定値は10,867か所。小学校区の充足率39.69%。年間延べ利用者の推計は約2,533万人。助成金が採択されにくくなっているとの課題。民間活動で届出不要のため漏れがある可能性。 — [むすびえ資料 PDF(要約のみ)](https://musubie.org/wp/wp-content/uploads/2025/12/Soukatsu_2025.pdf) [要約]
- 韓国: Munto は趣味会のプラットフォーム(上記)。
- 中国: 「搭子」(特定目的の相棒)文化が先行トレンドで、飯・学習・フィットネス・旅行などの搭子があるとの解説。 — [Huxiu 2026-05-27](https://m.huxiu.com/article/4862047.html)
- 料理教室・ポットラック・コワーキング内の食事: 本調査では収益モデルまで確認できなかった。

### Inferences
- [推測] 属性・目的特化の競合は、Timeleft の「誰とでも組む」ことを弱点とみなしている。ただし規模や黒字化の裏付けはない。
- [推測] 日本の社内ランチは、「補助金の枠(非課税条件)」「幹事の負担」が成立条件。Shokujii の幹事+事前注文の構造と親和性がある。

### Gaps
- 料理教室、ポットラック、コワーキング内食事、自治体の共食イベントの事業モデルと規模は未調査。
- OneTable・こども食堂の数字は要約のみで、原資料の本文を読めていない。

---

## 4. 法・規制・安全(Key question 5)

### Takeaway
知らない人との会食サービスに関する訴訟・保険・規制の公開情報は、今回の検索では**見つからなかった**(存在しないという意味ではない)。各社の安全策は自己申告のみで、独立した検証は見つかっていない。

### Cited Findings
- [競合発信] Timeleft: 予約前の電話認証、実名と写真の登録、ID確認は「場合により」、通報・ブロック、警告から永久BANの段階処分。「99%の体験で安全上の問題はない」と記載。責任・保険に関する明示的な記載は見当たらない。 — [Timeleft ブログ 2026-09-18](https://timeleft.com/blog/is-timeleft-safe/)
- [競合発信] Timeleft の安全ガイドライン: 公共の会場、居場所を共有、飲酒の判断は参加者自身の責任、法定飲酒年齢は参加者の責任、緊急時はまず地域の緊急サービスへ。 — [安全ガイドライン](https://timeleft.com/safety-guidelines/)
- [競合発信] Eatwith: 体験ごとに $2M の保証を費用なしで付与、ホスト審査と本人確認。 — [Eatwith](https://www.eatwith.com/about)
- [競合発信] Strangrs: 認証済みアカウント、実在の公共会場、事前は他人の位置情報を見せない。 — [Strangrs](https://www.strangrs.com)
- [事実] 中国: 36kr は多くのプラットフォームで実名確認が義務でなく、求助ボタンや事前審査で対応と記載。Sixth Tone は規制の記述なし。運営は既存の店舗で、スタッフが会食に付き添わないが場を見守る(Fandada)。 — [36kr](https://www.36kr.com/p/3923485499895427)、[Sixth Tone](https://www.sixthtone.com/news/1017835/Eat,%20Pay,%20Love:%20Dining%20With%20Strangers%20Is%20China’s%20New%20Social%20Fix)
- [声] 個別事例: 卓内の身体接触(2026-08-20)、ハラスメントと薬物の懸念(2026-08-28)、ネットワークビジネスの勧誘(日本の体験記)。上記の2-B 表を参照。
- [要約] 2013年の SupperKing(知らない人を自宅ディナーに招くアプリ)の記事は、Airbnb が $50,000 の補償を設けた事例を引き合いに出した。Timeleft とは無関係の類推。 — [TIME 2013 要約](https://techland.time.com/?p=152938)

### Inferences
- [推測] 公開されている安全策は「認証・通報・BAN」と「公共の店で開催」に集約され、事故時の補償(保険)を明示する例は Eatwith の保証のみ。補償の明示は差別化の余地になり得る。
- [推測] 自動更新や返金への苦情(2-B の #1)は、消費者保護の観点で別途確認が必要。法的な評価は本調査の範囲外。

### Gaps
- Timeleft の利用規約(責任制限・保険・自動更新・返金の条項)は取得できず(404)。
- 日本の法規制(飲食店営業許可、食品衛生、イベント保険、酒類提供、個人情報)は未調査。
- 訴訟・事故・当局の調査は、ツール制約もあり網羅できていない。

---

## 5. 市場の見立て(Key question 6)

### Takeaway
IRL 社交に対する投資の枠組みは、独立した VC・アナリストの分析ではなく、事業者の寄稿やメディアの解説として出ている。確認できた数字は「ローカル友達アプリ全体の消費額が約1,600万ドル、今年の DL 約430万(Appfigures 推計)」など限定的。

### Cited Findings
- [事実] Appfigures の推計として、ローカル型の友達アプリ全体で約1,600万ドルの消費支出と、今年約430万ダウンロード。 — [TechCrunch 2026-04-05](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/)
- [競合発信] Fortune への寄稿(2026-03-20、旅行会社 WeRoad の共同創業者 Fabio Bin)。「IRL 経済」と定義し、消費者向けスタートアップへの VC 投資が2023年から2024年末で25%増えたと記載。Best Nights VC(Jägermeister 系のファンド)に言及。測定の難しさも認める。本文に Timeleft の言及なし。 — [Fortune](https://www.fortune.com/2026/03/20/loneliness-epidemic-gen-z-millennials-460-billion-problem)
- [要約] Best Nights VC は夜の外出と IRL 接続に特化した唯一のファンドで16社に投資(Business Insider の要約)。IRL 社交企業はイベント・広告・サブスクで稼ぐとの記述。原文は取得拒否。 — [Business Insider India 要約](https://WWW.BUSINESSINSIDER.IN/irl-social-startups-combat-loneliness-among-millennials-gen-z-2024-5)
- [事実] Pie の方針転換(2026-08-25)は、イベント中心から常設コミュニティ中心への移行。フィードをイベント一覧から知り合いの参加状況に変えた結果、アプリ滞在時間が2分から10分に伸びたと自己申告。 — [TechCrunch](https://techcrunch.com/?p=3156057)
- [事実] 批評側: Honi Soit は孤独が商売になっていると指摘(2024-11-30)。Huxiu は「IRL Tech」を海外の潮流として紹介。 — [Honi Soit](https://honisoit.com/2024/11/loneliness-is-a-popular-business/)、[Huxiu](https://m.huxiu.com/article/4862047.html)
- [事実] Timeleft の資金データベースの食い違い: Dealroom は外部資金の記録なしと表示(検索要約)。CB Insights は Series A $7M(既存ノート)。 — [Dealroom 要約](https://cednc.dealroom.co/companies/timeleft)

### Inferences
- [推測] 公開されている見立ては「孤独×リアル体験」の需要を前提にした楽観論が中心で、継続率や LTV のデータを示したものはない。弱点の検証は口コミ頼りになる。

### Gaps
- Sifted・Dealroom のレポート、VC の Substack による Timeleft/IRL 社交の市場分析は見つからなかった。
- 継続率・LTV・CAC の公開データは Timeleft、競合ともに未確認。

---

## Shokujii の付け入る隙の示唆(推測)

以下はすべて [推測]。根拠は上記の弱点表と競合の動き。

1. **事前注文と個別会計を標準にする**: Timeleft にはなく、日本の体験記で割り勘の不公平感が出ている(2-B #5)。メニューを事前に選ぶ形は、店の仕込み・客単価の見通しと、参加者の予算の透明化を同時に解く。
2. **店に人数と注文を事前に渡す**: 店側の扱い(提携の条件・報酬)は Timeleft で不明確(2-B #6)。注文数が確定していることを店に見せられれば、営業の説得材料になる。
3. **幹事主導で常連・既存グループを前提にする**: 「同じ人に会う」問題(#4)は、知らない人を毎回組み直す形式の限界。Pie が常設コミュニティへ動いたのは同じ課題認識と読める。幹事がいる形はそれを最初から許容する。
4. **企業の社内交流に出す**: Timeleft には企業向け商品が見つからなかった(#10)。日本には食事補助の非課税枠(月3,500円、改正で7,500円の方針)と、手動運営の負担という課題がある(Edenred、ASCII)。
5. **目的・属性・テーマで卓を作れるようにする**: Les Amís、Creative Lunch Club、薯岛の「主題局」が示すとおり、特化は「誰とでも」への対抗軸。幹事が立てるイベントなら自然に実現できる。
6. **単発払いを基本にし、解約の手間をなくす**: Trustpilot の1つ星の核は自動更新と解約(#1)。KF.Social・DayOfUs・薯岛は1回払いを前面に出している。
7. **開催情報を早く出し、店・メニューを事前に見せる**: 「店が直前まで分からない」「店が変わる」「騒がしい」への不満(#3、#5)に対し、事前に店・席・メニューが見えることを価値にできる。Timeleft の「サプライズ」を好む層とは別層を取る。
8. **本人確認・幹事の審査・補償を明示する**: 安全の個別不満(#7)に対して、Eatwith の保証のように補償を示す競合は少ない。アレルギー申告をメニュー注文に組み込めば、Timeleft に専用欄がない点(既存ノート)も埋まる。
