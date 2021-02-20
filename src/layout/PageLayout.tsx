import { defineComponent } from "vue"
import {  RouterView, useRoute } from "vue-router"

export default defineComponent({
  props:{
  },
  setup(props) {
   const route = useRoute()
    return () => (
      <div>
        <h1>{route.meta.title}</h1>
        <RouterView></RouterView>
      </div>
    )
  },
})
