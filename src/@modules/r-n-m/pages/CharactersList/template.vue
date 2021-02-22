<template>
  <CharactersList
    :isLoading="isLoading"
    :characters="characters"
  ></CharactersList>
  {{ characters }}
</template>

<script lang="ts">
import CharactersList from '../../organisms/CharactersList'

export const components = {
  CharactersList,
}
</script>
