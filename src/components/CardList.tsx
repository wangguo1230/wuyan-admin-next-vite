import { defineComponent, ref, withModifiers } from 'vue';
export default defineComponent({
  props: {},
  setup() {
    const count = ref(1);
    const inc = () => {
      count.value++;
    };
    return () => <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>;
  },
});
