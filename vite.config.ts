import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import type { UserConfig } from "vite"

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir)
}

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [
    // 用于正确编译.vue文件  
    vue(),
    // 热更新 jsx
    vueJsx()
  ],
  build: {
    target: "es2015",
    // base: "/",
  },
  // Client Types
  // 资产导入（例如，导入.svg文件） 对于Vite的注入类型ENV变量上import.meta.env 对于类型HMR API上import.meta.hot
  compilerOptions: {
    types: ["vite/client"],
  },
  // assetsInclude:pathResolve("src/assets"),
  // 默认为react的jsx 需要显示弄成vue的
  esbuild: {
    // 解决头部引入h的问题
    jsxInject: "import { h } from \"vue\"",
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  optimizeDeps: {
    //只能深入导入的资源
    include: [
      // "ant-design-vue/es/locale/zh_CN",
      "lodash-es",
      // "ant-design-vue",
      // "@ant-design/icons-vue",
      // "axios",
      "axios-mock-adapter",
      // 兼容ant-design useForm
      "lodash-es/cloneDeep",
      "lodash-es/intersection",
      "lodash-es/isEqual",
      "lodash-es/debounce",
      "lodash-es/omit",
      "ant-design-vue/es/form/utils/validateUtil",
      "ant-design-vue/es/form/utils/messages",
      "ant-design-vue/es/form/utils/asyncUtil"
    ],
  },
  alias: [
    {
      find: "@",
      replacement: pathResolve("./src"),
    }
  ],
} as UserConfig)
