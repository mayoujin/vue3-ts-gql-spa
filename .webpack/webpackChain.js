const ruleGqlTagLoader = (config) => {
  config.module
    .rule('graphql')
    .test(/\.(graphql|gql)$/)
    .use('graphql-tag/loader')
    .loader('graphql-tag/loader')
    .end()
}

const rulePosthtmlLoader = (config) => {
  config.module
    .rule('htm')
    .test(/\.(htm)$/)
    .use('posthtml-loader')
    .loader('posthtml-loader')
    .end()
}

const ruleEslintDisable = (config) => {
  config.module.rules.delete('eslint')
}

module.exports = (config) =>
  [ruleGqlTagLoader, ruleEslintDisable, rulePosthtmlLoader].forEach(
    (handler) => {
      handler(config)
    },
  )
