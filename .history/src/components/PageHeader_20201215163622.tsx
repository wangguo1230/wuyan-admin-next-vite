import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {},
  setup() {
    let title=ref("wu-yan");
    return () => <div>
      {title.value}
    </div>
  }
})
