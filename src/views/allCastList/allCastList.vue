<template>
    <div>
        <SubHeader :title="title"/>
        <section v-for="item in types" :key="item.id">
            <AllCast :type='item'/>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Vuex from 'vuex'
import SubHeader from '@common/subHeader/subHeader';
import AllCast from "@components/allCast/allCast";
import Footer from '@common/footer/footer'
import { formatDate } from '@filters/formatDate';
export default {
    name: 'AllCastList',
    data() {
        return {
            title: '演职员表',
        }
    },
    methods: {
        ...Vuex.mapActions({
            actionsCastList: 'indexMovie/actionsCastList' 
        })
    },
    created(){
        if (this.id) {
        let date = formatDate(new Date() , 'yyyyMMddhhmmss');
        this.actionsCastList({movieId:this.id,t:date});
        }
    },
    computed: {
        ...Vuex.mapState({
            allCastList: state => state.indexMovie.allCastList,
            id: state => state.indexMovie.movieId,
        }),
        types: function() {
            if (this.allCastList) {
                return this.allCastList;
            }
        }
    },
    components: {
        SubHeader,
        AllCast,
        Footer
    }

}
</script>

<style lang="scss" scoped>

</style>
