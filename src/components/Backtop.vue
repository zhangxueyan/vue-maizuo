<template>
  <div class="back-top" v-if = "show" @click = "goTop">
    <i class="iconfont icon-huojian"></i>
  </div>
</template>

<script>
import $ from 'webpack-zepto';
export default {
  name: 'back-top',
  data () {
    return {
      msg: 'Welcome to Your essence',
      show:false
    }
  },
  mounted() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  },
  beforeDestory() {
    $(window).off('scroll');
  },
  methods:{
    goTop(){
      $(window).scrollTop(0);
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
    .back-top{
      width:1.25rem;
      height:1.25rem;
      border-radius:50%;
      background: rgba(0, 0, 0, 0.7);
      position: fixed;
      right:0.15625rem;
      bottom:0.3125rem;
      text-align:center;
      .icon-huojian{
        font-size:0.9375rem;
        line-height:1.25rem;
        text-align:center;
        color:#fff;
      }
    }
</style>