<template>
    <div class="heraldMovie">
        <ul class="movieList">
            <li class="movieInfo">
                <div class="imgbox">
                    <img src="./images/yugao.jfif" alt="">
                </div>
                <div class="infobox">
                    <dl>
                        <dt>X战警：黑凤凰 中文定档预告片</dt>
                        <dd><p>片长：2分47秒</p></dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "heraldMovie"
    }
</script>


 <style>
    .heraldMovie{
        width: 100%;
    }
    .movieInfo{
        margin-left: 0.2rem;
        border-bottom: 1px solid #ddd;
        display: flex;
        padding:0.3rem 0.2rem 0.3rem 0;
        align-items: center;
    }
    .imgbox{
        width: 40%;
        display: flex;
        align-items: center;
    }
    .imgbox img{
        width: 2.9rem;
        height: 1.8rem;
    }
    .infobox{
        width: 60%;
        margin-left: 0.2rem;
    }
    .infobox dt{
        padding: 0 0 0.3rem 0;
        font-size: 0.35rem;
        color: black;
        font-weight: 600;
    }
    .infobox dd p{
        font-size: 0.3rem;
        margin-top: 0.1rem;
    }
</style>

 