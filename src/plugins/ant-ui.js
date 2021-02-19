import plugin from 'ant-design-vue/lib'
import 'ant-design-vue/dist/antd.css'

//eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const apply = (app) => {
  app.use(plugin)
}
