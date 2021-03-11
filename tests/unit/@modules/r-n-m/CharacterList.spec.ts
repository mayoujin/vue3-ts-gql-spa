import 'tests/unit'
import { mount, flushPromises } from '@vue/test-utils'

import { createMockClient, provideMockClient } from 'tests/mocks'

import CharactersListPage from '@modules/r-n-m/pages/CharactersListPage'
import CharactersSection from '@modules/r-n-m/pages/CharactersListPage/components/CharactersSection.vue'
import HeroesSection from '@modules/r-n-m/pages/CharactersListPage/components/HeroesSection.vue'
import CharacterListItem from '@modules/r-n-m/components/organisms/CharacterListItem'

import { requests as charactersRequests } from './stubs'
import { Heroes } from '@modules/r-n-m/types/heroes'
import { useTest } from '@/plugins/jest'

const { getSelector } = useTest()

const Selectors = {
  CharactersSection: getSelector(CharactersSection),
  HeroesSection: getSelector(HeroesSection),
  CharacterListItem: getSelector(CharacterListItem),
}

describe('CharactersListPage.vue', () => {
  let wrapper
  let charactersComponent
  let heroesComponent
  let onCharactersListUpdated
  let charactersListItems
  let heroesListItems

  const createComponent = ({ requests }) => {
    const apolloClient = createMockClient({}, { requests })
    provideMockClient(apolloClient)
    // @ts-ignore
    wrapper = mount(CharactersListPage)

    onCharactersListUpdated = new Promise((resolve) => {
      wrapper.vm.$watch('characters', (characters) => {
        resolve({ characters })
      })
    })
  }

  createComponent({ requests: charactersRequests })

  it('should be rendered Characters and Heroes sections', () => {
    expect(wrapper.exists()).toBeTruthy()
    charactersComponent = wrapper.find(Selectors.CharactersSection)
    heroesComponent = wrapper.get(Selectors.HeroesSection)

    expect(charactersComponent.exists()).toBeTruthy()
    expect(heroesComponent.exists()).toBeTruthy()
    expect(
      charactersComponent.find('.ant-spin-nested-loading').exists(),
    ).toBeTruthy()
    expect(heroesComponent.find('.ant-empty').exists()).toBeTruthy()
  })

  it('should have Characters section with list populated with list items', async () => {
    const { characters } = await onCharactersListUpdated
    await flushPromises()
    await wrapper.vm.$nextTick()
    charactersListItems = charactersComponent.findAll(
      Selectors.CharacterListItem,
    )
    expect(charactersListItems).toHaveLength(characters.length)
  })

  it('should add Character to Favourite Heroes', async () => {
    const heroesUpdated = new Promise<{ heroes: Heroes }>((resolve) => {
      wrapper.vm.$watch('heroes', (heroes) => {
        resolve({ heroes })
      })
    })
    await charactersListItems[0].find('button').trigger('click')
    await flushPromises()
    const { heroes } = await heroesUpdated
    heroesListItems = heroesComponent.findAll(Selectors.CharacterListItem)
    expect(heroesListItems).toHaveLength(heroes.length)
  })

  it('should not add the same Character to Favourite Heroes', async () => {
    await charactersListItems[0].find(getSelector('AddButton')).trigger('click')
    await flushPromises()
    expect(heroesComponent.findAll(Selectors.CharacterListItem)).toHaveLength(1)
  })

  it('should remove Favourite Hero from Favourite Heroes section', async () => {
    const heroesUpdated = new Promise<{ heroes: Heroes }>((resolve) => {
      wrapper.vm.$watch('heroes', (heroes) => {
        resolve({ heroes })
      })
    })
    await heroesListItems[0].find(getSelector('RemoveButton')).trigger('click')
    await flushPromises()
    const { heroes } = await heroesUpdated
    expect(heroesComponent.findAll(Selectors.CharacterListItem)).toHaveLength(
      heroes.length,
    )
  })
})
