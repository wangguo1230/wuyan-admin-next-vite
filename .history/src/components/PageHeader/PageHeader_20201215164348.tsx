import { defineComponent, ref } from 'vue'
import "./index.less"
export default defineComponent({
  props: {},
  setup() {
    let title=ref("wu-yan");
    return () => <div class="wu-flex wu-logo">
     <div><a>{title.value}</a></div>
    </div>
  }
})
