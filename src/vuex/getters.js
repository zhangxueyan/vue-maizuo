export default {
  // home页面
  getBannerList: state => state.banner,
  getNowPlaying: state => state.nowplay,
  getComingSoon:state => state.coming,
  // film页面
  getNowPlayList:state => state.nowPlayingList,
  getComingList:state => state.comingSoonList
};
