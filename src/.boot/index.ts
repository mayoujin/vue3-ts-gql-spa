import { applyPlugins } from '@/plugins'
import { ModuleRegisterParams } from '@/index'

export const bootBeforeCreated = ({ store, apollo }: ModuleRegisterParams) => {
  // @ts-ignore
  store.install({ extendTypePolicies: apollo.extendTypePolicies })
}

export const afterCreated = ({
  app,
  apollo,
  apolloClient,
}: ModuleRegisterParams) => {
  applyPlugins({ app })
  apollo.install({ app, apolloClient })
}
