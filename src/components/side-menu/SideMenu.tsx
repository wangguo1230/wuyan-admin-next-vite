import { Menu as MenuType } from "@/types/system/menu"
import { Menu } from "ant-design-vue"
import { defineComponent, PropType, toRefs } from "vue"
import { RouterLink } from "vue-router"
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
export default defineComponent({
  name: "SideMenu",
  props: {
    menuList: {
      type: Array as PropType<MenuType[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { menuList, } = toRefs(props)

    /**
     * 渲染子菜单项,然后遍历子级进行渲染
     * @param data
     */
    const renderSubMenu = (data: MenuType) => {
      return (
        <SubMenu title={data.permissionName}>
          {data.children?.map((item) => renderMenu(item))}
        </SubMenu>
      )
    }

    /**
     * 渲染菜单项
     * @param item
     */
    const renderItem = (item: MenuType) => {
      // 方便扩展之后跳往第三方 构建a标签
      const CustomTag = RouterLink
      const props = { to: item.permissionUrl, }
      return (
        <MenuItem>
          <CustomTag {...props}>
            <span>{item.permissionName}</span>
          </CustomTag>
        </MenuItem>
      )
    }

    /**
     * 判断是否有子级 没有子级直接渲染Item菜单项,
     * 有子级就渲染SubMenu 子菜单项
     * @param item
     */
    const renderMenu = (item: MenuType) => {
      if (item) {
        const bool = item.children
        return bool ? renderSubMenu(item) : renderItem(item)
      }
      return null
    }

    /**
     * <a-menu>
     *  <a-menu-item>菜单项</a-menu-item>
     *  <a-sub-menu title="子菜单">
     *    <a-menu-item>子菜单项</a-menu-item>
     *  </a-sub-menu>
     * </a-menu>
     */
    return () => (
      <>
        <Menu mode="inline" theme="dark">
          {menuList.value.map((item: MenuType) => {
            return renderMenu(item)
          })}
        </Menu>
      </>
    )
  },
})
