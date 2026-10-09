---
name: shokujii-security-audit
description: Shokujii のサービスセキュリティ診断。CVE（npm audit）に加え、秘密情報、Firestore / Storage Rules、テナント分離、Callable 認可、Stripe 署名、v-html、Dependabot の対象範囲を報告する。診断のみで、npm audit fix や lockfile 更新、Rules 変更、デプロイ、exploit の再現はしない。「セキュリティ診断」「脆弱性スキャン」「CVE」「npm audit」「依存関係の脆弱性」「Rules の穴」「秘密情報が無いか」で必ず使う。PR 差分のコードレビューは shokujii-code-review、ブランチ差分の security-review サブエージェントは review-security を使う。
---

# サービスセキュリティ診断（Shokujii）

サービス全体（または指定した層）を静的に見て、日本語の診断レポートを出す。

CVE は依存パッケージの既知欠陥だけを示す。認可・テナント・Rules・秘密情報・決済署名は別の層として、同じレポートに並べる。

## このスキルがしないこと

診断は **報告まで**。次は、ユーザーが別途「直して」と明示するまで実行しない。

- `npm audit fix`、`package-lock.json` の更新、依存の上げ下げ
- `firestore.rules` / `storage.rules` / Functions / アプリコードの修正
- デプロイ、本番や development の Firebase プロジェクトへの読み書き
- ポートスキャン、本番 URL への侵入、認証の突破を試すリクエスト
- バイパス手順、ペイロード、exploit の再現。所見は「どの不変条件が守られていないか」と「影響」までにする

秘密情報:

- `.secret`、`.env`、`.env.*`、サービスアカウント JSON、認証情報ファイルは **開かない**（パスが出ても Read しない）
- レポート・チャット・コミットに秘密の値を書かない。残すのは種別、ファイル、行、文字数だけにする。値の一部も出さない

## 他スキルとの分担

| 依頼 | 使うもの |
| :--- | :--- |
| サービス診断、CVE、依存の既知脆弱性、Rules や認可の横断チェック | **本スキル** |
| PR / 実装差分の規約レビュー | `shokujii-code-review` |
| ブランチ差分だけの security review | `review-security`（Cursor の security-review） |
| ログの ERROR 解析 | `gcp-logging-error-analysis` |

差分レビューのついでに本スキルを走らせない。ユーザーが診断を頼んだときだけ使う。

## 範囲

ユーザーが層を指定したら、その層だけ実行し、他は「未実施」と書く。指定が無ければ全層。

| 指定の例 | 層 |
| :--- | :--- |
| CVE、npm audit、依存関係 | CVE |
| 秘密情報、API キー、トークン | 秘密情報 |
| Rules、firestore.rules、storage.rules | Rules |
| 認可、テナント、Callable、Stripe、XSS | アプリ |
| Dependabot、CORS、App Check、public invoker | 設定 |
| セキュリティ診断、脆弱性チェック（指定なし） | 全層 |

詳細な見方は [references/layers.md](references/layers.md)。該当層の節だけ読む。

## 手順

1. リポジトリルートで作業する。`node_modules` が無く `npm audit` が依存解決に失敗するときは、その旨を書いて CVE 層を「未完了」にする。診断の途中で `npm install` はしない。
2. 選んだ層を [references/layers.md](references/layers.md) の順で実行する。全層のときは CVE → 秘密情報 → Rules → アプリ → 設定。
3. コマンド出力やファイルから、重大度を付ける前に「既知の許容」と「新規の穴」を分ける。layers.md の許容例を、現状のコードで再確認してから info に落とす。
4. 下記テンプレートでレポートする。所見がゼロでも、実行したコマンドと見なかった範囲を書く。
5. ファイルは変更しない。診断用の一時 JSON をリポジトリに残さない。

## 重大度

| 重大度 | 目安 |
| :--- | :--- |
| critical | 未認証で他テナントや他ユーザーの書き込み、本番秘密鍵の露出、署名検証のない決済確定 |
| high | 認証ユーザーによる権限昇格、`enterprise_id` をまたぐ読み書き、high 以上の CVE で到達可能な依存 |
| medium | 影響が限定される認可の抜け、moderate CVE、秘密情報の可能性があるがフィクスチャの疑い |
| low | 防御の厚み（App Check 未強制など、仕様で許容と読めるもの）、low CVE |
| info | 既知の公開設定、対応不要と説明できる検出 |

npm audit の `critical` / `high` / `moderate` / `low` は、それぞれ critical / high / medium / low に対応させる。advisory の URL とパッケージ名は監査 JSON に書かれているものだけを使う。無い CVE 番号を作らない。

## レポート

```markdown
# セキュリティ診断レポート

## 範囲

- 実施した層:
- 対象ブランチ / コミット:
- 未実施の層と理由:

## 要約

| 重大度 | 件数 |
| :--- | :--- |
| critical | 0 |
| high | 0 |
| medium | 0 |
| low | 0 |
| info | 0 |

## 所見

### S-1 タイトル

- 重大度:
- 層: CVE / 秘密情報 / Rules / アプリ / 設定
- 箇所: `path:line` またはパッケージ名
- 内容:
- 影響:
- 根拠: 監査 URL、ルール上の条件、検索で当たった箇所。推測は「推測」と書く
- 推奨: このリポジトリで直す / 別 Issue / 対応不要
- この診断では修正していない

## 見なかったもの

- 実行していないコマンド、開いていないファイル（`.secret` 等）
```

所見は重大度の高い順。同一層のなかではパス順。対応不要は info として残し、捨てない。
