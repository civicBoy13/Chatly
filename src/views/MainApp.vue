<template>
    <div class="app-container">
        <Drawer ref="drawer"/>
        <div class="app-header">
            <div class="menu-icon" @click="openDrawer()">
                <div class="icon-container">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
            <!-- <button @click="signOut()">logout</button> -->
        </div>
        <router-view/>
        <div class="bottom-nav">
            <router-link to="/Chatly/Contacts" class="link-btn" active-class="active">
                <img src="../assets/Chat.svg"/>
                <p>Chats</p>
            </router-link>
            <router-link to="/Chatly/Profile" class="link-btn" active-class="active">            
                <img src="../assets/Profile.svg" >
                <p>Profile</p>                
            </router-link>
        </div>
    </div>
</template>

<script>
import {auth} from '../extensions/Firebase';
import Drawer from '../components/Drawer.vue';
export default {
    name:'MainApp',
    components:{
        Drawer
    },
    methods:{
        signOut:function(){
            auth.signOut();
            this.$router.replace('/');
        },
        openDrawer:function(){
            this.$refs.drawer.open();
        }
    },
    created(){

    },
    async mounted(){        
        await this.$store.dispatch('setUser');
    }
}
</script>

<style scoped>
    .app-header{
        height: 55px;
        width: 100%;
        background-color: white; 
        display: flex;
        z-index: 1;
        position: relative;
        align-items: center;
        padding: 10px;
    }
    .app-container{
        height: 100vh;
        widows: 100vw;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .bottom-nav{
        height: 65px;
        widows: 100%;
        background-color: #4581C7;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .link-btn{
        display: flex;
        flex-direction: column;
        color: white;
        text-decoration: none;
        font-size: 10px;
    }
    .link-btn img{
        height: 20px;
    }
    .active{
        font-size: 15px;
        transition: .2s;
    }
    .active img{
        transition: .2s;
        height: 28px;
    }
    .menu-icon {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        position: relative;
        transition: 0.2s;
        cursor: pointer;
        -webkit-app-region: no-drag;
    }


    .menu-icon:active {
        background-color: rgba(0, 0, 0, 0.45);
    }

    .icon-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .bar1,
    .bar2,
    .bar3 {
        width: 25px;
        height: 2px;
        background-color: #1E4674;
        margin: 6px 0;
        transition: 0.4s;
    }

</style>