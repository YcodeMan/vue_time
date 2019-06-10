<template>
  <section>
    <ul class="movie_comment">
      <li v-for="data in longComment" :key="data.id" class="c_li">
        <dl>
          <dt>
            <a>{{data.title}}</a>
          </dt>
          <dd>
            <p>
              {{data.content | maxTxtCount(52)}}
              <v-touch tag="b" v-on:tap="toLook(data.id)">查看全文 &gt;</v-touch>
            </p>
          </dd>
        </dl>
        <ul>
          <li class="table">
            <div class="cine_user">
              <img :src="data.headurl" class="m_img">
            </div>
            <div class="cine_txt td">
              <p>
                <b>{{data.nickname}}</b>
              </p>
              <p>
                <b>{{data.modifyTime | formatTime('000')}} 看过 - 评分</b>
                <em class="m_score" v-if="data.rating>0">
                  <i>{{data.rating | formatRating}}</i>
                </em>
              </p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "AllLongCommentCon",
  computed: {
    ...Vuex.mapState({
      longComment: state => state.indexMovie.longComment
    })
  },
  methods: {
    toLook(id) {
      this.$router.push({
        name: "review",
        params: { reviewId: id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.movie_comment {
  padding: 0.36rem;
  .c_li {
    border-bottom: 1px solid #d8d8d8;
    padding: 0.36rem 0.36rem 0.3rem 0;
    margin-right: -0.36rem;
    &:last-child {
      border: 0;
    }
    &:first-child {
      padding-top: 0.12rem;
    }

    dl {
      cursor: pointer;
      color: #333;
      dt {
        a {
          font-weight: bold;
          font-size: 0.384rem;
          color: #333;
        }
      }
      dd {
        padding: 0.24rem 0 0;
        p {
          font-size: 0.336rem;
          line-height: 1.5;
          b {
            color: #1e7dd7;
            font-size: 0.288rem;
            padding-left: 0.096rem;
            font-weight: normal;
          }
        }
      }
    }
  }
}
.cine_user {
  margin-right: 0.312rem;
  width: 0.96rem;
  height: 0.96rem;
  overflow: hidden;
  img {
    border-radius: 1.008rem;
  }
}
.cine_txt p {
  color: #777;
  line-height: 1.6;
  b {
    font-size: 0.312rem;
    font-weight: normal;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
