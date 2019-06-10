

export const movieFeature = (() => {
    const defaultProps = {
        'has3D': '3D',
        'hasFeature4D' : '4D',
        'hasFeatureDolby': '杜比',
        'hasFeatureHuge': '巨幕',
        'hasIMAX': 'IMAX',
        'hasLoveseat': '情侣座',
        'hasPark': '停车场',
        'hasScreenX': 'ScreenX',
        'hasServiceTicket': '服务票',
        'hasSphereX': '环绕',
        'hasVIP': 'VIP',
        'hasWifi': 'Wifi'
    }

    return (options) => {
        for (var key in options) {
            if (defaultProps[key] && options[key]) {
                return  defaultProps[key]
            }
        }
       
    }

})()