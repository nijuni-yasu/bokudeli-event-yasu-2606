/**
 * アプリ内マニュアルのデータ構造。
 *
 * 本文は平文のみ（HTML は使わない）。画面スクリーンショットは `image` ブロックで後から追加できる。
 * 機能を追加・変更したら、対応するセクションの本文と `updatedAt` を同じ PR で更新する
 * （運用ルールは `.agents/skills/manual-update/SKILL.md`）。
 */

/** 用語（ボタン名・項目名・ステータスなど）と、その説明の組 */
export type ManualTerm = { term: string; text: string }

export type ManualBlock =
  | { type: 'paragraph'; text: string }
  /** 番号付きの操作手順 */
  | { type: 'steps'; title?: string; items: string[] }
  /** 番号なしの箇条書き */
  | { type: 'list'; title?: string; items: string[] }
  /** 用語と説明の対応（定義リスト）。「ラベル: 説明」の形になる項目はこちらを使う */
  | { type: 'terms'; title?: string; items: ManualTerm[] }
  /** メニュー名・タブ名・ステータスなど、短い名称の並び（チップで表示する） */
  | { type: 'tags'; title?: string; items: string[] }
  /** 補足(info) / 注意(warning) */
  | { type: 'note'; variant: 'info' | 'warning'; text: string }
  /** 大きく見せたい一言（ミッションなど）。`caption` は出どころや呼び名 */
  | { type: 'quote'; text: string; caption?: string }
  /** 画面スクリーンショット。`src` は公開 URL もしくは import した画像パス */
  | { type: 'image'; src: string; alt: string; caption?: string }

/**
 * マニュアルから別タブで開くリンク。`label` はボタンに表示する文言をそのまま書く。
 * - `screen`: アプリ内の画面。実際のパスはマニュアルを表示するアプリが決める（`ManualViewer` の `screenPaths`）
 * - `href`: 外部のページ（`https://` から始まる URL）
 */
export type ManualLink<TScreen extends string = string> =
  | { label: string; screen: TScreen }
  | { label: string; href: string }

export type ManualSection<TScreen extends string = string> = {
  /** URL ハッシュ・アンカーに使う識別子（マニュアル内で一意、英小文字・数字・ハイフン） */
  id: string
  /** 画面上の機能名 */
  title: string
  /** 何ができる機能か（1〜2 文） */
  summary: string
  /**
   * どの画面から使うか。画面の表示名を ` > ` でつなぐ（例: `メニュー > イベント管理 > 対象のイベント > 概要`）。
   * 入り口が複数あるときは ` / ` で区切り、それぞれを `メニュー` などの起点から書く。
   * 経路で説明できない場合（サイドメニューにない画面など）は、文で書いてよい。
   * 特定の画面を持たない項目（ミッションなど）では省略する。
   */
  where?: string
  /** 実際の画面や関連ページを開くボタン。`where` の下に表示する */
  links?: ManualLink<TScreen>[]
  /** 最終更新日 `YYYY-MM-DD` */
  updatedAt: string
  blocks: ManualBlock[]
}

export type ManualCategory<TScreen extends string = string> = {
  id: string
  title: string
  sections: ManualSection<TScreen>[]
}

/** `TScreen` には、`links` で使う画面の識別子を並べた型を渡す。アプリ側で全件のパスを用意しているかを型で確かめられる */
export type ManualDocument<TScreen extends string = string> = {
  title: string
  intro: string
  categories: ManualCategory<TScreen>[]
}
