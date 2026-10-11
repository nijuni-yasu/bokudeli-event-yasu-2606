# partnerへの示唆

> 関連: [README](../00_README.md) / [概観](./01_概観.md) / [予約台帳とCRM](./02_予約台帳とCRM.md) / [イベントと貸切](./03_イベントと貸切.md) / [コミュニティとロイヤルティ](./04_コミュニティとロイヤルティ.md) / [partnerへの示唆](./05_partnerへの示唆.md)


調査日 2026-10-11 時点の飲食店向けSaaS(予約台帳、イベント・貸切の販売、ロイヤルティ・集客)の調査を統合し、Shokujii の店舗向け管理画面(partner アプリ)と店舗獲得への示唆をまとめた。

Shokujii は、幹事がイベントを立て、参加者がメニューを事前注文する日本の食事コミュニティ基盤である。partner アプリは飲食店向けの管理画面で、イベントが予約申請から注文受付に進むときに店舗へ電話で通知し、メニュー・オプション・売り切れ・限定食数を店舗が管理する。以下の示唆は、他社の公開情報を Shokujii の現状に当てはめた仮説で、すべて [推測] である。優先度・工数・金額は断定しない。根拠の事実にはタグ([事実]=本文を読んで確認、[自社主張]=ベンダー自身の主張、[要約]=検索結果の要約のみ)を付ける。OpenTable・Resy・Tock・TableCheck の成長史は先行の競合調査の文書 [../10_概観/02_グロースストーリー.md](../10_概観/02_グロースストーリー.md) にあり、ここでは繰り返さない。

## Shokujii への示唆:店の「集客負担の肩代わり」と「当日の仕込み・確認」に絞る

### 示唆の土台になる事実

