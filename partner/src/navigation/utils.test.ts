import { describe, expect, it } from 'vitest'

import { getEventCreatePagePath, getEventPath, getOrderDetailPath } from './utils.js'

describe('navigation utils', () => {
  it('getOrderDetailPath builds order detail path', () => {
    expect(getOrderDetailPath('e1')).toBe('/order/e1')
  })

  it('getEventCreatePagePath is a child of the shop-hosted event list path', () => {
    expect(getEventCreatePagePath()).toBe(`${getEventPath()}/create`)
  })
})
