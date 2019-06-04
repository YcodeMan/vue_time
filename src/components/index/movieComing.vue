<template>
  <div class="movieComing">
    <v-touch tag="h2" @tap="toHotMovie()">
      <a>
        <i>&gt;</i>
        <b>正在热映({{movieListMsg.length}}部)</b>
      </a>
    </v-touch>
    <ul>
      <v-touch
        tag="li"
        @tap="ToMovieDetails(item.id)"
        v-for="(item,index) in someMovie "
        :key="index"
      >
        <a>
          <div>
            <img :src="item.img">
            <em v-show="item.r > 0 ? true : false">
              <i>{{item.r > 1 ? item.r : ''}}</i>
            </em>
          </div>
          <p>
            <span>{{item.tCn}}</span>
          </p>
        </a>
      </v-touch>
    </ul>
    <v-touch tag='h2' @tap='ToMovieComing()'>
      <a>
        <i>&gt;</i>
        <b>即将上映({{totalComingMovieNum}})</b>
      </a>
    </v-touch>
  </div>
</template>

<script>
import Vuex from "vuex";
import { formatDate } from "@filters/formatDate";

export default {
  name: "movieComing",
  created() {
    // 格式化时间请求新数据
    var date = formatDate(new Date(), "yyyyMMddhhmmss");

    // 判断当前是否有city对象存储在本地
    if (this.city.id) {
      // 当前地址id有但数据不存在
      if (
        !(
          this.someMovie.length > 0 &&
          this.totalComingMovieNum &&
          this.movieListMsg.length > 0
        )
      ) {
        this.movieComing({
          date,
          cityId: this.city.id
        });
        return;
      }
      return;
    } else {
      // 异步立即执行函数
      // 异步请求地址数据,然后根据地址请求电影数据
      (async () => {
        await this.getHotCity(date);
        // 请求电影数据
        this.movieComing({
          date,
          cityId: this.city.id
        });
      })();
    }
  },
  computed: {
    ...Vuex.mapState({
      someMovie: state => state.indexMovie.someMovie,
      totalComingMovieNum: state => state.indexMovie.totalComingMovieNum,
      movieListMsg: state => state.indexMovie.movieListMsg,

      // 首页第一次请求city存入本地存储
      city: state => state.city.city
    })
  },
  methods: {
    ...Vuex.mapActions({
      movieComing: "indexMovie/actionsMovieComing",

      getHotCity: "city/actionsHotCity"
    }),
    ToMovieDetails(id) {
      var date = formatDate(new Date(), "yyyyMMddhhmmss");

      this.$router.push({
        name: "movieDetails",
        path: "movieDetails",
        params: { movieId: id, locationId: this.city.id, t: date }
      });
    },

    // 跳转区热门电影
    toHotMovie() {
      this.$router.push({
        name: "hotMovie",
        path: "hotMovie"
      });
    },
    // 跳转正在上映
    ToMovieComing() {
      this.$router.push({
        name: 'movieComing'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
$rem0_4: 0.4rem;
.movieComing {
  margin: 0.12rem 0.34rem 0.34rem;
  h2 {
    position: relative;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    border-top: 1px solid #333;
    a {
      height: 100%;
      i {
        position: absolute;
        right: 0.1rem;
        width: $rem0_4;
        font-size: $rem0_4;
        font-weight: 200;
      }
      b {
        font-size: 0.35rem;
        font-weight: bold;
        color: #333;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 1.7rem;
      height: 3.4rem;
      div {
        position: relative;
        width: 1.45rem;
        height: 2.28rem;
        margin: 0 0.14rem;
        img {
          width: 1.5rem;
        }
        em {
          position: absolute;
          top: 0.06rem;
          right: 0;
          width: 0.42rem;
          height: $rem0_4;
          text-align: center;
          line-height: $rem0_4;
          background-color: #659d0e;
          i {
            color: #fff;
          }
        }
      }
      p {
        width: 1.6rem;
        height: 0.77rem;
        overflow: hidden;
        padding-top: 0.1rem;
        text-align: center;
        span {
          width: 1.5rem;
          height: 0.82rem;
          font-size: 0.32rem;
          color: #000;
        }
      }
    }
  }
}

ul {
  overflow: hidden;
}
</style>



