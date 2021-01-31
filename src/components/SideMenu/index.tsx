import { Menu as MenuType } from "@/types/system/menu"
import { defineComponent, PropType, toRefs } from "vue"
import SideMenu from "./SideMenu"
import "./index.scss"
import Logo from "@/assets/logo.svg"
export default defineComponent({
  name: "SideMenu",
  props: {
    menuList: {
      type: Array as PropType<MenuType[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { menuList, } = toRefs(props)
    return () => (
      <div class="side-menu">
        <div class="logo">
          <img style="display:inline" src="/logo.svg"></img>
          <h1>Wu Yan Admin</h1>
        </div>
        <SideMenu menu-list={menuList.value}></SideMenu>
      </div>
    )
  },
})
