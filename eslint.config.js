import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,

    // Default: ESM source files
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,   // process, console, etc.
                ...globals.jest,   // test, expect, describe, etc.
            },
        },
        rules: {
            "no-unused-vars": "warn",
        },
        ignores: [
            "node_modules/",
            "dist/",
        ],
    },

    // Override for CommonJS config files (*.cjs)
    {
        files: ["**/*.cjs"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                ...globals.node,
            },
        },
    },
];
