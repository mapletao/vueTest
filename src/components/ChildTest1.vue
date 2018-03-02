<template>
  <div class="hello">
    {{msg}}

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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
