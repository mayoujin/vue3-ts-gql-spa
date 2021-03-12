import { createHttpLink } from '@apollo/client'
const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
})

export default httpLink
