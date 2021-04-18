module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-console': 0,
    // 'jest/no-disabled-tests': 'warn',
    // 'jest/no-focused-tests': 'error',
    // 'jest/no-identical-title': 'error',
    // 'jest/prefer-to-have-length': 'warn',
    // 'jest/valid-expect': 'error'
  }
};
