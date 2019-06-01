<template>
   <div class="today-hot">
        <h2><a href="">今日热点</a></h2>
        <ul>
            <li>
                <div class="hot-img">
                    <img src="./images/get.jfif">
                </div>
                <div class="hot-info">
                    <a href="#">皮卡丘凭什么征服全世界？</a>
                    <span>一篇文章带你入宝可梦的坑</span>
                    <span>2019-05-17&nbsp20:45:51</span>
                </div>
            </li>
            <li>
                <div class="hot-img">
                    <img src="./images/get.jfif">
                </div>
                <div class="hot-info">
                    <a href="#">皮卡丘凭什么征服全世界？</a>
                    <span>一篇文章带你入宝可梦的坑</span>
                    <span>2019-05-17&nbsp20:45:51</span>
                </div>
            </li>
            <li>
                <div class="hot-img">
                    <img src="./images/get.jfif">
                </div>
                <div class="hot-info">
                    <a href="#">皮卡丘凭什么征服全世界？</a>
                    <span>一篇文章带你入宝可梦的坑</span>
                    <span>2019-05-17&nbsp20:45:51</span>
                </div>
            </li>
            
        </ul>
    </div>
</template>



<script>
export default {
    name: 'today-hot'
}
</script>


<style scoped>
    .today-hot h2 a{
        font-size: 0.5rem;
        margin: 0.1rem 0.2rem;
        color: #333;
        display: block;
        font-weight: 600;
    }
    .today-hot ul li{
        margin: 0 0.2rem;
        border-bottom: 1px dashed gray;
    }
    .today-hot ul li .hot-img{
        margin:0.2rem 0;
        width: 38%;
        margin-left: 0.2rem;
        display: inline-block;
    }
    .today-hot ul li .hot-img img{
        width: 100%;
    }
    .today-hot ul li .hot-info{
        margin:0.2rem 0;
        width: 59%;
        float: right;
        display: block;
    }
    .today-hot ul li .hot-info a{
        padding: 0.1rem 0.2rem;
        font-size: 0.4rem;
        display: block;      
        color: #333;
    }
    .today-hot ul li .hot-info span{
        display: block;
        margin: 0.06rem 0.2rem;
        font-size: 0.28rem;
    }
</style>