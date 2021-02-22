<template>
  <a-list-item>
    <a-list-item-meta :description="`${species}, ${location.name}`">
      <template v-slot:title>
        <span>{{ name }}</span>
      </template>
      <template v-slot:avatar>
        <a-avatar :src="image" />
      </template>
    </a-list-item-meta>
  </a-list-item>
</template>

<script lang="ts">
import { PropType, defineProps } from 'vue'
import { ComponentPropsOptions } from '@vue/runtime-core'

import { Character } from '@modules/r-n-m/entities/types'

const props = {
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
