import { createRouter, createWebHistory } from 'vue-router'
import Oboticario from '../views/Oboticario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/oboticario',
      name: 'oboticario',
      component: Oboticario
    }

  ]
})

export default router