<template>
   <div class="todayHot">
        <h2><a href="">今日热点</a></h2>
        <ul>
            <li v-for="(item,index) in HotPoints" :key="index">
                <div class="hot-img">
                    <img :src="item.img">
                </div>
                <div class="hot-info">
                    <a href="#">{{item.title}}</a>
                    <span>{{item.desc}}</span>
                    <span>
                        {{(item.publishTime +''+ item.commentCount + '0') | formatTime}}
                    </span>
                </div>
            </li>  
        </ul>
    </div>
</template>



<script>
import Vuex from 'vuex'
import {formatDate} from '@filters/formatDate'
export default {
    name: 'todayHot',
    created () {
       if (this.HotPoints.length > 0) {
           return;
       }
        this.getHotPoints(formatDate(new Date(), 'yyyyMMddhhmmss'))
    },
    computed: {
        ...Vuex.mapState({
            HotPoints: state => state.indexMovie.HotPoints
        })
    },
    methods: {
        ...Vuex.mapActions({
            getHotPoints:'indexMovie/actionsHotPoints'
        })
    },
    filters: {
        formatTime(time) {
            // 过滤传递过来的是String类型
            var date = new Date(Number(time))
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    }
}
</script>


<style scoped>
    .todayHot h2 a{
        font-size: 0.5rem;
        margin: 0.1rem 0.2rem;
        color: #333;
        display: block;
        font-weight: 600;
    }
    .todayHot ul li{
        display: flex;
        margin: 0 0.2rem;
        border-bottom: 1px dashed gray;
    }
    .todayHot ul li .hot-img{
        margin:0.2rem 0;
        width: 38%;
        margin-left: 0.2rem;
        display: inline-block;
    }
    .todayHot ul li .hot-img img{
        width: 100%;
    }
    .todayHot ul li .hot-info{
        margin:0.16rem 0;
        width: 59%;
        display: block;
    }
    .todayHot ul li .hot-info a{
        padding: 0.1rem 0.2rem;
        font-size: 0.4rem;
        display: block;      
        color: #333;
    }
    .todayHot ul li .hot-info span{
        display: block;
        margin: 0.06rem 0.2rem;
        font-size: 0.28rem;
    }
</style>