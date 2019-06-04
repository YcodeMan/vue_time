<template>
    <div class="city">
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
                    <li v-for="(item,index) in warmCity" :key="index"><a href="#">{{item.n}}</a></li>
                </ul>
            </dd>
        </dl>
<!-- -----------------按字母排序城市列表---------------- -->
        <div class="city" v-for="(item,index) in cityList" :key="index">
            <p>{{item.index}}</p>
            <ul>
                <v-touch  v-for="(data,idx) in item.list" :key="idx"
                tag="li" @tap="handleToggleCity(data)"
                ><a href="#">{{data.n}}</a></v-touch>
            </ul>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: "City",
    created() {
       this.mutationsCityList(this.cityList)
    },
    methods: {
        ...Vuex.mapMutations({
            mutationsCityList: "city/mutationsCityList",
            mutationsCityToggle: "city/mutationsCityToggle"
        }),
        handleToggleCity(params){
            this.$router.push("/indexMovie")
            this.mutationsCityToggle(params)
        }
    },
    computed: {
        ...Vuex.mapState({
            city: state => state.city.city,
            cityList: state => state.city.cityList,
            warmCity: state => state.city.warmCity,
            getLocation: state => state.city.getLocation,
        })
    },
}
</script>



<style scoped>
    .city{
        width: 100%;
        font-size: 0.35rem;
        color: #333;
    }
    .city dl dt,.city p{
        background-color: #ebebeb;
        color: #777;
    }
    .city p{
        padding: 0.1rem 0.3rem;
    }
    .city dl:nth-child(1) dd p{
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
    }
    .city ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .city ul li{
        flex: 25%;
        text-align: center;
        margin: 0.2rem 0;
    }
</style>