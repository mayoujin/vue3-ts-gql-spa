<template>
  <CharactersList
    :characters="characters"
    :isLoading="isLoading"
    @page-changed="onPageChanged"
    v-bem
    v-test
  >
    <template #actions="{ item }">
      <AddButton
        :key="item.id"
        type="link"
        @click="onAdd(item)"
        v-bem:AddButton
        v-test:AddButton
      >
        {{ $t('characters_section.add_button') }}
      </AddButton>
    </template>
  </CharactersList>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBem } from '@/tools/bem'

import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
import { Button } from '@ui/index.ts'

import { props } from '@modules/r-n-m/components/organisms/CharactersList/setup'

import styles from './characters.module.pcss'

const $bemCn = useBem<string>(styles)

const Emits = {
  ADD: 'add',
  PAGE_CHANGED: 'page-changed',
}

const setup: SetupFunction<typeof props> = (props, { emit }) => ({
  onAdd: (item) => emit(Emits.ADD, item),
  onPageChanged: (page) => emit(Emits.PAGE_CHANGED, page),
})

export default defineComponent({
  name: 'CharactersSection',
  components: {
    CharactersList,
    AddButton: Button,
  },
  props,
  emits: [Emits.ADD, Emits.PAGE_CHANGED],
  setup,
  $bemCn,
})
</script>
