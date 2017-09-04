import * as types from './mutation-types';

export default {
  // 获取首页bannerlist
  [types.HOME_GET_BANNER_LIST] (state, res) {
    state.banner = res.data.data.billboards
  },
  // 获取首页nowplaying
  [types.HOME_GET_NOWPLAYING_LIST] (state, res) {
    state.nowplay = res.data.data.films
  },
  // 获取首页commingsoon
  [types.HOME_GET_COMINGSOON_LIST] (state, res) {
    state.coming = res.data.data.films
  },

  //film页面
  // 获取首页commingsoon
  [types.FILM_GET_NOWPLAYING] (state, res) {
  	state.nowPlayingList = state.nowPlayingList.concat(res.films)
     //根据current跟total的关系判断是否还有下一页
     state.getNowMore = res.page.current<res.page.total ? true : false
 },
 [types.FILE_NOWPLAYING_NUM](state){
 	state.nowPage += 1
 	state.getNowMore = false
 },
};
