<template>
  <CharactersList :characters="characters" data-test-component="HeroesSection">
    <template #actions="{ item }">
      <AButton type="link" @click="onRemove(item)" :key="item.id">
        Remove
      </AButton>
    </template>
  </CharactersList>
</template>

<script>
import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
import { Button as AButton } from '@ui/index'

import { props } from '@modules/r-n-m/components/organisms/CharactersList/setup'

export default {
  props,
  emits: ['remove'],
  methods: {
    onRemove(item) {
      this.$emit('add', item)
    },
  },
  components: {
    CharactersList,
    AButton,
  },
}
</script>
