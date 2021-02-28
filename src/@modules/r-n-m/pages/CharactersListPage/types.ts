import { Ref } from 'vue'
import { Character, Characters } from '@modules/r-n-m/types/characters'
import { Heroes } from '@modules/r-n-m/types/heroes'

type ReadonlyRefArrayOfAnyOrTypeOf<T> = Readonly<
  Ref<readonly any[] | readonly T[]>
>

export type ActionHandler = (item: Character) => void

export interface RawBindings {
  characters: ReadonlyRefArrayOfAnyOrTypeOf<Characters>
  isLoading: Ref<boolean>
  heroes: ReadonlyRefArrayOfAnyOrTypeOf<Heroes>
  onAdd: ActionHandler
  onRemove: ActionHandler
}
