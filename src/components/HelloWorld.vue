<template>
  <div>
    <card-list
      :data="data"
      :flex="flex"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CardList from "@/components/CardList/CardList"
export default defineComponent({
  name: "HelloWorld",
  components: {
    CardList,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      data: [
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", },
        { header: "这是一个描述", src: "https://www.w3schools.com/images/lamp.jpg", }
      ],
      // flex:{'flex-direction':'row'}
    }
  },
  methods: {
    test() {
      return Promise.resolve()
    },
  },
})
</script>
