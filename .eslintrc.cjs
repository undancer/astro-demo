/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    '@antfu',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx', '*.vue', '*.astro'],
      rules: {
        'no-console': ['off'],
        'curly': ['error', 'all'],
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      },
    },
  ],
}
