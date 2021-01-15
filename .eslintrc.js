module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'eslint:recommended'
    // ts
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    "prettier/vue"
  ],
  plugins: ['vue',"@typescript-eslint"],
  rules: {
    'no-console': 'off',
    // 'no-debugger': import.meta.env === 'production' ? 'error' : 'off',
    //语句强制分号结尾
    "semi": ["error", "never"],
    // 要求箭头函数的参数使用圆括号 
    "arrow-parens":["error","always"],
    "@typescript-eslint/no-extra-semi": ["error"],
    "comma-dangle": "off",
    // 尾随逗号,只数组
    "@typescript-eslint/comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never",
    }],
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': [
      "error",
      "interface"
    ],
    // 计算属性中必须return一个值
    "vue/return-in-computed-property": ["error", {
      "treatUndefinedAsUnspecified": true,
    }],
    // 标签自闭和
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "any",
        "component": "always",
      },
      "svg": "always",
      "math": "always",
    }],
  },
}