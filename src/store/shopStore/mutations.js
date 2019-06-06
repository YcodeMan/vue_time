export default {
    mutationsGetShopStore(state, param) {
        console.log(param)
        state.districts = param.districts
        state.subways = param.subways

        // 存储默认城市对应的对应的值
        state.Hamlet = param.districts[0].businessAreas

        // 存储默认地铁对应的值
        state.subwaysLine = param.subways[0].stations

        window.sessionStorage.setItem('districts', JSON.stringify(param.districts))
        window.sessionStorage.setItem('subways', JSON.stringify(param.subways))
        window.sessionStorage.setItem('Hamlet', JSON.stringify(param.districts[0].businessAreas))
        window.sessionStorage.setItem('subwaysLine', JSON.stringify(param.subways[0].stations))
    },
    mutationsChangeHamlet(state, param) {
       // param {isCity, index}
        if (param.isCity) {
            // 改变城市数据
            state.Hamlet = state.districts[param.index].businessAreas 
        } else {
            // 改变地铁数据
            state.subwaysLine = state.subways[param.index].stations
        }
       
    }
}