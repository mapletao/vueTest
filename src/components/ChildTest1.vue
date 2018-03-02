<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p style="color: #f80000">{{msgTest2}}</p>
    <button @click="changeMsg">changeMsg</button>
  </div>
</template>

<script>
export default {
  name: 'childTest1',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
