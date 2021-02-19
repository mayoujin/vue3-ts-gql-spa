import { apply as applyAntDesignVue } from './ant-ui'
import bemCssModules from './bem'
//import { apply as applyStyledDirective } from './styled'
import router from '@/router'

//eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const applyPlugins = (app) => {
  applyAntDesignVue(app)
  //applyStyledDirective(app)
  app.use(router)
  app.use(bemCssModules)
}
