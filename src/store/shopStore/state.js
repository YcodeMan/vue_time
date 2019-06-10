export default {
    districts: JSON.parse(window.sessionStorage.getItem('districts')) || [],
    subways: JSON.parse(window.sessionStorage.getItem('subways')) || [],
    Hamlet: JSON.parse(window.sessionStorage.getItem('Hamlet')) || [],

    // 存储地铁线路
    subwaysLine: JSON.parse(window.sessionStorage.getItem('subwaysLine')) || []

}