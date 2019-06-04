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
                    :src="direct.directorImg"
                    class="m_img"
                  >
                </a>
                <a href="#!/person/905046/">
                  <h3>{{direct.directorName}}</h3>
                </a>
                <a href="#!/person/905046/">
                  <p>{{direct.directorNameEn}}</p>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt class="table">主要演员</dt>
          <dd>
            <ul class="table">
              <li v-for="item in actorList?actorList:''" :key="item.id"  class="td">
                <a href="#!/person/922348/" class="picbox">
                  <img
                    :src="item.actorImg"
                    class="m_img"
                  >
                </a>
                <a href="#!/person/922348/">
                  <h3>{{item.actor}}</h3>
                </a>
                <a href="#!/person/922348/">
                  <p>{{item.actorEn}}</p>
                </a>
                <a href="#!/person/922348/" class="picbox small">
                  <img
                    :src='item.roleImg'
                    class="m_img"
                  >
                </a>
                <p>饰:{{item.roleName}}</p>
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
    direct: this.director?this.director:{}
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
