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
        "brace-style":[
            "error"
        ],
        "camelcase":[
            "error"
        ],
        "require-yield": [
            "error"
        ],
        "no-dupe-class-members": [
            "error"
        ],
        "no-duplicate-imports": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "prefer-const": ["error"],
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
        "no-unused-vars": [
            "off"
        ],
        "no-console": 0
    },
    "plugins": [
        "json"
    ]
}
