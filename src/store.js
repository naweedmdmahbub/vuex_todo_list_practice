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

  },
  
  actions: {

  },
});