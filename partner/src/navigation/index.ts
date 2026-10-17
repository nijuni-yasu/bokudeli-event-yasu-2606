import type { HorizontalNavItems, VerticalNavItems } from '@layouts/types'
import { getManualPath, getMenuPath, getOptionsPath, getOrderPath, getShopPath } from './utils'
import {
  mdiHome,
  mdiStorefrontOutline,
  mdiFoodForkDrink,
  mdiFormatListCheckbox,
  mdiTruckOutline,
  mdiBookOpenPageVariantOutline,
  mdiHeartOutline,
} from '@mdi/js'

export const useNavItems = (): HorizontalNavItems | VerticalNavItems => {
  const { t: $t } = useI18n()
  return [
    {
      title: $t('navigation.home'),
      to: { path: '/' },
      icon: { icon: mdiHome },
    },
    {
      title: $t('navigation.shop'),
      to: { path: getShopPath() },
      icon: { icon: mdiStorefrontOutline },
    },
    {
      title: $t('navigation.menu'),
      to: { path: getMenuPath() },
      icon: { icon: mdiFoodForkDrink },
    },
    {
      title: $t('navigation.option'),
      to: { path: getOptionsPath() },
      icon: { icon: mdiFormatListCheckbox },
    },
    {
      title: $t('navigation.order'),
      to: { path: getOrderPath() },
      icon: { icon: mdiTruckOutline },
    },
    {
      title: $t('navigation.shokujii'),
      href: 'https://shokujii.jp/',
      target: '_blank',
      icon: { icon: mdiHeartOutline },
    },
    {
      title: $t('navigation.about'),
      href: 'https://about.shokujii.jp/',
      target: '_blank',
      icon: { icon: mdiHeartOutline },
    },
    {
      title: $t('manual.navigation'),
      to: { path: getManualPath() },
      icon: { icon: mdiBookOpenPageVariantOutline },
    },
  ]
}
