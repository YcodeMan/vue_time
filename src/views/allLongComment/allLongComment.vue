<template>
    <div>
        <SubHeader :title="title">
            <span>- 长评</span>
        </SubHeader>
        <AllLongCommentCon/>
        <Footer/>
    </div>
</template>

<script>
import Vuex from 'vuex'
import SubHeader from '@common/subHeader/subHeader';
import AllLongCommentCon from "@components/allLongCommentCon/allLongCommentCon";
import Footer from '@common/footer/footer'
export default {
    name: 'AllLongComment',
    components: {
        SubHeader,
        AllLongCommentCon,
        Footer
    },
    computed: {
        ...Vuex.mapState({
            title: state => state.indexMovie.titleCn
        }),
    }
}
</script>