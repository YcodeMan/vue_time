<template>
  <div id="newsPage">
    <NewsPageTop/>
  </div>
</template>

<script>
import NewsPageTop from "@components/newsPage/newsPageTop";
import { Indicator } from "mint-ui";
export default {
  name: "newsPage",
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
  components: {
    NewsPageTop
  }
};
</script>

<style lang="scss" scoped>
</style>
