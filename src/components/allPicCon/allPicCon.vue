<template>
  <section>
    <ul>
      <li v-for="item in picList" :key="item.id">
        <img v-lazy="item.image" >
      </li>
    </ul>
  </section>
</template>

<script>
import Vuex from 'vuex'
import { formatDate } from '@filters/formatDate';
export default {
  name: "AllPicCon",
  activated(){
      let movieId = this.movieId
      let t = formatDate(new Date() , 'yyyyMMddhhmmss');
      this.allPic({movieId,t})
  },
  methods: {
      ...Vuex.mapActions({
          allPic: 'indexMovie/actionsPic'
      })
  },
  computed: {
      ...Vuex.mapState({
        movieId: state => state.indexMovie.movieId,
        picList: state => state.indexMovie.allPic
      })
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 0.24rem 0;
  overflow: hidden;
  min-height: 3.6rem;
  li {
    float: left;
    width: 25%;
    text-align: center;
    img {
      width: 1.776rem;
      height: 1.776rem;
      margin: 0 auto 0.144rem;
      background: #e0e0e0;
      border: 1px solid #ddd;
    }
  }
}
</style>
