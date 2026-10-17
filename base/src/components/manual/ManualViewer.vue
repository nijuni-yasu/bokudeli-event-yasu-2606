<script setup lang="ts">
import { mdiMagnify, mdiInformationOutline, mdiAlertOutline, mdiFormatListBulleted } from '@mdi/js'
import { useDisplay } from 'vuetify'
import { getSectionSearchText } from '@shokujii/base/manual/validateManual.js'
import type { ManualCategory, ManualDocument } from '@shokujii/base/manual/types.js'

const props = defineProps<{
  manual: ManualDocument
}>()

const { t: $t } = useI18n()
const { mdAndUp } = useDisplay()
const route = useRoute()

/** clearable の v-text-field はクリア時に null を設定する */
const keyword = ref<string | null>('')
const isTocOpen = ref<number[]>([])

const SECTION_ANCHOR_PREFIX = 'manual-'
const anchorOf = (id: string) => `${SECTION_ANCHOR_PREFIX}${id}`

/** 検索キーワードに一致するセクションだけを残したカテゴリ一覧 */
const filteredCategories = computed<ManualCategory[]>(() => {
  const word = (keyword.value ?? '').trim().toLowerCase()
  if (word === '') {
    return props.manual.categories
  }
  return props.manual.categories
    .map((category) => ({
      ...category,
      sections: category.sections.filter((section) => getSectionSearchText(section).includes(word)),
    }))
    .filter((category) => category.sections.length > 0)
})

const scrollToSection = (id: string) => {
  document.getElementById(anchorOf(id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  isTocOpen.value = []
}

const scrollToHash = async () => {
  const hash = route.hash.replace(/^#/, '')
  if (hash === '') {
    return
  }
  await nextTick()
  document.getElementById(hash.startsWith(SECTION_ANCHOR_PREFIX) ? hash : anchorOf(hash))?.scrollIntoView()
}

onMounted(scrollToHash)

// 同じ画面内でハッシュだけが変わる遷移（リンク・戻る/進む）にも追従する
watch(() => route.hash, scrollToHash)
</script>

<template>
  <div class="manual-viewer">
    <h1 class="text-h4 mb-2">{{ manual.title }}</h1>
    <p class="text-body-1 mb-6">{{ manual.intro }}</p>

    <v-text-field
      v-model="keyword"
      :prepend-inner-icon="mdiMagnify"
      :label="$t('manual.search_label')"
      :placeholder="$t('manual.search_placeholder')"
      clearable
      hide-details
      density="comfortable"
      class="mb-6"
    />

    <div class="manual-viewer__body">
      <aside class="manual-viewer__toc">
        <template v-if="mdAndUp">
          <v-card variant="outlined">
            <v-card-title class="text-subtitle-1">{{ $t('manual.toc') }}</v-card-title>
            <v-list density="compact" nav>
              <template v-for="category of filteredCategories" :key="category.id">
                <v-list-subheader>{{ category.title }}</v-list-subheader>
                <v-list-item
                  v-for="section of category.sections"
                  :key="section.id"
                  :title="section.title"
                  @click="scrollToSection(section.id)"
                />
              </template>
            </v-list>
          </v-card>
        </template>
        <v-expansion-panels v-else v-model="isTocOpen" multiple>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-icon :icon="mdiFormatListBulleted" class="me-2" />
              {{ $t('manual.toc') }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-list density="compact" nav>
                <template v-for="category of filteredCategories" :key="category.id">
                  <v-list-subheader>{{ category.title }}</v-list-subheader>
                  <v-list-item
                    v-for="section of category.sections"
                    :key="section.id"
                    :title="section.title"
                    @click="scrollToSection(section.id)"
                  />
                </template>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </aside>

      <div class="manual-viewer__content">
        <p v-if="filteredCategories.length === 0" class="text-body-1">{{ $t('manual.no_result') }}</p>

        <section v-for="category of filteredCategories" :id="anchorOf(category.id)" :key="category.id" class="mb-8">
          <h2 class="text-h5 mb-4">{{ category.title }}</h2>

          <v-card
            v-for="section of category.sections"
            :id="anchorOf(section.id)"
            :key="section.id"
            variant="outlined"
            class="manual-viewer__section mb-4"
          >
            <v-card-item>
              <v-card-title class="text-h6 text-wrap">{{ section.title }}</v-card-title>
              <v-card-subtitle class="text-wrap">{{ $t('manual.where', [section.where]) }}</v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <p class="text-body-1 mb-4">{{ section.summary }}</p>

              <template v-for="(block, i) of section.blocks" :key="i">
                <p v-if="block.type === 'paragraph'" class="text-body-1 mb-4">{{ block.text }}</p>

                <div v-else-if="block.type === 'steps'" class="mb-4">
                  <p v-if="block.title != null" class="text-subtitle-2 mb-1">{{ block.title }}</p>
                  <ol class="manual-viewer__list">
                    <li v-for="(item, j) of block.items" :key="j" class="text-body-1">{{ item }}</li>
                  </ol>
                </div>

                <div v-else-if="block.type === 'list'" class="mb-4">
                  <p v-if="block.title != null" class="text-subtitle-2 mb-1">{{ block.title }}</p>
                  <ul class="manual-viewer__list">
                    <li v-for="(item, j) of block.items" :key="j" class="text-body-1">{{ item }}</li>
                  </ul>
                </div>

                <v-alert
                  v-else-if="block.type === 'note'"
                  :type="block.variant === 'warning' ? 'warning' : 'info'"
                  :icon="block.variant === 'warning' ? mdiAlertOutline : mdiInformationOutline"
                  variant="tonal"
                  density="compact"
                  class="mb-4"
                >
                  {{ block.text }}
                </v-alert>

                <figure v-else-if="block.type === 'image'" class="mb-4">
                  <v-img :src="block.src" :alt="block.alt" max-width="720" />
                  <figcaption v-if="block.caption != null" class="text-caption mt-1">{{ block.caption }}</figcaption>
                </figure>
              </template>

              <p class="text-caption text-medium-emphasis mb-0">{{ $t('manual.updated_at', [section.updatedAt]) }}</p>
            </v-card-text>
          </v-card>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manual-viewer {
  max-inline-size: 1100px;
  margin-inline: auto;

  &__body {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;

    @media (min-width: 960px) {
      grid-template-columns: 260px minmax(0, 1fr);
      align-items: start;
    }
  }

  &__toc {
    @media (min-width: 960px) {
      position: sticky;
      inset-block-start: 88px;
      max-block-size: calc(100vh - 112px);
      overflow-y: auto;
    }
  }

  &__section {
    scroll-margin-block-start: 88px;
  }

  &__list {
    padding-inline-start: 1.5em;

    li + li {
      margin-block-start: 4px;
    }
  }
}

section[id^='manual-'] {
  scroll-margin-block-start: 88px;
}
</style>
