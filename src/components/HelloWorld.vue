<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <a-button type="primary">wuat</a-button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
<card-list></card-list>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import CardList from '/@/components/CardList';
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },methods:{
    test(){
      return Promise.resolve();
    }
  },components:{
    CardList
  }
});
</script>
