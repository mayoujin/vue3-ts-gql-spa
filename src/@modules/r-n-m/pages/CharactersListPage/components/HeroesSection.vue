<template>
  <CharactersList v-test
                  v-bem :characters="characters"
  >
    <template #actions="{ item }">
      <RemoveButton
        v-bem:RemoveButton
        v-test:RemoveButton
        type="link"
        @click="onRemove(item)"
      >
        {{ $t('heroes_section.remove_button') }}
      </RemoveButton>
    </template>
  </CharactersList>
</template>

<script lang="ts">
import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
import { Button } from '@ui'
import { props } from '@modules/r-n-m/components/organisms/CharactersList/setup'

import { useBem } from '@/tools/bem'
import styles from './heroes.module.pcss'

const $bemCn = useBem<string>(styles)

const Emits = {
  REMOVE: 'remove',
}

const methods = {
  onRemove (item) {
    this.$emit(Emits.REMOVE, item)
  },
}

export default {
  name: 'HeroesSection',
  components: {
    CharactersList,
    RemoveButton: Button,
  },
  props,
  emits: [Emits.REMOVE],
  methods,
  $bemCn,
}
</script>
