<template>
    <div class="IndexMovie">
        <movieComing/>
    </div>
</template>

<script>
import Header from '@common/header/header'
import movieComing from '@components/index/movieComing'
export default {
    name:'IndexMovie',
    components: {
        Header,
        movieComing
    }
}
</script>
