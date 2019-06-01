<template>
    <div class="IndexMovie">
        <movieComing/>
        <todayHot/>
    </div>
</template>

<script>
import movieComing from '@components/index/movieComing'
import todayHot from '@common/today-hot/today-hot'
export default {
    name:'IndexMovie',
    components: {
        movieComing,
        todayHot
    }
}
</script>
