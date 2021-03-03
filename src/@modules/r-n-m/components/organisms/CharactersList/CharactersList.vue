<template>
  <AList item-layout="horizontal"
         :data-source="characters"
  >
    <template #renderItem="{ item }">
      <ListItem v-bind="item">
        <template #actions>
          <slot name="actions"
                :item="item"
          />
        </template>
      </ListItem>
    </template>
  </AList>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { List as AList } from '@ui/index'

import { RawBindings, ComponentProps } from './types'
import { setup, props } from './setup'

import ListItem from '../../organisms/CharacterListItem'
// @ts-ignore
import $style from './styles.module.pcss'

/**
 * Template bindings Type check Declaration with check
 */

export default {
  components: {
    ListItem,
    AList,
  },
  props,
  setup,
  $style,
}
</script>
