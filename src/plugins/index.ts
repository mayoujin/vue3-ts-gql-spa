/**
 * Vue plugin installers provider point.
 */
import { apply as applyAntDesignVue } from './ant-ui'
import { apply as applyBemCssModules } from './bem'
import { apply as applyTestPlugin } from './jest'
import { apply as applyI18n } from './i18n'
import { apply as applyRouter } from './router'
import { apply as applyApollo } from './apollo'

const plugins = [
  applyRouter,
  applyAntDesignVue,
  applyI18n,
  applyBemCssModules,
  applyTestPlugin,
  applyApollo,
]

export const applyPlugins = ({ install }) => {
  plugins.forEach((apply) => apply({ install }))
}
