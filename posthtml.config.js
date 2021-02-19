const svgTags = require('svg-tags')
const skipTags = ['div', 'span', 'a', 'svg', 'template', 'slot', ...svgTags]

function cnFunctionGenerator(b, e, m) {
  if (!e) {
    return `cn(${m.join(',')})`
  }
  return `cn('${e}', ${m.join(',')})`
}

module.exports = {
  plugins: {
    'posthtml-custom-bem': {
      skipTags,
      types: {
        'css-module': {
          targetAttr: 'v-bind:class',
          createAttrBuilder: function (options) {
            return function (prev, b, e, m) {
              return cnFunctionGenerator(b, e, m)
            }
          },
        },
      },
    },
  },
}
