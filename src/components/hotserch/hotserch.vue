<template>
    <div class="hotserch">
        <div class="hotserch_title"><h2>热门搜索</h2></div>
        <div class="hotserch_list">
            <a href="#"><span>哥斯拉2</span></a>
            <a href="#"><span>多啦A梦</span></a>
            <a href="#"><span>阿拉丁</span></a>
            <a href="#"><span>大侦探皮卡丘</span></a>
            <a href="#"><span>黑凤凰</span></a>
            <a href="#"><span>黑衣人4</span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotSerch"
    }
</script>

<style scoped>
    .hotserch{
        width: 100%;
    }
    .hotserch_title{
        width: 100%;
        background-color: #f6f6f6;
        border-top: 1px solid #dfdfdf;
        border-bottom: 1px solid #dfdfdf;
    }
    .hotserch_title h2{
        font-size: 0.3rem;
        color: #999;
        padding: 0.15rem 0 0.15rem 0.3rem;
    }
    .hotserch_list{
        padding-left: 0.3rem;
    }
    .hotserch_list a{
        display: inline-block;
        padding: 0.12rem 0.28rem;
        border: 1px solid #b6dcff;
        border-radius: 0.65rem;
        margin-top: 0.3rem;
    }
    .hotserch_list a span{
        font-size: 0.35rem;
        color: #1e7dd7;
    }
</style>


