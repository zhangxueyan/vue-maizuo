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
  // detail页面
  [types.DETAIL_GET_INFO] (state, res) {
    state.detail = res.data.data.film
  },
};
