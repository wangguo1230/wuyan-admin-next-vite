import { mock } from '@/utils/mock-api';
import { createApp } from "vue"
import App from "@/App.vue"
import "@/index.less"
// import { Button } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import Route from "@/route"
import Store from "@/model"
import "@/mock"
createApp(App).use(Route).use(Store).mount("#app")
