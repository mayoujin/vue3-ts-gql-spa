import { Router } from 'vue-router'

import {
  RenderFunction as RenderFunctionOriginal,
  SetupContext,
  PropType as _PropTypeVue,
  ComponentPropsOptions as _ComponentPropsOptions,
  createApp,
} from 'vue'

import * as store from '@/store'
import * as apollo from '@/api/apollo'
import { client as apolloClient } from '@/api/apollo/client'

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
    store?: typeof store
    apollo?: typeof apollo
    apolloClient?: typeof apolloClient
  }
}
