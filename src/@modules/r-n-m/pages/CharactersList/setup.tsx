import { useEmitMetadata } from '@/tools'

import { RawBindings } from '@modules/r-n-m/pages/CharactersList/types/template-bindings'

import { useCharacters, useHeroes } from '@modules/r-n-m/entities/heroes'

import { metadata } from './config'

/**
 *
 */

export const setup: SetupFunction<{}, RawBindings> = (
  _,
  context,
): RawBindings => {
  useEmitMetadata(metadata, context)

  const { useQueryCharacters } = useCharacters()
  const { characters, isLoading } = useQueryCharacters()

  const {
    fetchItems: fetchHeroes,
    addItem: addHero,
    removeItem: removeHero,
  } = useHeroes()
  const { heroes } = fetchHeroes()

  // @ts-ignore
  return {
    characters,
    isLoading,
    // @ts-ignore
    // heroes: heroesVar,
    heroes,
    // @ts-ignore
    onAdd: addHero,
    // @ts-ignore
    onRemove: removeHero,
  }
}
