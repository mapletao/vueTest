<template>
  <div id="app">
    {{parentMsg}}
    <childTest1 :msg="msg" ref="childTest1" @changeMsg="setMsg"/>
    <ChildTest2 />
  </div>
</template>

<script>
import ChildTest1 from './components/ChildTest1'
import ChildTest2 from './components/ChildTest2'
import ChildTestBus from './bus/ChildTest'

export default {
  name: 'App',
  data () {
    return {
      parentMsg: 'parent init msg',
      msg: 'data from parent'
    }
  },
  created () {
    ChildTestBus.$on('changeMsg', val => this.setParentMsg(val))
    // 无效
    this.$refs.childTest1.setMsgTest2('refs set msg test')
  },
  mounted () {
    this.$refs.childTest1.setMsgTest2('refs set msg test')
  },
  destrory () {
    ChildTestBus.$off('changeMsg')
  },
  methods: {
    setParentMsg (val) {
      this.parentMsg = val
    },
    setMsg (val) {
      this.msg = val
    }

  },
  components: {
    ChildTest1,
    ChildTest2
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
