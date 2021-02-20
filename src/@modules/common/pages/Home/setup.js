import { gql } from '@apollo/client'
import { useQuery, useResult } from '@vue/apollo-composable'

import About from '../About'
import { metadata } from './config'
import { useEmitMetadata } from '@/tools'

// QUERY
const ALL_CHARS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        location {
          name
        }
        image
      }
    }
  }
`

export const useFetchData = () => {
  const { result, loading, error } = useQuery(ALL_CHARS_QUERY)
  const characters = useResult(result)
  return {
    loading,
    characters,
  }
}

const setup = (props, context) => {
  useEmitMetadata(metadata, context)

  return useFetchData()
}

export default {
  setup,
  components: {
    About,
  },
}
