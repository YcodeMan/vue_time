<template>
  <div>
    <h2>{{data.typeName}}</h2>
    <ul>
      <li class="table" v-for="item in data.persons" :key="item.id">
        <div class="pic">
          <img class="m_box m_img" v-lazy="item.image">
        </div>
        <div class="td">
          <h3>{{item.name}}</h3>
          <p class="ename">{{item.nameEn}}</p>
          <p v-if="item.personate">饰： {{item.personate}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AllCast",
  props: ["type"],
  computed: {
    data: function(){
      return this.type;
    } 
  }
};
</script>

<style lang="scss" scoped>
h2 {
  background: #f6f6f6;
  border-bottom: 1px solid #dfdfdf;
  border-top: 1px solid #dfdfdf;
  color: #999;
  padding: 0.168rem 0.36rem;
  font-size: 0.288rem;
}
ul {
  padding: 0 0.36rem;
  li {
    padding: 0.36rem 0;
    &:last-child {
      border-bottom: none;
    }
    .td {
      h3 {
        font-size: 0.36rem;
      }

      p {
        font-size: 0.288rem;
        color: #bbb;
      }
      .ename {
        padding: 0.12rem 0;
      }
    }
  }
}
.pic {
  width: 1.44rem;
  height: 1.44rem;
  overflow: hidden;
  margin-right: 0.36rem;
}
</style>
