<template>
  <div class="film-now">
    <ul>
    	<li v-for="item in nowplay" class="now-li clearfix">
    	  <router-link :to="{name:'detail',params:{id:item.id}}">
    	    <div class="now-pic">
    	    	<img :src="item.cover.origin" alt="">
    	    </div>
    	    <div class="now-txt">
    	    	<p>{{item.name}}</p>
    	    	<p>{{item.intro}}</p>
    	    	<p>{{item.cinemaCount}}家影院上映 {{item.watchCount}}购票</p>
    	    </div>
    	    <p class="now-grade">{{item.grade}}</p>
    	  </router-link>
    	</li>
    </ul>
  </div>
</template>
<script>
 import axios from 'axios'
 import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
      msg: 'film-now'
    }
  },
  created(){
  	this.fetchData()
  },
  computed:{
  	...mapState([
  		'nowplay'
  		])
  },
  methods:{
  	fetchData(){
  		this.$store.dispatch('getNowPlaying')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.now-li{
	padding:0.3125rem 0;
	a{
		display:block;
	}
}
.now-pic{
	width:1.40625rem;
	height:1.875rem;
	float:left;
	img{
		display:block;
		width:100%;
		height:100%;
	}
}
.now-txt{
	width:5.625rem;
	float:left;
	text-align:left;
	margin-left:0.3125rem;
	p{
		line-height:0.625rem;
	}
}
.now-grade{
	float:right
}
</style>