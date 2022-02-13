<template>
  <div id="app">
    <h3>仅仅是一个备忘录</h3>
    <div class="container">
      <div class="warp">
        <AdderBox :receive="receive"></AdderBox>
        <List :todos="todos" :changeById="changeById" :killById="killById"></List>
        <Overview :todos="todos" :changeAll="changeAll" :killAllFinished="killAllFinished"></Overview>
      </div>
    </div>
  </div>
</template>

<script>
import AdderBox from "@/components/AdderBox";
import List from "@/components/List";
import Overview from "@/components/Overview";
import {nanoid} from "nanoid";

export default {
  name: 'App',
  components: {
    AdderBox, List, Overview
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("temp")) || []
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(){
        localStorage.setItem("temp", JSON.stringify(this.todos));
      }
    }
  },
  methods: {
    receive(title){
      const todoObj = {id:nanoid(), title:title, done:false}
      this.todos.unshift(todoObj)
    },
    changeById(id){
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      });
    },
    killById(id) {
      if (confirm("确认删除吗？")) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    },
    changeAll(b) {
      if (b) {
        this.todos.forEach(todo => todo.done = true);
      } else {
        this.todos.forEach(todo => todo.done = false);
      }
    },
    killAllFinished() {
      if (confirm("确定删除吗？")) {
        this.todos = this.todos.filter(todo => !todo.done);
      }
    }
  }
}
</script>

<style>
  body {
    background: #fff;
  }
  h3 {
    text-align: center;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus {
    outline: none;
  }
  .container {
    width: 600px;
    margin: 0 auto;
  }
  .container .warp {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
