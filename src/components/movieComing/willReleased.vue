<template>
  <div class="WillReleased">
    <!-- ---------------即将上映部分--------------- -->
    <div class="commovie">
      <h2 class="title">
        <b>即将上映</b>
        <span>({{moviecomings.length}})</span>
      </h2>
      <div class="commovielist" v-for="(val,index) in movieComingMonth" :key='index'>
        <time class="month">
          <span>{{val.Month}}</span>
        </time>
        <ul>
          <li v-for="(item, index) in val.Movies" :key='index'>
            <div class="table_movielist">
              <div class="day">
                <time>
                  <span>{{item.rDay}}日</span>
                </time>
              </div>
              <div class="info">
                <div class="upmovie">
                  <a href="#">
                    <img class="img_box" :src="item.image">
                  </a>
                </div>
                <div class="upmovie_txt">
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
                      <p>导演：{{item.director}}</p>
                    </dd>
                  </dl>
                  <div class="btns">
                    <a href="#" :class="item.isTicket | getMovieState('isTicket') | isEmpty ">
                      <span>{{item.isTicket | getMovieState('isTicket') }}</span>
                    </a>
                    <v-touch tag='a' @tap='ToMovieVideo(item.id)' href="#" :class="item.isVideo | getMovieState('isVideo') | isEmpty">
                      <span>{{item.isVideo | getMovieState('isVideo') }}</span>
                    </v-touch>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
import {movieState} from '@filters/movieState'
export default {
  name: "WillReleased",
  computed: {
    ...Vuex.mapState({
      moviecomings: state => state.movieComing.moviecomings,
      movieComingMonth: state => state.movieComing.movieComingMonth

    })
  },
  methods: {
    ToMovieVideo(id) {
      
      this.$router.push({
        name: 'movieVideo',
        path: 'movieVideo',
        params: {id}
      })
    }
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
/* --------即将上映部分样式----- */
.table_transition4 li time span {
  display: inline-block;
  font-size: 0.3rem;
  margin: 0.15rem 0.2rem;
}
.commovie ul {
  border-top: 1px solid lightgrey;
}
.table_movielist {
  display: flex;
}
.table_movielist .day span {
  display: inline-block;
  width: 0.48rem;
  margin: 0.3rem 0.2rem;
}

.commovie {
  border-top: 30px solid #f6f6f6;
}
.commovie .month,
.commovie .title {
  margin: 0.2rem 0.2rem;
}
.commovie .month {
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.3rem;
}
.commovie h2 span {
  color: #999;
}
.commovie h2 {
  font-size: 0.4rem;
  margin-top: 0.3rem;
}
.upmovie {
  width: 1.5rem;
  height: 2.3rem;
  margin: 0.3rem 0;
}
.upmovie img {
  width: 100%;
  height: 100%;
}
.upmovie_txt {
  margin: 0.3rem 0.2rem;
}
.upmovie_txt dt a {
  margin-left: 0.2rem;
  font-size: 0.35rem;
  color: #333;
}
.upmovie_txt p {
  font-size: 0.28rem;
  margin: 0.15rem 0.2rem;
  width: 4.8rem;
}
.upmovie_txt p b {
  color: #ff8600;
}
.info {
  display: flex;
  border-bottom: 1px solid lightgray;
}
.btns .hide{
  display: none;
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
.btns a:nth-child(1) {
  background-color: #ff8600;
  border: 1px solid #ff8600;
  color: #fff;
}
.btns a:nth-child(2) {
  border: 1px solid #659c0d;
  color: #659c0d;
}
</style>
