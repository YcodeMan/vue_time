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
            //热门城市截取所有城市前八条数据
        state.warmCity = state.cityList.slice(0, 8)
        window.localStorage.setItem('warmCity', JSON.stringify(state.warmCity))
    },

    mutationsCityList(state,params){
        
        //城市列表
        let cityList = [];
        /*
            城市列表
            [
                {index:A,list:[{cityId:10,nm:北京}]}
            ]
        * */
        for(var i=0;i<params.length;i++){

            let firstLetter = params[i].pinyinFull.slice(0,1).toUpperCase();
            if(isCity(firstLetter)){
                for(var j=0;j<cityList.length;j++){
                    if(cityList[j].index == firstLetter){
                        cityList[j].list.push({cityId:params[i].id,n:params[i].n});
                        break;
                    }
                }
            }else{
                cityList.push({index:firstLetter,list:[{cityId:params[i].id,n:params[i].n}]})
            }
        }
        //封装一个方法用来查看当前index是否存在cityList中
        function isCity(firstLetter){
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index == firstLetter){
                    return true;
                }
            }
            return false;
        }
        //打印
       cityList.sort((a,b)=>{
           if(a.index>b.index){
               return 1;
           }else{
               return -1;
           }
       })
        
        //更改state中的数据
        state.cityList = cityList;
        window.sessionStorage.setItem("cityList",JSON.stringify(cityList));
        state.cityLoading = false;

    },

    mutationsCityToggle(state,params){
       
        // 改变state中的值
        let id = params.cityId,
            name = params.n
        state.city = {id, name}
       
        // 存储city数据
        window.localStorage.setItem("city", JSON.stringify(state.city));
        
    },

    // 电影院地址
    mutationsGetCinemaAddress(state, data) {
        state.cinemaList = data.cinemaList
        state.noticeNotOwn = data.noticeNotOwn

        window.sessionStorage.setItem('cinemaList', JSON.stringify(data.cinemaList))
        window.sessionStorage.setItem('noticeNotOwn', JSON.stringify(data.noticeNotOwn))
        
    }
}