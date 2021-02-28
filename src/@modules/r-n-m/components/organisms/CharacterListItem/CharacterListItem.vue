<template>
  <AListItem data-test-component="CharacterListItem">
    <AListItemMeta :description="`${species}, ${location.name}`">
      <template #title>
        <span>{{ name }}</span>
      </template>
      <template #avatar>
        <AAvatar :src="image" />
      </template>
    </AListItemMeta>
    <template #actions>
      <slot name="actions"></slot>
    </template>
  </AListItem>
</template>

<script lang="ts">
/**
 * Global, Api Types
 */
import { PropType } from 'vue'
import { ComponentPropsOptions } from '@vue/runtime-core'
/**
 * Global UI
 */
import { List, Avatar as AAvatar } from '@ui/index'
/**
 * Local types
 */
import { Character } from '@modules/r-n-m/types/characters'

export const props: ComponentPropsOptions<Character> = {
  id: String,
  name: String,
  species: String,
  image: String,
  location: {
    type: Object as PropType<{ name: string }>,
  },
  type: String,
}

export default {
  name: 'CharacterListItem',
  props,
  components: {
    AListItem: List.Item,
    AListItemMeta: List.Item.Meta,
    AAvatar,
  },
}
</script>
