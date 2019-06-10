<template>
   <div class="choose">
       <!-- 城市商圈和地铁的选项卡 -->
        <ul>
            <v-touch tag='li' @tap='changeSubway()'>
                <a href="#" :class='showOrHide ? "active" : "passive"'><span>商圈</span></a>
            </v-touch>
            <v-touch tag='li' @tap='changeSubway()'>
                <a href="#" :class='showOrHide ? "passive" : "active"'><span>地铁</span></a>
            </v-touch>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'citychoose',
    data() {
        return {
            showOrHide: true
        }
    },
    methods: {
        changeSubway() {
           
            this.showOrHide = !this.showOrHide
            this.$Observer.$emit('changeState', this.showOrHide)
        }
    }
}
</script>


<style scoped>
    .choose{
        width: 100%;
    }
    .choose ul{
        display: flex;
        height: 0.72rem;
    }
    .choose ul li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
    }
    .choose ul li a{
        font-size: 0.3rem;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .choose ul li a .activ{
        border-bottom: 2px solid #f97d3f;
        color: #f97d3f;
    }
    .choose .active {
        border-bottom: 2px solid #f97d3f;
        color: #f97d3f;
    }
</style>