- **ポータルの課金は来店人数に連動する。** ホットペッパーグルメは夜150円+50ポイント/人([掲載案内](https://www.hotpepper.jp/lcp_keisai/))、食べログは夜200円/人(no-show は非課金)([ネット予約](https://owner.tabelog.com/home/net_reservation/))、ぐるなびのスタートは夜205円/人で([アイミツ](https://saas.imitsu.jp/cate-reservation/service/4586/price))、3,000円/人のコースなら売上の約6.7〜6.8%である [推測(単価からの試算)]。
- **店は SNS の運用に困っている。** 飲食店ドットコム会員393件(2024-05、東京・単店舗に偏る)で、Instagram 79.1%、LINE公式 18.1%、悩みはネタ出し42.5%・フォロワー獲得41.7%・継続34.4%である([飲食店リサーチ](https://www.inshokuten.com/research/magazine/article/71))。
- **宴会は小グループ化し、動機は閑散日の充填である。** ぐるなびの2026年の忘年会調査(999人)は希望規模が5〜6人39.9%・4人以下36.8%、コース系の希望は計45%である([ぐるなび PRO](https://pro.gnavi.co.jp/magazine/t_res/cat_3/a_5259/))。閑散期は1・2・8月で、団体は「2名でも10名でも集客の手間は1組と同じ」と語られる(2019年の一般論)([飲食店ドットコム](https://www.inshokuten.com/foodist/article/5183/))。
- **海外には貸切・イベントの店舗向け機能が揃う。** SevenRooms は貸切の最低消費額を曜日・時間・部屋・人数で設定し、未成約の枠を通常営業へ戻す「リリースルール」と、グループ全員のメニュー選択を厨房向けの合計にする機能を持つ([Event Management](https://sevenrooms.com/platform/event-management/)、[Events & Experiences](https://sevenrooms.com/platform/events-experiences/))。効果(Hai Hospitality の貸切予約が月平均33%増)は [自社主張] である([事例](https://sevenrooms.com/tools-resources/success-stories/hai-hospitality-event-management/))。
- **日本の台帳は外部連携で機能を補う。** トレタ(2026-03-23)と ebica(2026-08-18)は、キャンセル料回収の Payn と連携し([トレタ](https://corp.toreta.in/press/2026-03-23-9756/)、[ebica](https://www.ebica.jp/news/info/ebica-payn-system-cooperation/))、グルメサイト予約を自動で取り込む。公開 API は確認できなかった。
- **日本の宴会・貸切・体験の専用販売機能は、主要ポータルの店舗向けページで確認できなかった。** 前払い・バウチャー・FastPass・イベント向け配席を持つのは TableCheck である([BEENOS 提携](https://www.tablecheck.com/ja/join/about-us/press/tablecheckbeenos-entertainment/))。最小催行人数・不成立時の返金は、調べたサービスの公式ページのどれでも確認できなかった(確認できなかったことは、機能がないことの証明ではない)。
- **会員制・ファンコミュニティの実績は薄い。** 確認できた事例は高価格帯・法人向け(THE FAN は月27,500円のキャンペーン価格 [自社主張])とコロナ期の支援に偏る([財経ニュース](https://www.zaikei.co.jp/releases/3115742/))。

### (a) partner アプリに足す機能の候補

| 候補 | 内容 | 根拠となる他社の事実 | 留意点 |
| :-- | :-- | :-- | :-- |
| 店舗別ゲストリスト | 参加・来店回数、よく頼むメニュー、幹事経由か店舗経由か、常連・VIP タグ、アレルギー・苦手食材 | TableCheck は来店履歴・アレルギー・誕生日を蓄積し複合条件で検索できる([顧客管理](https://tablecheck.com/ja/join/features/customer-relationship-management/))。SevenRooms は自動タグ(VIP、Regular)を持つ([Blog](https://sevenrooms.com/en/blog/the-top-restaurant-crms/))。Shokujii は事前注文データを持つ点が強み | 参加者情報を店舗へ渡す範囲と同意の設計が別に要る |
| イベント台帳ビュー | 日付・時間帯・卓/人数、当日の参加者数とメニュー内訳、アレルギー一覧、確認・リマインド | SevenRooms はグループの選択を厨房向け合計にして自動リマインドする。OpenTable の店は SMS 3回と来店前の電話確認で no-show を抑える([Inquirer](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html)) | 厨房が見たい時点(前日・当日朝)と形式を確かめる |
| 貸切・イベント枠の登録 | 受けられる日時・席数・最低消費額・ルームチャージ・アドオン・キャンセル条件、未成約枠の解放 | SevenRooms の Event Management。Hide の事例は「貸切室の存在が知られていない」「先に返信した店が予約を取る」を課題とする [自社主張] ([事例](https://sevenrooms.com/tools-resources/success-stories/hide-event-management/)) | 幹事側の画面で枠が見えて価値になる。貸切は通常客に歓迎されにくい |
| キャンセル・人数変更の方針と回収 | 事前決済と店舗設定のポリシー、団体・海外客で条件を変える設計、未払いは外部の成功報酬型サービスと連携 | TableCheck は与信型・事前決済型をメニュー・人数・客層別に設定でき([キャンセル対策](https://tablecheck.com/ja/join/features/cancel-and-no-show-protection/))、トレタは日本語/外国語の表示で予約条件を出し分ける([プレス](https://corp.toreta.in/press/2025-11-27-8877/))。食べログはキャンセル料の請求を依頼でき、回収は店側である | トレタは Payn 連携の費用が無料(Payn 本体は別途申込) |
| 不成立・最小催行人数・返金の設定 | 締切、最小人数、不成立時の返金条件を店が選び、幹事と参加者向けの文面を用意する | どのサービスでも確認できなかった空白。Tock では返金不可を巡る低評価がレビューで指摘され([Restaurant HQ](https://www.therestauranthq.com/technology/tock-to-go-review/))、TableCheck のバウチャーは「支払い後は原則返金なし」である([決済ポリシー](https://www.tablecheck.com/ja/policy/payment/?shop=ao)) | Shokujii の返金方針との違いを整理する |
| LINE・Instagram・Google・店頭 QR 用のリンクと素材 | 店が貼れる「イベント作成/参加リンク」、文面・画像のテンプレートの書き出し | LINE のリッチメニューは外部サイト・クーポン・ショップカードへ誘導でき、友だち紹介クーポンがある([活用コラム](https://www.lycbiz.com/jp/column/line-official-account/technique/20190418-2))。Google ビジネスプロフィールは特典・イベントの投稿が無料である([Google](https://business.google.com/en-all/business-profile/)) | 配信を自前で作るより書き出しの支援が運用負荷が小さい。LINE は200通超で月5,000円〜([料金](https://www.lycbiz.com/jp/service/line-official-account/plan/)) |
| 軽いメンバー限定枠・LINE なしの通知 | 「友だち限定・常連限定」の枠、店が幹事を指名・招待する機能、メール等の最小限の通知 | 会員制の実績は高価格帯・法人向けに偏る。LINE公式の運用率は約2割(18.1%) | 有料会員制より軽い形で検証する |
| イベント後のフォロー | 参加者へのお礼、店の次のイベントの案内 | 主要サービスの公式ページで確認できず空白に見える。告知側では Peatix(フォロー通知)、ストアカ(リピート手数料・クーポン)が持つ | 読めなかっただけの可能性がある |
| 店舗向けの簡易レポート | 幹事経由の来店人数・売上、閑散時間帯の充填、ポータル手数料との比較 | TableCheck の事例は手数料の削減額を訴求し(MOTHERS は月または年300〜400万円 [自社主張])([事例](https://tablecheck.com/ja/join/success-stories/ota-vs-ownedmedia/mothers/))、Owner.com も削減額を前面に出す [自社主張] ([Owner.com](https://www.owner.com/pricing)) | 比較表現は Shokujii の手数料水準の確認が前提 |

方向としては、幹事が集客を担うので、店側の画面は「受けられる条件の登録」と「当日の仕込み・確認」に絞れる。店が SNS のネタ出しとフォロワー獲得にかけている時間を減らせるかが価値の説明になる。

### (b) 店舗獲得の入口と訴求

| 入口 | 訴求の言い方 | 根拠 | 注意 |
| :-- | :-- | :-- | :-- |
| 閑散日・時間帯の充填 | 「空いている枠だけ、幹事が人を集めたときだけ使う」 | 閑散期、団体の集客効率、5〜6人の小グループ | 充填率の第三者検証済みの数値はない |
| ポータルの人数課金の置き換え・併用 | 「団体の来店人数ごとの課金とは別の形で受けられる」 | 夜約200円/人。ぐるなびは LINE・Google 経由でも同手数料(2022年の整理)([TableCheck ブログ](https://www.tablecheck.com/ja/blog/seo-gourmet-media/))。店の利益率は3〜6%と TableCheck が整理する(競合の立場)([調査](https://www.tablecheck.com/ja/company/press/ota-survey-20210409/)) | 比較は Shokujii の手数料水準が前提。代替でなく併用の位置づけ |
| 無料から入る | 「導入費用・固定費は不要」 | Airリザーブはフリープラン・初期費用0円・解約金なし([Airリザーブ](https://airregi.jp/reserve/))。Eat App・resos・Perfect Venue も無料プランを持つ | 無料の幅は決済手数料など収益の設計と一体で決める |
| 販売パートナー網・紹介 | POS 販売店、卸、食材・飲料ベンダー、コンサル、広告会社に紹介を頼む | ebica は積み上げ型のランニングマージンを訴求し、約2週間で納品、勉強会・商談同行・専任窓口を提供する([販売パートナー](https://www.ebica.jp/sales-partners/))。ヒトサラも募集する | Shokujii には飲食店紹介プログラム(09)と飲料注文連携(06)の文書があるが、どちらも見出しのみ |
| チェーン・複数店舗 | 1社決めれば多店舗に広がる | TableCheck の出資者と導入事例に飲食グループが並ぶ([リリース](https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/)) | 複数店舗の文書(03)は仕様段階で未実装 |
| カード・ポイント・自治体の提携 | 需要側の入口と組み、店は受ける | ぐるなびは1名3,000円以上のコースのネット予約に楽天ポイントを付ける([得トク祭](https://r.gnavi.co.jp/plan/campaign/bonus/))。TableCheck はダイナースクラブと組む([プレス](https://www.tablecheck.com/ja/join/about-us/press/2026/20264tablecheck/))。食べログは高山市で手数料を無料化した([honichi](https://honichi.com/news/2026/06/02/tabelog-hidatakayama-alignment/)) | 法人の福利・懇親会との組み合わせは、カード会社と台帳が需要と供給を囲う二面モデルの参考になる |
| 競合の動きを機会にする | 条件への不満や再編の時期に声をかける | OpenTable は年最大6,000ドルと3年契約を巡り、CEO が「Restaurants hated us」と発言した([Bloomberg](https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching))。Tock は Resy に統合される計画 | 日本の台帳の解約・乗り換え理由は確認できていない |

営業の型は、無料から入る個店向け(Airリザーブ、Eat App 型)、チェーン・ホテル向けの見積営業(SevenRooms 型)、販売パートナー経由(ebica 型)、POS・業務アプリへの同梱(Toast、Square、Air レジ型)に分かれる。販売パートナー経由は少人数のチームでも全国に拡販できる型と読め、Shokujii には、既存の飲食店紹介プログラムや飲料卸との関係をこの型に拡張する余地がある [推測]。

### (c) 既存ツール・台帳との連携と共存

- **台帳への流入**: TableCheck・トレタ・ebica は「グルメサイト予約を自動取込」する構造で、ebica は Payn・Yappli Mobile Order などのパートナー API 連携を複数公開し、トレタも CASHIER・東芝テックPOS・スマレジと連携を広げている([ebica](https://www.ebica.jp/news/)、[トレタ](https://corp.toreta.in/news/))。Shokujii のイベントを予約チャネルとして取り込んでもらう案は、公開 API が未確認のため、提携の打診が前提である。
- **キャンセル料の回収**: トレタ・ebica が連携した Payn は成功報酬型(率は未記載)で、Payn の初期・月額費用は無料である。
- **LINE**: LINEヤフーは2026-02-25 にトレタを子会社化し、LINE を基盤にした飲食業向け SaaS を目指す([トレタ](https://corp.toreta.in/press/2026-02-25-9570/))。Shokujii が LINE 通知・LINE ログインを使う場合、同じ入口を持つ競合にも補完にもなる。
- **併用**: LINE公式・Instagram・Google ビジネスプロフィール・ポータルとは置き換えず併用し、イベントの公開ページを Google の投稿や Instagram のリンクから参照できる形にする。台帳との二重管理を避けるには、店が既に使う Google カレンダー(Airリザーブのベーシック以上が連携)などへの書き出しを検討できる。
- **排他にしない**: SevenRooms は、OpenTable が「プライマリ予約システムにする要件」を課すと批判する [自社主張(競合の主張)]。自社は直接予約のデータを店舗の一次データとし、DoorDash 経由のデータは DoorDash 側にとどまると記す([比較ガイド](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/))。参加者データを店舗にどこまで渡すかは、店との関係の設計論点になる。

### (d) 手数料・課金の考え方:日本の相場との比較

| サービス | 課金の形 | 3,000円/人での目安 |
| :-- | :-- | :-- |
| 食べログ | 来店人数×夜200円/昼100円(no-show は非課金) | 約6.7% |
| ホットペッパーグルメ | 来店人数×夜150円+50ポイント(200円相当)、昼40円+10ポイント | 約6.7% |
| ぐるなび(スタート) | 来店人数×夜205円/昼41円。ライト月11,000円・ベーシック月33,000円で単価が下がる | 約6.8% |
| 一休.com レストラン | 売上プラン価格の8%(2022-08) | — |
| Peatix | 有料時のみ4.9%+99円/枚、購入者の負担なし | 約8.2%(246円) |
| ストアカ | 成立金額の10%(自己集客)/20〜30%(送客) | — |
| Tock・OpenTable | 月額+前払い・デポジットの2〜3%(出典で食い違う) | — |
| Airリザーブ | 無料プラン+オンライン決済3.24% | — |

比率は公式単価からの試算で、各社の公表値ではない(出典: [ホットペッパー](https://www.hotpepper.jp/lcp_keisai/)、[食べログ](https://owner.tabelog.com/home/net_reservation/)、[アイミツ](https://saas.imitsu.jp/cate-reservation/service/4586/price)、[TableCheck ブログ](https://www.tablecheck.com/ja/blog/seo-gourmet-media/)、[Peatix](https://help-organizer.peatix.com/en/support/solutions/articles/44001821779-peatix-pricing)、[ストアカ](https://www.street-academy.com/fee)、[Airリザーブ](https://airregi.jp/reserve/)、[Restaurant HQ](https://www.therestauranthq.com/technology/tock-to-go-review/))。

考え方の仮説を挙げる [推測]。第一に、課金は来店(開催)ベースの成果課金から考える。日本の予約サイトは no-show・不成立を無課金にするのが標準である。第二に、幹事が集客した分と店が自分で連れてきた分で率を分ける案がある。ストアカは自己集客を10%、送客を30%とし、店は説明しやすい。第三に、課金の対象と上限を透明にする。OpenTable は、カバー課金・月額・2%の決済手数料の重なりに反発を受けた([Inquirer](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html))。2%を店が吸収するか客に転嫁するかを選べる設計は、反発を和らげる材料になる。第四に、無料プラン+決済手数料(Airリザーブ型)の収益化は小規模店の導入障壁を下げる。第五に、誰から取るかは別の論点で、OMAKASE は利用者から1席390円を取り、店舗負担を抑えている([GMO](https://group.gmo/en/news/article/813/))。ただし、Shokujii 自身の手数料・返金方針の現行値は本調査で確認しておらず、比較表現は事実確認が要る。ポータルと同程度(約6.7%)という水準の妥当性は、店舗ヒアリングで確かめるべき仮説である。

### (e) 既存の `04_飲食店向け` の機能との対応

各文書の冒頭を読んだ範囲でまとめた。

| 文書 | 状態・内容(冒頭から) | 土台になる点と拡張の方向 |
| :-- | :-- | :-- |
| [01 予約申請時のTwilio電話通知](../../04_飲食店向け/01_予約申請時のTwilio電話通知.md) | 約5.3KB。予約申請から注文受付へ変わるとき店舗へ自動電話し、承認・拒否・保留を選ぶ。目的は承認時間の50%短縮と承認率10%向上 | 店舗の即応性の土台。「先に返信した店が予約を取る」(SevenRooms の事例 [自社主張])と同じ論点で、貸切枠を登録した後の申請通知にもつながる |
| [02 オプションメニュー](../../04_飲食店向け/02_オプションメニュー.md) | 約24KB。Phase 1 実装済み。選択肢の単価を注文時に固定し、店舗は注文一覧とお名前シートで選択内容を見る | 事前注文とアドオンの土台。注文一覧・お名前シートはゲストリストとイベント台帳ビューの原型になりうる |
| [03 複数店舗・複数メニューリスト](../../04_飲食店向け/03_複数店舗・複数メニューリスト.md) | 約16KB。仕様(未実装)。複数店舗と、デリバリー・テイクアウト・イートインの時間帯別の業態 | チェーン・複数店舗経由の獲得(TableCheck 型)の土台 |
| [04 イートイン](../../04_飲食店向け/04_イートイン.md) | 約4.5KB。仕様(未実装)。部屋・席数・最低保証料金は「予約台帳と請求先が決まるまで」スキーマに入れない。部屋の予約カレンダー・ダブルブッキング防止はスコープ外 | 貸切枠の登録(最低消費額、ルームチャージ)を足すなら、この保留の判断を見直す論点になる |
| [05 テイクアウト](../../04_飲食店向け/05_テイクアウト.md) | 約3.6KB。仕様(未実装)。受け取り時間の枠予約はスコープ外 | 本調査の範囲外 |
| [06 カクヤス連携・飲料注文](../../04_飲食店向け/06_カクヤス連携・飲料注文.md) | 36バイト。見出しのみ | 飲料卸との関係は、販売パートナー網の候補になりうる |
| [07 バイク便の配車自動化](../../04_飲食店向け/07_バイク便の配車自動化.md) | 33バイト。見出しのみ | 本調査の範囲外 |
| [08 フードのレビュー機能](../../04_飲食店向け/08_フードのレビュー機能.md) | 33バイト。見出しのみ | 「アンケート/口コミ導線」は主要台帳の公式本文で確認できなかった空白で、拡張の余地に見える |
| [09 飲食店紹介プログラム](../../04_飲食店向け/09_飲食店紹介プログラム.md) | 33バイト。見出しのみ | ebica の販売パートナー制度に相当する、店舗獲得の置き場所 |
| [10 最大注文個数](../../04_飲食店向け/10_最大注文個数.md) | 0バイト。空 | 04・05 に「1注文あたり最大個数は任意」の記述があり、内容が分散している可能性がある |
| [11 定員数変更時の店舗通知](../../04_飲食店向け/11_定員数変更時の店舗通知.md) | 0バイト。空 | 定員・最小人数・不成立まわりは新規設計になる |
| [12 メニューの並べ変え・メニューの人気タグ](../../04_飲食店向け/12_メニューの並べ変え・メニューの人気タグ.md) | 約19KB。店舗がメニューの表示順を変え、イベントページに反映して注文数の向上を狙う | 店が見せ方を整える運用の土台 |
| [13 売り切れ機能のリアルタイム化](../../04_飲食店向け/13_売り切れ機能のリアルタイム化.md) | 約20KB。#1774、v2.13。売り切れ操作を注文受付中のイベントへ反映し、売り切れの注文を防ぐ | 当日運用の確実性の土台。実装状況は未確認 |
| [14 限定食数機能](../../04_飲食店向け/14_限定食数機能.md) | 約28KB。#1775、v2.13。メニューごとに1イベントあたりの上限食数を設定し、残り食数を表示。Phase 2 は1日あたりの上限 | 仕込み数に限りがある場合の土台。事前注文で需要が読める点は店の単体の価値になりうる。実装状況は未確認 |

空の文書は10・11の2つ、見出しのみは06〜09の4つである。この6つに対応する機能は仕様が未決のため、他社の機能との対応を具体化できない。

### (f) 店舗ヒアリングで確かめるべき仮説

| 仮説 | 確かめ方・聞くこと |
| :-- | :-- |
| H1 イベント・団体の動機は閑散日・時間帯の充填である | どの曜日・時間帯が空いているか。何人から受けたいか。貸切が通常客に与える影響 |
| H2 団体の送客にポータルの人数課金を重く感じている | 団体・宴会の予約のうちポータル経由の割合と、手数料の負担感 |
| H3 課金は来店(開催)ベースの成果課金が受け入れやすい | 月額・成果課金・固定費のどれが許容か。幹事経由と自力で率を分ける案への反応 |
| H4 すでに台帳や紙を使っている | 使っている台帳(TableCheck・トレタ・ebica・Airリザーブ・ぐるなび台帳)。イベントを手で転記する負担、取り込みの希望 |
| H5 厨房は事前注文の集計(メニュー内訳・アレルギー)を前日か当日朝に欲しい | 欲しい時点・形式。現在の仕込みの判断材料 |
| H6 貸切・最低消費額・ルームチャージを自分で決めたい | 枠の決め方、使わない枠の扱い |
| H7 不成立・最小催行人数・返金の条件を店が決めたい | 希望する最小人数・締切・返金のルール |
| H8 LINE公式は少数の店しか使わず、Instagram は大半が使う | 対象店舗での LINE・Instagram・Google の運用状況と、イベントリンクを貼る意向 |
| H9 ゲストリストを店が欲しいが、参加者情報の共有範囲には許容の差がある | 欲しい項目。共有してよい範囲(参加者の同意を含む) |
| H10 卸・POS 販売店などが紹介パートナーになりうる | 既存の関係先と報酬の許容。紹介を頼める相手 |
| H11 常連向けの限定イベントの需要がある | 常連・友だち限定の枠を設けたいか。有料会員制に興味があるか |
| H12 電話通知は店の承認を速めている | 応答率と承認までの時間の実績(文書の目標は測定結果ではない) |

## 出典

日本の予約サイト・台帳: [ホットペッパー](https://www.hotpepper.jp/lcp_keisai/)、[食べログ](https://owner.tabelog.com/home/net_reservation/)、[アイミツ](https://saas.imitsu.jp/cate-reservation/service/4586/price)、[TableCheck ブログ 2022](https://www.tablecheck.com/ja/blog/seo-gourmet-media/)、[TableCheck 調査 2021](https://www.tablecheck.com/ja/company/press/ota-survey-20210409/)、[honichi](https://honichi.com/news/2026/06/02/tabelog-hidatakayama-alignment/)、[得トク祭](https://r.gnavi.co.jp/plan/campaign/bonus/)、[TableCheck 顧客管理](https://tablecheck.com/ja/join/features/customer-relationship-management/)、[キャンセル対策](https://tablecheck.com/ja/join/features/cancel-and-no-show-protection/)、[決済ポリシー](https://www.tablecheck.com/ja/policy/payment/?shop=ao)、[BEENOS 提携](https://www.tablecheck.com/ja/join/about-us/press/tablecheckbeenos-entertainment/)、[TableCheck 2025-03-31](https://www.tablecheck.com/ja/join/about-us/press/2025/20250331_series_s_fundraising/)、[TableCheck 2026-04-15](https://www.tablecheck.com/ja/join/about-us/press/2026/20264tablecheck/)、[MOTHERS](https://tablecheck.com/ja/join/success-stories/ota-vs-ownedmedia/mothers/)、[トレタ 2026-02-25](https://corp.toreta.in/press/2026-02-25-9570/)、[トレタ 2026-03-23](https://corp.toreta.in/press/2026-03-23-9756/)、[トレタ 2025-11-27](https://corp.toreta.in/press/2025-11-27-8877/)、[トレタ お知らせ](https://corp.toreta.in/news/)、[ebica お知らせ](https://www.ebica.jp/news/)、[ebica × Payn](https://www.ebica.jp/news/info/ebica-payn-system-cooperation/)、[ebica 販売パートナー](https://www.ebica.jp/sales-partners/)、[Airリザーブ](https://airregi.jp/reserve/)、[GMO(OMAKASE)](https://group.gmo/en/news/article/813/)。調査: [飲食店リサーチ](https://www.inshokuten.com/research/magazine/article/71)、[飲食店ドットコム 2019](https://www.inshokuten.com/foodist/article/5183/)、[ぐるなび PRO 忘年会調査](https://pro.gnavi.co.jp/magazine/t_res/cat_3/a_5259/)、[財経ニュース(THE FAN)](https://www.zaikei.co.jp/releases/3115742/)。海外・その他: [SevenRooms Event Management](https://sevenrooms.com/platform/event-management/)、[Events & Experiences](https://sevenrooms.com/platform/events-experiences/)、[Hai](https://sevenrooms.com/tools-resources/success-stories/hai-hospitality-event-management/)、[Hide](https://sevenrooms.com/tools-resources/success-stories/hide-event-management/)、[SevenRooms Blog](https://sevenrooms.com/en/blog/the-top-restaurant-crms/)、[SevenRooms 比較](https://sevenrooms.com/blog/restaurant-reservation-system-comparison-guide/)、[Inquirer](https://www.inquirer.com/food/restaurants/opentable-service-fee-no-show-restaurant-reservation-20260114.html)、[Bloomberg](https://brp-prod-bcc.bloomberg.com/news/features/2026-04-17/opentable-vs-resy-yelp-sevenrooms-why-some-top-restaurants-are-switching)、[Restaurant HQ](https://www.therestauranthq.com/technology/tock-to-go-review/)、[Owner.com](https://www.owner.com/pricing)、[Peatix](https://help-organizer.peatix.com/en/support/solutions/articles/44001821779-peatix-pricing)、[ストアカ](https://www.street-academy.com/fee)、[LINE 料金](https://www.lycbiz.com/jp/service/line-official-account/plan/)、[LINE 活用コラム](https://www.lycbiz.com/jp/column/line-official-account/technique/20190418-2)、[Google](https://business.google.com/en-all/business-profile/)。Shokujii の既存文書(リポジトリ内): `documents/04_飲食店向け/` の01〜14(冒頭を読んだ範囲。(e)の表のリンク先)

## 未確認・留意点

- 示唆はすべて [推測] で、他社の公開情報と Shokujii の文書の冒頭からの仮説である。店舗ヒアリング・実績データでの裏づけはない。優先度・工数・金額は断定していない。
- `04_飲食店向け` の10(最大注文個数)と11(定員数変更時の店舗通知)は0バイトの空ファイル、06〜09は見出しのみ(33〜36バイト)である。これらに対応する Shokujii の仕様(最小催行人数・返金・手数料・紹介プログラムの報酬)は確認できていない。01〜05・12〜14 は冒頭のみ読み、実装状況は02(Phase 1 実装済み)と03〜05(仕様・未実装)以外は未確認である。
- Shokujii 自身の手数料水準・返金方針の現行値は確認しておらず、日本の相場との比較表現は事実確認が前提である。3,000円/人の比率(約6.7〜6.8%、Peatix 約8.2%)は単価からの試算である。
- 前提にした他社の事実には [自社主張]・[要約]・競合記事の記載が含まれる。SevenRooms・TableCheck の効果の数値は第三者の検証がなく、Tock・OpenTable・Resy の料金は出典間で不一致で、Tock の Resy 統合の時期と手数料への影響は未確認である。
- 日本の台帳の公開 API は確認できず、提携の可否は打診が前提である。台帳の解約・乗り換え理由、店舗が「アンケート/口コミ導線」「宴会」をどう評価するかの定性データ、LINE公式を使ったイベント集客の事例、日本の店舗が貸切・イベントを開く頻度と収益性の公開調査は見つからなかった。LINE公式の運用率18.1%は東京・単店舗に偏るサンプルである。
- 店舗が自店のファンを「幹事」側に変える(外部の人が主催し、店が会場になる)導線の既存事例は見つからなかった。参加者データの店舗への共有は、個人情報と同意の扱いを別途設計する必要がある。
