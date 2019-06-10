<template>
  <div class="wrap_white">
    <div class="mobile_wrap">
      <!--头部-->
      <DetailsHeader/>
      <!--影片上映信息-->
      <DetailsInfo/>
      <aside class="cin_line">
        <p></p>
        <p></p>
      </aside>
      <!--剧情-->
      <Plot/>
      <aside class="cin_line">
        <p></p>
        <p></p>
      </aside>
      <!--演员-->
      <CastList/>
      <aside class="cin_line">
        <p></p>
        <p></p>
      </aside>
      <!--图片-->
      <Pic/>
      <aside class="cin_line">
        <p></p>
        <p></p>
      </aside>
      <!--长影评-->
      <LongComment/>
      <aside class="cin_line">
        <p></p>
        <p></p>
      </aside>
      <!--短影评-->
      <ShortComment/>
      <Footer/>
    </div>
  </div>

  <!--我的影评-->
</template>

<script>
import Vuex from "vuex";
import DetailsHeader from "@components/movieDetails/detailsHeader";
import DetailsInfo from "@components/movieDetails/detailsInfo";
import Plot from "@components/movieDetails/plot";
import CastList from "@components/movieDetails/castList";
import Pic from "@components/movieDetails/pic";
import LongComment from "@components/movieDetails/longComment";
import ShortComment from "@components/movieDetails/shortComment";
import Footer from "@common/footer/footer";
import { formatDate } from '@filters/formatDate';
export default {
  name: "MovieDetails",
  components: {
    DetailsHeader,
    DetailsInfo,
    Plot,
    CastList,
    Pic,
    LongComment,
    ShortComment,
    Footer
  },
  methods: {
    ...Vuex.mapActions({
      actionsDetails: "indexMovie/actionsDetails",
      actionsHotLongComment: 'indexMovie/actionsHotLongComment',
      actionsShortComment: "indexMovie/actionsShortComment"
    })
  },
  computed: {
    ...Vuex.mapState({
      cityId: state => state.city.cityId,
      id: state => state.indexMovie.movieId,
    })
  },
  activated() {
    let {movieId,locationId,t} = this.$route.params;
    if (!movieId) {
      let date = formatDate(new Date() , 'yyyyMMddhhmmss');
      movieId=this.id; 
      locationId = this.cityId;
      t = date;
    }
    this.actionsDetails({movieId,locationId,t});
    this.actionsHotLongComment({movieId,t});
    this.actionsShortComment({movieId,t});
  },
};
</script>

<style lang="scss" scoped>
.mobile_wrap {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
}
.cin_line {
  p {
    &:first-child {
      height: 0.12rem;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 0.048rem 0.048rem rgba(51, 51, 51, 0.05);
      position: relative;
      z-index: 1;
    }
    &:last-child {
      height: 0.288rem;
      background: #f6f6f6;
      position: relative;
      z-index: 0;
    }
  }
}
</style>
