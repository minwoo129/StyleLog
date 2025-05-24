module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'react-hooks', '@typescript-eslint', 'jest'],
  rules: {
    curly: 'off',
    //quotes: ['double', 'single', 'backtick'],
    quotes: ['off', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
  },

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        'prettier/prettier': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-shadow': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
