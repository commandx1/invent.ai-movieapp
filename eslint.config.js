import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

export default defineConfig([
    js.configs.recommended,
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
        files: ['**/*.{js,ts,jsx,tsx}'],
        plugins: {
            import: importPlugin,
            'react-hooks': reactHooks,
            'simple-import-sort': simpleImportSort,
            'react-refresh': reactRefresh,
        },
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.browser,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'import/no-absolute-path': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'import/no-named-as-default-member': 'off',
            'import/no-useless-path-segments': 'error',
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // `react` first, `next` second, then packages starting with a character
                        ['^react', '^next'],
                        ['^[a-z]'],
                        // Packages starting with `@`
                        ['^@'],
                        ['^ant'],
                        ['^components'],
                        ['^~'],
                        // Imports starting with `../`
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        // Imports starting with `./`
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        // Style imports
                        ['^.+\\.s?css$'],
                        // Side effect imports
                        ['^\\u0000'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'array-bracket-spacing': ['error', 'never'],
            'arrow-body-style': 'error',
            'arrow-parens': ['error', 'as-needed'],
            'arrow-spacing': 'error',
            'block-spacing': 'error',
            'comma-spacing': 'error',
            'comma-style': ['error', 'last'],
            'computed-property-spacing': ['error', 'never'],
            'consistent-return': 'warn',
            'constructor-super': 'error',
            curly: 'error',
            'default-case': 'warn',
            'dot-location': ['error', 'property'],
            'dot-notation': 'error',
            'eol-last': 'error',
            eqeqeq: ['warn', 'allow-null'],
            'generator-star-spacing': [
                'error',
                {
                    before: false,
                    after: true,
                },
            ],
            'keyword-spacing': 'error',
            'linebreak-style': ['error', 'unix'],

            'new-cap': [
                'warn',
                {
                    capIsNew: false,
                },
            ],
            'new-parens': 'error',
            'no-array-constructor': 'warn',
            'no-async-promise-executor': 'warn',
            'no-bitwise': 'warn',
            'no-case-declarations': 'warn',
            'no-console': 'warn',
            'no-const-assign': 'warn',
            'no-constant-condition': 'warn',
            'no-dupe-class-members': 'error',
            'no-dupe-keys': 'warn',
            'no-else-return': 'error',
            'no-empty': 'warn',
            'no-fallthrough': 'warn',
            'no-implicit-globals': 'error',
            'no-inline-comments': 'off',
            'no-inner-declarations': 'warn',
            'no-lonely-if': 'warn',
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                },
            ],
            'no-multi-spaces': 'error',
            //'no-nested-ternary': 'warn',
            'no-new-object': 'warn',
            'no-prototype-builtins': 'warn',
            'no-redeclare': 'warn',
            'no-return-assign': 'warn',
            'no-self-assign': 'error',
            'no-self-compare': 'error',
            'no-sequences': 'warn',
            'no-spaced-func': 'error',
            'no-this-before-super': 'error',
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'error',
            'no-undef': 'warn',
            'no-unmodified-loop-condition': 'error',
            'no-unused-expressions': 'warn',
            'no-useless-call': 'error',
            'no-useless-concat': 'warn',
            'no-useless-escape': 'warn',
            'no-unneeded-ternary': 'error',
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            'no-unreachable': 'warn',

            'no-use-before-define': [
                'error',
                {
                    functions: false,
                },
            ],
            'no-useless-catch': 'warn',
            'no-var': 'warn',
            'no-whitespace-before-property': 'error',
            'object-curly-spacing': ['error', 'always'],
            'object-shorthand': 'error',
            'one-var-declaration-per-line': 'error',
            'operator-linebreak': ['error', 'after'],
            'padded-blocks': ['error', 'never'],
            'prefer-arrow-callback': 'error',
            'prefer-const': 'warn',
            'prefer-rest-params': 'error',
            'prefer-template': 'error',
            radix: 'warn',
            'space-before-blocks': 'error',

            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],

            'space-in-parens': ['error', 'never'],
            'space-infix-ops': 'error',
            'space-unary-ops': 'error',
            'template-curly-spacing': 'error',
            yoda: 'error',
        },
    },
]);
