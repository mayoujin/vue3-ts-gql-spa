module.exports = {
  root: true,

  // Rules order is important, please avoid shuffling them
  extends: [
    // https://github.com/standard/eslint-config-standard-with-typescript
    'standard-with-typescript',
    // `plugin:vue/essential` by default, consider switching to `plugin:vue/strongly-recommended`
    //  or `plugin:vue/recommended` for stricter rules.
    // See https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    '@vue/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    // '@vue/prettier', includes in '@vue/eslint-config-typescript/recommended',
  ],

  plugins: [
    // Required to apply rules which need type information
    '@typescript-eslint',
    // Required to lint *.vue files
    // See https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    'vue',
    // Prettier has not been included as plugin to avoid performance impact
    // See https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Add it as an extension
  ],

  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // See https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },

  // add your custom rules here
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    // See https://github.com/typescript-eslint/typescript-eslint/issues/493
    '@typescript-eslint/explicit-function-return-type': 'off',

    'comma-dangle': ['error', 'always-multiline'],
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /* Custom VueJS */
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
      },
    ],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 3,
          allowFirstLine: true,
        },
      },
    ],
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/component-name-in-template-casing.md
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        ignores: [],
      },
    ],
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
    'vue/script-indent': [
      'warn',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
