import {h defineComponent } from 'vue'
import PageHeader from '../components/PageHeader/PageHeader'
export default defineComponent({
  props: {},
  setup(props) {
    return () => <div class="wu-bg">
      <PageHeader></PageHeader>
    </div>
  }
})
