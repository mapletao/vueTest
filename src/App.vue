<template>
  <div id="app">
    <childTest1 :msg="msg"/>
  </div>
</template>

<script>
import childTest1 from './components/childTest1'

export default {
  name: 'App',
  data () {
    return {
      msg: 'data from parent'
    }
  },
  methods: {

  },
  components: {
    childTest1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
