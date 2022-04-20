<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <h1>Todos</h1>
      <todo-form />
      <todo-list />
    </div>

  </div>
</template>

<script>
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
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
