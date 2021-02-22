import { DefaultApolloClient } from '@vue/apollo-composable'
import { client } from './client'

export { client } from './client'
export { connectLink } from './links'

export const install = ({ app }) => {
  app.provide(DefaultApolloClient, client)
}
