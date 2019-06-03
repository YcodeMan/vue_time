<template>
    <div>
        <article class="cin_more">
          <p :class="show?'show':''">{{content}}</p>
          <v-touch tag='a' v-on:tap="show=!show" :class="show?'m_btn_tmore m_btn_bmore':'m_btn_tmore'"></v-touch>
        </article>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'Plot',
    data() {
        return {
            show: false
        }
    },
    computed: {
        ...Vuex.mapState({
        content: state => state.indexMovie.detail.content,
        }),
    },
}
</script>

<style lang="scss" scoped>
.cin_more {
    padding: .264rem .36rem 0;
}
.cin_more .show {
    height: auto;
}
.cin_more p {
    font-size: .336rem;
    color: #333;
    line-height: 1.5;
    height: .9rem;
    overflow: hidden;
}
.m_btn_tmore{
    display: block;
    background: #fff url(//static1.mtime.cn/html5/20190531185056/images/2014/i-tmore.png) no-repeat center center;
    background-size: auto .192rem;
    height: .696rem;
}
.cin_more .m_btn_bmore{
    transform: rotate(180deg);
}
</style>
