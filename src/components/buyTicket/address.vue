<template>
    <div class="address">
        <div class="prompt">
            <p>以下影院均非时光网自营</p>
        </div>
        <ul>
            <li class="addressInfo">
                <dl>
                    <dt class="cinemaName">
                        <p>
                            <span>金逸国际影城荟聚店</span>
                        </p>
                        <p class="price">
                            <b>24</b>
                            <i>元起</i>
                        </p>
                    </dt>
                    <dd class="cinemaAddress">
                        <p>北京市大兴区欣宁大街15号7-03-122-C1</p>
                    </dd>
                    <dd class="movieType">
                        <i>3D</i>
                        <i>IMAX</i>
                        <i>VIP</i>
                        <i>4K</i>
                        <i>情侣座</i>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "address"
}
</script>


<style scoped>
    .address{
        width: 100%;
    }
    .address ul li{
        border-bottom: 1px solid lightgray;
    }
    .address i{
        font-style: normal;
        
    }
    .address ul li > dl dt{
        display: flex;
        padding-top: 0.2rem;
    }
    .address ul li > dl dt p{
        display: inline-block;
    }
    .cinemaName span{
        font-size: 0.35rem;
        color: black;
    }
    .cinemaName{
        display: flex;
        justify-content: space-between;
    }
    .cinemaName p:nth-child(2){
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .cinemaName p span{
        display: inline-block;
        margin: 0.15rem 0.2rem;
    }
    .cinemaAddress p{
        font-size: 0.26rem;
        padding: 0.15rem 0.2rem;
        color: #777;
    }
    .movieType i:nth-child(1){
        margin-left: 0.2rem;
    }
    .movieType i{
        margin: 0.15rem 0;
        border: 1px solid #6d8297;
        padding: 0.05rem 0.05rem;
        color: #6d8297;
        display: inline-block;
    }
    .price b{
        font-size: 0.35rem;
        color: #ff8600;
    }
    .price i{
        font-size: 0.24rem;
        margin-right: 0.2rem;
        color: #ff8600;
    }
    .prompt{
        width: 100%;
        background-color: rgb(246, 246, 246);
    }
    .prompt p{
        font-size: 0.25rem;
        color: rgb(153, 153, 153);
        padding: 0.18rem 0;
        text-align: center;
    }
</style>