import { ApolloClient } from '@apollo/client'

import cache from './cache'
import link from './links'
// import resolvers from './resolvers'
// import { link as mockLink } from '#gql/mock'

// Create the apollo client
export const client = new ApolloClient({
  // link: getEnv('API_GRAPHQL_MOCK') ? mockLink : links,
  link,
  cache,
  connectToDevTools: true,
  // resolvers,
})
