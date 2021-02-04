import { useInject } from "@/core/compositions/useAggregation"
import { ServiceEnum, UseKey } from "@/enums"
import { Avatar, Dropdown, Menu } from "ant-design-vue"
import { defineComponent, ref } from "vue"
import "./index.scss"
const MenuItem = Menu.Item
export default defineComponent({
  name: "PageHeader",
  setup() {
    const userInfo = useInject(
      UseKey.UserInfo,
      ref(""),"name"
    )
setTimeout(() => {
  console.log("赋值前",userInfo.value)
  userInfo.value = "111"
  // console.log("赋值后",userInfo.value.name)
}, 2000)
    
    const slots = {
      default: () => (
        <div>
          <Avatar src={ServiceEnum.AvatarDefault} shape="circle" size="default"></Avatar><span>{userInfo.value}</span>
        </div>
      ),
      overlay: () => (
        <Menu>
          <MenuItem>个人中心</MenuItem>
          <MenuItem>退出</MenuItem>
        </Menu>
      ),
    }
    return () => (
      <div class="wu-content-header">
        <div>{/* 左侧 */}</div>
        <div class="wu-content-right">
          <Dropdown v-slots={slots}></Dropdown>
        </div>
      </div>
    )
  },
})
