# 診断レイヤー

SKILL.md の手順から、実施する層の節だけ読む。検索はリポジトリルートで行う。`node_modules`、`package-lock.json`、生成物は検索対象から外す。

検出をそのまま重大度にしない。許容例に当たるか、呼び出し元の認可とセットで守られているかを見てから所見にする。

## CVE

ワークスペースのロックファイルはルートの `package-lock.json` 一つ。`npm audit` はルートで実行する。

```bash
npm audit --json
```

- 終了コードが非ゼロでも、JSON が取れていれば解析する。ネットワーク失敗や lockfile 不整合で JSON が無いときは、層を未完了にする
- `npm audit fix`、`--force`、パッケージの追加削除はしない
- 追加のスキャナ（osv-scanner、snyk、trivy 等）は、この環境に入っていてもインストールしない。ユーザーが明示したときだけ使う
- 集計は `metadata.vulnerabilities` の件数と、各 `vulnerabilities` エントリの `severity`、`via`（文字列でないオブジェクトの `title` / `url` / `range`）、`fixAvailable`
- high 以上は依存経路（`effects` または `nodes`）が分かる範囲で、どの workspace から到達するかを書く。分からなければ「経路不明」とする
- moderate 以下は表にまとめ、個別所見は fix が無く放置されているもの、または直接依存だけにする
- Dependabot の設定不足は CVE の件数に混ぜず、設定層で扱う

## 秘密情報

追跡されているファイルだけを見る。`git grep` は未追跡と gitignore を見ない。

```bash
git grep -n -E 'sk_live_[0-9A-Za-z]|sk_test_[0-9A-Za-z]|whsec_[0-9A-Za-z]|SG\.[0-9A-Za-z_-]{10,}|AKIA[0-9A-Z]{16}|-----BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY-----|xox[baprs]-' \
  -- ':!node_modules' ':!package-lock.json' ':!*.lock'
```

- ヒットした行の値は表示しない。マスクして種別だけ書く
- `.secret` / `.env` / `credentials.json` へのパスが手順やコメントに出ても、そのファイルは開かない
- テストの `sk_test_dummy` や `example` など、明らかに偽物の値は info
- クライアントに載る Firebase の Web API キー（`AIza`）は、このコマンドでは探さない。公開前提の設定と、秘密鍵や service account を混ぜない
- `sk_live_`、`whsec_`、秘密鍵、SendGrid の `SG.` がアプリやドキュメントの平文にあるときは high 以上

## Rules

`firestore.rules` と `storage.rules` を読む。ヘルパー名はファイル側の定義を正とする（例: `isSupport`、`docEnterpriseId`、`isSameEnterprise`、`isEnterpriseEmployee`）。

Firestore:

- `allow read, write: if true` や、認証なしの write
- create では `enterprise_id` / `uid` / `roles` を固定しているのに、update では同じフィールドを制約していない
- `hasOnly` / `diff` だけで、所有者またはテナントの一致が無い（誰が書けるかが別条件になっているか）
- テナントを持つコレクションで、`enterprise_id` の比較に `isSameEnterprise` / `docEnterpriseId` が使われていない。`null` は PF 確定であり、未設定へのフォールバックではない
- クライアントが support 専用や Functions 専用のフィールド（課金状態、ロール、集計カウンタ）を書ける
- `get()` の失敗を許可側に倒している（ドキュメントが無いと allow になる）

Storage:

- 既存の `users` / `communities` / `partners` の `allow read: if true` は、現状の公開読み取りとして info に留める。新規 match で同じ公開読み取りや未認証 write を足しているときは medium 以上
- パスの ID と `request.auth.uid`、またはコミュニティ管理者判定がずれている write
- チャット添付などメンバー限定のパスで、ルールがルームメンバー確認を通っているか

Rules のテスト（`tests/firestore-rules`）が無いこと自体は所見にしない。診断で怪しい match を見つけたとき、対応するテストが無ければ推奨に「Rules テストを足す」と書く。

## アプリ

コード検索で候補を出し、ハンドラ全体を読んでから所見にする。

Callable / HTTP:

- `onCall` で、他人のデータ読み書きや破壊的操作なのに `request.auth` を見ていない
- 引数の user id / community id / enterprise id を、認証ユーザーやメンバーシップと照合していない（IDOR）
- `invoker: 'public'` は一覧にする。未ログイン公開が仕様コメントにあるもの（プロフィールプレビュー等）は info。仕様コメントが無く、秘密データを返すものは high
- `enforceAppCheck` の有無は、enterprise だけ強制している現状を踏まえ、未設定を自動で high にしない。強制していない Callable の一覧を low または info とし、認証そのものが無いものと分けて書く
- `cors: true` や反映元が `*` の HTTP Function は medium 候補。既存の `CORS_ORIGINS` 定数を使っているものは、定数の中身を見てから判断する

テナント:

- `community_account` だけでコミュニティを引き、`enterprise_id` が条件に無い
- `collectionGroup` にテナント条件が無い
- enterprise 経路から、PF 固定（`enterprise_id == null` 決め打ち）のヘルパーを呼んでいる
- `enterprise_id === undefined` を `null`（PF）として扱っている

決済:

- Stripe Webhook が `req.rawBody` と `stripe.webhooks.constructEvent` 以外でイベントを組み立てている
- 署名検証の失敗を 200 で握りつぶしている
- 決済確定が再送で二重にメンバー追加や請求確定をする（べき等性のキーが無い）。無さそう、で終わらせず、処理済み判定の有無をコードで示す

クライアント:

- `v-html` の値が `$t(...)` だけの静的文言なら対象外。ストアやユーザー入力、リッチテキストを渡しているのにサニタイズが無いものを medium 以上
- 外部 URL のホスト検証が `startsWith` のみ
- `target="_blank"` で `rel="noopener noreferrer"` が無いものは、診断では low。件数が多いときは代表箇所と件数にまとめる

## 設定

Dependabot（`.github/dependabot.yml`）:

- `package.json` の `workspaces` と、npm エコシステムの `directory` を突き合わせる
- ルートの lockfile を見ない directory 指定だけになっているときは、CVE 層の `npm audit` 結果と別に medium で書く。ワークスペース追加漏れは「Dependabot が lockfile 全体を見ていない可能性」と書き、設定を直す提案に留める
- `github-actions` が無いときも所見にする

Functions の公開:

- `invoker: 'public'` の一覧はアプリ層と重複させない。設定層では CORS と App Check のカバー範囲だけをまとめる
- Slack / LINE など外部 Webhook は、署名または検証トークンを見ているか。見ていなければ high

ログとドキュメント:

- `console.log` へのトークン、メールアドレス、UID の直書きを新規に見つけたときだけ low 以上。既存のログ方針（`createModuleLogger`）との差分が主眼
- `documents/` に実在の UID やメールが平文で残っていれば medium。値はマスクする
