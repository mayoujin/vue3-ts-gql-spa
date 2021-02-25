const component = async () => await import(/* webpackChunkName: "Test" */ '.')

export const ROUTE = {
  path: '/test',
  name: 'test',
  component,
}
