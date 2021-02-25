import { Ref } from 'vue'
import { Character, Characters, Heroes } from '@modules/r-n-m/entities/types'
import { ReactiveVar } from '@apollo/client/cache/inmemory/reactiveVars'

type ReadonlyRefArrayOfAnyOrTypeOf<T> = Readonly<
  Ref<readonly any[] | readonly T[]>
>

export type ActionHandler = (item: Character) => void

export interface RawBindings {
  characters: ReadonlyRefArrayOfAnyOrTypeOf<Characters>
  isLoading: Ref<boolean>
  // heroes: ReadonlyRefArrayOfAnyOrTypeOf<Characters>
  heroes: ReactiveVar<Heroes>
  onAdd: ActionHandler
  onRemove: ActionHandler
}
