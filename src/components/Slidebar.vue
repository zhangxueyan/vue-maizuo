<template>
  <div v-if="isShowslide">
    <div class="slidebar">
      <dl class="slide-dl">
        <dd v-for="item in items" @click = "hideSlide">
          <router-link :to="item.path">
            {{item.name}}
          </router-link>
        </dd>
      </dl>
    </div>
    <div class="mask" @click = "hideSlide"></div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'slidebar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[
       {name:'首页',path:'/home'},
       {name:'影片',path:'/film/nowplaying'}
      ]
    }
  },
  computed:{
    ...mapState([
      'isShowslide'
      ])
  },
    methods:{
    ...mapActions([
      'hideSlide'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.slidebar{
  width:7.25rem;
  height:100%;
  padding-top:1.25rem;
  background: #282828;
  position: fixed;
  left:0;
  top:0;
  z-index:500;
  .slide-dl dd{
     line-height:1.25rem;
     color:#fff;
     padding-left:0.46875rem;
    border-bottom: 1px dotted #333;
    a{
      display:block;
    }
  }
}
.mask{
  width:100%;
  height:100%;
 background: rgba(0, 0, 0, 0.55);
  position: fixed;
  left:0;
  top:0;
  z-index:400;
}
</style>
