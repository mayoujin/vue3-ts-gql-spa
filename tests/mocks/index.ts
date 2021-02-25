import {
  DefaultApolloClient,
  provideApolloClient,
} from '@vue/apollo-composable/dist'
import cache from '@/api/apollo/cache'
import { createMockClient as _createMockClient } from 'mock-apollo-client'

export const createMockClient = (options = {}) => {
  const client = _createMockClient({
    cache,
    ...options,
  })
  return client
}

export const provideMockClient = (client) => {
  provideApolloClient(client)
}
