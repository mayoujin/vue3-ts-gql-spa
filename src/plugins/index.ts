import { apply as applyAntDesignVue } from './ant-ui'
import { apply as applyBemCssModules } from './bem'
import { apply as applyTestPlugin } from './jest'
import { apply as applyI18n } from './i18n'

export const applyPlugins = ({ app }) => {
  applyAntDesignVue(app)
  applyI18n({ app })
  applyBemCssModules({ app })
  applyTestPlugin({ app })
}
