<template>
  <div class="home">
    <appNav></appNav>
    <slideBar></slideBar>
    <div class="banner">
     <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in banner" :key="item.id">
          <router-link :to="{name:'home'}">
            <img :src="item.imageUrl" alt="">
          </router-link>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="home-wrap">
      <!-- 正在热映 -->
      <div class="nowplay">
        <ul>
          <li class="now-li" v-for="item in nowplay">
           <router-link :to="{name:'detail',params:{id:item.id}}">
            <img :src="item.cover.origin" alt="">
            <div class="now-txt clearfix">
              <p class="now-p1">{{item.name}}<br>
                <span>{{item.cinemaCount}}家影院上映{{item.watchCount}}人购票</span></p>
                <p class="now-p2">{{item.grade}}</p>
              </div>
            </router-link>
          </li>
        </ul>
        <a href="#/film/nowplaying" class="s-more">更多热映电影</a>
      </div>
      <!-- 即将上映 -->
      <div class="nowplay coming">
        <span class="coming-title">即将上映</span>
        <ul>
          <li class="now-li" v-for="item in coming">
          <router-link :to="{name:'detail',params:{id:item.id}}">
            <img :src="item.cover.origin" alt="">
            <div class="now-txt clearfix">
              <p class="now-p1 com-p1">{{item.cinemaCount}}家影院上映{{item.watchCount}}人购票</p>
              <p class="now-p2">{{item.grade}}</p>
              </div>
            </router-link>
          </li>
        </ul>
        <a href="#/film/comingsoon" class="s-more">更多即将上映电影</a>
      </div>
    </div>
    <backTop></backTop>
</div>
</template>
<script>
  import axios from 'axios'
  import {mapState,mapGetters,mapActions} from 'vuex'
  import appNav  from '../components/Navbar'
  import backTop  from '../components/Backtop'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import slideBar from '../components/Slidebar'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true
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
   slideBar,
   backTop,
   swiper,
   swiperSlide
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">

    .home{
      padding-top:1.25rem;
    }
    .nowplay{
      padding:0.3125rem;
      .now-li{
        width:100%;
        background:#fff;
        margin-top:0.3125rem;
        a{
          display:block;
          img{
            display:block;
            width: 100%;
          }
          .now-txt{
            padding:0.3125rem;
            .now-p1{
              float:left;
              text-align:left;
              line-height:0.625rem;
            }
            .com-p1{
             line-height:0.9375rem;
            }
            .now-p2{
              float:right;
              line-height:0.9375rem;
            }
          }
        }
      }
    .s-more{
      display:block;
      width:3.75rem;
      height:0.78125rem;
      border-radius:0.46875rem;
      text-align:center;
      line-height:0.78125rem;
      border:1px solid #ccc;
      margin:0.3125rem auto;
    }
    .coming{
      border-top:1px solid #ccc;
      position: relative;
      .coming-title{
        display:block;
        width:3.125rem;
        height:0.625rem;
        background: #a7a7a7;
        color:#fff;
        text-align:center;
        line-height:0.625rem;
        position: absolute;
        left:50%;
        -webkit-transform:translateX(-50%);
        -ms-transform:translateX(-50%);
        -moz-transform:translateX(-50%);
        transform:translateX(-50%);
        top:-0.3125rem;
      }
    }
  }
  .banner{
    // height:5.625rem;
    // overflow:hidden;
    img{
      display:block;
      width:100%;
    }
  }

</style>
