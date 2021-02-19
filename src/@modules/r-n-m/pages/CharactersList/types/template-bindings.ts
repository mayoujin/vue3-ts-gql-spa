import { Ref } from 'vue'
import { CharacterProps } from '@modules/r-n-m/organisms/CharacterListItem'

type ReadonlyRefArrayOfAnyOrTypeOf<T> = Readonly<
  Ref<readonly any[] | readonly T[]>
>

export type RawBindings = {
  characters: ReadonlyRefArrayOfAnyOrTypeOf<CharacterProps>
  loading: Ref<boolean>
}
