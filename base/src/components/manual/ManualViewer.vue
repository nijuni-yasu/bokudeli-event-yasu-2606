<script setup lang="ts">
import {
  mdiBookOpenPageVariantOutline,
  mdiCalendarCheckOutline,
  mdiClose,
  mdiFormatListBulleted,
  mdiMagnify,
  mdiTextSearchVariant,
} from '@mdi/js'
import { useEventListener } from '@vueuse/core'
import ManualSection from '@shokujii/base/components/manual/ManualSection.vue'
import ManualToc from '@shokujii/base/components/manual/ManualToc.vue'
import {
  MANUAL_ANCHOR_PREFIX,
  buildNumbering,
  countSections,
  getLatestUpdatedAt,
  getManualAnchorId,
} from '@shokujii/base/manual/manualView.js'
import { getSectionSearchText } from '@shokujii/base/manual/validateManual.js'
import type { ManualCategory, ManualDocument } from '@shokujii/base/manual/types.js'

const props = defineProps<{
  manual: ManualDocument
  /**
   * 各項目の `links` に書かれた画面（`screen`）を、アプリのパスに対応づける。
   * パスの定義はアプリ側の `router/utils` を使い、ここにはパスを書かない
   */
  screenPaths?: Record<string, string>
}>()

const route = useRoute()

/** 現在読んでいる項目とみなす、画面上端からの距離（固定ヘッダーの高さを含む） */
const SPY_OFFSET = 140
/** 下から開く目次を閉じたあと、画面のスクロール固定が外れるのを待つ間隔と回数 */
const SCROLL_UNLOCK_POLL_MS = 30
const SCROLL_UNLOCK_MAX_POLLS = 20
/** 下から開く目次が開いてから、強調した項目へ送るまでの待ち時間（表示の準備を待つ） */
const SHEET_SCROLL_DELAY_MS = 50

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

/** clearable の v-text-field はクリア時に null を設定する */
const keyword = ref<string | null>('')
const isTocSheetOpen = ref(false)
const activeId = ref<string | null>(null)
const tocScrollRef = ref<HTMLElement | null>(null)

const numbering = computed(() => buildNumbering(props.manual))
const totalCount = computed(() => countSections(props.manual))
const latestUpdatedAt = computed(() => getLatestUpdatedAt(props.manual))

const searchWord = computed(() => (keyword.value ?? '').trim().toLowerCase())
const isSearching = computed(() => searchWord.value !== '')

/** 検索キーワードに一致する項目だけを残した章の一覧 */
const filteredCategories = computed<ManualCategory[]>(() => {
  if (!isSearching.value) {
    return props.manual.categories
  }
  return props.manual.categories
    .map((category) => ({
      ...category,
      sections: category.sections.filter((section) => getSectionSearchText(section).includes(searchWord.value)),
    }))
    .filter((category) => category.sections.length > 0)
})

const visibleSectionIds = computed(() =>
  filteredCategories.value.flatMap((category) => category.sections.map((section) => section.id)),
)
const resultCount = computed(() => visibleSectionIds.value.length)

const padChapterNumber = (id: string) => (numbering.value[id] ?? '').padStart(2, '0')

const clearKeyword = () => {
  keyword.value = ''
}

// 目次の強調（スクロール位置から、いま読んでいる項目を求める）
// 目次で選んだ項目は、読む人が自分でスクロールするまで強調したままにする
// （ページ末尾の短い項目は、画面の上端まで届かないため、位置からは求められない）
let pinnedId: string | null = null

const updateActive = () => {
  // 目次を開いている間は、画面のスクロールが固定されて位置を測れない
  if (isTocSheetOpen.value) {
    return
  }
  const ids = visibleSectionIds.value
  if (ids.length === 0) {
    activeId.value = null
    return
  }
  if (pinnedId != null && ids.includes(pinnedId)) {
    activeId.value = pinnedId
    return
  }
  const isPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  if (isPageBottom) {
    activeId.value = ids[ids.length - 1]
    return
  }
  let current: string | null = null
  for (const id of ids) {
    const element = document.getElementById(getManualAnchorId(id))
    if (element == null) {
      continue
    }
    if (element.getBoundingClientRect().top <= SPY_OFFSET) {
      current = id
    } else {
      break
    }
  }
  activeId.value = current
}

