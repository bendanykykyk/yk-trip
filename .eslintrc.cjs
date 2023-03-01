/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': ['off'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        trailingComma: 'none',
        semi: false,
        endOfLine: 'auto'
      }
    ]
  }
}
