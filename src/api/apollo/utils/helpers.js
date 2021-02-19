import { onUnmounted } from '@vue/composition-api'
import {
  addClientMutation,
  removeClientMutation,
} from '#gql/apollo/resolvers/mutations'

export const attachClientResolvers = (mutations) => {
  addClientMutation(mutations)
  onUnmounted(() => {
    removeClientMutation(mutations)
  })
}
