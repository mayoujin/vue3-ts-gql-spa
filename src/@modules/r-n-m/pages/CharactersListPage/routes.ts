import { RouteRecordRaw } from 'vue-router'

const CharactersList = () =>
  import(/* webpackChunkName: "CharactersList"  */ '.')

export const CHARACTERS_LIST_ROUTE: RouteRecordRaw = {
  path: 'characters-list',
  name: 'characters-list',
  component: CharactersList,
}

export default CHARACTERS_LIST_ROUTE
