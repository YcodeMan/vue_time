<template>
  <div class="movieComing">
    <h2>
      <a>
        <i>&gt;</i>
        <b>正在热映(43部)</b>
      </a>
    </h2>
    <ul>
      <li v-for="(item,index) in someMovie " :key="index">
        <a>
          <div>
            <img :src="item.img">
            <em v-show='item.r > 0 ? true : false'>
              <i>{{item.r > 1 ? item.r : ''}}</i>
            </em>
          </div>
          <p>
            <span>{{item.tCn}}</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "movieComing",
  created() {
    this.movieComing();
  },
  data() {
    return {

    };
  },
  computed: {
    ...Vuex.mapState({
      someMovie: state => state.indexMovie.someMovie
    })
  },
  methods: {
    ...Vuex.mapActions({
      movieComing: "indexMovie/actionsMovieComing"
    })
  }
};
</script>

<style lang="scss" scoped>
$rem0_4: .4rem;
.movieComing {
  margin: 0.12rem 0.34rem 0.34rem;
  h2 {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    a {
      height: 100%;
      i {
        position: absolute;
        right: 0.1rem;
        width: $rem0_4;
        font-size: $rem0_4;
        font-weight: 200;
      }
      b {
        display: inline-block;
        width: 3.4rem;
        height: 0.56rem;
        font-size: 0.35rem;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 1.7rem;
      height: 3.4rem;
      div {
        position: relative;
        width: 1.45rem;
        height: 2.28rem;
        margin: 0 0.14rem;
        img {
          width: 1.5rem;
        }
        em {
          position: absolute;
          top: 0.06rem;
          right: 0;
          width: 0.42rem;
          height: $rem0_4;
          text-align: center;
          line-height: $rem0_4;
          background-color: #659d0e;
          i {
            color: #fff;
          }
        }
      }
      p {
        width: 1.6rem;
        height: 0.77rem;
        overflow: hidden;
        padding-top: 0.1rem;
        text-align: center;
        span {
          width: 1.5rem;
          height: 0.82rem;
          font-size: 0.32rem;
          color: #000;
        }
      }
    }
  }
}

ul {
  overflow: hidden;
}
</style>



