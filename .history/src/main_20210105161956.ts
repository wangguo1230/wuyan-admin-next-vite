import { createApp } from "vue"
import App from "@/App.vue"
import "@/index.less"
// import { Button } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import Route from "@/route"
import Store from "@/model"
import
createApp(App).use(Route).use(Store).mount("#app")
