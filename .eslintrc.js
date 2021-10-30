module.exports = {
    env: {
        browser: true,
        es2021: true,
        mocha: true,
        node: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'next/core-web-vitals',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'testing-library', 'jest'],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'no-undef': 'error',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};
