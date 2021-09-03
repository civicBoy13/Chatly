<template>
    <div class="page login">
        <div class="button-round install">
            <p>install</p>
        </div>
        <div class="intro-container">
            <div class="logo-container">
                <img src="../assets/Circle_logo.png" height="110"/>
                <div>
                    <h2>Chat away.</h2>
                </div>
            </div>
            <br> 
            <br>
            <h1>Welcome Back</h1>
            <h3 class="sub-title">Sign in and chat away!</h3>
        </div>
        <div class="form-container">
            <div class="login-form">
               <h2 class="sign-in">Sign in</h2>
               <br>
               <label for="email">Email</label>
               <input type="email" ref="email" name="email" placeholder="youremail@mail.com" @focus="restInput(0)"/>
               <label class="error" ref="errEmail">Please enter your email</label>
               <br>
               <label for="name">Password</label>
               <input type="password" ref="pass" name="pass" placeholder="yourpassword" @focus="restInput(1)"/>
               <label class="error" ref="errPass">Please enter your password</label>
               <br>
               <div class="button-round" @click="signIn()">
                   <p>Sign in</p>
               </div>
               <p class="text-btn">Forgot password? <span>Click Here</span></p>
               <p class="text-btn">Don't have an account? <span @click="goToCreateAccount()">Click Here</span></p>
            </div>
        </div>
    </div>
    <Loading ref="loading"/>
</template>

<script>
import { auth } from '../extensions/Firebase';
import Loading from '../components/Loader.vue';
export default {
    name: "Login",
    components:{
        Loading
    },
    methods:{
        signIn:async function(){
            try {
                if(this.validate()){
                    this.$refs.loading.show();
                    var email = this.$refs.email.value;
                    var password = this.$refs.pass.value;
                    await auth.signInWithEmailAndPassword(email, password);
                    if(auth.currentUser !== undefined){
                        this.$router.replace('Chatly');
                    }
                    this.$refs.loading.hide();
                }
            } catch (error) {
                this.$refs.loading.hide();
                console.log(error);
            }
        },
        validate:function(){
            var isValid = true;
            var email = this.$refs.email;
            var pass = this.$refs.pass;

            if(email.value === "" ){
                isValid = false;
                email.classList.add('inputError');
                this.$refs.errEmail.style.display = "block";
            }

            if(pass.value === ""){
                isValid = false;
                pass.classList.add('inputError');
                this.$refs.errPass.style.display = "block";
            }
            return isValid;
        },
        restInput:function(index){
            switch(index){
                case 0:
                    this.$refs.errEmail.style.display = "none";
                    this.$refs.email.classList.remove('inputError')
                    break;
                case 1:
                    this.$refs.errPass.style.display = "none";
                    this.$refs.pass.classList.remove('inputError')
                    break;
            }

        },
        goToCreateAccount:function (){
            this.$router.push("CreateAccount");
        }
    }
}
</script>

<style scoped>
    .login{
        background-color: #BEDCE5;
        overflow: auto;
    }
    h1, h2{
        color: #013775
    }

    .form-container{
        min-height: 450px;
        padding: 20px;
    }

    .install{
        color: white;
        position: absolute;
        width: 120px;
        right: 8%;
        top:2%;
        z-index: 1;
    }
    .login-form{
        background-color: white;
        border-radius: 20px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.45);
        position: relative;
        height: 100%;
        width: 100%;
        min-height: 450px;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }
    .login-form span{
        color:#4581C7
    }
    .sign-in{
        color:#3270bb;
    }
    .login-form .text-btn{
        font-size: 12px;
        text-align: center;
        margin-top: 15px;

    }
    label{
        color:#C0C0C0;
    }
    input{
        padding: 14px 12px;
        border-radius: 10px;
        border: 1px solid #C0C0C0;
        outline: none;
        margin-bottom: 10px;
    }
    label.error{
        color:red;
        display: none;
    }
    .inputError{
        border: 1px solid red;
    } 
</style>