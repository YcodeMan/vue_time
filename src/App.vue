<template>
  <div id="app">
    <Header v-if="$route.meta.headerFlag"/>
    <Serch v-if="$route.meta.serchFlag"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive> 
    <Footer v-if="$route.meta.footerFlag"/>  
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
