<template>
  <header class="header">
    <div class="h_warp">
      <v-touch tag='a' v-on:tap='back' href="javascript:void(0);" class="h_back"></v-touch>
      <div class="h_like">
        <a href="javascript:void(0);" id="favButton" class="h_i_collection"></a>
        <a href="javascript:void(0);" id="shareButton" class="h_i_share"></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DetailsHeader',
  methods: {
    back: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
    height: 1.056rem;
    position: relative;
    z-index: 2;
}
.h_warp {
    padding: 0 .36rem 0 .336rem;
    height: 100%;
}
.h_back {
    width: 1.056rem;
    height: 1.056rem;
    display: block;
    background: url(//static1.mtime.cn/html5/20190531185056/images/2014/h_btn_back.png) no-repeat .36rem center;
    background-size: auto .36rem;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
}
.h_like{
  	text-align: right;
	a{
		width: 1.272rem;
		height: 1.056rem;
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
	}
}
.h_i_collection{
	margin-right: -.36rem;
    background: url(//static1.mtime.cn/html5/20190531185056/images/2014/i_h_collection.png) no-repeat center center;
    background-size: .552rem auto;
}
.h_i_share {
    vertical-align: top;
    background: url(//static1.mtime.cn/html5/20190531185056/images/2014/i_h_share.png) no-repeat center center;
    background-size: auto .528rem;
}
</style>
