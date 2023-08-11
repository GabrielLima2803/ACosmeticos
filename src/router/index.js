import { createRouter, createWebHistory } from 'vue-router'
import OboticarioView from '../views/OboticarioView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/oboticario',
      name: 'oboticario',
      component: OboticarioView
    }
  ]
})

export default router