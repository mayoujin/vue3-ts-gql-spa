/**
 *
 */
import { register as registerCommon } from './common'
import { register as registerRnM } from './r-n-m'

const modules = [registerCommon, registerRnM]

/**
 *
 * @param app
 * @param router
 * @param store
 */
export const register = ({ app, addRoute, store }: ModuleRegisterParams) => {
  modules.forEach((register) => register({ app, addRoute, store }))
}
