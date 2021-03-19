/**
 * Common App Module
 * Contains optional App pages like Login, About, Home, Contacts, Login etc.
 */
import { routes } from './routes'

export const register = ({ addRoute }: ModuleRegisterParams) => {
  routes.forEach(addRoute)
}
