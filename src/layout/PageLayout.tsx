import { defineComponent } from "vue"
import { RouterView } from "vue-router"

export default defineComponent({
  setup() {
    return () => (
      <div>
        page
        <RouterView></RouterView>
      </div>
    )
  },
})
