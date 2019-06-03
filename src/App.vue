<template>
  <div id="app">
    <Serch/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>   
  </div>
</template>

<script>
import Serch from '@common/serch/serch'
import Footer from '@common/footer/footer'
export default {
  name: 'App',
  components: {
    Serch,
    Footer
  }
}
</script>

<style>

</style>
