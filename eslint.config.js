import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"
import stylistic from '@stylistic/eslint-plugin'
export default defineConfig([
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      'no-var': "error",
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-extra-semi': ['error'],
      'no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
      "prefer-const": ["error"]
    },
  },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
])
