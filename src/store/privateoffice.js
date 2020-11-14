import DATA from '../model/privateoffice'

export default {

  namespaced: true,

  state: {
    announecement: DATA
  },

  getters: {
    getPrivateOffice(state) {
      return state.announecement
    }
  }
}