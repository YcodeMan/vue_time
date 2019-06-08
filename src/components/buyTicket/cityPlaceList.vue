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
        v-for="(item, index) in dataMsg"
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
        v-for="(item, index) in dataHamlet"
        :key="index"
      >
        <v-touch tag='span' 
        :class="{checked:index == subwayIndex}"
          @tap='getArea(index)'>{{item.name ?item.name : item.stName}}</v-touch>
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
      // 改变全部的状态颜色
      totalShowOrHide: true,
      AreaShowOrHide: true,

      //改变标签的颜色
      villageShowOrHide: false,

      nowIndex: -1,
      subwayIndex: -1,
      isChangeSubways : false,
      // dataMsg存储切换城市和地铁的数据
      dataMsg: [],

      // 切换区域信息
      dataHamlet: []
    };
  },
  created() {
      this.dataMsg = this.districts
      this.dataHamlet = this.Hamlet
      this.$Observer.$on('changeState', (val) => {
          // 隐藏二级菜单
          this.villageShowOrHide = false
          // 使子菜单的颜色变暗
          this.nowIndex = -1
        
        // 使菜单变亮
        this.totalShowOrHide  = true
          // 切换城市和地铁区域
          this.isChangeSubways = !val
          if (this.isChangeSubways) {
             this.dataMsg  = this.subways
              this.dataHamlet = this.subwaysLine
          } else {
              this.dataMsg = this.districts
          }
      }) 
  },
  computed: {
    ...Vuex.mapState({
      districts: state => state.shopStore.districts,
      subways: state => state.shopStore.subways,
      // 地方对应的区域
      Hamlet: state => state.shopStore.Hamlet,
      // 地铁线对应的地方
      subwaysLine: state => state.shopStore.subwaysLine
    })
  },
  methods: {
    ...Vuex.mapMutations({
      changeHamlet: "shopStore/mutationsChangeHamlet"
    }),
    // 点击切换区域
    getHamlet(index) {
        // 切换样式
      this.villageShowOrHide = true;
      this.totalShowOrHide = false;
      this.nowIndex = index;
      this.subwayIndex = -1

      // 通过index切换数据
      this.changeHamlet({isCity: !this.isChangeSubways, index});
      this.getAllNum(index);

      // 通过isCity来切换地铁和城市
      if (!this.isChangeSubways) {
          this.dataHamlet = this.Hamlet
      } else {
          this.dataHamlet = this.subwaysLine
      }
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
        for (var i = 0, len = this.dataMsg.length; i < len; i++) {
          num += this.dataMsg[i].cinemaCount;
        }
        return num;
      } else {
          this.nowIndex = index
        return this.dataMsg[index].cinemaIds.length;
      }
    },
    // 获得区域地址
    getArea (index) {
      this.subwayIndex = index
      let name = '',
          cinemaIdList = []
      // 通过true,false来切换地址名
      if (this.isChangeSubways) {
        name = this.dataHamlet[index].stName
      } else {
        name = this.dataHamlet[index].name
      }
      cinemaIdList = this.dataHamlet[index].cinemaIds
      this.$Observer.$emit('changeName', {name, cinemaIdList}) 
    }
  },
  watch: {
    districts: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (this.isChangeSubways) {
             this.dataMsg  = this.subways
              this.dataHamlet = this.subwaysLine
          } else {
              this.dataMsg = this.districts
          }
      }
    }
  },
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
  padding: 0.2rem 0;
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