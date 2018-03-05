<template>
  <div class="user">
    <p>{{msg}}</p>
    <p>name in User: {{name}}</p>
    <p>firstName in User: {{firstName}}</p>
    <router-link to='/home'>to home page</router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'User Page'
    }
  },
  computed: {
    ...mapState({
      name: state => state.test.name
    }),
    ...mapGetters(['firstName'])
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.user {
  color: red
}
</style>
