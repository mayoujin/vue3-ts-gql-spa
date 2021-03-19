import { Heroes, Hero } from '@modules/r-n-m/entities/heroes'
import { createStore } from '@harlem/core'
import { inject, provide } from 'vue'

interface State {
  heroes?: Heroes
}

const STATE: State = {
  heroes: [],
}

const store = createStore<State>('heroes', STATE)

const { getter, mutation } = store

export const heroes = getter('heroes', (state) => state.heroes)
export const addHero = mutation<Hero>('addHero', (state, hero) => {
  const { heroes } = state
  if (heroes.findIndex(({ id }) => hero.id === id) === -1) {
    state.heroes = [...heroes, hero]
  }
})

export const getters = {
  heroes,
}

export const actions = {
  addHero,
}

export const storeSymbol = Symbol('heroes')

export const useStore = () => inject(storeSymbol)
export const provideStore = () => provide(storeSymbol, store)

export default store
