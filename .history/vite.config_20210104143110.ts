import path from 'path'
import vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  esbuild: {
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
  alias: {
    //src目录的配置
    '/@/': path.resolve(__dirname, 'src')
  }
} as UserConfig
