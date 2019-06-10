<template>
    <div class="CityList">
        <CityHeader :title="title"/>
        <CitySearch/>
        <City/>
    </div>
</template>


<script>
    import CityHeader from "@common/subHeader/subHeader"
    import CitySearch from "@components/city/citySearch"
    import City from "@components/city/city"
    export default {
        name: "CityList",
        data() {
            return {
                title: '选择城市'
            }
        },
        components: {
            CityHeader,
            CitySearch,
            City
        }
    }


</script>