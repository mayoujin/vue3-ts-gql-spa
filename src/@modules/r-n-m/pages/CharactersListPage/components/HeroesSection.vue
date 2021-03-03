<template>
  <CharactersList :characters="characters"
                  data-test-component="HeroesSection"
  >
    <template #actions="{ item }">
      <AButton :key="item.id"
               type="link" @click="onRemove(item)"
      >
        Remove
      </AButton>
    </template>
  </CharactersList>
</template>

<script>
import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
import { Button as AButton } from '@ui/index'

import { props } from '@modules/r-n-m/components/organisms/CharactersList/setup'

const Emits = {
  REMOVE: 'remove',
}

const methods = {
  onRemove (item) {
    this.$emit(Emits.REMOVE, item)
  },
}

export default {
  components: {
    CharactersList,
    AButton,
  },
  props,
  emits: [Emits.REMOVE],
  methods,
}
</script>
