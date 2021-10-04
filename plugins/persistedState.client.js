import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {

  window.onNuxtReady(() => {
    createPersistedState({
      storage: localStorage,
      key: 'resumify',
      paths: ['user'],
    })(store)
  })
}
