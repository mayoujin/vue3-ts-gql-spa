import { TypePolicies } from '@apollo/client'
// import { extendCacheTypePoliciesEventHook } from '@/store/apollo/cache'

// export { useStoreVariable, extendCacheTypePoliciesEventHook } from './cache'
export { useStoreVariable } from './cache'

export const install = ({
  extendTypePolicies,
}: {
  extendTypePolicies: (typePolicies: TypePolicies) => void
}) => {
  /*
  debugger
  extendCacheTypePoliciesEventHook.on((typePolicies) => {
    extendTypePolicies(typePolicies)
  })
*/
}
