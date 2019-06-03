<template>
  <div>
    <article class="credits">
      <h2>
        <a href="#!/movie/213190/fullcredits/">
          <span class="i_tnext"></span>
          <b>{{personCount}}位演职员</b>
        </a>
      </h2>
      <div class="table">
        <dl>
          <dt>导演</dt>
          <dd>
            <ul class="table">
              <li>
                <a href="#!/person/905046/" class="picbox">
                  <img
                    src=""
                    class="m_img"
                  >
                </a>
                <a href="#!/person/905046/">
                  <h3>{{director.directorName}}</h3>
                </a>
                <a href="#!/person/905046/">
                  <p>{{director.directorNameEn}}</p>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt class="table">主要演员</dt>
          <dd>
            <ul class="table">
              <li class>
                <a href="#!/person/922348/" class="picbox">
                  <img
                    src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fph%2F2016%2F08%2F06%2F111744.53726121_1280X720X2.jpg&amp;width=170&amp;height=170&amp;clipType="
                    class="m_img"
                  >
                </a>
                <a href="#!/person/922348/">
                  <h3>维拉·法梅加</h3>
                </a>
                <a href="#!/person/922348/">
                  <p>Vera Farmiga</p>
                </a>
                <a href="#!/person/922348/" class="picbox small">
                  <img
                    src="//imgproxy.mtime.cn/get.ashx?uri=&amp;width=80&amp;height=80&amp;clipType="
                    class="m_img"
                  >
                </a>
                <p>饰:艾玛</p>
              </li>
              <li class="td">
                <a href="#!/person/915217/" class="picbox">
                  <img
                    src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fph%2F2017%2F02%2F21%2F150122.16220526_1280X720X2.jpg&amp;width=170&amp;height=170&amp;clipType="
                    class="m_img"
                  >
                </a>
                <a href="#!/person/915217/">
                  <h3>凯尔·钱德勒</h3>
                </a>
                <a href="#!/person/915217/">
                  <p>Kyle Chandler</p>
                </a>
                <a href="#!/person/915217/" class="picbox small">
                  <img
                    src="//imgproxy.mtime.cn/get.ashx?uri=&amp;width=80&amp;height=80&amp;clipType="
                    class="m_img"
                  >
                </a>
                <p>饰:马克</p>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </article>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: "CastList",
  computed: {
    ...Vuex.mapState({
    actorList: state => state.indexMovie.detail.actorList,
    director: state => state.indexMovie.detail.director,
    personCount: state => state.indexMovie.detail.personCount,
    }),
  },
};
</script>

<style lang="scss" scoped>
.credits {
  padding: 0.096rem 0.36rem 0.048rem;
  h2 {
    margin-bottom: 0.216rem;
    a {
      display: block;
      padding: 0.24rem 0;
      color: #333;
      position: relative;
      b {
        font-size: 0.408rem;
        line-height: 1.2;
        overflow: hidden;
      }
    }
  }
  dl {
    padding-bottom: 0.096rem;
    border-left: 1px solid #d8d8d8;
    &:first-child {
      border: 0;
      padding-left: 0;
      width: 2.04rem;
      margin-right: 0.216rem;
    }
    &:last-child {
      padding-left: 0.24rem;
    }
    dt {
      font-size: 0.288rem;
    }
    dd {
      padding-top: 0.12rem;
    }
  }
  li {
    word-wrap: break-word;
    text-align: center;
    p {
      font-size: 0.264rem;
      height: 0.48rem;
    }
  }
  h3 {
    font-size: 0.288rem;
    font-weight: normal;
    line-height: 1.4;
    overflow: hidden;
    margin-bottom: 0.072rem;
  }
}
.credits .picbox {
  display: block;
  width: 2.052rem;
  overflow: hidden;
  height: 3.12rem;
  margin: 0 auto 0.12rem;
  position: relative;
}

.credits dl:last-child dd li {
  width: 2.04rem;
  text-align: center;
  color: #333;
  margin-right: 0.36rem;
}
.credits dl:last-child .picbox {
  height: 2.052rem;
}
.credits dl:last-child .small {
  width: 0.96rem;
  height: 0.96rem;
  display: block;
  padding: 0;
  margin: 0.264rem auto;
  border-radius: 0.96rem;
  overflow: hidden;
}
</style>
