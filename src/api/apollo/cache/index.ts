import { InMemoryCache } from '@apollo/client/cache'
import typePolicies from './typePolicies'

export default new InMemoryCache({
  typePolicies,
})

export const createCache = (options) => {
  return new InMemoryCache(options)
}

export { extendTypePolicies } from './typePolicies'
