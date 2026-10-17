<script setup lang="ts">
import {
  mdiAlertOutline,
  mdiCalendarCheckOutline,
  mdiChevronRight,
  mdiLightbulbOnOutline,
  mdiLink,
  mdiMapMarkerPath,
} from '@mdi/js'
import { getManualAnchorId, parseWhere } from '@shokujii/base/manual/manualView.js'
import type { ManualSection } from '@shokujii/base/manual/types.js'

const props = defineProps<{
  section: ManualSection
  /** 章内の通し番号（例: `2-3`） */
  number: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const anchorId = computed(() => getManualAnchorId(props.section.id))
const routes = computed(() => parseWhere(props.section.where))
</script>

<template>
  <article :id="anchorId" class="manual-section">
    <header class="manual-section__head">
      <span class="manual-section__no">{{ number }}</span>
      <h3 class="manual-section__title">{{ section.title }}</h3>
      <a
        class="manual-section__anchor"
        :href="`#${anchorId}`"
        :aria-label="$t('manual.anchor_label', [section.title])"
        @click.prevent="emit('select', section.id)"
      >
        <v-icon :icon="mdiLink" size="18" />
      </a>
    </header>

    <div class="manual-section__where">
      <span class="manual-section__where-label">
        <v-icon :icon="mdiMapMarkerPath" size="16" />
        {{ $t('manual.where_label') }}
      </span>
      <ul class="manual-section__routes">
        <li v-for="(route, i) of routes" :key="i">
          <ol v-if="route.length > 1" class="manual-path">
            <li v-for="(crumb, j) of route" :key="j" class="manual-path__crumb">
              <span class="manual-path__name">{{ crumb }}</span>
              <v-icon v-if="j < route.length - 1" :icon="mdiChevronRight" size="14" class="manual-path__sep" />
            </li>
          </ol>
          <span v-else class="manual-section__where-text">{{ route[0] }}</span>
        </li>
      </ul>
    </div>

    <p class="manual-section__summary">{{ section.summary }}</p>

    <div class="manual-section__body">
      <template v-for="(block, i) of section.blocks" :key="i">
        <p v-if="block.type === 'paragraph'" class="manual-prose">{{ block.text }}</p>

        <div v-else-if="block.type === 'steps'" class="manual-block">
          <h4 v-if="block.title != null" class="manual-block__title">{{ block.title }}</h4>
          <ol class="manual-steps">
            <li v-for="(item, j) of block.items" :key="j" class="manual-steps__item">
              <span class="manual-steps__badge" aria-hidden="true">{{ j + 1 }}</span>
              <span class="manual-steps__text">{{ item }}</span>
            </li>
          </ol>
        </div>

        <div v-else-if="block.type === 'list'" class="manual-block">
          <h4 v-if="block.title != null" class="manual-block__title">{{ block.title }}</h4>
          <ul class="manual-list">
            <li v-for="(item, j) of block.items" :key="j">{{ item }}</li>
          </ul>
        </div>

        <div v-else-if="block.type === 'terms'" class="manual-block">
          <h4 v-if="block.title != null" class="manual-block__title">{{ block.title }}</h4>
          <dl class="manual-terms">
            <div v-for="(item, j) of block.items" :key="j" class="manual-terms__row">
              <dt class="manual-terms__term">{{ item.term }}</dt>
              <dd class="manual-terms__text">{{ item.text }}</dd>
            </div>
          </dl>
        </div>

        <div v-else-if="block.type === 'tags'" class="manual-block">
          <h4 v-if="block.title != null" class="manual-block__title">{{ block.title }}</h4>
          <ul class="manual-tags">
            <li v-for="(item, j) of block.items" :key="j" class="manual-tags__item">{{ item }}</li>
          </ul>
        </div>

        <aside
          v-else-if="block.type === 'note'"
          class="manual-note"
          :class="block.variant === 'warning' ? 'manual-note--warning' : 'manual-note--info'"
        >
          <span class="manual-note__icon" aria-hidden="true">
            <v-icon :icon="block.variant === 'warning' ? mdiAlertOutline : mdiLightbulbOnOutline" size="18" />
          </span>
          <div class="manual-note__content">
            <p class="manual-note__label">
              {{ block.variant === 'warning' ? $t('manual.note_warning') : $t('manual.note_info') }}
            </p>
            <p class="manual-note__text">{{ block.text }}</p>
          </div>
        </aside>

        <figure v-else-if="block.type === 'image'" class="manual-figure">
          <v-img :src="block.src" :alt="block.alt" max-width="720" class="manual-figure__img" />
          <figcaption v-if="block.caption != null" class="manual-figure__caption">{{ block.caption }}</figcaption>
        </figure>
      </template>
    </div>

    <footer class="manual-section__foot">
      <v-icon :icon="mdiCalendarCheckOutline" size="16" />
      {{ $t('manual.updated_at', [section.updatedAt]) }}
    </footer>
  </article>
</template>

<style lang="scss" scoped>
.manual-section {
  position: relative;
  padding: 28px 32px 22px;
  background: rgb(var(--v-theme-surface));
  border: 1px solid var(--manual-line);
  border-radius: 20px;
  box-shadow:
    0 1px 2px rgba(var(--v-shadow-key-umbra-color), 0.05),
    0 12px 28px -16px rgba(var(--v-shadow-key-umbra-color), 0.18);
  scroll-margin-block-start: 88px;

  @media (max-width: 599px) {
    padding: 20px 18px 16px;
    border-radius: 16px;
  }

  // スクロールで画面に入るときに、ふわりと現れる（対応していないブラウザでは通常表示）
  @supports (animation-timeline: view()) {
    animation: manual-rise linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 28%;
  }

  &__head {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  &__no {
    flex: none;
    padding: 3px 11px;
    font-family: var(--manual-font-numeric);
    font-size: 0.75rem;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.06em;
    color: var(--manual-accent-strong);
    background: rgba(var(--v-theme-primary), 0.14);
    border-radius: 999px;
  }

  &__title {
    flex: 1 1 auto;
    min-inline-size: 0;
    margin: 0;
    font-size: 1.3125rem;
    font-weight: 800;
    line-height: 1.45;
    letter-spacing: 0.02em;
    font-feature-settings: 'palt' 1;
    word-break: auto-phrase;
    overflow-wrap: anywhere;
  }

  &__anchor {
    display: grid;
    flex: none;
    place-items: center;
    inline-size: 32px;
    block-size: 32px;
    color: rgba(var(--v-theme-on-surface), 0.5);
    border-radius: 50%;
    opacity: 0;
    transition:
      opacity 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover,
    &:focus-visible {
      color: var(--manual-accent-strong);
      background: rgba(var(--v-theme-primary), 0.12);
      opacity: 1;
    }
  }

  &:hover &__anchor,
  &:focus-within &__anchor {
    opacity: 1;
  }

  // タッチ端末では hover がないので、常に薄く見せる
  @media (hover: none) {
    &__anchor {
      opacity: 0.6;
    }
  }

  &__where {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
    align-items: flex-start;
    margin-block-start: 14px;
  }

  &__where-label {
    display: inline-flex;
    flex: none;
    gap: 4px;
    align-items: center;
    padding-block: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: rgba(var(--v-theme-on-surface), 0.62);
  }

  &__routes {
    display: grid;
    flex: 1 1 280px;
    gap: 6px;
    min-inline-size: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__where-text {
    display: inline-block;
    padding-block: 3px;
    font-size: 0.8125rem;
    line-height: 1.6;
    color: rgba(var(--v-theme-on-surface), 0.78);
    overflow-wrap: anywhere;
  }

  &__summary {
    margin: 18px 0 0;
    font-size: 1rem;
    line-height: 1.9;
    color: rgba(var(--v-theme-on-surface), 0.82);
    word-break: auto-phrase;
    text-wrap: pretty;
  }

  &__body {
    display: grid;
    gap: 24px;
    margin-block-start: 22px;
    padding-block-start: 22px;
    border-block-start: 1px dashed var(--manual-line);
  }

  &__foot {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: flex-end;
    margin-block-start: 20px;
    font-size: 0.75rem;
    color: rgba(var(--v-theme-on-surface), 0.55);
  }
}

// 経路（どこから開くか）
.manual-path {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 2px;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &__crumb {
    display: inline-flex;
    align-items: center;
  }

  &__sep {
    color: rgba(var(--v-theme-on-surface), 0.4);
  }

  &__name {
    padding: 3px 10px;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(var(--v-theme-on-surface), 0.86);
    background: rgba(var(--v-theme-on-surface), 0.06);
    border: 1px solid var(--manual-line);
    border-radius: 8px;
  }
}

// 本文ブロック共通
.manual-prose {
  margin: 0;
  line-height: 1.9;
  word-break: auto-phrase;
}

.manual-block {
  &__title {
    position: relative;
    margin: 0 0 12px;
    padding-inline-start: 12px;
    font-size: 0.875rem;
    font-weight: 800;
    line-height: 1.5;
    letter-spacing: 0.04em;

    &::before {
      position: absolute;
      inset-block: 0.2em;
      inset-inline-start: 0;
      inline-size: 4px;
      content: '';
      background: linear-gradient(180deg, rgb(var(--v-theme-primary)), rgba(var(--v-theme-primary), 0.35));
      border-radius: 4px;
    }
  }
}

// 手順（レシピの作り方のように、番号を点線でつなぐ）
.manual-steps {
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    position: relative;
    display: grid;
    grid-template-columns: 32px minmax(0, 1fr);
    gap: 14px;
    padding-block-end: 18px;

    &:last-child {
      padding-block-end: 0;
    }

    &:not(:last-child)::before {
      position: absolute;
      inset-block: 36px 4px;
      inset-inline-start: 15px;
      inline-size: 2px;
      content: '';
      background: repeating-linear-gradient(180deg, rgba(var(--v-theme-primary), 0.5) 0 4px, transparent 4px 8px);
    }
  }

  &__badge {
    position: relative;
    display: grid;
    place-items: center;
    inline-size: 32px;
    block-size: 32px;
    font-family: var(--manual-font-numeric);
    font-size: 0.9375rem;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    color: var(--manual-accent-strong);
    background: rgba(var(--v-theme-primary), 0.14);
    background: color-mix(in srgb, rgb(var(--v-theme-primary)) 14%, rgb(var(--v-theme-surface)));
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px rgba(var(--v-theme-primary), 0.6);
  }

  &__text {
    padding-block-start: 3px;
    line-height: 1.85;
    word-break: auto-phrase;
    overflow-wrap: anywhere;
    text-wrap: pretty;
  }
}

// 箇条書き
.manual-list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-inline-start: 22px;
    line-height: 1.85;
    word-break: auto-phrase;
    overflow-wrap: anywhere;
    text-wrap: pretty;

    &::before {
      position: absolute;
      inset-block-start: 0.95em;
      inset-inline-start: 5px;
      inline-size: 7px;
      block-size: 7px;
      content: '';
      background: rgba(var(--v-theme-primary), 0.85);
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
}

// 用語と説明（画面のボタン名・項目名・ステータスなど）
.manual-terms {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--manual-line);
  border-radius: 14px;

  &__row {
    display: grid;
    grid-template-columns: minmax(8em, 13em) minmax(0, 1fr);

    & + & {
      border-block-start: 1px solid var(--manual-line);
    }

    @media (max-width: 599px) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__term {
    padding: 12px 16px;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    background: rgba(var(--v-theme-on-surface), 0.04);
    overflow-wrap: anywhere;

    @media (max-width: 599px) {
      padding-block-end: 2px;
      background: rgba(var(--v-theme-on-surface), 0.04);
    }
  }

  &__text {
    margin: 0;
    padding: 12px 16px;
    line-height: 1.85;
    word-break: auto-phrase;
    overflow-wrap: anywhere;

    @media (max-width: 599px) {
      padding-block-start: 6px;
      background: rgba(var(--v-theme-on-surface), 0.04);
    }
  }
}

// 名称の並び
.manual-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    padding: 5px 14px;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.5;
    color: rgba(var(--v-theme-on-surface), 0.86);
    background: rgba(var(--v-theme-on-surface), 0.05);
    border: 1px solid var(--manual-line);
    border-radius: 999px;
  }
}

