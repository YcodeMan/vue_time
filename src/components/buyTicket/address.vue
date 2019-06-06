<template>
    <div class="address">
        <div class="prompt">
            <p>{{noticeNotOwn}}</p>
        </div>
        <ul>
            <li class="addressInfo" v-for="(item, index) in cinemaList" :key='index'>
                <dl>
                    <dt class="cinemaName">
                        <p>
                            <span>{{item.cinameName }}</span>
                        </p>
                        <p class="price" v-if="item.minPrice > 0 ? true : false " > 
                            <b>{{item.minPrice | ClearZero}}</b>
                            <i>元起</i>
                        </p>
                    </dt>
                    <dd class="cinemaAddress">
                        <p>{{item.address}}</p>
                    </dd>
                    <dd class="movieType">
                        <i :class="key | addFeature(data) | isEmpty" v-for='(data,key, i) in item.feature' :key='i'>
                            {{key | addFeature(data)}}
                        </i>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>


<script>
import Vuex from 'vuex'
import {formatDate} from '@filters/formatDate'
import {movieFeature} from '@filters/movieFeature'
export default { 
    name: "Address",
    data() {
        return {
            _this: this
        }
    },
    created () {
        let time = formatDate(new Date(), 'yyyyMMddhhmmss'),
            id = this.city.id
        this.getCinemaAddress({id, time})
    },
    computed: {
        ...Vuex.mapState({
            city: state => state.city.city,
            noticeNotOwn: state => state.city.noticeNotOwn,
            cinemaList: state => state.city.cinemaList
        })
    },
    methods: {
         ...Vuex.mapActions({
            getCinemaAddress: 'city/actionsGetCinemaAddress'
        }),
    },
    filters: {
        // 去掉零
        ClearZero(price) {
            var reg = /0+$/
           if (reg.test(price)) {
            price = price + '';
            price =  price.slice(0, reg.exec(price).index)
            return price
           }
        },
        addFeature(key, val) {
         let name =   movieFeature({[key]: val})
          return name;
        },
        isEmpty(val) {
            if (val === undefined) {
                return 'hide'
            }
            return;
        }
    }

}
</script>


<style scoped>
    .address{
        width: 100%;
    }
    .address ul li{
        border-bottom: 1px solid #4a4040;
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
    .movieType .hide{
        display: none;
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