<template>
  <card-list :data="data"></card-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardList from '/@/components/CardList/CardList';
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      data: [
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
        { header: '这是一个描述', src: 'https://www.w3schools.com/images/lamp.jpg' },
      ],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    test() {
      return Promise.resolve();
    },
  },
  components: {
    CardList,
  },
});
</script>
