<template>
  <div class="header">
    <ul class="table_v_c">
      <router-link tag='li' class="td" v-for="(item,index) in data" :key="index" :to='item.path'>
        <v-touch tag='a' :class="isActive==item.title?'curr':''" v-on:tap='addClass(item)'>
          <i class="logo_mtime" v-if="item.type=='i-i'"></i>
          <span v-if="item.type=='s'">{{item.title}}</span>
          <em class="new" v-if="item.title=='商城'">NEW</em>
          <i class="ico_my" v-if="item.type=='i-m'"></i>
        </v-touch>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      data: [
        {
          title: '',
          type: "i-i",
          path: '/index'
        },
        {
          title: '首页',
          type: "s",
          path: '/index'
        },
        {
          title: '购票',
          type: "s",
          path: '/buyTickets'
        },
        {
          title: '商城',
          type: "s",
          path: '/shopMall'
        },
        {
          title: '发现',
          type: "s",
          path: '/find'
        },
        {
          title: '我的',
          type: "i-m",
          path: '/mine'
        }
      ],
      isActive: '首页'
    }
  },
  methods: {
    addClass(e){
      if(e.type == 'i-i') {
        this.isActive = '首页';
      } else if(e.type == 'i-m') {
        this.isActive = '';
      } else {
        this.isActive = e.title;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #1c2635;
  li {
    text-align: center;
    a {
      color: #bbb;
      display: inline-block;
      height: 1.056rem;
      line-height: 1.056rem;
      position: relative;
      span {
        font-size: 0.312rem;
      }
    }
  }
}
.table_v_c {
  height: 100%;
  justify-content: space-around;
  width: 100%;
  display: flex;
}
.td {
  flex: 1;
}
.logo_mtime {
  width: 1.344rem;
  height: 0.432rem;
  background: url(//static1.mtime.cn/html5/20190531112624/images/2014/logo_mtime.png)
    no-repeat;
  background-size: contain;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.282rem;
}
.header li a.curr {
  color: #fff;
  position: relative;
  font-weight: bold;
  &::after {
    content: "";
    display: flex;
    height: 0.048em;
    background: #fff;
    width: 100%;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.new {
  background: linear-gradient(to bottom, #ef4545, #d80808);
  width: 0.6rem;
  height: 0.288rem;
  border-radius: 0.24rem;
  overflow: hidden;
  color: #fff;
  font-size: 0.192rem;
  line-height: 0.264rem;
  position: absolute;
  top: 0.168rem;
  left: 0.624rem;
}
.ico_my {
  width: 0.336rem;
  height: 0.432rem;
  display: inline-block;
  vertical-align: middle;
  background: url(//static1.mtime.cn/html5/20190531112624/images/2014/ico_my.png)
    no-repeat;
  background-size: cover;
}
</style>

