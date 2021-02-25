import { useQuery, useResult } from '@vue/apollo-composable/dist'
import { Character } from '@modules/r-n-m/entities/types'
import { Ref } from 'vue'
import { CharactersQuery } from 'types/api'
import { Characters, heroes as heroesVar } from '@modules/r-n-m/entities/heroes'
import queryGetHeroesDocument from './queries/HeroesList.query.graphql'
import queryCharactersDocument from './queries/CharactersList.query.graphql'

/**
 * Load favourite characters list from local state
 */
export const useGetHeroes = (): {
  loading: Ref<boolean>
  heroes: Readonly<Ref<Readonly<Characters>>>
} => {
  const { result, loading } = useQuery<{ heroes: Characters }>(
    queryGetHeroesDocument,
  )

  const heroes = useResult(result, [], ({ heroes }) => heroes)
  return {
    loading,
    heroes,
  }
}

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

/**
 * Add character to favourites heroes list
 *
 * @param {Character} character
 */
export const addHero = (character: Character) => {
  const characters = heroesVar()
  heroesVar(
    characters.filter(({ id }) => character.id !== id).concat(character),
  )
}

/**
 * Remove character from favourites heroes list
 *
 * @param {Character} character
 */
export const removeHero = (character: Character) => {
  const characters = heroesVar()
  heroesVar(characters.filter(({ id }) => character.id !== id))
}
