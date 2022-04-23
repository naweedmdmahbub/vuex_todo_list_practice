<template>
  <div class="">
    <div>
      {{ todo.title }} 
      <button class="btn btn-danger" @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  data(){
    return {
      index: null
    }
  },
  methods: {
    deleteTodo(){
      this.index = this.$vnode.key;
      this.$store.dispatch('deleteTodo', this.index);
    }
  }
}
</script>

<style scoped>

</style>