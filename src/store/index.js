import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

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
    privateOffice: PrivateOffice,
    auth
  }
})
