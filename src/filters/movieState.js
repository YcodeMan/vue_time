export const movieState = (() => {

    let defaultState = {
        'isTicket': '超前预售',
        'isVideo': '预告片'
    }
    return (config) => {
        for (var key in config) {
            if(defaultState[key]) {
                if (config[key] === true) {
                    return defaultState[key]
                }
            }
        }
    }


})()