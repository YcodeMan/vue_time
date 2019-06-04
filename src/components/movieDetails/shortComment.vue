<template>
  <div>
    <article class="cinema_mess" style>
      <h2>
        <b>
          网友短评（
          <span>{{totalCommentCount}}</span>）
        </b>
      </h2>
      <ul>
        <!--影片资料页_短影评模块-->
        <li class="table" v-for="item in cts" :key="item.id">
          <div class="cine_user">
            <a>
              <img :src="item.caimg" class="m_img img_box">
            </a>
          </div>
          <dl class="td">
            <dt>
              <time>
                <b>{{item.lcd}}</b>
                <b>- 评</b>
                <em class="m_score">
                  <i>{{item.cr}}</i>
                </em>
              </time>
              <b>{{item.ca}}</b>
            </dt>
            <dd>
              <p>
                <a href="#!/tweet/detail/47821089/">{{item.ce}}</a>
              </p>
            </dd>
            <dd>
              <a href="#!/tweet/detail/47821089/" class="moviedetail_shortcomment">
                <i class="i_reply"></i>
                <span>回复</span>
              </a>
              <!--赞-->
              <a href="javascript:void(0)">
                <i class="i_praise"></i>
                <span>赞</span>
              </a>
            </dd>
          </dl>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "ShortComment",
  created(){
    this.actionsShortComment();
  },
  methods: {
    ...Vuex.mapActions({
      actionsShortComment: "indexMovie/actionsShortComment"
    })
  },
  computed: {
    ...Vuex.mapState({
      shortComment: state => state.indexMovie.shortComment
    }),
    cts: function() {
      if (this.shortComment) {
        return this.shortComment.cts;
      } else {
        return "";
      }
    },
    totalCommentCount: function() {
      if (this.shortComment) {
        return this.shortComment.totalCommentCount;
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cinema_mess {
  padding: 0.36rem 0 0.36rem 0.36rem;
  h2 b {
    font-size: 0.408rem;
    line-height: 1.2;
    overflow: hidden;
  }
  li {
    padding: 0.36rem 0 0;
    border-bottom: 1px solid #d8d8d8;
  }
}
.cine_user {
  margin-right: 0.312rem;
  a {
    display: block;
    img {
      display: block;
      width: 0.96rem;
      height: 0.96rem;
      overflow: hidden;
      border-radius: 1.008rem;
    }
  }
}
.cinema_mess li {
  &:last-child {
    border-bottom: none;
  }
  dl {
    padding: 0 0.36rem 0 0;
    dt {
      color: #999;
      line-height: 1.8;
      margin: 0 0 0.5em 0;
      time {
        float: right;
        b {
          font-size: 0.288rem;
          font-weight: normal;
          vertical-align: middle;
        }
      }
    }
    dd {
      p {
        font-size: 0.336rem;
        line-height: 1.5;
      }
      &:last-child {
        text-align: right;
        a {
          color: #777;
          display: inline-block;
          vertical-align: middle;
          margin-left: 0.24rem;
          padding: 0.24rem 0 0.36rem;
          span {
            font-size: 0.288rem;
          }
          &:first-child {
            width: 1.2rem;
            text-align: left;
          }
        }
      }
    }
  }
}
.i_reply,
.i_praise {
  margin: 0 0.072rem 0 0;
  width: 0.432rem;
  height: 0.432rem;
  display: inline-block;
  vertical-align: middle;
}
.i_reply {
  width: 0.48rem;
  height: 0.48rem;
  background: url(//static1.mtime.cn/html5/20190531185056/images/2014/ico_reply.png)
    no-repeat center center;
  background-size: cover;
}
.i_praise {
  background: url(//static1.mtime.cn/html5/20190531185056/images/2014/ico_praise.png)
    no-repeat center center;
  background-size: cover;
  position: relative;
  top: -0.048rem;
}

.m_score {
  background: #659d0e;
  width: 0.48rem;
  height: 0.432rem;
  color: #fff;
  border-radius: 0;
  display: inline-block;
  overflow: hidden;
  line-height: 0.432rem;
  text-align: center;
  margin-left: 0.12rem;
  font-size: 0.264rem;
  vertical-align: middle;
}
</style>
