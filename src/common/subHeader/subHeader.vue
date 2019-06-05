<template>
    <div class="cityHeader">
        <div class="choosecity">
            <v-touch tag='a' v-on:tap='goBack' href="javascript:void(0);">&lt;</v-touch>
            <div class="city">
                <h2 v-if="title">{{title}}</h2>
                <slot></slot>
            </div>
        </div>
        <div class="serch">
            <div class="serch-input">
                <span></span>
                <input type="text" placeholder="请输入搜索关键词">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "subHeader",
    props:['title'],
    methods: {
        goBack: function() {
            this.$router.go(-1);
        }
    }
}
</script>



 <style scoped>
    .cityHeader{
        width: 100%;
        
    }
    .choosecity{
        display: flex;
        height: 1.1rem;
        background-color: #1c2635;
        color: #fff;
    }
    .choosecity a{
        font-weight: 600;
        font-size: 0.5rem;
        line-height: 1.1rem;
        padding: 0 0.35rem;
        color: #fff;
    }
    .city{
        display: flex;
        align-items: center;
    }
    .city h2{
        margin-left: 2rem;
        font-size: 0.4rem;
    }
    .serch{
        height: 1.1rem;
        display: flex;
        justify-content: center;
        background-color: #f6f6f6;
    }
    .serch-input{
        width: 6rem;
        height: 0.8rem;
        border: 1px solid grey;
        margin-top: 0.2rem;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        font-size: 0.3rem;
    }
    .serch-input span{
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        background: url(/images/search_ico_01.png) no-repeat 25px 20px;
    }
    .serch-input input{
        margin-left: 0.2rem;
        width: 4.7rem;
        height: 0.75rem;
        display: block;
        border: none;
        font-size: 1em;
    }
</style>
