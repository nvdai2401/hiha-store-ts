const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'build'],
  rules: {
    'react/require-default-props': OFF, // TODO
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // allow console and debugger in development
    'no-console': process.env.NODE_ENV === 'production' ? ERROR : WARN,
    'no-debugger': process.env.NODE_ENV === 'production' ? ERROR : WARN,
    // warn: Something is defined but never used
    'no-unused-vars': [
      WARN,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    // warn: Prefer default export
    'import/prefer-default-export': OFF,
    // warn: Something is already declared in the upper scope
    'no-shadow': [
      WARN,
      { builtinGlobals: false, hoist: 'functions', allow: [] },
    ],
    // Interface name must not be prefixed with "I"
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'no-param-reassign': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'jsx-a11y/no-static-element-interactions': OFF
  },
  env: {
    browser: true,
    jest: true,
  },
};
