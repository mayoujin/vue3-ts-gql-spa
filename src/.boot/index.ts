import { applyPlugins } from '@/plugins'
import { ModuleRegisterParams } from '@/index'

export const afterCreated = ({
  app,
  apollo,
  apolloClient,
}: ModuleRegisterParams) => {
  applyPlugins({ app })
  apollo.install({ app, apolloClient })
}
