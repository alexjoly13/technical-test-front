import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys'
import sortKeysFix from 'eslint-plugin-sort-keys-fix'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default defineConfig([
  {
    extends: fixupConfigRules(
      compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended'
      )
    ),

    languageOptions: {
      ecmaVersion: 11,

      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          module: true,
        },
      },

      sourceType: 'commonjs',
    },

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
      prettier: fixupPluginRules(prettier),
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'sort-destructure-keys': sortDestructureKeys,
      'sort-keys-fix': sortKeysFix,
      // "typescript-sort-keys": typescriptSortKeys,
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      '@typescript-eslint/no-explicit-any': ['error'],
      camelcase: 'off',

      'import/no-unresolved': [
        'error',
        {
          ignore: ['^~/', '^assets/'],
        },
      ],

      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },

          groups: ['builtin', 'external', 'type', 'internal', 'sibling', 'parent'],
          'newlines-between': 'always',
        },
      ],

      'react-hooks/exhaustive-deps': ['error'],
      'react/jsx-sort-props': ['error'],
      'react/react-in-jsx-scope': 'off',

      'sort-destructure-keys/sort-destructure-keys': [
        'error',
        {
          caseSensitive: false,
        },
      ],

      'sort-keys': ['error'],
      'sort-keys-fix/sort-keys-fix': 'warn',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
