import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import test from './modules/test'

Vue.use(Vuex)

const modules = {
  test: test
}
// const state = {}
export default new Vuex.Store({
  modules,
  getters,
  // state,
  mutations,
  actions
})
