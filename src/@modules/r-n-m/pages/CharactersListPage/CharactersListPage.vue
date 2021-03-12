<template>
  <div v-bem>
    <div v-bem:characters-container>
      <h1 v-bem:characters-title>
        {{ $t('characters_list_page.characters_header.text') }}
      </h1>
      <CharactersSection
        :is-loading="isLoading"
        :characters="characters"
        @add="onAdd"
        @page-changed="onPageChanged"
      />
    </div>
    <div v-bem:heroes-container>
      <h1 v-bem:heroes-title>
        {{ $t('characters_list_page.heroes_header.text') }}
      </h1>
      <HeroesSection
        :is-loading="isLoading"
        :characters="heroes"
        @remove="onRemove"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { setup, emits } from './setup'

import CharactersSection from './components/CharactersSection.vue'
import HeroesSection from './components/HeroesSection.vue'

import { useBem } from '@/plugins/bem'
import styles from './styles.module.pcss'

export default defineComponent({
  components: {
    CharactersSection,
    HeroesSection,
  },
  emits,
  setup,
  $bemCn: useBem(styles),
})
</script>
