<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import Header from '@common/header/header'
export default {
  components: {
    Header
  }
}
</script>

<style>

</style>