let isUpdateScheduled = false
const scheduleUpdateActive = () => {
  if (isUpdateScheduled) {
    return
  }
  isUpdateScheduled = true
  requestAnimationFrame(() => {
    isUpdateScheduled = false
    updateActive()
  })
}

useEventListener(window, 'scroll', scheduleUpdateActive, { passive: true })
useEventListener(window, 'resize', scheduleUpdateActive, { passive: true })
useEventListener(
  window,
  ['wheel', 'touchmove', 'keydown', 'pointerdown'],
  () => {
    pinnedId = null
  },
  { passive: true },
)

watch(visibleSectionIds, async () => {
  await nextTick()
  updateActive()
})

// 強調した項目が、固定表示の目次の中で隠れないようにする
watch(activeId, async (id) => {
  if (id == null) {
    return
  }
  await nextTick()
  const container = tocScrollRef.value
  const link = container?.querySelector<HTMLElement>(`[data-toc-id="${id}"]`)
  if (container == null || link == null || container.offsetParent == null) {
    return
  }
  const margin = 12
  const containerRect = container.getBoundingClientRect()
  const linkRect = link.getBoundingClientRect()
  if (linkRect.top < containerRect.top + margin) {
    container.scrollTop -= containerRect.top + margin - linkRect.top
  } else if (linkRect.bottom > containerRect.bottom - margin) {
    container.scrollTop += linkRect.bottom - (containerRect.bottom - margin)
  }
})

// 下から開く目次は、いま読んでいる項目が見える位置まで送ってから見せる。閉じたときは強調を測り直す
watch(isTocSheetOpen, async (isOpen) => {
  if (!isOpen) {
    scheduleUpdateActive()
    return
  }
  if (activeId.value == null) {
    return
  }
  await nextTick()
  await sleep(SHEET_SCROLL_DELAY_MS)
  document
    .querySelector<HTMLElement>(`.manual-sheet [data-toc-id="${activeId.value}"]`)
    ?.scrollIntoView({ block: 'center' })
})

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const scrollToAnchor = (anchorId: string, behavior: ScrollBehavior) => {
  document.getElementById(anchorId)?.scrollIntoView({ behavior, block: 'start' })
}

/** 下から開く目次を閉じたあとは、画面のスクロール固定が外れるまで待つ（固定中は移動できない） */
const waitForScrollUnlock = async () => {
  await nextTick()
  for (
    let i = 0;
    i < SCROLL_UNLOCK_MAX_POLLS && document.documentElement.classList.contains('v-overlay-scroll-blocked');
    i++
  ) {
    await sleep(SCROLL_UNLOCK_POLL_MS)
  }
}

/** 章の ID なら、その章の最初の項目を返す。項目の ID はそのまま返す */
const toSectionId = (id: string): string | null => {
  const category = props.manual.categories.find((item) => item.id === id)
  return category != null ? (category.sections[0]?.id ?? null) : id
}

/** 目次・項目のリンクから移動する。共有しやすいように、URL のハッシュも合わせる */
const selectTarget = async (id: string) => {
  const sectionId = toSectionId(id)
  pinnedId = sectionId != null && visibleSectionIds.value.includes(sectionId) ? sectionId : null
  if (pinnedId != null) {
    activeId.value = pinnedId
  }
  if (isTocSheetOpen.value) {
    isTocSheetOpen.value = false
    await waitForScrollUnlock()
  }
  scrollToAnchor(getManualAnchorId(id), prefersReducedMotion() ? 'auto' : 'smooth')
  history.replaceState(history.state, '', `#${getManualAnchorId(id)}`)
}

