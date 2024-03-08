import {createRouter, createWebHistory} from 'vue-router';
 
import AppHome from './pages/AppHome.vue';
import AppProject from './pages/AppProject.vue';

const router = createRouter({

history: createWebHistory(),
routes: [
     {
          path:'/',
          name: 'home' ,
          component: AppHome
     },
     {
          path:'/project',
          name: 'project' ,
          component: AppProject
     }

]

});

export  {router} ;