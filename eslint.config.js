import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: ['assets/built/**', 'node_modules/**'],
    },
    {
        files: ['assets/js/**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules,
        },
    },
    {
        files: ['rollup.config.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.node,
        },
        rules: {
            ...js.configs.recommended.rules,
        },
    },
];