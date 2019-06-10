<template>
  <div class="hotMovie">
    <SubHeader>
      <ul>
        <router-link :to="{name:'hotMovie'}" tag="li">正在热映</router-link>
        <router-link :to="{name:'movieComing'}" tag="li">即将上映</router-link>
      </ul>
    </SubHeader>
    <Serch></Serch>
    <HotMovieContent/>
    <Footer/>
  </div>
</template>

<script>
import Serch from "@common/serch/serch";
import SubHeader from "@common/subHeader/subHeader";
import HotMovieContent from "@components/hotMovie/hotMovie";
import Footer from "@common/footer/footer";
import { Indicator } from "mint-ui";
export default {
  props: ["btnAcitve"],
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "snake"
    });
  },
  mounted() {
    this.$nextTick(() => {
      Indicator.close();
    });
  },
  methods: {
    choice() {}
  },
  components: {
    HotMovieContent,
    Serch,
    SubHeader,
    Footer
  }
};
</script>

<style lang="scss" scoped>
ul {
  background: #0d121a;
  border-radius: 0.96rem;
  margin: 0 auto;
  padding: 1px;
  display: flex;
  li {
    width: 2.562rem;
    height: 0.634rem;
    border-radius: 0.96rem;
    color: #999;
    font-size: 0.312rem;
    line-height: 0.634rem;
    text-align: center;
  }
}
.warp .router-link-active {
  background: #1c2635;
  color: #fff;
}
</style>
