import firebase from 'firebase/app'

export default{
    state:{
      user: null
    },
    mutations:{
      setUser(state, uid){
        state.user = uid
      }
    },
    actions:{
      async login({dispatch, commit}, {email, pass}) {
        try{
          await firebase.auth().signInWithEmailAndPassword(email, pass);
          const uid = await dispatch('getUid');
          commit("setUser", uid)
        }catch (e){
          console.log(e);
        }
      },
      async logout(){
        await firebase.auth().signOut();
      },
      async register({dispatch, commit}, {email, pass, name}) {
        try{
          await firebase.auth().createUserWithEmailAndPassword(email, pass);
          const uid = await dispatch('getUid');
          commit("setUser", uid)
          await firebase.database().ref('/users/'+uid+'/info').set({
            name: name,
            organization: "",
            site: "",
            phone: "",
            photo: "",
            pets: []
          })
        }catch (e){
          console.log(e);
        }
      },
      getUid(){
        const user = firebase.auth().currentUser;
        return user ? user.uid: null;
      },
      loggedUser({commit}, user){
        commit('setUser', user)
      }
    },
    getters:{
      user(state){
        return state.user
      },
      checkUser(state){
        return state.user == null;
      }
    }
}