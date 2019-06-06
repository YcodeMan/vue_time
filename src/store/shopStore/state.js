export default {
    districts: JSON.parse(window.sessionStorage.getItem('districts')) || [],
    subways: JSON.parse(window.sessionStorage.getItem('subways')) || [],
    Hamlet: JSON.parse(window.sessionStorage.getItem('Hamlet')) || []

}