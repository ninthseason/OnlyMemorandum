<template>
  <ul class="list">
    <Item v-for="i in todos" :key="i.id" :todoObj="i" :changeById="changeById" :killById="killById"></Item>
  </ul>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "List",
  components: {
    Item
  },
  props:["todos", "changeById", "killById"],

}
</script>

<style scoped>
  .list {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }
  .empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
