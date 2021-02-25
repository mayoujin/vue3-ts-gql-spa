const component = async () => await import(/* webpackChunkName: "Home" */ '.')

export const ROUTE = {
  path: '/home',
  name: 'home',
  component,
}
