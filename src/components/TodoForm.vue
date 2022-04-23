<template>
  <div class="">
    <input type="text" v-model="todo">
    <button class="btn btn-primary" @click="newTodo">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: ''
    }
  },
  methods: {
    newTodo(){
      this.$store.dispatch('addNewTodo', this.todo);
      this.todo = '';
    }
  }
}
</script>

<style scoped>

</style>