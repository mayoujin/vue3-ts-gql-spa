const { pathsToModuleNameMapper } = require('ts-jest/utils')
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
  '.+\\.(gql|graphql)$': 'jest-transform-graphql',
  '.+\\.(pcss)$': 'jest-transform-stub',
}

module.exports.moduleNameMapper = {
  ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
}
