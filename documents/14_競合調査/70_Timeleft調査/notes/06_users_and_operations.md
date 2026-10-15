# Timeleft のユーザー面・運営面の調査(仕組み、利用者の声、継続、属性、店舗側、炎上・安全)

調査日: 2026-10-14。2024〜2026年の情報を優先し、古いものは年を明記した。

## 読む前の注意(取得できなかったもの)

- **Reddit は読めなかった。** WebFetch は www.reddit.com と old.reddit.com を拒否し、WebSearch も reddit.com ドメインを拒否した。Reddit のミラー(lr.in.psf.lt、nyc1.lr.ggtyler.dev、redlib)や pullpush も、TLS エラー・接続リセット・429 で読めなかった。検索結果の URL からスレッドの存在だけは確認できた(Gaps 参照)。r/Timeleft、r/AskNYC、r/london などの件数つき集計はできていない。
- Google Play、Quora、TikTok、YouTube、Medium、Dcard(403)の本文も取得できなかった。
- 公式ヘルプは HTML が 403 だが、Help Center API で本文を取得できた(2026-10-14 時点で記事 63 件)。欠席料の記事(25012703925148)と、旧 ID の「食事・飲み物の購入」記事(23810407006236)、「年齢層」記事(21550527521308)は API が 404 で、検索結果の要約しか見られていない。
- Trustpilot はページ番号ごとにレビューの並びが変わり、同じ4件(2026-08-04、2026-08-02、2025-11-13、2025-10-21 付)が各ページ先頭に固定表示される。以下の「件数」は、重複を除いた6ページ分(117件)を要約文から手作業で分類した概数であり、±数件の誤差がある。
- 引用は 15 語未満に抑え、投稿者名・ユーザー名は書いていない。

---

## 1. 仕組み(公式ヘルプ・ブログ・FAQ)

### Takeaway
Timeleft は「サブスクで席を確保し、アンケートで卓を編成し、店は直前まで秘密」という運営主導の型で、卓の人数は公式でも「通常6人」前後、実際は2〜7人まで揺れる。欠席料・直前キャンセル・解約の仕組みは公式ヘルプに明記され、相互評価(Impressions)と通報・ブロックが安全と再マッチングの土台になっている。

### Cited Findings

