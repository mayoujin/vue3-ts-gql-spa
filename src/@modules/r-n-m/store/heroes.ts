import { useStoreVariable } from '@/store'
import { Heroes } from '@modules/r-n-m/entities/heroes'

export const {
  variable: heroes,
  extendTypePolicies: extendTypePoliciesWithHeroes,
} = useStoreVariable<Heroes>({
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
