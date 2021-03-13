/**
 * Core App UI and Behaviour.
 * Create and initialize root Vue instance.
 * Contains App layouts, headers, footers, menus, dialogs, reusable widgets.
 */

import { createApp as createVueApp } from 'vue'
import { routes } from './routes'
import App from './App.vue'

export const createApp = ({ router }) => {
  const app = createVueApp(App)
  app.use(router)

  app.mount('#app')
  return app
}

/**
 * Before App instance created
 * @param router
 */
export const beforeCreated = ({ router }) => {
  routes.forEach(router.addRoute)
}

export { ROOT_ROUTE } from './routes'
