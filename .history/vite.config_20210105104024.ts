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
  esbuild: {
    // jsxInject:'h',
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  minify: 'esbuild', //压缩
  cssPreprocessOptions: {
    //css预处理
    less: {
      modifyVars: {
        'primary-color': '#FE5F23',
        'link-color': '#1890FFFF',
        'info-color': '#1890FFFF'
      },
      javascriptEnabled: true
    }
  },
  optimizeDeps: {
    //加载的其他资源
    include: ['ant-design-vue/es/locale/zh_CN', 'lodash-es', 'ant-design-vue']
  },
  alias:{
    find:'/@/',
    replacement:pathResolve('./src')
  }
  // alias: {
  //   //src目录的配置
  //   '/@/': pathResolve('./src')
  // }
} as UserConfig
