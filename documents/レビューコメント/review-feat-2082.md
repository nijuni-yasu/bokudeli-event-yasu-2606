# ブランチ feat/2082 レビュー記録

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [ ] | RC-1 | 4240504159 | 🟡 修正提案 | 未着手 | 📌 スコープ内 | 🐛 実害 | 🆕 新機能 | M | Functions だけデプロイしても user Hosting の rewrite は載らない<br>`firebase.json` と `deploy_user.yml`<br>本番の管理画面 URL が catch-all のままになり OGP が出ない<br>起動条件と Functions→Hosting の順序は CI 設計の判断が残る |
| [x] | RC-2 | 4240504154 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | — | 🔧 微修正 | S | 管理画面 HTML にホーム用 JSON-LD が残る<br>`injectOgpHtml` の `SEO_HEAD`<br>ページと無関係な構造化データをクローラへ渡す<br>`SEO_HEAD` を空にして fixture で回帰する |
| [x] | RC-3 | 4240499131 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | 新規経路が deprecated alias を使う<br>`handleManageOgpRequest`<br>PF 専用であることが名前から分からない<br>`getPfCommunityByAccount` とテスト mock に差し替える |
| [x] | RC-4 | 5482144397 | 👌 修正不要 | — | — | — | 👀 確認のみ | — | Copilot overview の目次<br>PR レビュー本文<br>実体は RC-3 の inline と同じ<br>目次自体に追加の修正要求は無い |
| [x] | RC-5 | 6106173139 | 👌 修正不要 | — | — | 🔒 セキュリティ | 👀 確認のみ | — | 未認証で説明・カバーを返す<br>管理画面 OGP ハンドラ<br>URL を知る第三者からも取得できる<br>Issue / 計画どおりの共有仕様 |

---

## 評価セッション（2026-10-11 15:26・review-comments-evaluate）

- **評価日時**: 2026-10-11 15:26 JST
- **評価者**: Cursor Agent（`/review-comments-evaluate` auto）
- **ブランチ名**: feat/2082
- **PR**: https://github.com/nijuniinc/bokudeli-event-new/pull/2468
- **Outdated 除外件数**: 0
- **レビュー非該当スキップ件数**: 3
  - 6106128991 Codex Review Summary（接続案内のみ）
  - 6106130648 レビュー依頼の定型文
  - 5482149667 Codex レビュー本文（automated review suggestions と接続案内のみ）
- **重複除外**: 6106173139 の deprecated alias 言及 → RC-3、差分なし
- **手順 4a 自動修正**: RC-2・RC-3（🚨 0件 / 🟡 2件）。RC-1 は CI 起動条件と順序の設計が残るため未着手

### RC 一覧（サマリ）

| 対応 | RC | GitHub id | 評価 | ステータス | PRスコープ | ラベル | 種別 | 工数 | 要約 |
|:----:|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| [ ] | RC-1 | 4240504159 | 🟡 修正提案 | 未着手 | 📌 スコープ内 | 🐛 実害 | 🆕 新機能 | M | Functions だけデプロイしても user Hosting の rewrite は載らない<br>`firebase.json` と `deploy_user.yml`<br>本番の管理画面 URL が catch-all のままになり OGP が出ない<br>起動条件と Functions→Hosting の順序は CI 設計の判断が残る |
| [x] | RC-2 | 4240504154 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | — | 🔧 微修正 | S | 管理画面 HTML にホーム用 JSON-LD が残る<br>`injectOgpHtml` の `SEO_HEAD`<br>ページと無関係な構造化データをクローラへ渡す<br>`SEO_HEAD` を空にして fixture で回帰する |
| [x] | RC-3 | 4240499131 | 🟡 修正提案 | ✅ 対応済み | 📌 スコープ内 | 📏 規約 | 🔧 微修正 | S | 新規経路が deprecated alias を使う<br>`handleManageOgpRequest`<br>PF 専用であることが名前から分からない<br>`getPfCommunityByAccount` とテスト mock に差し替える |
| [x] | RC-4 | 5482144397 | 👌 修正不要 | — | — | — | 👀 確認のみ | — | Copilot overview の目次<br>PR レビュー本文<br>実体は RC-3 の inline と同じ<br>目次自体に追加の修正要求は無い |
| [x] | RC-5 | 6106173139 | 👌 修正不要 | — | — | 🔒 セキュリティ | 👀 確認のみ | — | 未認証で説明・カバーを返す<br>管理画面 OGP ハンドラ<br>URL を知る第三者からも取得できる<br>Issue / 計画どおりの共有仕様 |

---

**識別子**: RC-1（GitHub id: 4240504159）

**レビュワー**: Codex

**指摘箇所**: `firebase.json:141`

**該当コード（レビュー時点の diff）**:

