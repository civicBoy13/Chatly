import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';
import MainApp from '../views/MainApp.vue';

const routes = [
  {
    path: '/',
    name: "Login" ,
    component: Login
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
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
