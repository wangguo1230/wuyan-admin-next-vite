import { defineComponent } from "vue"
import PageHeader from "@/components/PageHeader/PageHeader"
import PageBody from "@/components/PageBody/PageBody"
import "./index.less"
export default defineComponent({
  props: {},
  setup() {
    // 宽度
    const width = screen.availWidth * 0.8 + "px"
    return () => (
      <div class="wu-bg">
        <div class="wu-wrapper" style={{ width: width }}>
          <PageHeader></PageHeader>
          <PageBody></PageBody>
        </div>
      </div>
    )
  },
})
