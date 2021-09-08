<template>
  <div class="app-page">
    <template v-if="currentUser !== undefined">
      <div class="profile-header">
        <template v-if="currentUser.profile_picture === undefined">
          <div class="initials-bubble">
            <h1>{{currentUser.first_name.charAt(0)}}{{currentUser.last_name.charAt(0)}}</h1>
            <div 
              class="status-inidcator" 
              :style="[currentUser.status === 0? {backgroundColor:'#D14040'} : currentUser.status === 1 ?{backgroundColor:'green'} :{backgroundColor:'#FFCD4B'}]"></div>
          </div>
        </template>
        <template v-else>

        </template>
        <div class="user-information">
          <h3>{{currentUser.first_name}} {{currentUser.last_name}}</h3>
          <h6>{{currentUser.email}}</h6>
        </div>
      </div>
      <div class="status-select">
        <h5>My Status</h5>
        <div class="list-status">
          <div 
            v-for="status of listStatus" 
            :class="{'status-item active': status.id === currentUser.status,'status-item': status.id !== currentUser.status}"  
            :style="[status.id === 0? {backgroundColor:'#D14040'} : status.id === 1 ?{backgroundColor:'green'} :{backgroundColor:'#FFCD4B'}]" 
            @click="setStatus(status.id)"
          >
           <div class="item-container">
              <img :src="require(`../assets/${status.img}`)" height="20"/>
              <p>{{status.desc}}</p>
           </div>
          </div>
        </div>
      </div>
    </template>
    <Loading  ref="loading"/>
  </div>
</template>

<script>
import Loading from '../components/Loader.vue';
import { mapState } from 'vuex';
export default {
    name:'Profile',
    components:{
      Loading
    },
    data(){
      return {
        listStatus: [
          {
            id: 0,
            desc: 'Offline',
            img: 'offline.svg'
          },
          {
            id: 1,
            desc:'Online',
            img: 'online.svg'
          },
          {
            id:2,
            desc:'Away',
            img: 'away.svg'
          }          
        ]
      }
    },
    computed:{
      ...mapState({
        currentUser: state => state.currentUser
      })
    },
    methods:{
      setStatus: function(status){
        this.$store.dispatch('setUserStatus',status)
      }
    }
}
</script>

<style scoped>
  .profile-header{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .initials-bubble{
    height: 120px;
    width: 120px;
    background-color: #4581C7;
    border-radius: 100%;
    position: relative;
  }
  .initials-bubble h1{
    color: white;
    position: relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    text-align: center;
    font-weight: 400;
    font-size: 40px;
  }
 
  .status-inidcator{
    height: 20px;
    width: 20px;
    border-radius: 100%;   
    position: absolute;
    top:80%;
    left: 10%;
  }
  .active{
    background-color: green;
  }
  .status-select{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
   .status-select h5{
     padding:10px 20px;
   }
  .list-status{
    overflow: auto;
    white-space: nowrap;
    padding-left: 20px;
  }
  .status-item{
     display: inline-block;
     height: 35px;
     border-radius: 50px;
     padding:0px 20px;
     margin:5px;
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.45);
     color:white;
     position: relative;
     transition: 0.2s;     
  }
  .status-item:active{
    transform: scale(.95);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.45);
  }
  .status-item.active{
    transform: scale(.95);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.45);
  }
  .item-container p{
    font-size: 12px;
    margin-left: 5px;
  }
  .item-container{
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
  }
</style>