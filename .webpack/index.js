module.exports.configureWebpack = {
  resolve: {
    alias: require('./aliases').resolveAliases('.'),
    extensions: ['.vue', '.jsx', '.ts', '.tsx', '.scss', '.css', '.pcss'],
  },
}

module.exports.chainWebpack = require('./chainWebpack')
