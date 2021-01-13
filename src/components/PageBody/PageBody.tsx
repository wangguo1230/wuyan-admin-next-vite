import { defineComponent, reactive } from "vue";
import "./index.less"
export default defineComponent({
  setup(){
    const content =reactive({name:1});
    return () => (
      <div class="wu-flex">
        <div>
          <h1>让H5制作，更方便</h1>
        </div>
        <div>
          <img src="/_right.png"/>
        </div>
      </div>
    )
  }
})