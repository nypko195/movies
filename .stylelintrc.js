module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-html",
        "stylelint-config-recommended-vue"
    ],
    plugin: ["stylelint-scss"],
    ignoreFiles: ["**/*.js"],
    rules: {
        "at-rule-no-unknown": null,
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "comment-whitespace-inside": null,
        "declaration-block-no-redundant-longhand-properties": null,
        "declaration-no-important": true,
        "no-descending-specificity": null,
        "no-empty-source": null,
        "number-leading-zero": "never",
        "rule-empty-line-before": "always",
        "selector-no-vendor-prefix": true,
        "selector-pseudo-element-colon-notation": "single",
        "value-no-vendor-prefix": true,  
        "selector-class-pattern": null, 
        "indentation": 4,      
    }
}