import { createApp } from "vue"
import App from "@/App.vue"
import "@/index.scss"
import "ant-design-vue/dist/antd.css"
import Route from "@/route"
import Store from "@/store"
import { useComponents } from "@/core/vueUse"
import "@/mocks"

useComponents(createApp(App)).use(Route).use(Store).mount("#app")
