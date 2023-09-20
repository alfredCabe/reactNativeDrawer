module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
    es2020: true,
    jest: true,
  },
  extends: [
    '@react-native-community',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'jest'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js']}],
    'react/jsx-props-no-spreading': 'off',
    'react-native/no-raw-text': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'react/no-array-index-key': 'off',
    'react/forbid-prop-types': 0,
  },
  globals: {
    shallow: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
