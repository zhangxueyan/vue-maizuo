<template>
  <div class="film">
    <appNav></appNav>
    <div class="film-wrap">
      <div class="clearfix film-tabs">
       <router-link to="/film/nowplaying">正在热映</router-link>
       <router-link to="/film/comingsoon">即将上映</router-link> 
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters,mapActions} from 'vuex'
import appNav  from '../components/Navbar'
import backTop  from '../components/Backtop'
export default {
  name: 'film',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
   appNav,
   backTop
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
  .film-wrap{
    padding:1.25rem 0.3125rem 0;
    .film-tabs{
      border-bottom: 1px solid #fe6e00; 
      a{
        display:block;
        width:50%;
        float:left;
        line-height:0.78125rem;
      }
      .router-link-active{
        color:#fe6e00;
        border-bottom: 3px solid #fe6e00;
      }  
    }
  }
</style>
