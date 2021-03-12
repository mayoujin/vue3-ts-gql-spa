import { computed, ComputedRef, ref, Ref } from 'vue'
import { useQuery, useResult } from '@api'
import { CharactersQuery, QueryCharactersArgs } from '@/@types/api'
import queryCharactersDocument from './queries/CharactersList.query.graphql'

/**
 * Load characters list from remote api
 */
export const useQueryCharacters = () => {
  const page = ref(0)
  const variables: Ref<QueryCharactersArgs> = computed(() => ({
    page: page.value,
  }))

  const { result, loading: isLoading } = useQuery<
    CharactersQuery,
    QueryCharactersArgs
  >(queryCharactersDocument, variables)
  const characters = useResult(
    result,
    [],
    ({ characters: { results } }) => results,
  )

  return {
    isLoading,
    characters,
    page,
  }
}
