<template>
  <div class="placeList">
        <dl class="left">
            <dt>
                <span>全部</span>
            </dt>
            <dd>
                <span>十五号线</span>
                <i>(30)</i>
            </dd>
            <dd>
                <span>五号线</span>
                <i>(30)</i>
            </dd>
            <dd>
                <span>三号线</span>
                <i>(30)</i>
            </dd>
        </dl>

        <dl class="right">
            <dt>
                <span>全部</span>
                <i>(30)</i>
            </dt>
            <dd>
                <span>中关村</span>
                <i>4</i>
            </dd>
            <dd>
                <span>西单</span>
                <i>4</i>
            </dd>
            <dd>
                <span>人民大学</span>
                <i>4</i>
            </dd>
        </dl>
    </div>
</template>


<script>
export default {
    name: 'diTie'
}
</script>

 <style scoped>
    .placeList{
        width: 100%;
        display: flex;
    }
    .placeList > dl{
        flex: 1;
    }
    .placeList .left{
        background-color: #f5f5f5;
    }
    .placeList dl span,.placeList dl i{
        font-size: 0.3rem;
        font-style: normal;
    }
    .placeList dl dt>span, .placeList dl dd>span{
        margin-left: 0.2rem;
    }
    .placeList dl dd, .placeList dl dt{
        margin-top: 0.4rem;
    }
    .right dd,.right dt{
        display: flex;
        justify-content: space-around;
    }
    
</style>