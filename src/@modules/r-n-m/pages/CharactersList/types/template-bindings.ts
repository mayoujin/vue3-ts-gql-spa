import { Ref } from 'vue'
import { VueComponentProps } from '@/@modules/r-n-m/organisms/CharactersList/types/props'

type ReadonlyRefArrayOfAnyOrTypeOf<T> = Readonly<
  Ref<readonly any[] | readonly T[]>
>

export type RawBindings = {
  characters: ReadonlyRefArrayOfAnyOrTypeOf<VueComponentProps>
  isLoading: Ref<boolean>
}
