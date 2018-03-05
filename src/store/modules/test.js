const state = {
  name: 't_evening'
}
const getters = {
  firstName: state => state.name[0]
}
const actions = {
  changeName ({commit}, {name}) {
    commit('setName', { name })
  }
}
const mutations = {
  setName (state, {name}) {
    state.name = name
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
