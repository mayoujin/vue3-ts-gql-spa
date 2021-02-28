import { useQuery, useResult } from '@api/index'
// import { Character } from '@modules/r-n-m/types'
import { Ref } from 'vue'
import { CharactersQuery } from 'types/api'
// import { Characters, heroes as heroesVar } from '@modules/r-n-m/entities/heroes'
// import queryGetHeroesDocument from './queries/HeroesList.query.graphql'
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
