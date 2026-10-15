# 飲食店のイベント・貸切・体験チケット販売サービス調査(日本・海外)

調査日: 2026-10-11。WebSearch 15 回(上限)+ WebFetch 多数。

**タグの凡例**: [事実]=公式ページ・記事の本文を WebFetch で読めたもの / [自社主張]=ベンダー自身の主張・導入事例(第三者検証なし) / [要約]=検索結果の要約だけで本文を読めていないもの / [推測]=調査者の推測。
**前提の注意**:
- 依頼文にあった前回ノート(`イベント告知サービス グロースストーリー調査/09_food_social_restaurant.md` 等)は指定パスに存在しなかったため、参照できていない。Tock・Resy・OpenTable・TableCheck の成長史は本ノートで必要最小限だけ再掲した。
- WebFetch が 403 / 404 / タイムアウトで読めなかったもの: Tock 公式サイト(exploretock.com)、OpenTable の Private Dining / Experiences ページ、Resy OS 料金ページ(JS 描画で本文なし)、ぐるなび決算 PDF(JPX)、Peatix 公式トップの料金欄。該当項目は「？未確認」とした。

---

## 1. 海外: 前払い・体験チケット / プライベートダイニング / 宴会管理のサービス(Q1〜Q4)

### Takeaway
海外は「店が主導してチケットや貸切枠を売る」型が成熟している。前払いチケットの Tock、イベント・貸切を予約フローに統合した SevenRooms、チケットと Amex 会員送客を持つ Resy、貸切の見積・BEO(宴会指示書)に特化した Tripleseat / Perfect Venue に分かれる。料金は「月額+前払い売上の 2〜3%」(Tock)、「見積制」(SevenRooms)、「月額 $199〜375 前後+カード決済手数料」(Perfect Venue / Tripleseat)が中心。Tock は 2024 年に Amex 傘下となり、2026 年夏に Resy へ統合される計画が発表されている。

### Cited Findings

#### 1-1. Tock(前払いチケット・体験販売)

