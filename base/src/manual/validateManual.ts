import type { ManualDocument } from './types.js'

const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

/** `YYYY-MM-DD` 形式で、実在する日付か（2026-02-30 のような繰り上がる日付は不可） */
const isValidDateString = (value: string): boolean => {
  if (!DATE_PATTERN.test(value)) {
    return false
  }
  const date = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
}

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
      if (section.title.trim() === '' || section.summary.trim() === '' || section.where?.trim() === '') {
        errors.push(`セクション「${section.id}」のタイトル・概要・使う画面のいずれかが空です`)
      }
      for (const link of section.links ?? []) {
        if (link.label.trim() === '') {
          errors.push(`セクション「${section.id}」にラベルが空のリンクがあります`)
        }
        if ('screen' in link && link.screen.trim() === '') {
          errors.push(`セクション「${section.id}」に画面の識別子が空のリンクがあります`)
        }
        if ('href' in link && !link.href.startsWith('https://')) {
          errors.push(`セクション「${section.id}」の外部リンクが https:// で始まっていません: ${link.href}`)
        }
      }
      if (!isValidDateString(section.updatedAt)) {
        errors.push(`セクション「${section.id}」の updatedAt が YYYY-MM-DD ではありません: ${section.updatedAt}`)
      }
      if (section.blocks.length === 0) {
        errors.push(`セクション「${section.id}」の本文が空です`)
      }
      for (const block of section.blocks) {
        if (
          (block.type === 'steps' || block.type === 'list' || block.type === 'terms' || block.type === 'tags') &&
          block.items.length === 0
        ) {
          errors.push(`セクション「${section.id}」に項目が空の ${block.type} があります`)
        }
        if (block.type === 'terms' && block.items.some((item) => item.term.trim() === '' || item.text.trim() === '')) {
          errors.push(`セクション「${section.id}」に用語または説明が空の terms があります`)
        }
        if (block.type === 'quote' && block.text.trim() === '') {
          errors.push(`セクション「${section.id}」に本文が空の quote があります`)
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
  const parts = [section.title, section.summary, section.where ?? '']
  for (const block of section.blocks) {
    switch (block.type) {
      case 'paragraph':
      case 'note':
        parts.push(block.text)
        break
      case 'quote':
        parts.push(block.text)
        if (block.caption != null) parts.push(block.caption)
        break
      case 'steps':
      case 'list':
      case 'tags':
        if (block.title != null) parts.push(block.title)
        parts.push(...block.items)
        break
      case 'terms':
        if (block.title != null) parts.push(block.title)
        parts.push(...block.items.flatMap((item) => [item.term, item.text]))
        break
      case 'image':
        parts.push(block.alt)
        if (block.caption != null) parts.push(block.caption)
        break
    }
  }
  return parts.join('\n').toLowerCase()
}