const scrollToHash = async () => {
  const hash = route.hash.replace(/^#/, '')
  if (hash === '') {
    return
  }
  const targetId = hash.startsWith(MANUAL_ANCHOR_PREFIX) ? hash.slice(MANUAL_ANCHOR_PREFIX.length) : hash
  const sectionId = toSectionId(targetId)
  pinnedId = sectionId != null && visibleSectionIds.value.includes(sectionId) ? sectionId : null
  // ルーターの scrollBehavior が先頭へ戻す処理を終えてから移動する
  await nextTick()
  await sleep(0)
  scrollToAnchor(getManualAnchorId(targetId), 'auto')
  scheduleUpdateActive()
}

onMounted(() => {
  scrollToHash()
  scheduleUpdateActive()
})

// 同じ画面内でハッシュだけが変わる遷移（リンク・戻る/進む）にも追従する
watch(() => route.hash, scrollToHash)
</script>

<template>
  <div class="manual-viewer">
    <header class="manual-hero">
      <p class="manual-hero__eyebrow" style="--i: 0">
        <v-icon :icon="mdiBookOpenPageVariantOutline" size="16" />
        {{ $t('manual.eyebrow') }}
      </p>
      <h1 class="manual-hero__title" style="--i: 1">{{ manual.title }}</h1>
      <p class="manual-hero__intro" style="--i: 2">{{ manual.intro }}</p>

      <form class="manual-hero__search" role="search" style="--i: 3" @submit.prevent>
        <v-text-field
          v-model="keyword"
          :prepend-inner-icon="mdiMagnify"
          :label="$t('manual.search_label')"
          :placeholder="$t('manual.search_placeholder')"
          variant="solo"
          rounded="pill"
          flat
          single-line
          clearable
          hide-details
          autocomplete="off"
        />
      </form>

      <p class="manual-hero__status" aria-live="polite">
        <template v-if="isSearching">
          {{ resultCount > 0 ? $t('manual.result_count', [resultCount]) : $t('manual.no_result') }}
        </template>
      </p>

      <ul class="manual-hero__meta" style="--i: 4">
        <li>
          <v-icon :icon="mdiTextSearchVariant" size="16" />
          {{ $t('manual.total_count', [totalCount]) }}
        </li>
        <li v-if="latestUpdatedAt != null">
          <v-icon :icon="mdiCalendarCheckOutline" size="16" />
          {{ $t('manual.last_updated', [latestUpdatedAt]) }}
        </li>
      </ul>

      <!-- 幅が狭い画面では、固定表示の目次がないので、章へのリンクを置く -->
      <nav v-if="filteredCategories.length > 0" class="manual-hero__chapters" :aria-label="$t('manual.toc')">
        <a
          v-for="category of filteredCategories"
          :key="category.id"
          class="manual-chip"
          :href="`#${getManualAnchorId(category.id)}`"
          @click.prevent="selectTarget(category.id)"
        >
          <span class="manual-chip__no">{{ padChapterNumber(category.id) }}</span>
          {{ category.title }}
        </a>
      </nav>
    </header>

    <div class="manual-viewer__body">
      <aside v-if="filteredCategories.length > 0" class="manual-viewer__aside">
        <div ref="tocScrollRef" class="manual-viewer__toc">
          <p class="manual-viewer__toc-title">
            <v-icon :icon="mdiFormatListBulleted" size="18" />
            {{ $t('manual.toc') }}
          </p>
          <ManualToc
            :categories="filteredCategories"
            :numbering="numbering"
            :active-id="activeId"
            @select="selectTarget"
          />
        </div>
      </aside>

      <div class="manual-viewer__content">
        <div v-if="filteredCategories.length === 0" class="manual-empty">
          <v-icon :icon="mdiMagnify" size="40" class="manual-empty__icon" />
          <p class="manual-empty__text">{{ $t('manual.no_result') }}</p>
          <v-btn variant="tonal" color="primary" rounded="pill" @click="clearKeyword">
            {{ $t('manual.clear_search') }}
          </v-btn>
        </div>

        <section
          v-for="category of filteredCategories"
          :id="getManualAnchorId(category.id)"
          :key="category.id"
          class="manual-chapter"
        >
          <header class="manual-chapter__head">
            <span class="manual-chapter__no" aria-hidden="true">{{ padChapterNumber(category.id) }}</span>
            <div class="manual-chapter__heading">
              <p class="manual-chapter__eyebrow">{{ $t('manual.chapter', [numbering[category.id]]) }}</p>
              <h2 class="manual-chapter__title">{{ category.title }}</h2>
            </div>
            <span class="manual-chapter__count">{{ $t('manual.chapter_count', [category.sections.length]) }}</span>
          </header>

          <div class="manual-chapter__sections">
            <ManualSection
              v-for="section of category.sections"
              :key="section.id"
              :section="section"
              :number="numbering[section.id]"
              :screen-paths="screenPaths"
              @select="selectTarget"
            />
          </div>
        </section>
      </div>
    </div>

    <!-- 幅が狭い画面では、目次を下から開く -->
    <v-btn
      class="manual-fab"
      color="primary"
      rounded="pill"
      size="large"
      elevation="6"
      :prepend-icon="mdiFormatListBulleted"
      @click="isTocSheetOpen = true"
    >
      {{ $t('manual.toc') }}
    </v-btn>

    <v-bottom-sheet v-model="isTocSheetOpen">
      <v-sheet class="manual-sheet">
        <div class="manual-sheet__head">
          <p class="manual-sheet__title">
            <v-icon :icon="mdiFormatListBulleted" size="18" />
            {{ $t('manual.toc') }}
          </p>
          <v-btn
            icon
            variant="text"
            color="secondary"
            size="small"
            :aria-label="$t('close')"
            @click="isTocSheetOpen = false"
          >
            <v-icon :icon="mdiClose" />
          </v-btn>
        </div>
        <div class="manual-sheet__body">
          <ManualToc
            :categories="filteredCategories"
            :numbering="numbering"
            :active-id="activeId"
            @select="selectTarget"
          />
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<style lang="scss">
// 画面の外（下から開く目次）にも同じ色・書体を使うため、スコープを付けずに定義する
.manual-viewer,
.manual-sheet {
  --manual-line: rgba(var(--v-border-color), var(--v-border-opacity));
  // 文字に使う緑・琥珀色は、テーマの色を暗く（ダークテーマでは明るく）して、背景との差を確保する。
  // color-mix に未対応のブラウザでは、この色が無効になり、周囲の文字色のまま表示される
  --manual-accent-strong: color-mix(in srgb, rgb(var(--v-theme-primary)) 62%, black);
  --manual-warning-strong: color-mix(in srgb, rgb(var(--v-theme-warning)) 45%, black);
  // 数字は丸みのある書体にして、手順の番号をやわらかく見せる
  --manual-font-numeric:
    ui-rounded, 'SF Pro Rounded', 'Hiragino Maru Gothic ProN', 'Hiragino Sans', 'Yu Gothic UI', 'Meiryo UI', sans-serif;
}

.v-theme--dark .manual-viewer,
.v-theme--dark .manual-sheet {
  --manual-accent-strong: color-mix(in srgb, rgb(var(--v-theme-primary)) 55%, white);
  --manual-warning-strong: color-mix(in srgb, rgb(var(--v-theme-warning)) 50%, white);
}
</style>

<style lang="scss" scoped>
.manual-viewer {
  max-inline-size: 1180px;
  margin-inline: auto;
  font-size: 0.9375rem;
  line-height: 1.85;
  letter-spacing: 0.02em;
}

// 先頭の案内（検索もここに置く）
.manual-hero {
  position: relative;
  isolation: isolate;
  padding: clamp(28px, 5vw, 52px) clamp(20px, 5vw, 56px) clamp(24px, 4vw, 36px);
  overflow: hidden;
  background:
    radial-gradient(120% 140% at 0% 0%, rgba(var(--v-theme-primary), 0.22), transparent 56%),
    radial-gradient(90% 120% at 100% 100%, rgba(var(--v-theme-warning), 0.2), transparent 60%),
    rgb(var(--v-theme-surface));
  border: 1px solid var(--manual-line);
  border-radius: 28px;
  box-shadow: 0 18px 40px -28px rgba(var(--v-shadow-key-umbra-color), 0.4);

  // ノートのような点の模様
  &::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    content: '';
    background-image: radial-gradient(rgba(var(--v-theme-on-surface), 0.1) 1.2px, transparent 1.7px);
    background-position: 10px 10px;
    background-size: 20px 20px;
    mask-image: linear-gradient(105deg, transparent 15%, #000 100%);
  }

  // 上から見たお皿の縁のような、同心円の模様
  &::after {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: -120px;
    z-index: -1;
    inline-size: 400px;
    aspect-ratio: 1;
    content: '';
    background:
      radial-gradient(circle, rgba(var(--v-theme-surface), 0.85) 0 22%, transparent 22.4%),
      repeating-radial-gradient(circle, rgba(var(--v-theme-primary), 0.32) 0 1.5px, transparent 1.5px 28px);
    border-radius: 50%;
    transform: translateY(-50%);
    mask-image: radial-gradient(circle, #000 52%, transparent 71%);

    @media (max-width: 599px) {
      inset-block-start: -70px;
      inset-inline-end: -150px;
      inline-size: 280px;
      opacity: 0.6;
      transform: none;
    }
  }

  > * {
    animation: manual-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    animation-delay: calc(var(--i, 0) * 80ms);
  }

  &__eyebrow {
    display: inline-flex;
    gap: 6px;
    align-items: center;
    margin: 0;
    padding: 4px 14px 4px 10px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--manual-accent-strong);
    background: rgba(var(--v-theme-primary), 0.14);
    border-radius: 999px;
  }

  &__title {
    margin: 16px 0 12px;
    font-size: clamp(1.75rem, 4.4vw, 2.625rem);
    font-weight: 900;
    line-height: 1.3;
    letter-spacing: 0.03em;
    font-feature-settings: 'palt' 1;
    word-break: auto-phrase;
  }

  &__intro {
    max-inline-size: 38em;
    margin: 0;
    color: rgba(var(--v-theme-on-surface), 0.78);
    word-break: auto-phrase;
    text-wrap: pretty;
  }

  &__search {
    max-inline-size: 580px;
    margin-block-start: 26px;

    :deep(.v-field) {
      background: rgb(var(--v-theme-surface));
      border: 1px solid var(--manual-line);
      box-shadow: 0 12px 28px -18px rgba(var(--v-shadow-key-umbra-color), 0.45);
      transition:
        box-shadow 0.25s ease,
        border-color 0.25s ease;
    }

    :deep(.v-field--focused) {
      border-color: rgb(var(--v-theme-primary));
      box-shadow:
        0 0 0 4px rgba(var(--v-theme-primary), 0.2),
        0 12px 28px -18px rgba(var(--v-shadow-key-umbra-color), 0.45);
    }
  }

  &__status {
    min-block-size: 1.85em;
    margin: 10px 0 0;
    padding-inline-start: 6px;
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--manual-accent-strong);
    animation: none;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 10px;
    margin: 4px 0 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-flex;
      gap: 6px;
      align-items: center;
      padding: 4px 12px;
      font-size: 0.75rem;
      font-weight: 600;
      color: rgba(var(--v-theme-on-surface), 0.72);
      background: rgba(var(--v-theme-surface), 0.7);
      border: 1px solid var(--manual-line);
      border-radius: 999px;
      backdrop-filter: blur(6px);
    }
  }

  &__chapters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-block-start: 22px;

    @media (min-width: 1280px) {
      display: none;
    }
  }
}

