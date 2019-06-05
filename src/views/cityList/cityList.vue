<template>
    <div class="CityList">
        <CityHeader :title="title"/>
        <City/>
    </div>
</template>


<script>
    import CityHeader from "@common/subHeader/subHeader"
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
            City
        }
    }


</script>