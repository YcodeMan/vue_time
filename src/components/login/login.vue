<template>
    <div class="login">
        <div class="user">
            <span></span>
            <input type="text" placeholder="登录邮箱、手机号">
        </div>
        <div class=password>
            <span></span>
            <input type="password" placeholder="密码">
            <i>显示密码</i>
        </div>
        <div class="dl">
            <button class="btn">登录</button>
        </div>
        <div class="toRegister">
            <v-touch tag="a" href="#" class="register">免费注册</v-touch>
            <a href="#" class="findBcak">找回密码</a>
        </div>
        <dl class="otherLogin">
            <dt><span>使用第三方登录</span></dt>
            <dd>
                <a href="#" class="sina"></a>
                <a href="#" class="qq"></a>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
        
        }
    }
</script>


<style lang="scss" scoped>
    .login{
         background-color: #f6f6f6;
    }
    .user{
        width: 100%;
        display: flex;
        background-color: #fff;
        input{
            border-bottom: 1px solid #ccc;
            width: 6.5rem;
            font-size: 0.35rem;
        }
        span{
            display: inline-block;
            width: 0.5rem;
            height: 0.55rem;
            background: url(/images/i_user.png) no-repeat;
            background-size: cover;
            margin: 0.3rem 0.3rem 0.3rem 0.4rem;
        }
    }
    .password{
        width: 100%;
        display: flex;
        border-bottom: 2px solid #ccc;
         background-color: #fff;
        input{
            width: 4.7rem;
            font-size: 0.35rem;
        }
        span{
            display: inline-block;
            width: 0.5rem;
            height: 0.55rem;
            background: url(/images/i_password.png) no-repeat;
            background-size: cover;
            margin: 0.3rem 0.3rem 0.3rem 0.4rem;
        }
        i{
           display: flex;
           align-items: center;
           font-size: 0.35rem;
           color: #1e7dd7;
           margin-right: 0.2rem;
        }
    }
    .dl{
        width: 100%;
        display: flex;
        justify-content: center;
        .btn{
            width: 6.8rem;
            height: 1rem;
            background: #1e7dd7;
            border: 1px solid #1e7dd7;
            font-size: 0.4rem;
            color: #fff;
            border-radius: 0.5rem;
            margin: 0.35rem 0 0 0;

        }
    }
    .toRegister{
        width: 100%;
        display: flex;
        justify-content: space-between;
        a{
            margin: 0.3rem 0.45rem;
            font-size: 0.35rem;
        }
        .register{
            font-weight: 600;
            color: #1e7dd7;
        }
    }
    .otherLogin{
        margin: 0.2rem 0.3rem;
        border-top: 1px solid #d8d8d8;
       
        dt{
            display: flex;
            justify-content: center;
            span{
                margin-top:0.3rem;
                font-size: 0.28rem;
            }
        }
        dd{
            display: flex;
            justify-content: center;
            a{
                width: 1.3rem;
                height: 1.3rem;
                margin:0.3rem 0.25rem;
            }
            .sina{
                background: url(/images/o_sina.png) no-repeat;
                background-size: cover;
            }
            .qq{
                background: url(/images/o_qq.png) no-repeat;
                background-size: cover;
            }
        }
    }

</style>