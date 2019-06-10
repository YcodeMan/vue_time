import {formatDate} from './formatDate'
//限制长文章显示的最多字数
export const maxTxtCount = (txt, num, word) => {
    let str = '';
    if(txt) {
        str = txt.substr(0, num) + '..';
        if(word){
            str += word;
        }
    }
    return str;
}

//格式化电影评分
export const formatRating = (rating) => {
    if(rating){
        if (rating == 10) {
            return rating;
        }
        if(rating <= 0){
            return ;
        }
        return rating.toFixed(1)
    }
}

//格式化观看时间
export const formatTime = (time, add) => {
    if(time){
        let nowTime = new Date().getTime();
        if(add){
            time = Number(time+add);
        }
        let t = Math.floor((nowTime - time)/3600000);
        if (t<24) {
            return t + '小时前';
        } else {
            let d = new Date(time);
            return formatDate(d, 'yyyy-MM-dd hh:mm:ss')
        }
    }
}