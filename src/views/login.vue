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
                        <input v-model="account" type="account" class="form-control" placeholder="Account">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-user"></span>
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
                            <button @click="login" type="button" class="btn btn-dark btn-block">登入</button>
                        </div>
                        <!-- /.col -->
                        </div>
                    </form>

                    <p class="mb-1">
                        <a href="forgot-password.html"><small><b class="mr-2">忘記帳戶/密碼</b>Forgot my account/password</small></a>
                    </p>
                    <p class="mb-0">
                        <a href="register.html" class="text-center"><small><b class="mr-2">註冊新用戶</b>Register a new membership</small></a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
    </div>
</template>

<script>

export default {
    name: 'login',
    data(){
        return{
            account: '',
            passWord: '',
        }
    },
    methods:{
        login(){
            if(this.account && this.passWord){
                this.ajax()
            }else{
                alert('請輸入帳號密碼')
            }
        },
        ajax(){
            if( this.account === 'iris' && this.passWord === '1234' ){
                const userData = {
                    userName:'IRIS',
                    auth:'user'
                }
                const token = 'usertoken'
                this.success(userData,token)
            } else if ( this.account === 'wuu' && this.passWord === '666' ){
                const userData = {
                    userName:'WUU',
                    auth:'super'
                }
                const token = 'bosstoken'
                this.success(userData,token)
            } else{
                this.fail()
            }
        },
        success(userData,token){
            this.$store.commit('SET_USER_DATA',userData) 
            this.$store.commit('SET_TOKEN',token)
            this.$router.push("/") 
        },
        fail(){
            console.log('登入失敗');
        }
    },
}

</script>