.manual-chip {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 6px 14px 6px 8px;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1.4;
  color: inherit;
  text-decoration: none;
  background: rgb(var(--v-theme-surface));
  border: 1px solid var(--manual-line);
  border-radius: 999px;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(var(--v-theme-primary), 0.1);
    border-color: rgba(var(--v-theme-primary), 0.55);
  }

  &__no {
    display: grid;
    place-items: center;
    min-inline-size: 28px;
    block-size: 24px;
    padding-inline: 6px;
    font-family: var(--manual-font-numeric);
    font-size: 0.6875rem;
    font-weight: 800;
    color: var(--manual-accent-strong);
    background: rgba(var(--v-theme-primary), 0.16);
    border-radius: 999px;
  }
}

// 目次と本文。サイドメニュー（260px）を引いても本文の幅が足りる画面幅から、目次を横に固定表示する
.manual-viewer__body {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 28px;
  margin-block-start: 32px;

  @media (min-width: 1280px) {
    grid-template-columns: 264px minmax(0, 1fr);
    gap: 40px;
    align-items: start;
  }
}

.manual-viewer__aside {
  display: none;

  @media (min-width: 1280px) {
    position: sticky;
    inset-block-start: 88px;
    display: block;
  }
}

.manual-viewer__toc {
  max-block-size: calc(100vh - 112px);
  padding: 18px 12px 18px 18px;
  overflow-y: auto;
  background: rgb(var(--v-theme-surface));
  border: 1px solid var(--manual-line);
  border-radius: 20px;
  scrollbar-width: thin;
  overscroll-behavior: contain;
}

