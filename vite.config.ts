import { SharedConfig } from 'vite';
import path from 'path';
// const { VITE_API_PREFIX, VITE_SERVICE_ORIGIN } = process.env //.env文件的环境变量

const config: SharedConfig = {
 // open: true, //是否自动打开
  // proxy: { //设置代理
  //   [VITE_API_PREFIX]: {
  //     target: VITE_SERVICE_ORIGIN,
  //     changeOrigin: true
  //   }
  // },
  cssPreprocessOptions: { //css预处理
    less: {
      modifyVars: {
        'primary-color': '#FE5F23',
        'link-color': '#1890FFFF',
        'info-color': '#1890FFFF'
      },
      javascriptEnabled: true
    }
  },
  optimizeDeps: { //加载的其他资源
    include: ['ant-design-vue/es/locale/zh_CN', 'lodash-es']
  },
  alias: { //src目录的配置
    '/@/': path.resolve(__dirname, 'src')
  }
};

module.exports = config;
