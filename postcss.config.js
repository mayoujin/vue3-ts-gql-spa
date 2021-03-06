const easyImport = require('postcss-easy-import')
const nested = require('postcss-nested')
const postcssBem = require('postcss-bem-fix')
const variables = require('postcss-advanced-variables')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    easyImport({
      extensions: ['.css', '.pcss'],
    }),
    postcssBem({
      style: 'bem',
      separators: {
        modifier: '--',
      },
      shortcuts: {
        component: 'b',
        descendent: 'e',
        modifier: 'm',
      },
    }),
    variables,
    tailwindcss,
    nested,
    autoprefixer,
  ],
}
