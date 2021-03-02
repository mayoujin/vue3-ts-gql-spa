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
    .test(require.resolve('vue'))
    .use('expose-loader')
    .loader('graphql-tag/loader')
    .options({
      exposes: ['defineComponent'],
    })
    .end()
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
  //pluginsDeleteTsChecker,
  //pluginsDeleteCssNano,
  ruleExposeDefineComponent,
  ruleGqlTagLoader,
  ruleEslintDisable,
  rulePosthtmlLoader,
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
