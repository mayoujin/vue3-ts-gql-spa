import { toRefs, reactive, ToRefs } from '@vue/reactivity'
import { ComponentProps, RawBindings } from './types/props'

export const setup: SetupFunction<ComponentProps, ToRefs<RawBindings>> = (
  props,
  context,
) => {
  const { emit } = context

  const onAction = ($event, action, ...args) => {
    emit('action', action, args)
  }

  return {
    onAction,
    ...toRefs(props),
  }
}

export default {
  setup,
}
