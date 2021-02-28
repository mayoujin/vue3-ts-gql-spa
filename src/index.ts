import './css'
import { createApp, beforeCreated } from './@app'
import { register as registerModules } from '@/@modules'
import { bootBeforeCreated, afterCreated } from '@/.boot'

import router from '@/router'
import * as store from '@/store'
import * as apollo from '@/api/apollo'
// import { client as apolloClient } from '@/api/apollo/client'
import { createMockClient } from '../tests/mocks'
import { requests } from '../tests/unit/@modules/r-n-m/stubs'

const apolloClient = createMockClient({}, { requests })

export interface ModuleRegisterParams {
  app?: ReturnType<typeof createApp>
  router?: typeof router
  store?: typeof store
  apollo?: typeof apollo
  apolloClient?: typeof apolloClient
}

beforeCreated({ router })
bootBeforeCreated({ store, apollo })
registerModules({ router, store })

const app = createApp({ router })
afterCreated({ apollo, app, apolloClient })
