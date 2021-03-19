/**
 * Apollo cache create and initialize
 */
import { InMemoryCache } from '@apollo/client/cache'
import typePolicies from './typePolicies'

export const createCache = () => {
  return new InMemoryCache({
    typePolicies,
  })
}
