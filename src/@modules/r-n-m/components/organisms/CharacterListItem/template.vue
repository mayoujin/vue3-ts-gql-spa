<template>
  <AListItem>
    <AListItemMeta :description="`${species}, ${location.name}`">
      <template #title>
        <span>{{ name }}</span>
      </template>
      <template #avatar>
        <a-avatar :src="image" />
      </template>
    </AListItemMeta>
    <template #actions>
      <slot name="actions"></slot>
    </template>
  </AListItem>
</template>

<script lang="ts">
import { PropType, defineProps } from 'vue'
import { ComponentPropsOptions } from '@vue/runtime-core'

import { Character } from '@modules/r-n-m/entities/types'

const props = {
  id: String,
  name: String,
  species: String,
  image: String,
  location: {
    type: Object as PropType<{ name: string }>,
  },
  type: String,
}

defineProps<Character>(props)

export default {
  props,
}
</script>
