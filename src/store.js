import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Todo Item A',
        completed: false
      },
      {
        title: 'Todo Item B',
        completed: false
      },
    ]
  },

  getters: {

  },

  mutations: {
    ADD_NEW_TODO(state, todoItem){
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },
    DELETE_TODO(state, index){
      state.todos.splice(index, 1);
    }
  },
  
  actions: {
    addNewTodo({commit}, todoItem){
      commit('ADD_NEW_TODO', todoItem);
    },
    deleteTodo({commit}, index){
      commit('DELETE_TODO', index);
    }
  },
});