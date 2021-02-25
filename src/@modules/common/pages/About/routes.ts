const component = async () => await import(/* webpackChunkName: "About" */ '.')

export const ROUTE = {
  path: '/about',
  name: 'about',
  component,
}
