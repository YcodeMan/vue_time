<template>
    <div class="serch">
        <v-touch @tap="toCityList()">
            <div class="city">
                <b>{{city.name}}</b>
                <i></i>
            </div>
        </v-touch>
       
        <div class="serch-input">
            <span></span>
            <input type="text" placeholder="影片/影院/影人,任你搜索">
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "serch",
    computed: {
        ...Vuex.mapState({
            city: state => state.city.city
        })
    },
    methods: {
        toCityList(){
           this.$router.push({
               name: "cityList",
               path: "/cityList"
           })
        }
    },
    
}
</script>


<style scoped>
.serch{
    width: 100%;
    height: 1.2rem;
    background-color: #f6f6f6;
    display: flex;
}
.city{
    margin: 0.4rem 0.4rem;
}
.city i{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    background-color: yellow;
    background: url(../../../public/images/i_city.png) no-repeat -3px 5px;
}
.city b{
    font-size: .384rem;
}
.serch-input{
    display: flex;
    align-items: center;
    width: 5.2rem;
    height: 0.8rem;
    border: 1px solid grey;
    margin-top: 0.2rem;
    border-radius: 10px;
}
.serch-input span{
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background: url(../../../public/images/search_ico_01.png) no-repeat 30px 20px;
}
.serch-input input{
    background-color: #f6f6f6;
    margin-left: 0.2rem;
    width: 4rem;
    height: 0.72rem;
    display: block;
    border: none;
    font-size: 1em;
}
</style>