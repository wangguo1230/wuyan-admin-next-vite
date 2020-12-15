import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {},
  setup() {
    let title=ref("wu-yan");
    title.value="11";
    return () => <div>
      
    </div>
  }
})