##### 基本情報と料金
- 2014 年に Alinea Group 共同オーナーの Nick Kokonas が創業。累計で 10 億ドル超の前払い体験を処理(2021 年時点)[事実] — [Restaurant Dive 2021](https://www.restaurantdive.com/news/squarespace-buys-reservation-platform-tock-for-400m/597724/)
- 2021 年に Squarespace が 4 億ドル超(株式+現金)で買収。コロナ期の Tock To Go(テイクアウト、月 $199+注文の 2%、サブスク無しなら 3%)で導入店は 7,100 店へ倍増(Fast Company 引用)[事実] — [Restaurant Dive 2021](https://www.restaurantdive.com/news/squarespace-buys-reservation-platform-tock-for-400m/597724/)
- 2024-10-15 に American Express が Squarespace から買収完了。導入は約 7,000 のレストラン・ワイナリー・ホテル等。American Express Global Dining 内の独立部門として運営(Resy CEO の Pablo Rivero 配下)[事実] — [Amex IR 2024-10-15](https://ir.americanexpress.com/news/investor-relations-news/investor-relations-news-details/2024/American-Express-Completes-Acquisition-of-Tock/default.aspx)
- 2026-02-25 に Resy が「Tock の会場網を今夏 Resy に統合」と発表。統合後は 25,000 会場超、Tock のワイナリー 1,200 超を含む。Tock の消費者向けアプリ/サイトは終了し、Tock 会場は Resy ブランドで運営される計画 [事実(発表内容。実行は未確認)] — [The Bulkhead Seat 2026-02-25](https://thebulkheadseat.com/?p=33361); [Frequent Miler 2026-03-02](https://frequentmiler.com/after-purchasing-tock-amex-to-fold-it-into-resy-in-summer-2026/)。同記事は手数料・前払いの扱いが変わるかには触れていない。
- 統合の実行時期: 検索結果の要約が「2026 年 8 月に Tock 会場が Resy に表示され始めた」と述べたが、単一の二次情報で一次資料は未確認 [要約] — [Frequent Miler の関連見出し「Tock restaurants now on Resy; Amex credits…mid-September」(本文では検証不可)](https://frequentmiler.com/after-purchasing-tock-amex-to-fold-it-into-resy-in-summer-2026/)
- 料金は出典間で食い違う(要注意):
  - 2025-04 の第三者レビュー: イベント向けサブスクが Intro $0(前払い予約に 3%)/ Plus $199(2%)/ Pro $699(0%)。予約向けは Base $99(3%)/ Essential $269(3%)/ Premium $339(2%)/ Premium Unlimited $899(0%)。1 年契約。別途決済手数料(Stripe 2.9%+30 セント、Braintree 2.59%+49 セント)[事実(第三者レビュー)] — [The Restaurant HQ 2025-04-16](https://www.therestauranthq.com/technology/tock-to-go-review/)
  - 2020 年の競合(Eat App)記事: イベント専用でサブスク無し、Essential は 2.5%+$0.49/チケット、Premium は 3%+$0.99/チケット [事実(競合による古い記事)] — [Eat App 2020-09-29](https://restaurant.eatapp.co/blog/tock-vs-opentable)
  - 2026-07 の Eat App 記事: 月 $79〜$769、下位プランで前払い予約に 2〜3% [事実(競合による記事)] — [Eat App 2026-07-29](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026)
  - Tock の公式料金ページは 403 で読めず、どれが現行かは不明。
- 「1 カバーあたりの課金なし」(前払い無しの予約)[自社主張・旧 Squarespace ページ] — [Squarespace Tock ページ](https://www.squarespace.com/tock)

##### 主要機能
- 前払い/デポジット: 席に「デポジットチケット」を紐づけられ、コース代(税・サービス料込み)を前払いさせる運用も可能 [事実(第三者)] — [Eat App 2020](https://restaurant.eatapp.co/blog/tock-vs-opentable); [The Restaurant HQ 2025](https://www.therestauranthq.com/technology/tock-to-go-review/)
- チケット販売: 曜日・時間帯で価格を変える動的価格、予約ページに追加できるアドオン(席の指定、ヴァレー、飲食パッケージ)、QR チケットとチェックイン・ゲストリスト、特定顧客グループ限定の公開、貸切問い合わせフォーム [事実(第三者)] — [The Restaurant HQ 2025](https://www.therestauranthq.com/technology/tock-to-go-review/)
- メニュー選択と前払い: Acadia(シカゴ)の 2016 年事例では、席・メニュー・ワインペアリングを選んで事前決済、10 品コース約 $175+ペアリング $125、サービス料 23% でチップ廃止、リスケは 1 年間有効 [事実(2016 年・古い)] — [FSR Magazine 2016-05-05](https://www.fsrmagazine.com/industry-news/acadia-transitions-new-ticketing-system/)
- 最小催行人数・不成立時の返金: 確認できず(？)。店ごとに「返金不可・再予約可」などを設定する形で、返金不可を巡る消費者の低評価がレビューで指摘されている(Tock の管理外とレビュアーは述べる)[事実(第三者)] — [The Restaurant HQ 2025](https://www.therestauranthq.com/technology/tock-to-go-review/)
- 集客: 消費者向けアプリ・サイト exploretock.com、ダイニングガイド、国際ダイニングネットワークを「追加コスト無しで数百万人に届く」と謳う [自社主張・旧ページ] — [Squarespace Tock ページ](https://www.squarespace.com/tock)。ただし上記のとおり消費者向けアプリは廃止予定。

##### 店舗側の効果
- 「前払い予約は業界最低の no-show 率」と主張するが数値は無い [自社主張] — [Squarespace Tock ページ](https://www.squarespace.com/tock)
- 数値付きの公開効果(no-show 率、客単価、新規客比率)は確認できず。競合記事も定量値は出していない [事実] — [Eat App 2020](https://restaurant.eatapp.co/blog/tock-vs-opentable)
- 前払いは「1 人 $150 超のテイスティングメニュー、シェフズカウンター、ワイナリー」向きで、一般の標準的な店には負担になりうるとの評価 [事実(競合記事の見解)] — [Eat App 2026-07-29](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026)

##### 店舗獲得とグロース
- ハイエンド店(Alinea 系)発の評判と、Tock To Go でのコロナ期の拡大(2020-04 に 1,000 店追加)。ローンチ約 2 か月で $1,000 万調達 [事実] — [Restaurant Dive 2021](https://www.restaurantdive.com/news/squarespace-buys-reservation-platform-tock-for-400m/597724/)
- Amex 傘下化後は Resy と統合し、Resy の登録ユーザー 6,000 万人(Resy 側の主張)と Amex カード会員向け先行販売で送客を強化する計画 [自社主張(計画)] — [The Bulkhead Seat 2026-02-25](https://thebulkheadseat.com/?p=33361)

##### 導入・不満の声
- 不満: POS 連携が Toast と Upserve の 2 つのみ、OpenTable ほど集客力が無い、弱い回線では Web 画面が重い。評価は Capterra 3.4/5(17 件)、G2 4.2/5(96 件)[事実(第三者レビュー)] — [The Restaurant HQ 2025](https://www.therestauranthq.com/technology/tock-to-go-review/)
- 一般の ア・ラ・カルト店では前払いが「押し付けがましい」との指摘が第三者レビューにあるとの検索結果の要約(どのレビューかは特定できず)[要約] — [検索結果に出たレビュー候補(fitsmallbusiness)](https://fitsmallbusiness.com/tock-to-go-review)

##### 出典(URL+日付)
- Restaurant Dive 2021-04: https://www.restaurantdive.com/news/squarespace-buys-reservation-platform-tock-for-400m/597724/
- Amex IR 2024-10-15: https://ir.americanexpress.com/news/investor-relations-news/investor-relations-news-details/2024/American-Express-Completes-Acquisition-of-Tock/default.aspx
- The Bulkhead Seat 2026-02-25: https://thebulkheadseat.com/?p=33361
- Frequent Miler 2026-03-02: https://frequentmiler.com/after-purchasing-tock-amex-to-fold-it-into-resy-in-summer-2026/
- The Restaurant HQ 2025-04-16(更新 2025-05-13): https://www.therestauranthq.com/technology/tock-to-go-review/
- Eat App 2020-09-29 / 2026-07-29: https://restaurant.eatapp.co/blog/tock-vs-opentable / https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026
- FSR Magazine 2016-05-05: https://www.fsrmagazine.com/industry-news/acadia-transitions-new-ticketing-system/
- Squarespace Tock ページ(日付不明・旧): https://www.squarespace.com/tock

#### 1-2. SevenRooms(Events / Experiences / Private Dining)

##### 基本情報と料金
- 2011 年創業(Joel Montaniel ら)。2025 年 5 月に DoorDash が現金 $12 億で買収合意、2025-06-13 に完了 [事実] — [Wikipedia: SevenRooms](https://en.wikipedia.org/wiki/SevenRooms)
- 世界 15,000 店超が利用と主張 [自社主張] — [SevenRooms トップ](https://www.sevenrooms.com/)
- 料金は非公開(見積)。競合記事の推定は会場あたり月およそ $400〜$1,200 超で、セルフサーブのプランは無く導入はプロジェクト型 [事実(競合記事による推定)] — [Eat App 2026-07-29](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026)

##### 主要機能
- Event Management(貸切): 予約ウィジェット内に貸切・グループ席を表示し、リアルタイム空き状況・即時確定。最低消費額を曜日・時間・季節・部屋・人数で最適化、ルームチャージ・サービス料・デポジットを事前表示、ドリンクパッケージ/AV/持ち込み料/ケーキカット料をアドオンで選択。空きが無いときは問い合わせ送信と、代替日・他店舗の提示。未成約枠を通常営業へ戻す「リリースルール」。レポートはイベント売上・予約構成・需要動向 [事実] — [SevenRooms Event Management](https://sevenrooms.com/platform/event-management/)
  - 提案書、フロアプラン、デポジット/CRM 連携の詳細は同ページの FAQ が空で未確認 [事実(ページに回答なし)]
- Events / Experiences / Add-ons: ブランド化したイベントページ(メール・SNS・QR で共有)、シェフズテーブル・ワインテイスティング等の予約体験を予約フローに追加、グループ全員または個別のメニュー選択を集めて厨房向け合計と自動リマインド、大人数・ピーク時の一部/全額デポジット、最低消費額ポリシー、頻繁なキャンセラーの特定 [事実] — [SevenRooms Events & Experiences](https://sevenrooms.com/platform/events-experiences/)
- 顧客データ: 予約とイベントを横断したゲスト履歴、自動タグ、内蔵メール配信(CRM と連動)[事実] — [SevenRooms Event Management](https://sevenrooms.com/platform/event-management/)

##### 店舗側の効果(すべて自社の導入事例・主張)
- Hide(ロンドン・ミシュラン星付き)は導入後 2 か月で 75 件の貸切予約・436 カバー・£34,270(コンバージョン率は非公開)。「先に返信した店が予約を取る」とのコメント [自社主張] — [SevenRooms 事例: Hide](https://sevenrooms.com/tools-resources/success-stories/hide-event-management/)
- Hai Hospitality(13 店、Uchi Miami の貸切室)は月平均の貸切予約が 33% 増。従来は「24〜48 時間後に連絡」でリードが冷める問題があり、早い時間帯(17:30・18:00)のパーティ獲得が増えた(増加幅は非公開)[自社主張] — [SevenRooms 事例: Hai(2026-05-11 公開)](https://sevenrooms.com/tools-resources/success-stories/hai-hospitality-event-management/)
- Harts Group は 4 か月で £63,173、2 か月で団体 838 カバー、団体予約が前年比 136% 増(期間が項目ごとに異なる)[自社主張] — [SevenRooms Event Management](https://sevenrooms.com/platform/event-management/)
- 前払い商品(シェフズテイスティング、アフタヌーンティー等)で年平均 $115K 超の増収、前払い取得で客単価が平均 50% 増、予約可能な体験・アドオン・チケットで累計 $50 億超を処理、Nobu London は 8 か月で第三者手数料 £317K を節約し 4.2 万件のメールアドレスを獲得、メールから £28K の追加売上 [自社主張] — [SevenRooms Events & Experiences](https://sevenrooms.com/platform/events-experiences/)

##### 店舗獲得とグロース
- 営業主導(見積制)で、ホテル F&B と複数店舗グループ向けが中心 [事実(競合記事の評価)] — [Eat App 2026-07-29](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026)
- 提携: Tripadvisor(2018-03)、Tripleseat(2018-05)、Google(2018-10)、Harrods の 14 F&B アウトレット(2021-11)[事実] — [Wikipedia: SevenRooms](https://en.wikipedia.org/wiki/SevenRooms)
- 数値入り導入事例を機能ページに並べる訴求(上記)が中心 [事実] — [SevenRooms Event Management](https://sevenrooms.com/platform/event-management/)

##### 導入・不満の声
- 導入前の課題として「問い合わせ→メール往復→デポジット回収が手作業」「小さな貸切室を一般客が使ってしまい、貸切枠の存在が知られていない」が事例に出る [自社主張(事例)] — [SevenRooms 事例: Hide](https://sevenrooms.com/tools-resources/success-stories/hide-event-management/)
- 第三者レビュー(G2)は 403 で読めず、不満の声は確認できず [事実(取得失敗)]

##### 出典(URL+日付)
- https://sevenrooms.com/platform/event-management/(日付不明)
- https://sevenrooms.com/platform/events-experiences/(日付不明)
- https://sevenrooms.com/tools-resources/success-stories/hide-event-management/(日付不明)
- https://sevenrooms.com/tools-resources/success-stories/hai-hospitality-event-management/(2026-05-11)
- https://en.wikipedia.org/wiki/SevenRooms(取得 2026-10-11)
- https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026(2026-07-29)

#### 1-3. Resy(Resy OS の Events / Ticketing)

##### 基本情報と料金
- 運営は Amex 傘下の Resy。2026-02 時点で Tock 統合後の会場数が 25,000 超、Resy の登録ユーザーは 6,000 万人(Resy 側の主張)[自社主張] — [The Bulkhead Seat 2026-02-25](https://thebulkheadseat.com/?p=33361)
- 料金: 競合記事では Basic $249 / Pro $399 / Enterprise $899 の月額でカバー課金なし、無料プラン・トライアルなし [事実(競合記事)] — [Eat App 2026-07-29](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026)。一方、Resy OS の機能ページは Essential / Premium / Platform / Platform 360 というプラン名に言及し、価格は載せていない [事実] — [Resy OS Events](https://resy.com/resyos/features/events)。プラン名の食い違いの解消は未確認(Resy 料金ページは本文なしで取得不能)。
- 2020 年の発表では「手数料・コミッション無しでチケット販売」と記載(古い。現行は未確認)[自社主張(2020 年)] — [Resy Newsroom 2020-11-16](https://blog.resy.com/newsroom/event-discovery-ticketing/)

##### 主要機能
- チケット種別(一般/VIP/早割/プレミアムテーブル)、招待制の非公開イベント、チケットにアドオンを付けた前払い、1 テーブルに最大 5 つの予約可能体験を割り当て、公開日時の事前設定、ゲストデータとレポート、リッチテキストのイベントページ、モバイルでチケットをスキャンしてチェックイン(専用機器不要)、ワインペアリング等のアドオンで客単価向上 [事実] — [Resy OS Events](https://resy.com/resyos/features/events)
- 都市別のイベント発見ページに、Ticketing ツールで作ったイベントだけが時系列で表示される [事実(2020 年)] — [Resy Newsroom 2020-11-16](https://blog.resy.com/newsroom/event-discovery-ticketing/)
- 2026 年の例: Chef's Table 提携ディナー(2026-06-02/09/10、NYC・LA・SF の 3 店)。Amex リンク会員は 48 時間の先行販売(2026-04-29)、一般は 2026-05-01。チケットは最終売り、譲渡不可、1 予約 6 枚まで。店への支払条件は非公開 [事実] — [Resy × Chef's Table](https://blog.resy.com/chefs-table/)

##### 店舗側の効果
- Ticketing ツールで 2020-05 以降 $230 万超の追加売上(2020-11 時点)[自社主張] — [Resy Newsroom 2020-11-16](https://blog.resy.com/newsroom/event-discovery-ticketing/)
- Amex 会員向け先行販売の初回クッキング講座が 24 時間でほぼ完売(2020 年)[自社主張] — [Resy Newsroom 2020-09-22](https://blog.resy.com/newsroom/resy-reimagines-restaurant-programming/)

##### 店舗獲得とグロース
- Amex カード会員への露出(先行販売、Platinum Nights などのイベント)が店側のメリットとして訴求される [自社主張] — [Resy OS Events](https://resy.com/resyos/features/events); [The Bulkhead Seat 2026-02-25](https://thebulkheadseat.com/?p=33361)
- Toast との連携(Local by Toast アプリ内の予約)、生成 AI 向けを含む API 拡張を 2026 年に計画 [自社主張(計画)] — [The Bulkhead Seat 2026-02-25](https://thebulkheadseat.com/?p=33361)

##### 導入・不満の声
- 確認できず(Resy OS ページの顧客コメントは第三者提供と注記されるのみ)[事実] — [Resy OS Events](https://resy.com/resyos/features/events)

##### 出典(URL+日付)
- https://resy.com/resyos/features/events(日付不明)
- https://blog.resy.com/newsroom/event-discovery-ticketing/(2020-11-16)
- https://blog.resy.com/newsroom/resy-reimagines-restaurant-programming/(2020-09-22)
- https://blog.resy.com/chefs-table/(2026-04〜06)
- https://thebulkheadseat.com/?p=33361(2026-02-25)

#### 1-4. OpenTable(Experiences / Private Dining)

##### 基本情報と料金
- 競合記事(2026-07)の料金: Basic $149 / Core $299 / Pro $499(月額)。ネットワーク経由のカバーは Basic $1.50、Core/Pro は $1.00。自社サイト経由は Basic で $0.25/カバーまたは月 $49 定額。2026 年初から、デポジット・前払い体験・no-show ペナルティに 2% のサービス料 [事実(競合記事)] — [Eat App 2026-07-29](https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026)
- 旧料金(2020 年): Basic $39 / Core $249 / Pro $449、ネットワークカバー $1.00〜$1.50 [事実(古い・競合記事)] — [Eat App 2020](https://restaurant.eatapp.co/blog/tock-vs-opentable)

##### 主要機能 / 店舗側の効果 / 店舗獲得とグロース / 導入・不満の声
- 公式の Private Dining / Experiences ページはタイムアウトで読めなかった(？未確認)。前払い体験・デポジットが存在することは上記 2% 手数料の記述から確認できるのみ。no-show 率などの公開数値は未確認。
- 筆者(Bulkhead Seat)は「OpenTable のほうをよく使う」と述べ、消費者側の利用が多いことを示唆 [事実(個人の見解)] — [The Bulkhead Seat 2026-02-25](https://thebulkheadseat.com/?p=33361)

##### 出典(URL+日付)
- https://restaurant.eatapp.co/blog/best-restaurant-reservation-software-apps-in-united-states-2026(2026-07-29)
- https://restaurant.eatapp.co/blog/tock-vs-opentable(2020-09-29)

#### 1-5. Tripleseat(貸切・宴会管理)

##### 基本情報と料金
- 20,000 超の飲食・ホテル等の会場が利用、2008 年から、と主張 [自社主張] — [Tripleseat トップ](https://www.tripleseat.com/)
- パッケージは 4 種(コア / Direct Book / Floor Plans / Hotels)。価格は会場あたり月 $375 から、ユーザー無制限。Tickets・Venue Marketplace・Direct Book・Floor Plans はアドオンで個別価格(営業に確認)[事実] — [Tripleseat Packages](https://tripleseat.com/packages/)

##### 主要機能
- 問い合わせの受信・自動ルーティング(Inquiry Inbox)、Proposals、Contracts、BEO、支払い、Guest Portal、Dashboard / Insights、Tickets、Floor Plans(2D/3D)、Direct Book(24 時間のセルフ予約)、Venue Marketplace(「プランナーが探す場所に載る」)[事実] — [Tripleseat トップ](https://www.tripleseat.com/); [Tripleseat Packages](https://tripleseat.com/packages/)

##### 店舗側の効果 / 店舗獲得とグロース / 導入・不満の声
- 効果の公開数値は取得できず(？)。ロゴとして Starr、Tao Group、Hawksmoor などを掲載、Capterra / G2 の評価を訴求 [自社主張] — [Tripleseat トップ](https://www.tripleseat.com/)。SevenRooms とは 2018 年に連携 [事実] — [Wikipedia: SevenRooms](https://en.wikipedia.org/wiki/SevenRooms)

##### 出典(URL+日付)
- https://www.tripleseat.com/(日付不明)
- https://tripleseat.com/packages/(日付不明)

#### 1-6. Perfect Venue(レストラン・バー向け貸切管理)

##### 基本情報と料金
- 会場あたり: Professional 月 $199(年払い、月払いは $239)、Premium 月 $299(年払い、月払い $339)、Enterprise は見積。ユーザー無制限、設定・移行・研修込み。カード決済は基本 2.9%+30 セント(プランで上乗せが 0.5%/0.3%/0%)。ACH は Premium 以上で 1 件 $5。無料プラン(CRM・BEO・提案書・決済・イベントカレンダー、カード手数料は高め)あり [事実] — [Perfect Venue 料金](https://www.perfectvenue.com/pricing)
- 14 日間の無料トライアル(クレジットカード不要)[事実] — [Perfect Venue トップ](https://www.perfectvenue.com/); 30 日返金保証 [事実] — [Perfect Venue 料金](https://www.perfectvenue.com/pricing)。導入店舗数・資金調達は非公開(ページに記載なし)。

##### 主要機能
- 問い合わせとリードの一元カレンダー(二重予約防止)、BEO・提案書の自動生成、電子署名、Stripe による支払い・返金、複数の F&B ミニマム/複数のイベントポリシー、ゲスト向けポータル、メールテンプレートと AI 返信、リアルタイム分析、iPhone/iPad アプリ [事実] — [Perfect Venue トップ](https://www.perfectvenue.com/); [Perfect Venue 料金](https://www.perfectvenue.com/pricing)

##### 店舗側の効果
- 「切り替えた会場は週 12 時間削減、売上 40% 以上増(平均)」[自社主張]、顧客の声として「予約 $50K 増」「売上約 24% 増」「イベント売上が倍」[自社主張] — [Perfect Venue 料金](https://www.perfectvenue.com/pricing); [Perfect Venue トップ](https://www.perfectvenue.com/)

##### 店舗獲得とグロース / 導入・不満の声
- 無料プラン+14 日トライアル+返金保証+移行支援で参入障壁を下げる PLG 寄りの設計 [推測]。顧客ロゴは Maui Brewing、Kogi BBQ、Gott's Roadside などの飲食店・醸造所 [事実] — [Perfect Venue トップ](https://www.perfectvenue.com/)。不満の声は未確認。

##### 出典(URL+日付)
- https://www.perfectvenue.com/pricing(日付不明)
- https://www.perfectvenue.com/(日付不明)

#### 1-7. Eventbrite(Food & Drink の飲食店利用)

##### 基本情報と料金
- 無料イベントは無料。有料チケットは 1 枚あたり 3.7%+$1.79 のサービス料と、注文あたり 2.9% の決済手数料。購入者負担が既定で、主催者が肩代わりも可能。メールマーケティングの Pro プランは月 $15 から。対応国は米・加・豪・NZ・英・アイルランド [事実] — [Eventbrite 料金](https://www.eventbrite.com/organizer/pricing/)

##### 主要機能
- Food & Drinks のカテゴリ、Timed Entry、Reserved Seating、アドオン販売、複数チケット種別とカスタム登録フォーム(食事制限の収集に使える)、ウェイトリスト、自動リマインド、チケットスキャン [事実] — [Eventbrite 料金](https://www.eventbrite.com/organizer/pricing/)。ページに飲食店への言及はなく、飲食店の実際の利用実態は確認できず(？)。

##### 店舗側の効果 / 店舗獲得とグロース / 導入・不満の声
- 未確認。Eventbrite Ads(対象市場での有料掲載)は別料金 [事実] — [Eventbrite 料金](https://www.eventbrite.com/organizer/pricing/)

##### 出典(URL+日付)
- https://www.eventbrite.com/organizer/pricing/(日付不明、取得 2026-10-11)

### Inferences
- 海外の「店が売る」サービスは、(a) 前払いで no-show を消す(Tock・Resy・SevenRooms・OpenTable)、(b) 貸切の問い合わせ→見積→契約を自動化して返信速度で競う(SevenRooms・Tripleseat・Perfect Venue)の 2 系統に分かれる [推測]。
- 手数料は「前払い売上の 2〜3%」(Tock、OpenTable の 2%)が相場で、イベントの決済手数料は月額プランと組み合わせるのが主流 [推測(Tock 2025 年レビュー、OpenTable 2026 年記事から)]。
- 「貸切枠の存在が顧客に知られていない」「問い合わせ対応が遅くて失注」という事例(Hide・Hai)は、枠をウィジェットで常時見せるだけで成約が増えるという自社主張の根拠になっているが、第三者検証は無い [推測]。
- Tock の Resy 統合により、前払いチケット型の独立した競合が減り、Amex 会員送客型の 1 強に近づく可能性がある。ただし手数料・前払いの仕様がどうなるかは未確認 [推測]。

### Gaps
- OpenTable の Private Dining / Experiences の機能詳細(公式ページがタイムアウトで未取得)。
- Tock の現行料金(公式 403。出典間で食い違い)、統合の実行日と手数料変更の有無。
- Resy OS の現行料金表とプラン名の対応。
- 最小催行人数・不成立時の自動返金、イベント後フォロー(参加者への自動お礼・再告知)の機能は、どのサービスでも公式ページで確認できなかった。
- no-show 率・客単価・新規客比率・閑散時間帯の充填率の第三者検証済み数値。
- Eventbrite を飲食店が使う実態、SevenRooms / Tripleseat / Perfect Venue の第三者レビュー(G2 取得 403)。

---

## 2. 日本: 予約・宴会・コース販売サイトとシステム(Q1〜Q4)

### Takeaway
日本の飲食店向け集客・予約サービスは、「掲載無料+ネット予約の成果課金(来店 1 人あたり)」が主流で、金額はおおむね昼 40〜100 円・夜 150〜205 円/人。宴会・貸切・イベントの専用販売機能は、公式の店舗向けページでは確認できなかった(ぐるなび台帳はコース予約に対応)。前払い・バウチャー・FastPass など「売り切り型」の機能を持つのは TableCheck が目立つ。2026 年はぐるなびが楽天ポイントで、食べログが自治体と組んで手数料を動かしており、送客・手数料の競争が続いている。

### Cited Findings

#### 2-1. ホットペッパーグルメ

##### 基本情報と料金
- 「ネット予約プラン」は掲載料・登録料・月額固定費が無料で、ネット予約から来店した分だけ費用が発生。夕食時間帯(15:00〜6:59)はネット予約手数料 150 円(税抜)×来店人数+ポイント付与料 50 ポイント(1 ポイント=1 円)×人数。7:00〜14:59 は 40 円+10 ポイント。キャンセルは無料(ただし店側で取消処理が必要)。最低契約期間なし。月額の有料プランは固定費の代わりに掲載順位の向上や特集設定ができる [事実] — [ホットペッパーグルメ 掲載案内](https://www.hotpepper.jp/lcp_keisai/)
- 掲載のみは不可で、ネット予約設定が必須。設定を解除すると検索順位が下がる [事実] — [同上](https://www.hotpepper.jp/lcp_keisai/)
- 「ネット予約利用者数 No.1」「累計利用者 5 億人超(東京商工リサーチ調べ)」、掲載約 10 万店(2024-05-01 時点)[自社主張] — [同上](https://www.hotpepper.jp/lcp_keisai/)

##### 主要機能
- 予約はメールとアプリ(レストランボード、無料)で管理、店舗ページの説明・写真・メニューを自分で編集 [事実] — [同上](https://www.hotpepper.jp/lcp_keisai/)
- 宴会・コース・貸切に関する機能の記載は掲載案内ページに無い(？)。消費者向けトップには宴会コース検索、忘年会・新年会特集、貸切パーティの会場探し、飲み会の日程調整ツール(幹事向け)がある [事実] — [ホットペッパーグルメ トップ](https://www.hotpepper.jp/)

##### 店舗側の効果 / 店舗獲得とグロース / 導入・不満の声
- 公開数値(空席の埋まり方、客単価、no-show 率)は確認できず。成果課金・無料掲載・最低期間なし・解約費用なしが店舗獲得の仕組み [事実] — [ホットペッパーグルメ 掲載案内](https://www.hotpepper.jp/lcp_keisai/)。口コミ・不満は未取得。

##### 出典(URL+日付)
- https://www.hotpepper.jp/lcp_keisai/(2024-05 時点の数値を含む。取得 2026-10-11)
- https://www.hotpepper.jp/(取得 2026-10-11)

#### 2-2. ぐるなび(楽天ぐるなび)

##### 基本情報と料金
- ぐるなび台帳(予約管理)の料金(2025-06-13 更新): スタート 月 0 円(予約手数料 ランチ 41 円・ディナー 205 円/人)、ライト 月 11,000 円(同 11 円〜/55 円〜)、ベーシック 月 33,000 円(同 11 円〜/55 円〜)。初期費用・最低期間は要問合せ [事実(第三者の SaaS 比較サイト)] — [imitsu ぐるなび台帳 料金](https://saas.imitsu.jp/cate-reservation/service/4586/price)
- 2022 年頃の IR 資料ではベーシック 月 30,000 円・ライト 月 10,000 円・スタート 0 円、担当営業がつくのはベーシックのみ、ネット予約手数料はポイント還元と引き換えに選択可(目安 ランチ 10〜40 円/人、ディナー 50〜200 円/人)[要約(検索結果の要約。PDF 未読)] — [JPX 開示資料(2022 年頃)](https://www2.jpx.co.jp/disc/24400/140120220204580030.pdf)
- 2026-04-01〜2027-03-31 は、ライトプラン(月 11,000 円・税込)を 3 か月無料にするキャンペーンとの記述 [要約(検索結果の要約。公式ページ未読)] — [楽天ぐるなび キャンペーン一覧(検索結果)](https://r.gnavi.co.jp/plan/campaign/lottery/)
- 2026 年 3 月期第 1 四半期の有料加盟店あたり売上(ARPU)は 23,715 円(前年比 +8.1%)[要約(検索結果の要約。決算 PDF 未読)] — [JPX 開示資料(2025-08 の決算とみられる)](https://www2.jpx.co.jp/disc/24400/140120250804528305.pdf)。2026-05 に中期経営計画「2028」(2027 年 3 月期〜2029 年 3 月期)を公表 [要約(PDF は 403 で未読)] — [JPX 2026-05-12 開示資料](https://www2.jpx.co.jp/disc/24400/140120260512526671.pdf)

##### 主要機能
- ぐるなび台帳: 予約管理・顧客管理・集計分析・POS 連携・他社予約の取り込み、オプションで電話自動受付・着信顧客通知・台帳ネット予約 [事実] — [ぐるなび台帳](https://pro.gnavi.co.jp/gnavi_daicho/)。コース予約・宴会・事前決済の記載は同ページに無い(？)。ライトプランはコース予約に対応するとの記述が、検索結果の要約にある(imitsu の取得本文の表には無く未検証)[要約] — [imitsu](https://saas.imitsu.jp/cate-reservation/service/4586/price)
- ぐるなびネット予約は台帳と連携し、オーバーブッキングのリスクを減らす [事実] — [予約管理サービス](https://pro.gnavi.co.jp/service/management/)

##### 店舗側の効果
- 事例: イタリアンバル バンビーノ センター南店(2021-06-08 の記事)。女子会コース(4,400 円・3 時間飲み放題)が人気、テラス席の昼宴会プラン(2,900 円・2 時間飲み放題)をぐるなびで発信し 3〜4 人の昼飲み需要を獲得。数値(売上・予約比率)は記載なし [自社主張(媒体の事例)] — [ぐるなび PRO 事例](https://pro.gnavi.co.jp/magazine/t_res/cat_2/a_3818/)

##### 店舗獲得とグロース
- スタートプラン 0 円で参入し、ライト 3 か月無料で有料化を促す、担当営業(ベーシックのみ)の構造 [要約+事実] — 上記の imitsu / JPX。
- 楽天 ID・ポイント連携: 2026 年夏「得トク祭」(2026-07-01〜08-31)は、2 名以上・1 名 3,000 円以上のコースをネット予約して来店すると楽天ポイント(対象店 200 または 50 ポイント/人)を進呈。通常の予約・来店ポイントと合わせ夜は最大 400 ポイント/人 [事実] — [楽天ぐるなび 得トク祭](https://r.gnavi.co.jp/plan/campaign/bonus/)
- 幹事ランクに応じて楽天ポイントが増える春のキャンペーンがあったとの記述 [要約] — [検索結果の要約](https://r.gnavi.co.jp/plan/campaign/lottery/)

##### 導入・不満の声
- 導入理由(上記事例): 手書き台帳の廃止、他サイト予約の自動一括管理でブッキングミス解消、担当営業からのメニュー・経営助言 [自社主張(媒体の事例)] — [ぐるなび PRO 事例](https://pro.gnavi.co.jp/magazine/t_res/cat_2/a_3818/)。不満の声は未取得。

##### 出典(URL+日付)
- https://saas.imitsu.jp/cate-reservation/service/4586/price(2025-06-13 更新)
- https://pro.gnavi.co.jp/gnavi_daicho/ ・ https://pro.gnavi.co.jp/service/management/(日付不明)
- https://r.gnavi.co.jp/plan/campaign/bonus/(2026 夏のキャンペーン。取得 2026-10-11)
- https://pro.gnavi.co.jp/magazine/t_res/cat_2/a_3818/(2021-06-08)
- https://www2.jpx.co.jp/disc/24400/140120260512526671.pdf(2026-05-12、未読)
- https://www2.jpx.co.jp/disc/24400/140120250804528305.pdf(2025-08 頃、未読)

#### 2-3. 食べログ

##### 基本情報と料金
- ネット予約: 導入費用・固定費 0 円。来店したゲストにだけ課金(no-show は非課金)。ディナー(16:00〜翌 5:59)200 円/人、ランチ(6:00〜15:59)100 円/人(税抜、月次請求)[事実] — [食べログ ネット予約(店舗向け)](https://owner.tabelog.com/home/net_reservation/)
- ネット予約契約店 75,000 店超(2024-06)、月間ネット予約 840 万件超(2023-12)、有料契約店の予約のうち約 60% がネット予約(2024-06)[自社主張] — [同上](https://owner.tabelog.com/home/net_reservation/)
- 掲載 90 万店、月間利用者約 9,225 万人、月間約 22.9 億 PV(2026-06 時点)[自社主張] — [食べログ 店舗会員](https://owner.tabelog.com/home/registration)
- 2026-05-25 発表: 飛騨・高山観光コンベンション協会との連携モデル事業で、高山市内の「食べログ多言語版」ネット予約導入店の、国内外の全ユーザー分のネット予約手数料を無料化(期間・金額は非公表)[事実(記事の一部非表示)] — [honichi 2026-06-02](https://honichi.com/news/2026/06/02/tabelog-hidatakayama-alignment/)
- 多言語版(英・中・韓)でネット予約できる店は約 35,000 店(2024-06)[要約] — [Travel Voice 2024-06-26](https://www.travelvoice.jp/20240626-155885)

##### 主要機能
- キャンセル料: 「食べログノート」経由で店舗がキャンセル料を請求依頼できる(回収は店舗側)。LINE 連携で予約通知 [事実] — [食べログ ネット予約](https://owner.tabelog.com/home/net_reservation/); [食べログ 店舗会員](https://owner.tabelog.com/home/registration)
- コース予約・事前決済・貸切・宴会に関する機能の記載は、店舗向けページに無い(？未確認)。

##### 店舗側の効果 / 店舗獲得とグロース / 導入・不満の声
- 固定費 0 円・来店課金(no-show 非課金)が獲得の核。自治体と組んだ手数料無料化(上記)は、インバウンド予約の入口づくり [事実] — [honichi 2026-06-02](https://honichi.com/news/2026/06/02/tabelog-hidatakayama-alignment/)。個別店舗の効果数値・不満の声は未取得。

##### 出典(URL+日付)
- https://owner.tabelog.com/home/net_reservation/(2023-12〜2024-06 時点の数値を含む)
- https://owner.tabelog.com/home/registration(2026-06 時点)
- https://honichi.com/news/2026/06/02/tabelog-hidatakayama-alignment/(2026-06-02)

#### 2-4. ヒトサラ

- 無料の「エントリープラン」で店舗情報を掲載でき、基本サービスは全て無料。過去に有料掲載をした店は申込不可で、飲食業態のみ [事実] — [ヒトサラ エントリープラン](https://www.hitosara.com/owner/)
- 有料プランの料金、ネット予約手数料、宴会・コース機能、運営会社の記載は同ページに無い(？)。フッターの著作権表示は USEN CORPORATION [事実] — [同上](https://www.hitosara.com/owner/)

#### 2-5. 一休.com レストラン

- 消費者向けトップに、個室(半個室含む)・禁煙・飲み放題・アフタヌーンティーの絞り込み、記念日・誕生日・会食の特集、「直前割」(当日・翌日来店が 20% OFF)がある。貸切の記載、事前決済・コース予約の方式、掲載料・手数料の記載は無い(？)[事実] — [一休.com レストラン](https://restaurant.ikyu.com/)
- 一休が店舗向けの新規営業を募集しており、対象は「一休.com レストラン」と新しいグルメサイト「PayPay グルメ」、予約管理システム「RESZAIKO」の導入促進も別職種にある [要約(求人情報)] — [求人まとめ](https://sincereed-agent.com/offer/ikyu-9/)
- 営業(訪問)を店舗獲得の主な手段にしていることが示唆される [推測]。

#### 2-6. TableCheck(予約・顧客管理、前払い、イベント関連)

##### 基本情報と料金
- 導入店舗数: 2024-05-31 時点で 10,143 店(初めて 1 万店超)、35 か国・地域、継続率 99.6%、月間予約 300 万件超、自社サイト経由の予約が約 40%(2017 年比で 2 倍超)、FastPass 対応 26 店・累計利用者 35,000 人 [自社主張] — [TableCheck プレス 2024-06-05](https://www.tablecheck.com/ja/join/about-us/press/2024/20240604-10000-restaurants-tablecheck/)
- 2026-08-18 のプレスでは世界 14,000 店超、23 言語 [自社主張] — [TableCheck × BEENOS Entertainment](https://www.tablecheck.com/ja/join/about-us/press/tablecheckbeenos-entertainment/)。店舗向けページは 13,000 店超・累計予約 1 億件超(日付なし)[自社主張] — [TableCheck 店舗向け](https://www.tablecheck.com/ja/join/)
- 料金体系(月額・手数料)は公開ページで確認できず(？)。公式サイトからの予約は紹介手数料なし [自社主張] — [TableCheck 店舗向け](https://www.tablecheck.com/ja/join/)
- 2026-04-17 に株主異動の発表あり(内容は不明)[事実(タイトルのみ)] — [TableCheck プレス一覧](https://www.tablecheck.com/ja/join/about-us/press/)

##### 主要機能
- 事前決済・キャンセル対策: TableCheck Pay(来店時の非接触決済)、クレジットカード事前登録によるキャンセルプロテクション、TC ポイント。特定商取引法の表示によれば、バウチャー(前払い商品)は支払い後のキャンセルが原則 100% のキャンセル料で返金なし(商品ごとに別規定可)、カード情報預かり(仮押さえ)は与信のみで来店後に解放 [事実] — [TableCheck 決済ポリシー](https://www.tablecheck.com/ja/policy/payment/?shop=ao); [TableCheck 店舗向け](https://www.tablecheck.com/ja/join/)
- 有料の優先着席「FastPass」(店の新たな収益源と謳う)、パートナー予約チャネル「TableCheck Channels」(無料の集客)、データ分析「Insight」[自社主張] — [TableCheck 店舗向け](https://www.tablecheck.com/ja/join/)
- イベント・席配置: 2026-08-18、BEENOS Entertainment と提携し「Groobee 配席サービス」を開始。抽選・先着の予約、テーブル単位の配席、ファンクラブ限定予約。テーマカフェ・コラボカフェ・ディナーショー向け [事実] — [TableCheck × BEENOS Entertainment](https://www.tablecheck.com/ja/join/about-us/press/tablecheckbeenos-entertainment/)
- コース・宴会・貸切の販売機能は店舗向けページに記載なし(？未確認)。決済ポリシーにもコース・イベント・体験の専用記述は無い [事実] — [TableCheck 決済ポリシー](https://www.tablecheck.com/ja/policy/payment/?shop=ao)
- 2026-08-26 にキャンセル待ち機能を提供開始 [事実(タイトル)] — [TableCheck プレス一覧](https://www.tablecheck.com/ja/join/about-us/press/)

##### 店舗側の効果(すべて自社の事例)
- 焼肉亭 六歌仙: no-show は月約 100 件の予約でほぼゼロ。釣船茶屋 ざうお: 導入後すぐほぼゼロ。MOTHERS: グループ全体でグルメサイト手数料が月 300〜400 万円減。山形料理 Mara: Instagram 経由の予約でグルメサイトの紹介料約 6 万円を削減(日付なし)[自社主張] — [TableCheck 店舗向け](https://www.tablecheck.com/ja/join/)
- 白馬村: 1 日平均予約を 30 日換算した月間予約が、第 1 シーズン(2023-12〜2024-03)約 7,000 件→第 3 シーズン(2025-12〜2026-03)約 10,100 件(約 1.4 倍)。事前決済の寄与は明記なし [自社主張] — [TableCheck プレス 2026-06-25](https://www.tablecheck.com/ja/join/about-us/press/2026/2026625tablecheck/)

##### 店舗獲得とグロース
- 提携チャネルを増やす戦略: ダイナースクラブとの「My Taste from ダイナースクラブ」(2026-04-01 開始、対象店での利用額の最大 20% キャッシュバック、半年上限 1 万円(プレミアム 2 万円)、予約は TableCheck、集客と決済はダイナース)[事実] — [TableCheck プレス 2026-04-15](https://www.tablecheck.com/ja/join/about-us/press/2026/20264tablecheck/)
- 自治体の観光 DX(白馬村)、予約サイトへの手数料依存を下げる訴求(MOTHERS・Mara の事例)、USEN レジ・betrend(CRM)との連携(2026 年のプレスタイトルより)[事実(タイトル)] — [TableCheck プレス一覧](https://www.tablecheck.com/ja/join/about-us/press/)

##### 導入・不満の声
- 導入理由はグルメサイト手数料の削減と no-show 対策(上記事例)[自社主張]。不満の声は未取得。

##### 出典(URL+日付)
- https://www.tablecheck.com/ja/join/(日付なし、取得 2026-10-11)
- https://www.tablecheck.com/ja/join/about-us/press/2024/20240604-10000-restaurants-tablecheck/(2024-06-05)
- https://www.tablecheck.com/ja/policy/payment/?shop=ao
- https://www.tablecheck.com/ja/join/about-us/press/tablecheckbeenos-entertainment/(2026-08-18)
- https://www.tablecheck.com/ja/join/about-us/press/2026/2026625tablecheck/(2026-06-25)
- https://www.tablecheck.com/ja/join/about-us/press/2026/20264tablecheck/(2026-04-15)
- https://www.tablecheck.com/ja/join/about-us/press/(2026-04〜09 の一覧)

### Inferences
- 日本の大手 3 サイトは成果課金(来店 1 人あたり)が標準で、3,000 円/人のコースなら食べログ夜 200 円・ホットペッパー夜 150 円+50 ポイント=200 円相当・ぐるなびスタート夜 205 円はいずれも売上の約 6.7〜6.8% にあたる(試算)[推測(上記の公式単価からの計算)]。
- 宴会・貸切・体験の専用販売機能は、調べた公式の店舗向けページでは見つからなかった。コース予約のネット予約が実質的な宴会の入口になっているとみられる [推測]。
- TableCheck は「グルメサイト依存を下げる」「前払い・FastPass・カード提携・エンタメ席配置」へ広げており、イベント向けの席配置にも手を伸ばし始めた [推測(2026-08 のプレスから)]。
- ぐるなびは楽天ポイントとコース予約(1 名 3,000 円以上)を結びつけており、「幹事ランク」の存在は、幹事を集客チャネルとして扱う発想の先行例 [推測(幹事ランクは検索結果の要約のみ)]。

### Gaps
- ホットペッパーグルメ・食べログ・ヒトサラ・一休.com の「宴会・貸切・コース」機能の店舗向け詳細、前払い・事前決済の有無。
- ホットペッパーグルメの月額有料プランの金額、ヒトサラの有料掲載・予約手数料、一休.com の掲載料・手数料(いずれも非公開または未取得)。
- TableCheck の料金体系とコース・イベント販売機能(公開ページに記載なし)。
- 日本の各サービスの口コミ・不満(飲食店側の声)。
- ぐるなびの最新の有料加盟店数・ネット予約件数(決算 PDF が読めず)。

---

## 3. 日本: イベント告知・体験販売プラットフォーム(Peatix・こくちーず・ストアカ・スペースマーケット)(Q1〜Q4)

### Takeaway
飲食店が自前でワイン会・料理教室・貸切イベントを売る場合の受け皿は、Peatix(有料時のみ 4.9%+99 円/枚)、こくちーず(無料)、ストアカ(成立金額の 10〜30%)になる。いずれも飲食店向けの機能(卓割り、メニュー事前注文、不成立返金)は確認できず、飲食店の利用実態を示す公開データも見つからなかった。

### Cited Findings

#### 3-1. Peatix

##### 基本情報と料金
- 日本の主催者: 有料チケットは 4.9%+99 円/枚(決済手数料込み)、月額・登録料なし。振込手数料は 1 回 210 円。無料イベントは手数料なしで、有料と無料が混在する場合は有料分のみ。購入者の手数料負担なし [事実] — [Peatix Pricing(主催者ヘルプ)](https://help-organizer.peatix.com/en/support/solutions/articles/44001821779-peatix-pricing)
- ITreview の掲載情報(2025-12-27)も同じ「4.9%+99 円/チケット」[事実(第三者)] — [ITreview Peatix 料金](https://www.itreview.jp/products/peatix/price)
- 古い記事には「1 件 70 円+販売額の 2.9%」の記載があり、現行と異なる [要約(古い情報)] — [Jicoo 解説](https://www.jicoo.com/magazine/blog/peatix)
- 登録ユーザー数は「700 万人超」と「840 万人超」の 2 つの記載があり、時期・出典が不明 [要約] — [Jicoo 解説](https://www.jicoo.com/magazine/blog/peatix)

##### 主要機能
- チケット販売、参加者管理、QR チェックイン、主催者フォロー通知、有料の集客オプション(ピックアップ掲載、カテゴリ上位、成果報酬型)[要約] — [Jicoo 解説](https://www.jicoo.com/magazine/blog/peatix)
- 飲食店向け(卓割り・メニュー事前注文・不成立返金)の機能は確認できず(？)。「宿泊・懇親会の有無などを料金種別として選べない」との不満が出ている [事実(利用者レビュー)] — [ITreview 2024-09-26](https://www.itreview.jp/products/peatix/reviews/194316)

##### 店舗側の効果
- 飲食店の実績データは見つからず(？)。一般のイベント主催者の声として、Peatix の会員向けメール広告が同額の Facebook 広告より多く参加者を集めた(2021-06、利用者の主張)[自社主張ではなく利用者主張] — [ITreview 2021-06-04](https://www.itreview.jp/products/peatix/reviews/67402)

##### 店舗獲得とグロース
- 無料イベントは手数料なし、有料のときだけ課金する構造と、過去の参加者がアカウントに溜まり次回告知に使える点が主催者獲得の要因として挙げられる [事実(ヘルプ・レビュー)] — [Peatix Pricing](https://help-organizer.peatix.com/en/support/solutions/articles/44001821779-peatix-pricing); [ITreview 2021-06-04](https://www.itreview.jp/products/peatix/reviews/67402)

##### 導入・不満の声
- 参加者情報は CSV 出力しないと詳しく見られない、流入経路の集計が Excel 作業になる、申込にログインが必要で自社 LP より離脱しやすい(2021-06)[事実(利用者レビュー)] — [ITreview 2021-06-04](https://www.itreview.jp/products/peatix/reviews/67402)
- イベントの形式がオンライン/オフラインの 2 種類に限られ、ハイブリッド開催や収支管理がしにくい(2024-09)[事実(利用者レビュー)] — [ITreview 2024-09-26](https://www.itreview.jp/products/peatix/reviews/194316)

##### 出典(URL+日付)
- https://help-organizer.peatix.com/en/support/solutions/articles/44001821779-peatix-pricing(日付なし。2026-06 の変更はマレーシアのみ)
- https://www.itreview.jp/products/peatix/price(2025-12-27)
- https://www.itreview.jp/products/peatix/reviews/67402(2021-06-04)
- https://www.itreview.jp/products/peatix/reviews/194316(2024-09-26)

#### 3-2. こくちーず

- 手数料・登録料は無料(「こくちーずプロ」で明記)。有料のプレミアム会員は広告非表示などの特典。運営は株式会社こくちーず [事実] — [こくちーず](https://kokucheese.com/)
- 販売チケット 220 万枚、イベント 48 万件、主催者 5 万人と表示。ただしページの著作権表示が 2009〜2020 で、数値は古い可能性がある [自社主張] — [こくちーず](https://kokucheese.com/)
- 飲食店での開催に関する記載、決済機能の有無はページから確認できず(？)。

#### 3-3. ストアカ(ストリートアカデミー)

##### 基本情報と料金
- 講師が支払うのは成立した金額への手数料のみ。初回受講: 自己集客(SNS・ブログ等)10%、ストアカ送客 30%(対面講座は 20%)。2 回目以降のリピートは経路を問わず 10%。月額サービスの 2 か月目以降は 10%。未開催・キャンセル時は手数料なし。登録費・掲載費・月額費なし。決済機能は無料 [事実] — [ストアカ 利用料](https://www.street-academy.com/fee)

##### 主要機能・規模
- 申込ページを自動作成、検索・特集による送客、生徒限定クーポンでリピート促進 [事実] — [ストアカ 利用料](https://www.street-academy.com/fee)
- 掲載講座数: オンライン 37,038 件、対面 22,264 件。料理・グルメは対面 2,431 件、うちワイン 149 件、日本酒・利き酒 61 件、カクテル・ウイスキー 22 件。満足度 98.3%(2024 年 1〜12 月の口コミ平均)[事実(サイト表示)] — [ストアカ トップ](https://www.street-academy.com/)
- 飲食店を会場にする場合の記載はなし(？)。

#### 3-4. スペースマーケット(貸切の受け皿)

- パーティルーム・カフェ・BAR などの貸しスペース予約サイト。ホストの掲載は無料、予約・決済はオンライン。トップ上の例に、BAR を時間貸しした 6,930 円/時の掲載がある。ホスト手数料・飲食店の貸切に関する記載はページに無い(？)[事実] — [スペースマーケット](https://www.spacemarket.com/)

### Inferences
- 3,000 円の会費で Peatix を使うと、4.9%+99 円=246 円(約 8.2%)と試算でき、前節の予約サイトの成果課金(約 6.7%)よりやや高い。ストアカは集客を任せると 20〜30% と高く、自己集客なら 10% [推測(公式の料率からの計算)]。
- これらのツールは「告知・販売・決済」だけで、料理の事前注文や卓割り、不成立時の返金を店のオペレーションとつなぐ機能が無い。店がワイン会等を開くときは、告知は Instagram・既存予約サイト、申込は Peatix・Google フォーム等に分かれると考えられる [推測]。

### Gaps
- 飲食店が Peatix・こくちーず・ストアカを使う実態(件数、成約率、店舗の感想)を示す公開データ。
- ストアカで飲食店が会場になる運用、ストアカ・Peatix の飲食イベントの件数。
- Peatix の公式登録ユーザー数と最新の集客オプション料金。
- こくちーずの最新の利用実績と運営状況(数値が古い可能性)。

---

## 4. 店舗がイベントを企画する動機と集客の難しさ(Q5)

### Takeaway
日本の飲食店のイベント企画は、閑散期(1〜2 月、6〜7 月、8 月)と曜日の穴を埋める目的で語られることが多い。集客手段は Instagram が中心(経営者の約 8 割が運用)で、LINE 公式は約 2 割にとどまる一方、ネタ出しやフォロワー獲得に困っている。宴会は大規模から小グループへ移っている。ただし、企画イベントの集客難易度を直接測った公開調査は見つからなかった。

### Cited Findings
- SNS 運用の実態(飲食店ドットコム、2024-05-15〜20、経営者・運営者 393 件、72% が 1 店舗のみ、東京 49.9%): 定期運用中のアカウントは Instagram 79.1%、Facebook 47.1%、X 26.2%、LINE 公式 18.1%。運用は自店 98.6%。課題は投稿内容・ネタ出し 42.5%、フォロワー・再生数の獲得 41.7%、投稿の継続 34.4%、作業時間の確保 31.6%。集客・販促で最も効果を感じた SNS は Instagram(48.3%)。同記事にイベント・宴会・貸切の記述は無い [事実] — [飲食店ドットコム 2024-05 調査](https://www.inshokuten.com/research/magazine/article/71)
- 閑散期の企画(2019-01-22 の記事、一般論で具体店舗なし): 1・2・8 月は売上が落ちやすい「ニッパチ」。団体向けプラン、貸切プラン(売上が大きいが他の客に歓迎されにくい)、常連向け試食会・試飲会(会費制も可、売上より関係づくり)、食のイベント(集客費は数万円まで、赤字になりうる)などを提案。動機は「2 名でも 10 名でも集客の手間は 1 組と同じ」という団体の効率 [事実(古い・一般論)] — [飲食店ドットコム 2019-01-22](https://www.inshokuten.com/foodist/article/5183/)
- 閑散期は 6〜7 月の梅雨と 1〜2 月で、食に関心の高い層向けのイベントも手段に挙げる(2026-04-01 更新)[事実] — [マネーフォワード 閑散期対策](https://biz.moneyforward.com/restaurant/basic/1420/)
- 2026 年のプライベート忘年会調査(ぐるなび、2026-09-01〜03、20〜69 歳 999 人): 参加意向 61.5%(「参加する」は 25.4%)、希望規模は 5〜6 人 39.9%・4 人以下 36.8%、「コース・飲み放題付き」を含むコース系の希望は計 45%(前年比 +6 ポイントの伸びを含む)、平均予算 5,152 円、飲み放題希望 69.2%。ビジネス忘年会は参加意向 49.4%・平均予算 4,341 円・コース希望 56.1%。貸切・幹事の記述は無い [事実] — [ぐるなび PRO 2026 忘年会調査](https://pro.gnavi.co.jp/magazine/t_res/cat_3/a_5259/)
- 日本フードサービス協会の 2025 年 12 月: 忘年会は法人の大型宴会が減り、個人・小グループの宴会が定着し、ディナーレストランで小グループ宴会が伸びた [要約(検索結果の要約。PDF は読めず)] — [JF 月次データ 2025-12](https://www.jfnet.or.jp/wp/wp-content/uploads/2026/01/getujidata-2025-12.pdf)
- 2023 年 12 月の企業の忘・新年会実施率は 55.9%(TSR)[要約] — [TSR データインサイト](https://www.tsr-net.co.jp/data/detail/1198196_1527.html)
- 「飲み放題メニューのある店」は忘年会の店選びの軸になりつつある(Review 社の分析)[要約] — [PR TIMES 経由の記事](https://webtan.impress.co.jp/r/prtimes/items/000000075.000043858)

### Inferences
- 店のイベント動機は「閑散日・時間帯の充填」と「団体 1 組あたりの手間の小ささ」で、集客が最大のボトルネックだが、店の人手(多くが 1 店舗・自前運用)では SNS の継続運用に限界がある [推測]。
- 宴会が小グループ化し 5〜6 人が最多ということは、「幹事 1 人が数人を集めてコースを予約する」利用が主流になっていることを示す(Shokujii の幹事モデルの需要側の前提と合う)[推測]。
- 貸切・イベントは売上が大きい一方で通常の客への影響があるため、店は「枠」と「最低消費」を自分で決めたい [推測(2019 年記事の「歓迎されにくい」と SevenRooms の最低消費額機能から)]。

### Gaps
- 日本の飲食店が「ワイン会・シェフズテーブル・貸切・季節イベント」を開く頻度、集客経路、成約率、収益性を直接測った公開調査(検索 15 回の範囲で見つからず)。
- LINE 公式アカウントを使ったイベント集客の成功・失敗事例(2024 年の SNS 調査は利用率のみ)。
- 宴会・貸切の予約比率の公式統計(ぐるなび・食べログの予約データは見つからず)。

---

## 5. 横断比較表と Shokujii への示唆(Q6)

### Takeaway
海外の「店が主導して売る」ツールは、前払い・チケット・貸切見積・ウィジェット掲載が揃っている。日本の大手予約サイトは来店課金のネット予約が中心で、宴会・貸切・体験の専用機能は公式の店舗向けページで確認できなかった。「幹事が人を集め、参加者がメニューを事前注文する」基盤は、店が集客に困る閑散枠を埋める役として位置づけられる(推測)。

### Cited Findings

比較表の凡例: ✅=公式ページ・信頼できる記事で確認 / △=一部・有料アドオン・別機能の一部のみ / ❌=確認済みでなし(該当なし。今回は該当無し) / ？=未確認(読めなかった、または記載なし)。根拠は §1〜§3 の各出典。

**海外**

| 機能 | Tock | SevenRooms | Resy | OpenTable | Tripleseat | Perfect Venue | Eventbrite |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 前払い/デポジット | ✅ | ✅ | ✅ | △(手数料記述のみ) | △(決済機能) | ✅ | ✅(チケット) |
| 体験・イベントのチケット販売 | ✅ | ✅ | ✅ | △(前払い体験の記述のみ) | △(Tickets アドオン) | ？ | ✅ |
| 席・卓割り、座席配置 | △ | △ | ✅ | ？ | △(Floor Plans アドオン) | ？ | ✅(Reserved Seating) |
| メニュー/コース選択・事前注文 | △ | ✅ | △(アドオン) | ？ | ？ | △(ゲスト質問票) | △(アドオン・登録フォーム) |
| 最小催行人数・不成立時の返金 | ？ | ？ | ？ | ？ | ？ | ？ | ？ |
| キャンセルポリシー設定 | ✅ | ✅ | ✅ | ？ | ？ | ✅ | ？ |
| グループ/貸切の見積・提案書 | △(問い合わせフォーム) | △(セルフ予約+問い合わせ、提案書は？) | △(非公開イベント) | ？ | ✅ | ✅ | ？ |
| 集客(自社メール・顧客 DB) | △ | ✅ | ✅ | ？ | △ | △ | △(Pro のメール) |
| 集客(マーケットプレイス) | ✅(統合後は Resy) | △ | ✅ | ？ | △(Venue Marketplace) | ？ | △ |
| イベント後フォロー | ？ | △(自動タグ・メール) | ？ | ？ | ？ | △(メールテンプレート) | △(メール) |
| レポート | △ | ✅ | ✅ | ？ | ✅ | ✅ | ？ |

**日本**

| 機能 | ぐるなび(台帳) | ホットペッパーグルメ | 食べログ | ヒトサラ | 一休.com レストラン | TableCheck | Peatix | ストアカ |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| 前払い/デポジット | ？ | ？ | ？ | ？ | ？ | ✅(Pay・バウチャー・与信) | ✅ | ✅ |
| 体験・イベントのチケット販売 | ？ | ？ | ？ | ？ | ？ | △(バウチャー、エンタメ席配置) | ✅ | ✅(講座) |
| 席・卓割り、座席配置 | △(台帳) | ？ | ？ | ？ | ？ | ✅ | ？ | ？ |
| メニュー/コース選択・事前注文 | △(コース予約は ライト以上) | ？ | ？ | ？ | ？ | ？ | △(料金種別が限定的) | ？ |
| 最小催行人数・不成立時の返金 | ？ | ？ | ？ | ？ | ？ | ？ | ？ | ？ |
| キャンセルポリシー設定 | ？ | △(キャンセルは無課金) | ✅(キャンセル料の請求依頼) | ？ | ？ | ✅ | △ | △(未開催は手数料なし) |
| グループ/貸切の見積・提案書 | ？ | ？ | ？ | ？ | ？ | ？ | ？ | ？ |
| 集客(自社メール・顧客 DB) | ✅(顧客管理) | ？ | ？ | ？ | ？ | ✅ | ✅(過去参加者) | △(クーポン) |
| 集客(マーケットプレイス) | ✅ | ✅ | ✅ | ✅(無料掲載) | ✅ | △(Channels・FastPass・カード提携) | ✅ | ✅ |
| イベント後フォロー | ？ | ？ | ？ | ？ | ？ | ？ | ✅(フォロー通知) | ✅(リピート手数料・クーポン) |
| レポート | ✅(集計・分析) | ？ | ？ | ？ | ？ | ✅(Insight) | △(CSV) | ？ |

**料金・手数料の横並び**(公式または出典の記載。時点は各節参照)

| サービス | 月額 | 成果課金・決済手数料 |
| :-- | :-- | :-- |
| Tock(US) | 出典で不一致($0〜$899/月) | 前払いに 0〜3%(別途決済手数料) |
| SevenRooms | 見積(推定 $400〜$1,200 超/会場) | 不明 |
| Resy | 競合記事では $249〜$899/月 | カバー課金なし(競合記事) |
| OpenTable | $149〜$499/月(競合記事) | ネットワークカバー $1.00〜$1.50、デポジット・前払い体験に 2% |
| Tripleseat | $375/会場から | アドオンは個別 |
| Perfect Venue | $199〜$299/月(年払い) | カード 2.9%+30 セント+上乗せ |
| Eventbrite | なし | 3.7%+$1.79/枚+2.9%/注文 |
| ホットペッパーグルメ | 0 円(ネット予約プラン) | 夜 150 円+50 pt/人、昼 40 円+10 pt/人 |
| ぐるなび台帳 | 0 / 11,000 / 33,000 円 | スタート 夜 205 円・昼 41 円/人 ほか |
| 食べログ | 0 円 | 夜 200 円・昼 100 円/人(来店分のみ) |
| ヒトサラ | 無料掲載あり | 不明 |
| 一休.com レストラン | 不明 | 不明 |
| TableCheck | 不明 | 不明(公式予約は紹介料なし) |
| Peatix | 0 円 | 4.9%+99 円/枚、振込 210 円 |
| ストアカ | 0 円 | 10%(自己集客)/20〜30%(送客) |

### Inferences(Shokujii への示唆。5 点)
1. **幹事モデルは「店の集客負担を肩代わりする」と説明できる(推測)**。店は SNS のネタ出しとフォロワー獲得に困っている(§4)。海外サービスは店が売るのが前提だが、Shokujii は幹事が集客し店は受けるだけの形にできる。その分、店側の画面は「受けられる条件の登録」と「当日の仕込み・名札の確認」に絞れる。既存の限定食数(`documents/04_飲食店向け/14_限定食数機能.md`)とオプションメニュー(同 `02_オプションメニュー.md`)が、事前注文の土台としてすでにある。`11_定員数変更時の店舗通知.md` は空ファイルなので、定員・最小人数まわりは新規設計になる。
2. **partner アプリに「貸切・イベントを受けられる枠」の登録を足す案(推測)**。SevenRooms のように、日時・席数・最低消費額・ルームチャージ・アドオン・キャンセル条件をまとめて登録し、使わない枠は自動で通常営業に戻す(リリースルール)形が参考になる。Hide の事例のとおり「枠の存在が知られていない」ことが失注の原因になるため、幹事側の画面で枠を見せることが価値になる。
3. **営業の入口は「閑散日・時間帯の充填」と「予約サイトの手数料の置き換え」の 2 つ(推測)**。閑散期は 1〜2 月・6〜7 月・8 月と、日曜・平日夜が語られる(§4)。TableCheck の事例は、グルメサイト手数料の削減を訴求している(MOTHERS は月 300〜400 万円減)。「空いている枠だけ、幹事経由で埋まったときだけ課金」という言い方は、ホットペッパー・食べログの来店課金と同じ形なので店に伝わりやすい。既存の予約管理(ぐるなび台帳・TableCheck)と競合せず並べて使える点を前面に出す。
4. **手数料は「来店(開催)ベースの成果課金」から考える(推測)**。日本の相場は 3,000 円/人で約 6.7%(食べログ・ホットペッパー・ぐるなびの試算)、Peatix は約 8.2%、ストアカは 10〜30%、Tock・OpenTable は前払い売上の 2〜3%(+月額)。no-show・不成立は無課金にするのが日本の標準(食べログ・ホットペッパー)。幹事が集客した分だけ課金し、店が自分でお客を連れてきた分は低率または無料にする(ストアカの自己集客 10% / 送客 30% の考え方)と、店が説明しやすい。ただし料率の妥当性は店舗ヒアリングで確認が必要。
5. **前払い・不成立の扱いが店の不満になりやすい(推測)**。Tock では返金不可を巡る消費者の低評価、Peatix では参加者のログイン・CSV 出力の手間が不満として出ている。Shokujii は最小催行人数・締切・不成立時の返金を、店が決める項目として明示し、幹事と参加者に伝わる文面を用意するとよい。TableCheck のバウチャーは「支払い後は原則返金なし」としており、Shokujii の返金方針との違いを事前に整理する必要がある。

### Gaps
- 比較表の「？」のうち、OpenTable・Tock・Resy の現行機能は公式ページが読めず空欄が多い。サービス側のデモや契約者向けヘルプでの確認が必要。
- 日本の店舗が実際にイベントを売る際の費用対効果(集客数、客単価の上昇、no-show 率)を示す第三者データは、今回の調査範囲では見つからなかった。示唆 1〜5 は、いずれも公式の機能・料金と一般的な店舗事情からの推測であり、店舗ヒアリングで裏づけるべき。
- Shokujii の仕様(最小催行人数・返金・手数料)は本調査では確認していない(`documents/04_飲食店向け/` のうち 11・10 は空ファイル、06〜09 は数十バイトの見出しのみ)。
