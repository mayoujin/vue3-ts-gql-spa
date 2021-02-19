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
        postcss: true,
        target: 'vue:3',
        files: /\.shadow\.p?css$/,
        classProp: 'class',
        filterProp: (prop) => {
          return [].includes(prop)
        },
      },
    ],
  ],
}
