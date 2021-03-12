import { RouteRecordRaw } from 'vue-router'
import ROOT_ROUTE from '@modules/r-n-m/layouts/routes'
import CHARACTERS_LIST_ROUTE from '@modules/r-n-m/pages/CharactersListPage/routes'

export const ROUTES = {
  ROOT_ROUTE,
  CHARACTERS_LIST_ROUTE,
}

export const routes: RouteRecordRaw[] = [
  {
    ...ROOT_ROUTE,
    redirect: () => CHARACTERS_LIST_ROUTE,
    children: [CHARACTERS_LIST_ROUTE],
  },
]
