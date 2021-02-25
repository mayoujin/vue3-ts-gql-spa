import { createApp as createVueApp } from 'vue'
import { routes } from './routes'
import App from './App.vue'

export function beforeCreated ({ router }) {
  routes.forEach(router.addRoute)
}

export const createApp = ({ router }) => {
  const app = createVueApp(App)
  app.use(router)
  app.mount('#app')
  return app
}
