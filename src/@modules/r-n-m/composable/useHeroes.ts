import {
  addHero,
  fetchHeroes,
  removeHero,
} from '@modules/r-n-m/services/heroes'

/**
 * Heroes manage api
 */
export const useHeroes = () => {
  return {
    fetchItems: fetchHeroes,
    addItem: addHero,
    removeItem: removeHero,
  }
}
