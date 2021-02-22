import { ModuleRegisterParams } from '@/index'
import { register as registerCommon } from './common'
import { register as registerRnM } from './r-n-m'

const modules = [registerCommon, registerRnM]

export const register = ({ app, router, store }: ModuleRegisterParams) => {
  modules.forEach((register) => register({ app, router, store }))
}
