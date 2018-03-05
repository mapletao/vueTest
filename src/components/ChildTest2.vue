<template>
  <div class="hello">
    <h2>childTest2 component</h2>
    <p style="color: blue">{{msgTest2}}</p>
    <button @click="changeMsg">changeMsgFromTest2</button>
  </div>
</template>

<script>
import ChildTestBus from '../bus/ChildTest'
export default {
  name: 'ChildTest2',
  props: ['msg'],
  data () {
    return {
      msgTest2: 'msg in childTest2'
    }
  },
  methods: {
    changeMsg () {
      ChildTestBus.$emit('changeMsg', 'change msg from childTest2')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
