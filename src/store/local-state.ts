import { ReactiveVar } from '@apollo/client/cache/inmemory/reactiveVars'
import { makeVar, TypePolicies } from '@apollo/client'

/**
 *
 * @param extendTypePolicies
 * @param initialValue
 */
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
  const _extendTypePolicies = (typePolicies) =>
    extendTypePolicies(typePolicies, variable)

  return { variable, extendTypePolicies: _extendTypePolicies }
}