.manual-viewer__toc-title {
  display: flex;
  gap: 6px;
  align-items: center;
  margin: 0 0 16px;
  font-size: 0.8125rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(var(--v-theme-on-surface), 0.66);
}

.manual-viewer__content {
  display: grid;
  gap: 48px;
  min-inline-size: 0;
  max-inline-size: 820px;
}

// 章の見出し
.manual-chapter {
  scroll-margin-block-start: 88px;

  &__head {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 6px 16px;
    align-items: end;
    margin-block-end: 20px;
    padding-block-end: 16px;
    border-block-end: 1px solid var(--manual-line);

    // 見出しの下に、緑の短い線を引く
    &::after {
      position: absolute;
      inset-block-end: -2px;
      inset-inline-start: 0;
      inline-size: 56px;
      block-size: 3px;
      content: '';
      background: rgb(var(--v-theme-primary));
      border-radius: 3px;
    }
  }

  // 輪郭を残した大きな数字。内側は下に向かって薄くなる
  &__no {
    font-family: var(--manual-font-numeric);
    font-size: clamp(2.75rem, 7vw, 4rem);
    font-weight: 900;
    line-height: 0.9;
    color: transparent;
    background: linear-gradient(180deg, rgba(var(--v-theme-primary), 0.4), rgba(var(--v-theme-primary), 0) 90%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 1.5px rgba(var(--v-theme-primary), 0.75);
    user-select: none;
  }

  &__eyebrow {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--manual-accent-strong);
  }

  &__title {
    margin: 0;
    font-size: clamp(1.375rem, 3vw, 1.75rem);
    font-weight: 900;
    line-height: 1.4;
    letter-spacing: 0.03em;
    font-feature-settings: 'palt' 1;
    word-break: auto-phrase;
  }

  &__count {
    padding-block-end: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(var(--v-theme-on-surface), 0.6);
    white-space: nowrap;
  }

  &__sections {
    display: grid;
    gap: 22px;
  }
}

