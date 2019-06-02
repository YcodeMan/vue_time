export default {
    // 当本地没有地址数据时请求数据
    mutationssHotCity(state, param) {
        state.cityList = param;
        const cityListObject = {cityListObject: param}
        window.localStorage.setItem(
            'cityList',
              JSON.stringify(cityListObject)
            )
            // 默认地址为北京
        state.city = {id: '290', name: '北京'}
        window.localStorage.setItem('city', JSON.stringify(state.city))
        
    }
}