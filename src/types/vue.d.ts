import {
  defineProps as definePropsFn,
  defineEmit as defineEmitFn,
  RenderFunction as RenderFunctionOriginal,
} from 'vue'
import { defineComponent as defineComponentFn } from '@vue/runtime-core/dist/runtime-core.d'

import { SetupContext } from '@vue/runtime-core'

declare module '*.vue' {
  const Component: ReturnType<typeof defineComponentFn>
  export default Component
}

declare module '*.pcss' {
  const content: Record<string, string>
  export default content
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.module.pcss' {
  const content: Record<string, string>
  export default content
}

declare global {
  type SetupFunction<Props, ReturnType> = (
    props: Readonly<Props>,
    ctx: SetupContext,
  ) => ReturnType
  const defineComponent: typeof defineComponentFn
  const defineProps: typeof definePropsFn
  const defineBindings: typeof definePropsFn
  const defineEmits: typeof defineEmitFn

  namespace JSX {
    interface Element extends ReturnType<typeof defineComponentFn> {}
  }

  type RenderFunction = RenderFunctionOriginal | (() => JSX.Element)
}
