<template>
  <div class="heraldMovie">
    <ul class="movieList">
      <li class="movieInfo" v-for="(item, index) in VideoList" :key="index">
        <div class="imgbox">
          <!-- <img :src="item.image" alt> -->
          <video :poster="item.image" controls>
            <source :src="item.url" type="video/mp4">
          </video>
        </div>
        <div class="infobox">
          <dl>
            <dt>{{item.title}}</dt>
            <dd>
              <p>片长：{{item.length | getDate}}</p>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatDate } from "@filters/formatDate";
import Vuex from "vuex";
export default {
  name: "heraldMovie",
  data() {
    return {
      pageIndex: 1,
    };
  },
  activated() {
    let { id } = this.$route.params;
    if (id !== undefined) {
      // 请求数据
      this.getMovieVideo({
        id,
        pageIndex: this.pageIndex,
        time: formatDate(new Date(), "yyyyMMddhhmmss")
      });
    }
  },
  computed: {
    ...Vuex.mapState({
      VideoList: state => state.indexMovie.VideoList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getMovieVideo: "indexMovie/actionsGetMovieVideo"
    })
  },
  filters: {
    getDate(time) {
      let m = Math.floor(time / 60),
        s = time % 60;
      if (m > 0) {
        return m + "分" + s + "秒";
      }
      return s + "秒";
    }
  }
};
</script>


 <style>
.heraldMovie {
  width: 100%;
}
.movieInfo {
  margin-left: 0.2rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 0.3rem 0.2rem 0.3rem 0;
  align-items: center;
}
.imgbox {
  width: 40%;
  display: flex;
  align-items: center;
}
.imgbox img,
video {
  width: 2.9rem;
  height: 2.2rem;
}
.infobox {
  width: 60%;
  margin-left: 0.2rem;
}
.infobox dt {
  padding: 0 0 0.3rem 0;
  font-size: 0.35rem;
  color: black;
  font-weight: 600;
}
.infobox dd p {
  font-size: 0.3rem;
  margin-top: 0.1rem;
}
</style>

 