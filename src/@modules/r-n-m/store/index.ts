export { useStoreVariable } from '@/store'

import { useEventHook } from '@vue/apollo-composable/dist/util/useEventHook.js'
import { useStoreVariable as useStoreVariableFn } from '@/store'

// const useStoreVariableEventHook = useEventHook<>()

export const register = ({
  useStoreVariable,
}: {
  useStoreVariable: typeof useStoreVariableFn
}) => {
  console.log({ useStoreVariable })
  // useStoreVariableEventHook.on(useStoreVariable)
}
