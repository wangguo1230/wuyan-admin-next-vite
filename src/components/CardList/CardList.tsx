import { defineComponent, PropType, toRefs } from 'vue';
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
  setup(props, context) {
    const { data } = toRefs(props);
    console.log(data);

    // if(context.slots)
    const cardItem = data.value.map((item) => (
      <div>
        <dl>
          <dt>
            <img src={item.src}/>
          </dt>
          <dd>{item.header}</dd>
        </dl>
      </div>
    ));
    return () => <div>{cardItem}</div>;
  },
});
