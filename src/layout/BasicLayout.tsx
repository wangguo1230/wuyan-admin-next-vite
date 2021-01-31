import { PageHeader, PageFooter, SideMenu } from "@/components"
import { getUserInfoReactive } from "@/modules/user/login"
import { defineComponent, reactive, ref, toRefs, watch } from "vue"
import { RouterView } from "vue-router"
import "./basicLayout.scss"
export default defineComponent({
  name: "PageLayout",
  setup() {
    const { menuList, } = getUserInfoReactive()

    return () => (
      <div class="wu-layout-wrapper">
        <SideMenu menu-list={menuList.value[0]?.children}></SideMenu>
        <div class="wu-layout-side">
          <PageHeader></PageHeader>
          <RouterView></RouterView>
          <PageFooter></PageFooter>
        </div>
      </div>
    )
  },
})
