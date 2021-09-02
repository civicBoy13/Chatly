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
               <input type="email" name="email" placeholder="youremail@mail.com"/>
               <br>
               <label for="name">Password</label>
               <input type="password" name="pass" placeholder="yourpassword"/>
               <br>
               <div class="button-round">
                   <p>Sign in</p>
               </div>
               <p class="text-btn">Forgot password? <span>Click Here</span></p>
               <p class="text-btn">Don't have an account? <span @click="goToCreateAccount()">Click Here</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from '../extensions/firebase.js';
export default {
    name: "Login",
    methods:{
        signIn:function(){

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
</style>