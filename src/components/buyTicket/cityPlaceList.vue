<template>
  <div class="placeList">
    <!-- -----------每个城市地方列表-------------- -->
    <dl class="left">
      <v-touch tag="dt" @tap="changeTotal()" :class="totalShowOrHide ? 'active': 'passive'">
        <span>全部</span>
      </v-touch>
      <v-touch
        tag="dd"
        @tap="getHamlet(index)"
        v-for="(item, index) in districts"
        :key="index"
        :class="{checked:index == nowIndex}"
      >
        <span>{{item.name}}</span>
        <i>({{item.cinemaIds.length}})</i>
      </v-touch>
    </dl>

    <dl class="right">
      <dt :class="AreaShowOrHide ? 'active': 'passive'">
        <span>全部</span>
        <i>{{getAllNum(nowIndex)}}</i>
      </dt>
      <v-touch
        tag="dd"
        :class="villageShowOrHide ? 'show': 'hide'"
        v-for="(item, index) in Hamlet"
        :key="index"
      >
        <span>{{item.name}}</span>
        <i>{{item.cinemaCount}}</i>
      </v-touch>
    </dl>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "cityPlaceList",
  data() {
    return {
      // 改变切换状态颜色
      AreaShowOrHide: true,
      totalShowOrHide: true,

      //
      villageShowOrHide: false,

      nowIndex: -1
    };
  },
  computed: {
    ...Vuex.mapState({
      districts: state => state.shopStore.districts,
      subways: state => state.shopStore.subways,
      Hamlet: state => state.shopStore.Hamlet
    })
  },
  methods: {
    ...Vuex.mapMutations({
      changeHamlet: "shopStore/mutationsChangeHamlet"
    }),
    // 点击切换区域
    getHamlet(index) {
      this.villageShowOrHide = true;
      this.totalShowOrHide = false;
      this.nowIndex = index;
      this.changeHamlet(index);
      this.getAllNum(index);
    },
    // 点击全部切换颜色
    changeTotal() {
      this.villageShowOrHide = false;
      this.totalShowOrHide = true;
      this.nowIndex = -1;
    },
    // 切换数目
    getAllNum(index) {
      if (index < 0 ) {
        let num = 0;
        for (var i = 0, len = this.districts.length; i < len; i++) {
          num += this.districts[i].cinemaCount;
        }
        return num;
      } else {
          this.nowIndex = index
        return this.districts[index].cinemaIds.length;
      }
    }
  }
};
</script>

<style scoped>
.placeList {
  width: 100%;
  display: flex;
}
.placeList > dl {
  flex: 1;
}
.placeList .left {
  background-color: #f5f5f5;
}
.placeList dl span,
.placeList dl i {
  font-size: 0.3rem;
  font-style: normal;
}
.left .active,
.right .active,
.checked {
  color: #f97d3f;
}
.placeList dl dt > span,
.placeList dl dd > span {
  margin-left: 0.2rem;
}
.placeList dl dd,
.placeList dl dt {
  margin: 0.4rem 0;
}
.right dd,
.right dt {
  display: flex;
  justify-content: space-around;
}

.right .hide {
  display: none;
}
</style>