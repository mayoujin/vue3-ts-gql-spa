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
const pluginsDeleteOptimizeCss = (config) => {
  config.plugins.delete('optimize-css')
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
  //pluginsDeleteOptimizeCss,
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
