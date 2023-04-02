module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        // vue rules
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                    normal: 'any',
                    component: 'any',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/multi-word-component-names': 'off',
    },
};
