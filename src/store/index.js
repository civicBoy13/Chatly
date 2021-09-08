import { createStore } from 'vuex'
import {db,auth} from '../extensions/Firebase';

export default createStore({
  state: {
    contacts: [],
    currentUser: undefined
  },
  mutations: {
    setUser: function (state, user){
      state.currentUser = user;
    },
    setUserStatus: function(state, value){
      state.currentUser.status = value;
    }
  },
  actions: {
    setUser: async function({commit}){
      var uid = auth.currentUser.uid;
      await db.collection('Users').doc(uid).update({
        status:1
      });
      var data = await db.collection('Users').doc(uid).get();
      var userData = data.data();
      userData.id = data.id;
      commit('setUser',userData);
      console.log('user loaded');
    },
    setUserStatus: async function({commit},payload){
      var uid = auth.currentUser.uid;
      await db.collection('Users').doc(uid).update({
        status:payload
      });
      commit('setUserStatus', payload)
    }
  },
  getters:{
    getUser:function(state){
      return state.currentUser;
    }
  },
  modules: {
  }
})
