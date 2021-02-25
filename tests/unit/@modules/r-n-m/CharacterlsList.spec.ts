import { NetworkStatus } from '@apollo/client/core/networkStatus'
import { CharactersQuery } from 'types/api'
import { ApolloQueryResult } from '@apollo/client'

import { mount } from '@vue/test-utils'
import { createMockClient, provideMockClient } from 'tests/mocks'

// import { Characters } from '@modules/r-n-m/entities/heroes'
import CharactersList from '@modules/r-n-m/pages/CharactersList'
// @ts-ignore
import queryCharactersDocument from '@modules/r-n-m/entities/heroes/operations/queries/CharactersList.query.graphql'

const heroListMock: ApolloQueryResult<CharactersQuery> = {
  data: {
    characters: {
      results: [
        {
          id: '1',
          name: 'Test Hero',
          species: 'Human',
          image: '#',
          location: {
            name: 'Location',
          },
          type: 'Human',
        },
        {
          id: '2',
          name: 'Test Hero 2',
          species: 'Human',
          image: '#',
          location: {
            name: 'Location',
          },
          type: 'Human',
        },
      ],
    },
  },
  loading: false,
  networkStatus: NetworkStatus.ready,
}

const requestsMap = new Map([
  queryCharactersDocument,
  jest.fn().mockResolvedValue(heroListMock),
])

describe('CharactersList.vue', () => {
  let wrapper
  let apolloClient

  const createComponent = () => {
    apolloClient = createMockClient()
    provideMockClient(apolloClient)
    wrapper = mount(CharactersList)

    requestsMap.forEach((handler, document) => {
      apolloClient.setRequestHandler(document, handler)
    })
  }

  const destroyComponent = () => {
    wrapper.unmount()
    wrapper = null
    apolloClient = null
  }

  beforeEach(() => {
    createComponent()
  })
  afterEach(() => {
    destroyComponent()
  })

  it('should mounted', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
