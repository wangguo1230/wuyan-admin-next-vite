import { useInject } from "@/core/compositions/useAggregation"
import { ServiceEnum, UseKey } from "@/enums"
import { UserInfo } from "@/types/system/user"
import { Avatar, Dropdown, Menu } from "ant-design-vue"
import { defineComponent, ref } from "vue"
import "./index.scss"
const MenuItem = Menu.Item
export default defineComponent({
  name: "PageHeader",
  setup() {
    const userInfo = useInject<UserInfo>(
      UseKey.UserInfo,
      ref({
        id: "",
        name: "",
        account: "",
        password: "",
        sex: "",
        mobilePhone: "",
        email: "",
        idCard: "",
        isAdmin: false,
        status: "",
        menuList: [],
        permissionList: [],
      }),
      "",
    )

    const slots = {
      default: () => (
        <div>
          <Avatar
            src={userInfo.value.avatar || ServiceEnum.AvatarDefault}
            shape="circle"
            size="default"></Avatar>
          <span>{userInfo.value.name}</span>
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
