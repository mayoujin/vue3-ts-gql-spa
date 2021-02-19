const RootLayout = () =>
  import(/* webpackChunkName: "RootLayout"  */ './layouts/base')
const CharactersList = () =>
  import(/* webpackChunkName: "CharactersList"  */ './pages/CharactersList')

const ROOT_ROUTE = {
  path: '/rick-and-morty',
  name: 'rick-and-morty',
  component: RootLayout,
}

const CHARACTERS_LIST_ROUTE = {
  path: 'characters-list',
  name: 'characters-list',
  component: CharactersList,
}

export const ROUTES = {
  ROOT_ROUTE,
  CHARACTERS_LIST_ROUTE,
}

export const routes = [
  {
    ...ROOT_ROUTE,
    redirect: () => CHARACTERS_LIST_ROUTE,
    children: [CHARACTERS_LIST_ROUTE],
  },
]
