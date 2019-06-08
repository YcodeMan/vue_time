import {shopStore} from '@api/shopCity'
export default {
   async actionsGetShopStore({commit}, param) {
        let data = await  shopStore(param)
       commit('mutationsGetShopStore', data.data)
    }   
}