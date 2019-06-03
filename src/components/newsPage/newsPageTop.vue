<template>
  <div class="newsPageTop">
    <div class="topTitle">
      <h2>{{hotDetails.title}}</h2>
      <p>
        <time>{{hotDetails.time}}</time>
        <span>
          <a href="javascript:void(0);">评论{{hotDetails.commentCount}}</a>
          <a href="javascript:void(0);">相关电影/影人</a>
        </span>
      </p>
    </div>
    <div class="content" v-html="hotDetails.content"></div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "newsPageTop",
  created() {
    this.getHotDetails();
  },
  methods: {
    ...Vuex.mapActions({
      getHotDetails: "indexMovie/actionsHotPointsDetails"
    })
  },
  computed: {
    ...Vuex.mapState({
      hotDetails: state => state.indexMovie.HotPointsDetails
    })
  }
};
</script>
<style lang="scss" scoped>
.newsPageTop {
  padding: 0.4rem;
  .topTitle {
    padding-bottom: 0.3rem;
    h2 {
      line-height: 1.5;
      font-weight: normal;
      font-size: 0.5rem;
      color: #000;
    }
    p {
      display: flex;
      justify-content: space-between;
      padding-top: 0.3rem;

      time {
        color: #999;
        font-size: 0.24rem;
      }
      a {
        color: #1e7dd7;
        margin-left: 0.1rem;
        font-size: 0.24rem;
      }
    }
  }
}

 .content >>> div {
    color: red;
  }
</style>
