import { menuCompositions } from "@/compositions/page-header"
import { defineComponent, ref } from "vue"
import "./index.less"
export default defineComponent({
  setup() {
    // 获取用户状态
    const {logo,menus} = menuCompositions()
    // logo
    const Logo = () => (
      <div class="wu-logo">
        <a>{logo.value}</a>
      </div>
    )
    // 菜单活动的index
    let activeIndex = ref(0)
    // 菜单点击事件
    const menuClick = (index: number) => () => (activeIndex.value = index)
    // 菜单
    const Menu = () => (
      <ul class="wu-flex wu-menu">
        {menus.value.map((item, index: number) => (
          <li onClick={menuClick(index)}>
            <a class={index === activeIndex.value ? "nav-link active" : "nav-link"}>{item.name}</a>
          </li>
        ))}
      </ul>
    )
    // 宽度
    const width = screen.availWidth * 0.8 + "px"
    return () => (
      <div class="wu-flex wu-header" style={{ width: width }}>
        <Logo></Logo>
        <Menu></Menu>
      </div>
    )
  },
})
