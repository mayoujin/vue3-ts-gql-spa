const component = () => import(/* webpackChunkName: "About" */ '.')

export const ROUTE = {
  path: '/about',
  name: 'about',
  component,
}
