import { menuCompositions } from "@/compositions/page-header"
import { defineComponent, ref } from "vue"
import "./index.less"
export default defineComponent({
  props: {},
  setup() {
    const title = ref("wu-yan")
    const Logo = () => (
      <div class="wu-logo">
        <a>{title.value}</a>
      </div>
    )
    const menus = menuCompositions()
    const Menu = () => (
      <div class="wu-flex wu-menu">
        {menus.value.map((item) => (
          <div>
            <a>{item.name}</a>
          </div>
        ))}
      </div>
    )
    return () => (
      <div class="wu-flex wu-header">
        <Logo></Logo>
        <Menu></Menu>
      </div>
    )
  },
})
