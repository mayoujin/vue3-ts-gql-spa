import { mount, flushPromises } from '@vue/test-utils'

import { createMockClient, provideMockClient } from 'tests/mocks'

import CharactersListPage from '@modules/r-n-m/pages/CharactersListPage'

const Selectors = {
  CharactersSection: '[data-test-component="CharactersSection"]',
  HeroesSection: '[data-test-component="HeroesSection"]',
  CharacterListItem: '[data-test-component="CharacterListItem"]',
}

import { requests as charactersRequests } from './stubs'

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
    wrapper = mount(CharactersListPage)

    onCharactersListUpdated = new Promise((resolve) => {
      wrapper.vm.$watch('characters', (characters) => {
        resolve({ characters })
      })
    })
  }

  it('should be rendered Characters and Heroes sections', () => {
    createComponent({ requests: charactersRequests })

    charactersComponent = wrapper.find(Selectors.CharactersSection)
    expect(wrapper.exists()).toBeTruthy()
    heroesComponent = wrapper.get(Selectors.HeroesSection)

    expect(charactersComponent.exists()).toBeTruthy()
    expect(heroesComponent.exists()).toBeTruthy()
    expect(charactersComponent.find('.ant-empty').exists()).toBeTruthy()
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
    await charactersListItems[0].find('button').trigger('click')
    await flushPromises()
    await wrapper.vm.$nextTick()
    heroesListItems = heroesComponent.findAll(Selectors.CharacterListItem)
    expect(heroesListItems).toHaveLength(1)
  })

  it('should not add the same Character to Favourite Heroes', async () => {
    await charactersListItems[0].find('button').trigger('click')
    await flushPromises()
    await wrapper.vm.$nextTick()
    expect(heroesComponent.findAll(Selectors.CharacterListItem)).toHaveLength(1)
  })

  it('should remove Favourite Hero from Favourite Heroes section', async () => {
    await heroesListItems[0].find('button').trigger('click')
    await flushPromises()
    await wrapper.vm.$nextTick()
    expect(heroesComponent.findAll(Selectors.CharacterListItem)).toHaveLength(0)
  })
})
