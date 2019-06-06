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
                <v-touch :class='showOrHide ? "active" : "passive"' tag='a' @tap="toggleCity()">
                    <b><span>全城</span><i></i></b>
                </v-touch>
            </li>
            <li>
                <a href="#">
                    <b><span>影厅特效</span><i></i></b>
                </a>
            </li>
        </ul>
        <div class="notStand" v-show='showOrHide'>
           <CityChoose />
           <CityPlaceList/>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import CityChoose from '@components/buyTicket/cityChoose'
import CityPlaceList from "@components/buyTicket/cityPlaceList";
export default {
    name: 'citynav',
    data() {
        return {
            showOrHide: false,
            cityId:  -1
        }
    },
    methods: {
        toggleCity() {
            this.showOrHide = !this.showOrHide
            if (this.cityId !== this.city.id) {
                 this.getShopStore({
                    id:this.city.id, 
                    time: new Date().getTime()
                })
                this.cityId = this.city.id
            }
        },
        ...Vuex.mapActions({
            getShopStore: 'shopStore/actionsGetShopStore'
        })
    },
    computed: {
        ...Vuex.mapState({
            city: state => state.city.city,
            id: state => state.city.city.id
        })
    },
    components: {
        CityChoose,
        CityPlaceList
    }
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
        background: url(/images/down.png) no-repeat;
        background-size: cover;
    }
    .city-nav .notStand{
        position: absolute;
        width: 100%;
        background-color: #fff;
        border-bottom: 2px solid #ccc;
    }
    .city-nav .active{
        color: #f97d3f;
    }
</style>