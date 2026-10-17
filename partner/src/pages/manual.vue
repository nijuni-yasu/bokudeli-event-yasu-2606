<script setup lang="ts">
import ManualViewer from '@shokujii/base/components/manual/ManualViewer.vue'
import { partnerManual } from '@shokujii/base/manual/partnerManual.js'
</script>

<template>
  <ManualViewer :manual="partnerManual" />
</template>
