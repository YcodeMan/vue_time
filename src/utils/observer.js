let list = {}
// {key:[], key2: [] }

// 添加事件处理程序
const $on = (type, callback) => {
    if (list[type] === undefined) {
        list[type] = []
    }
    list[type].push(callback)
}

// 触发事件
const $emit = (type, param) => {
    if (list[type]) {
        list[type].forEach((cb) => {
            cb(param)
        })
    }
}

// 解绑事件
const $off = (type, callback) => {
    if (list[type]) {
        if (callback) {
            var index = list[type].indexOf(callback)
            list[type].splice(index, 1)
        } else {
            list[type].length = 0;
        }

    }
}

export default {
    $on,
    $emit,
    $off
}