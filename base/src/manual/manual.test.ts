import { describe, expect, it } from 'vitest'
import { organizerManual } from './organizerManual.js'
import { partnerManual } from './partnerManual.js'
import { buildNumbering, countSections, getLatestUpdatedAt, getManualAnchorId, parseWhere } from './manualView.js'
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

  it('実在しない更新日を検出する', () => {
    const manual: ManualDocument = {
      ...validManual,
      categories: [
        {
          ...validManual.categories[0],
          sections: [{ ...validManual.categories[0].sections[0], updatedAt: '2026-02-30' }],
        },
      ],
    }
    expect(validateManual(manual).some((e) => e.includes('updatedAt'))).toBe(true)
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

  it('用語・説明・タグも検索対象になる', () => {
    const text = getSectionSearchText({
      ...validManual.categories[0].sections[0],
      blocks: [
        { type: 'terms', items: [{ term: '下書き', text: '作成中です' }] },
        { type: 'tags', items: ['請求書払い'] },
      ],
    })
    expect(text).toContain('下書き')
    expect(text).toContain('作成中です')
    expect(text).toContain('請求書払い')
  })
})

describe('validateManual（terms・tags）', () => {
  it('項目が空の terms・tags と、用語または説明が空の terms を検出する', () => {
    const base = validManual.categories[0].sections[0]
    const manual: ManualDocument = {
      ...validManual,
      categories: [
        {
          ...validManual.categories[0],
          sections: [
            { ...base, id: 'sec-a', blocks: [{ type: 'terms', items: [] }] },
            { ...base, id: 'sec-b', blocks: [{ type: 'tags', items: [] }] },
            { ...base, id: 'sec-c', blocks: [{ type: 'terms', items: [{ term: '', text: '説明' }] }] },
          ],
        },
      ],
    }
    const errors = validateManual(manual)
    expect(errors.some((e) => e.includes('sec-a') && e.includes('terms'))).toBe(true)
    expect(errors.some((e) => e.includes('sec-b') && e.includes('tags'))).toBe(true)
    expect(errors.some((e) => e.includes('sec-c') && e.includes('用語または説明'))).toBe(true)
  })
})

describe('getManualAnchorId', () => {
  it('ID に接頭辞を付ける', () => {
    expect(getManualAnchorId('event-create')).toBe('manual-event-create')
  })
})

describe('parseWhere', () => {
  it('経路を画面の表示名ごとに分解する', () => {
    expect(parseWhere('メニュー > イベント管理 > 概要')).toEqual([['メニュー', 'イベント管理', '概要']])
  })

  it('入り口が複数あるときは経路ごとに分ける', () => {
    expect(parseWhere('メニュー > イベント管理 / メニュー > コミュニティ管理 > レター')).toEqual([
      ['メニュー', 'イベント管理'],
      ['メニュー', 'コミュニティ管理', 'レター'],
    ])
  })

  it('経路でない文は 1 つの要素として返す', () => {
    expect(parseWhere('すべての画面')).toEqual([['すべての画面']])
    expect(parseWhere('サイドメニューにはありません。/community を直接開きます')).toEqual([
      ['サイドメニューにはありません。/community を直接開きます'],
    ])
  })
})

describe('buildNumbering・countSections・getLatestUpdatedAt', () => {
  const manual: ManualDocument = {
    ...validManual,
    categories: [
      validManual.categories[0],
      {
        id: 'cat-b',
        title: 'カテゴリB',
        sections: [
          { ...validManual.categories[0].sections[0], id: 'sec-b', updatedAt: '2026-11-01' },
          { ...validManual.categories[0].sections[0], id: 'sec-c', updatedAt: '2026-09-30' },
        ],
      },
    ],
  }

  it('章と項目に通し番号を振る', () => {
    expect(buildNumbering(manual)).toEqual({
      'cat-a': '1',
      'sec-a': '1-1',
      'cat-b': '2',
      'sec-b': '2-1',
      'sec-c': '2-2',
    })
  })

  it('項目数と最新の更新日を求める', () => {
    expect(countSections(manual)).toBe(3)
    expect(getLatestUpdatedAt(manual)).toBe('2026-11-01')
    expect(getLatestUpdatedAt({ ...manual, categories: [] })).toBeNull()
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
