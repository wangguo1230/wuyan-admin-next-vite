import { Table } from "ant-design-vue"
import { defineComponent } from "vue"

export default defineComponent({
  name:"WTable",
  setup(props, { attrs, }) {
    return () => <Table {...props} {...attrs}></Table>
  },
})
