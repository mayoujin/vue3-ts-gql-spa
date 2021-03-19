import { Router } from 'vue-router'

import {
  RenderFunction as RenderFunctionOriginal,
  SetupContext,
  PropType as _PropTypeVue,
  ComponentPropsOptions as _ComponentPropsOptions,
  createApp,
} from 'vue'

import * as store from '@/store'

declare global {
  type SetupFunction<Props, ReturnType> = (
    props: Readonly<Props>,
    ctx: SetupContext,
  ) => ReturnType

  type PropType<T> = _PropTypeVue<T>
  type ComponentPropsOptions<T> = _ComponentPropsOptions<T>
  type RenderFunction = RenderFunctionOriginal | (() => JSX.Element)

  export interface ModuleRegisterParams {
    app?: ReturnType<typeof createApp>
    router?: Router
    addRoute?: Router['addRoute']
    store?: typeof store
    installPlugin?: (plugin: any) => ReturnType<typeof createApp>
  }
}