// 検索に一致する項目がないとき
.manual-empty {
  display: grid;
  gap: 12px;
  justify-items: center;
  padding: 56px 20px;
  text-align: center;
  background: rgb(var(--v-theme-surface));
  border: 1px dashed var(--manual-line);
  border-radius: 20px;

  &__icon {
    color: rgba(var(--v-theme-primary), 0.8);
  }

  &__text {
    margin: 0;
  }
}

// 幅が狭い画面で、目次を開くボタン
.manual-fab {
  // 左のサイドメニューにも、右下のチャットサポートのボタンにも重ならないように、中央に置く
  position: fixed;
  inset-block-end: 20px;
  inset-inline-start: 50%;
  z-index: 100;
  transform: translateX(-50%);
  font-weight: 800;
  letter-spacing: 0.08em;

  @media (min-width: 1280px) {
    display: none;
  }
}

.manual-sheet {
  max-block-size: 72vh;
  overflow-y: auto;
  border-start-start-radius: 24px;
  border-start-end-radius: 24px;

  &__head {
    position: sticky;
    inset-block-start: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 12px 8px 20px;
    background: rgb(var(--v-theme-surface));
    border-block-end: 1px solid var(--manual-line);
  }

  &__title {
    display: flex;
    gap: 6px;
    align-items: center;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0.12em;
  }

  &__body {
    padding: 18px 16px 28px 20px;
  }
}

// 章へのリンク（幅が狭い画面）のキーボード操作
.manual-chip:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

@keyframes manual-rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@media print {
  .manual-hero__search,
  .manual-hero__status,
  .manual-hero__chapters,
  .manual-viewer__aside,
  .manual-fab {
    display: none !important;
  }

  .manual-viewer__body {
    display: block;
  }

  .manual-hero,
  .manual-hero > * {
    animation: none;
    box-shadow: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .manual-hero > * {
    animation: none;
  }
}
</style>
