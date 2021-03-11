//const tailwindcss = require('tailwindcss')
//const nested = require('postcss-nested')

module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        jsx: true,
      },
    ],
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' },
    ],
    ['@vue/babel-plugin-jsx'],
    [
      'reshadow/babel',
      {
        postcss: {
          plugins: [],
        },
        target: 'vue3',
        files: /\.shadow.*\.p?css$/,
        classProp: 'class',
        filterProp: (prop) => {
          return ['class', 'id', 'aria', 'for', 'role', 'key'].includes(prop)
        },
      },
    ],
  ],
}
