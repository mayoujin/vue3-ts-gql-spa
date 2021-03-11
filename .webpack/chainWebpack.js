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
const ruleExposeDefineComponent = (config) => {
  config.module
    .rule('expose-global')
    .test(require.resolve('vue').replace('/index.js', ''))
    .use('expose-loader')
    .loader('expose-loader')
    .options({
      exposes: [
        {
          globalName: 'defineComponent',
          moduleLocalName: 'defineComponent',
          override: true,
        },
      ],
    })
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
const pluginsDeleteTsChecker = (config) => {
  config.plugins.delete('fork-ts-checker')
}

/**
 * Exclude `cssnano` optimizations for postcss and css files
 * to reduce building time due to demo project
 *
 * @type ChainWebpackFunction
 */
const pluginsDeleteCssNano = (config) => {
  ;['css', 'postcss', 'less', 'scss', 'stylus', 'sass'].forEach((fileType) => {
    config.module.rule(fileType).oneOfs.store.forEach((oneOf) => {
      oneOf.uses.store.delete('cssnano')
    })
  })
}

/**
 * @type ChainWebpackFunction
 */
const ruleEslintDisable = (config) => {
  config.module.rules.delete('eslint')
}

/**
 *
 * @type ChainWebpackFunction[]
 */
const configChainFnLis = [
  //pluginsDeleteCssNano,
  //configEnableProductionSourceMap,
  //ruleExposeDefineComponent,
  pluginsDeleteTsChecker,
  ruleGqlTagLoader,
  ruleEslintDisable,
  //rulePosthtmlLoader,
]

/**
 *
 * @type ChainWebpackFunction
 */
const chainWebpack = (config) =>
  configChainFnLis.forEach((handler) => {
    handler(config)
  })

module.exports = chainWebpack
