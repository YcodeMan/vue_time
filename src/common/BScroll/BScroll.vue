<template>
  <div class="wrapper">
      <slot></slot>
  </div>
</template>
<script>
import BScoll from "better-scroll";
export default {
  mounted() {
    let scroll = new BScroll(".wrapper", {
      scrollY: true,
      probeType: 1
    })
  }
};
</script>

