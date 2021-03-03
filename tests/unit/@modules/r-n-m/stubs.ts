import { ApolloQueryResult } from '@apollo/client/core/types'
import { CharactersQuery } from 'types/api'
import { Characters } from '@modules/r-n-m/types/characters'
import { NetworkStatus } from '@apollo/client/core/networkStatus'
import { DocumentNode } from 'graphql'
import CharactersListQuery from '@modules/r-n-m/api/operations/queries/CharactersList.query.graphql'
import jest from '@vue/cli-plugin-unit-jest/node_modules/jest-mock'

const queryCharactersDocument = CharactersListQuery

type CharactersQueryResult = ApolloQueryResult<CharactersQuery>

export const charactersListMock: Characters = [
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
]

const charactersQueryResultMock: CharactersQueryResult = {
  data: {
    characters: {
      results: charactersListMock,
    },
  },
  loading: false,
  networkStatus: NetworkStatus.ready,
}

const charactersListMocked = jest
  .fn<Promise<CharactersQueryResult>, never>()
  .mockResolvedValue(charactersQueryResultMock)

// @ts-ignore
export const requests = new Map<DocumentNode, typeof charactersListMocked>()
requests.set(queryCharactersDocument, charactersListMocked)
