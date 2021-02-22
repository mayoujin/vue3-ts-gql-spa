/**
 * @typedef { import('webpack').Configuration } WebpackOptions
 * @typedef { WebpackOptions | function(config: WebpackOptions): {WebpackOptions} } ConfigureWebpack
 */

/**
 * @type ConfigureWebpack
 */
const configureWebpack = {
  resolve: {
    alias: require('./aliases').resolveAliases('.'),
    extensions: ['.vue', '.jsx', '.ts', '.tsx', '.scss', '.css', '.pcss'],
  },
}

module.exports = configureWebpack
