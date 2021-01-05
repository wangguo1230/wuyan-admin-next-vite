import {  defineComponent, reactive, ref, Transition } from "vue"
import "./index.less"
export default defineComponent({
  props: {},
  setup() {
    let title = ref("wu-yan")
    const Logo = () => (
      <div class="wu-logo">
        <a>{title.value}</a>
      </div>
    )
    const menus = reactive([
      {
        name: "首页",
      },
      {
        name: "特点",
      },
      {
        name: "介绍",
      },
    ])
    const Menu = () => (
      <div class="wu-flex wu-menu">
        {menus.map((item) => (
          <div>
            <a>{item.name}</a>
          </div>
        ))}
      </div>
    )
    return () => (
      <div class="wu-flex wu-header">
        <Logo></Logo>
        <Transition>
          
        </Transition>
        <Menu></Menu>
      </div>
    )
  }
})
