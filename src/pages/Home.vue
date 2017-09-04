<template>
  <div class="home">
  <appNav></appNav>
  <div class="home-wrap">
<!--     <div class="banner">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="item in banner">
          <img :src="item.imageUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div> -->
    <h1>{{ banner }}</h1>
    <h1>{{ nowplay }}</h1>
    <h1>{{coming}}</h1>
  </div>

  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters,mapActions} from 'vuex'
import appNav  from '../components/Navbar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          autoplay:5000
        }
    }
  },
  created(){
   this.fetchData()
  },
  computed:{
    ...mapState([
      'banner',
      'nowplay',
      'coming'
      ])
  },
  methods:{
    fetchData(){
      this.$store.dispatch('getBannerList')
      this.$store.dispatch('getNowPlaying')
      this.$store.dispatch('getComingSoon')
    }
  },
  components:{
     appNav,
     swiper,
     swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.home{
  .home-wrap{
    padding-top: 1.25rem;
  }
  .banner{
    .swiper-box{
      width:100%;
      height:4.6875rem;
      overflow:hidden;
    }
    img{
      display:block;
      width:100%;
    }
  }
}
</style>
