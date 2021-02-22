import { ApolloLink } from '@apollo/client'
import stateLink from './link'

export { useStoreVariable } from './cache'

export const install = ({
  connectApolloLink,
}: {
  connectApolloLink: (link: typeof ApolloLink) => void
}) => {
  // @ts-ignore
  connectApolloLink(stateLink)
}
