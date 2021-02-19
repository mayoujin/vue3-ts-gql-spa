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
import { PropType } from 'vue'
import { ComponentProps } from '@modules/r-n-m/organisms/CharacterListItem/props'

const props: ComponentProps = {
  name: String,
  species: String,
  image: String,
  location: {
    type: Object as PropType<{ name: string }>,
  },
  type: String,
}

export default {
  props,
}
</script>
