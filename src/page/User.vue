<template>
  <div class="user">
    <p>{{msg}}</p>
    <router-link to='/home'>to home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'User Page'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
