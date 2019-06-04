<template>
  <div class="hotMovie">
    <HotMovieContent/>
  </div>
</template>

<script>
import HotMovieContent from "@components/hotMovie/hotMovie";
import { Indicator } from "mint-ui";
export default {
  name: "hotMovie",
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "snake"
    });
  },
  mounted () {
     this.$nextTick(() => {
         Indicator.close()
     })
  },
  components: {
    HotMovieContent
  }
};
</script>

<style lang="scss" scoped>
</style>
