
const DATA = [{
  id: 1,
  name: 'Андрей',
  eMail: 'ololo@mail.ru',
  phone: '8-800-555-35-35',
  nameOrg: 'Организация',
  webOrg: 'organization.com'
}]

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