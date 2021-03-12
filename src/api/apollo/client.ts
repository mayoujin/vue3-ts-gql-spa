import { ApolloClient } from '@apollo/client'

import cache from './cache'
import link from './links'

// Create the apollo client
export const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
})
