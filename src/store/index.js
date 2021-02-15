import { createStore } from "vuex";
import { UserModule } from "./User"

const store = createStore({
  state: {
    // user: null
  },

  // mutations are functions that affect the STATE
  mutations: {
    // SET_USER(state, user) {
    //   state.user = user
    // }
  },

  // actions are functions that you call throughout the application that call mutations
  actions: {
    // setUser({ commit }, user) {
    //   commit('SET_USER', user)
    // }
  },

  modules: {
    User: UserModule
  }
})

export default store