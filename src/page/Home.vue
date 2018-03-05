<template>
  <div class="home">
    <p>{{msg}}</p>
    <p>name in Home: {{name}}</p>
    <p>firstName in Home: {{firstName}}</p>
    <router-link to='/user'>to user page</router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home Page'
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
<style scoped>
.home {
  color: blue
}
</style>
