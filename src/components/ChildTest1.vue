<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p style="color: #f80000">{{msgTest2}}</p>
    <button @click="changeMsg">changeMsg</button>
    <button @click="changeParentMsg" style="background: #ddd">changeMsgFromTest1</button>
  </div>
</template>

<script>
import ChildTestBus from '../bus/ChildTest'
export default {
  name: 'ChildTest1',
  props: ['msg'],
  data () {
    return {
      msgTest2: null
    }
  },
  methods: {
    setMsgTest2 (val) {
      this.msgTest2 = val
    },
    changeMsg () {
      this.$emit('changeMsg', 'child change test msg')
    },
    changeParentMsg () {
      ChildTestBus.$emit('changeMsg', 'change msg from childTest1')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
