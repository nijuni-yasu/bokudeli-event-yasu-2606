# 食事・社交系サービス(Timeleft・Eatwith・Pie)の77機能判定

成果物(CSV、各77行): `features/timeleft.csv` / `features/eatwith.csv` / `features/pie.csv`(同じフォルダ)。書式はタクソノミー v0.1 の `feature_id,verdict,evidence_level,evidence_url,note`。検証済み(3ファイルとも77行、IDがタクソノミーと完全一致、判定値・根拠レベルが許容値、LF・UTF-8)。

判定ルール(本調査での運用。CSV の note と合わせて読むこと):

- ✅ は `公式`(ヘルプ・公式サイト・ストア説明・公式ブログ)で機能の存在を確認できたときだけ。二次情報のみで存在が示されたものは △ とし、`evidence_level=二次`、note の冒頭に「二次:」と書いた(✅ にしていない)。
- ？ は `evidence_level=なし`、`evidence_url` は空欄。
- ❌ は二種類ある。(a) 公式ヘルプが明示しているもの(Timeleft: JN01、SH05、FD01、FD06、FD10、MN02。Eatwith: AC02、MN02)。(b) 【モデル上なし】タグ付き。Timeleft は運営がイベントを自社開催し第三者の主催者がいないため、主催者向け機能(OP01〜OP12、AC01〜AC04、AC06、CR04)と JN03 は存在しない。機能の不在を直接書いた記述はなく、ヘルプの仕組み説明(「Timeleft organises social events」)からの判断である。CSV の note に【モデル上なし】と書いた19件。厳密に「明記」だけを ❌ とする場合は、この19件を ？ に読み替えること。

入力ノートの所在: 依頼で指定された2本の既存ノート(`06_food_dining_social.md`、`09_food_social_restaurant.md`)は、指定パスにも scratchpad 配下にも存在しなかった(ディレクトリ `research_notes` には本調査のフォルダしかない)。代わりに、同じ調査の統合版である `documents/14_競合調査/10_概観/` の4文書(01_サービス概観、02_グロースストーリー、03_参加者獲得_機能と施策、04_主催者獲得_機能と施策)を既存ノートとして使い、そこに引かれた URL を根拠 URL として転用した。「グロース根拠あり」はこの4文書の記述に基づく。

## Timeleft の77機能判定

### Takeaway
✅18 / △21 / ❌25 / ？13。公式ヘルプ・ブログ・App Store・東京ページで、参加者側の機能(マッチング、卓のチャット、通報・ブロック・段階処分、欠席料、食の希望、+1招待)はほぼ確認できた。主催者側(OP・AC・CR04)は運営が自社開催するモデル上存在しない。食事特有の機能では FD05(席のみ確保)が ✅ で、FD01(事前注文)・FD06・FD10 は ❌ と確認できた。

### Cited Findings

**判定の内訳と値の一覧**
- ✅(18): DS02、DS07、JN02、JN06、JN07、JN09、JN12、SH03、AC05、AC08、CR06、CR07、TS01、TS03、TS05、FD05、MN01、MN04。
- △(21): DS01、DS03、DS08、JN04、JN11、SH02、SH04、SH06、AC07、CR01、CR02、CR03、CR05、TS02、TS04、TS06、FD02、FD04、FD07、FD08、MN05。
- ❌(25): 明記6件=JN01、SH05、FD01、FD06、FD10、MN02。【モデル上なし】19件=JN03、OP01〜OP12、AC01〜AC04、AC06、CR04。
- ？(13): DS04、DS05、DS06、JN05、JN08、JN10、SH01、SH07、SH08、CR08、FD03、FD09、MN03。

