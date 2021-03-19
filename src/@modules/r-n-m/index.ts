/**
 * Rick and Morty App Module.
 * Contains specific module .
 */
import { routes } from './routes'
// import { provideServices } from '@modules/r-n-m/services'
// export { useServices } from '@modules/r-n-m/services'

import { typePoliciesExtends } from '@modules/r-n-m/store'

export const register = ({ addRoute, store }: ModuleRegisterParams) => {
  routes.forEach(addRoute)
  typePoliciesExtends.forEach(store.extendSchema)
}

// provideServices()
