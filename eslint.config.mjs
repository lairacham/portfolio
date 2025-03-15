import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typescriptEslintPlugin.configs.recommended,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
    ignorePatterns: ['node_modules/', 'dist/', '.next/', 'pnpm-lock.yaml'],
    rules: {
      semi: ['error', 'never'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  }),
]

export default eslintConfig
