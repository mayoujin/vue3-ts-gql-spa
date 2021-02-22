import { ReactiveVar } from '@apollo/client/cache/inmemory/reactiveVars'
import { makeVar, TypePolicies, TypePolicy } from '@apollo/client'
import { typePolicies as typePoliciesStore } from './typePolicies'

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
  extendTypePolicies(typePoliciesStore, variable)

  return variable
}

export const extendTypePolicies = (
  callback: (typePolicies: TypePolicies) => void,
) => {
  callback(typePoliciesStore)
}
