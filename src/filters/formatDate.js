export function formatDate(date, fmt) {
    let yearRegExp = /y+/
    if (yearRegExp.test(fmt)) {
        var year = yearRegExp.exec(fmt)[0],
            yearLen = year.length > 4 ? 4 : year.length
        fmt = fmt.replace(year, (date.getFullYear() + '').substr(4 - yearLen))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        let DateReg = new RegExp(`(${k})`)
        if (DateReg.test(fmt)) {
            var num = DateReg.exec(fmt)[0]
            let str = o[k] + '';
            fmt = fmt.replace(num, (str.length === 1) ? ('0'+ str) : str )
        }
    }
    return fmt
} 