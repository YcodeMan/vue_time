<template>
    <article class="cin_scrollpic">
          <h2>
            <a href="#/movieDetails/allPic">
              <span class="i_tnext"></span>
              <b>{{imageCount}}张图片</b>
            </a>
          </h2>
          <div class="showpic">
            <ul class="table">
              <li v-for="item in images" :key="item.id">
                <a href="javascript:void(0);">
                  <img
                    class="m_img"
                    :src="item"
                  >
                </a>
              </li>
            </ul>
          </div>
        </article>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'Pic',
    computed: {
      ...Vuex.mapState({
        imageCount: state => state.indexMovie.detail.imageCount,
        images: state => state.indexMovie.detail.images,
      }),
    }
}
</script>

<style lang="scss" scoped>
.cin_scrollpic {
  padding: .12rem 0.36rem .18rem;
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
  li {
    padding: 0;
    margin: 0;
    width: 1.608rem;
    height: 1.608rem;
    flex: 1;
    a {
      display: block;
      width: 1.584rem;
      height: 1.584rem;
      margin: auto;
    }
  }
  
}
.m_img {
  border: 1px solid #ddd;
  height: 100%
}

</style>