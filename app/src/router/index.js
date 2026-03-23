import { createRouter, createWebHistory } from 'vue-router'
import locationData from '@/views/locationData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: locationData,
    }
  ],
})

export default router
