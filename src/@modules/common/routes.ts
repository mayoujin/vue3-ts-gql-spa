import { RouteRecordRaw } from 'vue-router'

import { ROUTE as ROUTE_HOME } from '@modules/common/pages/Home/routes'

/**
 * Alias Enum for using in external referencing
 */
export const ROUTES = {
  HOME: ROUTE_HOME,
}

/**
 * Routes list, to import in global routes list config
 */
export const routes: RouteRecordRaw[] = [ROUTE_HOME]
