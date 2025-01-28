module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/no-autofocus': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-constant-condition' : 'off'
  },
};
