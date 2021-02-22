import { withClientState } from 'apollo-link-state'
import { createCache } from '@/api/apollo/cache'
import { typePolicies } from './typePolicies'
import { ApolloLink } from '@apollo/client'

export const cache = createCache({
  typePolicies,
})

export default withClientState({
  cache,
  /*
  defaults: {
    countSample: 0,
  },
*/
  resolvers: {
    Mutation: {
      /*
      increment: (obj: any, args: any, { cache }: any) => {
        const count = readCache(cache, 'countSample')
        writeCache(cache, 'countSample', count + 1)

        return null
      },
*/
    },
  },
})
