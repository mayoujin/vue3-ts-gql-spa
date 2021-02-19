import { from } from '@apollo/client'
import { WatchedMutationLink } from 'apollo-link-watched-mutation'
import cache from '../cache'

const mutationLink = from([
  new WatchedMutationLink(cache, {
    UpdateName: {
      Profile: ({ mutation, query }) => {},
    },
  }),
])

export default mutationLink
