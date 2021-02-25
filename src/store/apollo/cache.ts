import { useEventHook } from '@vue/apollo-composable/dist/util/useEventHook'
import { ReactiveVar } from '@apollo/client/cache/inmemory/reactiveVars'
import { makeVar, TypePolicies } from '@apollo/client'
import { typePolicies } from '@/api/apollo'

// export const extendCacheTypePoliciesEventHook = useEventHook()
// export const typePoliciesExtenders = new Set()

export const useStoreVariable = <T>({
  extendTypePolicies,
  initialValue,
}: {
  extendTypePolicies: (
    typePolicies: TypePolicies,
    variable: ReactiveVar<T>,
  ) => void
  initialValue: T
}) => {
  const variable = makeVar<T>(initialValue)
  extendTypePolicies(typePolicies, variable)

  return variable
}
