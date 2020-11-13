import Vue from 'vue'
import Vuex from 'vuex'

import PrivateOffice from './privateoffice'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  
  modules: {
    privateOffice: PrivateOffice
  }
})