**食事特有機能(note に具体記述済み)**
- 席のみ確保・送客形態(FD05 ✅): 運営が店・卓・時間を手配し、食事代は各自が店で支払う ([公式FAQ](https://timeleft.com/))。店には対価を払わず毎週グループを送客し、注文しない参加者が多いと店が提携終了を申し出る例がある(ヘルプは取得不可で検索要約、既存ノート [要約]) ([Timeleft ヘルプ 提携](https://help.timeleft.com/hc/en-150/articles/14236028247836-Partnering-with-Timeleft-Restaurants-Bars))。店の選定基準は少人数対応・各自会計・品質 ([ヘルプ: Partnering with Timeleft](https://help.timeleft.com/hc/en-150/articles/27963850159516-Partnering-with-Timeleft-Venues-and-Bars))。フィラデルフィアの店主は OpenTable 経由で予約が入ると証言(二次) ([Inquirer 2024](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html))。
- 少人数卓: 日本は4〜6人 ([Timeleft 東京](https://timeleft.com/tokyo/))、App Store は「groups of 4-6」 ([App Store](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949))、ヘルプは「usually six」 ([ヘルプ: 卓の人数](https://help.timeleft.com/hc/en-150/articles/28539732919324-My-Table-Had-More-People-Than-Expected))。
- アンケートによる卓マッチング(CR07): 年齢差5〜7歳、性別・内向外向を混合、言語を選択、事後の相性評価をマッチングに反映 ([Timeleft アルゴリズム解説](https://timeleft.com/post/timeleft-algorithm-the-maestro-of-your-dinners/))。「約50問」は既存ノートの記述で、この解説では未確認。
- 欠席料(TS04 △): 1か月サブスク料金の35%、米国を除く、同卓2人以上の報告で記録、マッチング優先度に影響([ヘルプ: No-Show Penalty Fee](https://help.timeleft.com/hc/en-150/articles/25012703925148-What-Is-the-No-Show-Penalty-Fee)、本文は403のため検索要約)。35%は公式ブログでも確認 ([Timeleft ブログ: Is Timeleft safe?](https://timeleft.com/blog/is-timeleft-safe/))。キャンセルは48時間超で無料、24〜48時間は罰則の可能性、24時間未満は欠席料の可能性 ([ヘルプ: キャンセル](https://help.timeleft.com/hc/en-150/articles/28536868572444-How-Do-I-Cancel-or-Modify-My-Reservation))。
- 食の希望・アレルギー(FD02 △): 予約ごとにベジタリアン・ヴィーガン・グルテンフリー・ハラール・コーシャを選ぶ。アレルギー専用欄はなく、重度は店へ直接連絡 ([ヘルプ: Dietary Preferences](https://help.timeleft.com/hc/en-150/articles/27959212422044-Dietary-Preferences-and-Food-Restrictions))。食の希望はプロフィールに保存されず毎回選ぶ ([ヘルプ: プロフィール](https://help.timeleft.com/hc/en-150/articles/27963886888348-How-Do-I-Update-My-Profile-and-Preferences))。

**△の条件一覧(21件)**
- DS01: 種別(夕食・コーヒー・ラン・ドリンク)と日付の選択のみで、キーワード検索なし ([ヘルプ: 予約](https://help.timeleft.com/hc/en-150/articles/28532932215964-How-Do-I-Book-an-Event))。
- DS03: 日付・言語・予算帯・食の希望は予約条件で、一覧の絞り込みUIではない(同上)。
- DS08: 運営が店を選定し東京ページで人気店を紹介するが、特集・ランキングは未確認 ([東京](https://timeleft.com/tokyo/))。
- JN04: App Store の更新履歴に「一部都市でウェイトリスト機能」(v5.7.0)。内容は未詳 ([App Store](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949))。
- JN11: 氏名・写真は開催後まで非公開で、写真は開始の1時間30分後に表示 ([安全ガイドライン](https://timeleft.com/safety-guidelines/)、[ヘルプ: グループチャット](https://help.timeleft.com/hc/en-150/articles/29192588664860-How-Do-Group-Chats-Work))。
- SH02: +1リンクを他アプリ経由で共有。個別のSNSボタンは未確認 ([ヘルプ: 招待](https://help.timeleft.com/hc/en-150/articles/27957183804828-How-Do-I-Invite-a-Guest))。
- SH04: 参加者向けの紹介報酬の記述なし。アンバサダーには紹介リンクと成果ダッシュボード ([Affiliate](https://timeleft.com/affiliate/))。
- SH06: 東京ページの月間予約数・新規人数。イベント単位ではない ([東京](https://timeleft.com/tokyo/))。
- AC07: ブランド向けスポンサー商品で、主催者向けではない ([Brand Partnerships](https://timeleft.com/brand-partnerships/))。
- CR01: マーケティングメール・プッシュはあるが、おすすめ配信かは未確認 ([ヘルプ: 通知](https://help.timeleft.com/hc/en-150/articles/28541783156380-How-Do-I-Manage-My-Notifications-and-Emails))。
- CR02: 同卓者は自動でConnectionになるが、次回案内は手動のRepeat ([ヘルプ: Connection](https://help.timeleft.com/hc/en-150/articles/28540389917852-How-do-I-add-or-remove-a-connection))。
- CR03: Repeat(既存Connectionを招待)で、先行案内ではない(ヘルプ: 招待)。
- CR05: Impressions はあるが、参加回数・バッジは未確認 ([ヘルプ: Impressions](https://help.timeleft.com/hc/en-150/articles/28540292815772-What-are-Post-Events-Connections-and-Impressions))。
- TS02: 主催者はいないが提携店を審査(ヘルプ: Partnering with Timeleft)。
- TS04: 欠席料は米国を除く、予約前に警告が出た場合のみ(ヘルプ: No-Show Penalty Fee、検索要約)。
- TS06: 公式チャネル外で予約・支払いをしない注意のみ。主催者向け規約は確認できず ([安全ガイドライン](https://timeleft.com/safety-guidelines/))。
- FD02: 上記。専用のアレルギー欄なし。
- FD04: 公式FAQは「店を予約する」まで。店への人数通知の仕組みは未確認(OpenTable経由は二次)。
- FD07: 各自会計に対応する店を選ぶが、店ごとの方針でアプリ内の精算機能はなし ([ヘルプ: 個別会計](https://help.timeleft.com/hc/en-150/articles/27959085490588-The-Venue-Wouldn-t-Split-the-Bill))。
- FD08: 運営が予算帯・エリア・食の希望で店を割り当て、利用者は店の提案・避けたい店の連絡のみ ([ヘルプ: 店のローテーション](https://help.timeleft.com/hc/en-150/articles/27958879824796-Venue-Rotation-and-Suggestions))。
- MN05: クレジット残高はあるがポイント制度は未確認 ([ヘルプ: クレジット](https://help.timeleft.com/hc/en-150/articles/27963870649244-How-Do-I-Use-a-Credit))。

**その他の確認事実**
- 本人確認: 予約前に電話番号認証が必須で、実名登録、必要時にID確認 ([ブログ: Is Timeleft safe?](https://timeleft.com/blog/is-timeleft-safe/))。ヘルプも参加前の本人確認を明記 ([ヘルプ: Keeping the Community Safe](https://help.timeleft.com/hc/en-150/articles/27963681898652-Keeping-the-Timeleft-Community-Safe))。
- 通報・ブロック・処分: 通報は非通知で自動ブロック、チャットの自動フィルタ、禁止は3段階(教育的警告→正式警告→永久BAN)と異議申し立て ([ヘルプ: チャットのモデレーション](https://help.timeleft.com/hc/en-150/articles/29193330963868-How-Are-Group-Chats-Moderated)、[コミュニティガイドライン](https://timeleft.com/community-guidelines/))。
- 卓のグループチャットは開始30分前に開設され、開催後も残る ([ヘルプ](https://help.timeleft.com/hc/en-150/articles/29192588664860-How-Do-Group-Chats-Work))。
- 料金: 米国は月額$19.99で予約手数料なし(公式ブログ 2026-09-18) ([ブログ](https://timeleft.com/blog/how-much-does-a-supper-club-cost/))。App Store の課金項目は$19.99・$46.99・$62.99 ([App Store](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949))。サブスクは1・3・6か月で、食事・飲み物・会場費は別払い ([ヘルプ: プラン](https://help.timeleft.com/hc/en-150/articles/27963865308060-What-Subscription-Plans-Are-Available))。日本は1回¥1,890・月額¥2,290(二次) ([Tokyo Weekender](https://www.tokyoweekender.com/?p=271573))。
- アンバサダーは紹介リンク経由の売上の50%、月次自動払い、承認制 ([Affiliate](https://timeleft.com/affiliate/))。
- 運営主催(AC08): 「Timeleft organises social events」 ([About](https://timeleft.com/about/))。種別は夕食・コーヒー・ドリンク・ラン、女性限定、LGBTQ+ ([ヘルプ: イベント種別](https://help.timeleft.com/hc/en-150/articles/28532667896988-What-types-of-events-does-Timeleft-offer))。
- 当日受付: 店員に「Timeleft の予約」と伝え、卓番号はアプリで1時間前に開示される(QR受付の記述なし) ([ヘルプ: 誰も来ない](https://help.timeleft.com/hc/en-150/articles/28538239191068-I-Arrived-and-No-One-Showed-Up)、[ヘルプ: 卓を探す](https://help.timeleft.com/hc/en-150/articles/27957503848220-How-Do-I-Find-My-Table))。

**根拠の強い項目 / 弱い項目**
- 強い(公式ヘルプ本文を読んで確認): JN06、JN07、JN09、JN12、SH03、CR06、CR07、TS01、TS03、TS05、FD02、FD07、FD08、MN04、MN05、AC05、AC08。
- 弱い(要注意):
  - TS04: ヘルプ本文は403(Help Center API でも404)で、検索要約と、35%を述べる公式ブログ2本による。
  - FD05 のうち「店に対価を払わない」「提携終了を申し出る」: 検索要約・既存ノートの二次的記述。
  - FD04: OpenTable は二次。
  - MN01 の日本の金額: 二次。
  - DS07 の都市数「約195」: ページ上の件数をツールが数えた概数。
  - CR07 の「約50問」: 既存ノートのみ。
  - 判定が揺れうる項目: JN10(店員への申告方式でQRなしと読める。記述不在のため ？)、DS02・DS03・SH06(都市単位・予約条件・都市ページの統計という解釈)。

**公式情報の食い違い(Timeleft)**
- 卓の人数: アルゴリズム解説は「5人」と「4 per table」が同居 ([Timeleft アルゴリズム解説](https://timeleft.com/post/timeleft-algorithm-the-maestro-of-your-dinners/))。ヘルプは「usually six」、東京ページは4〜6人 ([東京](https://timeleft.com/tokyo/))。Inquirer は5〜6人。
- 会場の開示時刻: ブログは前日 ([ブログ: How does Timeleft work](https://timeleft.com/blog/how-does-timeleft-work/))、東京ページは12時間前、ヘルプは前日メール(24時間前)と卓番号1時間前。
- 本人確認: ブログは電話番号認証を予約前に必須とするが、ヘルプ「How Do I Sign Up?」には認証の記述がない ([ヘルプ: サインアップ](https://help.timeleft.com/hc/en-150/articles/28530549963804-How-Do-I-Sign-Up))。
- 欠席料の対象: ヘルプは米国を除くとするが、ブログは地域条件を書かない。
- 価格: Inquirer(2024)は1回$16・6か月で最大$86、公式ブログ(2026-09)は月額$19.99。
- 女性限定の曜日: App Store は火曜、東京ページは月曜。
- 規模: 公式サイトは4M+会員、App Store は3M+ユーザー、都市数も 200+/250+ が混在。

**グロース根拠あり(note に付与した項目)**
- FD05(卓確保型+少人数卓): 固定曜日・6人卓、ARR €18M(自己申告)、都市あたり週50人以上の密度設計 ([02_グロースストーリー](file:///Users/yasukawanaohiro/Github/wt/tree-3/documents/14_競合調査/10_概観/02_グロースストーリー.md))。
- TS04(欠席料): 欠席対策として整理 ([03_参加者獲得](file:///Users/yasukawanaohiro/Github/wt/tree-3/documents/14_競合調査/10_概観/03_参加者獲得_機能と施策.md) F-10)。
- CR07(アンケートによる卓編成): 同上 F-10。新フォーマットで月平均利用が1.4→2.2回(創業者発言)。
- AC05(アンバサダー50%): 効いたチャネルとして日本語ページのアフィリエイトが挙がる(効果の定量は未確認)。

### Inferences
- Timeleft の ✅ は、参加者側の「信頼・安全(TS)」「参加後の体験(JN12、CR06、CR07)」「卓確保(FD05)」に集中している。主催者側と店舗側(FD03、FD04)は運営内部の運用で、利用者に見える形では提供されていない。
- 食事の注文系(FD01、FD06)は ❌ と確認できた。食事代は店で各自払いのため、「事前注文」「店舗への人数・注文の自動通知」は Timeleft にない領域になる(推測)。
- タクソノミー側の不足: MN02 は主催者向けの定義なので Timeleft は ❌ になるが、実際の収益の中心は参加者向けサブスクである。「マッチング・卓編成」「同卓者の相互評価」「店への送客形態」に対応する行が無く、note でしか表せない(タクソノミー改訂の候補)。

### Gaps
- Timeleft のヘルプセンターの HTML は403で読めなかった。本文は Help Center の公開 API(`help.timeleft.com/api/v2/help_center/en-150/articles/{id}.json`)で約30記事を取得した。記事 URL は API の一覧(63件)に出た `html_url` で、HTML 自体は開けていない。
- 欠席料の記事(ID 25012703925148)は API でも404で、本文は検索要約のみ。
- 未確認(？): イベントの推薦・ブックマーク・フォロー(DS04〜DS06)、残席表示(JN05)、カレンダー追加(JN08)、QR受付(JN10)、OGP(SH01)、年間振り返り(CR08)、店舗向け管理画面(FD03)、売り切れ管理(FD09)、チップ(MN03)。
- 日本の価格は公式ページに出ず、アプリ内表示のみ。二次情報(2025年)は現行の価格と一致するか未確認。
- 「Wrapped」型の年間振り返りは検索(1回)・App Store 説明で確認できなかった。

## Eatwith の77機能判定

### Takeaway
✅28 / △19 / ❌2 / ？28。ゲスト側の検索・予約・キャンセル・信頼・安全と、ホスト側の作成・カレンダー・入金は Help Center の記事で多く確認できた。一方、参加前のリマインド、ログイン手段、CRM・分析、通知・ダイジェスト系は記述が無く ？。食事特有では、ゲストは固定メニューの体験に席を買う形で(FD06 ✅)、メニュー選択・注文(FD01)は確認できず、店舗(restaurant)は掲載不可と記載されている(FD03 △)。

### Cited Findings

**判定の内訳と値の一覧**
- ✅(28): DS01、DS02、DS03、DS06、DS07、JN03、JN07、JN12、SH03、SH04、SH08、OP03、OP09、OP11、AC06、CR06、CR07、TS01、TS02、TS04、TS05、TS06、FD05、FD06、FD08、FD09、MN01、MN04。
- △(19): DS08、JN05、JN06、JN11、SH06、OP01、OP02、OP06、OP12、AC01、AC03、AC05(二次)、AC07、CR05、TS03、FD02、FD03、FD04、FD07。
- ❌(2): AC02、MN02。
- ？(28): DS04、DS05、JN01、JN02、JN04、JN08、JN09、JN10、SH01、SH02、SH05、SH07、OP04、OP05、OP07、OP08、OP10、AC04、AC08、CR01〜CR04、CR08、FD01、FD10、MN03、MN05。

**食事特有機能**
- アレルギー・食の好み(FD02 △): 検索フィルタに「特別食」、体験ページ下部に対応可能なアレルギー・食事制限を表示。申告は予約時または予約後にホストへメッセージ。承認はホストの返信 ([ヘルプ: 対応可否の確認](https://intercom.help/eatwith/en/articles/8287460-how-do-i-know-if-my-host-can-accommodate-my-allergies-dietary-restrictions)、[ヘルプ: 検索](https://intercom.help/eatwith/en/articles/432377-how-do-i-search-for-an-event))。専用の入力欄は確認できず。
- 固定メニュー(FD06 ✅): ホストがコース名・料理名・材料を掲載し ([ヘルプ: メニュー](https://intercom.help/eatwith/en/articles/1441940-how-to-display-your-menu))、価格に食事・飲み物が含まれるのが基本 ([ヘルプ: 価格に含まれるもの](https://intercom.help/eatwith/en/articles/432393-what-is-included-in-the-price-of-an-experience))。ゲストが品目を選べるかの記述は無い(FD01 ？)。
- 席の確保(FD05 ✅): 公開イベントは他のゲストと相席、プライベートイベントは貸切 ([ヘルプ: プライベート/公開](https://intercom.help/eatwith/en/articles/5662208-hosting-private-and-or-open-events-on-eatwith))。
- 店舗の扱い(FD03 △): 個人ホスト向けのダッシュボードはあるが、「restaurants cannot be listed」と記載(2018年11月の記事で現行は要確認) ([ヘルプ: シェフ・レストラン](https://intercom.help/eatwith/en/articles/429231-i-m-a-professional-chef-and-or-i-have-a-restaurant-can-i-be-a-host))。
- 割り勘(FD07 △): プライベートイベントでゲストが費用を分割して払える(2020年6月の記事) ([ヘルプ: プライベートイベントの支払い](https://intercom.help/eatwith/en/articles/4155989-managing-payments-for-private-events))。
- 欠席・キャンセル(TS04 ✅): 期限前は全額返金、期限後は返金なし、ゲストの欠席・遅刻は返金なしでホストに支払い ([ヘルプ: キャンセルポリシー](https://intercom.help/eatwith/en/articles/986192-what-is-the-cancellation-policy)、[ヘルプ: 来なかったゲスト](https://intercom.help/eatwith/en/articles/432217-my-guests-didn-t-come-to-the-event))。ホストの設定既定は48時間前 ([ヘルプ: ポリシー設定](https://intercom.help/eatwith/en/articles/3171434-how-do-i-set-or-change-the-cancellation-policy))。
- 少人数卓・アンケートによる卓マッチングは確認できず。ホストが最小・最大人数を設定する(FD09)。

**△の条件一覧(19件)**
- DS08: Star Chef バッジは基準(プロシェフ・レビュー20件以上で平均4.7等)を満たす体験にコミュニティマネージャーが付与 ([ヘルプ: Star Chef](https://intercom.help/eatwith/en/articles/3055059-who-can-get-a-star-chef-experience-badge))。特集・ランキングは未確認。
- JN05: 予約ボックスに予約可能日と既存の参加者を表示。残席数は未確認 ([ヘルプ: 予約手順](https://intercom.help/eatwith/en/articles/434101-how-can-i-book-an-experience))。
- JN06: 予約時の入力は人数・日付・支払い。要望はメッセージで伝える(同上)。
- JN11: 予約ボックスに既存の参加者が出るが、表示内容は未確認(同上)。
- SH06: 都市ページのレビューのカルーセル。星評価・日付は表示なし ([Eatwith パリ](https://www.eatwith.com/l/destinations/paris))。
- OP01: 4ステップの作成後に運営が手動審査(最大14営業日) ([ヘルプ: 体験の作成](https://intercom.help/eatwith/en/articles/1423009-how-do-i-create-a-new-experience))。
- OP02: 曜日ごとの既定の開催可能日で定例化。複製は未確認 ([ヘルプ: カレンダー](https://intercom.help/eatwith/en/articles/8032004-hosts-calendar-how-to-manage-your-availability))。
- OP06: 確定後にインボックス・カレンダーでゲスト連絡先を確認。出力は未確認 ([ヘルプ: ゲスト連絡先](https://intercom.help/eatwith/en/articles/432225-where-can-i-find-the-contact-details-of-my-guests))。
- OP12: FareHarbor・Bokun・Rezby・Tock と非連携と明記。ウィジェットとパートナーサイトへの空き状況の自動同期はある ([ヘルプ: 連携](https://intercom.help/eatwith/en/articles/3865728-does-eatwith-have-integrations-with-fareharbor-bokun-rezby-or-tock))。
- AC01: ホスト手数料は「Zero」。無料イベントを前提にした記述はない ([ヘルプ: ホストの費用](https://intercom.help/eatwith/en/articles/432349-how-much-does-it-cost-to-host-with-eatwith))。
- AC03: 確定後に連絡先を見られるが、出力・外部利用の可否は未記載(OP06と同じ記事)。
- AC05(二次): Travelpayouts経由のアフィリエイト(6%、事前承認、2021年更新) ([Travelpayouts](https://travelpayouts.com/blog/eatwith-affiliate-program/))。公式ではゲスト向け紹介のみ。
- AC07: 運営がニュースレター・広告・ツアー会社との提携で露出を支援。ホストが購入する商品ではない ([ヘルプ: イベントの宣伝](https://intercom.help/eatwith/en/articles/432210-how-can-i-promote-my-event))。
- CR05: ホスト向けバッジとレビュー数のみ(Star Chef記事)。
- TS03: 通報はコミュニティチーム/サポートへメール。アプリ内の通報・ブロックは未確認 ([ヘルプ: ゲストとのトラブル](https://intercom.help/eatwith/en/articles/432235-what-happens-if-i-have-a-bad-experience-with-a-guest))。
- FD02、FD03、FD04、FD07: 上記。FD04 はホストのカレンダーに予約人数が出るが、集計・店舗への自動通知の記述はない(カレンダー記事)。

**その他の確認事実**
- 料金: ホスト手数料なし、ゲストが30%を上乗せ(例: $20→$26) ([ヘルプ: ホストの費用](https://intercom.help/eatwith/en/articles/432349-how-much-does-it-cost-to-host-with-eatwith)、[ヘルプ: 価格設定](https://intercom.help/eatwith/en/articles/4118435-pricing-your-experiences))。新規ホストには目標価格から少なくとも25%引きでの開始を勧める(価格設定記事)。
- 入金: イベント後2営業日にStripeで振込。現金払いは規約で禁止 ([ヘルプ: ホストの支払い](https://intercom.help/eatwith/en/articles/432236-how-do-payments-work-for-hosts)、[ヘルプ: 現金払い](https://intercom.help/eatwith/en/articles/432243-are-payments-in-cash-allowed))。
- 信頼・安全: ホストもゲストも本人確認が必須 ([ヘルプ: ゲストの信頼](https://intercom.help/eatwith/en/articles/432234-how-do-i-know-if-a-guest-can-be-trusted))。ホストはコミュニティチームの審査(最大14営業日) ([ヘルプ: ホストになる](https://intercom.help/eatwith/en/articles/2680329-how-do-i-become-an-eatwith-host))。住所・連絡先は承認後に開示。保険は「3,000,000 EUR guarantee」 ([ヘルプ: 保険](https://intercom.help/eatwith/en/articles/8294615-what-does-the-eatwith-insurance-cover))。
- 予約: リクエスト予約(72時間で失効)と即時予約 ([ヘルプ: 予約リクエスト](https://intercom.help/eatwith/en/articles/1930220-what-happens-once-i-ve-made-a-booking-request)、[ヘルプ: 即時予約](https://intercom.help/eatwith/en/articles/2630273-what-does-instant-booking-mean-how-do-i-know-if-an-event-has-instant-booking))。
- 紹介: Refer a Friend は友人が初回体験(€90超)で€10引き、紹介者に€10 ([ヘルプ: 紹介](https://intercom.help/eatwith/en/articles/2206180-refer-a-friend-give-10-get-10))。
- ホスト向けの埋め込み: 予約ウィジェットは無料 ([ヘルプ: マーケティングツールキット](https://intercom.help/eatwith/en/articles/3675985-marketing-toolkit-for-hosts))。ツールキットは QR・チラシに言及しない。
- 公開ページ: 都市別・カテゴリ別の公開ページがある(例: [Eatwith パリ](https://www.eatwith.com/l/destinations/paris))。

**根拠の強い項目 / 弱い項目**
- 強い(記事本文を読んで確認): DS01〜DS03、DS06、JN03、JN07、SH03、SH04、SH08、TS01〜TS06、FD02、MN01、MN04。
- 弱い(要注意):
  - FD03: 2018年の記事。
  - FD07: 2020年の記事。
  - AC05: 二次(2021年)。
  - OP03 の「体験の一時非公開」、OP09 の「支払い履歴」: 記事タイトルのみ確認(本文未読)。
  - DS07: 都市ページ1つと検索結果。
  - 古い記事(2018〜2021年)に依拠した判定は note に年を書いた。

**食い違い・注意(Eatwith)**
- 手数料: 同じ記事(2023-09)の中で「ゲストが30%」と「パートナーサイト掲載時は30%に引き上げ」が併記される ([ヘルプ: ホストの費用](https://intercom.help/eatwith/en/articles/432349-how-much-does-it-cost-to-host-with-eatwith))。誤記の可能性があり、料率の変動は要確認。
- 体験作成の審査: 作成記事は「最大14日」、ホストになる記事は「最大14営業日」と書く。

**グロース根拠あり**
- OP12: TripAdvisor など外部パートナー掲載 ([02_グロースストーリー](file:///Users/yasukawanaohiro/Github/wt/tree-3/documents/14_競合調査/10_概観/02_グロースストーリー.md))。
- AC05: アフィリエイト6〜10%(既存ノート [要約])。
- ただしこの文書は Eatwith の「成長の証拠は薄い」とも述べる。

### Inferences
- Eatwith は「ホスト市場型」で、ホスト向けの運用機能(カレンダー、プライベート/公開、入金、ウィジェット)と信頼・安全(TS)が厚い。逆に、参加者の継続(CR01〜CR04)と通知(JN09)は記述が無い。
- 食事の注文(FD01)や店舗(restaurant)向けの機能は、Eatwith も該当しない。事前注文と店舗連携は、3サービスとも ✅ が無い領域である(この結論は ✅・△ の確認範囲に限る)。

### Gaps
- Eatwith のアプリ(iOS/Android)の説明は確認していない。通知・カレンダー追加・プッシュは、アプリで提供されている可能性がある(JN08、JN09 を ？ のままにした理由)。
- 体験ページの実機確認はしていない(SH01 の OGP、SH02 の共有ボタン、DS04 の推薦)。
- ログイン方式(JN02)、アカウント不要の予約(JN01)は、ヘルプに記述がなく ？。
- 食い違いの解消(30%の根拠)はヘルプのみでは判断できない。

## Pie の77機能判定

### Takeaway
✅11 / △14 / ？52(❌なし)。公式サイトは SPA で本文を取得できず(タイトルのみ)、公式の根拠は iOS の App Store 説明と更新履歴に限られる。ほかに TechCrunch・Business Insider(AOL 転載)・MediaPost の報道を二次として使った。食事特有機能(FD)は記述なしで全て ？(FD09 のみ二次で △)。

### Cited Findings

**判定の内訳と値の一覧**
- ✅(11): DS04、DS06、JN08、SH02、SH03、SH06、OP01、OP03、OP05、OP11、CR07。
- △(14): DS02、DS05、JN02(二次)、JN10、JN11、SH04(二次)、SH07、OP12、AC01、AC05(二次)、AC08(二次)、TS01(二次)、TS05(二次)、FD09(二次)。
- ？(52): 上記以外。FD01〜FD08、FD10 は全て ？。

**公式(App Store)で確認できた機能**
- 説明: 無料の地元イベントを探すアプリで、友人・友人の友人が参加するイベントを出すパーソナライズ・フィード、アプリ内チャット、イベントの主催(非公開、または「snowball」で公開)、リンク/テキスト/AirDrop での共有、カレンダー同期 ([App Store](https://apps.apple.com/app/id1509667820))。
- 更新履歴: Communities(Community Homes、QRコード共有)、プランのタグ・共同ホスト・ブックマーク、リンクからのプラン作成、Apple Wallet チケット、Instagram Stories 共有、カレンダー購読、AIチャット相棒「Pienelope」(同上)。
- 提供都市: Chicago・Austin・Bay Area・Columbus(同上)。App Store は iOS 版のみ確認し、Android は未確認。
- 年齢 18+、メッセージとユーザー投稿コンテンツを含む、アプリ内課金なし(同上)。

**二次(報道)で確認した機能**
- Community Homes(2026-08-25開始): 共有できるホームページ、コミュニティフィード、管理ツール。グループチャットと「bids for connection」は近日。フィードの変更(2025-12)後、アプリ滞在が2分→10分(自社発言) ([TechCrunch 2026-08](https://techcrunch.com/?p=3156057))。
- Creator Fund: $1M、RSVP 1件あたり$5〜10。全イベントが公開ではなく、非公開イベントを安全面のレイヤーとする ([TechCrunch 2024-11](https://techcrunch.com/2024/11/19/irl-social-app-pie-is-coming-to-sf-to-make-you-less-lonely))。
- Creators Club: RSVP 経由で新規アカウントを連れてきたホストに支払う ([MediaPost](https://www.mediapost.com/publications/article/416426/can-pie-cure-loneliness-new-cmo-believes-it-can.html))。
- アンケートによる編成: 「Sparked by Pie」で RSVP 時に1〜5段階のクイズに答え、6人グループに分けて事前にグループチャットを開く ([TechCrunch 2025-03](https://techcrunch.com/2025/03/04/andy-dunns-new-app-pie-uses-ai-to-help-you-make-friends))。
- 利用体験: 電話番号でサインアップ、RSVP は Yes/Maybe/No、参加者へメッセージ、一部イベントは参加枠が限られ外部の RSVP リンクへ誘導 ([Business Insider(AOL転載) 2024-11](https://www.aol.com/news/tried-pie-social-million-dollar-130801270.html))。

**△の条件一覧(14件)**
- DS02: 提供都市は4都市で、都市・地図の絞り込みUIは未確認(App Store)。
- DS05: コミュニティのフィード(2026-08開始)。主催者単位のフォローは未確認。
- JN02(二次): 電話番号サインアップ(AOL)。
- JN10: Wallet チケットはあるが、当日受付の運用は未確認(App Store)。
- JN11: 友人・友人の友人の参加予定のみ。全参加者ではない(App Store)。
- SH04(二次): Creators Club の RSVP 追跡(MediaPost)。
- SH07: コミュニティ用のQRのみ(App Store)。
- OP12: カレンダー購読とリンクの取り込み。API・Zoom 等は未確認(App Store)。
- AC01: アプリは無料・アプリ内課金なし。主催者の手数料の記述なし(App Store)。
- AC05(二次): Creator Fund・Creators Club。公式の募集条件は未確認。
- AC08(二次): AOL(2024)は運営がイベントを主催しないと報じる一方、TechCrunch(2025-03)は運営の会「Sparked by Pie」を報じる。
- TS01(二次): 電話番号(AOL)。ID確認は未確認。
- TS05(二次): 非公開イベント(TechCrunch 2024-11)。ぼかし表示等は未確認。
- FD09(二次): 一部イベントに参加枠の制限(AOL)。

**食い違い(Pie)**
- 規模: 約23,000人(2024-10) ([TechCrunch 2024-11](https://techcrunch.com/2024/11/19/irl-social-app-pie-is-coming-to-sf-to-make-you-less-lonely))、13万MAU(2025-03) ([TechCrunch 2025-03](https://techcrunch.com/2025/03/04/andy-dunns-new-app-pie-uses-ai-to-help-you-make-friends))、5万MAU(2025-07、Wharton 記事) ([Wharton Baker Retail](https://bakerretail.wharton.upenn.edu/news/social-media-app-leverages-ai-to-help-users-make-real-world-friends/))、約30万人(2026-08) ([TechCrunch 2026-08](https://techcrunch.com/?p=3156057))。定義が揃わない。
- 都市: App Store は4都市。TechCrunch(2026-08)は「どこでも使えるが Chicago・New York・LA で強い」。MediaPost は Chicago と Austin。
- クイズ: TechCrunch(2024-11)は150問のクイズから転換したとし、AI クイズに触れない。TechCrunch(2025-03)は AI 相性クイズを報じる。

**グロース根拠あり**
- AC05(Creator Fund): 約23,000(2024-10)→13万MAU(2025-03)。ただし既存ノートは「相関のみ」の弱い根拠とする ([02_グロースストーリー](file:///Users/yasukawanaohiro/Github/wt/tree-3/documents/14_競合調査/10_概観/02_グロースストーリー.md))。
- SH06(友人の参加予定フィード): 滞在2分→10分(自社発言)。
- CR07(AIクイズ・6人グループ): 成長要因として既存ノートに記載。

**根拠の強い項目 / 弱い項目**
- 強い: DS04、DS06、JN08、SH02、SH03、OP01、OP03、OP05、OP11、CR07(App Store の公式説明・更新履歴)。
- 弱い: 二次のみの7件(JN02、SH04、AC05、AC08、TS01、TS05、FD09)。SH06 の滞在時間の数値は自社発言の報道。

### Inferences
- Pie の ？52件は「機能がない」ではなく「公式の根拠が取れていない」と読むべきである。特に TS(通報・ブロック・本人確認)は、App Store が「メッセージとユーザー投稿を含む」と記すため、実際は存在する可能性が高い(推測)。
- Pie は食事に特化しておらず(FD 全て ？)、Shokujii の比較対象としては、主催者報酬(AC05)・友人の参加予定フィード(SH06)・コミュニティの場(OP11)が参考になる。

### Gaps
- 公式サイト `getpie.app` は SPA でタイトルのみ取得でき、ヘルプ・利用規約・ガイドラインは取得できなかった(`help.getpie.app` は DNS なし)。
- Android 版(Google Play)は取得できず、iOS 版のみ。
- 通報・ブロック・本人確認・返金・キャンセル・参加枠の表示は、公式の記述を確認できなかった。
- Creator Fund の現行の募集条件・金額は未確認(2024年の報道のみ)。
- Pie の機能の多くは更新が速く、App Store のスナップショット(v5.33.0)以降は変わりうる。

## 判定方法と横断の留意点

### Takeaway
3サービスの ✅ 数は Eatwith 28、Timeleft 18、Pie 11。ただし ？ の数は根拠の取りやすさに依存し、機能の多寡とは一致しない(Pie は公式情報が少ない)。FD01(事前注文)と FD03・FD04(店舗向け管理画面・人数通知)は、3サービスとも ✅ が無い。

### Cited Findings
- 判定軸の定義はタクソノミー v0.1 に従った。 ([機能タクソノミー](file:///Users/yasukawanaohiro/Github/wt/tree-3/documents/14_競合調査/30_機能比較/01_機能タクソノミー.md))
- FD の ✅ は、Timeleft が FD05 のみ、Eatwith が FD05・FD06・FD08・FD09、Pie はなし(上記の各 CSV)。FD01 は Timeleft が ❌、Eatwith と Pie は ？。
- Timeleft の ❌ 25件のうち【モデル上なし】19件は、公式ヘルプの仕組み説明に基づく判断である。 ([ヘルプ: What is Timeleft](https://help.timeleft.com/hc/en-150/articles/28529250732444-What-is-Timeleft-and-How-Does-It-Work))
- WebSearch は9回使用(上限12)。

### Inferences
- 機能マトリクスの集計では、Timeleft の【モデル上なし】19件を「❌(機能なし)」として数えるか、「対象外」として除外するかで比較結果が変わる。マトリクス側で「対象外」の扱いを決める必要がある。
- 3サービスとも FD01・FD04 が ✅ でないため、「申込時のメニュー事前注文」と「店舗への人数・注文の自動通知」は、このカテゴリの競合に対する差別化の余地になりうる(今回の確認範囲での推測)。

### Gaps
- 指定された2本の既存ノートが見つからず、代替として統合版の4文書を使った(冒頭参照)。元ノートにしかない記述があれば取りこぼしている可能性がある。
- 実機確認(アプリ操作)は行っていない。全判定が公式ページ・ストア説明・報道に基づく。
- 検索上限の都合で、Pie の通報・ブロック・Timeleft のカレンダー追加などの個別確認は行っていない。
