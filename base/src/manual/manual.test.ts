import { describe, expect, it } from 'vitest'
import { organizerManual } from './organizerManual.js'
import { partnerManual } from './partnerManual.js'
import { getSectionSearchText, validateManual } from './validateManual.js'
import type { ManualDocument } from './types.js'

const validManual: ManualDocument = {
  title: 'テスト',
  intro: '概要',
  categories: [
    {
      id: 'cat-a',
      title: 'カテゴリ',
      sections: [
        {
          id: 'sec-a',
          title: '機能A',
          summary: '機能Aの説明',
          where: 'メニュー > 機能A',
          updatedAt: '2026-10-17',
          blocks: [{ type: 'paragraph', text: '本文' }],
        },
      ],
    },
  ],
}

describe('validateManual', () => {
  it('正しいデータはエラーなし', () => {
    expect(validateManual(validManual)).toEqual([])
  })

  it('セクション ID の重複を検出する', () => {
    const section = validManual.categories[0].sections[0]
    const manual: ManualDocument = {
      ...validManual,
      categories: [{ ...validManual.categories[0], sections: [section, { ...section }] }],
    }
    expect(validateManual(manual).some((e) => e.includes('重複'))).toBe(true)
  })

  it('更新日の書式不正・空の本文・空の手順を検出する', () => {
    const manual: ManualDocument = {
      ...validManual,
      categories: [
        {
          ...validManual.categories[0],
          sections: [
            { ...validManual.categories[0].sections[0], updatedAt: '2026/10/17', blocks: [] },
            {
              ...validManual.categories[0].sections[0],
              id: 'sec-b',
              blocks: [{ type: 'steps', items: [] }],
            },
          ],
        },
      ],
    }
    const errors = validateManual(manual)
    expect(errors.some((e) => e.includes('updatedAt'))).toBe(true)
    expect(errors.some((e) => e.includes('本文が空'))).toBe(true)
    expect(errors.some((e) => e.includes('steps'))).toBe(true)
  })
})

describe('getSectionSearchText', () => {
  it('タイトルと本文が検索対象になる', () => {
    const text = getSectionSearchText({
      ...validManual.categories[0].sections[0],
      blocks: [{ type: 'steps', title: '手順', items: ['公開する'] }],
    })
    expect(text).toContain('機能a')
    expect(text).toContain('公開する')
  })
})

describe.each([
  ['主催者向けマニュアル', organizerManual],
  ['飲食店向けマニュアル', partnerManual],
])('%s', (_name, manual) => {
  it('データ構造が妥当である', () => {
    expect(validateManual(manual)).toEqual([])
  })
})
