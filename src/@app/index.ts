/**
 * Core App UI and Behaviour.
 * Create and initialize root Vue instance.
 * Contains App layouts, headers, footers, menus, dialogs, reusable widgets.
 */

import { createApp as createVueApp } from 'vue'
import { routes } from './routes'
import { ROOT_ROUTE } from './routes'
export { ROOT_ROUTE } from './routes'
import RootComponent from './App.vue'

/**
 *
 */
const createVueAppInstance = () => {
  const app = createVueApp(RootComponent)
  return app
}

/**
 *
 */
class AppManager {
  private vueApp: ReturnType<typeof createVueAppInstance>
  routeAdder: (route) => any

  constructor({ router, store }) {
    this.initRouter({ router })
    this.initStore({ store })
  }

  private initRouter({ router }) {
    routes.forEach(router.addRoute)
    this.routeAdder = (route) => router.addRoute(ROOT_ROUTE.name, route)
  }

  private initStore({ store }) {
    // todo: implement
  }

  createApp() {
    this.vueApp = createVueAppInstance()
    return this.vueApp
  }

  runApp() {
    this.vueApp.mount('#app')
  }

  installPlugin(plugin, ...options) {
    return this.vueApp.use(plugin, ...options)
  }
}

export const createAppManager = ({ router, store }) =>
  new AppManager({ router, store })

export default AppManager
