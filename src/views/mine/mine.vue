<template>
    <div class="mine">
        <SubHeader>
            <i class="logo_mtime"></i>
        </SubHeader>
        <Login/>
      
    </div>
</template>

<script>
import SubHeader from '@common/subHeader/subHeader'
import Login from "@components/login/login.vue"

export default {
    name: 'Mine',
    components: {
        SubHeader,
        Login,
    },
   
}
</script>

<style lang="scss" scoped>
.logo_mtime {
  width: 1.344rem;
  height: 0.432rem;
  background: url(//static1.mtime.cn/html5/20190531112624/images/2014/logo_mtime.png)
    no-repeat;
  background-size: contain;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.282rem;
}
</style>
