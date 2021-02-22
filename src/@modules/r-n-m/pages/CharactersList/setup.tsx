/*import { defineComponent } from 'vue'*/
import { CharactersQuery } from 'types/api'
import { useEmitMetadata } from '@/tools'

import { useQuery, useResult } from '@vue/apollo-composable'
import CharactersDocument from './queries/CharactersList.query.graphql'

import { RawBindings } from '@modules/r-n-m/pages/CharactersList/types/template-bindings'

import { watch } from '@vue/runtime-core'
import { heroes } from '@modules/r-n-m/entities'
import { metadata } from './config'

export const useFetchData = () => {
  const { result, loading: isLoading } = useQuery<CharactersQuery>(
    CharactersDocument,
  )
  const characters = useResult(
    result,
    [],
    ({ characters: { results } }) => results,
  )

  return {
    isLoading,
    characters,
  }
}

export const setup: SetupFunction<{}, RawBindings> = (
  _,
  context,
): RawBindings => {
  useEmitMetadata(metadata, context)

  const data = useFetchData()
  const { characters, isLoading } = data
  watch(characters, (_characters) => {
    heroes([_characters[0]])
  })

  return {
    characters,
    isLoading,
  }
}

export const template = ({ characters, isLoading }: RawBindings) => () => (
  <div>
    {/*{characters.value}*/}
    {/*<CharactersList characters={characters.value} isLoading={isLoading.value} />*/}
    {/*<hr />*/}
    {/*<CharactersList characters={heroes()} isLoading={false} />*/}
  </div>
)

// export default {
//   setup: (props, context) => template(setup(props, context) as RawBindings),
// }
