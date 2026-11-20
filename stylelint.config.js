export default {
    extends: ['stylelint-config-standard'],
    ignoreFiles: [
        'assets/built/**',
        'node_modules/**',
    ],
    rules: {
        'no-descending-specificity': null,
    },
};