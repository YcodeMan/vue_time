<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="/images/lb1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="/images/lb2.jpg" alt=""></div>
        </div>
         <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css";
export default {
    name: "Swiper",
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
}

</script>

<style lang="scss" scoped>
    .swiper-container{
        width: 100%;
        img{
            width: 100%;
        }
    }
</style>
