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
  /** 画面スクリーンショット。`src` は公開 URL もしくは import した画像パス */
  | { type: 'image'; src: string; alt: string; caption?: string }

export type ManualSection = {
  /** URL ハッシュ・アンカーに使う識別子（マニュアル内で一意、英小文字・数字・ハイフン） */
  id: string
  /** 画面上の機能名 */
  title: string
  /** 何ができる機能か（1〜2 文） */
  summary: string
  /**
   * どこから開くか。画面の表示名を ` > ` でつなぐ（例: `メニュー > イベント管理 > 対象のイベント > 概要`）。
   * 入り口が複数あるときは ` / ` で区切り、それぞれを `メニュー` などの起点から書く。
   * 経路で説明できない場合（サイドメニューにない画面など）は、文で書いてよい。
   */
  where: string
  /** 最終更新日 `YYYY-MM-DD` */
  updatedAt: string
  blocks: ManualBlock[]
}

export type ManualCategory = {
  id: string
  title: string
  sections: ManualSection[]
}

export type ManualDocument = {
  title: string
  intro: string
  categories: ManualCategory[]
}
