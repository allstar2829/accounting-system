<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="#"><b>COMPANY NAME</b></a>
            </div>
            <!-- /.login-logo -->
            <div class="card rounded">
                <div class="card-body login-card-body rounded">
                    <p class="login-box-msg">登入 Login</p>
                    <form method="post" class="mb-5">
                        <div class="input-group mb-3">
                        <input v-model="userName" type="account" class="form-control" placeholder="Account">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-uesr"></span>
                            </div>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input v-model="passWord" type="password" class="form-control" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-8">
                            <div class="icheck-dark">
                            <input type="checkbox" id="remember">
                            <label for="remember">
                                記住帳戶資訊
                            </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button @click="login" type="submit" class="btn btn-dark btn-block">登入</button>
                        </div>
                        <!-- /.col -->
                        </div>
                    </form>

                    <p class="mb-1">
                        <a href="forgot-password.html"><small><b>忘記帳戶/密碼</b>　Forgot my account/password</small></a>
                    </p>
                    <p class="mb-0">
                        <a href="register.html" class="text-center"><small><b>註冊新用戶</b>　Register a new membership</small></a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
    </div>
</template>

<script>
import store from '../store'

export default {
    name: 'login',
    data(){
        return{
            userName: '',
            passWord: '',
        }
    },
    methods:{
        login(){
            if(store.state.username == this.userName && store.state.password == this.passWord ){
                this.$router.push("/");
            }
        }
    },
}
</script>