import { useEmitMetadata } from '@/tools'

import { RawBindings } from './types'

import { useHeroes } from '@modules/r-n-m/composable/useHeroes'
import { useCharacters } from '@modules/r-n-m/composable/useCharacters'
import { metadata } from './config'

export const emits = ['metadataEmitted']

/**
 *
 */
export const setup: SetupFunction<{}, RawBindings> = (
  _,
  context,
): RawBindings => {
  useEmitMetadata(metadata, context)
  const { fetchItems: fetchCharacters } = useCharacters()
  const { characters, isLoading } = fetchCharacters()

  const {
    fetchItems: fetchHeroes,
    addItem: addHero,
    removeItem: removeHero,
  } = useHeroes()
  const { heroes } = fetchHeroes()

  return {
    characters,
    isLoading,
    heroes,
    onAdd: addHero,
    onRemove: removeHero,
  }
}
