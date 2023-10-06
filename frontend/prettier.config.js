module.exports = {
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    printWidth: 80,
    tabWidth: 4,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',
    importOrder: [
        '^react$',
        '^next(?:$|/)',
        '<THIRD_PARTY_MODULES>',
        '^@components/',
        '^@hooks/',
        '^@utils/',
        '^@styles/',
        '^\\.\\.?/',
        '^@assets/',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
