<template>
    <div class="BuyTickets">
        <CityNav />
        <Address/>
    </div>
</template>

<script>
import CityNav from '@components/buyTicket/cityNav'
import Address from '@components/buyTicket/address'
export default {

    name: 'BuyTickets',
    components: {
        Address,
        CityNav
    }

}
</script>

<style scoped>

</style>

