import { toRefs, reactive, ToRefs } from '@vue/reactivity'
import { ComponentProps, RawBindings } from './types/props'

export const setup: SetupFunction<ComponentProps, ToRefs<RawBindings>> = (
  props,
) => {
  return toRefs(props)
}

export default {
  setup,
}
