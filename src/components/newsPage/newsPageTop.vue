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
    <div class="author">
      <p>(作者：{{hotDetails.author}}  编辑：{{hotDetails.editor}})</p>
    </div>

  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "newsPageTop",
  activated() {
    let { id, t } = this.$route.params;
    if (!id) {
     id = this.HotPointId
    }
    this.getHotDetails({ id, t });
  },
  methods: {
    ...Vuex.mapActions({
      getHotDetails: "indexMovie/actionsHotPointsDetails"
  
    })
  },
  computed: {
    ...Vuex.mapState({
      hotDetails: state => state.indexMovie.HotPointsDetails,
      HotPointId: state => state.indexMovie.HotPointId
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
  .content {
    ::v-deep div {
      margin-top: 0.32rem;
      font-size: 0.35rem;
      line-height: 1.6;
      b {
        color: #333;
        font-weight: bold;
      }
      img {
        width: 100%;
      }
      video {
        position: relative;
        z-index: 0;
        width: 6.6rem;
        height: 4.3rem;
        background: #000;
      }
      p {
        margin: 0.2rem 0 0;
        line-height: 1.5;
      }
    }
  }
  .author {
    margin-top: .2rem;
  }
}
</style>
