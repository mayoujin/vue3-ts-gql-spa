const { isProd } = require('./utils')
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin')

/**
 * @typedef { import("webpack-chain") } ChainableWebpackConfig
 * @typedef { function(config: ChainableWebpackConfig): void } ChainWebpackFunction
 * @property {ChainableWebpackConfig} config
 */

/**
 * @type ChainWebpackFunction
 */
const ruleGqlTagLoader = (config) => {
  config.module
    .rule('graphql')
    .test(/\.(graphql|gql)$/)
    .use('graphql-tag/loader')
    .loader('graphql-tag/loader')
    .end()
}

/**
 * @type ChainWebpackFunction
 */
const configEnableProductionSourceMap = (config) => {
  config.devtool('source-map')
  config.optimization.minimize(false)

  config.plugin('define').tap((definitions) => {
    definitions[0]['__VUE_PROD_DEVTOOLS__'] = 'true'
    return definitions
  })
}
/**
 * @type ChainWebpackFunction
 */
const ruleCssExtend = (config) => {
  config.module.rule('pcss').use('postcss-loader')
}

/**
 * @type ChainWebpackFunction
 */
const rulePosthtmlLoader = (config) => {
  config.module
    .rule('htm')
    .test(/\.(htm)$/)
    .use('posthtml-loader')
    .loader('posthtml-loader')
    .end()
}

/**
 * @type ChainWebpackFunction
 */
const pluginTypedCssModulesPlugin = (config) => {
  const postcssBem = require('postcss-bem-fix')
  const bem = postcssBem({
    style: 'bem',
    separators: {
      modifier: '--',
    },
    shortcuts: {
      component: 'b',
      descendent: 'e',
      modifier: 'm',
    },
  })

  config.plugin('typed-css-modules').use(TypedCssModulesPlugin, [
    {
      globPattern: 'src/**/*.module.pcss',
      postCssPlugins: (defaultPlugins) => {
        return [bem, ...defaultPlugins]
      },
    },
  ])
}

/**
 * @type ChainWebpackFunction
 */
const pluginDeleteTsChecker = (config) => {
  config.plugins.delete('fork-ts-checker')
}

/**
 * Exclude `cssnano` optimizations for postcss and css files
 * to reduce building time due to demo project
 *
 * @type ChainWebpackFunction
 */
const pluginDeleteCssNano = (config) => {
  ;['css', 'postcss', 'less', 'scss', 'stylus', 'sass'].forEach((fileType) => {
    config.module.rule(fileType).oneOfs.store.forEach((oneOf) => {
      oneOf.uses.store.delete('cssnano')
    })
  })
}

/**
 * Disables linting
 *
 * @type ChainWebpackFunction
 */
const ruleEslintDisable = (config) => {
  config.module.rules.delete('eslint')
}

/**
 *
 * @type ChainWebpackFunction[]
 */
const configChainsList = [
  pluginDeleteTsChecker,
  pluginTypedCssModulesPlugin,
  ruleGqlTagLoader,
  ruleEslintDisable,
  //pluginDeleteCssNano,
  //rulePosthtmlLoader,
].concat(isProd() ? [] : configEnableProductionSourceMap)

/**
 *
 * @type ChainWebpackFunction
 */
const chainWebpack = (config) =>
  configChainsList.forEach((handler) => {
    handler(config)
  })

module.exports = chainWebpack
