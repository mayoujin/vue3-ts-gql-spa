import { useEventHook } from '@vue/apollo-composable/dist/util/useEventHook'
import { useStoreVariable as useStoreVariableFn } from '@/store/apollo/cache'

const useStoreVariableEventHook = useEventHook()

export const register = ({
  useStoreVariable,
}: {
  useStoreVariable: typeof useStoreVariableFn
}) => {
  useStoreVariableEventHook.on(useStoreVariable)
}
