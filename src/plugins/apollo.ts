/**
 *
 */
import { createApolloClient } from '@/api/apollo/client'
import { DefaultApolloClient, provideApolloClient } from '@api/index'

const createPlugin = ({ apolloClient }) => ({
  install: (app) => {
    app.provide(DefaultApolloClient, apolloClient)
    provideApolloClient(apolloClient)
  },
})

export const apply = ({ install }) => {
  const apolloClient = createApolloClient()
  const plugin = createPlugin({ apolloClient })
  install(plugin)
}