```diff
@@ -135,6 +135,16 @@
           "function": "handleCommunityListSeoRequest",
           "region": "asia-northeast1"
         },
+        {
+          "source": "/manage/event/**",
+          "function": "handleManageOgpRequest",
+          "region": "asia-northeast1"
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P1 Badge](https://img.shields.io/badge/P1-orange?style=flat)</sub></sub>  Functions デプロイ後に user Hosting の rewrite を反映する**

development / production への通常の push では、この `firebase.json` 変更は `.github/workflows/deploy_functions.yml:12-15` を起動しますが、同ワークフローは `:70-75` で `--only functions` を実行するだけであり、`deploy_user.yml:8-10` も `firebase.json` を監視していません。Firebase CLI では `--only functions` は Functions のみ、Hosting の設定は `--only hosting` でデプロイされるため、追加した rewrite は本番環境へ反映されず、管理画面 URL は従来どおり catch-all の `index.html` に流れて OGP が生成されません（[Firebase CLI の partial deployment 一覧](https://firebase.google.com/docs/cli#deploy_specific_firebase_services)）。新 Function のデプロイ成功後に `hosting:user` をデプロイするよう、ワークフローの起動条件と順序を追加してください。

Useful? React with 👍 / 👎.

**コメント要約**: Functions だけデプロイしても user Hosting の rewrite は載らない。`firebase.json` と `deploy_user.yml`。本番の管理画面 URL が catch-all のままになり OGP が出ない。起動条件と Functions→Hosting の順序は CI 設計の判断が残る。

**評価**: 🟡 修正提案

**ステータス**: 未着手

**PRスコープ**: 📌 スコープ内

**ラベル**: 🐛 実害

**変更種別**: 🆕 新機能

**想定工数**: M

**判断理由**: rewrite が Hosting 側に載らない指摘は妥当。`deploy_user.yml` への path 追加だけでも足りず、Functions 成功後に Hosting を載せる順序まで求めている。CI の起動条件と順序は本 PR の自動修正対象外（方針が一意でない・工数 M）。リリース時の user Hosting デプロイ、または `deploy_user.yml` の path / 順序の設計を人間判断に残す。sandbox では `deploy_user` を既に発火済み。

---

**識別子**: RC-2（GitHub id: 4240504154）

**レビュワー**: Codex

**指摘箇所**: `functions/default/src/seo/htmlInjection.ts:58`

**該当コード（レビュー時点の diff）**:

```diff
@@ -45,6 +50,15 @@ export const stripStaticCanonicalLink = (html: string): string =>
  */
 export const stripStaticCanonicalLink = (html: string): string => html.replace(/<link\s+rel="canonical"[^>]*>\s*/i, '')
 
