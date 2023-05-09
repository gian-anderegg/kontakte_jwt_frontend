import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/kontakte.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/liste',
      name: 'Kontaktliste',
      component: HomeView
    },
    {
      path: '/liste',
      name: 'Kontaktliste',
      component: () => import('../views/liste.vue')
    },
    {
      path: '/kontakte',
      name: 'Kontakt hinzufügen',
      component: () => import('../views/kontakte.vue')
    },
    {
      path: '/kontakte/:kid?',
      name: 'Kontakt hinzufügen',
      component: () => import('../views/kontakte.vue')
    }
  ]
})

export default router
