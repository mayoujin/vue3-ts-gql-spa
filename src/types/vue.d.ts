import {
  defineProps as definePropsFn,
  defineEmit as defineEmitFn,
  RenderFunction as RenderFunctionOriginal,
  SetupContext,
  PropType as PropTypeVue,
} from 'vue'

import { defineComponent as defineComponentFn } from 'vue/dist/vue.d'

declare module '*.vue' {
  const Component: ReturnType<typeof defineComponentFn>
  export default Component
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.pcss' {
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
  export const defineComponent: typeof defineComponentFn
  export const defineProps: typeof definePropsFn
  export const defineEmits: typeof defineEmitFn
  type PropType<T> = PropTypeVue<T>
  // namespace JSX {
  //   interface Element extends ReturnType<typeof defineComponentFn> {}
  // }

  type RenderFunction = RenderFunctionOriginal | (() => JSX.Element)
}
