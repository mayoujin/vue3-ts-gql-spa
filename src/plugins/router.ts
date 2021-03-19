/**
 *
 */
import { createRouter, createWebHistory, Router } from 'vue-router'
import { routes } from '@/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export const addRoute: Router['addRoute'] = (...args) => {
  // @ts-ignore
  return router.addRoute(...args)
}

export default router

export const apply = ({ install }) => {
  install(router)
}
