import { DefaultApolloClient, provideApolloClient } from '@/api/index'
import cache from '@/api/apollo/cache'
import { createMockClient as _createMockClient } from 'mock-apollo-client'

export const createMockClient = (options = {}, { requests }) => {
  const client = _createMockClient({
    cache,
    ...options,
  })

  if (requests) {
    requests.forEach((handler, document) => {
      client.setRequestHandler(document, handler)
    })
  }

  return client
}

export const provideMockClient = (client) => {
  provideApolloClient(client)
}
