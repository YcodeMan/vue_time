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
    </div>
  </div>

  <!--我的影评-->
</template>

<script>
import Vuex from "vuex";
import DetailsHeader from "./detailsHeader";
import DetailsInfo from "./detailsInfo";
import Plot from "./plot";
import CastList from "./castList";
import Pic from "./pic";
import LongComment from "./longComment";
import ShortComment from "./shortComment";
import {formatDate} from '@filters/formatDate'
export default {
  name: "MovieDetails",
  components: {
    DetailsHeader,
    DetailsInfo,
    Plot,
    CastList,
    Pic,
    LongComment,
    ShortComment
  },
  methods: {
    ...Vuex.mapActions({
      actionsDetails: "indexMovie/actionsDetails"
    })
  },
  created() {
    //var params = this.$route.params;
    // if (Object.keys(params).length === 0) {
    //   var date = formatDate(new Date() , 'yyyyMMddhhmmss');
    //   params = {
    //     movieId: 213190, 
    //     locationId: 366, 
    //     t: date
    //   }
    // }
    this.actionsDetails(this.$route.params);
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
