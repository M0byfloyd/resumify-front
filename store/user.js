const state = () => ({
  token: null,
  image: null,
  id: null,
  infos: null,
  displayName: null,
});

const getters = {
  getToken: (state) => state.token,
  getImage: (state) => state.image,
  getId: (state)=> state.id,
  getInfos: (state) => state.infos,
  getDisplayName: (state) => state.displayName
};

const mutations = {
  setToken:(state, token) => ( state.token = token ),
  setImage:(state, image) => (state.image = image),
  setId: (state, id) => ( state.id = id ),
  setInfos: (state, infos) => ( state.infos = infos),
  setDisplayName: (state, displayName) => ( state.displayName = displayName)
};

const actions = {
  setToken({state, commit}, token) {
    commit('setToken', token)
  },

  setInfos({state, commit}, infos) {

    commit('setImage', infos.images[0].url)
    commit('setId', infos.id )
    commit('setDisplayName', infos.display_name)
    commit('setInfos', infos)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
