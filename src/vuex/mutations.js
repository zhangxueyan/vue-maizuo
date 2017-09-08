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
  // film页面
  [types.FILM_GET_NOWPLAYING](state,res){
    console.log(state.getNowMore,res.page)
    state.nowPlayingList = state.nowPlayingList.concat(res.films)
    //根据current跟total的关系判断是否还有下一页
    state.getNowMore = res.page.current<res.page.total ? true : false
    },
  [types.FILE_NOWPLAYING_NUM](state){
    state.nowPage += 1
    state.getNowMore = false
  },
  [types.FILM_GET_COMINGSOON](state,res){
    console.log(state.getComingMore,res.page)
    state.comingSoonList = state.comingSoonList.concat(res.films)
    state.getComingMore = res.page.current<res.page.total ? true : false
  },
  [types.FILM_COMINGSOON_NUM](state){
    state.comingPage += 1
    state.getComingMore = false
  },
    //cinema页面
    [types.CINEMA_GET_LIST](state,res){
        /**
         * 接口没有的区域影院没有进行区分就返回，故只能前端进行分类
         * 先将列表遍历一遍，将地区相关归入一个数组
         * 进行数组去重并按照拼音首字母进行排列
         * 去重unique()在src/main.js
         */
         let district = [],_json={};
         for(let item of res.cinemas){
          _json = {
            name:item.district.name,
            pinyin:item.district.pinyin
          }
          district.push(_json)
        }
        district = district.unique('name').sort(function(a,b){
          return a.pinyin.localeCompare(b.pinyin.charAt(0))
        });
        state.district = district;
        state.cinemaList = res.cinemas;
      },
};
