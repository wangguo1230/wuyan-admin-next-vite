import { logout } from "@/api/system/user/loginApi"
import { useInject } from "@/core/compositions/useAggregation"
import { ServiceEnum, UseKey } from "@/enums"
import { UserEnum } from "@/enums/system"
import { UserInfo } from "@/types/system/user"
import { storageUtil } from "@/utils"
import { Avatar, Breadcrumb, Dropdown, Menu } from "ant-design-vue"
import { defineComponent, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import "./index.scss"
const MenuItem = Menu.Item
const BreadcrumbItem = Breadcrumb.Item
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
      ""
    )
    const menuClick = (params: { key: string }) => {
      console.log(params)
      if (params.key === "logout") {
        logout().then(() => {
          storageUtil.removeStorageItem(UserEnum.Token)
          window.location.reload()
        })
      }
    }
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
        <Menu onClick={menuClick}>
          <MenuItem key="me">个人中心</MenuItem>
          <MenuItem key="logout">退出</MenuItem>
        </Menu>
      ),
    }
    const pathList = useRoute().matched.map((item) => {
      return <BreadcrumbItem>{item.meta.title}</BreadcrumbItem>
    })
    return () => (
      <div>
        <div class="wu-content-header">
          <div>111{/* 左侧 */}</div>
          <div class="wu-content-right">
            <Dropdown v-slots={slots}></Dropdown>
          </div>
        </div>
        <div class="wu-breadcrumb">
          <Breadcrumb>{pathList}</Breadcrumb>
        </div>
      </div>
    )
  },
})
