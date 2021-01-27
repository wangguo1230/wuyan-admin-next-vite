import { Menu } from "ant-design-vue"
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div>logo</div>
        <div>
          <Menu></Menu>
        </div>
      </div>
    )
  },
})
