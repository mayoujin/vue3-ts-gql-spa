<template>
  <AList
    item-layout="horizontal"
    :data-source="characters"
    :loading="isLoading"
  >
    <template #renderItem="{ item }">
      <ListItem v-bind="item">
        <template #actions>
          <slot name="actions" :item="item" />
        </template>
      </ListItem>
    </template>
  </AList>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { List as AList } from '@/@ui'

import { setup, props } from './setup'
import ListItem from '@modules/r-n-m/components/organisms/CharacterListItem'

/**
 * Template bindings Type check Declaration with check
 */

export default defineComponent({
  setup,
  components: {
    ListItem,
    AList,
  },
  props,
})
</script>
