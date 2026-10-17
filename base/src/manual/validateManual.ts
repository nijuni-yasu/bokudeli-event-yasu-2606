import type { ManualDocument } from './types.js'

const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

/**
 * マニュアルデータの整合性を検証し、問題点を日本語メッセージで返す（問題なければ空配列）。
 * テストから呼び出し、セクション ID の重複・更新日の書式・空の本文を検出する。
 */
export const validateManual = (manual: ManualDocument): string[] => {
  const errors: string[] = []
  const seenIds = new Set<string>()

  if (manual.categories.length === 0) {
    errors.push('カテゴリが 1 件もありません')
  }

  for (const category of manual.categories) {
    if (!ID_PATTERN.test(category.id)) {
      errors.push(`カテゴリ ID の形式が不正です: ${category.id}`)
    }
    if (seenIds.has(category.id)) {
      errors.push(`ID が重複しています: ${category.id}`)
    }
    seenIds.add(category.id)
    if (category.sections.length === 0) {
      errors.push(`カテゴリ「${category.title}」にセクションがありません`)
    }
    for (const section of category.sections) {
      if (!ID_PATTERN.test(section.id)) {
        errors.push(`セクション ID の形式が不正です: ${section.id}`)
      }
      if (seenIds.has(section.id)) {
        errors.push(`ID が重複しています: ${section.id}`)
      }
      seenIds.add(section.id)
      if (section.title.trim() === '' || section.summary.trim() === '' || section.where.trim() === '') {
        errors.push(`セクション「${section.id}」のタイトル・概要・開き方のいずれかが空です`)
      }
      if (!DATE_PATTERN.test(section.updatedAt) || Number.isNaN(Date.parse(section.updatedAt))) {
        errors.push(`セクション「${section.id}」の updatedAt が YYYY-MM-DD ではありません: ${section.updatedAt}`)
      }
      if (section.blocks.length === 0) {
        errors.push(`セクション「${section.id}」の本文が空です`)
      }
      for (const block of section.blocks) {
        if ((block.type === 'steps' || block.type === 'list') && block.items.length === 0) {
          errors.push(`セクション「${section.id}」に項目が空の ${block.type} があります`)
        }
        if (block.type === 'image' && block.alt.trim() === '') {
          errors.push(`セクション「${section.id}」の画像に代替テキスト(alt)がありません`)
        }
      }
    }
  }
  return errors
}

/** 検索用に、セクションの全文を 1 つの文字列にまとめる */
export const getSectionSearchText = (section: ManualDocument['categories'][number]['sections'][number]): string => {
  const parts = [section.title, section.summary, section.where]
  for (const block of section.blocks) {
    switch (block.type) {
      case 'paragraph':
      case 'note':
        parts.push(block.text)
        break
      case 'steps':
      case 'list':
        if (block.title != null) parts.push(block.title)
        parts.push(...block.items)
        break
      case 'image':
        parts.push(block.alt)
        if (block.caption != null) parts.push(block.caption)
        break
    }
  }
  return parts.join('\n').toLowerCase()
}
