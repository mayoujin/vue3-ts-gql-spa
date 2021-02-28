import { ModuleRegisterParams } from '@/index'
import { routes } from './routes'
import { register as registerEntities } from '@modules/r-n-m/store'

export const register = ({ router, store }: ModuleRegisterParams) => {
  routes.forEach((route) => {
    router.addRoute('layout', route)
  })
  registerEntities(store)
}
