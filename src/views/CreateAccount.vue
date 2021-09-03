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

                <label for="fname">First Name</label>
                <input type="text" name="fname" ref="fname" placeholder="your first name" @focus="restInput(0)"/>
                <label class="error" ref="errFname">Please enter your first name</label>
                
                <label for="lname">Last Name</label>
                <input type="text" name="lname" ref="lname" placeholder="your last name" @focus="restInput(1)"/>
                <label class="error" ref="errLname">Please enter your last name</label>

                <label for="email">Email</label>
                <input type="email" name="email" ref="email" placeholder="youremail@mail.com" @focus="restInput(2)"/>
                <label class="error" ref="errEmail">Please enter your email</label>

                <label for="pass">Password</label>
                <input type="password" name="pass" ref="pass" placeholder="yourpassword" @focus="restInput(3)"/>
                <label class="error" ref="errPass">Please enter your password</label>
                
                <br>
                <div class="button-round" @click="validateAndSubmit()">
                    <p>Create Account</p>
                </div>
                <p class="text-btn">Already have an account? <span @click="goToLogin()">Click Here</span></p>
            </div>
        </div>
  </div>
  <div class="confirm-modal-container" ref="modal">
      <div class="overlay" ></div>
      <div class="confim-modal">
          <div class="modal-header">
              <h2>Account created</h2>
          </div>

          <div class="modal-body">
              <p>Your account was successfully created, please sign in to start your chatting journey!</p>
          </div>

          <div class="modal-footer">
            <p @click="confirm()">Ok</p>
          </div>
      </div>
  </div>
  <Loading ref="loading"/>
</template>

<script>

import {db,auth} from '../extensions/Firebase';
import Loading from '../components/Loader.vue';

export default {
    name:'CreateAccount',
    components:{
        Loading
    },
    created(){
            
    },
    methods:{
        goToLogin:function(){
            this.$router.push("/");
        },
        validateAndSubmit:async function(){
            try {
                if(this.validate()){
                    this.$refs.loading.show();
                    var fname = this.$refs.fname.value;
                    var lname = this.$refs.lname.value;
                    var email = this.$refs.email.value;
                    var pass = this.$refs.pass.value;
                    var userCredentials = await auth.createUserWithEmailAndPassword(email, pass);
                    db.collection("Users").doc(userCredentials.user.uid).set({
                        first_name: fname,
                        last_name:lname,
                        email:email
                    });
                    this.$refs.loading.hide();
                    await auth.signOut();
                    this.showModal();
                }
            } catch (error) {
                console.log(error);
            }
        },
        confirm:function(){
            this.dismissModal();
            this.goToLogin();
        },
        validate:function(){
            var isValid = true;
            var fname = this.$refs.fname.value;
            var lname = this.$refs.lname.value;
            var email = this.$refs.email.value;
            var pass = this.$refs.pass.value;

            if(fname ===""){
                this.isValid = false;
                this.$refs.errFname.style.display = "block";
                this.$refs.fname.classList.add('inputError')
            }

            if(lname ===""){
                this.isValid = false;
                this.$refs.errLname.style.display = "block";
                this.$refs.lname.classList.add('inputError')
            }

            if(email ===""){
                this.isValid = false;
                this.$refs.errEmail.style.display = "block";
                this.$refs.email.classList.add('inputError')
            }

            if(pass ===""){
                this.isValid = false;
                this.$refs.errPass.style.display = "block";
                this.$refs.pass.classList.add('inputError')
            }

            return isValid;
        },
        dismissModal:function(){
            this.$refs.modal.style.display = "none";
        },
        showModal:function(){
            this.$refs.modal.style.display = "block";
        },
        restInput:function(index){
            switch(index){
                case 0:
                    this.$refs.errFname.style.display = "none";
                    this.$refs.fname.classList.remove('inputError');
                    break;
                case 1:
                    this.$refs.errLname.style.display = "none";
                    this.$refs.lname.classList.remove('inputError')
                    break;
                case 2:
                    this.$refs.errEmail.style.display = "none";
                    this.$refs.email.classList.remove('inputError')
                    break;
                case 3:
                    this.$refs.errPass.style.display = "none";
                    this.$refs.pass.classList.remove('inputError')
                    break;
            }

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

    .confirm-modal-container{
        position: absolute;
        top:0;
        left:0;
        height: 100vh;
        width: 100vw;
        display: none;
    }
    .confim-modal{
        width: 80%;
        max-width: 500px;
        padding: 20px;
        background-color: white;
        position: absolute;
        top:50%;
        left:50%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translate(-50%,-50%);
    }
    label.error{
        color:red;
        display: none;
    }
    .inputError{
        border: 1px solid red;
    } 
</style>