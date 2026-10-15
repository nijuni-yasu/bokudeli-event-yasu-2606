# 飲食店向け 予約台帳・テーブル管理・顧客管理(CRM) SaaS 調査(日本+海外)

調査日: 2026-10-11(現在)。タグ凡例: [事実]=公式/一次または記事本文で確認 / [自社主張]=ベンダー自身の数値・効果 / [要約]=検索結果の要約のみで本文未読 / [推測]=調査者の推論。
注意: 指定された前回ノート(09_food_social_restaurant.md)は指定パスに存在せず参照できなかった。成長史は本ノートで一次情報の範囲から補った(OpenTable/Resy/Tock の長期史は再調査していない)。
WebSearch は上限15回を使い切り、以降は WebFetch のみ。403/404/タイムアウトで読めなかったページ(OpenTable 公式料金、Tock 公式、Resy 公式料金、Toast 公式、Restaurant Business、Fast Company、Atlanta Magazine、omakase.in 店舗向け)は本文未読として扱う。

---

## 0. 日本のネット予約サイトの手数料構造(各社台帳の位置づけの前提)

### Takeaway
日本の主要グルメサイトのネット予約は「掲載料無料 + 来店人数 × 単価の送客手数料」が基本で、ディナー1人あたり約200円が相場。台帳各社の「脱グルメサイト」訴求(自社予約ページは送客手数料なし)はこの人数課金に対する店舗の不満が土台になっている。

