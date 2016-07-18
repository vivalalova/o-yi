module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "space-before-blocks": "error",
        "no-multi-spaces": "error",
        "comma-spacing": ["error", { "before": false, "after": true }],
        "keyword-spacing": ["error", { "before": true,"after": true  }],
        "space-before-function-paren": ["error","never"],
        "space-in-parens": ["error", "never"],
        "space-unary-ops":"error",
        "no-this-before-super": "error",
        "require-yield": "error",
        "yield-star-spacing": ["error", "before"],
        "curly": ["error", "multi-or-nest"],
        "object-curly-spacing": ["error", "always", {
            "objectsInObjects": false,
            "arraysInObjects": false
        }],
        "no-extra-parens": "error",
        "no-whitespace-before-property": "error",
        "no-unneeded-ternary": "error",
        "no-trailing-spaces": "error",
        "no-spaced-func": "error",
        "no-multiple-empty-lines": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-lonely-if": "error",
        "new-cap": "error",
        "brace-style": "error",
        "camelcase": "error",
        "require-yield": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": "warn",
        "no-console": 0
    },
    "plugins": [
        "json"
    ]
}
