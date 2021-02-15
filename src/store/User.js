export const UserModule = {
  namespaced: true,

  state: {
    user: null
  },

  // mutations are functions that affect the STATE
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },

  // actions are functions that you call throughout the application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  },
}