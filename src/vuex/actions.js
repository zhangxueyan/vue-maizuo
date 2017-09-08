import api from '../api'
import * as types from './mutation-types';
import state  from './state';
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
  },
  // film页面  //获取正在热映列表 
  getNowPlayList:({commit})=>{
        if(state.getNowMore){
            commit(types.FILE_NOWPLAYING_NUM);
            api.getNowPlayList(state.nowPage,function(res){
                commit(types.FILM_GET_NOWPLAYING,res.data.data)
            })
        }
  },
    //获取即将上映列表
  getComingList:({commit})=>{
        if(state.getComingMore){
            commit(types.FILM_COMINGSOON_NUM);
            api.getComingList(state.comingPage,function(res){
                commit(types.FILM_GET_COMINGSOON,res.data.data)
            })
        }
    },
      //cinema页面
          //获取相关影院列表
    getCinemaList:function({commit},id){
        // commit(types.COM_LOADING_STATUS,true);
        api.getCinemaList(id,function(res){
            commit(types.CINEMA_GET_LIST,res.data.data);
            // commit(types.COM_LOADING_STATUS,false);
        })
    },
};
