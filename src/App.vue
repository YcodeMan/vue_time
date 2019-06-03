<template>
  <div id="app">
    <Header/>
   
   <Serch/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
     
      
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
