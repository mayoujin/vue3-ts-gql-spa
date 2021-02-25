import plugin from 'vue-tailwind'
const settings = {}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const apply = (app) => {
  app.use(plugin, settings)
}
