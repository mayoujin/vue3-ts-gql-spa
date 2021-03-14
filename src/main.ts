import '@/css'
import { createApp, beforeCreated as appBeforeCreated } from '@/@app'
import { register as registerModules } from '@/@modules'
import { afterCreated } from '@/.boot'

import router from '@/plugins/router'
import * as store from '@/store'
import * as apollo from '@/api/apollo'
import { client as apolloClient } from '@/api/apollo/client'

appBeforeCreated({ router })
registerModules({ router, store })
const app = createApp({ router })
afterCreated({ apollo, app, apolloClient })
