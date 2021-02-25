import { apply as applyAntDesignVue } from './ant-ui'
import bemCssModules from './bem'
// import { apply as applyStyledDirective } from './styled'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const applyPlugins = ({ app }) => {
  applyAntDesignVue(app)
  app.use(bemCssModules)
}
