module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    'vue/html-self-closing': 'off',
    'space-before-function-paren': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    semi: ['error', 'always'],
  },
};
