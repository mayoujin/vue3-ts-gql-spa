<template>
  <AListItem v-test :data-character-id="id">
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
import { defineComponent } from 'vue'
/**
 * Global UI
 */
import { List, Avatar } from '@ui'
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

export default defineComponent({
  name: 'CharacterListItem',
  components: {
    AListItem: List.Item,
    AListItemMeta: List.Item.Meta,
    AAvatar: Avatar,
  },
  props,
})
</script>
