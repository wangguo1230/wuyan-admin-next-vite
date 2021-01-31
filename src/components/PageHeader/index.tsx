import { Dropdown, Menu } from "ant-design-vue"
import { defineComponent } from "vue"
import  "./index.scss"
const MenuItem = Menu.Item
export default defineComponent({
  setup() {
    const slots = {
      default: () => <div>用户</div>,
      overlay: () => (
        <Menu>
          <MenuItem>个人中心</MenuItem>
          <MenuItem>退出</MenuItem>
        </Menu>
      ),
    }
    return () => (
      <div class="wu-page-header">
        <div>
          左侧
        </div>
        <div class="wu-page-right">
          <Dropdown v-slots={slots}></Dropdown>
        </div>
      </div>
    )
  },
})
