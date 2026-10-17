<script setup lang="ts">
import ManualViewer from '@shokujii/base/components/manual/ManualViewer.vue'
import { partnerManual, type PartnerScreen } from '@shokujii/base/manual/partnerManual.js'
import {
  getCommunityPath,
  getEventCreatePagePath,
  getEventPath,
  getHomePath,
  getMenuPath,
  getOptionsPath,
  getOrderPath,
  getShopPath,
} from '@/navigation/utils'

/** マニュアルの `links` に書かれた画面と、このアプリのパスの対応。画面を足したら、ここにも足す（型で漏れを検出する） */
const screenPaths: Record<PartnerScreen, string> = {
  home: getHomePath(),
  shop: getShopPath(),
  menu: getMenuPath(),
  options: getOptionsPath(),
  order: getOrderPath(),
  hostCommunity: getCommunityPath(),
  hostEvents: getEventPath(),
  hostEventCreate: getEventCreatePagePath(),
}
</script>

<template>
  <ManualViewer :manual="partnerManual" :screen-paths="screenPaths" />
</template>
