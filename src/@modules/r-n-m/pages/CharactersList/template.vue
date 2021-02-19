<template>
  <AList bem:b item-layout="horizontal" :data-source="characters">
    <template v-slot:renderItem="{ item, index }">
      <ListItem v-bind="item" />
    </template>
  </AList>
  <Button type="primary">Test</Button>
</template>

<script lang="ts">
import ListItem from '@modules/r-n-m/organisms/CharacterListItem'

export const components = {
  ListItem,
}
</script>
