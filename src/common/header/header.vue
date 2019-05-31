<template>
  <div class="header">
    <ul class="table_v_c">
      <li class="td">
        <a>
          <i class="logo_mtime"></i>
        </a>
      </li>
      <li class="td curr">
        <a>
          <span>首页</span>
        </a>
      </li>
      <li class="td">
        <a>
          <span>购票</span>
        </a>
      </li>
      <li class="td">
        <a>
          <span>商城</span>
          <em class="new">NEW</em>
        </a>
      </li>
      <li class="td">
        <a>
          <span>发现</span>
        </a>
      </li>
      <li class="td">
        <a>
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
    box-align: center;
    width: 100%;
    display: box;   
}
.td {
    box-flex: 1;
    flex: 1;
}
.logo_mtime {
    width: 1.344rem;
    height: 0.432rem;
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
        height: .048em;
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
    width: .6rem;
    height: 0.288rem;
    border-radius: .24rem;
    overflow: hidden;
    color: #fff;
    font-size: .192rem;
    line-height: 0.264rem;
    position: absolute;
    top: .168rem;
    left: .624rem;
}
.ico_my {
    width: .336rem;
    height: .432rem;
    display: inline-block;
    vertical-align: middle;
    background: url(//static1.mtime.cn/html5/20190531112624/images/2014/ico_my.png) no-repeat;
    background-size: cover;
}
</style>