**全体の流れ**
- [事実] Timeleft は夕食・コーヒー・ドリンク・ランなどの小グループ交流を運営する。会員は卓を選べず、マッチングで組まれる。流れは、サブスクに加入、予約、短いアンケート、開催の数時間前に場所の通知、当日に集合の順。サブスクは席を確保するもので、食事・飲み物・会場費は当日に別払い。(2026-09-18 更新) — [公式ヘルプ: What is Timeleft and How Does It Work?](https://help.timeleft.com/hc/en-150/articles/28529250732444-What-is-Timeleft-and-How-Does-It-Work)(API で本文取得)
- [事実] 予約はアプリの Book 画面で、種別(夕食・コーヒー・ラン・ドリンク)、日付、言語、予算、食の希望を選ぶ。予約後に卓と店が割り当てられる。開催24時間前のメールで店の詳細、卓番号は開始1時間前に明かされる。サブスク期間中は複数の回を同時に予約できる。(2026-09-27 更新) — [公式ヘルプ: How Do I Book an Event?](https://help.timeleft.com/hc/en-150/articles/28532932215964-How-Do-I-Book-an-Event)
- [事実] イベント種別は、夕食、コーヒー(小さめの昼グループ)、ドリンク(バーで夕食不要)、ラン、女性限定、LGBTQ+ フレンドリー。都市ごとに提供種別は異なる。(2026-09-20 更新) — [公式ヘルプ: What types of events does Timeleft offer?](https://help.timeleft.com/hc/en-150/articles/28532667896988-What-types-of-events-does-Timeleft-offer)
- [事実] 恋愛アプリではないと明言する一方、希望者向けに別枠の「Single Dinners」「Drinks for Singles」がある。 — [公式ヘルプ: What is Timeleft](https://help.timeleft.com/hc/en-150/articles/28529250732444-What-is-Timeleft-and-How-Does-It-Work)
- [事実] 同日参加は一部の都市(メキシコシティ、リマ、ボゴタ、トロント・バンクーバー・モントリオール)で開始13時間前まで予約可。それ以外の都市は通常の締切で、締切後は問い合わせで空き次第。(2026-06-30 更新) — [公式ヘルプ: Can I Join Tonight's Event?](https://help.timeleft.com/hc/en-150/articles/27957316027292-Can-I-Join-Tonight-s-Event)
- [事実] アカウントは都市に紐づかず、Timeleft が展開する都市であればどこでも予約できる。展開地域は欧州、中南米、アジア太平洋、北米。 — [公式ヘルプ: Is Timeleft Available in My City?](https://help.timeleft.com/hc/en-150/articles/28531853103772-Is-Timeleft-Available-in-My-City)

**アンケートと卓編成の基準**
- [事実] マッチングは、プロフィールと希望から「相性が合いつつ多様な卓」を作る。同じ属性ばかりを狙わない。イベント言語は選べる。性別構成は選べず、予約・確定・キャンセルの状況に左右される。年齢帯は基準の一つにすぎず、卓には隣接する年齢帯が混ざることがある。(2026-07-29 更新) — [公式ヘルプ: How Does Timeleft Match Me With a Group?](https://help.timeleft.com/hc/en-150/articles/28530361837212-How-Does-Timeleft-Match-Me-With-a-Group)
- [事実] 年齢幅が広がる理由として、都市の参加人数、同じ日・言語を選んだ人、直前の予約とキャンセルを挙げる。他の参加者の正確な年齢、男女比、職業、性格タイプは指定できない。 — 同上
- [事実] 想定と違った場合は、年齢帯・言語・食の設定を確認し、サポートに開催日・都市・選んだ設定を伝える。 — 同上
- [事実] 卓の人数について「通常6人」(既存ノート)。App Store の説明は「groups of 4-6」。今回読んだ体験記では、6人(Newark、Cleveland、Durham)、7人(Kansas City の女性7人の卓。当初6人予定)、7人の卓(Trustpilot ルーマニア)、自分を含め3人(Tasting Table。他に2人だけ来た)、男性4人+欠席した女性1人(Columbus)と幅がある。 — 出典は下の「ユーザーの声」節の各記事
- [要約] 公式ヘルプ「Is Timeleft Safe?」の検索結果要約は「5〜7人の卓」と書く(本文は取得できず)。 — [Is Timeleft Safe?](https://help.timeleft.com/hc/en-150/articles/14235930616988-Is-Timeleft-Safe)

**店の開示タイミング**
- [事実] 店は予約後に割り当てられ、24時間前のメールで詳細、卓番号は1時間前。確定前に中止された回は店が見えない。(上の予約記事、および [中止の記事](https://help.timeleft.com/hc/en-150/articles/29422327167772-Why-Was-My-Event-Cancelled-And-What-Happens-Next))
- [声] 体験記では「前日に同席者の職業・国籍・星座、当日朝に店」が複数回出る(Connexion の取材者は前日に店と職業、Brussels Times は前日に国籍・職業・星座、当日朝に店、Tasting Table は数日前に参加者リスト)。時期と国で運用に差がある可能性がある。 — [Connexion France 2024-12-08](https://connexionfrance.com/news/new-trend-serves-companionship-up-on-a-plate-in-france/682998)、[Brussels Times 2024-08-06](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)、[Tasting Table 2025-05-19](https://www.tastingtable.com/1859085/dinner-parties-with-strangers-timeleft)
- [声] 2026-09-16 付の Trustpilot レビュー(英国)は、グループ構成を事前に確認できなくなったことを「サービスの低下」と批判する。直近で見える情報が減った可能性がある。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com?stars=1)

**キャンセル・遅刻・欠席・中止**
- [事実] 48時間超前は無料。24〜48時間前は罰則の可能性。24時間未満は遅いキャンセルで欠席料の可能性。無断欠席は自動で欠席料。本当の緊急時はサポートへ。(2026-07-01 更新) — [公式ヘルプ: Cancel or Modify](https://help.timeleft.com/hc/en-150/articles/28536868572444-How-Do-I-Cancel-or-Modify-My-Reservation)
- [事実] 欠席料は、1か月サブスク料金の35%、米国を除く各国、同卓2人以上の報告で記録される。マッチング優先度に影響し、予約時に警告が出た人だけが課金対象(段階的導入)。 — [既存ノート25](../../90_調査ノート原本/03_機能比較と飲食店SaaS調査/25_features_food_social.md)、[公式ヘルプ(検索要約のみ)](https://help.timeleft.com/hc/en-150/articles/25012703925148-What-Is-the-No-Show-Penalty-Fee) [要約]
- [事実] 誰も来ない場合、開始から15〜30分は待つよう案内。席を保持する店が多い。来なければサポートの問い合わせフォームへ。(2026-10-10 更新) — [公式ヘルプ: I Arrived and No One Showed Up](https://help.timeleft.com/hc/en-150/articles/28538239191068-I-Arrived-and-No-One-Showed-Up)
- [事実] 中止の理由は、最低人数に達しない、または基準を満たす卓が組めない場合。自動メールで通知され、再予約、クレジット返却、サブスクプランに応じた補償のいずれかになる。最低人数の数は非公開。(2026-09-30 更新) — [公式ヘルプ: Why Was My Event Cancelled](https://help.timeleft.com/hc/en-150/articles/29422327167772-Why-Was-My-Event-Cancelled-And-What-Happens-Next)
- [事実] 席に着けなかった場合の原因は、店側の過剰予約・予約の不達・席不足が主。Timeleft は店にフォローする。 — [公式ヘルプ: I Couldn't Be Seated](https://help.timeleft.com/hc/en-150/articles/28539903091740-I-Couldn-t-Be-Seated-at-My-Event)
- [事実] 店で予算外の請求が出る原因として、サービス料・カバー料、同卓者が自分の分を払わず残りを割った、予約した予算帯より店が高かった、を挙げる。 — [公式ヘルプ: Unexpected Amount at the Venue](https://help.timeleft.com/hc/en-150/articles/28540012802076-I-Was-Charged-an-Unexpected-Amount-at-the-Venue)

**同席者の評価(Impressions)とマッチングへの影響**
- [事実] 同席者は自動で Connection になる(評価の有無に関係なく)。グループチャットは開始30分前に開き、開催後も残る。 — [公式ヘルプ: Post-Events Connections and Impressions](https://help.timeleft.com/hc/en-150/articles/28540292815772-What-are-Post-Events-Connections-and-Impressions)
- [事実] Impressions は「誰がどの質問に合うか」を選ぶ任意の評価で、開始から1.5時間後に出現、7日間有効。匿名ではなく、受け手は誰からか分かり、受けた特性がプロフィールに表示されることがある。送ると1対1チャットが開く。イベント・店へのフィードバックは別枠で、Impressions を書かなくても送れる。 — 同上
- [事実] 相性が悪かったときは事後フィードバックに書く。フィードバックは今後の卓編成に影響し、参加と評価を重ねるほど精度が上がると説明。 — [公式ヘルプ: What happens if I get a bad match?](https://help.timeleft.com/hc/en-150/articles/28540470340508-What-happens-if-I-get-a-bad-match)
- [事実] 同じ人と再び同席するかは「必ずではない」。避けたい相手はブロックすれば今後のマッチングから外れる。 — 同上
- [声] 評価の仕組みへの反発もある(App Store 仏、2件)。二択の「また会いたいか」が話せなかった相手に答えにくい(2024-05-29)、評価が個人名付きで共有されるのが不快(日付は「約2日前」表記で不明)。開発元は見直し中と返信。 — [App Store 仏](https://apps.apple.com/fr/app/timeleft-make-new-friends-irl/id6466442949)

**アプリの機能**
- [事実] 予約、グループチャット(参加者全員が入る。キャンセル者は自動で外れる。1人だけミュートはできず、報告すると即ブロック)、Connections、Impressions、フィードバック、通知管理、招待(+1ゲスト)、クレジット。 — [公式ヘルプ: How Do Group Chats Work?](https://help.timeleft.com/hc/en-150/articles/29192588664860-How-Do-Group-Chats-Work)
- [事実] 参加者の顔写真は開始から1時間30分後に見える。 — 同上
- [事実] 8週間連続参加の「Streak」キャンペーン(2026-02-09 開始、2026-04 に当選発表)。毎週1回以上、出席確認つき。1週でも欠けるとゼロ。賞品は最大約2,000ドル相当の旅行(往復航空券、2泊、現地メンバー5人との夕食)。対象は日本、米国、英国、オーストラリア、シンガポールなど22の国・地域。 — [Timeleft Streak](https://www.timeleft.com/jp/post/streak/)。このページに継続率の実績値はない。

**サブスクの種類・解約・返金**
- [事実] 1か月・3か月・6か月。地域で選択肢が異なる。イベント数の上限は書かれていない。 — [公式ヘルプ: Subscription Plans](https://help.timeleft.com/hc/en-150/articles/27963865308060-What-Subscription-Plans-Are-Available)
- [事実] App Store の課金項目(2026-10-14 時点)。米国 $19.99/$46.99/$62.99、英国 £13.99/£32.99/£44.99、フランス €17.99/€41.99/€56.99、日本 ¥2,290/¥5,390/¥7,190。 — [US](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949)、[GB](https://apps.apple.com/gb/app/timeleft-make-new-friends-irl/id6466442949)、[FR](https://apps.apple.com/fr/app/timeleft-make-new-friends-irl/id6466442949)、[JP](https://apps.apple.com/jp/app/timeleft-make-new-friends-irl/id6466442949)
- [事実] 解約: Timeleft 直接課金はアプリの Profile → Manage Subscription → Cancel。iOS と Android の課金は各ストアで解約する(アプリ内には解約ボタンが出ない)。解約しても期間終了まで使え、予約済みの回は有効。(2026-09-25 更新) — [公式ヘルプ: How Do I Cancel My Subscription?](https://help.timeleft.com/hc/en-150/articles/28541004285724-How-Do-I-Cancel-My-Subscription)
- [事実] 返金は、新しい課金期間に入った後は原則不可。誤課金、解約後の課金、Timeleft 側の技術障害は審査対象。ストア課金は各ストアに依頼。 — [公式ヘルプ: Can My Subscription Be Refunded?](https://help.timeleft.com/hc/en-150/articles/27963842759452-Can-My-Subscription-Be-Refunded)
- [事実] 「予想外の課金」の原因として公式が挙げるのは、自動更新、ストア課金をアプリ内で解約できないこと、複数アカウント、アカウント削除と解約が別操作であること、失敗した支払いの再試行。 — [公式ヘルプ: Why Was I Charged Unexpectedly?](https://help.timeleft.com/hc/en-150/articles/28540699722268-Why-Was-I-Charged-Unexpectedly)
- [声] 単発払いの廃止は利用者の不満になっている。Trustpilot 英国(2025-11-28)と App Store 日本(2025-12-14)、App Store 英国(年不明の4月4日付、開発元は「意図的な変更」と返信)。過去の単発価格は、米国16ドル(Inquirer 2024-10-22、Alta 2025-02-27)、日本¥1,890(Tokyo Weekender 2025-07-10)。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com?page=4)、[App Store JP](https://apps.apple.com/jp/app/timeleft-make-new-friends-irl/id6466442949)、[App Store GB](https://apps.apple.com/gb/app/timeleft-make-new-friends-irl/id6466442949)
- [事実] 月額制のみに移ったかは公式ヘルプに明記がない(プラン記事は1/3/6か月のみ記載)。

**都市のホスト役・city manager**
- [事実] 卓にホストはいない。進行は会話の質問カードとアプリが担う。 — [Tasting Table 2025-05-19](https://www.tastingtable.com/1859085/dinner-parties-with-strangers-timeleft)(ホストやガイドなし)、[wherever-i-look 2024-10-31](https://wherever-i-look.com/articles/experiences/timeleft-the-strangers-meeting-for-dinner-app-review)(食事中に連絡できる担当がいない)
- [事実] 提携店には、city manager または提携チームの担当者がいる。担当がいない店は問い合わせフォームから。(2026-06-13 更新) — [公式ヘルプ: I'm a Venue Partner and Have a Complaint](https://help.timeleft.com/hc/en-150/articles/27963886982940-I-m-a-Venue-Partner-and-Have-a-Complaint)
- [事実] フィラデルフィアでは、店は WhatsApp で city manager に連絡して参加する。 — [Inquirer 2024-10-22](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [事実] ルクセンブルクに現地責任者(country manager)がいる。 — [Paperjam](https://paperjam.lu/article/timeleft-ou-comment-contrer-so)(記事日付は取得ページ上で不明)

**安全対策**
- [事実] 参加前に認証つきサインアップ、小グループで全員の人数が分かる、Trust & Safety チームが全通報を審査、違反者は警告または永久追放。 — [公式ヘルプ: Keeping the Timeleft Community Safe](https://help.timeleft.com/hc/en-150/articles/27963681898652-Keeping-the-Timeleft-Community-Safe)
- [事実] 通報はアプリ内(Connections か My Events から「Report User」)またはサポート。緊急時は現地の緊急通報を先に。 — [公式ヘルプ: How Do I Report a Safety Incident?](https://help.timeleft.com/hc/en-150/articles/27963865238812-How-Do-I-Report-a-Safety-Incident)
- [事実] ブロックは相手に通知されず、プロフィールを隠し、接続を外し、今後のマッチングも止める。マッチングだけ避けたい場合はサポートに人物とイベントを伝える。 — [公式ヘルプ: How Do I Block or Remove Someone?](https://help.timeleft.com/hc/en-150/articles/28541427422236-How-Do-I-Block-or-Remove-Someone)
- [事実] 電話番号認証、実名、必要時のID確認、通報の自動ブロック、チャットの自動フィルタ、3段階の処分は既存ノートのとおり。

### Inferences
- [推測] 欠席料は米国を除外し、予約時に警告が出た人だけが対象なので、全利用者に一律で効いているわけではない。ヘルプの公開記事が一部404になっていることと合わせ、運用は流動的と読める。
- [推測] 「1回ごとの購入」から「サブスクのみ」への移行(英国・日本・Trustpilot の不満)は、継続を前提にした収益設計への転換と読める。ただし移行時期は特定できていない。
- [推測] Impressions や自動 Connection は、同席者が次の1対1の関係へ進む導線を作る機能だが、評価が実名で伝わるため、内気な人や二択の質問に抵抗を感じる層には負担になる。

### Gaps
- 欠席料の記事本文(404)、公式ヘルプの旧 ID 記事(食事・飲み物の購入、年齢層、安全)は検索要約しか読めていない。
- 卓の人数の公式な定義(4〜6、5〜7、通常6)は揃わない。
- 公式の「約50問」のアンケート項目一覧は確認できていない。体験記では約30問(エクアドル記事の要約)、40問(Connexion)など幅がある。

---

## 2. ユーザーの声

### Takeaway
Trustpilot は 3.2/5(766件、2026-10-14 時点、5つ星48%・1つ星26%)と二極化し、App Store は 4.3〜4.6(日米英仏)と高い。褒められるのは「普段会わない人と話せた・友人ができた」、不満の中心は「請求・自動更新・解約と返金」「サポートが返事をくれない」「店の質・予算ずれ」「年齢のずれ」である。

### Cited Findings

**評価の分布**
- [事実] Trustpilot は TrustScore 3.2、766件(直近12か月で121件)。5つ星48%、4つ星14%、3つ星6%、2つ星6%、1つ星26%。会社は否定的レビューのほぼすべてに返信し、多くは「アプリ内サポートに連絡を」という内容。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com)(2026-10-14 取得)
- [事実] App Store の平均評価と件数(2026-10-14)。米国 4.6(8.7千件)、英国 4.5(983件)、フランス 4.4(約1,700件)、日本 4.3(438件)。 — [US](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949)、[GB](https://apps.apple.com/gb/app/timeleft-make-new-friends-irl/id6466442949)、[FR](https://apps.apple.com/fr/app/timeleft-make-new-friends-irl/id6466442949)、[JP](https://apps.apple.com/jp/app/timeleft-make-new-friends-irl/id6466442949)
- [事実] 米国 App Store のバージョンは 6.21.0(2026-10-14 の直前)で、2週間に数回の更新が続く。 — [App Store US](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949)
- 国別・言語別のレビュー分布は、Trustpilot 上で米国、英国、オーストラリア、カナダ、フランス、ドイツ、アイルランド、デンマーク、スペイン、ポーランドなど多国。日本からの投稿は私が読んだ範囲で2件(5つ星1、1つ星1)。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com?page=3)ほか

**テーマ別の件数表(Trustpilot 6ページ・重複除外 117件の手作業分類。2025-08〜2026-10 のレビュー。延べ件数で、1件が複数テーマに入る。概数)**

星の内訳(117件): 5つ星50、4つ星17、3つ星4、2つ星10、1つ星36(1つ星と2つ星が約39%。サイト全体の32%より重い。読んだページが低評価に偏った可能性がある)。

| テーマ | 肯定/否定 | 件数(概数) | 代表的な要旨 | 出典 |
| :-- | :-- | :-- | :-- | :-- |
| 出会い・会話・友人ができた | 肯定 | 約65(4〜5つ星の大半) | 初対面でも話が弾み、その後も連絡や集まりが続く。女性限定の回で複数の女性と知り合った例が複数。具体的な再会・友人化への言及は約12件 | [Trustpilot p.6](https://uk.trustpilot.com/review/timeleft.com?page=6)、[p.4](https://www.trustpilot.com/review/timeleft.com?page=4)、[p.8](https://uk.trustpilot.com/review/timeleft.com?page=8) |
| マッチングが合った(年齢・共通点) | 肯定 | 約15 | 年齢が近い、共通点が多い、他のアプリより精度が高い | 同上、[?stars=5](https://www.trustpilot.com/review/timeleft.com?stars=5) |
| マッチングが合わない(年齢差、会話を独占する人、男女比の偏り、会話が続かない) | 否定 | 約10(2026年7〜10月の1ページ目24件では約10件で、直近に増えた可能性がある) | 年齢層のずれ、一人が話し続ける、女性ばかりで多様性が低い、全員が年配で差別的な発言があった等 | [Trustpilot p.4](https://www.trustpilot.com/review/timeleft.com?page=4)、[p.3](https://www.trustpilot.com/review/timeleft.com?page=3)、[?stars=1](https://www.trustpilot.com/review/timeleft.com?stars=1) |
| 店の質・予算ずれ・騒音・予約不達 | 否定 | 約20 | 騒がしい、予算を最安にしたのに高額店、ベジタリアン希望なのに肉料理の店、店に予約が入っておらず入れない、直前の店変更 | [Trustpilot p.2](https://www.trustpilot.com/review/timeleft.com?page=2)、[p.3](https://www.trustpilot.com/review/timeleft.com?page=3)、[p.9](https://ca.trustpilot.com/review/timeleft.com?page=9) |
| 店の発見・予算の合う店 | 肯定 | 約8 | 新しい店を見つけられた、予算設定が機能した | [p.8](https://uk.trustpilot.com/review/timeleft.com?page=8)、[p.6](https://uk.trustpilot.com/review/timeleft.com?page=6) |
| 請求・自動更新・解約後の課金 | 否定 | 約18 | 解約しても課金が続く、半年や1年の自動更新を通知なしに請求された、1回だけのつもりが毎月請求された(ドイツ、デンマーク、スペイン、タイ、オーストラリア、米国など) | [Trustpilot p.4](https://www.trustpilot.com/review/timeleft.com?page=4)、[p.2](https://www.trustpilot.com/review/timeleft.com?page=2)、[p.6](https://uk.trustpilot.com/review/timeleft.com?page=6) |
| 価格に見合わない | 否定 | 約10 | 参加費に対して店・量・内容が割高、有料会員制を詐欺とみなす | [p.2](https://www.trustpilot.com/review/timeleft.com?page=2)、[p.9](https://ca.trustpilot.com/review/timeleft.com?page=9) |
| サポートが返信しない・返金されない | 否定 | 約25 | 数日〜2週間返信がない、AI の定型返信が続く、返金を拒否される。投稿後に返金された例も複数 | [?stars=1](https://www.trustpilot.com/review/timeleft.com?stars=1)、[p.3](https://www.trustpilot.com/review/timeleft.com?page=3) |
| サポートが速く丁寧 | 肯定 | 約3 | デンマーク、オーストラリア、カナダの利用者が迅速な対応を評価 | [?stars=5](https://www.trustpilot.com/review/timeleft.com?stars=5)、[p.8](https://uk.trustpilot.com/review/timeleft.com?page=8) |
| 欠席・人数不足・開催中止 | 否定 | 約8 | 2人来ない、3人しか集まらない、コーヒー会が2回中止、直前の中止で補償がない | [p.3](https://www.trustpilot.com/review/timeleft.com?page=3)、[p.4](https://www.trustpilot.com/review/timeleft.com?page=4)、[p.2](https://www.trustpilot.com/review/timeleft.com?page=2) |
| 同じ人・同じ店の繰り返し | 否定 | 5 | 毎回同じ参加者を避けたい(台湾、2025-08-29)、同じ店と顔ぶれで1か月参加しなかった(韓国、2026-06-29)、7か月で20回超参加し店の繰り返しを不満視(米国、2026-06-24)、同じ顔ぶれ・予算に合わない店・返金(オーストラリア、2026-04-04)、同じ店なら辞める(米国、2025-08-25) | [p.8](https://uk.trustpilot.com/review/timeleft.com?page=8)、[p.2](https://www.trustpilot.com/review/timeleft.com?page=2)、[p.9](https://ca.trustpilot.com/review/timeleft.com?page=9) |
| 安全・行為(差別的発言、いじめ、同意のない接触、治安) | 否定 | 約4〜6(重複の可能性) | 人種差別的ないじめと薬物の懸念を報告したが同席の危険が解消されていない(ポーランド、2026-09-17)、同意のない接触(2026-06-26 の出来事)、差別的発言(米国、2025-12-06)、治安の悪い地域の店(米国、2026-02-21) | [?stars=1](https://www.trustpilot.com/review/timeleft.com?stars=1)、[p.1](https://www.trustpilot.com/review/timeleft.com)、[p.4](https://www.trustpilot.com/review/timeleft.com?page=4) |
| 店側の視点(飲食店従業員の投稿) | 否定 | 2 | 予約者が来ず営業に損失(オーストラリア、2026-03-25)、団体客は店の負担で勧めない(米国、2026-05-16) | [p.3](https://www.trustpilot.com/review/timeleft.com?page=3)、[p.2](https://www.trustpilot.com/review/timeleft.com?page=2) |

**App Store のレビュー(国別。要約のみ、掲載分のごく一部)**
- [声] 日本(掲載4件、2024-11〜2025-12)。出会いの数と食事会は好評。一方、直前の店変更や予約日表示のずれに対する問い合わせへの無返信(2025-01-22、2025-07-08)、京都が対象外で大阪も週末の予約ができない、都度払いが事実上のサブスクに変わり頻度が低い人には割高(2025-12-14)という声がある。開発元は都市拡大と料金への理解を返信。 — [App Store JP](https://apps.apple.com/jp/app/timeleft-make-new-friends-irl/id6466442949)
- [声] 英国(掲載3件)。旅行先のエディンバラで楽しめた(2024-11-07)、人見知りでも友人ができた(2024-06-19)。年不明の4月4日付で、予算を高くしても簡素な店、同席者が自動で Connection になる仕様への反発、単発購入ができず当日キャンセルが増えたとの指摘。 — [App Store GB](https://apps.apple.com/gb/app/timeleft-make-new-friends-irl/id6466442949)
- [声] フランス(掲載4件)。約8か月ほぼ毎週利用の人がサポートに連絡できない、英語・フランス語選択時に店の質が下がる、同じ店でも卓ごとに年齢層が違う(2024-11-09)、内向的な利用者が約15回参加して満足(2024-01-15)、事後評価の仕組みに抵抗。 — [App Store FR](https://apps.apple.com/fr/app/timeleft-make-new-friends-irl/id6466442949)
- [声] 米国(掲載3件)。女性限定ディナーで友人ができた(2025-10-20、アプリは不具合が多いとも)、初回で打ち解け二次会が盛り上がった(2025-02-13)、二次会の店が満席で入れない・予算外の店・個別会計不可で混乱(2024-09-26)。 — [App Store US](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949)

**各言語の記事・ブログ・SNS・ポッドキャスト(本文を読めたもの)**
- [声] 東京、英語(ポッドキャスト、2025-01-20)。見知らぬ人と食事する体験を試した日本人ホスト。会社員や経営者との会話は新鮮だったが、参加人数が予定より少ない、店が騒がしい、場所と時間を選べない点を挙げ、旅行者にはすすめるが自分は今後控えると述べる。 — [Everyday Japanese Podcast #253 概要](https://podwise.ai/episodes/2750743)(要約ページ。本編は未視聴)
- [声] 東京、英語(個人ブログ、2025-01-22)。参加は2025年1月第2週。食後のバーには他グループと合わせ約60人。年齢は20代半ば〜30代半ば中心、日本語話者と非話者が混在。新しい友人が1人でき、6人は全員と話せる適切な人数と評価。ただし食事とバーの形式がデートアプリに近く感じる、アプリ内にコミュニティ機能がなく関係が続きにくい、マッチングの質にばらつきがある。新しい都市で人と出会うなら再利用するかもしれないが、それ以外では低いと述べる。 — [個人ブログ(paragraph)](https://paragraph.com/@renstern.eth/my-review-of-timeleft)
- [声] 東京、英語・日本語(Tokyo Weekender、2025-07-10)。27歳の広告業の体験者。参加は計5人(日本人女性3人、ニュージーランド人男性1人、台湾人女性1人。体験者を含め女性4人、男性1人)。当日は英語で会話し、LINE グループでゴルフやピラティスの約束まで発展。二次会(渋谷のバー貸切)は雰囲気にばらつきがあり、途中で帰る人もいた。参加前は詐欺ではないかと疑った。 — [Tokyo Weekender](https://www.tokyoweekender.com/?p=271573)
- [声] クアラルンプール、英語(Vulcan Post、スポンサー記事、2024-08-16)。1回 RM55、1/3/6か月は RM100/250/350。6人の卓で20代半ば〜30代初頭。アイスブレイクが役立つ一方、シェア向けメニューで割高、毎週の自己紹介は疲れそうと指摘。参加者の傾向は「ある程度裕福で英語教育を受けた層」に偏りそうと書く。同じ卓の5人とは再会したいが再参加は未定。 — [Vulcan Post](https://vulcanpost.com/867937/timeleft-dinner-with-strangers-review-malaysia)
- [声] ムンバイ、英語(The Nod、2025-05-05)。2回参加、月 ₹1,099。2回とも全員が独身か離婚経験者。店(Smoke House Deli、Ode)は悪くないがグルメ向けではない。会話が演出的、欠席者がいる。再参加は未定。 — [The Nod](https://thenodmag.com/content/timeleft-networking-app-dining-with-strangers)
- [声] ニューアーク、英語(個人レビュー、2024-10-31)。6人(男性4・女性2)で31歳〜40代半ば、多くが離婚経験者。料理の提供に約2時間かかり、店の対応で食事代は無料。音楽が大きくアプリの質問が聞こえない。食事中に連絡できる担当がいない。 — [wherever-i-look](https://wherever-i-look.com/articles/experiences/timeleft-the-strangers-meeting-for-dinner-app-review)
- [声] 全国紙・雑誌の体験記(英語)。クリーブランド(2025-01-29、6人、1人16ドル、同じグループと後に3回食事)、サンフランシスコ(Alta、2025-02-27、40代中心、9回目の参加者が進行役、6人中2人が Timeleft で出会った相手とデートした)、フェニックス(2025-01-30、10回以上参加の利用者)、ダーラム(2025-04-29、6人中3人が常連)、コロンバス(2025-09-24、男性4人+欠席した女性1人、全員が連絡先を交換)、カンザスシティ(2026-04-18、女性7人、再会を計画)、バンクーバー(Globe and Mail、2024-07-24、予約12人のうち4人がキャンセル、全員が Instagram 広告で知った)。 — [Cleveland Magazine](https://clevelandmagazine.com/articles/a-cleveland-journey-with-timeleft-s-social-dinners/)、[Alta](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)、[azfamily](https://www.azfamily.com/2025/01/30/want-meet-new-people-app-organizes-dinners-with-strangers-phoenix-area)、[Raleigh Magazine](https://raleighmag.com/2025/04/29/timeleft-raleigh-app/)、[Whatever(Columbus)](https://whatever.scalzi.com/2025/09/25/having-dinner-with-four-strangers-in-columbus/)、[Kansas City Magazine](https://kansascitymag.com/every-wednesday-six-strangers-meet-for-dinner-should-you-join/)、[Globe and Mail](https://www.theglobeandmail.com/canada/article-timeleft-app-dinner-strangers)
- [声] フランス語(Connexion France、2024-12-08)。40問の性格診断。3男3女の卓で3時間半、会話は途切れなかったと書く。1席12.99ユーロから、月額14.99ユーロから。 — [Connexion](https://connexionfrance.com/news/new-trend-serves-companionship-up-on-a-plate-in-france/682998)
- [声] ブリュッセル、英語(Brussels Times、2024-08-06)。公務員の28歳が別れと友人の海外移住を機に参加。マッチング精度の改善余地を指摘。1回€12.99。 — [Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)
- [声] 台湾、中国語(Dcard の個人心得)。三男三女、約19時から22時半まで会話が続いた、NT$330 の一回費用、年齢が近く配対が優れていると評価。(検索結果の要約のみ。本文は403) — [Dcard](https://www.dcard.tw/f/mood/p/257237433) [要約]
- [声] スペイン語圏、ドイツ語。独立した利用者体験記は見つからなかった(検索結果は公式ブログ、旅行ガイド、ラテンアメリカの紹介記事が中心)。

### Inferences
- [推測] 満足度の高い声は「1〜3回目、新しい街、旅行中、女性限定、内向的な人」に偏り、低評価は「請求・返金・サポート」と「店・年齢」の運営品質に偏る。体験そのものの否定より、運営の周辺(課金とサポート)が評価を下げている。
- [推測] 2026年7〜10月のレビューでは、年齢のずれ、店の予算ずれ、サポートの AI 定型返信への言及が目立つ。拡大後の運営の薄さが出ている可能性がある(ただし並びの偏りの可能性は排除できない)。
- [推測] 日本の声は少数で、大阪の週末が取れない、京都が対象外、返信がない、という「供給とサポート」の不満が先に出ている。

### Gaps
- Reddit、Quora、TikTok、YouTube のコメントは読めていない。
- Google Play の評価・件数、各国ストアのレビュー全件は取得できていない(掲載分の抜粋のみ)。
- スペイン語・韓国語・ポルトガル語の個人体験記は未取得。韓国は Trustpilot の韓国在住とみられる投稿が2件あるのみ。
- 日本語の個人ブログ・note は検索では見つからなかった。

---

## 3. 継続(回数・やめた理由・再参加のきっかけ)

### Takeaway
「参加回数」が明示された声を拾うと、1〜3回で終える層と、7〜9か月続けて20回以上に達する層に二極化する。やめる理由は、店と顔ぶれの繰り返し、費用対効果、欠席、課金とサポートの不信で、再開のきっかけは引っ越し・旅行・女性限定や新フォーマットが多い。会社側は継続を促すために Streak(8週連続)や月平均 1.4→2.2回の拡大に動いている。

### Cited Findings

**回数が明記された声(件数は私が読んだ範囲。分布の代表ではない)**
- [声] 20回以上を約7か月で参加した米国の利用者(2026-06-24、2つ星)。店の繰り返しと、二次会の Last Drink 廃止に不満。 — [Trustpilot p.2](https://www.trustpilot.com/review/timeleft.com?page=2)
- [声] 約9か月間、毎週参加した米国の利用者(2025-10-08、5つ星)。友人ができた。店が騒がしい、全員とは打ち解けられないと付記。 — [Trustpilot p.6](https://uk.trustpilot.com/review/timeleft.com?page=6)
- [声] 十数回参加(米国、2025-08-18、5つ星)、何度も参加して長期の友人ができた(米国、同日、5つ星)。 — [Trustpilot p.9](https://ca.trustpilot.com/review/timeleft.com?page=9)
- [声] 10回参加し、6回は良かったが、一部は参加者が来なかった。購読をやめる(韓国、2026-03-29、3つ星)。 — [Trustpilot p.3](https://www.trustpilot.com/review/timeleft.com?page=3)
- [声] 約5回参加し、店の事前調査が不十分で労力に見合わないと感じた(2026-08-02、3つ星)。 — [Trustpilot p.6](https://uk.trustpilot.com/review/timeleft.com?page=6)
- [声] 2024年から利用し、直前の店変更と参加者の分散に不満で解約を検討(カナダ、2026-07-08、2つ星)。 — [Trustpilot p.2](https://www.trustpilot.com/review/timeleft.com?page=2)
- [声] 3回参加して4回目を予約済み(カナダ、2025-08-25、4つ星)。2回参加して次も予約済み(英国、2025-08-30、5つ星)。 — [Trustpilot p.8](https://uk.trustpilot.com/review/timeleft.com?page=8)
- [声] 参加者が会員になった時期と回数。フィラデルフィアの記事で、6月から15回(約4か月)、3回目、2回目(入会4か月)。 — [Inquirer 2024-10-22](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [声] ダーラムの卓では6人中、8回目、4回目、2回目が各1人(残り2人は未記載、書き手は初参加)。 — [Raleigh Magazine 2025-04-29](https://raleighmag.com/2025/04/29/timeleft-raleigh-app/)
- [声] サンフランシスコの卓には9回目の参加者がいた。 — [Alta 2025-02-27](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)
- [声] カンザスシティの7人の卓は、1人が2回目で他は全員初参加。 — [Kansas City Magazine 2026-04-18](https://kansascitymag.com/every-wednesday-six-strangers-meet-for-dinner-should-you-join/)
- [声] バンクーバーの8人のうち2人が再参加。 — [Globe and Mail 2024-07-24](https://www.theglobeandmail.com/canada/article-timeleft-app-dinner-strangers)
- [声] 約15回参加した内向的な人(フランス App Store、2024-01-15)、約8か月ほぼ毎週(フランス App Store、2024-11-09、サポート不満)。 — [App Store FR](https://apps.apple.com/fr/app/timeleft-make-new-friends-irl/id6466442949)
- [声] 1回きりで終える見込みの声も多い。Tokyo のブログ(新しい都市以外は再利用は低い)、東京のポッドキャスト(今後は控える)、Tasting Table(同席2人と連絡は続くが他のイベントには行っていない)。 — 上記各出典
- [事実] 参加頻度の一般統計(参加者あたり平均回数、継続率、解約率)は公開されていない。

**やめる理由(上の声で件数がある範囲)**
- [声] 店・顔ぶれの繰り返し 5件、費用対効果 約3件(韓国2026-06-29、米国2025-08-25、約5回の2026-08-02 など)、欠席・人数不足 3〜4件、課金・サポート不信 約5件(購読中止・アカウント削除を明言)、マッチング不満 約3件(2025-12-02 の NL、2025-12-06 の米国、2026-08 前後のカナダ)。
- [声] 単発払いの廃止で「頻繁に参加しない人には割高」「当日キャンセルが増えた」という声。 — [App Store JP 2025-12-14](https://apps.apple.com/jp/app/timeleft-make-new-friends-irl/id6466442949)、[App Store GB](https://apps.apple.com/gb/app/timeleft-make-new-friends-irl/id6466442949)

**再び参加するきっかけ**
- [声] 引っ越し・旅行で新しい都市に行くとき。「転居や旅行時には続けたい」(米国、2025-12-02)、別の都市で再開(ブラジル、2025-11-16、2024年にも利用)、新しい都市で参加して後日アプリで再会(米国、2025-08-19)。 — [Trustpilot p.4](https://www.trustpilot.com/review/timeleft.com?page=4)、[p.9](https://ca.trustpilot.com/review/timeleft.com?page=9)
- [声] 女性限定ディナー(米国、2025-11-17/11-15、5つ星)、コーヒーやランなど別フォーマット。 — [Trustpilot p.4](https://www.trustpilot.com/review/timeleft.com?page=4)
- [声] 初回の満足度が高ければ、そのまま次を予約する。 — [Trustpilot p.9](https://ca.trustpilot.com/review/timeleft.com?page=9)

**会社側の継続施策と主張**
- [事実] 創業者のニュースレターによる月平均利用回数は、新フォーマット(バー、女性限定、ラン)導入後に 1.4回→2.2回。時期は不明。 — [Frin(既存ノート09参照)](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)
- [事実] Streak(2026-02-09〜2026-04)は、8週連続で毎週1回以上の参加を条件に旅行の抽選。これは、頻度を上げる施策として継続の課題を会社が認識していることを示す。ページに実績は載っていない。 — [Timeleft Streak](https://www.timeleft.com/jp/post/streak/)
- [事実] 同卓者の再会を促す「Repeat」(次回の夕食に既知の相手を招く)。 — [Timeleft ブログ](https://timeleft.com/post/timeleft-repeat-reconnect-with-friends/)(検索結果の要約。本文は未取得) [要約]
- [声] 同じ人・同じ店の繰り返しを理由にした「やめた・やめる」という語りは、Trustpilot で5件(上のテーマ表)。記事側では「同じ人に再会する可能性」を欠点に挙げる(wherever-i-look、Newark の記事)。 — [wherever-i-look](https://wherever-i-look.com/articles/experiences/timeleft-the-strangers-meeting-for-dinner-app-review)

### Inferences
- [推測] ヘビーユーザーの中に「20回超で店の繰り返しに不満」が出ていることから、卓の人は毎回変わっても、都市内の店と顔ぶれのプールは小さく、3〜6か月で飽和する層がいると読める。ただし件数は1〜5件で、一般化はできない。
- [推測] 再開の誘因が「別の都市・旅行・別フォーマット」に偏るのは、同じ都市で通い続ける動機が、アプリ側の仕掛け(Streak や Repeat)に頼っていることを示唆する。

### Gaps
- 継続率、初回→2回目の転換率、参加回数の分布の公式データは見つからない。
- 新フォーマット後の頻度の変化は 1.4→2.2 だけで、時期と母集団が不明。
- Reddit の「何回で飽きた」という語りは取得できていない。

---

## 4. 参加者の属性

### Takeaway
公開された数字は断片的で、女性が約6〜7割(サンフランシスコ68%、フランス60%、ルクセンブルク60%)、主な年齢帯は25〜50歳、フランスでは地元7割・外国人3割。移住者・単身者の比率は公式統計がなく、体験記の事例(離婚経験者、転居者、旅行者)からうかがえる程度。

### Cited Findings
- [事実] サンフランシスコの記事は、6人の卓の参加者の約68%が女性と書く(測定時期は不明)。 — [Alta 2025-02-27](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)
- [事実] フランスの利用者は25〜50歳が中心、地元70%・外国人30%。女性60%(国際全体で女性63%、男性37%)。 — [Connexion France 2024-12-08](https://connexionfrance.com/news/new-trend-serves-companionship-up-on-a-plate-in-france/682998)
- [事実] ルクセンブルクでは登録者の60%が女性、主な対象は25〜50歳。参加者の評価は運営が5点満点で4.6、会った人の平均60%と相性が合うと答えた。 — [Paperjam](https://paperjam.lu/article/timeleft-ou-comment-contrer-so)(取得ページの日付は2026-10-14 と表示されたが記事日付は不明)
- [事実] 公式ヘルプの検索結果要約は、卓の年齢差を5〜15歳、コミュニティを18歳から70代までと書く。 — [公式ヘルプ(検索要約のみ)](https://help.timeleft.com/hc/en-150/articles/21550527521308-What-Age-Range-Can-I-Expect-at-Timeleft-Dinners) [要約]
- [事実] メキシコシティの紹介記事は、参加者の年齢を25〜63歳と書く。 — [cdmxsecreta](https://cdmxsecreta.com/en/timeleft-cdmx-2/)(検索結果の要約のみ) [要約]
- [声] 利用者の流入元は広告。バンクーバーの卓は全員が Instagram 広告、ダーラムの常連は Meta 広告で知った。 — [Globe and Mail 2024-07-24](https://www.theglobeandmail.com/canada/article-timeleft-app-dinner-strangers)、[Raleigh Magazine](https://raleighmag.com/2025/04/29/timeleft-raleigh-app/)
- [声] 職業は IT、会計、法務、医療、広報、デザイナー、公務員など専門職・会社員が多い。国籍の多様性は都市部で高い(バンクーバーはカナダ、オーストラリア、ドバイ、インド、イタリア)。 — [Globe and Mail](https://www.theglobeandmail.com/canada/article-timeleft-app-dinner-strangers)、[Inquirer 2024-10-22](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [声] 単身者・離婚経験者が多く参加している卓の例: ニューアーク(多くが離婚経験者)、ムンバイ(2回とも全員が独身か離婚経験者)、サンフランシスコ(40代中心)。 — [wherever-i-look](https://wherever-i-look.com/articles/experiences/timeleft-the-strangers-meeting-for-dinner-app-review)、[The Nod](https://thenodmag.com/content/timeleft-networking-app-dining-with-strangers)、[Alta](https://www.altaonline.com/dispatches/a63924701/strangers-in-the-night/)
- [声] 参加動機は、新しい街での友人づくり、別れや友人の転居、内向性の克服、デートアプリ疲れ。恋愛目的もある(創業者は「恋人を探す人もいる」と認める)。 — [Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)、[Globe and Mail](https://www.theglobeandmail.com/canada/article-timeleft-app-dinner-strangers)
- [声] Vulcan Post は、価格から参加者が「ある程度裕福で英語教育を受けた層」に偏りそうだと推測する(筆者の見立て)。 — [Vulcan Post](https://vulcanpost.com/867937/timeleft-dinner-with-strangers-review-malaysia)
- [声] 東京の卓の一例は5人中、日本人女性3人、台湾人女性1人、ニュージーランド人男性1人で、東京在住2年の体験者を含む。使用言語は英語。 — [Tokyo Weekender](https://www.tokyoweekender.com/?p=271573)

### Inferences
- [推測] 女性比率が高く、卓の男女バランスは「選べない」と公式が書くため、男性が少ない卓や男性ばかりの卓が実際に出る(Columbus 男性4人、Trustpilot 「全員男性にマッチング」)。
- [推測] 東京の事例は英語卓で外国人比率が高い。日本語卓の参加者像は今回の資料では分からない。

### Gaps
- 移住者・在住外国人の全体比率、単身者比率、職業の公式統計は見つからない。
- 日本(東京・大阪・名古屋)の属性データはない。

---

## 5. 店舗側の声

### Takeaway
店の一次的な声はほとんど取れなかった。確認できるのは、公式ヘルプが「店には対価を払わず、客の注文が収益」と説明している点、店主の一例(予約は OpenTable 経由で入る)、Trustpilot に店側とみられる否定的投稿が2件あることだけで、店側の評価の件数・継続率は不明。

### Cited Findings
- [事実] 公式ヘルプが求める提携店の条件は、小グループを受け入れられる空間、個別会計への対応、安定した品質。申込みは公式サイトの問い合わせフォームから(店名、都市、空間の説明)。(2026-07-23 更新) — [公式ヘルプ: Partnering with Timeleft](https://help.timeleft.com/hc/en-150/articles/27963850159516-Partnering-with-Timeleft-Venues-and-Bars)
- [事実] フィラデルフィアでは、Googleレビュー4.3以上、食事制限への対応、価格、雰囲気などが選定基準。店は WhatsApp で city manager に連絡して参加する。 — [Inquirer 2024-10-22](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [事実] ルクセンブルクの選定基準は Google 4つ星以上、騒がしすぎない、写真映えする内装、立地、食事制限対応。水曜ごとに平均12卓を予約。 — [Paperjam](https://paperjam.lu/article/timeleft-ou-comment-contrer-so)
- [声] フィラデルフィアのイタリアン店主は、Timeleft の参加者が OpenTable で予約を入れてきて、予約が入って初めて Timeleft を知った(自分から連絡したことはない)と述べる。報酬や注文額への言及はない。 — [Inquirer 2024-10-22](https://www.inquirer.com/food/timeleft-review-philadelphia-group-dining-20241022.html)
- [事実] 店への対価について記述が食い違う。公式ヘルプの検索要約は「店に料金を払わず、店は客の注文だけが収益。参加者が注文しないと店はホストをやめたいと申し出る。1時間にドリンク1杯を目安に注文してほしい」と書く(本文は404で取得できず)。 — [公式ヘルプ(旧 ID、検索要約)](https://help.timeleft.com/hc/en-150/articles/23810407006236-Do-I-Need-to-Buy-Food-or-Drinks-at-My-Timeleft-Event) [要約]
- [事実] 一方、Brussels Times(2024-08-06)は、評価の高い店に月に6人以上の2卓の予約を約束する代わりに、店が Timeleft に手数料を払うと書く(金額は伏せ字)。公式ヘルプの説明と逆向きで、時期・国・情報源(会社側の説明の引用か)の違いと読めるが、確定できない。 — [Brussels Times](http://www.brusselstimes.com/1160308/table-for-six-strangers-fighting-urban-loneliness-over-dinner)
- [事実] 公式の店舗苦情の窓口は、city manager または提携チーム、なければ問い合わせフォーム。 — [公式ヘルプ: Venue Partner Complaint](https://help.timeleft.com/hc/en-150/articles/27963886982940-I-m-a-Venue-Partner-and-Have-a-Complaint)
- [声] 飲食店側とみられる投稿(Trustpilot、星1)。オーストラリアのレストラン(2026-03-25)は予約者が連絡なく来ず損失が出たと訴え、米国の飲食店勤務者(2026-05-16)は、団体客の対応が負担で店の損失にもなるので勧めないと書く。 — [Trustpilot p.3](https://www.trustpilot.com/review/timeleft.com?page=3)、[p.2](https://www.trustpilot.com/review/timeleft.com?page=2)
- [声] 利用者側から見える店の運営の問題: ニューアークでは料理の提供に約2時間かかり店が食事代を無料にした(2024-10-31)、店に予約が入っておらず入れない(Trustpilot 英国、2026-06-13)、2軒目の店が満席(App Store 米国、2024-09-26)、個別会計に慣れない店で支払いが混乱(同)。公式ヘルプも、個別会計不可・予算違い・閉店・席不足の対応記事を持つ。 — [wherever-i-look](https://wherever-i-look.com/articles/experiences/timeleft-the-strangers-meeting-for-dinner-app-review)、[Trustpilot p.2](https://www.trustpilot.com/review/timeleft.com?page=2)、[App Store US](https://apps.apple.com/us/app/timeleft-make-new-friends-irl/id6466442949)
- [声] 店の質を指摘する利用者の声は多い。ムンバイの提携店は「悪くないが食通向けではない」(2025-05-05)。予算に合う店を選べたという評価(カナダ、2025-09-05)と、店の事前調査が不十分で労力に見合わないという評価(約5回参加、2026-08-02)が併存する。 — [The Nod](https://thenodmag.com/content/timeleft-networking-app-dining-with-strangers)、[Trustpilot p.8](https://uk.trustpilot.com/review/timeleft.com?page=8)、[Trustpilot p.6](https://uk.trustpilot.com/review/timeleft.com?page=6)
- [事実] 初期の都市立ち上げ(リスボン)では、店を電話で押さえて「各自が自分の会計を払う」ことを伝えた(創業者の説明、既存ノート09)。ポルトでは初週に35卓、リスボンは2か月余りで提携50店・毎週100卓超。 — [Timeleft ブログ 2023-09-17](https://timeleft.com/blog/2023/09/17/timeleft-expands-to-porto-join-the-dining-revolution/)

### Inferences
- [推測] 店側の一次的な継続・離脱データは公開されていない。ただし公式ヘルプが「店はやめたいと申し出る」と書き、低予算の新イベントを作った(検索要約)のは、注文額の薄さが店の継続のボトルネックだと会社が認識していることを示す。
- [推測] 店の収益は客の注文のみ(または店が手数料を払う)で、店への対価がないモデルは、店が混雑しない水曜夜に限って成立しやすい(Brussels Times は水曜は店が空いている日と説明)。

### Gaps
- 飲食店オーナー・店員の一次証言(報酬への反応、客単価、来店頻度、トラブル、継続・離脱)は、Inquirer の1件を除き見つからなかった。
- 店への手数料の有無は資料間で矛盾し、確定できない。
- 日本の店舗側の声はない。

---

## 6. 失敗・炎上・安全面の事案

### Takeaway
報道される炎上や事件は、今回の検索では見つからなかった。確認できるのは、Trustpilot に寄せられた少数の安全関連の投稿(差別的発言、いじめ・薬物の懸念、同意のない接触)と、請求・返金・サポートの不満が一定数あることだけで、会社の対応が確認できた事案は少ない。

### Cited Findings
- [事実] 安全事案の報道・訴訟・警察対応は、今回の検索では見つからなかった(「harassed」「incident」などで検索)。 — WebSearch(2026-10-14)
- [声] Trustpilot(2026-09-17、ポーランド、1つ星): 人種差別的ないじめと薬物の懸念を報告したが、また同じ人に会う危険が解消されていないと訴える。同種の内容の別の日付の投稿(2026-08-28)もあり、同一投稿の更新の可能性がある。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com?stars=1)
- [声] Trustpilot(2026-06-26 の出来事、8月に投稿): 同意のない身体接触を訴える。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com)
- [声] Trustpilot(2025-12-06、米国、1つ星): 2回参加し、年配の参加者から差別的と感じる発言があった。 — [Trustpilot p.4](https://www.trustpilot.com/review/timeleft.com?page=4)
- [声] Trustpilot(2026-02-21、米国、1つ星)は治安の悪い地域の店、(2026-02-11、米国)は運営と同席者に連絡できず安全面に問題があるとして継続しないと書く。 — [Trustpilot p.3](https://www.trustpilot.com/review/timeleft.com?page=3)
- [声] Trustpilot(2026-08-14、アイルランド): 不安を感じる店に割り当てられ、一人取り残されたときのサポートが不十分。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com?stars=1)
- [事実] 創業者への批判も1件ある(Trustpilot 2026-06-16、求職者への応対が失礼とする投稿)。製品とは別の論点。 — [Trustpilot p.2](https://www.trustpilot.com/review/timeleft.com?page=2)
- [声] 課金・返金の不満は、解約後の課金、1回の参加で約4か月分を請求(ドイツ、2026-05-24)、約1年半の意図しない課金(米国、2026-07-07)、半年または1年プランの自動更新(インド、タイ、オーストラリア)など。投稿後に返金された例もある(英国 2026-05、米国 2025-12-15)。 — [Trustpilot p.2](https://www.trustpilot.com/review/timeleft.com?page=2)、[p.4](https://www.trustpilot.com/review/timeleft.com?page=4)
- [事実] 会社の対応: 否定的レビューへ返信、通報は Trust & Safety が審査、警告または永久追放。会社は、マッチングの不満や安全の申し立てに具体的な事案ごとの結果を公開していない。 — [Trustpilot](https://www.trustpilot.com/review/timeleft.com)、[公式ヘルプ](https://help.timeleft.com/hc/en-150/articles/27963681898652-Keeping-the-Timeleft-Community-Safe)
- [事実] 公式の安全ガイドは、公共の会場でのみ開催、私邸や孤立した場所では開かない、位置と到着時刻を信頼できる人に共有、現地でのお金のやり取りをしない、と案内する(検索要約)。 — [公式ヘルプ: Is Timeleft Safe?](https://help.timeleft.com/hc/en-150/articles/14235930616988-Is-Timeleft-Safe)(検索結果の要約のみ) [要約]
- [声] 過去の安全に関する印象: Cleveland Magazine は、参加前は冒険か惨事かを迷ったが問題はなかったと書き、Raleigh Magazine も stranger danger を感じなかったと書く。 — [Cleveland Magazine](https://clevelandmagazine.com/articles/a-cleveland-journey-with-timeleft-s-social-dinners/)、[Raleigh Magazine](https://raleighmag.com/2025/04/29/timeleft-raleigh-app/)
- [事実] 拡大後の運営縮小は既存ノート09に記載。2026年の都市閉鎖や人員削減を扱う報道は、今回の検索では見つからなかった。

### Inferences
- [推測] 事案の件数は Trustpilot の数件にとどまり、頻度は評価できない。通報後も同じ人に再会する不安を訴える投稿(ポーランド、2026-09-17)があり、公式ヘルプもブロックは相手に通知されないと説明するため、「通報の処理結果が利用者に見えにくい」点は競合が補える余地になりうる(ただし1件の投稿に基づく)。
- [推測] 請求・返金のトラブルは、ストア課金と自社課金が混在し、アプリ内に解約ボタンが出ない場合がある構造が一因と読める(公式ヘルプも認めている)。

### Gaps
- 重大な安全事案の独立した報道は見つからなかった。Reddit・SNS の炎上は未確認。
- 2026年の都市閉鎖、撤退、人員削減の有無は確認できない。

---

## Shokujii の付け入る隙の示唆(推測)

1. [推測] **課金・解約・返金を分かりやすくする。** Timeleft への最大の不満は体験ではなく、自動更新、解約後の課金、返信のない返金対応(Trustpilot 1つ星36%の多く)である。単発払い、期間と金額の明示、アプリ内で完結する解約を前面に出せば、体験の質で並んでも評価で差がつく。
2. [推測] **店と顔ぶれの繰り返しへの対策。** 20回超のヘビーユーザーや10回で止めた人は「店の繰り返し」「欠席」を挙げる。日本では、特集・季節企画・店主が主役の回を作って店側の出し物を変え、都市内のプールの小ささを逆手に取る余地がある。
3. [推測] **店に対価を出す設計。** 公式ヘルプは店に払わず客の注文頼みと説明し、店側の否定的な声(欠席による損失、団体客の負担)が出ている。日本のイベント基盤で、席の保証金・最低注文・店への手数料配分などを入れれば、店の継続率で差をつけられる。
4. [推測] **ホストと当日サポート。** 卓にホストがおらず、当日に連絡できる担当がいないという不満(Newark、Trustpilot)がある。主催者(コミュニティ運営者)が付く日本のモデルは、当日の欠席・遅刻・店トラブルに対応でき、安全面の通報後の見える化でも優位にできる。
5. [推測] **日本の供給の薄さ。** 日本は東京・大阪・名古屋のみで、App Store の日本のレビューには、京都が対象外、大阪の週末が取れない、返信がない、という声がある。地方都市・週末・日本語中心の卓は、現時点で Timeleft が埋めていない領域とみられる(ただし件数は少なく、確定的ではない)。
