import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite'


function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  // 默认为react的jsx 需要显示弄成vue的
  esbuild: {
    // 解决头部引入h的问题
    jsxInject: `import { h } from "vue"`,
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  minify: "esbuild", //压缩
  cssPreprocessOptions: {
    //css预处理
    less: {
      modifyVars: {
        "primary-color": "#FE5F23",
        "link-color": "#1890FFFF",
        "info-color": "#1890FFFF",
      },
      javascriptEnabled: true,
    },
  },
  optimizeDeps: {
    //加载的其他资源
    include: ["ant-design-vue/es/locale/zh_CN", "lodash-es", "ant-design-vue"],
  },
  alias: [
    {
      find: "/@",
      replacement: pathResolve("./src"),
    },
  ],
} as UserConfig
