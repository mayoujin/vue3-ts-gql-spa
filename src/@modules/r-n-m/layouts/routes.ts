import { RouteRecordRaw } from 'vue-router'
import RootLayout from './base'

export const ROOT_ROUTE: RouteRecordRaw = {
  path: '/rick-and-morty',
  name: 'rick-and-morty',
  component: RootLayout,
}

export default ROOT_ROUTE
