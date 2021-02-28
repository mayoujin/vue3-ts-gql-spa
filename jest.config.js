const {
  transformIgnorePatterns,
  transform,
  moduleNameMapper,
} = require('./.jest')

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper,
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx',
    'css',
    'pcss',
    'gql',
    'graphql',
  ],
  transformIgnorePatterns,
  transform,

  cache: false,
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
}
