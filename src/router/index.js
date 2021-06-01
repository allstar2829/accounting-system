import { createRouter, createWebHistory } from 'vue-router'

import store from "../store";

import index from '../views/index.vue'
import login from '../views/login.vue'

import contentDashBoard from '@/components/content-dash-board'
import contentForm from '@/components/content-form'
import contentProcess from '@/components/content-process'

import formMainContent from '@/components/form-main-content'
import formAccountInfo from '@/components/form-account-info'
import formEmpOrReimbursement from '@/components/form-emp-or-reimbursement'
import formVendorCompanyCard from '@/components/form-vendor-company-card'


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
      },
      {
        path:'content-form',
        component: contentForm,
        children:[
          {
            path:'',
            component:formMainContent,
          },
          {
            path:'/content-form/form-account-info',
            component:formAccountInfo,
          },
          {
            path:'/content-form/form-emp-or-reimbursement',
            component:formEmpOrReimbursement,
          },
          {
            path:'/content-form/form-vendor-company-card',
            component:formVendorCompanyCard,
          }
        ],
      },
      {
        path:'content-process',
        component: contentProcess
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
