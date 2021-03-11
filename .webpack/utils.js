module.exports.isProd = () => process.env.NODE_ENV === 'production'
module.exports.argv = (argName) =>
  process.env[`npm_config_${argName.toLowerCase()}`]
