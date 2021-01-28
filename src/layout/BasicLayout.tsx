import { PageHeader, PageFooter, SideMenu } from "@/components"
import { getUserInfoReactive } from "@/modules/user/login"
import { defineComponent, reactive, ref, toRefs, watch } from "vue"
import { RouterView } from "vue-router"

export default defineComponent({
  name: "PageLayout",
  setup() {
    const { menuList, } = getUserInfoReactive()

    return () => (
      <div class="wu-flex">
        <div>
          <SideMenu menu-list={menuList.value[0]?.children}></SideMenu>
        </div>
        <div>
          <PageHeader></PageHeader>
          <RouterView></RouterView>
          <PageFooter></PageFooter>
        </div>
      </div>
    )
  },
})
