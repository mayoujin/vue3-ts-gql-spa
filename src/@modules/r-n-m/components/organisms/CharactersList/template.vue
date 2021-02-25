<template>
  <AList item-layout="horizontal" :data-source="characters">
    <template #renderItem="{ item }">
      <ListItem v-bind="item">
        <template #actions>
          <slot name="actions" :item="item"></slot>
        </template>
      </ListItem>
    </template>
  </AList>
</template>

<script lang="ts">
import { PropType, defineProps } from 'vue'
import { RawBindings } from './types/props'

import ListItem from '../../organisms/CharacterListItem'
// import _$style from './styles.module.pcss'

export const components = {
  ListItem,
}
/**
 * Template bindings Type check Declaration with check
 */

export const props = {
  isLoading: Boolean,
  characters: Array as PropType<RawBindings['characters']>,
}

// export const $style = _$style

defineProps<RawBindings>(props)

export default {
  components,
  props,
  // $style,
}
</script>
