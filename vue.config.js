const { configureWebpack, chainWebpack } = require('./.webpack')

module.exports = {
  /* build, dev, ci */
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: process.env.npm_config_publicPath || '/',
  /* webpack */
  configureWebpack,
  chainWebpack,
  /* CSS */
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[local]-[hash:base64:6]',
        },
      },
    },
    extract: true,
  },
  /* Plugins */
  pluginOptions: {
    /* I18n */
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableLegacy: false,
    },
  },
}
