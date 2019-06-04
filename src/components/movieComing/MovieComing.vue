<template>
    <div class="MovieComing">
    <!-- ------------最受关注部分-------------- -->
        <div class="mosemovie">
            <h2 class="title"><b>最受关注</b> <span>（10部）</span></h2>
            <div class="filmscroll">
                <ul class="table_transition4" style="width: 3300px; left: 5px;">
                    <li>
                        <time><span>6月6日</span></time>
                        <div class="table_movielist">
                            <div class="upmovie_pic">
                                <a href="#">
                                    <img class="m_img img_box" src="/images/4.jfif">
                                </a>
                            </div>
                            <div class="upmovie_txt_td">
                                <dl>
                                    <dt><a href="#"><b>X战警：黑凤凰</b></a></dt>
                                    <dd>
                                        <p><b class="color">8026</b> 人想看 - 动作剧情 / 惊悚 </p>
                                        <p class="txt_elli">导演：西蒙·金伯格</p>
                                        <p class="txt_elli">演员：索菲·特纳,詹姆斯·麦卡沃伊</p>
                                    </dd>
                                </dl>
                                <div class="btns">
                                    <a href="#" class="m_btn_orange"><span>超前预售</span></a>
                                    <a href="#" class="m_btn_green"><span>预告片</span></a> 
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- ---------------即将上映部分--------------- -->
        <div class="commovie">
            <h2 class="title"><b>即将上映</b> <span>(56部)</span></h2>
            <div class="commovielist">
                <time class="month"><span>6月</span></time>
                <ul>
                    <li>
                        <div class="table_movielist">
                            <div class="day">
                                <time><span>5日</span></time>
                            </div>
                            <div class="info">
                                <div class="upmovie">
                                    <a href="#">
                                        <img class="img_box" src="/images/6.jfif">
                                    </a>
                                </div>
    
                                <div class="upmovie_txt">
                                    <dl>
                                        <dt><a href="#"><b>无所不能</b></a></dt>
                                        <dd>
                                            <p><b class="color">40</b> 人想看 - 动作 / 惊悚 / 剧情</p>
                                            <p>导演：桑贾伊·古普塔</p>
                                        </dd>
                                    </dl>
                                    <div class="btns">
                                        <a href="#" class="m_btn_orange">
                                            <span>超前预售</span>
                                        </a> 
                                        <a href="#" class="m_btn_green">
                                            <span>预告片</span>
                                        </a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieComing'
}
</script>


<style scoped>
        /* ------------最受关注部分样式------------- */
    .mosemovie .title b, .mosemovie .title span {
        font-size: 0.45rem;
        line-height: 0.4rem;
        font-weight: 600;
    }
    .mosemovie .title span {
        color: #999;
    }
    .mosemovie .title{
        margin:0.15rem 0.2rem;
    }
    .table_movielist{
        display: flex;
    }
    .upmovie_pic{
        width: 2rem;
        height: 3rem;
        margin-left: 0.2rem;
        margin-bottom: 0.25rem;
    }
    .upmovie_pic a img{
        width: 100%;
    }
    .upmovie_txt_td{
        margin-left: 0.2rem;
    }
    .table_transition4 li time span{
        margin-left: 0.2rem;
    }
    .upmovie_txt_td dl dt a{
        margin-left: 0.2rem;
        font-size: 0.35rem;
        color: #333;
    }
    .upmovie_txt_td dl dd p{
        width: 4.8rem;;
        font-size: 0.28rem;
        margin: 0.15rem 0.2rem;
    }
    .upmovie_txt_td dl dd p b{
        color: #ff8600;
    }
    .btns a{
        display: inline-block;
        width: 1.9rem;
        height: 0.65rem;
        text-align: center;
        line-height: 0.65rem;
        border-radius: 0.325rem;
        margin:0.15rem 0.2rem;
        font-size: 0.3rem;
    }
    .btns a:nth-child(1){
        background-color: #ff8600;
        border: 1px solid #ff8600;
        color: #fff;
    }
    .btns a:nth-child(2){
        border: 1px solid #659c0d;
        color: #659c0d;
    }
    .table_transition4 li time span{
        display: inline-block;
        font-size: 0.3rem;
        margin:0.15rem 0.2rem;
    }
    .commovie ul{
        border-top: 1px solid lightgrey;
    }
    .table_movielist{
        display: flex;
    }
    .table_movielist .day span{
        display: inline-block;
        width: 0.45rem;
        margin: 0.3rem 0.2rem;
    }

    /* --------即将上映部分样式----- */
    .commovie{
        border-top: 30px solid #f6f6f6
    }
    .commovie .month,.commovie .title{
        margin: 0.2rem 0.2rem;
    }
    .commovie .month{
        display: block;
        margin-bottom: 0.2rem;
        font-size: 0.3rem;
    }
    .commovie h2 span{
        color: #999;
    }
    .commovie h2{
        font-size: 0.4rem;
        margin-top: 0.3rem;
    }
    .upmovie{
        width: 1.5rem;
        height: 2.3rem;
        margin: 0.3rem 0;
    }
    .upmovie img{
        width: 100%;
    }
    .upmovie_txt{
        margin: 0.3rem 0.2rem;
    }
    .upmovie_txt dt a{
        margin-left: 0.2rem;
        font-size: 0.35rem;
        color: #333;
    }
    .upmovie_txt p{
        margin: 0.15rem 0.2rem;
        width: 4.8rem;
    }
    .upmovie_txt p b{
        color: #ff8600;
    }
    .info{
        display: flex;
        border-bottom: 1px solid lightgray;
    }
</style>