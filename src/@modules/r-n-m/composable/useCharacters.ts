import { fetchItems } from '@modules/r-n-m/services/characters'

/**
 * Heroes manage api
 */
export const useCharacters = () => {
  return {
    fetchItems,
  }
}
