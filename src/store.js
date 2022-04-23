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
    completedTodos (state) {
      return state.todos.filter(todo => todo.completed).length
    },
    pendingTodos (state) {
      return state.todos.filter(todo => !todo.completed).length
    }
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
    },
    TOGGLE_TODO(state, todoItem){
      todoItem.completed = !todoItem.completed
    }
  },
  
  actions: {
    addNewTodo({commit}, todoItem){
      commit('ADD_NEW_TODO', todoItem);
    },
    deleteTodo({commit}, index){
      commit('DELETE_TODO', index);
    },
    toggleTodo({commit}, todoItem){
      commit('TOGGLE_TODO', todoItem);
    }
  },
});