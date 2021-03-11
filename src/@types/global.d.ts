import {
  RenderFunction as RenderFunctionOriginal,
  SetupContext,
  PropType as _PropTypeVue,
  ComponentPropsOptions as _ComponentPropsOptions,
} from 'vue'

declare global {
  type SetupFunction<Props, ReturnType> = (
    props: Readonly<Props>,
    ctx: SetupContext,
  ) => ReturnType

  type PropType<T> = _PropTypeVue<T>
  type ComponentPropsOptions<T> = _ComponentPropsOptions<T>
  type RenderFunction = RenderFunctionOriginal | (() => JSX.Element)
}
