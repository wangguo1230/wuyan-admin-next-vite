import { ServiceEnum } from "@/enums"
import { Avatar, Dropdown, Menu } from "ant-design-vue"
import { defineComponent } from "vue"
import  "./index.scss"
const MenuItem = Menu.Item
export default defineComponent({
  setup() {
    const slots = {
      default: () => <Avatar src={ServiceEnum.AvatarDefault} shape="circle" size="default"></Avatar>,
      overlay: () => (
        <Menu>
          <MenuItem>个人中心</MenuItem>
          <MenuItem>退出</MenuItem>
        </Menu>
      ),
    }
    return () => (
      <div class="wu-content-header">
        <div>
          {/* 左侧 */}
        </div>
        <div class="wu-content-right">
          <Dropdown v-slots={slots}></Dropdown>
        </div>
      </div>
    )
  },
})
