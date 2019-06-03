<template>
    <div class="city-nav">
        <!-- ----最近的  全城    影厅特效--- --------->
        <ul>
            <li>
                <a href="#">
                    <b><span>离我最近</span><i></i></b>
                </a>
            </li>
            <li>
                <a href="#">
                    <b><span>全城</span><i></i></b>
                </a>
            </li>
            <li>
                <a href="#">
                    <b><span>影厅特效</span><i></i></b>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'citynav'
}
</script>

 <style scoped>
    .city-nav{
        width: 100%;
    }
    .city-nav ul{
        display: flex;
        justify-content: space-around;
        height: 0.8rem;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
    }
    .city-nav ul li{
        width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .city-nav ul li a{
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 0.28rem;
    }
    .city-nav ul li:nth-child(2) a b{
        border-left: 1px solid gray;
        border-right: 1px solid gray;
    }
    .city-nav ul li a b{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .city-nav ul li i{
        width: 0.3rem;
        height: 0.15rem;
        background-color: pink;
        display: inline-block;
        margin-left: 5px;
        background: url(./images/down.png) no-repeat;
        background-size: cover;
    }
</style>