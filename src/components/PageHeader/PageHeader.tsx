import { menuCompositions } from "@/compositions/page-header"
import { defineComponent, ref, toRefs } from "vue"
import "./index.scss"
export default defineComponent({
  props: {
    activeIndex: {
      type: Number,
      default: 1,
    }
  },
  emits: {
    menuClick:function (index:number) {
      console.log("触发了事件:",index);
    },
  },
  setup(props, { emit }) {
    // 获取用户状态
    const { logo, menus } = menuCompositions()
    // logo
    const Logo = () => (
      <div class="wu-logo">
        <a>{logo.value}</a>
      </div>
    )
    // 菜单活动的index
    let { activeIndex } = toRefs(props)
    // 菜单点击事件
    const menuClick = (index: number) => () => {
      emit("menuClick", index)
    }
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

    return () => (
      <div class="wu-flex wu-header">
        <Logo></Logo>
        <Menu></Menu>
      </div>
    )
  },
})
