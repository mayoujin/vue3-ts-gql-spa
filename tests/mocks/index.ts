import { createMockClient as _createMockClient } from 'mock-apollo-client'
import {
  MockApolloClient,
  MockApolloClientOptions,
  RequestHandler,
} from 'mock-apollo-client/dist/mockClient'
import { DocumentNode } from 'graphql'

import { provideApolloClient } from '@/api/index'
import cache from '@/api/apollo/cache'

interface ExtraMockOptions {
  requests: Map<DocumentNode, RequestHandler>
}

export const createMockClient = (
  apolloOptions?: MockApolloClientOptions,
  mockOptions?: ExtraMockOptions,
): ReturnType<typeof _createMockClient> => {
  const client = _createMockClient({
    cache,
    ...apolloOptions,
  })

  if (!mockOptions) {
    return client
  }

  const { requests } = mockOptions
  if (requests) {
    requests.forEach((handler, document) => {
      client.setRequestHandler(document, handler)
    })
  }

  return client
}

export const provideMockClient = (client: MockApolloClient) => {
  provideApolloClient(client)
}
