<template>
  <div class="navbar clearfix">
    <i class="iconfont icon-menu" @click = "toggleShowslide"></i>
    <p class="nav-title">卖座电影</p>
    <i class="iconfont icon-geren"></i>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'navbar'
    }
  },
  methods:{
    ...mapActions([
      'toggleShowslide'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.navbar{
  width:10rem;
  height:1.25rem;
  background: #282828;
  color:#fff;
  position: fixed;
  padding:0.3125rem;
  top:0;
  z-index:1000;
  .icon-menu{
    font-size:0.625rem;
    float:left;
  }
  .icon-geren{
    font-size:0.625rem;
    float:right;
  }
  .nav-title{
    font-size:0.5125rem;
    line-height:0.703125rem;
    text-align:left;
    float:left;
    margin-left:0.3125rem;
    height:1.25rem;
  }
}
</style>
