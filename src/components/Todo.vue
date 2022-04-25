<template>
  <div class="">
    <div>
      <span :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{ todo.title }}</span> 
      <button class="btn btn-danger" @click="deleteTodo($vnode.key)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['todo'],
  data(){
    return {
      index: null,
    }
  },
  methods: {
    ...mapActions({
      deleteTodo: 'deleteTodo',
      toggleTodoStatus: 'toggleTodo'
    }),
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>