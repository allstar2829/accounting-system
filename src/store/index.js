import { createStore } from 'vuex'

export default createStore({
  state: {
    userData:null, 
    token :null 
  },
  mutations: {
    SET_USER_DATA(state, user_data) {
      state.userData = user_data 
    },
    SET_TOKEN(state, token) {
        state.token = token 
    },
  },
  actions: {
  },
  modules: {
  }
})
