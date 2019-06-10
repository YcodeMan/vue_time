<template>
  <div class="hotMovieContent">
    <v-touch tag='li' @top='getMovieDetails(item.id)' v-for='(item, index) in movieList ' :key='index'>
      <div class="hotPoint">
        <div class="movie_pic">
          <a href>
            <i class="i_hot"></i>
            <img :src='item.img'>
          </a>
        </div>
        <div class="movie_txt">
          <dl>
            <dt>
              <a href="#!/movie/213190/">
                <b>{{item.tCn}}</b>
                <em v-show="(item.r > 0 ? true : false)">
                  <i>{{item.r > 0 ? item.r : ''}}</i>
                </em>
              </a>
            </dt>
            <dd>
              <p class="movie_tip">
                <i class="i_block i_dot"></i>
                <span>{{item.commonSpecial}}</span>
              </p>
              <div class="mtool" >
                <i class="i_cine_05" 
                  v-for='(data, dataIndex) in item.versions' :key='dataIndex'>{{data.version}}</i>
              </div>
            </dd>
          </dl>
          <div class="msg">
            <b class="i_block">112家影院上映1271场</b>
            <a href="//ticket-m.mtime.cn/theater/290/movie/213190/" class="buyBtn">
              <span>购票</span>
            </a>
          </div>
        </div>
      </div>
    </v-touch>
  </div>
</template>

<script>
import Vuex from 'vuex'
import {formatDate} from '@filters/formatDate'
export default {
  name: "hotMovieContent",
  computed: {
      ...Vuex.mapState({
        movieList: state => state.indexMovie.movieListMsg,
        city: state => state.city.city
      })
  },
  methods: {
      getMovieDetails(id) {
        this.router.push({
          name: 'movieDetails',
          path: '/movieDetails',
          param: {
            movieId:id,
            locationId: this.city.id,
            t: formatDate(new Date(), 'yyyyMMddhhmmss')
          }
        })
      }
  }
};
</script>
<style lang="scss" scoped>
.hotMovieContent {
  margin: 0 0.2rem;
  li {
    padding-top: 0.3rem;

    .hotPoint {
      display: flex;
      .movie_pic {
        margin-right: 0.4rem;
        img {
          display: inline-block;
          width: 1.6rem;
          height: 2.4rem;
        }
      }
    }
    .movie_txt {
      dl {
        dt {
          b {
            display: inline-block;
            color: #000;
            font-size: 0.3rem;
          }
          em {
            background: #659d0e;
            width: 0.4rem;
            height: 0.34rem;
            margin-left: 0.2rem;
            color: #fff;
            border-radius: 0;
            display: inline-block;
            vertical-align: -6px;
            overflow: hidden;
            line-height: 0.34rem;
            text-align: center;
          }
          .m_scoreHide {
            display: none;
          }
        }
        dd {
          padding-top: 0.15rem;
          .movie_tip {
            color: #659d0e;
            span {
              width: 5rem;
              height: 0.4rem;
              display: inline-block;
              vertical-align: middle;
              line-height: 0.4rem;
              white-space: nowrap;
              font-size: .28rem;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          .mtool {
            overflow: hidden;
            margin-top: .1rem;
            i {
              display: inline-block;
              border: 1px solid #659d0e;
              color: #659d0e;
              padding: 0.04rem 0.04rem;
              margin: 0.1rem 0.04rem;
              font-size: 0.2rem;
            }
          }
        }
      }
    }
    .msg {
        display: flex;
        justify-content: space-between;
        margin-top: .2rem;
      b {
        display: inline-block;
        font-size: 0.28rem;
        color: #999;
        font-weight: normal;
        line-height: 0.3rem;
        margin-top: 0.16rem;
      }
      .buyBtn {
        display: inline-block;
        text-align: center;
        margin:  .04rem .4rem;
        width: 1rem;
        height: .45rem;
        line-height: .4rem;
        font-size: .25rem;
        border-radius: .4rem;
        background: #ff8600;
        color: #fff;
        border: 1px solid #ff8600;
      }
    }
  }
}
</style>
