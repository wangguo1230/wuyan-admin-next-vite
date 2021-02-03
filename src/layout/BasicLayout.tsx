import { PageHeader, PageFooter, SideMenu } from "@/components"
import {  useProvide } from "@/core/compositions/useAggregation"
import { getUserInfoReactive } from "@/modules/user/login"
import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import "./basicLayout.scss"
export default defineComponent({
  name: "PageLayout",
  setup() {
    useProvide("userInfo", getUserInfoReactive())
    return () => (
      <div class="wu-layout-wrapper">
        <SideMenu></SideMenu>
        <div class="wu-layout-side">
          <PageHeader></PageHeader>
          <RouterView></RouterView>
          <PageFooter></PageFooter>
        </div>
      </div>
    )
  },
})
