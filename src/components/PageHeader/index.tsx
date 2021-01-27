import { Dropdown, Menu } from "ant-design-vue"
import { defineComponent } from "vue"
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
      <div class="wu-flex justify-center">
        <div>
          <Dropdown v-slots={slots}></Dropdown>
        </div>
      </div>
    )
  },
})
