/* Apollo options configuration */
import { ApolloLink, from as fromArray } from '@apollo/client'

//import authLink from './auth'
import httpLink from './http'
//import mutationLink from './watched-mutation'

const links: ApolloLink[] = [httpLink]

/**
 *
 * @param {ApolloLink} link
 */
export const connectLink = (link: ApolloLink) => {
  links.unshift(link)
}

export default fromArray([
  //authLink,
  httpLink,
])
