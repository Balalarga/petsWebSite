import firebase from 'firebase/app'

export default{
    state:{
      user: null
    },
    mutations:{
      setUser(state, uid){
        console.log(uid);
        state.user = uid == undefined ? null : uid
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
      async logout(state){
        console.log("Logout " + state.user)
        state.user = null
        try{
          await firebase.auth().signOut();
        }catch (e){
          console.log(e)
        }
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
          console.log("User registered " + uid)
          console.log("Current user " + this.user)
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
      },
      userAutorized(state){
        console.log("User state " + state.user)
        return state.user;
      }
    },
    getters:{
      user(state){
        return state.user
      },
    }
}