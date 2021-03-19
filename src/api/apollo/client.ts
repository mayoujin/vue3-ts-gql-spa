/**
 * Apollo client create and initialize.
 */
import { ApolloClient } from '@apollo/client'

import { createCache } from './cache'
import link from './links'

export const createApolloClient = () =>
  new ApolloClient({
    link,
    cache: createCache(),
    connectToDevTools: true,
  })
