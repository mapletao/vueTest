<template>
  <div id="app">
    vue bus : {{parentMsg}}
    <childTest1 :msg="msg" ref="childTest1" @changeMsg="setMsg"/>
    <ChildTest2 />
    <br>
    <div class="vuex-box">
      <h2>vuex</h2>
      <button @click="parentChnageName">changeName</button>
      <p style="color: green">name in app : {{name}}</p>
      <p style="color: green">firstName in app : {{firstName}}</p>
      <h2>vue-router</h2>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ChildTest1 from './components/ChildTest1'
import ChildTest2 from './components/ChildTest2'
import ChildTestBus from './bus/ChildTest'
import {mapState, mapActions, mapGetters} from 'vuex'

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
    // this.$refs.childTest1.setMsgTest2('refs set msg test')
  },
  mounted () {
    this.$refs.childTest1.setMsgTest2('refs set msg test')
  },
  destrory () {
    ChildTestBus.$off('changeMsg')
  },
  computed: {
    ...mapState({
      name: state => state.test.name
    }),
    ...mapGetters(['firstName'])
  },
  methods: {
    ...mapActions(['changeName']),
    parentChnageName () {
      const arr = ['t', 'a', 'o']
      let a = this.getIndex()
      while (~arr[a].indexOf(this.firstName)) {
        a = this.getIndex()
      }
      const name = this.name.replace(this.firstName, arr[a])
      this.changeName({name})
    },
    getIndex () {
      return Math.floor(Math.random() * 3)
    },
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
.vuex-box {
  border: 1px dotted #ddd;
  padding: 20px;
}
.hello {
  border: 1px dotted red;
  margin: 20px 0;
  padding: 20px 0;
}
</style>
