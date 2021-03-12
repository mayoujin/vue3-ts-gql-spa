import { createApp as createVueApp } from 'vue'
import { routes } from './routes'
import App from './App.vue'

export const createApp = ({ router }) => {
  const app = createVueApp(App)

  routes.forEach(router.addRoute)
  app.use(router)

  app.mount('#app')

  return app
}
