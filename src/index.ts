import '@/css'
import { createApp } from '@/@app'
import { register as registerModules } from '@/@modules'
import { afterCreated } from '@/.boot'

import router from '@/plugins/router'
import * as store from '@/store'
import * as apollo from '@/api/apollo'
import { client as apolloClient } from '@/api/apollo/client'

export interface ModuleRegisterParams {
  app?: ReturnType<typeof createApp>
  router?: typeof router
  store?: typeof store
  apollo?: typeof apollo
  apolloClient?: typeof apolloClient
}

registerModules({ router, store })
const app = createApp({ router })
afterCreated({ apollo, app, apolloClient })
