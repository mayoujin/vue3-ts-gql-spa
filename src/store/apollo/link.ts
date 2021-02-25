import { createCache } from '@/api/apollo/cache'
import { typePolicies } from './typePolicies'

export const cache = createCache({
  typePolicies,
})
