import firebase from 'firebase/app'
import router from '@/router'

export default{
    state:{
      user: {
        logged: false,
        uid: null,
        data: null
      }
    },
    mutations:{
      setUserUID(state, uid){
        state.user.uid = uid
      },
      setLogged(state, value){
        state.user.logged = value
      },
      setData(state, data){
        state.user.data = data
        console.log(data)
        firebase.database().ref("users/"+state.user.uid+"/data").update(data)
      },
      async updateUser(state, uid){
        if(state.user.logged){
          firebase.database().ref("users/"+uid+"/data")
          .on("value", (result)=>{
            state.user.data = result.val()
          })
        }
      }
    },
    actions:{
      fetchUser({commit}, user){
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
      async setUserData({commit}, data){
        commit('setData', data)
        setTimeout(() => {}, 1000)
      },
      async login({dispatch, commit}, {email, pass}) {
        dispatch
        try{
          const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
          commit("fetchUser", user)
          setTimeout(()=>{}, 1000)
          router.push('/')
        }catch (e){
          console.log(e);
        }
      },
     async logout({commit}){
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
        commit('setUser', user)
      },
      userAutorized(state){
        console.log("User state " + state.user)
        return state.user?true:false;
      }
    },
    getters:{      
      getUserUID(state){
        return state.user.uid
      },
      getData(state){
        return state.user.data
      }
    }
}