import { InMemoryCache } from '@apollo/client/cache'
import typePolicies from './typePolicies'

// Cache implementation
export default new InMemoryCache({
  typePolicies,
})
