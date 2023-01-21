module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'jquery': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier'
    ],
    'plugins': [
        'vue'
    ],
    'parser': 'vue-eslint-parser',
    'rules': {
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': 'off',
        'no-unused-vars': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-indent': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/require-default-prop': 'off',
        'vue/no-v-html': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/valid-v-for': 'off',
        'vue/require-v-for-key': 'off',
        'vue/no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'no-useless-catch': 'off',
    }
};