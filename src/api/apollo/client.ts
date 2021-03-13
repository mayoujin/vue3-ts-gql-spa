/**
 * Apollo client create and initialize.
 */
import { ApolloClient } from '@apollo/client'

import cache from './cache'
import link from './links'

export const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
})
