import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

export const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
});
