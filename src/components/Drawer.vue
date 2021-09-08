<template>
    
        <div class="side-nav-overlay" ref="overlay" @click="close()"></div>
        <div class="side-nav" ref="drawer">
            <div class="side-nav-header">
                <div class="header-content">
                    <img src="../assets/Circle_logo.png" height="80"/>
                    <div>
                        <h2>Chat away.</h2>
                    </div>
                </div>
            </div>
            <div class="side-nav-body">
                <h3>Navigation</h3>
                <div class="side-nav-link">
                    <p>Contacts</p>
                </div>
                <div class="side-nav-link">
                    <p>Profile</p>
                </div>
                <div class="side-nav-link">
                    <p>Settings</p>
                </div>
            </div>
            <div class="side-nav-footer">
                <div class="side-nav-link" @click="signOut()">
                    <p style="color:#D14040">logout</p>
                </div>
            </div>
        </div>
</template>

<script>
import {auth} from '../extensions/Firebase';
export default {
    name:'Drawer',
    data(){
        return {
            
        }
    },
    methods:{
        signOut:function(){
            auth.signOut();
            this.$store.commit('clearState');
            this.close()
            setTimeout(()=>{                
                this.$router.replace('/');
             },200)
        },
        close:function(){
             this.$refs.drawer.style.left = "-70%";
             setTimeout(()=>{
                this.$refs.overlay.style.display = "none"; 
             },200)
        },
        open:function(){
            this.$refs.overlay.style.display = "block";
            this.$refs.drawer.style.left = "0%";
        }
    }
}
</script>

<style scoped>
    .drawer{
        position: absolute;
        top:0;
        left:0;
        height: 100vh;
        width: 100vw;
        display: none;
        z-index: 2;
    }
    .side-nav-overlay{
        height: 100vh;
        width: 100%;
        position: absolute;
        top:0;
        left:0;
        background: rgba(0, 0, 0, 0.45);
        z-index: 2;
        display: none;
    }
    .side-nav{
        height: 100vh;
        position: absolute;
        width: 70%;
        top:0;
        left:-70%;
        max-width: 400px;
        background-color: white;
        display: flex;
        flex-direction: column;
        transition: 0.2s;
        z-index: 3;
    }
    .side-nav-header{
        padding: 20px
    }
    .header-content{
        display: flex;
    }
    h2{
        color: #013775;
        font-size: 15px;
        position: relative;
        top: 60%;
    }   
    .side-nav-body{
        flex:1;
        display: flex;
        flex-direction: column;
    }
    .side-nav-body h3{
        font-size: 15px;
        color: rgb(192, 192, 192);
        font-weight: 600;
        padding: 20px
    }
    .side-nav-link{
        height: 45px;
        width: 100%;
        padding: 0px 25px;
        font-size: 15px;
        display: flex;
        align-items: center;
    }
    .side-nav-footer{
        height: 65px;

    }
</style>