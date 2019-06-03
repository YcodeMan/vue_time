<template>
    <div class="IndexMovie">
        <Header/>
        <movieComing/>
        <todayHot/>
    </div>
</template>

<script>
import movieComing from '@components/index/movieComing'
import todayHot from '@components/index/todayHot'
import Header from '@common/header/header'
export default {
    name:'IndexMovie',
    components: {
        movieComing,
        Header,
        todayHot
    }
}
</script>
