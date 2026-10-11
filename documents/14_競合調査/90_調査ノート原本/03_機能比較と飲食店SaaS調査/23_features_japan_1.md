# 日本のイベントツール2サービス(Peatix・Doorkeeper)の77機能判定

調査時点は2026年10月。判定の正本は同フォルダ `features/peatix.csv` と `features/doorkeeper.csv`(各77行、タクソノミー v0.1 の全IDと一致、判定値・根拠レベルの許容値を Python で検証済み)。以下はその要約と、確認できなかった点である。

## 1. Peatix の77機能は、✅・△・❌・？のどれか

### Takeaway
内訳は ✅35・△19・❌3・？20。参加者側の発見・フォロー・自動通知(CR01・CR02・DS05・DS06)と、主催者の当日運営・分析・決済(OP08〜OP10・AC07)が厚い。一方、アカウント不要の申込(JN01)と承認制(JN03)は非対応と公式に確認でき、食事・店舗連携(FD)に専用機能は見つからなかった。

### Cited Findings

**判定の内訳**
- ✅35: DS01, DS02, DS03, DS05, DS06, DS08, JN02, JN06, JN08, JN09, JN10, JN11, SH01, SH02, SH06, SH08, OP01, OP02, OP03, OP06, OP07, OP08, OP09, OP10, OP11, AC01, AC06, AC07, AC08, CR01, CR02, TS04, TS05, MN01, MN04
- △19: DS04, DS07, JN07, JN12, SH03, SH07, OP05, OP12, AC03, AC04, CR04, CR07, TS02, TS03, FD01, FD02, FD06, FD09, MN05
- ❌3: JN01, JN03, MN02
- ？20: JN04, JN05, SH04, SH05, OP04, AC02, AC05, CR03, CR05, CR06, CR08, TS01, TS06, FD03, FD04, FD05, FD07, FD08, FD10, MN03
- 根拠レベルは 公式45・実機11・二次1(AC04)・なし20。

