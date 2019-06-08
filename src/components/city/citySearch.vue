<template>
  <div class="serch">
    <div class="serch-input">
      <span></span>
      <input type="text" placeholder="请输入搜索关键词">
    </div>
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="scss" scoped>
.serch {
  width: 100%;
  height: 1.1rem;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
}
.serch-input {
  width: 6rem;
  height: 0.8rem;
  border: 1px solid grey;
  margin-top: 0.2rem;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  font-size: 0.3rem;
}
.serch-input span {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background: url(/images/search_ico_01.png) no-repeat 25px 20px;
}
.serch-input input {
  margin-left: 0.2rem;
  width: 4.7rem;
  height: 0.75rem;
  display: block;
  border: none;
  font-size: 1em;
}
</style>
