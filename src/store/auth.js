import firebase from 'firebase/app'
import router from '@/router'

export default{
    state:{
      user: {
        logged: false,
        uid: null,
        data: null,
        pets: []
      }
    },
    mutations:{
      setUserUID(state, uid){
        console.log("setUserUID")
        state.user.uid = uid
      },
      setLogged(state, value){
        console.log("setLogged")
        state.user.logged = value
      },
      setData(state, data){
        console.log("setData")
        state.user.data = data
        firebase.database().ref("users/"+state.user.uid+"/data").update(data)
      },
      async updateUser(state, uid){
        console.log("updateUser")
        if(state.user.logged){
          firebase.database().ref("users/"+uid+"/data")
          .on("value", (result)=>{
            state.user.data = result.val()
          })
          firebase.database().ref("pets").orderByChild("parent").equalTo(uid)
          .on('value', (pets)=>{
            state.user.pets = pets.val()
            console.log("Pets: ")
            console.log(state.user.pets)
          })
        }
      }
    },
    actions:{
      fetchUser({commit}, user){
        console.log("fetchUser")
        if(user){
          commit('setLogged', true)
          commit('setUserUID', user.uid)
          setTimeout(2000)
          commit("updateUser", user.uid)
        }else{
          commit('setLogged', false)
          commit('setUserUID', null)
          commit('setData', null)
        }
      },
      setUserData({commit}, data){
        console.log("setUserData")
        commit('setData', data)
      },
      async login({dispatch, commit}, {email, pass}) {
        console.log("fetchUser")
        dispatch
        try{
          const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
          commit("fetchUser", user)
          setTimeout(()=>{}, 2000)
          router.push('/')
        }catch (e){
          console.log(e);
        }
      },
     async logout({commit}){
      console.log("logout")
        await firebase.auth().signOut();
        commit('fetchUser', null)
        router.push('/')
      },
      async register({dispatch, commit}, {email, pass, name}) {
        dispatch
        try{
          firebase.auth().createUserWithEmailAndPassword(email, pass).then(()=>{
            const user = firebase.auth().currentUser
            firebase.database().ref('users/'+user.uid+'/data').set({
              name: name,
              organization: "",
              site: "",
              phone: "",
              userImage: "https://www.angulararchitects.io/wp-content/uploads/2019/06/wso-softwarearchitekt-placeholder-male.svg",
              orgImage: "https://rayfund.ru/wp-content/uploads/2015/12/logo_facebook2.jpg"
            })
            router.push('/')
          });
          setTimeout(()=>{}, 2000)
          commit('fetchUser', firebase.auth().currentUser)
        }catch (e){
          console.log(e);
        }
      },
      loggedUser({commit}, user){
        console.log("console")
        commit('setUser', user)
      },
      userAutorized(state){
        console.log("userAutorized")
        console.log("User state " + state.user)
        return state.user?true:false;
      }
    },
    getters:{      
      getUserUID(state){
        console.log("getUserUID")
        return state.user.uid
      },
      getData(state){
        console.log("getData")
        console.log(state.user.data)
        return state.user.data
      },
      getPets(state){
        console.log("getData")
        console.log(state.user.pets)
        return state.user.pets
      }
    }
}