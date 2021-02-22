import { applyPlugins } from '@/plugins'

export const bootBeforeCreated = ({ store, apollo }) => {
  store.install({ connectApolloLink: apollo.connectLink })
}

export const afterCreated = ({ app, apollo }) => {
  applyPlugins({ app })
  apollo.install({ app })
}
