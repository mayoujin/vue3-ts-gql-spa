<template>
  <h1>Favourites</h1>
  <HeroesSection
    :is-loading="isLoading"
    :characters="heroes"
    @remove="onRemove"
  />
  <h1>All</h1>
  <CharactersSection
    :is-loading="isLoading"
    :characters="characters"
    @add="onAdd"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RawBindings } from './types'

import { setup, emits } from './setup'

import CharactersSection from './components/CharactersSection.vue'
import HeroesSection from './components/HeroesSection.vue'
// @ts-ignore
import $style from './styles.module.pcss'

export default defineComponent<{}, RawBindings>({
  components: {
    CharactersSection,
    HeroesSection,
  },
  emits,
  setup,
  $style,
})
</script>
