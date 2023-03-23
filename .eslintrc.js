module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'next'
  ],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    '@typescript-eslint/no-unused-vars': [ 'error'],
    '@typescript-eslint/no-explicit-any': [ 'error' ],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/indent': [ 'error', 2 ],
    'no-unused-vars': ['error'],
    'react/jsx-uses-react': ['error'],
    'react/react-in-jsx-scope': ['warn'],
    'react/prop-types': [ 'off' ],
    'import/no-unresolved': ['off'],
    'import/no-named-as-default-member': [ 'off' ],
    'jsx-a11y/no-noninteractive-element-interactions': [ 'off' ],
    'jsx-a11y/no-static-element-interactions': [ 'off' ],
    'jsx-a11y/click-events-have-key-events': [ 'off' ],
    'react-hooks/exhaustive-deps': 'off',
    'max-len': [ 'error', { code: 250 } ],
    indent: [ 'error', 2, {
      SwitchCase: 1,
      ignoredNodes: [ 'ConditionalExpression' ],
    } ],
  },
}