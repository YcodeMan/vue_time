<template>
    <div>
        <div class="bg">
            <DetailsHeader/>
        </div>
        <ReviewContent/>
        <Footer/>
    </div>
</template>

<script>
import DetailsHeader from "@components/movieDetails/detailsHeader";
import ReviewContent from "@components/reviewContent/reviewContent";
import Footer from "@common/footer/footer";
export default {
    name: 'Review',
    components: {
        DetailsHeader,
        ReviewContent,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.bg{
    background: #1c2635;
}
</style>
