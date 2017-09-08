<template>
  <div class="slidebar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'slidebar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.slidebar{
  // width:3.125rem;
  // height:100%;
  // border:1px solid #ccc;
  // position: fixed;
  // left:0;
  // top:0;
}
</style>
