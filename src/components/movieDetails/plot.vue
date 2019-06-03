<template>
    <div>
        <article class="cin_more">
          <p>{{detail.content}}</p>
          <v-touch tag='a'  class="m_btn_tmore"></v-touch>
        </article>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'Plot',
    computed: {
        ...Vuex.mapState({
        detail: state => state.indexMovie.detail,
        }),
    },
    methods: {

    }
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
</style>
