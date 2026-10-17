---
name: manual-update
description: 主催者画面（user の /manage）と飲食店画面（partner）のアプリ内「マニュアル」を更新する。user / partner / base の画面・操作・文言・機能を追加・変更・削除したとき、PR 作成前に必ず使用する。「マニュアルを更新して」「マニュアルに追記して」「マニュアルも直して」と依頼された時にも使用する。
---

# アプリ内マニュアルの更新

主催者画面・飲食店画面のグローバルメニュー最下部「マニュアル」に表示する本文を、機能の追加・変更に合わせて更新する。**機能変更と同じ PR で更新する**（別 PR・後回しにしない）。

## 正本

| 画面                  | ページ                                                 | 本文データ                           | 配置                                     |
| :-------------------- | :----------------------------------------------------- | :----------------------------------- | :--------------------------------------- |
| 主催者画面（user）    | `user/src/pages/manage/manual.vue`（`/manage/manual`） | `base/src/manual/organizerManual.ts` | `user/src/navigation/manage.ts` 最下部   |
| 飲食店画面（partner） | `partner/src/pages/manual.vue`（`/manual`）            | `base/src/manual/partnerManual.ts`   | `partner/src/navigation/index.ts` 最下部 |

- 型は `base/src/manual/types.ts`、整合性検証は `base/src/manual/validateManual.ts`、表示は `base/src/components/manual/ManualViewer.vue`
- 本文は**平文のみ**（HTML 不可）。UI の固定文言（「目次」等）は `base/src/locales/messages/ja.ts` の `manual`
- 対象外: enterprise / support / 一般参加者向け画面（必要になったら別 Issue）

## 更新が必要になる変更

次のいずれかを含む変更は、マニュアルの該当セクションを更新する。

- 画面・メニュー・ボタン・入力項目・ステップの追加／名称変更／削除
- 操作手順・締切・手数料・公開条件・ステータス遷移の変更
- 新機能の追加（セクションを新設する）

内部リファクタ・バグ修正で利用者の見え方・手順が変わらない場合は不要。不要と判断したら PR 本文に「マニュアル更新: 不要（理由）」と書く。

## 手順

1. 変更が主催者向け・飲食店向けのどちらに効くか判断する（両方に効くなら両方更新）
2. 該当ファイルの `categories[].sections[]` から対象セクションを探す。無ければ最も近いカテゴリに新設する
3. `blocks` を実装に合わせて書き換える
   - 画面上の表記は `ja.ts` の文言と一致させる（ボタン名・項目名を言い換えない）
   - 手順は `steps`、補足は `note`（`info`）、取り消せない操作・金額・締切は `note`（`warning`）にする
   - 実装で確認できないことは書かない
4. そのセクションの `updatedAt` を**今日の日付（YYYY-MM-DD）**に更新する
5. 文章は [`/yomiyasu`](../yomiyasu/SKILL.md) に従う（意味・条件・金額は変えない）
6. `npm -w base run test` で `manual.test.ts`（ID 重複・日付書式・空本文の検証）が通ることを確認する
7. PR 本文の「マニュアル更新」欄に更新したセクションを書く

## スクリーンショット（将来対応）

`ManualBlock` の `image`（`src` / `alt` / `caption`）で追加できる。画像は個人情報・実在ユーザー名を含まないテスト環境のものを使い、容量を圧縮してから置く。
