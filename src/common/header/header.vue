<template>
  <div class="header">
    <ul class="table_v_c">
      <li class="td">
        <a href="#!/">
          <i class="logo_mtime"></i>
        </a>
      </li>
      <li class="td curr">
        <a href="#">
          <span>首页</span>
        </a>
      </li>
      <li class="td">
        <a href="#">
          <span>购票</span>
        </a>
      </li>
      <li class="td">
        <a href="#">
          <span>商城</span>
          <em class="new">NEW</em>
        </a>
      </li>
      <li class="td">
        <a href="#">
          <span>发现</span>
        </a>
      </li>
      <li class="td">
        <a href="#">
          <i class="ico_my"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    height: 100%;
    background: #1c2635;
    li{
        text-align: center;
        a{
            color: #bbb;
            display: inline-block;
            height: 4.4em;
            line-height: 4.4em;
            position: relative;
            span {
                font-size: 1.3rem;
            }   
        }
    }
}
.table_v_c {
    height: 100%;
    box-align: center;
    width: 100%;
    display: box;   
}
.td {
    box-flex: 1;
    flex: 1;
}
.logo_mtime {
    width: 5.6em;
    height: 1.8em;
    background: url(//static1.mtime.cn/html5/20190531112624/images/2014/logo_mtime.png) no-repeat;
    background-size: contain;
    display: inline-block;
    vertical-align: middle;
}
.header li.curr a {
    color: #fff;
    position: relative;
    font-weight: bold;
    ::after {
        content: '';
        display: block;
        height: .2em;
        background: #fff;
        width: 100%;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
.new {
    background: linear-gradient(top,#ef4545,#d80808);
    width: 2.5rem;
    height: 1.2rem;
    border-radius: 1rem;
    overflow: hidden;
    color: #fff;
    font-size: .8rem;
    line-height: 1.1rem;
    position: absolute;
    top: .7rem;
    left: 2.6rem;
}
.ico_my {
    width: 1.4em;
    height: 1.8em;
    display: inline-block;
    vertical-align: middle;
    background: url(//static1.mtime.cn/html5/20190531112624/images/2014/ico_my.png) no-repeat;
    background-size: cover;
}
</style>

