/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    extends: '@antfu',
    overrides: [
        {
            files: ['*.js', '*.ts', '*.vue'],
            rules: {
                'no-console': ['off'],
                'curly': ['error', 'all'],
                '@typescript-eslint/brace-style': ['error', '1tbs'],
            },
        },
    ],
}