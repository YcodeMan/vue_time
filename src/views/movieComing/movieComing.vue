<template>
    <div class="ViewMovie">
        <MovieComing/>
        <Swiper/>
        <willReleased/>
    </div>
</template>

<script>
import MovieComing from '@components/movieComing/MovieComing'
import Swiper from "@components/swiper/swiper.vue";
import willReleased from '@components/movieComing/willReleased'

export default {
    name:'ViewMovie',
    components: {
        MovieComing,
        willReleased,
        Swiper
    }
}
</script>

<style lang="scss" scoped>

</style>
