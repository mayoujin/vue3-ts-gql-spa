const crypto = require('crypto')
const babelJest = require('babel-jest')
const vueJestProcess = require('vue-jest/lib/process')

function process(src, filename, config) {
  console.log({ filename })
  return vueJestProcess(src, filename, config)
}

module.exports = {
  process,
  getCacheKey: function getCacheKey(
    fileData,
    filename,
    configString,
    { config, instrument, rootDir },
  ) {
    return crypto
      .createHash('md5')
      .update(
        babelJest.getCacheKey(fileData, filename, configString, {
          config,
          instrument,
          rootDir,
        }),
        'hex',
      )
      .digest('hex')
  },
}
