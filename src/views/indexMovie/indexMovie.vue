<template>
    <div class="IndexMovie">
        <movieComing/>
        <todayHot/>
    </div>
</template>

<script>
import movieComing from '@components/index/movieComing'
import todayHot from '@components/index/todayHot'
export default {
    name:'IndexMovie',
    components: {
        movieComing,
        todayHot
    }
}
</script>
