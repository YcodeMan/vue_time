<template>
  <div class="MovieComing">
    <!-- ------------最受关注部分-------------- -->
    <div class="mosemovie">
      <h2 class="title">
        <b>最受关注</b>
        <span>（{{attention.length}}部）</span>
      </h2>
      <div class="filmscroll">
        <div class="swiper-content">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item,index) in attention' :key='index'>
                  <div class="table_transition4">
                    <div class="info" >
                      <time>
                        <span>{{item.rMonth}}月{{item.rDay}}日</span>
                      </time>
                      <div class="table_movielist">
                        <div class="upmovie_pic">
                          <a href="#">
                            <img class="m_img img_box" :src="item.image">
                          </a>
                        </div>
                        <div class="upmovie_txt_td">
                          <dl>
                            <dt>
                              <a href="#">
                                <b>{{item.title}}</b>
                              </a>
                            </dt>
                            <dd>
                              <p>
                                <b class="color">{{item.wantedCount}}</b> 人想看 - {{item.type}}
                              </p>
                              <p class="txt_elli">导演：{{item.director}}</p>
                              <p class="txt_elli">演员：{{item.actor1}},{{item.actor2}}</p>
                            </dd>
                          </dl>
                          <div class="btns">
                            <a href="#" :class="item.isTicket | getMovieState('isTicket') | isEmpty ">
                              <span>{{item.isTicket | getMovieState('isTicket') }}</span>
                            </a>
                            <a href="#" :class="item.isVideo | getMovieState('isVideo') | isEmpty">
                              <span>{{item.isVideo | getMovieState('isVideo') }}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import Vuex from 'vuex'
import {movieState} from '@filters/movieState'
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css";
import { constants } from 'crypto';

export default {
  name: "MovieComing",
    mounted(){
        var mySwiper = new Swiper('.swiper-content', {
            autoplay: false,//可选选项，自动滑动
            loop: false,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
  created() {
      this.getMovieComing()
  },
  computed: {
    ...Vuex.mapState({
      attention: state => state.movieComing.attention,
    })
  
  },
  methods: {
    ...Vuex.mapActions({
      getMovieComing: 'movieComing/actionsGetMovieComing'
    })
  },
  filters: {
    //获取影片的状态
    getMovieState(val, key) {
      return movieState({[key]: val})
    },
    isEmpty(val) {
      if(val === undefined) {
        return 'hide';
      }
       return '';
    }
  }
};
</script>


<style scoped>
/* ------------最受关注部分样式------------- */
.mosemovie .title b,
.mosemovie .title span {
  font-size: 0.45rem;
  line-height: 0.4rem;
  font-weight: 600;
}
.mosemovie .title span {
  color: #999;
}
.mosemovie .title {
  margin: 0.15rem 0.2rem;
}
.table_movielist {
  display: flex;
}
.upmovie_pic {
  width: 2rem;
  height: 3rem;
  margin-left: 0.2rem;
  margin-bottom: 0.25rem;
}
.upmovie_pic a img {
  width: 100%;
}
.upmovie_txt_td {
  margin-left: 0.2rem;
}
.table_transition4{
  width: 7500px;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
}
.table_transition4 .info time span {
  display: inline-block;
  font-size: 0.3rem;
  margin: 0.15rem 0.2rem;
}
.upmovie_txt_td dl dt a {
  margin-left: 0.2rem;
  font-size: 0.35rem;
  color: #333;
}
.upmovie_txt_td dl dd p {
  width: 4.8rem;
  font-size: 0.28rem;
  margin: 0.15rem 0.2rem;
}
.upmovie_txt_td dl dd p b {
  color: #ff8600;
}
.btns a {
  display: inline-block;
  width: 1.9rem;
  height: 0.65rem;
  text-align: center;
  line-height: 0.65rem;
  border-radius: 0.325rem;
  margin: 0.15rem 0.2rem;
  font-size: 0.3rem;
}
.btns .hide{
  display: none;
}
.btns a:nth-child(1) {
  background-color: #ff8600;
  border: 1px solid #ff8600;
  color: #fff;
}
.btns a:nth-child(2) {
  border: 1px solid #659c0d;
  color: #659c0d;
}

.commovie ul {
  border-top: 1px solid lightgrey;
}
.table_movielist {
  display: flex;
}
.table_movielist .day span {
  display: inline-block;
  width: 0.45rem;
  margin: 0.3rem 0.2rem;
}
</style>