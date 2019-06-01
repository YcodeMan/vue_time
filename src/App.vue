<template>
  <div id="app">
    <Header/>
<<<<<<< HEAD
    <Serch/>
    <router-view></router-view>
=======
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
>>>>>>> 1ab593e21ab8aef6aa4c56ba47159849bfee07d9
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
