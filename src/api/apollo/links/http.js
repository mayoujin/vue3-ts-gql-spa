//import { getEnv } from '@/common/tools'
import { createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://rickandmortyapi.com/graphql',
})

export default httpLink
