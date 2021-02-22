import './css'
import { createApp, beforeCreated } from './@app'
import { register as registerModules } from '@/@modules'
import { bootBeforeCreated, afterCreated } from '@/.boot'

import router from '@/router'
import * as store from '@/store'
import * as apollo from '@/api/apollo'

export interface ModuleRegisterParams {
  app?: ReturnType<typeof createApp>
  router?: typeof router
  store?: typeof store
}

beforeCreated({ router })
bootBeforeCreated({ store, apollo })
registerModules({ router, store })

const app = createApp({ router })
afterCreated({ app, apollo })
