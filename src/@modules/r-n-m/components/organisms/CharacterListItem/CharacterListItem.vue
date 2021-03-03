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
      <slot name="actions" />
    </template>
  </AListItem>
</template>

<script lang="ts">
/**
 * Global, Api Types
 */
import { PropType } from 'vue'
import { ComponentPropsOptions } from 'vue'
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
  components: {
    AListItem: List.Item,
    AListItemMeta: List.Item.Meta,
    AAvatar,
  },
  props,
}
</script>
