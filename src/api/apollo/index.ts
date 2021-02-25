import {
  DefaultApolloClient,
  provideApolloClient,
} from '@vue/apollo-composable/dist'
import { ModuleRegisterParams } from '@/index'

export { extendTypePolicies } from './cache'
export { typePolicies } from './cache/typePolicies'

export const install = ({ app, apolloClient }: ModuleRegisterParams) => {
  app.provide(DefaultApolloClient, apolloClient)
  provideApolloClient(apolloClient)
}
