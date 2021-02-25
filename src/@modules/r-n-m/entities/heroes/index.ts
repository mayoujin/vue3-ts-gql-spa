import {
  addHero,
  removeHero,
  useGetHeroes,
  useQueryCharacters,
} from '@modules/r-n-m/entities/heroes/operations'

export * from './types'
import { useStoreVariable as useStoreVariableFn } from '@/store'
import { Heroes } from './types'

export const heroes = useStoreVariableFn<Heroes>({
  extendTypePolicies: (typePolicies, variable) => {
    typePolicies.Query.fields.heroes = {
      ...typePolicies.Query.fields.heroes,
      read() {
        return variable()
      },
    }
  },
  initialValue: [],
})

/**
 * Heroes manage api
 */
export const useHeroes = () => {
  return {
    fetchItems: useGetHeroes,
    addItem: addHero,
    removeItem: removeHero,
  }
}

/**
 * Heroes manage api
 */
export const useCharacters = () => {
  return {
    useQueryCharacters,
  }
}
