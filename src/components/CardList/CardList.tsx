import { defineComponent, PropType, toRefs } from 'vue';
import './index.less'
export interface Card {
  header: string,
  content?: string,
  src?:string,
}
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Array<Card>>,
    },
  },
  setup(props, {emit}) {
    const { data } = toRefs(props);
    console.log(data);
    const imgClick=()=>{
      emit('click');
    }
    
    const cardItem = data.value.map((item) => (
      <div class="item">
        <dl>
          <dt>
            <img src={item.src} onClick={imgClick} />
          </dt>
          <dd>
            <span>{item.header}</span>
          </dd>
        </dl>
      </div>
    ));

    return () => <div class="card-wrapper">{cardItem}</div>;
  },
});
