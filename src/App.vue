<template>
  <div id="app">
    <Header/>
    <Serch/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@common/header/header'
import Serch from '@common/serch/serch'
import Footer from '@common/footer/footer'
export default {
  components: {
    Header,
    Serch,
    Footer
  }
}
</script>

<style>

</style>
