<template>
  <div class="cityHeader">
    <div class="choosecity">
      <v-touch tag="a" v-on:tap="goBack" href="javascript:void(0);">&lt;</v-touch>
      <div class="city">
        <h2 v-if="title">{{title}}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "subHeader",
  props: ["title"],
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>



 <style scoped>
.cityHeader {
  width: 100%;
}
.choosecity {
  display: flex;
  height: 1.1rem;
  background-color: #1c2635;
  color: #fff;
}
.choosecity a {
  font-weight: 600;
  font-size: 0.5rem;
  line-height: 1.1rem;
  padding: 0 0.35rem;
  color: #fff;
}
.city {
  justify-content: center;
  width: 5.5rem;
  display: flex;
  align-items: center;
}
.city h2 {
  font-size: 0.4rem;
  line-height: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.city span {
  font-size: 0.4rem;
  line-height: 1.1rem;
  width: 1.25rem;
}
</style>
