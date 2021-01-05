import { h, defineComponent, PropType, toRefs } from 'vue'
import './index.less'
export interface Card {
  header: string
  content?: string
  src?: string
}
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Array<Card>>
    },
    flex: {
      type: Object
    }
  },
  setup(props, { emit }) {
    const { data, flex } = toRefs(props)

    const imgClick = () => {
      emit('click')
    }

    const cardItem = data.value.map((item) => (
      <div class="item">
        <img src={item.src} onClick={imgClick} />
        <div class="desc">{item.header}</div>
      </div>
    ))

    return () => <div class="card-wrapper">{cardItem}</div>
  }
})
