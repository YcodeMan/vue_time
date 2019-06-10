<template>
    <div>
        <SubHeader :title="title"/>
        <AllPicCon/>
        <Footer/>
    </div>
</template>

<script>
import Vuex from 'vuex'
import SubHeader from '@common/subHeader/subHeader'
import AllPicCon from '@components/allPicCon/allPicCon'
import Footer from '@common/footer/footer'
export default {
    name: 'AllPic',
    computed: {
        ...Vuex.mapState({
            title: state => state.indexMovie.titleCn
        }),
    },
    components: {
        SubHeader,
        AllPicCon,
        Footer
    }
}
</script>