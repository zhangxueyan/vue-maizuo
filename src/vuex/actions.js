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

  // detail页面
  getFilmDetail: ({ commit },id) => {
    api.getFilmDetail(id,function(res){
      commit(types.DETAIL_GET_INFO,res);
    })
  }
};
