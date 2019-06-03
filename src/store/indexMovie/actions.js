import {detail} from '@api/comingSale';
export default {
    async actionsDetails({commit}){
        let data = await detail();
        console.log(data)
        commit("mutationsDetails",data);
    }
}