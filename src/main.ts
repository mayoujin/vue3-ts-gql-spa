import '@/css'
import { createAppManager } from '@app'
import * as ModuleManager from '@modules'
import * as BootManager from '@/.boot'

import router from '@/plugins/router'
import * as store from '@/store'

const appManager = createAppManager({ router, store })
ModuleManager.register({ addRoute: appManager.routeAdder, store })
appManager.createApp()
BootManager.afterCreatedApp({
  installPlugin: appManager.installPlugin.bind(appManager),
})
appManager.runApp()
