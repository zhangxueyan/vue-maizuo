export default {
  // home页面
  getBannerList: state => state.banner,
  getNowPlaying: state => state.nowplay,
  getComingSoon:state => state.coming,
  // detail页面
  getFilmDetail:state => state.detail
};
