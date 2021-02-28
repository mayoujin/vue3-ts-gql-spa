import { Heroes } from '../types/heroes'
import { useStoreVariable } from '.'

export const heroes = useStoreVariable<Heroes>({
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
