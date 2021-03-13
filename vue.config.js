const { configureWebpack, chainWebpack } = require('./.webpack')
const { isProd, argv } = require('./.webpack/utils')

module.exports = {
  /* build, dev, ci params */
  lintOnSave: false,
  productionSourceMap: !!argv('sourcemaps'),
  publicPath: argv('publicPath') || '/',

  /* Webpack config manipulation */
  configureWebpack,
  chainWebpack,

  /* CSS */
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: isProd()
            ? '[hash:base64:8]'
            : '[local]-[hash:base64:6]',
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
