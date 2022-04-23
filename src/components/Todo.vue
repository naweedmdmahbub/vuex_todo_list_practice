<template>
  <div class="">
    <div>
      <span :class="{completed: todo.completed}" @click="toggleTodoStatus">{{ todo.title }}</span> 
      <button class="btn btn-danger" @click="deleteTodo" style="padding: 5px">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  data(){
    return {
      index: null,
    }
  },
  methods: {
    deleteTodo(){
      this.index = this.$vnode.key;
      this.$store.dispatch('deleteTodo', this.index);
    },
    toggleTodoStatus(){
      this.$store.dispatch('toggleTodo', this.todo);
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>