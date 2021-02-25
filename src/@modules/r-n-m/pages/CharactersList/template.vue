<template>
  <div data-test="$test.generateId()">
    <h1>Favourites</h1>
    <CharactersList :is-loading="isLoading" :characters="heroes">
      <template #actions="{ item }">
        <AButton type="link" @click="() => onRemove(item)" :key="item.id"
          >Remove</AButton
        >
      </template>
    </CharactersList>
    <h1>All</h1>
    <CharactersList :is-loading="isLoading" :characters="characters">
      <template #actions="{ item }">
        <AButton type="link" @click="() => onAdd(item)" :key="item.id"
          >Add</AButton
        >
      </template>
    </CharactersList>
  </div>
</template>

<script lang="ts">
// import { defineProps, PropType } from 'vue'
import CharactersList from '@modules/r-n-m/components/organisms/CharactersList'
// import { Characters } from '@modules/r-n-m/entities/types'

// import { RawBindings, ActionHandler } from './types/template-bindings'

export const components = {
  CharactersList,
}

/*
const props = {
  characters: Object as PropType<Characters>,
  isLoading: Boolean,
  heroes: Object as PropType<Characters>,
  onAction: Function as PropType<ActionHandler>,
  onRemove: Function as PropType<ActionHandler>,
  onAdd: Function as PropType<ActionHandler>,
}

defineProps<{
  characters: Characters
  heroes: RawBindings['heroes']
  isLoading: boolean
  onRemove: ActionHandler
  onAdd: ActionHandler
}>(props)

export default {
  props,
}
*/
</script>
