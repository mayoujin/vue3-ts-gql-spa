const component = () => import(/* webpackChunkName: "Home" */ '.')

export const ROUTE = {
  path: '/home',
  name: 'home',
  component,
}
