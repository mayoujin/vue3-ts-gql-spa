<template>
  <CharactersList
    :characters="characters"
    data-test-component="CharactersSection"
  >
    <template #actions="{ item }">
      <AddButton :key="item.id" type="link" @click="onAdd(item)">
        Add
      </AddButton>
    </template>
  </CharactersList>
</template>

<script>
import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
import { Button } from '@ui'

import { props } from '@modules/r-n-m/components/organisms/CharactersList/setup'

const Emits = {
  ADD: 'add',
}

export default {
  name: 'CharactersSection',
  components: {
    CharactersList,
    AddButton: Button,
  },
  props,
  emits: [Emits.ADD],
  methods: {
    onAdd(item) {
      this.$emit(Emits.ADD, item)
    },
  },
}
</script>
