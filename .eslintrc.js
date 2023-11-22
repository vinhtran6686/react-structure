module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Add this line
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'array-bracket-spacing': ['error', 'never'],
    'prettier/prettier': ['error'], // Add this line
  },
}
