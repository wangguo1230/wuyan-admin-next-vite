<template>
  <div> <w-table :columns="columns" :data-source="data"/> </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue"
  const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: {
      title: "customTitle",
      customRender: "name",
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    slots: {
      customRender: "tags",
    },
  },
  {
    title: "Action",
    key: "action",
    slots: {
      customRender: "action",
    },
  }
]
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  }
]
  export default defineComponent({
    setup() {
      return {data,columns,}
    },
  })
</script>
