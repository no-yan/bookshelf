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
    plugins: ['testing-library', 'chakra-ui'], //'@no-yan/chakraui'],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'chakra-ui/props-order': [
            1,
            {
                lastProps: ['onClick'],
                firstProps: [],
            },
        ],
        'chakra-ui/props-shorthand': 'error',
        // '@no-yan/chakraui/props-order': 'warn',
        'prefer-const': 'error',
        'import/order': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
    },
};
