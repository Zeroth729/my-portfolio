import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePage: 'home',
  },
  mutations: {
    setActivePage(state, value) {
      state.activePage = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
