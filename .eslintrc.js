module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
};
