const { configureWebpack, chainWebpack } = require('./.webpack')

module.exports = {
  lintOnSave: false,
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
  publicPath: process.env.npm_config_publicPath || '/',
}
