import { useQuery, useResult } from '@api/index'
import { CharactersQuery } from '@/@types/api'
import queryCharactersDocument from './queries/CharactersList.query.graphql'

/**
 * Load characters list from remote api
 */
export const useQueryCharacters = () => {
  const { result, loading: isLoading } = useQuery<CharactersQuery>(
    queryCharactersDocument,
  )
  const characters = useResult(
    result,
    [],
    ({ characters: { results } }) => results,
  )

  return {
    isLoading,
    characters,
  }
}
