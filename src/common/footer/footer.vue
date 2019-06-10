<template>
  <div class="footer">
    <div class="footer-nav">
        <a href="#">
            <span>首页</span>
        </a>
        <a href="#">
            <span>购票</span>
        </a>
        <a href="#">
            <span>商城</span>
        </a>
        <a href="#">
            <span>发现</span>
        </a>
        <a href="#">
            <span>我的</span>
        </a>
    </div>
    <div class="footer-link">
    <ul>
        <li>
            <a href="#">PC版</a>
        </li>
        <li>
            <a href="#">客户端下载</a>
        </li>
        <li>
            <a href="#">意见反馈</a>
        </li>
        <li>
            <a href="#">帮助中心</a>
        </li>
    </ul>
    </div>
    <div class="copy">
        <div class="copy-logo">
            <span>
                <img src="/images/fot_logo.png">
            </span>
            <a href="#">
                <img src="/images/h_mark.jpg" alt>
            </a>
        </div>
        <p>Copyright 2006-2019 Mtime.com Inc. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer",
        components: {}
    };
</script>


<style scoped>
    .footer {
        width: 100%;
        background-color: #cdcdcd;
        bottom: 0;
        height: 3.4rem;
    }
    .footer > .footer-nav {
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        border: 1px solid;
    }
    .footer > .footer-nav a {
        padding: 0.2rem 0.4rem;
    }
    .footer-nav a span {
        font-size: 0.3rem;
        color: #0074c5;
        font-weight: 600;
    }
    .footer-link ul {
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-around;
    }
    .footer-link ul li {
        padding: 0 0.3rem;
        border-left: 1px solid gray;
    }
    .footer-link ul li:nth-child(1) {
        border: none;
    }
    .footer-link ul li a {
        font-size: 0.3rem;
    }
    .copy-logo {
        display: flex;
        justify-content: center;
    }
    .copy-logo img {
        width: 2rem;
        height: 0.6rem;
        float: left;
        margin: 0.3rem 0;
    }
    .copy p {
        text-align: center;
    }
</style>