import { Menu as MenuType } from "@/types/system/menu"
import { defineComponent, PropType, reactive, Ref, ref, toRefs } from "vue"
import SideMenu from "./SideMenu"
import "./index.scss"
import { ServiceEnum } from "@/enums"
import { useInject } from "@/core/compositions/useAggregation"
export default defineComponent({
  name: "SideMenu",
  props: {
    menuList: {
      type: Array as PropType<MenuType[]>,
      default: () => [],
    },
  },
  setup() {
    reactive
    const menuList = useInject("userInfo",ref([]),"menuList.value.0.children")


    return () => (
      <div class="side-menu">
        <div class="logo">
          <img src={ServiceEnum.LogoUrl}></img>
          <h1>Wu Yan Admin</h1>
        </div>
        <SideMenu menu-list={menuList.value}></SideMenu>
      </div>
    )
  },
})
