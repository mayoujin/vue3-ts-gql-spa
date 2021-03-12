import { routes } from './routes'

export const register = ({ router }: ModuleRegisterParams) => {
  routes.forEach((route) => {
    router.addRoute('layout', route)
  })
}
