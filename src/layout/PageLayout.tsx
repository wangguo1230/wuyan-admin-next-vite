import { PageHeader, PageFooter, SideMenu } from "@/components"
import { getUserInfoReactive } from "@/modules/user/login"
import { defineComponent, reactive, ref, toRefs, watch } from "vue"

export default defineComponent({
  setup() {
    const {menuList,} = getUserInfoReactive()

    return () => (
      <div class="wu-flex">
        <div>
          <SideMenu></SideMenu>
        </div>
        <div>
          <PageHeader></PageHeader>
          <div>内容</div>
          <PageFooter></PageFooter>
        </div>
      </div>
    )
  },
})
