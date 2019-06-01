<template>
   <div class="paixu">
       <!-- -----按远近 价格排序选项标签------------- -->
        <ul>
            <li><span>离我最近</span></li>
            <li><span>价格最低</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "paixu"
}
</script>


 <style scoped>
    .paixu{
        width: 100%
    }
    .paixu ul li{
        width: 100%;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
    }
    .paixu ul li:nth-child(1){
        border-bottom: none;
    }
    .paixu ul li span{
        height: 0.8rem;
        line-height: 0.8rem;
        padding-left: 0.6rem;
        font-size: 0.3rem;
    }

    .paixu ul li span .active{
        color: rgb(249, 125, 63);
    }
</style>