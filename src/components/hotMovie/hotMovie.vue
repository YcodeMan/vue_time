<template>
  <div class="hotMovieContent">
    <li>
      <div class="hotPoint">
        <div class="movie_pic">
          <a href>
            <i class="i_hot"></i>
            <img
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F05%2F23%2F095633.44711442_1280X720X2.jpg&amp;width=130&amp;height=195&amp;clipType=4"
            >
          </a>
        </div>
        <div class="movie_txt">
          <dl>
            <dt>
              <a href="#!/movie/213190/">
                <b>哥斯拉2：怪兽之王</b>
                <em class="m_score">
                  <i>7.6</i>
                </em>
              </a>
            </dt>
            <dd>
              <p class="movie_tip">
                <i class="i_block i_dot"></i>
                <span>哥斯拉终极对决基多拉争霸地球</span>
              </p>
              <div class="mtool">
                <i class="i_cine_05">3d</i>
                <i class="i_cine_15">中国聚目</i>
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
    </li>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: "hotMovieContent",
  created () {
      
  },
  computed: {
      
  },
  methods: {
      ...Vuex.mapActions({
          
      })
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
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          .mtool {
            overflow: hidden;
            i {
              display: inline-block;
              border: 1px solid #659d0e;
              color: #659d0e;
              padding: 0.04rem 0.04rem;
              margin: 0.1rem 0.04rem;
              font-size: 0.18rem;
            }
          }
        }
      }
    }
    .msg {
        display: flex;
        justify-content: space-between;
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
        margin: .04rem .3rem;
        width: 1rem;
        height: .45rem;
        line-height: .45rem;
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
