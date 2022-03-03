module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    "browser": true,
    "jest/globals": true
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  rules: {
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "prettier/prettier": 2
  }
};