+/** 管理画面向け: title と OGP だけ差し替える。JSON-LD / プリレンダーは付けない */
+export const injectOgpHtml = (html: string, context: OgpPageContext): string => {
+  const documentTitle = buildDocumentTitle(context.pageTitle)
+  const ogpBlock = buildOgpMetaTags(context.ogp)
+  let result = replaceTitle(html, documentTitle)
+  result = replaceSection(result, OGP_BEGIN_TAG, OGP_END_TAG, ogpBlock)
```

**レビュワーのコメント（原文）**:

**<sub><sub>![P2 Badge](https://img.shields.io/badge/P2-yellow?style=flat)</sub></sub>  管理画面レスポンスからホーム用 JSON-LD を除去する**

`user/index.html` の `SEO_HEAD` 区間にはホームページ用の `Organization` / `WebSite` JSON-LD が既に含まれていますが、この処理は title と OGP しか置換しないため、管理画面にもルート URL を示す構造化データがそのまま返ります。「JSON-LD は付けない」という実装意図に反し、クローラへ現在のページと無関係なデータを渡すので、`SEO_HEAD` 区間を空にしてから返し、実際の index.html 相当の fixture で回帰テストしてください。

Useful? React with 👍 / 👎.

**コメント要約**: 管理画面 HTML にホーム用 JSON-LD が残る。`injectOgpHtml` の `SEO_HEAD`。ページと無関係な構造化データをクローラへ渡す。`SEO_HEAD` を空にして fixture で回帰する。

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: —

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: 計画の「JSON-LD は付けない」と一致する。`injectOgpHtml` で `SEO_HEAD` を空にし、fixture に静的 `WebSite` JSON-LD を置いて回帰テストした。

---

**識別子**: RC-3（GitHub id: 4240499131）

**レビュワー**: Copilot

**指摘箇所**: `functions/default/src/ogpRequest.ts:560`

**該当コード（レビュー時点の diff）**:

```diff
@@ -411,10 +466,128 @@ export const handleCommunityOgpRequest: HttpsFunction = https.onRequest(
       const context = buildCommunitySeoContext({ canonicalUrl, communityData, ogp })
       sendSeoHtml(res, indexResult.response, indexResult.html, context)
     } catch (error) {
-      logger.warn('Unexpected error in community SEO handler', { error })
-      if (!res.headersSent) {
-        res.status(500).send('Internal Server Error')
+      sendRecoveredIndexHtml(res, indexResult, {
+        path,
+        message: 'Unexpected error in community SEO handler',
+        error,
+      })
+    }
+  },
+)
+
+type ManagePath = { kind: 'event'; eventId: string } | { kind: 'community'; account: string } | { kind: 'unknown' }
+
+const parseManagePath = (reqPath: string): ManagePath => {
+  const segments = reqPath.split('/').filter((segment) => segment !== '')
+  if (segments[0] !== 'manage') {
+    return { kind: 'unknown' }
+  }
+  if (segments[1] === 'event' && segments[2] !== undefined && segments[2] !== '') {
+    return { kind: 'event', eventId: segments[2] }
+  }
+  if (segments[1] === 'community' && segments[2] !== undefined && segments[2] !== '') {
+    return { kind: 'community', account: segments[2].toLowerCase() }
+  }
+  return { kind: 'unknown' }
+}
+
+const createDefaultOgp = (site: string, url: string): OgpMetaContext => ({
+  site,
+  url,
+  image: `${site}/shokujii_ogp.png`,
+  imageType: DEFAULT_OGP_IMAGE_TYPE,
+  title: '',
+  description: '',
+})
+
+export const handleManageOgpRequest: HttpsFunction = https.onRequest(
+  {
+    region: 'asia-northeast1',
+    memory: '1GiB',
+  },
+  async (req, res) => {
+    const site = resolveRequestSite(req)
+    if (site == null) {
+      res.status(400).send('Bad Request')
+      return
+    }
+
+    const managePath = parseManagePath(req.path)
+    const path = req.path
+    const eventId = managePath.kind === 'event' ? managePath.eventId : undefined
+
+    let indexResult: IndexHtmlResult | undefined
+    try {
+      indexResult = await fetchIndexHtml()
+      if (indexResult === undefined) {
+        sendMissingIndexHtml(res, { path, eventId })
+        return
      }
+
+      if (managePath.kind === 'unknown') {
+        sendNoindexSpaHtml(res, indexResult.response, indexResult.html)
+        return
+      }
+
+      if (managePath.kind === 'event') {
+        const eventData = await getEvent(managePath.eventId)
+        if (eventData === undefined || eventData.is_deleted || eventData.enterprise_id != null) {
+          sendNoindexSpaHtml(res, indexResult.response, indexResult.html)
+          return
+        }
+
+        const canonicalUrl = `${site}/manage/event/${managePath.eventId}`
+        const ogp = createDefaultOgp(site, canonicalUrl)
+        try {
+          const storagePath = getEventCoverStoragePath(eventData.community_id, managePath.eventId)
+          const [metadata] = await getStorage().bucket().file(storagePath).getMetadata()
+          applyCoverImageFromMetadata(ogp, storagePath, metadata)
+        } catch (error) {
+          logger.warn('Failed to get storage metadata for event cover image', { error })
+        }
+
+        sendManageOgpHtml(res, indexResult.response, indexResult.html, {
+          pageTitle: eventData.event_name,
+          ogp: {
+            ...ogp,
+            title: toOgpExcerpt(eventData.event_name),
+            description: toOgpExcerpt(eventData.event_desc),
+          },
+        })
+        return
+      }
+
+      const communityData = await getCommunityByAccount(managePath.account)
```

**レビュワーのコメント（原文）**:

[nits] `getCommunityByAccount` は PF 専用であることが名前から分からない deprecated alias で、定義側でも新規コードは `getPfCommunityByAccount` を使うよう明記されています（`functions/default/src/stores/community.ts:221-222`）。新しい管理画面経路では `getPfCommunityByAccount` に差し替え、テストの mock/import も同じ名前へ更新してください。

**コメント要約**: 新規経路が deprecated alias を使う。`handleManageOgpRequest`。PF 専用であることが名前から分からない。`getPfCommunityByAccount` とテスト mock に差し替える。

**評価**: 🟡 修正提案

**ステータス**: ✅ 対応済み

**PRスコープ**: 📌 スコープ内

**ラベル**: 📏 規約

**変更種別**: 🔧 微修正

**想定工数**: S

**判断理由**: store のコメントどおり新規経路は `getPfCommunityByAccount` を使う。公開 SEO ハンドラの既存 alias は変えていない。管理画面経路とテスト mock を差し替えた。

---

**識別子**: RC-4（GitHub id: 5482144397）

**レビュワー**: Copilot

**指摘箇所**: （インライン指摘なし）

**該当コード（レビュー時点の diff）**:

```diff
（インライン指摘なし）
```

**レビュワーのコメント（原文）**:

<!-- ccr-overview-v2 -->

### 🟢 Approval recommended

主要動作と失敗時の回復経路は適切に実装・テストされており、残る指摘は非ブロッキングなdeprecated aliasの使用のみです。

<details open>
<summary><strong>1 open finding</strong></summary>

- <picture><source media="(prefers-color-scheme: dark)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.svg"><img src="https://github.githubassets.com/static/images/icons/copilot-code-review/low-v2-light.png" alt="Low severity" width="62" height="18" align="texttop"></picture> [Replace deprecated getCommunityByAccount alias with getPfCommunityByAccount](https://github.com/nijuniinc/bokudeli-event-new/pull/2468#discussion_r4240499131) · New
</details>

<details>
<summary><strong>What changed in this PR</strong></summary>

管理画面向けOGP生成と、OGP生成失敗時のSPAフォールバックを追加するPRです。

**Changes:**
- 管理画面へtitle・OGPを注入
- Firestore等の障害時にindex.htmlを200で返却
- Hosting rewrite、テスト、仕様概要を更新

| File | Description |
| ---- | ----------- |
| `functions/​default/​src/​seo/​htmlInjection.ts` | 管理画面用OGP注入を追加 |
| `functions/​default/​src/​seo/​htmlInjection.test.ts` | OGP注入を検証 |
| `functions/​default/​src/​ogpRequest.ts` | フォールバックと管理画面ハンドラを実装 |
| `functions/​default/​src/​ogpRequest.test.ts` | 各レスポンス条件を検証 |
| `functions/​default/​src/​index.ts` | 新Functionをexport |
| `firebase.json` | 管理画面rewriteを追加 |
| `documents/​00_仕様概要/​01_仕様概要.md` | OGP Functionを追記 |
</details>

🧠 **Review effort:** Balanced

---

💡 Configure MCP servers for context-aware, tailored reviews. <a href="https://docs.github.com/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review?tool=webui#mcp-servers-and-agent-skills" class="Link--inTextBlock" target="_blank" rel="noopener noreferrer">Learn more in the docs.</a>

**コメント要約**: Copilot overview の目次。PR レビュー本文。実体は RC-3 の inline と同じ。目次自体に追加の修正要求は無い。

**評価**: 👌 修正不要

**ステータス**: —

**PRスコープ**: —

**ラベル**: —

**変更種別**: 👀 確認のみ

**想定工数**: —

**判断理由**: `#discussion_r4240499131` は RC-3 として評価・対応済み。overview 本文にそれ以外の修正要求は無い。

---

**識別子**: RC-5（GitHub id: 6106173139）

**レビュワー**: Copilot

**指摘箇所**: （インライン指摘なし）

**該当コード（レビュー時点の diff）**:

```diff
（インライン指摘なし）
```

**レビュワーのコメント（原文）**:

> @codex この PR の Files changed をコードレビューしてください。指摘は shokujii-code-review チェックリストに沿って日本語でお願いします。
>
> @copilot この PR の Files changed をコードレビューしてください。指摘は shokujii-code-review チェックリストに沿って日本語でお願いします。

🟡 **修正提案** [🔒セキュリティ/M]: `/manage/event/:eventId` と `/manage/community/:account` は認証なしで `event_desc` / `community_desc` とカバー画像を OGP に注入し、非公開・未承認データも対象になります。`noindex` と `private, no-store` はアクセス制御ではなく、URLを知る第三者やSNSクローラから取得可能です。URLを知る人すべてへの情報公開を意図する仕様か確認し、未認証で返すデータ範囲を明確にしてください。

`getCommunityByAccount` の deprecated alias 使用（`ogpRequest.ts:560`）は、すでに未解決の inline 指摘があります: https://github.com/nijuniinc/bokudeli-event-new/pull/2468#discussion_r4240499131

利用可能な GitHub 連携では新しい inline review comment を作成できないため、この返信でレビュー結果を報告します。

**コメント要約**: 未認証で説明・カバーを返す。管理画面 OGP ハンドラ。URL を知る第三者からも取得できる。Issue / 計画どおりの共有仕様。

**評価**: 👌 修正不要

**ステータス**: —

**PRスコープ**: —

**ラベル**: 🔒 セキュリティ

**変更種別**: 👀 確認のみ

**想定工数**: —

**判断理由**: #2082 と計画は、未ログインのクローラがプレビューを作れるよう、限定公開・未承認でも管理 URL では名前・説明・カバーを出すと決めている。`noindex` と `private, no-store` は検索インデックス抑制とキャッシュ抑制であり、URL を知る人への共有を止めるものではない。alias 部分は RC-3 と重複。
