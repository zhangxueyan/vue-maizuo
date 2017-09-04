import api from '../api'
import * as types from './mutation-types';

export default {
  // 获取首页bannerlist
  getBannerList: ({ commit }) => {
  	api.getBannerList(function(res){
  		commit(types.HOME_GET_BANNER_LIST,res);
  	})
  },
 // 获取首页nowplaying
  getNowPlaying: ({ commit }) => {
  	api.getNowPlaying(function(res){
  		commit(types.HOME_GET_NOWPLAYING_LIST,res);
  	})
  },
   // 获取首页comingsoon
  getComingSoon: ({ commit }) => {
  	api.getComingSoon(function(res){
  		commit(types.HOME_GET_COMINGSOON_LIST,res);
  	})
  },

  // film页面
   //获取热映列表
    //偷懒没有弄加载更多的效果，故去掉loading
    getNowPlayList:function({commit}){
    	if(state.getNowMore){
            commit(types.FILE_NOWPLAYING_NUM);
            api.getNowPlayList(state.nowPage,function(res){
            	commit(types.FILM_GET_NOWPLAYING,res)
            })
        }
        
    },

};
