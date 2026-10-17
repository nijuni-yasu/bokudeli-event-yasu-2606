<script setup lang="ts">
import ManualViewer from '@shokujii/base/components/manual/ManualViewer.vue'
import { organizerManual, type OrganizerScreen } from '@shokujii/base/manual/organizerManual.js'
import {
  getManageCommunityListPath,
  getManageEventListPath,
  getManageNewCommunityPath,
  getManagePath,
} from '@/router/utils'

/** マニュアルの `links` に書かれた画面と、このアプリのパスの対応。画面を足したら、ここにも足す（型で漏れを検出する） */
const screenPaths: Record<OrganizerScreen, string> = {
  manageTop: getManagePath(),
  communityList: getManageCommunityListPath(),
  communityCreate: getManageNewCommunityPath(),
  eventList: getManageEventListPath(),
}
</script>

<template>
  <ManualViewer :manual="organizerManual" :screen-paths="screenPaths" />
</template>

<route lang="yaml">
meta:
  layout: manage
</route>
