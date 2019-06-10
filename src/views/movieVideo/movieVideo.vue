<template>
    <div class="movieVideo">
        <keep-alive>
            <subHeader :title="title"/>
        </keep-alive>
        <keep-alive>
            <HeraldMovie/>
        </keep-alive>
        
    </div>
</template>

<script>
import HeraldMovie from '@components/heraldMovie/heraldMovie'
import subHeader from '@common/subHeader/subHeader'
export default {
    name: 'movieVideo',
    data () {
        return {
            title: ''
        }
    },
    activated () {
       let {title} = this.$route.params
      this.title = title
    },
    components: {
        HeraldMovie,
        subHeader
    }
}
</script>
