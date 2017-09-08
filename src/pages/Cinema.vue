<template>
  <div class="cinema">
  <appNav></appNav>
   <div class="item" v-for="item in district">
    <div class="cinema-title" @click="changeArea(item.pinyin)">{{item.name}}</div>
    <div class="cinema-list" v-if='pinyin == item.pinyin'>
        <div class="shop" v-for="shop in cinemaList" v-if="shop.district.pinyin == item.pinyin">
           <div class="area-title">{{shop.name}} <span>座</span><span v-if="shop.itemTypes.length>3">通</span></div>
            <div class="tip">
                <span v-for="tip in shop.labels" v-if="tip.type != 'REFUNDABLE_SEAT_TICKET'" :class="tip.type.toLocaleLowerCase()">{{tip.name}}</span>
            </div>
            <div class="area">{{shop.address}}</div>
           <div class="extra">距离未知 | 剩余{{shop.avaliableSchedule}}场</div>
           <div class="price">￥{{shop.minimumPrice}}</div>
        </div>
    </div>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters,mapActions} from 'vuex'
import appNav  from '../components/Navbar'
export default {
  name: 'cinema',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pinyin:''
    }
  },
  components:{
    appNav
  },
  created(){
      if(this.cinemaList.length == 0){
        let id = this.$route.params.id
        this.$store.dispatch('getCinemaList',id)
      }
  },
  computed:{
    ...mapState([
      'cinemaList',
      'district'
      ])
  },
    methods:{
      changeArea:function(area){
        if(this.pinyin == area){
          this.pinyin = ''
          return true
        }
        this.pinyin = area;
        return true;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.cinema{
      padding-top:1.25rem;
      background:#fff;
      .cinema-title{
        width:100%;
        height:1.25rem;
        text-align:left;
        line-height:1.25rem;
        background: #e1e1e1;
        border-bottom:1px solid #fff;
        padding-left:0.3125rem;
      }
      .shop{
        padding: 10px;
        .area-title span{
        color: #a5c1d5;
        border: 1px solid #a5c1d5;
        border-radius:50%;
        }
        .tip sapn{
          display: inline-block;
          width: 1.5625rem;
          height: 0.46875rem;
          background: #ff9658;
          line-height:0.46875rem;
          text-align: center;
          border-radius: 0.15625rem;
          color: #Fff;
        }
        .area,.extra{
          font-size:0.25rem;
          color:#ccc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price{
              color: #fc8637;
              font-size:0.3125rem;
        }
      }
}
</style>
