<template>
  <CharactersList
    :characters="characters"
    data-test-component="CharactersSection"
  >
    <template #actions="{ item }">
      <AButton :key="item.id"
               type="link" @click="onAdd(item)"
      >
        Add
      </AButton>
    </template>
  </CharactersList>
</template>

<script>
import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
import { Button as AButton } from '@ui/index'

import { props } from '@modules/r-n-m/components/organisms/CharactersList/setup'

export default {
  name: 'CharactersSection',
  components: {
    CharactersList,
    AButton,
  },
  props,
  emits: ['add'],
  methods: {
    onAdd (item) {
      this.$emit('add', item)
    },
  },
}
</script>
