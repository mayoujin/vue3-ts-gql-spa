/**
 * Rick and Morty App Module.
 * Contains specific module .
 */
import { routes } from './routes'

export const register = ({ router }: ModuleRegisterParams) => {
  routes.forEach((route) => {
    router.addRoute('layout', route)
  })
}
