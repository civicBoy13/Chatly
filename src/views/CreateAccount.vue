<template>
  <div class="page create-account">
        <div class="intro-container">
            <div class="logo-container">
                <img src="../assets/Circle_logo.png" height="110"/>
                <div>
                    <h2>Chat away.</h2>
                </div>
            </div>
            <br> 
            <br>
            <h1>Create Account</h1>
            <h3 class="sub-title">Create your account and start chating now!</h3>
        </div>
        <div class="account-form-container">
            <div class="create-account-form">

                <label for="email">First Name</label>
                <input type="text" name="fname" ref="fname" placeholder="your first name"/>
          
                <label for="email">Last Name</label>
                <input type="text" name="lname" ref="lname" placeholder="your last name"/>
            
                <label for="email">Email</label>
                <input type="email" name="email" ref="email" placeholder="youremail@mail.com"/>
              
                <label for="email">Password</label>
                <input type="password" name="pass" ref="pass" placeholder="yourpassword"/>
                <br>
                <div class="button-round">
                    <p>Create Account</p>
                </div>
                <p class="text-btn">Already have an account? <span @click="goToLogin()">Click Here</span></p>
            </div>
        </div>
  </div>
  <Loading ref="loading"/>
</template>

<script>

import Loading from '../components/Loader.vue'

export default {
    name:'CreateAccount',
    components:{
        Loading
    },
    methods:{
        goToLogin:function(){
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
    .create-account{
        background-color: #BEDCE5;
        overflow: auto;
    }
    h1, h2{
        color: #013775
    }
    .account-form-container{
        min-height: 450px;
        padding:20px;
    }
    .create-account-form{
        min-height: 450px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.45);
        display:flex;
        flex-direction: column;
        padding: 30px;
    }
    label{
        color:#C0C0C0;
    }
    .text-btn{
        font-size: 12px;
        text-align: center;
        margin-top: 15px;

    }
    input{
        padding: 14px 12px;
        border-radius: 10px;
        border: 1px solid #C0C0C0;
        outline: none;
        margin-bottom: 10px;
    }
    span{
        color:#4581C7
    }
</style>