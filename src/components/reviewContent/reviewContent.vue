<template>
  <section>
    <h2>{{review.title}}</h2>
    <div class="review_info">
      <div class="table">
        <div class="user_pic">
          <img :src="review.userImage" class="m_img">
        </div>
        <ul class="td">
          <li>
            <p>
              <span>{{review.nickname}}</span>
            </p>
          </li>
          <li>
            <p>
              <span>评《{{review.relatedObj?review.relatedObj.name:''}}》</span>
              <em class="m_score">
                <i>{{review.rating}}</i>
              </em>
            </p>
          </li>
        </ul>
      </div>
      <a href="#!/movie/263080/" class="movie_pic">
        <img :src="review.relatedObj?review.relatedObj.image:''" alt class="img_box m_img">
      </a>
      <time>
        <span>{{review.time}}</span>
      </time>
    </div>
    <div v-html="review.content" class="re_txt"></div>
  </section>
</template>

<script>
import Vuex from "vuex";
import { formatDate } from "@filters/formatDate";
export default {
  name: "ReviewContent",
  activated() {
    let reviewId = this.$route.params.reviewId;
    let t = formatDate(new Date(), "yyyyMMddhhmmss");
    this.actionsReview({ reviewId, t });
  },
  methods: {
    ...Vuex.mapActions({
      actionsReview: "indexMovie/actionsReview"
    })
  },
  computed: {
    ...Vuex.mapState({
      review: state => state.indexMovie.review
    })
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 0.36rem 0.36rem 1.2rem;
  min-height: 8.884rem;
  h2 {
    line-height: 1.4;
    padding-bottom: 0.144rem;
    font-size: 0.576rem;
  }
  .review_info {
    position: relative;
    padding: 0 0 0.2rem 0;
    .table {
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.3rem;
      .user_pic {
        width: 0.96rem;
        height: 0.96rem;
        overflow: hidden;
        border-radius: 1.2rem;
      }
      li {
        margin: 0.096rem 0 0.144rem 0.24rem;
      }
      p span {
        font-size: 0.288rem;
      }
    }
    .movie_pic {
      position: absolute;
      right: 0;
      top: -0.216rem;
      height: 2.16rem;
      width: 1.464rem;
    }
    time {
      color: #999;
      display: block;
      padding: 0.216rem 0 0;
      span {
        font-size: 0.288rem;
      }
    }
  }
  .re_txt {
    margin-top: 0.24rem;
    font-size: 0.36rem;
  }
}
</style>
