<template>
    <div class="ViewMovie">
         <subHeader/>
        <MovieComing/>
        <Swiper/>
        <willReleased/>
    </div>
</template>

<script>
import MovieComing from '@components/movieComing/MovieComing'
import Swiper from "@components/swiper/swiper.vue";
import willReleased from '@components/movieComing/willReleased'
import subHeader from '@common/subHeader/subHeader'

export default {
    name:'ViewMovie',
    components: {
        MovieComing,
        willReleased,
        Swiper,
        subHeader
    }
}
</script>

<style lang="scss" scoped>

</style>
