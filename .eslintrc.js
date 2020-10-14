module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-new': 'off',
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          ['@core', './src/core'],
          ['@components', './src/components'],
        ],
        extensions: ['.ts', '.js', '.json'],
      },
    },
  },
};
