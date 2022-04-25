<template>
  <div id="app">
    <div class="container">
      <h1>Todos</h1>
      <h3>Completed: {{ completedTodos }}</h3>
      <h3>Pending: {{ pendingTodos }}</h3>
      <todo-form />
      <todo-list />
    </div>

  </div>
</template>

<script>
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    ...mapGetters({
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos',
    }),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
