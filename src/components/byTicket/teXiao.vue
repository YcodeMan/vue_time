<template>
    <div class="chooseList">
        <!-- ------观影特效的选择项------------ -->
        <span>不限</span>
        <span>3D</span>
        <span>IMAIX</span>
        <span>VIP</span>
        <span>4D</span>
        <span>巨幕</span>
        <span>4K</span>
        <span>杜比</span>
        <span>情侣座</span>
    </div>
</template>

<script>
export default {
    name: "teXiao"
}
</script>

 <style scoped>
    .chooseList{
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-wrap: wrap;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
    }
    .chooseList span{
        width: 1.6rem;
        display: inline-block;
        border: 1px solid black;
        margin: 0.15rem 0;
        text-align: center;
        font-size: 0.3rem;
        padding: 0.1rem 0;
    }
    .chooseList span .active{
            border: 1px solid rgb(249, 125, 63);
            color: rgb(249, 125, 63);
    }
</style>