// ポイント・注意
.manual-note {
  --note-rgb: var(--v-theme-primary);
  --note-strong: var(--manual-accent-strong);

  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 14px;
  padding: 16px 18px 16px 16px;
  background: rgba(var(--note-rgb), 0.09);
  border: 1px solid rgba(var(--note-rgb), 0.3);
  border-inline-start: 4px solid rgb(var(--note-rgb));
  border-radius: 14px;

  &--warning {
    --note-rgb: var(--v-theme-warning);
    --note-strong: var(--manual-warning-strong);
  }

  &__icon {
    display: grid;
    place-items: center;
    inline-size: 32px;
    block-size: 32px;
    color: var(--note-strong);
    background: rgba(var(--note-rgb), 0.22);
    border-radius: 50%;
  }

  &__label {
    margin: 0 0 2px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--note-strong);
  }

  &__text {
    margin: 0;
    line-height: 1.85;
    word-break: auto-phrase;
    overflow-wrap: anywhere;
    text-wrap: pretty;
  }
}

// 画面写真
.manual-figure {
  margin: 0;

  &__img {
    overflow: hidden;
    border: 1px solid var(--manual-line);
    border-radius: 14px;
    box-shadow: 0 12px 28px -16px rgba(var(--v-shadow-key-umbra-color), 0.3);
  }

  &__caption {
    margin-block-start: 8px;
    font-size: 0.75rem;
    color: rgba(var(--v-theme-on-surface), 0.62);
  }
}

.manual-section a:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

@media print {
  .manual-section {
    break-inside: avoid;
    box-shadow: none;
    animation: none;
  }

  .manual-section__anchor {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .manual-section {
    animation: none;
  }
}

@keyframes manual-rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>
