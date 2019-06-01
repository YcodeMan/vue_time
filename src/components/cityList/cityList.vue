<template>
    <div class="citylist">
        <!-- 当前城市定位 -->
        <dl>
            <dt>
                <p>当前城市：</p>
            </dt>
            <dd>
                <p>定位失败</p>
            </dd>
        </dl>
        <!-- ----热门城市------ -->
        <dl>
            <dt>
                <p>热门城市：</p>
            </dt>
            <dd>
                <ul>
                    <li><a href="#">上海</a></li>
                    <li><a href="#">深圳</a></li>
                    <li><a href="#">北京</a></li>
                    <li><a href="#">广州</a></li>
                    <li><a href="#">上海</a></li>
                    <li><a href="#">深圳</a></li>
                    <li><a href="#">北京</a></li>
                    <li><a href="#">广州</a></li>
                </ul>
            </dd>
        </dl>
<!-- -----------------按字母排序城市列表---------------- -->
        <div class="city">
            <p>A</p>
            <ul>
                <li><a href="#">成都</a></li>
                <li><a href="#">成都</a></li>
                <li><a href="#">成都</a></li>
                <li><a href="#">成都</a></li>
                <li><a href="#">成都</a></li>
                <li><a href="#">成都</a></li>
                <li><a href="#">成都</a></li>
                <li><a href="#">上海</a></li>
                <li><a href="#">深圳</a></li>
                <li><a href="#">北京</a></li>
                <li><a href="#">广州</a></li>
                <li><a href="#">上海</a></li>
                <li><a href="#">深圳</a></li>
                <li><a href="#">北京</a></li>
                <li><a href="#">广州</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "cityList"
}
</script>



<style scoped>
    .citylist{
        width: 100%;
        font-size: 0.35rem;
        color: #333;
    }
    .citylist dl dt,.city p{
        background-color: #ebebeb;
        color: #777;
    }
    .citylist p{
        padding: 0.1rem 0.3rem;
    }
    .citylist dl:nth-child(1) dd p{
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }
    .citylist ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .citylist ul li{
        flex: 25%;
        text-align: center;
        margin: 0.2rem 0;
    }
</style>