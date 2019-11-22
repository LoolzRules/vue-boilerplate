module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': 'error',
    'space-in-parens': [ 'error', 'always', ],
    'comma-dangle': [ 'error', {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }, ],
    'space-before-function-paren': [ 'error', 'never', ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
