<template>
  <h1 v-bem:heroes-title>
    {{ $t('characters_list_page.heroes_header.text') }}
  </h1>
  <HeroesSection
    :is-loading="isLoading"
    :characters="heroes"
    @remove="onRemove"
    v-bem:HeroesSection
  />
  <h1 v-bem:characters-title>
    {{ $t('characters_list_page.characters_header.text') }}
  </h1>
  <CharactersSection
    :is-loading="isLoading"
    :characters="characters"
    @add="onAdd"
    v-bem:CharactersSection
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { setup, emits } from './setup'

import CharactersSection from './components/CharactersSection.vue'
import HeroesSection from './components/HeroesSection.vue'

import { useBem } from '@/plugins/bem'
import $style from './styles.module.pcss'

export default defineComponent({
  components: {
    CharactersSection,
    HeroesSection,
  },
  emits,
  setup,
  $bemCn: useBem($style),
})
</script>
