import { inject, provide } from 'vue'
import * as services from './_index'
import { IServices } from './_index'

const servicesName = Symbol('services')

export const provideServices = () => {
  provide(servicesName, services)
}
export const useServices = (): IServices => services
