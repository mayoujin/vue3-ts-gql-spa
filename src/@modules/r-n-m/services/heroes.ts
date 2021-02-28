import { Ref } from 'vue'

import { Heroes, Hero } from '@modules/r-n-m/types/heroes'
import { Character } from '@modules/r-n-m/types/characters'

import { heroes as heroesVar } from '@modules/r-n-m/store/heroes'
import { useQuery, useResult } from '@api/index'

import queryGetHeroesDocument from '@modules/r-n-m/api/operations/queries/HeroesList.query.graphql'

/**
 * Load favourite characters list from local state
 */
export const fetchHeroes = (): {
  loading: Ref<boolean>
  heroes: Readonly<Ref<readonly Character[]>>
} => {
  const { result, loading } = useQuery<{ heroes: Heroes }>(
    queryGetHeroesDocument,
  )

  const heroes = useResult(result, [], ({ heroes }) => heroes)
  return {
    loading,
    heroes,
  }
}

/**
 * Add character to favourites heroes list
 *
 * @param {Character} character
 */
export const addHero = (character: Character) => {
  const heroes = heroesVar()
  if (heroes.findIndex(({ id }) => character.id === id) === -1) {
    heroesVar(heroes.concat(character))
  }
}

/**
 * Remove character from favourites heroes list
 *
 * @param hero
 */
export const removeHero = (hero: Hero) => {
  const heroes = heroesVar()
  heroesVar(heroes.filter(({ id }) => hero.id !== id))
}
