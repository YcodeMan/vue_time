<template>
  <div class="IndexMovie">
    <Header/>
    <movieComing/>
    <todayHot/>
  </div>
</template>

<script>
import movieComing from "@components/index/movieComing";
import todayHot from "@components/index/todayHot";
import Header from "@common/header/header";
import { Indicator } from "mint-ui";
export default {
  name: "IndexMovie",
  beforeCreate() {
    // loading
    Indicator.open({
      text: "加载中...",
      spinnerType: "snake"
    });
  },
  mounted () {
    // 必须异步关闭
   this.$nextTick(() => {
    //  setTimeout(() => {
    //    Indicator.close()
    //  },3000)
      Indicator.close()
       
     })
      
    
  },
  components: {
    movieComing,
    Header,
    todayHot
  }
};
</script>
