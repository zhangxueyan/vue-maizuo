<template>
  <div class="detail">
   <appNav></appNav>
   <div class="detail-wrap">
     <div class="detail-pic">
      <img :src="detail.cover.origin" alt="">
    </div>
    <div class="detail-info">
      <p class="detail-p1">影片简介</p>
      <p>导演：{{detail.director}}</p>
      <p class="detail-p2">主演：<span v-for="item in detail.actors">{{item.name}}</span></p>
      <p>地区语言：{{detail.nation}}({{detail.language}}</p>
      <p>上映日期：{{detail.premiereAt}}</p>
      <p class="detail-p2">{{detail.synopsis}}</p>
       <a href="#/film" class="s-more">立即购票</a>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters,mapActions} from 'vuex'
import appNav  from '../components/Navbar'
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
   this.fetchData()
 },
 computed:{
  ...mapState([
    'detail'
    ])
},
  methods:{
    fetchData(){
      this.$store.dispatch('getFilmDetail',this.$route.params.id)
    }
  },
  components:{
   appNav
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" tpye="css/text"> 
  .detail-wrap{
    padding-top:1.25rem;
    text-align:left;
    .detail-pic{
      img{
        display:block;
        width:100%;
      }
    }
    .detail-info{
      padding-top:0.46875rem;
      p{
        line-height:0.78125rem;
        padding:0.15625rem 0.3125rem;
      }
      .detail-p1{
        border-left: 0.3125rem solid #e4c89c;
        padding:0.3125rem;
      }
      .detail-p2{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    background: #e38700;
    color:#fff;
  }
</style>
