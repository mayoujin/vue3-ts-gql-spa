const babelJest = require('ts-jest')

module.exports = babelJest.createTransformer({
  plugins: ['babel-plugin-import-remove-resource-query'],
})
