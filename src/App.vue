<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
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
