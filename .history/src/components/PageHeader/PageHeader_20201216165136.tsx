import { defineComponent, ref } from 'vue'
import './index.less'
export default defineComponent({
  props: {},
  setup() {
    let title = ref('wu-yan')
    const logo =(<div class=" wu-logo">
          <a>{title.value}</a>
        </div>);
    return () => (
      <div class="wu-flex wu-header">
        
        <div></div>
      </div>
    )
  }
})
