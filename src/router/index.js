import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';
import MainApp from '../views/MainApp.vue';
import {auth} from  '../extensions/Firebase';

const routes = [
  {
    path: '/',
    name: "Login" ,
    component: Login,
    beforeEnter:(to,from,next)=>{
      console.log(auth.currentUser);
      if(auth.currentUser === null || auth.currentUser === undefined){
        next();
      }else{
        next("/Chatly")
      }
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
      
    ],
    beforeEnter:(to,from,next)=>{
      console.log(auth.currentUser);
      if(auth.currentUser){
        next();
      }else{
        next("/")
      }
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