### Cited Findings
- [事実] ホットペッパーグルメのネット予約プラン(掲載料無料)は、来店があった分だけ課金。15:00〜6:59 来店は「ネット予約手数料150円(税抜)×来店人数 + ポイント付与料50pt×来店人数」、7:00〜14:59 来店は「40円(税抜)+10pt」(1pt=1円)。3人ディナー来店の例で600円。単価は変更され得て、変更の1か月前にメール通知。キャンセル予約は無料だが、店舗側でキャンセル処理をしないと請求される場合がある — [ホットペッパーグルメ 掲載案内](https://www.hotpepper.jp/lcp_keisai/)(2026-10-11 取得、掲載日不明)
- [事実] 食べログのネット予約は来店人数に応じた従量課金で、ランチ(6:00〜15:59)100円×人、ディナー(16:00〜翌5:59)200円×人(2022年8月時点。TableCheck のブログによる整理で、食べログ公式ページではない) — [TableCheck ブログ(2022-08-29)](https://www.tablecheck.com/ja/blog/seo-gourmet-media/)
- [事実] ぐるなび(ぐるなびPRO)のスタートプランは初期・月額0円、予約手数料はランチ41円・ディナー205円×人。ライト月額10,000円、ベーシック同30,000円(2022年8月。税抜/税込の別は記事で未確認。上のぐるなび台帳の11,000円/33,000円は税込と整合)。LINE公式アカウントや Google ビジネスプロフィール経由の予約でも同じ手数料が発生 — [TableCheck ブログ(2022-08-29)](https://www.tablecheck.com/ja/blog/seo-gourmet-media/)
- [事実] ぐるなび台帳(ぐるなびの予約台帳)の料金: スタート0円(ランチ41円/ディナー205円×予約人数)、ライト11,000円(11円〜/55円〜×予約人数)、ベーシック33,000円(同)。初期費用等は要問合せ。比較サイトの記載で日付不明、台帳は有料プランで人数単価が下がる構造 — [アイミツ ぐるなび台帳](https://saas.imitsu.jp/cate-reservation/service/4586/price)
- [事実] 一休.comレストランは固定費なし、売上プラン価格の8%の成功報酬(2022年8月) — [TableCheck ブログ](https://www.tablecheck.com/ja/blog/seo-gourmet-media/)
- [事実] ヒトサラは初期費用6万円+月額(Light 1万/Basic 2万/Gold 3万円)、Retty は掲載無料(2018〜2019年データ) — [TableCheck ブログ](https://www.tablecheck.com/ja/blog/seo-gourmet-media/)
- [事実] 2026年5月25日、カカクコム(食べログ)と飛騨・高山観光コンベンション協会が、高山市内で「食べログ多言語版」のネット予約を導入する飲食店について、国内外すべてのユーザーのネット予約手数料を無料化する官民連携モデル事業を発表(期間・財源の詳細は本文確認できず) — [訪日ラボ(2026-06-02)](https://honichi.com/news/2026/06/02/tabelog-hidatakayama-alignment/)

### Inferences
- [推測] 宴会・グループ(6〜20名)はこの「人数課金」と相性が悪く、店側の手数料負担が大きい。幹事経由の団体送客を扱う Shokujii は「人数課金でない/上限あり」の設計が差別化になり得る。
- [推測] 食べログがインバウンド向けに手数料を無料化する動きは、大手サイトも手数料を戦略的に動かすことを示す。

### Gaps
- 食べログ公式の現行手数料(2026年)は公式ページで確認できなかった(2022年の第三者整理のみ)。
- ぐるなびの現行プランは第三者ページのみ。ぐるなび/食べログ/ホットペッパーと各台帳(トレタ・ebica・TableCheck)の個別連携可否の公式記載(サイト名の列挙)は読めた範囲では確認できなかった。

---

## 1. TableCheck(テーブルチェック / TableSolution)

### Takeaway
日本発・グローバル志向の予約台帳+消費者ポータル。強みはカード与信/事前決済によるキャンセル対策、グルメサイト25媒体の一元管理、送客手数料なしの自社予約ページ、POS 13社以上連携。料金は非公開(要問合せ)。2025年に調達2件(4.3億円+7億円デット)。

### Cited Findings

#### 基本情報と料金
- [事実] 運営は株式会社TableCheck(旧 VESPER、2011年3月11日設立)。2013年に TableSolution(台帳・顧客管理)と TableCheck(消費者向けネット予約)を公開 — [TableCheck 沿革](https://tablecheck.com/ja/join/about-us/history/)
- [自社主張] 導入店舗数: 公式の飲食店向けトップは「約13,000店以上が利用、累計予約1億件超、23言語対応」。一方、沿革ページは「約11,300店舗が利用」と記載(ページ間で不一致、更新時点が異なる可能性) — [TableCheck 飲食店向けトップ](https://www.tablecheck.com/ja/join/) / [沿革](https://tablecheck.com/ja/join/about-us/history/)
- [事実] 2021年12月に国内外の導入が6,000店超、2022年に海外導入1,000店突破(沿革) — [TableCheck 沿革](https://tablecheck.com/ja/join/about-us/history/)
- [事実] 料金は公式サイトに掲載なし(「今すぐお問い合わせ」導線のみ)。比較サイトも要問合せ — [TableCheck 飲食店向けトップ](https://www.tablecheck.com/ja/join/)
- [要約] 2022年の Makuake との提携プレスリリースに、オプション機能は通常「月2,000円+5円/取引の従量課金」、初期費用は規模・機能で異なると記載(特別プランの情報、本文未読) — [検索結果: TableCheck×Makuake 2022-04-07 PDF](https://a.storyblok.com/f/66216/x/7f4d1a189b/tablecheck_makuake_partnership_20220407.pdf)
- [事実] 直近の動向: 2025年3月31日に総額4.3億円の調達(「Series S」。ひらまつ、ワンダーテーブル、プラン・ドゥ・シーなど飲食企業と個人投資家)。用途は国内外の台帳シェア拡大、機能・サポート強化、消費者向け検索・予約ポータルの刷新 — [TableCheck プレスリリース 2025-03-31](https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/)
- [事実] 2025年12月15日に7億円のデットファイナンス(みずほキャピタル、SBI新生銀行、福岡銀行)。累計調達総額17.89億円。国内2拠点、海外9拠点 — [TableCheck プレスリリース 2025-12-15](https://www.tablecheck.com/ja/join/about-us/press/2025/1215_debt-financing/) / [The Bridge](https://thebridge.jp/2025/12/tablecheck-raises-700-million-yen-debt-financing)

#### 主要機能
- [事実] 顧客管理: 来店履歴・注文内容・支払い・好み・アレルギー・誕生日/記念日を蓄積し、スタッフ間・系列店間で共有。「3回以上来店」「来月誕生日」等の複合条件検索、VIP等フラグ。CTI連携で着信時に顧客情報を表示(クラウドCTI契約時は録音可)。メール配信は抽出リストを外部メルマガサービスに連携(SMS配信への言及なし) — [TableCheck 顧客管理](https://tablecheck.com/ja/join/features/customer-relationship-management/)
- [事実] キャンセル/no-show対策: 与信型(予約時にカード情報を預かり、キャンセル/無断キャンセル時にキャンセル料請求を試みる)と事前決済型(予約時決済)。メニュー単位・人数・客層(団体、海外客、期間限定メニュー)別にポリシー設定可能。主要5ブランドのカード、Alipay/WeChat Pay 対応。確認リマインドは SMS/メールで回数・タイミング設定可。決済手数料は未記載 — [TableCheck キャンセル対策](https://tablecheck.com/ja/join/features/cancel-and-no-show-protection/)
- [事実] 予約受付: 公式ウェブ予約(送客手数料なし、満席時は系列店の空席を提案)、グルメサイト予約の自動取込と在庫一元管理(国内外25サイト、流入経路別の費用対効果分析)、予約時・来店前日のメール/SMS自動送信、休業時の一斉通知、電話予約も一画面で入力可 — [TableCheck 予約受付](https://tablecheck.com/ja/join/features/reservation-and-table-management/)
- [事実] 機能メニュー: TableCheck Pay(決済)、データ活用、テイクアウト/デリバリー、インバウンド対応、FastPass、Channels。コース事前選択・宴会/貸切・卓割りの個別説明は読めた範囲では確認できず(機能名のみ) — [TableCheck 飲食店向けトップ](https://tablecheck.com/ja/join/)
- [事実] 沿革上の機能史: 2016年カード決済(事前決済・デポジット)、2017年キャンセルプロテクション提供開始(200店舗に導入)、2020年 Google 予約連携・テイクアウト/デリバリー予約・非接触決済 — [TableCheck 沿革](https://tablecheck.com/ja/join/about-us/history/)
- [要約][自社主張] TableCheck Pay の2022年の年間決済総額は提供開始の2020年から約24倍(検索結果の要約のみ。出典ページ本文は未読) — [検索結果: TableCheck インフォグラフィック](https://www.tablecheck.com/ja/company/tcinfographic/)

#### 外部連携
- [事実] POS: 13社以上の主要POSと連携し、注文履歴・利用金額が自動蓄積(追加機器不要) — [TableCheck 顧客管理](https://tablecheck.com/ja/join/features/customer-relationship-management/)
- [事実] TableCheck Channels(2026年3月時点): Instagram/Facebook、LINE予約、Google プロフィール/マップ、ミシュランガイド公式サイト・アプリと連携。ぐるなび/食べログ/Tripadvisor は本ページに記載なし。カード会員向けダイニング特典(VISA、ダイナース等)や提携グルメイベントの予約基盤も提供(カード会社の審査あり)。手数料額は記載なし — [TableCheck Channels](https://tablecheck.com/ja/join/features/tablecheck-channels/)
- [事実] 2023年に日本の予約システムとして初めて Michelin Guide と Tripadvisor の両方と連携 — [TableCheck 沿革](https://tablecheck.com/ja/join/about-us/history/)
- [事実] 公開 API の記載は飲食店向けトップ/機能ナビに存在せず、確認できず。

#### 店舗獲得とグロース
- [事実] 2014年に主要POSと連携、2015年に1,000店突破しヒルトンが初のグローバルホテル顧客に。2017年に初の海外拠点(ソウル、グローバルホテルチェーンとの取引が契機)、2018年シンガポール、2019年インドネシア・タイ・UAE。2019年時点で海外導入約300店 — [TableCheck 沿革](https://tablecheck.com/ja/join/about-us/history/)
- [事実] 2025年の出資者にひらまつ、ワンダーテーブル、プラン・ドゥ・シーなど大手飲食企業が並ぶ。導入事例にもワンダーテーブル(ロウリーズ・ザ・プライムリブ)等のグループが登場 — [Series S リリース](https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/) / [導入事例一覧](https://tablecheck.com/ja/join/success-stories/)
- [事実] 導入事例は課題別に分類(キャンセル対策/脱グルメサイト/業務効率化/インバウンド/顧客管理)。2025年9月〜2026年9月に13件以上掲載 — [TableCheck 導入事例](https://tablecheck.com/ja/join/success-stories/)
- [自社主張] やきにく亭 六歌仙: 無断キャンセル月100件→ほぼゼロ、ディナー回転率3倍、電話予約減。導入前は紙管理で、他社のオンライン予約システムに切り替えた後に無断キャンセルが急増(特にインバウンド)。決め手はクレジットカード与信型のキャンセル対策と、予約が集中しても落ちないブラウザ型の安定性(前システムは高負荷時にクラッシュ)。与信は一定人数以上の予約に適用 — [六歌仙 事例](https://tablecheck.com/ja/join/success-stories/cancel-protection/rokkasen_2026/)
- [自社主張] 株式会社MOTHERS: グルメサイト手数料削減「月間300〜400万円」(見出し)/「年間300〜400万円」(本文)と記事内で不一致。ピーク時は1店舗月30万円の手数料。公式ウェブ予約を自社サイト・SNSに導入し予約数は大きく落ちなかった — [MOTHERS 事例](https://tablecheck.com/ja/join/success-stories/ota-vs-ownedmedia/mothers/)
- [自社主張] 山形料理と地酒 まら: Instagram 経由予約でグルメサイト手数料6万円削減。釣船茶屋ざうお: no-showほぼゼロ — [TableCheck 飲食店向けトップ](https://www.tablecheck.com/ja/join/)

#### 導入・解約の理由
- [自社主張] 導入理由の訴求は①無断キャンセル/ドタキャン防止(カード与信・事前決済)、②グルメサイト手数料の削減(自社予約ページ・Instagram・LINE)、③紙/電話予約の工数削減、④インバウンド(多言語・海外カード) — 上記各事例。MOTHERS は「顧客データを自社に残せる」を理由に挙げる — [MOTHERS 事例](https://tablecheck.com/ja/join/success-stories/ota-vs-ownedmedia/mothers/)
- 解約理由: 独立した口コミ/業界誌では確認できず(後述 Gaps)。

#### 出典(URL+日付)
- https://www.tablecheck.com/ja/join/ (2026-10-11取得、掲載日不明)
- https://tablecheck.com/ja/join/features/{cancel-and-no-show-protection, customer-relationship-management, reservation-and-table-management, tablecheck-channels}/ (2026-10-11取得。Channels は2026年3月時点記載)
- https://tablecheck.com/ja/join/about-us/history/ (同)
- https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/ (2025-03-31)
- https://www.tablecheck.com/ja/join/about-us/press/2025/1215_debt-financing/ (2025-12-15)
- https://thebridge.jp/2025/12/tablecheck-raises-700-million-yen-debt-financing (2025-12)
- https://www.tablecheck.com/ja/blog/seo-gourmet-media/ (2022-08-29)

### Inferences
- [推測] 大手飲食グループが出資者かつ導入事例の主役であることは、チェーン本部経由の導入(1社決めれば多店舗)が獲得の主ルートであることを示唆する。
- [推測] 「事前決済・与信」「メニュー単位のポリシー」は、Shokujii の事前注文+人数/団体の概念と近い。団体・海外客で条件を変える設計(トレタも同種)は一般化している。

### Gaps
- 料金(月額・初期費用・手数料率)は非公開で確認不能。導入店舗数は13,000+(公式トップ)と11,300(沿革)で不一致。
- コース事前選択、宴会/貸切、卓割り、アンケート、LINE通知の個別仕様、公開 API の有無は本文未確認。
- 解約理由・競合比較の独立情報なし。

---

## 2. トレタ(toreta / トレタ予約台帳)

### Takeaway
iPad時代から国内最大級の予約台帳(累計1万9000店舗超)。2026年2月25日にLINEヤフーが過半数株式を取得して子会社化し、LINE公式アカウント基盤の飲食SaaSへ舵を切った。料金は非公開。2026年にキャンセル料回収の Payn と API 連携、POS 決済連携(スマレジ、東芝テック)を拡張。

### Cited Findings

#### 基本情報と料金
- [事実] LINEヤフーは2026年1月30日にトレタ株式取得の合意を公表し、2026年2月25日に過半数の株式を取得して子会社化。トレタは予約台帳とモバイルオーダー「トレタO/X」の開発・提供を継続し、LINEを基盤とする飲食業向けSaaS構築を目指す — [トレタ プレスリリース 2026-02-25](https://corp.toreta.in/press/2026-02-25-9570/) / [トラベルボイス(2026-01-30)](https://www.travelvoice.jp/20260130-159175)
- [事実] 導入実績: 「全国で累計1万9000店舗超」(LINEヤフー発表の報道経由。累計であり稼働数ではない) — [トラベルボイス(2026-01-30)](https://www.travelvoice.jp/20260130-159175)
- [事実] 過去の推移: 2016年8月に約7,000店(オンライン予約台帳でシェア33.5%、Seed Planning調査)、2017年10月に9,000店超・継続利用率99%、2016年度の当期純損失5.79億円、資金調達総額20億円超(2017年時点) — [The Bridge(2016-08-22)](https://thebridge.jp/2016/08/toreta-got-7k-accounts-two-and-a-half-years) / [ITmedia(2017-11-29)](https://www.itmedia.co.jp/news/article/1711/29/1171129125/)
- [事実] 料金: 公式トップに記載なし。比較サイトも要問合せ。2017年のITmedia記事は記者が「月額1.2万円」と仮定した試算のみで公式料金ではない — [トレタ公式](https://toreta.in/) / [ITmedia](https://www.itmedia.co.jp/news/article/1711/29/1171129125/)
- [事実] 製品ラインナップ: トレタ予約台帳、トレタO/X(店内モバイルオーダー)、トレタ予約番(AI電話予約)、トレタスタンプ(アプリ不要のスタンプカード兼CRM) — [トレタ コーポレート](https://corp.toreta.in/)
- [事実] 2025年11月〜2026年8月のニュース: 2025-10-31 CASHIER と API 連携、2025-11-13 O/X に来店回数別メニュー(会員制度)、2025-11-27 かんたんネット予約プラスに国内/インバウンドで予約条件を自動出し分け、2026-02-19 O/X が東芝テックPOS連携の決済に対応、2026-03-05 O/X が スマレジ連携の決済に対応、2026-03-23 予約台帳と Payn が API 連携、2026-07-09 COO 就任、2026-08-17 本社移転。料金改定の告知は確認できず — [トレタ お知らせ](https://corp.toreta.in/news/) / [プレス一覧](https://corp.toreta.in/press/)

#### 主要機能
- [事実] 予約台帳: テーブルマネジメント(席回転の最適化)、ネット予約ページ、グルメサイト予約の一元管理、POS 連携、通話録音(キャンセル料回収の根拠として導入事例で紹介)。駒形どぜう浅草店の事例で「コース予約の来店率100%」「海外客の客単価2,000円以上アップ」(効果の自社紹介) — [トレタ公式](https://toreta.in/)
- [事実] かんたんネット予約プラス(2025-11-27): 表示言語(日本語/英語/繁体字/ベトナム語)ごとにコースを出し分け。外国語表示の客は「インバウンド専用コース」と、カード登録が必要な予約フォーム(与信枠確保のキャンセルプロテクション)を使い、日本語表示の客はカード登録不要の通常フォーム — [トレタ プレス 2025-11-27](https://corp.toreta.in/press/2025-11-27-8877/)
- [事実] Payn 連携(2026-03-23): キャンセルになった予約データが毎朝 Payn の管理画面へ自動送信され、キャンセル料の請求・回収を自動化。トレタ予約台帳導入店舗は連携機能の初期・月額費用が無料(Payn 本体の利用は別途申込) — [トレタ プレス 2026-03-23](https://corp.toreta.in/press/2026-03-23-9756/)
- 来店前リマインド、メール/SMS配信、アンケート、顧客タグの詳細は本文で確認できず。

#### 外部連携
- [事実] 「グルメサイト予約を一元管理」「利用中のPOSと連携」。具体的なサイト名(ぐるなび/食べログ等)は公式トップに記載なし — [トレタ公式](https://toreta.in/)
- [事実] 2017年時点で「トレタメディアコネクト」(グルメサービスの予約機能連携)と「トレタPOSコネクト」を提供 — [ITmedia(2017-11-29)](https://www.itmedia.co.jp/news/article/1711/29/1171129125/)
- [事実] 2025〜2026年に CASHIER、Payn、東芝テックPOS、スマレジと API/連携を拡大(パートナー経由の API 連携が中心。公開 API の有無は確認できず)。LINE公式アカウントとトレタ予約台帳の連携を計画 — [トレタ お知らせ](https://corp.toreta.in/news/) / [トラベルボイス](https://www.travelvoice.jp/20260130-159175)

#### 店舗獲得とグロース
- [事実] 2016年8月に約7,000店、2017年10月に9,000店超、2026年に累計19,000店超。導入先は2017年時点で大半が東京で、地方拡大が課題とされた — [The Bridge(2016-08)](https://thebridge.jp/2016/08/toreta-got-7k-accounts-two-and-a-half-years) / [ITmedia(2017-11)](https://www.itmedia.co.jp/news/article/1711/29/1171129125/)
- [要約] 2014年5月に900店超、2014年12月に1,881店(検索結果の見出し・要約のみ、本文未読) — [The Bridge 2014-12](https://thebridge.jp/2014/12/japanese-open-table-app-treta-got-1900-accounts-in-1-year)
- [推測] 2026年以降はLINEヤフーの LINE公式アカウント基盤(顧客接点・来店促進・モバイルオーダー)と組み合わせた拡販が見込まれる(根拠: 子会社化の目的記述)。

#### 導入・解約の理由
- [自社主張] 事例上の効果は「予約事故ゼロ」「コース予約来店率100%」など(具体測定値は限定的) — [トレタ公式](https://toreta.in/)
- [事実] 継続利用率99%(2017年、報道上のトレタ側数値)。解約理由は確認できず — [ITmedia](https://www.itmedia.co.jp/news/article/1711/29/1171129125/)

#### 出典(URL+日付)
- https://corp.toreta.in/press/2026-02-25-9570/ (2026-02-25)
- https://corp.toreta.in/press/2026-03-23-9756/ (2026-03-23)
- https://corp.toreta.in/press/2025-11-27-8877/ (2025-11-27)
- https://corp.toreta.in/news/ , https://corp.toreta.in/press/ (2026-10-11取得)
- https://www.travelvoice.jp/20260130-159175 (2026-01-30)
- https://toreta.in/ (2026-10-11取得)
- https://thebridge.jp/2016/08/toreta-got-7k-accounts-two-and-a-half-years (2016-08-22)
- https://www.itmedia.co.jp/news/article/1711/29/1171129125/ (2017-11-29)

### Inferences
- [推測] 親会社が LINE のため、日本のBtoCの「予約・通知の入口=LINE」が台帳側から強化される可能性が高い。Shokujii が LINE 通知・LINE ログインを使う場合、同じ入口を持つ競合/補完関係になる。
- [推測] 2026年にキャンセル料回収(Payn)・POS決済を相次ぎ外部連携で拡張しており、自社開発よりエコシステム連携で機能を補う方針に見える。

### Gaps
- 現行の料金体系(月額・初期費用・オプション)、公式の連携先グルメサイト名、リマインドや配信機能の仕様は公式本文で確認できなかった。
- LINEヤフー子会社化後の料金・機能の変更、現在の稼働店舗数は不明(1万9000店超は累計)。

---

## 3. ebica(エビカ / 株式会社エビソル)

### Takeaway
エビソル(親会社ジャパンチケットHD)の予約台帳。グルメサイトコントローラー(複数サイトの予約・在庫の自動集約)とインバウンド集客(Japanticket 等 OTA・Google・大衆点評・LINE)に強み。販売パートナー(代理店)制度で拡販。月額は公式非公開(第三者ページに約1万円〜/初期3万円目安)。

### Cited Findings

#### 基本情報と料金
- [事実] 運営: 株式会社エビソル(親会社 株式会社ジャパンチケットホールディングス、グループ会社 株式会社Japanticket)。「全国15,000店舗の飲食店を支援してきた」(支援実績の累計表現で稼働数ではない) — [ebica 公式](https://www.ebica.jp/) / [お知らせ](https://www.ebica.jp/news/)
- [事実] 公式の料金ページは価格表のダウンロード(フォーム送信)制 — [ebica 価格ページ](https://www.ebica.jp/price/)
- [事実/日付不明] ASPIC のサービス紹介に「月額基本利用料は1店舗あたり約10,000円から、初期費用30,000円が目安、オプション別」と記載。公式確認はできていない — [ASPIC ebica](https://www.aspicjapan.org/asu/service/47698)
- [事実] 2026年4〜10月のお知らせ: 08-24 Yappli Mobile Order と API 連携(ウォークイン情報を自動反映)、08-18 Payn とシステム連携、06-08 Japanticket が Traveloka・Myrealtrip と API 連携、10-02 観光コンテンツ「SUSHI BUS」の予約を ebica で一括管理。料金改定の告知は確認できず — [ebica お知らせ](https://www.ebica.jp/news/)

#### 主要機能
- [事実] グルメサイトコントローラー: 複数のグルメサイト予約を自動取得して集約、空席をリアルタイム更新しダブルブッキングを防止。系列店の空席確認・満席時送客 — [ASPIC ebica](https://www.aspicjapan.org/asu/service/47698)
- [事実] AI電話予約「さゆり」(24時間、空席確認・予約登録・キャンセル対応、必要時は店舗へ転送)、スマート予約(自社サイト/Instagram から予約フォーム、英語・中国語対応、満席時は他時間帯・他店舗を提案) — [ASPIC ebica](https://www.aspicjapan.org/asu/service/47698)
- [事実] 顧客管理(予約で蓄積した顧客情報をリピーター施策に活用)、配席管理、POS 連携(予約なし来店も含め空席データを抽出・反映、媒体ごとの売上分析)。ノーショー対策への言及はあるが具体機能の説明は確認できず — [ebica 公式](https://www.ebica.jp/)
- [事実] Payn 連携(2026-08-18): ノーショー・キャンセル予約データを API でリアルタイム連携し請求書下書きを自動作成、最大14か国語の請求通知。Payn の初期・月額費用は無料で成功報酬型(率は未記載)、連携に追加費用なし — [ebica × Payn](https://www.ebica.jp/news/info/ebica-payn-system-cooperation/)

#### 外部連携
- [事実] Google、中国の口コミ「大衆点評」(自動翻訳対応)、LINE(「LINEで予約」)、Japanticket(海外OTA予約)、自社サイト/SNS から予約受付 — [ASPIC ebica](https://www.aspicjapan.org/asu/service/47698)
- [事実] 2026年に Traveloka(東南アジア、ハラール対応見出し)・Myrealtrip(韓国)との API 連携を Japanticket が開始 — [ebica お知らせ](https://www.ebica.jp/news/info/traveloka-jt-system-cooperation/)
- 対応する日本のグルメサイト名の公式列挙は読めた範囲で確認できず。[要約] 検索結果の要約では「10以上の大手グルメサイトへ席在庫を自動反映」と紹介されるが、ぐるなびとの連携は明記されていないとされる(比較サイト群の要約。本文未読)。

#### 店舗獲得とグロース
- [事実] 販売パートナー制度: 飲食店を支援する事業者が対象、報酬率は非公開だが「積み上げ型のランニングマージン」と解約率の低さによるストック収益を訴求。エビソルが受注後の設定・納品・運用サポート、勉強会・商談同行・デモアカウント・専任窓口を提供、約2週間で納品。パートナーが商談獲得から契約まで担う形と、商談獲得までの形がある。予約を取る業態が対象でカフェ等は対象外 — [ebica 販売パートナー](https://www.ebica.jp/sales-partners/)
- [事実] グループ会社 Japanticket(訪日客向けチケット/OTA)の予約を台帳に取り込む構造で、台帳導入が訪日客予約の入口になる — [ebica お知らせ](https://www.ebica.jp/news/info/traveloka-jt-system-cooperation/)

#### 導入・解約の理由
- 独立した口コミ・解約理由は確認できず。公式が訴求するのは「グルメサイト予約の一元管理」「インバウンド」「AI電話」(上記)。

#### 出典(URL+日付)
- https://www.ebica.jp/ , /price/ , /sales-partners/ , /news/ (2026-10-11取得、お知らせは2026-04〜10掲載分)
- https://www.ebica.jp/news/info/ebica-payn-system-cooperation/ (2026-08-18)
- https://www.ebica.jp/news/info/traveloka-jt-system-cooperation/ (2026-06-08)
- https://www.aspicjapan.org/asu/service/47698 (掲載日不明)

### Inferences
- [推測] 販売パートナー制は、飲食店を既に支援している POS 販売店/コンサル/広告会社を営業網にする戦略で、少人数チームでも全国拡販できる。Shokujii の店舗獲得にも応用余地がある(紹介プログラムの拡張)。
- [推測] Japanticket 等の OTA 連携は「台帳が集客チャネルを持つ」モデル。

### Gaps
- 公式料金(価格表は非公開)、導入「稼働」店舗数、リマインド/配信/アンケート/コース事前選択/カード保証の有無は本文未確認。
- 解約・乗り換えの実態データなし。

---

## 4. OMAKASE(GMO OMAKASE株式会社)

### Takeaway
「予約困難店」特化の予約管理・代行型マーケットプレイス。利用者が1席・1予約あたり390円を負担するモデルが確認でき、店舗側料金は確認できなかった。GMOインターネット傘下(2021年)で外部調達は不明。

### Cited Findings

#### 基本情報と料金
- [事実] 2021年5月24日、GMOインターネットが OMAKASE を子会社化(簡易株式交付)。当時「予約が取りにくい店舗が230店舗以上掲載」。利用者は予約時に1席・1予約あたり390円の予約手数料を支払う — [GMO グループ 2021-05-24](https://group.gmo/en/news/article/813/)
- [事実] 会社概要: 2017年4月設立、従業員59名、資本金8,800万円、累計調達額・評価額は非公開(求人サイト情報) — [HERP Career](https://herp.careers/careers/companies/omakase)
- [要約] 求人ページ記載として、ミシュラン掲載店中心に約1,000店舗に導入、ミシュラン三つ星12店中9店が利用(掲載時期不明) — [検索結果: HERP 求人](https://herp.careers/careers/companies/omakase)(本文は店舗数を記載せず。要約のみのため要確認)
- [要約] 2025年4月に プレミアム会員向けサービス「JCB スター・ダイニング by OMAKASE」を開始(検索結果の要約のみ)。2022年に最大100%を補償する「OMAKASEキャンセル保険」(利用者任意加入、Finatext/スマートプラス少額短期保険)を販売開始 [要約]
- 店舗側の料金(掲載料・成果課金・台帳利用料): 公式本文が403で読めず確認できず。

#### 主要機能
- [事実] 事業内容は「予約が取りにくい飲食店向け予約管理サービスの開発・運営」。インバウンド対応を強化 — [GMO 2021-05-24](https://group.gmo/en/news/article/813/) / [HERP Career](https://herp.careers/careers/companies/omakase)
- 顧客プロファイル、リマインド、メール配信の詳細は確認できず。

#### 外部連携 / 店舗獲得とグロース / 導入・解約の理由
- [事実] 2021年5月: 230店舗以上。[要約] 2022年8月: 360店舗程度 — 同上
- 獲得手法・導入/解約理由は確認できず。ミシュラン星付き店中心という立ち位置が獲得戦略(予約困難店の「ノーショー・転売対策」を台帳機能で解決する構図)と思われるが [推測]、出典で裏取りできていない。

#### 出典(URL+日付)
- https://group.gmo/en/news/article/813/ (2021-05-24)
- https://herp.careers/careers/companies/omakase (2026-10-11取得)
- https://omakase.in/r/hc778124 (403で未読。検索結果で「予約時に1席あたり390円」の記載を要約確認)

### Inferences
- [推測] 利用者課金(消費者側が予約手数料を払う)モデルは、店舗負担ゼロで参加させやすく、予約困難店の店側の導入障壁を下げる。Shokujii は「幹事が主催・参加者が事前注文」なので、どの当事者から収益を取るかの設計参考になる。

### Gaps
- 店舗側料金、現行の導入店舗数(約1,000は要約のみ)、機能詳細、2025年の資金調達(確認できず)。

---

## 5. Airリザーブ(リクルート / Airビジネスツールズ)

### Takeaway
Airリザーブは汎用の予約管理(飲食専用ではない)。無料プランあり、有料は月額5,500円/11,000円、決済手数料3.24%。Airペイ・Airレジ・Airウェイトと AirID でつながる。飲食店向けの専用機能(卓割り、コース事前選択等)は確認できず。

### Cited Findings

#### 基本情報と料金
- [事実] プラン: フリー月0円(予約管理、顧客管理、オンライン決済、予約確認メール)、ベーシック5,500円(税込、予約項目カスタマイズ、リマインドメール、Googleカレンダー連携、複数店舗切替)、スタンダード11,000円(予約時アンケート、CSV出力、計測タグ)、プレミアム非公開(IP制限、権限管理)。初期費用0円、解約金なし、オンライン決済手数料3.24% — [Airリザーブ](https://airregi.jp/reserve/)(2026-10-11取得、掲載日不明)
- 導入事業者数: ページに総数の記載なし。運営会社名もこのページ本文では確認していない(依頼文の「Airビジネスツールズ」表記に従う)。

#### 主要機能 / 外部連携
- [事実] 連携: Googleカレンダー(ベーシック以上)、Airウェイト(予約情報、スタンダード以上)、Airペイ・Airレジ・Airウェイトと AirID で顧客情報連携、計測タグ — [Airリザーブ](https://airregi.jp/reserve/)
- ホットペッパーグルメ等との連携、API の記載は確認できず。

#### 店舗獲得とグロース
- [事実] フリープラン+初期費用0円+解約金なし+単月契約という低リスクな入口設計 — [Airリザーブ](https://airregi.jp/reserve/)
- [推測] Air系(レジ・ペイ・ウェイト)との束ね売りが入口。

#### 導入・解約の理由
- 確認できず。

#### 出典(URL+日付)
- https://airregi.jp/reserve/ (2026-10-11取得)

### Inferences
- [推測] 無料プラン+決済手数料(3.24%)で収益化する構造は、小規模店の導入障壁を下げる定番形。Shokujii の partner アプリを「無料で入り、決済(イベント事前決済)で収益」とする設計と整合。

### Gaps
- 飲食店向け機能(Airウェイト以外)、導入数、グルメサイト連携、Airリザーブの飲食専用版の有無は未確認。

---

## 6. SevenRooms

### Takeaway
ゲストCRMを核にしたエンタープライズ寄りの予約・マーケ基盤。2025年6月13日にDoorDashが買収完了(約11.5億ドル)。DoorDash/Deliveroo の予約マーケットプレイスを手数料なしで接続できる点が新しい。料金は見積制。

### Cited Findings

#### 基本情報と料金
- [事実] DoorDash は2025年6月13日に SevenRooms の買収完了を発表。SevenRooms は「世界で13,000以上の飲食・ホテルF&B・ナイトライフ・エンタメ施設」を支援(Marriott、MGM Resorts 等)。CRM・予約・ゲスト体験ツールを DoorDash Commerce Platform に統合 — [DoorDash 2025-06-13](https://about.doordash.com/en-us/news/doordash-completes-acquisition-of-sevenrooms)
- [要約] SEC 開示では買収対価の取得日公正価値は11.52億ドル(現金9.02億ドル+繰延現金2.5億ドル) — [検索結果: DoorDash 10-Q FY2025](https://www.sec.gov/Archives/edgar/data/1792789/000179278925000020/dash-20250930.htm)
- [事実] 料金ページ: Starter / Growth / Premium の3プランで価格は「見積」のみ。Starter は CRM・ゲストプロファイル、ブランド予約・ウェイトリスト、卓管理、レピュテーション管理、基本のマーケ自動化、「5,000万人超の DoorDash & Deliveroo Reservation Marketplace ユーザーへのアクセス(カバーフィーなし)」。アドオン(価格非掲載): Email Marketing、Event Management、Voice AI、WhatsApp/Text Marketing、API & Integrations、Group Portal — [SevenRooms Pricing](https://sevenrooms.com/pricing/)
- [要約] 検索結果の別の比較記事は SevenRooms のサポートパッケージを約$149〜$799/月と紹介(本文未読、不確か)。なお SevenRooms 自身の比較ページでは $149/$299/$499 は OpenTable の価格として記載され、SevenRooms 自身は「Custom quote(見積)」と記述 — [SevenRooms 比較ガイド](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)

#### 主要機能
- [事実] CRM: 予約・来店・注文を横断して顧客データを統合。予約チャネル: 自社サイト、DoorDash/Deliveroo Reservations、Google、Instagram、Yelp。Voice AI、ウェイトリスト、AI卓管理(回転最適化、ペーシング、カバー予測)、メール/SMS キャンペーン — [SevenRooms Platform](https://sevenrooms.com/platform/)
- 事前決済/デポジットとグループ依頼の詳細は同ページで確認できず(アドオンに Group Portal あり)。

#### 外部連携
- [自社主張] 「Toast、Square、Lightspeed、NCR 等100以上の連携」。直接予約は自社の一次データ、DoorDash Reservations のデータは DoorDash 側にとどまると比較ページが記載 — [SevenRooms 比較ガイド(2026-10-02付、価格確認 2026-07-23)](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)
- [事実] API は有料アドオン — [SevenRooms Pricing](https://sevenrooms.com/pricing/)

#### 店舗獲得とグロース
- [事実] ホテル・MGM・Marriott 等の大規模グループ向けが顧客例。買収後は DoorDash の需要側(5,000万人超のマーケットプレイス)を店側の武器として訴求 — [DoorDash 2025-06-13](https://about.doordash.com/en-us/news/doordash-completes-acquisition-of-sevenrooms) / [SevenRooms Pricing](https://sevenrooms.com/pricing/)
- [要約] 近年、OpenTable/Resy/Tock/SevenRooms 間で店舗移籍に5〜7桁の支払いがあるとの報道・噂(要約のみ) — [検索結果: Fast Company / AOL 等](https://www.fastcompany.com/91496951/amex-resy-tock-restaurant-reservation-wars)

#### 導入・解約の理由
- 独立情報は確認できず。SevenRooms は OpenTable の「プライマリ予約システムにする要件」を批判(Restaurant Business の報道を引用、ベンダー主張) — [SevenRooms 比較ガイド](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)

#### 出典(URL+日付)
- https://about.doordash.com/en-us/news/doordash-completes-acquisition-of-sevenrooms (2025-06-13)
- https://sevenrooms.com/pricing/ , /platform/ (2026-10-11取得)
- https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/ (表記 2026-10-02)

### Inferences
- [推測] 「ゲストデータは店舗が所有」「カバーフィーなし」を売りにする点は、OpenTable型の手数料モデルとの対比で、Shokujii が参加者データを店舗にどこまで渡すかの設計論点になる。

### Gaps
- 実際の価格、事前決済・グループ機能の詳細、POS 連携の公式一覧(100+は自社主張)、導入効果の独立数値。

---

## 7. OpenTable

### Takeaway
最大の予約ネットワーク(60,000店超[要約])だが、カバー単位課金・長期契約・2%決済手数料で店舗の不満が強い。CEO自身が「Restaurants hated us」と発言。2025年下半期〜2026年に決済手数料2%の導入が進んだ。

### Cited Findings

#### 基本情報と料金
- [事実] OpenTable は2025年下半期から米国の多くの店舗で、予約サイト経由の決済(no-show違約金、デポジット、前払い体験)に2%のサービス料を追加。店舗が吸収するか客に転嫁するかは店舗が選べる。残りの店舗は2026年初頭に移行予定 — [Philadelphia Inquirer(2026-01-14)](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html)
- [事実] CEO Debby Soo(2020年8月就任)は「Restaurants hated us」と発言。パンデミック中に3年契約を迫った例があり、店舗は「年間最大6,000ドル」を支払う場合がある — [Bloomberg(2026-04-17)](https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching)
- [自社主張/競合] プランは Basic $149 / Core $299 / Pro $499(月額)+ネットワーク予約カバーあたり約$1〜1.50(SevenRooms の比較ページ) — [SevenRooms 比較](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)。別の競合ブログ(2026-03-17)は Basic $39〜99 / Core 約$249 / Pro 約$449、ネットワーク予約$1.00〜1.25、ウィジェット経由$0.25、自社直接予約は無料と記載(ともに「概算・要確認」) — [Loop.fans](https://loop.fans/blog/opentable-for-restaurants-pricing-fees-alternatives)。両者は不一致、OpenTable 公式料金ページはタイムアウトで未読
- [要約] 繁忙店で月$2,000〜3,000かかるという飲食店オーナー談、「OpenTable は 60,000店超・年16億人の着席客で世界最大」という記述(検索結果の要約。どの記事の記述か特定できず、Atlanta Magazine は403で本文未読) — [検索結果: Atlanta Magazine](https://www.atlantamagazine.com/dining-news/atlanta-restaurants-ditching-opentable/)

#### 主要機能 / 外部連携
- [事実] クレジットカード必須+no-show違約金($15/人の例)、20分のグレース、リマインドSMS3回、来店前の電話確認といった運用が可能(Pizzata の運用) — [Inquirer 2026-01-14](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html)
- [自社主張/競合] POS連携は Core/Pro で提供、OpenTable は「プライマリ予約システム」であることが要件 — [SevenRooms 比較](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)

#### 店舗獲得とグロース
- [事実] OpenTable は消費者ネットワークで送客し、店舗はカバー単位で支払う成果課金型(上記) — [Bloomberg](https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching)
- [事実] 同社は店舗向けへ方針転換し、ミッションを「店舗に尽くすことで世界に尽くす」に変更 — 同上

#### 導入・解約の理由
- [事実] 導入理由の例: Pizzata は no-show で席を失ったため導入しカード必須化。2%手数料は「OpenTable が課すもので店ではない」と店側が説明 — [Inquirer](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html)
- [事実] 離脱理由: 高コスト、長期契約、店舗より客を優先 — [Bloomberg](https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching)
- [要約] 「2%はダブルディップ」という店舗側の声、常連客の予約にもカバー課金される不満(競合系サイト由来を含み裏取り不十分) — 検索結果要約

#### 出典(URL+日付)
- https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html (2026-01-14)
- https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching (2026-04-17)
- https://loop.fans/blog/opentable-for-restaurants-pricing-fees-alternatives (2026-03-17、競合)
- https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/ (2026-10-02表記、競合)

### Inferences
- [推測] 成果課金(カバー課金)+決済手数料の多重課金は、店舗の反発と乗り換えを招く。成果課金を採るなら、課金対象と上限を透明にすべき。

### Gaps
- OpenTable 公式の現行料金、CRM(Guest Center)機能の公式説明は未読。

---

## 8. Resy / Tock(American Express)

### Takeaway
Resy はカバー課金を避けた月額サブスク型、Tock は前払いチケット型。American Express が Tock を買収(2024年6月、約4億ドル[要約])し、Tock を Resy に統合中。2026年内に Resy アプリに Tock 店舗が掲載され、店舗向けソフトの統合は2027年と報じられる[要約]。

### Cited Findings

#### 基本情報と料金
- [事実] Amex は Tock を Resy に統合する方針。統合後 Resy は2万5千超の店舗/施設を予約可能にする。Tock の予約アプリ/サイトは終了していく。記事は2026年3月9日公開、2026年8月31日更新 — [Thrifty Traveler](https://thriftytraveler.com/news/credit-card/amex-resy-tock-integration-dining-credits/)
- [要約] Amex は Tock を2024年6月に Squarespace から4億ドルで買収。Tock の店舗管理ソフトは Resy の一部として継続、段階的統合 — [検索結果: Restaurant Business「Resy, Tock are merging」](https://www.restaurantbusinessonline.com/technology/reservation-services-resy-tock-are-merging)(403で本文未読)
- [要約] 店舗向け技術の統合は2027年と店舗に告知、既存の Resy 店舗に変化はない — [検索結果: Fast Company](https://www.fastcompany.com/91496951/amex-resy-tock-restaurant-reservation-wars)(403で本文未読)
- [自社主張/競合] Resy は月額 $249(Platform)/$399(Platform 360)のフラット料金でカバー課金なし。Yelp Guest Manager は Basic $159 / Plus $349(年払い$129/$279)。いずれも SevenRooms の比較ページ記載 — [SevenRooms 比較](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)
- [自社主張/競合] Tock は前払い・イベントチケットに強く、Eat App は「Resy と違い Tock にはカバー課金がある」と記載(ベンダー主張、Tock 公式料金は403で未読) — [Eat App](https://restaurant.eatapp.co/blog/tock-alternatives)

#### 主要機能 / 外部連携 / 店舗獲得
- [自社主張/競合] Resy: ゲストプロファイル(食事制限・誕生日・来店履歴)、POS 連携は Platform 以上 — [SevenRooms 比較](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)
- [要約] Tock の段階式体験・前払い予約機能は Resy に移行 — [Restaurant Business 要約](https://www.restaurantbusinessonline.com/technology/reservation-services-resy-tock-are-merging)
- [事実] Amex カードの Resy ダイニングクレジットが Tock 店舗でも使えるようになる(2026年内、段階的) — [Thrifty Traveler](https://thriftytraveler.com/news/credit-card/amex-resy-tock-integration-dining-credits/)

#### 導入・解約の理由
- [要約] OpenTable のカバー課金への対抗として Resy が月額サブスクを提示 — [Fast Company 要約](https://www.fastcompany.com/91496951/amex-resy-tock-restaurant-reservation-wars)

#### 出典(URL+日付)
- https://thriftytraveler.com/news/credit-card/amex-resy-tock-integration-dining-credits/ (2026-03-09、2026-08-31更新)
- https://www.restaurantbusinessonline.com/technology/reservation-services-resy-tock-are-merging (未読)
- https://www.fastcompany.com/91496951/amex-resy-tock-restaurant-reservation-wars (未読)

### Inferences
- [推測] カード会社(Amex)がダイニング特典で需要を作り、台帳が供給(店舗)を囲う二面モデル。Shokujii がカード/法人福利と組む場合の参考(エンタープライズ向け展開の示唆)。

### Gaps
- Resy・Tock 公式の現行料金/機能、統合後の価格、日本展開の有無は確認できず。

---

## 9. Toast Tables / Yelp Guest Manager / Eat App / resos

### Takeaway
Toast Tables は Toast POS 利用店専用、Yelp は Guest Manager に AI電話を付加、Eat App と resos は無料/低価格プランと追加機能のアドオン課金で小規模店に入り込む。いずれもカバー/コミッション課金なしを主張(自社主張)。

### Cited Findings

#### Eat App
- [事実] プラン(月払い): Free $0(月100ゲストまで)、Lite $99、Core $199、Pro $389(年払いは$69/$159/$299)、Enterprise は要相談。デポジット/前払いはアドオン $19/月(Pro は込み)、メールマーケ $39、自動化 $49、POS 連携は Pro 込みで他は +$39 — [Eat App Pricing](https://restaurant.eatapp.co/pricing)(2026-10-11取得)
- [自社主張] 「ノーショー90%減」「オンライン予約21%増」「予約コミッション$0」、ゲストプロファイルの自動作成とタグ(VIP/常連) — [Eat App](https://restaurant.eatapp.co/)
- 店舗数: 公式は90か国超としか記載がなく、店舗数は不明。

#### resos
- [事実] 月額: Free €0(25予約/月)、Basic €23(350予約)、Plus €43(750)、Unlimited €63(無制限)。紹介価格の可能性あり(ページ上「-50% for 1 month」表示)。コミッション・カバー課金なし。アドオン: オンライン決済(前払い・デポジット・no-show料)€11.99、SMS €0.10/通、API €11.99、Reserve with Google €7.99、Facebook&Instagram €11.99、マーケ&分析 €11.99、複数拠点 €11.99、ウェイトリスト €7.99、Experiences €19.99。14ツール連携(Stripe, PayPal, Zapier, Mailchimp 等) — [resos Pricing](https://resos.com/pricing/)
- [自社主張] 「3,000以上のレストラン・カフェ・バー・パブが利用」 — 同上

#### Toast Tables
- [事実] Toast POS 専用(他POSでは使えない)。リアルタイム卓状態、ホストアプリ、双方向SMS、Toast Marketing/Loyalty に連動するゲストプロファイル、自社サイト・Google・Local by Toast アプリから予約。現行価格は非公開。2023年の発売時は「月$50(ウェイトリスト+25予約)/$199(無制限)」と報じられた(競合 Katalyst の比較記事による日付付き推定)、カバー課金なし — [Katalyst(競合)](https://www.katalystos.com/alternatives/toast-tables-alternatives)(Toast 公式は403で未読)

#### Yelp Guest Manager
- [事実] Yelp・Google 予約・Apple Maps・ChatGPT・Facebook・Instagram・TikTok への掲載を一つのシステムで管理、ウェイトリスト(スマホ/キオスク)、Yelp Host(AI電話、最大30日無料)、Guest Experience Survey アドオン、Yelp Ads。カバー課金なしと主張。待ち時間予測の精度は最大92%(自社主張) — [Yelp for Restaurants](https://business.yelp.com/restaurants/)
- [自社主張/競合] 価格: Basic $159 / Plus $349(月額、年払い$129/$279)。Basic は月500カバーまで、ゲストプロファイルなし、POS 連携は Plus 以上 — [SevenRooms 比較](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)

#### 導入・解約の理由(共通)
- [事実] Toast Tables 離脱理由(競合の見方): POS ロックイン、予約の流入はほぼ Google と Toast アプリ — [Katalyst](https://www.katalystos.com/alternatives/toast-tables-alternatives)

#### 出典(URL+日付)
- https://restaurant.eatapp.co/pricing , https://restaurant.eatapp.co/ (2026-10-11取得)
- https://resos.com/pricing/ (同)
- https://www.katalystos.com/alternatives/toast-tables-alternatives (競合、日付不明)
- https://business.yelp.com/restaurants/ (同)

### Inferences
- [推測] 小規模店向けは「無料プラン+決済/SMS/API/マーケをアドオン課金」が標準。チェーン/ホテル向けは見積制の SevenRooms 型。

### Gaps
- Toast Tables・Yelp Guest Manager の公式価格、Tock の公式価格、Eat App の導入店舗数。

---

## 10. 横断比較表(機能×サービス)

### Takeaway
日本の台帳(TableCheck/トレタ/ebica)は「グルメサイト一元管理+POS+カード与信」が共通の核。海外は「ゲストCRM+カバー課金の有無」が差別化軸。公開 API を確認できたサービスはなく、パートナー限定の API 連携(Payn、CASHIER 等)が実態。

### Cited Findings(表。判定根拠は各サービス節の出典)
凡例: ✅確認済み / △一部・有料・上位プランのみ / ❌なし確認済み / ？未確認。

| 機能 | TableCheck | トレタ | ebica | OMAKASE | Airリザーブ(汎用) | SevenRooms | OpenTable | Resy/Tock | Toast Tables | Yelp GM | Eat App | resos |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 予約台帳・卓管理 | ✅ | ✅ | ✅ | △(予約管理) | ✅(卓管理は？) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 顧客プロファイル/CRM | ✅(来店履歴・アレルギー・誕生日) | ✅(詳細？) | ✅(詳細？) | ？ | ✅(顧客管理) | ✅ | ？ | △(Resy: 食事制限・来店履歴=競合記載) | △(基本プロファイル=競合記載) | △(Basicは無し=競合記載) | ✅ | ？ |
| no-show対策(カード与信/前払い) | ✅(与信+事前決済) | ✅(与信プロテクション+Payn) | △(Payn連携/具体機能は不明) | △(利用者向けキャンセル保険[要約]) | △(オンライン決済のみ確認) | ？ | ✅(カード必須+違約金) | △(Tockは前払い、Resyは統合中) | ？ | ？ | △(アドオン$19) | △(アドオン€11.99) |
| メニュー/コース事前選択 | △(メニュー単位設定) | ✅(コース出し分け) | ？ | ？ | ？ | ？(Event Mgmtアドオン) | ？ | △(Tock: 前払いチケット) | ？ | ？ | ？ | △(Experiencesアドオン) |
| グループ/宴会/貸切 | △(団体向けポリシー設定) | ？ | ？ | ？ | ？ | △(Group Portalアドオン) | ？ | ？ | ？ | ？ | ？ | ？ |
| 自動リマインド | ✅(メール/SMS) | ？ | ？ | ？ | △(ベーシック以上メール) | ？ | ✅(SMS3回=店舗運用例) | ？ | △(双方向SMS) | ？ | ？ | △(SMS €0.10/通) |
| メール/SMS配信(マーケ) | △(メールは外部連携。SMS記載なし) | △(トレタスタンプ別製品) | ？ | ？ | ？ | ✅(Email/SMS。一部アドオン) | ？ | ？ | △(Toast Marketing連動) | ？ | △(アドオン$39/$49) | △(アドオン€11.99) |
| アンケート/口コミ導線 | ？ | ？ | ？ | ？ | △(予約時アンケート=スタンダード) | △(Reputation management) | ？ | ？ | ？ | △(アンケートアドオン) | ？ | ？ |
| 公開API | ？ | ？(パートナーAPIあり) | ？(パートナーAPIあり) | ？ | ？ | △(有料アドオン) | ？ | ？ | ？ | ？ | ？ | △(アドオン€11.99) |
| POS連携 | ✅(13社+) | ✅ | ✅ | ？ | △(Airレジとのレジ連携は顧客情報) | ✅(100+は自社主張) | △(Core/Pro=競合記載) | △(Platform以上=競合記載) | ✅(Toast専用) | △(Plus以上=競合記載) | △(Pro/アドオン) | ？ |
| ネット予約サイト/Google/Instagram/LINE | ✅(25サイト+Google+IG+LINE+Michelin) | ✅(グルメサイト一元管理。LINE計画) | ✅(グルメサイトCTL+Google+LINE+大衆点評) | ？(自体がサイト) | ？ | ✅(Google/IG/Yelp/DoorDash) | ✅(自社ネットワーク) | ✅(自社ネットワーク) | ✅(Google/自社アプリ) | ✅(Google/Apple/IG/TikTok/ChatGPT) | ？ | △(Google/IGアドオン) |
| 無料プラン | ？ | ？ | ？ | ？ | ✅ | ❌(見積のみ) | ？ | ？ | ？ | △(Yelp Host 30日無料) | ✅(月100ゲスト) | ✅(月25予約) |
| カバー/人数課金なしの主張 | ✅(自社ウェブ予約は送客手数料なし) | ？ | ？ | ❌(利用者から390円) | ✅(月額型) | ✅(自社主張) | ❌(ネットワークはカバー課金) | △(Resy: なし/Tock: 競合は課金と記載) | ✅(競合記載) | ✅(自社主張) | ✅(自社主張) | ✅(自社主張) |

### Inferences
- [推測] 「アンケート/口コミ導線」と「宴会/グループ」は主要各社の公式本文で明示されておらず、機能として強調する余地がある空白領域に見える(ただし単に読めなかった可能性があり断定不可)。

### Gaps
- ？が多い欄(リマインド、アンケート、API、グループ)は、公式本文が取得できなかった/機能ページが読めなかったため。未確認を「なし」と解釈しないこと。

---

## 11. Shokujii への示唆(推測)

### Takeaway
(いずれも [推測]。Shokujii の既存 partner 機能: 予約申請時の電話通知、オプションメニュー、複数店舗、定員変更通知、売り切れ/限定食数など。)

### Cited Findings
- Shokujii 既存の店舗向け機能は documents/04_飲食店向け/ に14ファイル(予約申請時のTwilio電話通知、オプションメニュー、定員数変更時の通知等)。冒頭を読んだ範囲では、電話通知は「予約承認時間を50%短縮、承認率10%向上」を狙う設計 — [01_予約申請時のTwilio電話通知.md](/Users/yasukawanaohiro/Github/wt/tree-3/documents/04_飲食店向け/01_予約申請時のTwilio電話通知.md)(`09_飲食店紹介プログラム.md` と `11_定員数変更時の店舗通知.md` は内容が空/ほぼ空)

### Inferences(5点)
1. [推測] 店舗向け「イベント予約台帳」ビュー: 日付・時間帯・卓/人数の一覧、当日の参加者数とメニュー内訳、アレルギー/苦手食材の一覧(参加者の事前注文データを来店前に厨房が使える形に)。根拠: TableCheck の顧客管理(来店履歴・アレルギー・誕生日)、Eat App/SevenRooms のゲストプロファイル、Pizzata 型の運用(リマインド+確認)。
2. [推測] 団体/宴会のキャンセル・人数変更ポリシーと自動請求: 事前決済+キャンセルポリシーを店舗側で設定し、未払い・無断キャンセルは Payn のような成功報酬型の回収を連携で補う。根拠: トレタ・ebica がともに2026年に Payn と連携(連携費用無料)、TableCheck/トレタの与信・事前決済、国内客/インバウンドで条件出し分け。
3. [推測] 店舗獲得の入口は「グルメサイト手数料の置き換え」と「無料プランから入る」の2本立て。ホットペッパー(ディナー150円+50pt×人)や食べログ(ディナー200円×人)の人数課金に対し、団体送客での手数料負担が大きいことを訴求する(TableCheck の MOTHERS 事例は1店舗ピーク月30万円と自社主張)。無料プラン+決済手数料で収益化する Airリザーブ型(Free、決済3.24%)・Eat App/resos 型が参考。OpenTable のカバー課金への反発(CEO 発言、2%手数料)を踏まえ、成果課金なら上限と対象を透明にする。
4. [推測] 連携候補の優先: (a) 既存台帳への流入: ebica/TableCheck/トレタは「グルメサイト予約を自動取込」する構造のため、Shokujii イベントを予約チャネルとして取り込んでもらう(ebica はパートナー API 連携を複数公開、トレタも API 連携拡大中)。公開 API の有無は未確認なので提携打診が前提。(b) キャンセル料回収の Payn。(c) LINEヤフー傘下となったトレタ経由の LINE 活用。(d) スマレジ/東芝テック/CASHIER 等の POS(トレタO/Xが決済連携)。
5. [推測] 販売チャネル: ebica の販売パートナー制度(積み上げ型ランニングマージン、約2週間納品、勉強会・商談同行)のように、既に飲食店と関係のある会社(POS販売店、卸、食材・飲料ベンダー)に紹介マージンを払う代理店網が有効かもしれない。Shokujii には既に「飲食店紹介プログラム」(ドキュメント未記載)と飲料卸(カクヤス連携)の関係があり、拡張余地がある。

### Gaps
- 日本の台帳の解約・乗り換え理由、実際の店舗数あたりの月額、公開 API の有無は今回確認できなかった。
- 店舗が「アンケート/口コミ導線」「宴会」をどう評価するかの定性データは未取得。
