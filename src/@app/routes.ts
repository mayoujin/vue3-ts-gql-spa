import AppLayout from './layout'

export const ROOT_ROUTE = {
  path: '/',
  name: 'layout',
  component: AppLayout,
  redirect: 'home',
}

export const routes = [ROOT_ROUTE]
