<script setup lang="ts">
import ManualViewer from '@shokujii/base/components/manual/ManualViewer.vue'
import { organizerManual } from '@shokujii/base/manual/organizerManual.js'
</script>

<template>
  <ManualViewer :manual="organizerManual" />
</template>

<route lang="yaml">
meta:
  layout: manage
</route>
