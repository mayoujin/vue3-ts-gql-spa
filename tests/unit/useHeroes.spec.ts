import { watch } from 'vue'
import { createMockClient, provideMockClient } from 'tests/mocks'

import { useHeroes } from '@modules/r-n-m/composable/useHeroes'
import { heroes } from '@modules/r-n-m/store/heroes'
import { Hero, Heroes } from '@modules/r-n-m/entities/heroes'

import { charactersListMock } from './stubs'

const STUB_HERO_DATA: Hero = charactersListMock[0]

describe('useHeroes.ts composable', () => {
  const { addItem, removeItem, fetchItems } = useHeroes()

  let apolloClient

  beforeEach(() => {
    apolloClient = createMockClient()
    provideMockClient(apolloClient)
  })
  afterEach(() => {
    apolloClient = null
  })

  it('`heroes` policy should exists in Apollo cache', () => {
    // expect(wrapper.exists()).toBe(true)
    // expect(apolloClient).not.toBe(null)
    expect(apolloClient).toHaveProperty([
      'cache',
      'config',
      'typePolicies',
      'Query',
      'fields',
      'heroes',
    ])
  })

  it('`addItem` should add a hero to local state heroes list', () => {
    heroes([])
    addItem(STUB_HERO_DATA)
    expect(heroes()).toHaveLength(1)
    expect(heroes()[0].id).toEqual(STUB_HERO_DATA.id)
  })

  it('`addItem` should not add a hero with same id to local state heroes list', () => {
    heroes([STUB_HERO_DATA])
    addItem(STUB_HERO_DATA)
    expect(heroes()).toHaveLength(1)
  })

  it('`removeItem` should remove a hero from local state heroes list', () => {
    heroes([STUB_HERO_DATA])
    removeItem(STUB_HERO_DATA)
    expect(heroes()).toHaveLength(0)
  })

  it('`fetchItems` should receive heroes from local state with gql query', () => {
    heroes([STUB_HERO_DATA])
    provideMockClient(apolloClient)
    const { heroes: heroesRef } = fetchItems()
    expect(heroesRef.value).toEqual([STUB_HERO_DATA])
  })

  it(
    '`fetchItems` result watcher' +
      ' should be notified after local state `heroes` list changed',
    async () => {
      provideMockClient(apolloClient)
      heroes([])
      const { heroes: heroesRef } = fetchItems()

      const heroesUpdatedList: Promise<Readonly<Heroes>> = new Promise(
        (resolve) => {
          watch(heroesRef, (value) => {
            resolve(value)
          })
        },
      )
      heroes([STUB_HERO_DATA])
      expect(await heroesUpdatedList).toEqual([STUB_HERO_DATA])
    },
  )
})
