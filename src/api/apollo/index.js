//import { pipe, identity } from 'ramda'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { client as defaultClient } from './client'
export { defaultClient as client }

export const setup = (app) => {
  app.provide(DefaultApolloClient, defaultClient)
}
