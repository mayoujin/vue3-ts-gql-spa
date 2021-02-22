import {
  defineComponent as defineComponentFn,
  defineProps as definePropsFn,
  defineEmit as defineEmitFn,
} from 'vue'
import { RenderFunction, SetupContext } from '@vue/runtime-core'

declare module '*.vue' {
  const Component: ReturnType<typeof defineComponentFn>
  export default Component
}
declare module '*.tsx' {
  export default RenderFunction
}

declare global {
  type SetupFunction<Props, RawBindings> = (
    props: Readonly<Props>,
    ctx: SetupContext,
  ) => RawBindings | RenderFunction
  const defineComponent: typeof defineComponentFn
  const defineProps: typeof definePropsFn
  const defineBindings: typeof definePropsFn
  const defineEmits: typeof defineEmitFn

  namespace JSX {
    interface Element extends ReturnType<typeof defineComponentFn> {}
  }
}
