import type { ManualDocument } from './types.js'

/** 章・項目の `id` 属性と URL ハッシュに付ける接頭辞 */
export const MANUAL_ANCHOR_PREFIX = 'manual-'

export const getManualAnchorId = (id: string): string => `${MANUAL_ANCHOR_PREFIX}${id}`

/**
 * `where`（どこから開くか）を、入り口ごとの経路に分解する。
 * 経路は画面の表示名の並びで、1 つだけの場合は経路ではなく文として扱う（表示側で判断する）。
 */
export const parseWhere = (where: string): string[][] =>
  where
    .split(' / ')
    .map((route) =>
      route
        .split(' > ')
        .map((name) => name.trim())
        .filter((name) => name !== ''),
    )
    .filter((route) => route.length > 0)

/** 章と項目の通し番号を ID から引けるようにする（章は `1`、項目は `1-2`） */
export const buildNumbering = (manual: ManualDocument): Record<string, string> => {
  const numbering: Record<string, string> = {}
  manual.categories.forEach((category, categoryIndex) => {
    numbering[category.id] = `${categoryIndex + 1}`
    category.sections.forEach((section, sectionIndex) => {
      numbering[section.id] = `${categoryIndex + 1}-${sectionIndex + 1}`
    })
  })
  return numbering
}

export const countSections = (manual: ManualDocument): number =>
  manual.categories.reduce((total, category) => total + category.sections.length, 0)

/** 全項目のうち、最も新しい更新日（`YYYY-MM-DD`）。項目がなければ null */
export const getLatestUpdatedAt = (manual: ManualDocument): string | null => {
  const dates = manual.categories.flatMap((category) => category.sections.map((section) => section.updatedAt))
  if (dates.length === 0) {
    return null
  }
  return dates.reduce((latest, date) => (date > latest ? date : latest))
}
