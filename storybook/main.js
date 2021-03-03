const { extendWebpack } = require('../.webpack')
const { resolve } = require('../.srv')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Получает webpack config приложения для spa
const getAppWebpackConfig = async () => {
  const QuasarConfig = require('@quasar/app/lib/quasar-config')
  const getQuasarCtx = require('@quasar/app/lib/helpers/get-quasar-ctx')

  const ctx = getQuasarCtx({
    mode: 'spa',
    target: 'browser',
    debug: true,
    dev: true,
  })

  const quasarConfig = new QuasarConfig(ctx)
  try {
    await quasarConfig.prepare()
  } catch (e) {
    console.error(e)
    console.warning(`⚠️ [FAIL] quasar.conf.js has JS errors`)
    process.exit(1)
  }

  await quasarConfig.compile()
  const appWebpackConfig = quasarConfig.getWebpackConfig()

  return appWebpackConfig
}

const webpackFinal = async (storyBookWebpack) => {
  // Расширяет webpack config настройками для приложения
  extendWebpack(storyBookWebpack)
  const appWebpackConfig = await getAppWebpackConfig()
  storyBookWebpack.module = appWebpackConfig.module
  storyBookWebpack.resolve.alias = {
    ...storyBookWebpack.resolve.alias,
    ...appWebpackConfig.resolve.alias,
    statics: '@/statics',
  }

  storyBookWebpack.plugins.push(
    new CopyWebpackPlugin([
      {
        from: resolve('src/statics'),
        to: 'statics',
      },
    ]),
  )
  return storyBookWebpack
}

module.exports = {
  stories: ['./stories/**/*.stories.*'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal,
}
