module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    // ts
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    // 'no-debugger': import.meta.env === 'production' ? 'error' : 'off',
    "semi": ["error", "never"],//语句强制分号结尾
    "comma-dangle": "off",
    // 尾随逗号,只数组
    "@typescript-eslint/comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never",
    }],
  },
}