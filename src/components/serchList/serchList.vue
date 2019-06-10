<template>
  <div class="serchList">
    <div class="imgbox">
      <img src="./images/serch.jfif" alt>
    </div>
    <div class="movieInfo">
      <dl>
        <dt>
          <h2>都挺好(2019)</h2>
          <span>[电影]</span>
        </dt>
        <dd class="englishname">
          <span>Pursuit</span>
        </dd>
        <dd class="movietype">
          <span>电影, 惊悚 | 动作 | 犯罪, 爱尔兰</span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "serchList"
};
</script>

<style scoped>
.serchList {
  width: 100%;
  display: flex;
  padding: 0.3rem 0;
  margin-left: 0.3rem;
  border-bottom: 1px solid #d8d8d8;
}
.imgbox {
  width: 0.8rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
}
.imgbox img {
  width: 100%;
}
.movieInfo {
  margin-left: 0.25rem;
}
.movieInfo dt h2 {
  display: inline-block;
  font-size: 0.4rem;
}
.movieInfo dt span {
  font-size: 0.28rem;
  color: #999;
}
.englishname {
  font-size: 0.3rem;
  color: #999;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.movieInfo .movietype span {
  color: black;
  font-size: 0.3rem;
}
</style>