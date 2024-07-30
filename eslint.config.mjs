import cypress from "eslint-plugin-cypress";
import chaiFriendly from "eslint-plugin-chai-friendly";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("prettier"), {
    plugins: {
        cypress,
        "chai-friendly": chaiFriendly,
        prettier,
    },

    languageOptions: {
        globals: {
            ...cypress.environments.globals.globals,
        },
    },

    rules: {
        "no-unused-expressions": 0,
        "chai-friendly/no-unused-expressions": 2,
        "cypress/no-force": 0,
        "cypress/no-async-tests": "error",
        "prettier/prettier": ["error"],
        camelcase: 0,
        "no-plusplus": 0,
        "func-names": 0,
        "class-methods-use-this": 0,
        "no-prototype-builtins": 0,
        "no-restricted-syntax": 0,
        radix: 0,
        "consistent-return": 0,
    },
}];