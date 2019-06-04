<template>
    <div class="CityList">
        <CityHeader/>
        <City/>
    </div>
</template>


<script>
    import CityHeader from "@components/city/cityHeader"
    import City from "@components/city/city"
    export default {
    
        name: "CityList",
        components: {
            CityHeader,
            City
        }
    }


</script>