import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
// import { Button } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import Route from '/@/route'
createApp(App).use(Route).use(Button).mount('#app')
