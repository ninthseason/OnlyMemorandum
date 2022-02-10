<template>
  <div class="overview" v-show="todos.length">
    <label>
      <input type="checkbox" :checked="finished === todos.length" @change="changeAllHandler">
    </label>
    <span>
      <span>已完成 {{ finished }}</span> / 全部 {{todos.length}}
    </span>
    <button class="btn btn-danger" @click="killAllFinished">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props:["todos", "changeAll", "killAllFinished"],
  computed: {
    finished(){
      let res = 0
      this.todos.forEach((todo) => {
        if (todo.done) {
          res += 1
        }
      });
      return res
    }
  },
  methods: {
    changeAllHandler(e) {
      this.changeAll(e.target.checked)
    }
  }
}
</script>

<style scoped>
  .overview {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .overview label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .overview label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .overview button {
    float: right;
    margin-top: 5px;
  }
</style>
