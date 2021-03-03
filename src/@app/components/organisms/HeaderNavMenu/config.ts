import { RouteRecord } from 'vue-router'
import { ROUTES as COMMON_ROUTES } from '@modules/common/routes'
import { ROUTES as RNM_ROUTES } from '@modules/r-n-m/routes'

/**
 *
 * @type {({route: {path: string, component: () => Promise<any>, name: string}, title: string}|{route: {path: string, component: () => Promise<any>, name: string}, title: string}|{route: {path: string, component: () => Promise<any>, name: string}, title: string}|{route: {path: string, component: function(): Promise<{readonly default?: function(): *}>, name: string}, title: string})[]}
 */
interface MenuItemParams {
  title: string
  route: RouteRecord
}

export const MenuItemsList = [
/*
  {
    title: 'About',
    route: COMMON_ROUTES.ABOUT,
  },
*/
  {
    title: 'Home',
    route: COMMON_ROUTES.HOME,
  },
  {
    title: 'Reshadow Test',
    route: COMMON_ROUTES.TEST,
  },
  {
    title: 'Rick&Morty',
    route: RNM_ROUTES.ROOT_ROUTE,
  },
]
