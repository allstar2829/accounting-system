import { createRouter, createWebHistory } from 'vue-router'

import store from "../store";

import index from '../views/index.vue'
import login from '../views/login.vue'

import contentDashBoard from '@/components/content-dash-board'
import contentForm from '@/components/content-form'
import contentProcess from '@/components/content-process'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
      {
        path: "",
        component: contentDashBoard
        // component: () => import('@/components/content-dash-board.vue'),
      },
      {
        path:'content-form',
        component: contentForm
        // component: () => import('@/components/content-form.vue'),
      },
      {
        path:'content-process',
        component: contentProcess
        // component: () => import('@/components/content-process.vue')
      },
    ],
    meta: { requireAuth: true },
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!store.state.userData) { 
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requireAuth)) {
//     if(to.name !== 'login && !isAuthenticated'){
//       next({name:'login'});
//     }
//   }
// });

export default router
