<template>
    <div class="register">
        <div class="phone">
            <span>手机号：</span>
            <input type="text" placeholder="请输入手机号">
            <a href="#"><i>获取验证码</i></a>
        </div>
        <div class="confirmCode">
            <span>验证码：</span>
            <input type="text" >
        </div>
        <div class="password">
            <span>密码：</span>
            <input type="password" placeholder="6-20位字母、数字、符号组成">
        </div>
        <section class="agree">
            <i></i>
            <span>我已阅读并同意</span>
            <a href="#">《Mtime时光网服务条款》</a>
            <a href="#">《隐私政策》</a>
        </section>
        <div class="btn">
            <button>注册</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",

    }
</script>

<style scoped>
    .phone,.confirmCode{
        width: 100%;
        margin-left: 0.3rem;
        padding: 0.2rem 0;
        border-bottom: 1px solid #ccc;
        font-size: 0.3rem;
    }
    .phone input,.confirmCode input{
        display: inline-block;
        border: none;
        font-size: 0.3rem;
        height: 0.5rem;
    }
    .phone a{
        display: inline-block;
        width: 2rem;
        height: 0.7rem;
        border-radius: 0.35rem;
        border: 1px solid #1e7dd7;
        color: #1e7dd7;
        text-align: center;
        line-height: 0.7rem;
    }
    .phone i{
        font-style: normal;
    }
    .password{
        width: 100%;
        border-bottom: 1px solid #ccc;
        font-size: 0.3rem;
        padding: 0.25rem 0.25rem 0.25rem 0;
    }
    .password span{
        margin-left: 0.3rem;
    }
    .password input{
        line-height: 0.5rem;
        display: inline-block;
        width: 5.5rem;
        border: none;
    }
    .agree{
        width: 100%;
        padding: 0.2rem 0.3rem;
        display: flex;
        align-items: center;
      
        font-size: 0.33rem;
        flex-wrap: wrap;
    }
    .agree i{
        display: inline-block;
        width: 0.42rem;
        height: 0.42rem;
        background: url(/images/i_suss.png) no-repeat;
        background-size: cover;
    }
    .agree span{
        margin-left: 0.2rem;
    }
    .agree a{
        padding: 0.1rem 0;
        color: #1e7dd7
    }
    .btn{
        width: 100%;
        text-align: center;
        padding-top: 0.15rem;
    }
    .btn button{
        width: 6.5rem;
        height: 0.9rem;
        background-color: #1e7dd7;
        border: 1px solid #1e7dd7;
        border-radius: 0.45rem;
        font-size: 0.4rem;
        color: #fff;
    }
</style>