<script setup lang="ts">
import { getManualAnchorId } from '@shokujii/base/manual/manualView.js'
import type { ManualCategory } from '@shokujii/base/manual/types.js'

defineProps<{
  categories: ManualCategory[]
  /** 章・項目の通し番号（ID から引く） */
  numbering: Record<string, string>
  /** 現在読んでいる項目の ID */
  activeId: string | null
}>()

const emit = defineEmits<{
  select: [id: string]
}>()
</script>

<template>
  <nav class="manual-toc" :aria-label="$t('manual.toc')">
    <section v-for="category of categories" :key="category.id" class="manual-toc__chapter">
      <a
        class="manual-toc__chapter-link"
        :href="`#${getManualAnchorId(category.id)}`"
        @click.prevent="emit('select', category.id)"
      >
        <span class="manual-toc__chapter-no">{{ $t('manual.chapter', [numbering[category.id]]) }}</span>
        <span class="manual-toc__chapter-title">{{ category.title }}</span>
      </a>

      <ol class="manual-toc__items">
        <li v-for="section of category.sections" :key="section.id">
          <a
            class="manual-toc__link"
            :class="{ 'is-active': section.id === activeId }"
            :href="`#${getManualAnchorId(section.id)}`"
            :aria-current="section.id === activeId ? 'location' : undefined"
            :data-toc-id="section.id"
            @click.prevent="emit('select', section.id)"
          >
            <span class="manual-toc__no">{{ numbering[section.id] }}</span>
            <span class="manual-toc__text">{{ section.title }}</span>
          </a>
        </li>
      </ol>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
.manual-toc {
  display: grid;
  gap: 20px;

  &__chapter-link {
    display: grid;
    gap: 2px;
    padding-block: 2px;
    color: inherit;
    text-decoration: none;
    border-radius: 6px;

    &:hover .manual-toc__chapter-title {
      color: var(--manual-accent-strong);
    }
  }

  &__chapter-no {
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--manual-accent-strong);
  }

  &__chapter-title {
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 1.5;
    transition: color 0.2s ease;
  }

  &__items {
    position: relative;
    margin: 8px 0 0;
    padding: 0;
    list-style: none;

    // 左端に細い縦線を引き、現在位置の印をその上に重ねる
    &::before {
      position: absolute;
      inset-block: 4px;
      inset-inline-start: 0;
      inline-size: 2px;
      content: '';
      background: var(--manual-line);
      border-radius: 2px;
    }
  }

  &__link {
    position: relative;
    display: grid;
    grid-template-columns: 2.4em minmax(0, 1fr);
    gap: 4px;
    align-items: baseline;
    padding: 6px 10px 6px 14px;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: rgba(var(--v-theme-on-surface), 0.72);
    text-decoration: none;
    border-radius: 0 8px 8px 0;
    transition:
      color 0.2s ease,
      background-color 0.2s ease;

    &::before {
      position: absolute;
      inset-block: 2px;
      inset-inline-start: 0;
      inline-size: 2px;
      content: '';
      background: rgb(var(--v-theme-primary));
      border-radius: 2px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:hover {
      color: rgb(var(--v-theme-on-surface));
      background: rgba(var(--v-theme-on-surface), 0.05);
    }

    &.is-active {
      font-weight: 700;
      color: var(--manual-accent-strong);
      background: rgba(var(--v-theme-primary), 0.12);

      &::before {
        opacity: 1;
      }
    }
  }

  &__no {
    font-family: var(--manual-font-numeric);
    font-size: 0.6875rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    opacity: 0.7;
  }

  &__text {
    word-break: auto-phrase;
    overflow-wrap: anywhere;
  }
}

.manual-toc a:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}
</style>
