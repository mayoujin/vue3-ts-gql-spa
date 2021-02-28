<template>
  <CharactersList
    :characters="characters"
    data-test-component="CharactersSection"
  >
    <template #actions="{ item }">
      <AButton type="link" @click="onAdd(item)" :key="item.id"> Add </AButton>
    </template>
  </CharactersList>
</template>

<script>
import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
import { Button as AButton } from '@ui/index'

import { props } from '@modules/r-n-m/components/organisms/CharactersList/setup'

export default {
  name: 'CharactersSection',
  props,
  emits: ['add'],
  methods: {
    onAdd(item) {
      this.$emit('add', item)
    },
  },
  components: {
    CharactersList,
    AButton,
  },
}
</script>
