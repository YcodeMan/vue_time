<template>
    <div class="movieVideo">
        <keep-alive>
            <HeraldMovie/>
        </keep-alive>
        
    </div>
</template>

<script>
import HeraldMovie from '@components/heraldMovie/heraldMovie'
export default {
    name: 'movieVideo',
    components: {
        HeraldMovie
    }
}
</script>
