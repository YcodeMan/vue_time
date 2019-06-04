<template>
  <div id="app">
    <Header/>
    <Serch/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer/>
      
  </div>
</template>

<script>
import Header from '@common/header/header'
import Serch from '@common/serch/serch'
import Footer from '@common/footer/footer'
export default {
  name: 'App',
  components: {
    Header,
    Serch,
    Footer,
  }
}
</script>

<style>

</style>
