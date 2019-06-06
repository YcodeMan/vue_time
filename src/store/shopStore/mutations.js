export default {
    mutationsGetShopStore(state, param) {
        console.log(param)
        state.districts = param.districts
        state.subways = param.subways

        // 存储默认对应的对应的值
        state.Hamlet = param.districts[0].businessAreas

        window.sessionStorage.setItem('districts', JSON.stringify(param.districts))
        window.sessionStorage.setItem('subways', JSON.stringify(param.subways))
        window.sessionStorage.setItem('Hamlet', JSON.stringify(param.districts[0].businessAreas))
    },
    mutationsChangeHamlet(state, param) {
        state.Hamlet = state.districts[param].businessAreas 
    }
}