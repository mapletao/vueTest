<template>
  <div id="app">

    <childTest1 :msg="msg" ref="childTest1" @changeMsg="setMsg"/>
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
  created () {
    // 无效
    this.$refs.childTest1.setMsgTest2('refs set msg test')
  },
  mounted () {
    this.$refs.childTest1.setMsgTest2('refs set msg test')
  },
  methods: {
    setMsg (val) {
      this.msg = val
    }

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
