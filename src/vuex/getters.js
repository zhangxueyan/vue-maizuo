export default {
  // home页面
  getBannerList: state => state.banner,
  getNowPlaying: state => state.nowplay,
  getComingSoon:state => state.coming,
  // detail页面
  getFilmDetail:state => state.detail,
    //film页面
  getNowPlayList: state => state.nowPlayingList,
  getComingList: state => state.comingSoonList,
    //cinema页面
  getCinemaList: state => state.cinemaList,
  getDistrict: state => state.district
};
