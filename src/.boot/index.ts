import { applyPlugins } from '@/plugins'

export const afterCreated = ({
  app,
  apollo,
  apolloClient,
}: ModuleRegisterParams) => {
  applyPlugins({ app })
  apollo.install({ app, apolloClient })
}
