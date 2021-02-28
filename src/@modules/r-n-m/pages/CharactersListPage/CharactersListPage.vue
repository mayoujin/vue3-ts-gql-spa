<template>
  <h1>Favourites</h1>
  <HeroesSection
    @remove="onRemove"
    :is-loading="isLoading"
    :characters="heroes"
  >
  </HeroesSection>
  <h1>All</h1>
  <CharactersSection
    @add="onAdd"
    :is-loading="isLoading"
    :characters="characters"
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
