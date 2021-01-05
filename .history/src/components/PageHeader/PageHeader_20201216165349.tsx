import { defineComponent, reactive, ref } from 'vue'
import './index.less'
export default defineComponent({
  props: {},
  setup() {
    let title = ref('wu-yan')
    const Logo = () => (
      <div class=" wu-logo">
        <a>{title.value}</a>
      </div>
    )
    const menus = reactive(['首页','特点',])
    const Menu = () => <div></div>
    return () => (
      <div class="wu-flex wu-header">
        <Logo></Logo>
        <Menu></Menu>
      </div>
    )
  }
})
