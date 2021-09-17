import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';
import MainApp from '../views/MainApp.vue';
import Contacts from '../views/Contacts.vue';
import Profile from '../views/Profile.vue';
import Notifications from '../views/Notifications.vue';
import {auth} from  '../extensions/Firebase';


const routes = [
  {
    path: '/',
    name: "Login" ,
    component: Login,
    beforeEnter:(to,from,next)=>{

      auth.onAuthStateChanged((user)=>{
        console.log(user);
        if(!user){
          next()
        }else{
          next('/Chatly');
        }
      });
    }
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component:CreateAccount
  },
  {
    path: '/Chatly',
    name:'Chatly',
    component: MainApp,
    children:[
      {
        path: '',
        redirect:'/Chatly/Contacts'
      },{
        path:'Contacts',
        name:'Contacts',
        component: Contacts
      },
      {
        path:'Profile',
        component: Profile
      },
      {
        path:'Notifications',
        component: Notifications
      }
    ],
    beforeEnter:(to,from,next)=>{
      auth.onAuthStateChanged((user)=>{
        if(!user){
          next("/")
        }else{
          next();
        }
      });

    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
