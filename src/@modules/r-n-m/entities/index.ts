import { useStoreVariable as useStoreVariableFn } from '@/store/apollo/cache'
import { Character } from '@modules/r-n-m/entities/types'

export let heroes = null

export const register = ({
  useStoreVariable,
}: {
  useStoreVariable: typeof useStoreVariableFn
}) => {
  heroes = useStoreVariable<Character[]>({
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
}
