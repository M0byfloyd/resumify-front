export const state = () => ({
  token: null
});

export const getters = {
  getToken: (state) => state.token
};

export const mutations = {
  setToken:(state, token) => ( state.token = token ),
  };

export const actions = {
  setToken({state, commit}, token) {
    commit('setToken', token)
  }
};
