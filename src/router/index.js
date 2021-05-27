import { createRouter, createWebHistory } from 'vue-router'

import index from '../views/index.vue'
import mainContent from '@/components/main-content.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: "",
        component: mainContent,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