**❌と確認した3件の根拠**
- JN01: チケット注文にはアカウントが必須と公式ヘルプに明記(「To order tickets, you need a Peatix account」)。作成方法はメール・Google・Apple — [Peatix ヘルプ: アカウント作成](https://help-attendee.peatix.com/en/support/solutions/articles/44002430435-how-to-create-a-peatix-account)
- JN03: 申込期間を設けてアンケートから参加者を選ぶ「選考機能(Selection)」は「現在利用不可」と記載 — [Peatix ヘルプ: Feature overview](https://help-organizer.peatix.com/en/support/solutions/articles/44002019732-feature-overview)
- MN02: 料金ページに「初期登録料、月額費無料」と明記。有料は集客サービス(従量)のみで、主催者向けのサブスクはない — [Peatix 料金](https://services.peatix.com/ja/pricing)

**△の条件一覧**
- DS04: おすすめメールは同カテゴリ参加者へ自動送信。ホームは2026-05にテーマ別表示へ刷新。個別の推薦フィードは確認できず — [無料の集客機能](https://learning.peatix.com/ja/how-to-use/free-customer-attraction)、[ホーム刷新のお知らせ](https://help-attendee.peatix.com/en/support/solutions/articles/44002799905-product-update-discover-events-more-easily-with-our-redesigned-home-page)
- DS07: タグ別の検索URL(`peatix.com/search?cc=jp&tags=…`)はあるが、都市×カテゴリの専用ディレクトリは未確認 — [実機: 食事会イベントページ](https://peatix.com/event/5191994)
- JN07: 参加者は主催者へメッセージで依頼し、キャンセルは主催者のみが実行。購入50日超の有料は日本340円 — [参加者ヘルプ: キャンセル依頼](https://help-attendee.peatix.com/en/support/solutions/articles/44001822284-how-to-make-ticket-cancellation-requests)
- JN12: 事後メッセージは終了後30日まで。レビュー・アルバムは未確認 — [メッセージ送信](https://help-organizer.peatix.com/en/support/solutions/articles/44001821756-how-to-send-messages-to-attendees)
- SH03: チケット譲渡はあるが友人招待の専用導線は未確認 — [譲渡機能](https://help-organizer.peatix.com/en/support/solutions/articles/44001821760-about-the-transfer-feature)
- SH07: カスタムURLのみ(定期開催では不可)。QR・チラシ生成は未確認 — [イベント作成](https://help-organizer.peatix.com/en/support/solutions/articles/44001821716-how-to-create-a-group-an-event-physical-event-)
- OP05: 共同主催者は最大2名で、権限は1種類 — [共同主催者](https://help-organizer.peatix.com/en/support/solutions/articles/44001821768-how-to-manage-events-with-multiple-users-adding-co-organizers)
- OP12: 外部連携はVimeo/YouTube埋め込み・外部配信リンク・ウィジェットに限られ、API・Webhookは公式で確認できず — [Feature overview](https://help-organizer.peatix.com/en/support/solutions/articles/44002019732-feature-overview)
- AC03: 参加者CSVはあるがメールアドレスを含まない — [参加者リスト](https://help-organizer.peatix.com/en/support/solutions/articles/44001821754-how-to-download-the-attendee-list)
- AC04: 2020-01のATND閉鎖時の初回手数料無料とデータ移行サービス(二次、恒常機能ではない) — [Impress Internet Watch](https://internet.watch.impress.co.jp/docs/yajiuma/1229961.html)
- CR04: 販売リストをチケット種別・注文状況で絞って送信でき、フォロワーへも送れる。タグ等のセグメントは未確認 — [メッセージ送信](https://help-organizer.peatix.com/en/support/solutions/articles/44001821756-how-to-send-messages-to-attendees)
- CR07: メンバーラウンジは招待制で、料金の記載は限定モニター向け「3か月無料」のみ — [メンバーラウンジ](https://learning.peatix.com/ja/how-to-use/member-lounge)
- TS02: 検索・関連イベントへの掲載は審査(2営業日程度)を通ったイベントのみ — [無料の集客機能](https://learning.peatix.com/ja/how-to-use/free-customer-attraction)
- TS03: 「TOS/ガイドライン違反の報告」の記事は題名のみ確認(本文は未読) — [ヘルプ: 違反報告フォルダ](https://help-organizer.peatix.com/en/support/solutions/folders/44001221694)
- FD01・FD02・FD06・FD09: 専用機能はなく、チケット種別・事前アンケート(最大32問、選択式/自由記述)・チケット枚数で代用 — [事前アンケート](https://help-organizer.peatix.com/en/support/solutions/articles/44001821720-how-to-use-a-form-to-collect-information-from-attendees)。食事会の実例では「料理4種盛り+1ドリンク」を1チケット5,500円で販売していた — [実機](https://peatix.com/event/5191994)
- MN05: 定額課金(手数料10%、会員限定メッセージ、CSV)で特典は主催者が設定。ポイント制度は未確認 — [定額課金](https://services.peatix.com/ja/subscription)

**根拠の強い項目**(公式ヘルプ本文、または実ページで確認)
- 実機: 検索(DS01〜DS03)、フォロー(DS05)、OGP(SH01)、共有ボタン(SH02)、カレンダー追加(JN08)、フォロワー数(SH06)、グループページ(OP11)。検索ページには「カテゴリー・近く・今後すべて・開催形式」の絞り込みがあり、Facebook/Twitterへのシェアボタンを確認した(LINE共有は見当たらない) — [実機: 検索](https://peatix.com/search?q=%E9%A3%9F%E4%BA%8B%E4%BC%9A&country=JP)、[実機: イベントページ](https://peatix.com/event/5205318)、[実機: グループ](https://peatix.com/group/16556640)
- チェックイン(JN10・OP08): QR、タップ、名前検索、紙リストの4方式とアシスタントモード — [チェックイン](https://help-organizer.peatix.com/en/support/solutions/articles/44001821727-how-to-check-in-attendees)
- 入金(OP09): 終了後5営業日以内で、終了日より前には払われない — [売上の受取](https://help-organizer.peatix.com/en/support/solutions/articles/44001821780-how-to-receive-the-ticket-sales-for-your-event)
- 手数料(MN01・AC01): 日本は4.9%+99円/枚、無料チケットのみのイベントは手数料なし — [Peatix Pricing](https://help-organizer.peatix.com/en/support/solutions/articles/44001821779-peatix-pricing)
- 定期開催(OP02): 1ページ最大50回。2025-11提供、2026-04にオンライン種別へ対応 — [定期開催](https://help-organizer.peatix.com/en/support/solutions/articles/44002645658-how-to-create-recurring-events)、[2026年のお知らせ一覧](https://help-organizer.peatix.com/en/support/solutions/folders/44001241542)
- 公開範囲(OP03): 公開/限定公開/パスワード保護 — [イベント作成](https://help-organizer.peatix.com/en/support/solutions/articles/44001821716-how-to-create-a-group-an-event-physical-event-)

**根拠の弱い項目**
- AC04は二次のみ。FD03〜FD05・FD07・FD08・FD10は「記載が見つからない」ことによる？で、非対応の確認ではない。
- OP12の請求書払い(2025-07)は、チケット購入側ではなく法人主催者向けの集客サービス(クイックプラン)への支払いで、法人限定・5,500円以上・支払期限4週間(二次の報道) — [Voix](https://voix.jp/?p=47992)。販売リストの注文状況には日本のイベントのみ「Invoice(請求書払い)」があるが、購入側の仕様は未確認 — [参加者管理](https://help-organizer.peatix.com/en/support/solutions/articles/44001821753-how-to-manage-the-event-attendees)
- CR02は公式サービスページが「過去イベントの参加者はフォロワーとして溜まり、次回以降のイベントページ公開時に自動で告知が届く」と記載する一方、ヘルプでは注文画面からフォローされたユーザーと記載があり、自動付与かオプトインかは未確認 — [Peatix 主催者向けページ](https://services.peatix.com/ja)、[無料の集客機能](https://learning.peatix.com/ja/how-to-use/free-customer-attraction)

**日本固有の機能(CSV の note にも記載)**
- 決済(OP12に記載): カード(JCB・Diners含む)・PayPal・コンビニ/ATM(購入者330円、支払期限3日)・銀行振込(35日以内) — [決済方法](https://help-organizer.peatix.com/en/support/solutions/articles/44001821717-what-payment-methods-are-available-on-peatix-)。銀行振込は2025年8月末に開始。購入者が振込手数料を負担し、主催者の手数料は4.9%+99円/枚、決済額は2026-01に提供開始月の約3倍(二次) — [Voix](https://voix.jp/?p=74863)
- グループ・フォロー機能: 2014-07にフォロー機能を導入。新規公開時に通知し、申込時のフォローを促す(DS05・CR02) — [THE BRIDGE 2014-07](https://thebridge.jp/2014/07/peatix-new-feature)
- LINE連携・X連携: LINE通知・LINEログインは公式ヘルプで確認できず。Facebook/Xの共有ボタンのみ。検索でも該当は出なかった。
- 受付アプリ: iPhone「Peatix Organizer」、Android「Peatix Scan」。主催者向けアプリは参加者全員への一斉送信も可 — [App Store](https://apps.apple.com/jp/app/id554600171)

**成長への効きが示唆されている機能(グロース根拠あり)**
- CR01 発見(おすすめ)メール: 取扱の約15%が発見機能経由(2015-03、自社発表) — [THE BRIDGE 2015-03](https://thebridge.jp/2015/03/peatix-5m-funding-new-markets-asia)。自動メールの仕様は [無料の集客機能](https://learning.peatix.com/ja/how-to-use/free-customer-attraction)。
- MN01 手数料の値下げ: 2013-02に6%→2.9%+70円/注文へ下げ、5か月で累計5,000→10,000イベント(相関のみ) — [Value Press 2013-02](https://www.value-press.com/pressrelease/107129)。2026年は4.9%+99円/枚へ上方([Peatix Pricing](https://help-organizer.peatix.com/en/support/solutions/articles/44001821779-peatix-pricing))。
- AC04 競合撤退時の移行: ATND閉鎖(2020-01)に合わせた手数料無料と移行支援(効果の数値なし) — [Impress Internet Watch](https://internet.watch.impress.co.jp/docs/yajiuma/1229961.html)
- CR02・DS05 フォロー: 数値は未確認。主催者の自己申告の事例のみ — [Peatix U 事例](https://learning.peatix.com/ja/)

### Inferences
- Peatix は「参加者の発見面+フォロワーへの自動通知」が機能の中心で、JN01・JN03が❌のため、申込の摩擦は Doorkeeper より高い。
- FD の△(FD01・FD02・FD06・FD09)は汎用チケット・アンケートによる代用であり、食事・店舗連携の標準機能ではない。機能マトリクスで✅と同列に数えない方がよい。
- DS08(公式noteの特集)・AC08(ピーティックス主催のコミュニティテラス)は運営の編集・主催活動で、プロダクト機能というより運営施策に近い。

### Gaps
- 入力として指定された2つの調査ノート(`research_notes/世界のイベント告知サービス 集客施策調査/03_japan.md` と `…/イベント告知サービス グロースストーリー調査/06_japan_community_tools.md`)は、指定パスにも scratchpad 内の他の場所にも存在しなかった。代わりに、同内容を統合したリポジトリ内の `documents/14_競合調査/10_概観/` の4文書(サービス概観・グロースストーリー・参加者獲得・主催者獲得)の Peatix・Doorkeeper の記述を既存ノートとして使い、公式ページで再確認した。
- 検索フィルタの価格帯(DS03)、残席の自動表示(JN05)、キャンセル待ち(JN04)、AI作成支援(OP04)、紹介・アンバサダー(SH04・AC05)、負担者の切替(AC02)は、ヘルプ・機能紹介・実ページのいずれにも記載が見つからず？とした。非対応の確認はできていない。
- 利用規約・コミュニティガイドラインの本文は読めておらず、TS06(外部取引の抑止)は？。TS03の報告記事も題名のみ。
- `help.peatix.com` ドメインの記事URLは、取得すると記事本文ではなく共通ページが返り、内容を読めない場合があった(ホーム刷新の詳細など)。`help-organizer.peatix.com` と `help-attendee.peatix.com` で本文が取れたものだけを根拠にした。
- ログイン後の管理画面は見ていない。実機確認は公開ページ(検索・イベント・グループ)に限り、スクリーンショットIDはない。

## 2. Doorkeeper の77機能は、✅・△・❌・？のどれか

### Takeaway
内訳は ✅36・△23・❌0・？18。申込者の自動メンバー化(CR02)、アカウント不要のメール申込(JN01)、キャンセル待ちの自動繰り上げ(JN04)、宛先を細かく選べるメール配信と権限分け(OP05・OP07・CR04)が強み。❌と確認できたものはなく、非対応の明記は「抽選は現在サポートしていない」(JN03の一部)に留まる。

### Cited Findings

**判定の内訳**
- ✅36: DS01, DS05, DS07, JN01, JN02, JN04, JN05, JN06, JN08, JN09, JN10, JN11, JN12, SH01, SH02, SH06, SH08, OP01, OP02, OP03, OP06, OP07, OP08, OP09, OP10, OP11, AC03, AC06, CR02, CR04, CR07, TS04, TS05, MN01, MN02, MN04
- △23: DS02, DS03, DS04, DS08, JN03, JN07, SH03, SH04, OP05, OP12, AC01, AC04, AC07, CR01, TS02, TS03, FD01, FD02, FD06, FD08, FD09, MN03, MN05
- ❌0
- ？18: DS06, SH05, SH07, OP04, AC02, AC05, AC08, CR03, CR05, CR06, CR08, TS01, TS06, FD03, FD04, FD05, FD07, FD10
- 根拠レベルは 公式54・実機4(JN05, JN08, SH01, SH02)・二次1(AC04)・なし18。

**△の条件一覧**
- DS02: 都道府県単位(全国+47)のみ。駅・現在地・地図は未確認 — [新着一覧](https://www.doorkeeper.jp/events/recently_published)
- DS03: 「日付で探す」のみ。価格・曜日・オンライン/オフラインは未確認 — [検索](https://www.doorkeeper.jp/events?q=%E9%A3%9F%E4%BA%8B)
- DS04・DS08・CR01・AC07・TS02: おすすめはログインページとニュースレターで、審査で承認されたコミュニティだけが対象(ヘルプ記事、日付不明) — [ヘルプ: プロモーション](https://support.doorkeeper.jp/article/34-promotion)
- JN03: 承認制はなく、抽選は「現在サポートしていません」。定員0+キャンセル待ち→手動繰り上げで個別承認を代用でき、却下の機能は記載なし — [ヘルプ: 抽選](https://support.doorkeeper.jp/article/86-article)
- JN07: 無料・会場払いは自分でキャンセル可(メールのリンクならアカウント不要)。前払い済みは主催者へ直接連絡 — [ヘルプ: キャンセル](https://support.doorkeeper.jp/article/17-cancel-event)
- SH03: 主催者が友人知人向けの案内メールを送れる。参加者側の招待導線は未確認 — [仕組み](https://www.doorkeeper.jp/how-it-works)
- SH04: 割引コードで流入元を追跡できる(紹介者単位ではない) — [機能](https://www.doorkeeper.jp/features)
- OP05: 4権限(オーナー/管理者/イベントマネージャー/イベントスタッフ、2023-01-17)で、プロプラン以上 — [ニュース 2023-01-17](https://www.doorkeeper.jp/news/2023/1/17/new-administrator-privileges)
- OP12: 公開APIはアルファ版で公開情報の取得のみ。GA4連携とStripe連携はある。Zoom・Slack・Webhookは未確認 — [API](https://www.doorkeeper.jp/developer/api)
- AC01: 初めてのイベントだけ無料で、2回目から有料プラン(月額1,650円〜)が必要 — [料金](https://www.doorkeeper.jp/pricing)
- AC04: 2020-01のATND閉鎖時の1年無料キャンペーン(二次)。データ移行ツールは未確認 — [Impress Internet Watch](https://internet.watch.impress.co.jp/docs/yajiuma/1229961.html)
- TS03: 著作権侵害の報告窓口(メール)のみ — [著作権侵害の報告](https://www.doorkeeper.jp/report_copyright_infringment)
- FD01・FD02・FD06: 複数チケット種別とカスタム申込フォームで代用 — [機能](https://www.doorkeeper.jp/features)
- FD08: 勉強会向けの会場一覧(収容人数・料金付き)で、飲食店の比較ではない — [勉強会会場](https://www.doorkeeper.jp/%E4%BC%9A%E5%A0%B4)
- FD09: チケットごとの定員のみ — [ヘルプ: イベント作成の流れ](https://support.doorkeeper.jp/article/29-event-flow)
- MN03・MN05: 定額課金の「投げ銭」ランクと会員特典。手数料はDoorkeeper 0%+Stripe 3.60%で全プラン対象(2023-01) — [定額課金](https://www.doorkeeper.jp/news/2023/1/18/patron-feature)

**根拠の強い項目**
- 実機: イベントページで「あと5人参加できます」(JN05)、Googleカレンダー追加(JN08)、OGPとJSON-LD(SH01)、Facebook/Xのシェアボタン(SH02)を確認 — [実機: イベントページ](https://techgym.doorkeeper.jp/events/199857)
- 料金(MN01・MN02): 月額4プラン(1,650/4,400/8,800/17,600円)、前払い99円+2.5%+Stripe 3.60%、無料チケット・会場払い・銀行振込は0円 — [料金](https://www.doorkeeper.jp/pricing)
- キャンセル待ち(JN04): 自動繰り上げ、メール通知、手動繰り上げ — [ヘルプ: キャンセル待ち](https://support.doorkeeper.jp/article/70-waitlist)
- メッセージ(OP07・CR04・JN09): 宛先10区分、送信予約、開催前日リマインドの自動設定 — [ヘルプ: メッセージ](https://support.doorkeeper.jp/article/31-messages)
- 返金(OP09): Stripeで集金した分は管理画面から返金でき、Stripe手数料は主催者負担 — [ヘルプ: 返金](https://support.doorkeeper.jp/article/4-refund-payment)

**根拠の弱い・古い項目**
- OP06・AC03: エクスポートは Excel 形式で、ヘルプは2020-03-31更新。出力項目にメールが含まれるかは未確認 — [ヘルプ: データ出力](https://support.doorkeeper.jp/article/27-download-member-data)
- OP03: コミュニティの公開パスワードの記事は2019-11-08更新で、スターターでは不可 — [ヘルプ: プライベートコミュニティ](https://support.doorkeeper.jp/article/125-private-community)
- DS04・DS08・CR01: プロモーション記事は日付不明で、現行運用か未確認。
- OP01: 「約5分で作成」は既存ノートが引用する自社主張で、今回の再取得では文言を確認できなかった。
- AC04は二次のみ。DS06・FD系などの？は「記載が見つからない」ことによる。

**日本固有の機能(CSV の note にも記載)**
- 決済(OP12に記載): クレジット、銀行振込、コンビニ決済(Stripeの対応を受け2023-01に開始。主催者側で追加手続きが必要) — [ニュース 2023-01-18](https://www.doorkeeper.jp/news/2023/1/18/stripe-konbini-payments)。審査に21〜35日かかる — [ヘルプ: コンビニ決済設定](https://support.doorkeeper.jp/article/182-how-to-enable-conbini-stripe)。請求書払いは法人ビジネスプランの料金支払い(2016-08) — [状況報告 2016-08](https://www.doorkeeper.jp/news/2016/8/22/from-free-to-paid-status-update)
- ログイン: Facebook・X(Twitter)・GitHub・LinkedIn。LINE・Google・Appleは載っていない — [ログイン](https://manage.doorkeeper.jp/user/sign_in)
- X連携: Doorkeeperのツイッターボットがイベントを共有する(ヘルプ記事、日付不明) — [ヘルプ: プロモーション](https://support.doorkeeper.jp/article/34-promotion)。LINE連携はヘルプ検索で該当記事0件。
- グループ・メンバー管理(CR02・CR04): コミュニティ、メンバー化、メンバー向けメッセージ、4権限。

**成長への効きが示唆されている機能(グロース根拠あり)**
- CR02 申込者の自動メンバー化: 終了したイベントを見た人がコミュニティに参加し、次の案内を受けることでメンバーが継続的に増えると公式が説明 — [状況報告 2016-08](https://www.doorkeeper.jp/news/2016/8/22/from-free-to-paid-status-update)。仕様は [仕組み](https://www.doorkeeper.jp/how-it-works)。参加率・リピート率の数値は非公開。
- MN02 主催者向け月額制: 2016-07に有料化を発表し、2016-08に創業以来初めて必要コストを上回る収益(契約数は非公表) — [状況報告 2016-08](https://www.doorkeeper.jp/news/2016/8/22/from-free-to-paid-status-update)、[有料化の理由 2016-07](https://www.doorkeeper.jp/news/2016/7/25/why-charge-organisers)
- JN01 アカウント不要の申込: 既存ノートは「数値なし・弱」と整理(摩擦低減の例として Luma・Partiful と並ぶ)。

### Inferences
- Doorkeeper は「主催者がコミュニティを育てる」機能(メンバー化・宛先別メッセージ・権限・定額課金)が中心で、参加者側の発見・保存(DS06・DS04)は薄い。
- ❌が0件なのは、確認の取り方が「ないと明記」に限られたためで、機能が網羅的という意味ではない。
- 無料で運営できるのは初回イベントだけ(AC01)で、日本の同類(Peatix=無料イベント無料)と固定費の考え方が異なる。

### Gaps
- 料金ページの機能×プランのチェック表は、テキストではどのプランに対応するか読み取れなかった。管理者権限・プライベートコミュニティ・APIがどのプランで使えるかは、ニュースとヘルプの記述以上は確認できない。APIのプラン条件とWebhookの有無は不明。
- 繰り返し(定期)イベントの作成、ブックマーク、LINE通知、AI作成支援は見つからず？。ヘルプの一部記事(複製、公開前プレビュー)は検索結果で題名を確認しただけで、本文のURLは開けなかった(404)ため、根拠URLにしていない。
- 公式ニュースの最終更新は2023-02-22で、2024〜2026年の新機能の公式告知は見つからなかった — [ニュース一覧](https://www.doorkeeper.jp/news)。ブログは取得できた範囲では2024-12-10の記事が最新だった — [ブログ](https://www.doorkeeper.jp/blog)。そのため機能の多くは2023年以前の記述に依拠している。
- 運営主催イベント(AC08)は、既存ノートに「ミートアップ(2014)」の記述があるが公式で未確認。
- 実機確認はイベントページ1件のみ(スクリーンショットIDなし)。管理画面は未確認。

## 3. 2サービスの食い違いと、使うときの注意

### Takeaway
2サービスとも、既存ノートの一部の判定と食い違う点がある。機能マトリクスを作る際は、CSVの note に書いた条件(△の理由、年、二次)を残したまま読む必要がある。

### Cited Findings
- 既存ノートのマトリクスで Peatix の「カレンダー・Wallet」は「－」だが、実ページには「カレンダーに追加」ボタンがあり JN08 を✅にした — [実機](https://peatix.com/event/5191994)。既存ノート側の定義は「－=確認できなかった」で非対応ではない。
- Peatix のコンビニ/ATM払いの購入者手数料は、公式ヘルプが330円 — [決済方法](https://help-organizer.peatix.com/en/support/solutions/articles/44001821717-what-payment-methods-are-available-on-peatix-)。既存ノートは220円(検索要約のみ)と記し、不一致のまま。
- Peatix のログイン手段は、アカウント作成ヘルプがメール・Google・Appleで、参加者向けの初回ガイドがFacebook・Twitter・Google・Apple — [アカウント作成](https://help-attendee.peatix.com/en/support/solutions/articles/44002430435-how-to-create-a-peatix-account)、[初回ガイド](https://help-attendee.peatix.com/en/support/solutions/articles/44001821734-how-to-use-peatix-for-first-time-event-attendees-)。新しい方(2026年時点)を採用。
- Peatix の銀行振込の開始時期は、ヘルプのお知らせが2025-08-25 — [お知らせ一覧(2ページ目)](https://help-organizer.peatix.com/en/support/solutions/folders/44001241542/page/2)、Voix が2025年8月末 — [Voix](https://voix.jp/?p=74863)。一方、主催者向けページは決済の欄に「2026.02.25に銀行振込を追加」と記載し、別の更新(対応範囲の拡大など)を指している可能性がある — [Peatix 主催者向けページ](https://services.peatix.com/ja)。CSV では2025-08末を採用した。
- Peatix 法人向け集客の「1,300社超」は、集客サービスのページで確認できなかった(同ページはクイックプランの予算を「1,200円〜」と「600円〜」の2通りで記載) — [イベント集客サービス](https://services.peatix.com/ja/event-promotion)
- Peatix サービスページは掲載イベント数を「常時25,000以上」と「常時20,000件を超える」の2通りで記載 — [Peatix 主催者向けページ](https://services.peatix.com/ja)
- Doorkeeper の既存ノートの発見面は「△」だが、トピック別・都道府県別の一覧が公開されているため DS07 は✅にした — [人気のトピック](https://www.doorkeeper.jp/topics)

### Inferences
- Peatix と Doorkeeper で両方✅の機能は多く(DS01、DS05、JN02、JN06、JN08〜JN11、SH01、SH02、SH06、SH08、OP01〜OP03、OP06〜OP11、AC06、CR02、TS04・TS05、MN01・MN04)、差が出るのは次のとおり。Doorkeeper のみ✅は JN01・JN04・JN05・JN12・CR04・CR07・MN02(DS07も Peatix は△)。Peatix のみ✅は DS02・DS03・DS06・DS08・AC01・AC07・AC08・CR01。
- 両サービスとも FD(食事・店舗連携)に専用機能は見つからず、Shokujii の固有領域は競合に空いているように見える。ただし、これは「確認できなかった」であって「ない」と確認したものではない。

### Gaps
- WebSearch は12回の上限のうち6回を使った(Peatix の食事会ページ、LINE連携、AI機能、請求書払い、API連携、Doorkeeper の ATND 移行)。LINE連携・AI機能・API連携は該当情報が出ず、否定の確認にはなっていない。
- 公式ページの多くは WebFetch の要約(小型モデルによる抽出)経由で読んでおり、要約が原文と食い違う可能性は残る。重要な値(手数料・条件)は、記事の原文を複数ページで突き合わせた。
