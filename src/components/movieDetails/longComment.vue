<template>
    <div>
        <article id="commentRegion" class="cinema_reviews">
          <h2>
            <a href="#/movieDetails/allLongComment">
              <span class="i_tnext"></span>
              <b>精选影评（{{count}}）</b>
            </a>
          </h2>
          <dl>
            <dt>
              <a href="#!/review/detail/8190665/">{{data.title}}</a>
            </dt>
            <dd>
              <p>
                <a href="#!/review/detail/8190665/">
                  {{data.content | maxTxtCount(55)}}
                </a>
              </p>
            </dd>
          </dl>
          <ul>
            <li class="table">
              <div class="cine_user">
                <img
                  :src="data.headurl"
                  class="m_img"
                >
              </div>
              <div class="cine_txt td">
                <p>
                  <b>{{data.nickname}}</b>
                </p>
                <p>
                  <b>{{data.modifyTime | formatTime('000')}} 看过 - 评分</b>
                  <em class="m_score">
                    <i>{{data.rating | formatRating}}</i>
                  </em>
                </p>
              </div>
            </li>
          </ul>
        </article>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'LongComment',
    methods: {
      ...Vuex.mapActions({
        actionsHotLongComment: 'indexMovie/actionsHotLongComment',
      })
    },
    computed: {
      ...Vuex.mapState({
        count: state => state.indexMovie.hotLongComment.count,
        data: state => state.indexMovie.hotLongComment.comment
      }),
    }
}
</script>

<style lang="scss" scoped>
.cinema_reviews {
  padding: .36rem .36rem .12rem;
  h2 a {
    display: block;
    color: #333;
    position: relative;
    b {
      font-size: .408rem;
      line-height: 1.2;
      overflow: hidden;
    }
  }
  dl {
    cursor: pointer;
    color: #333;
    dt {
      padding: .36rem 0 0;
      a {
          font-size: .384rem;
      }
    }
    dd {
        padding: .24rem 0 .24rem 0;
         p {
    font-size: .336rem;
    line-height: 1.5;
}
    }
  }
}
.cine_user {
    margin-right: .312rem;
    width: .96rem;
    height: .96rem;
    overflow: hidden;
    img {
      border-radius: 1.008rem;
    }
}
.cine_txt p {
    color: #777;
    line-height: 1.6;
    b {
    font-size: .312rem;
    font-weight: normal;
    display: inline-block;
    vertical-align: middle;
    }
}
</style>