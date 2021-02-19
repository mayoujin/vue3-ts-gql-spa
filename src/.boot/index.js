import { applyPlugins } from '@/plugins'
import { setup as setupApolloClient } from '@/api/apollo'

//eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configure = (app) => {
  applyPlugins(app)
  setupApolloClient(app)
}
