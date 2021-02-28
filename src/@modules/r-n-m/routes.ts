import { RouteRecordRaw } from 'vue-router'

const RootLayout = async () =>
  await import(
    /* webpackChunkName: "RootLayout"  */ './components/layouts/base'
  )
const CharactersList = async () =>
  await import(
    /* webpackChunkName: "CharactersList"  */ './pages/CharactersListPage'
  )

const ROOT_ROUTE: RouteRecordRaw = {
  path: '/rick-and-morty',
  name: 'rick-and-morty',
  component: RootLayout,
}

const CHARACTERS_LIST_ROUTE: RouteRecordRaw = {
  path: 'characters-list',
  name: 'characters-list',
  component: CharactersList,
}

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
