const {
  pathsToModuleNameMapper,
} = require('@vue/cli-plugin-unit-jest/node_modules/ts-jest/utils')
const {
  compilerOptions: { paths },
} = require('../tsconfig.json')

const esModules = [
  'lodash-es',
  '@vue/apollo-composable/dist',
  'ant-design-vue',
  '@ant-design',
  '@apollo',
].join('|')

module.exports.transformIgnorePatterns = [
  `<rootDir>/node_modules/(?!(${esModules})/)`,
]

module.exports.transform = {
  //'^.+node_modules/.*\\.js$': 'jest-esm-transformer',
  '.+\\.(gql|graphql)$': 'jest-transform-graphql',
  '.+\\.(pcss)$': 'jest-transform-stub',
  '.+(type=template)$': 'vue-jest',
}

module.exports.moduleNameMapper = {
  ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
}
