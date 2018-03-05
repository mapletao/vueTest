import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)
export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  }
})
