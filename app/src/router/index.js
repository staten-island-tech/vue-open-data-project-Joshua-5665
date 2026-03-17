import { createRouter, createWebHistory } from 'vue-router'
import locationCard from '@/views/locationCard.vue'
import locationData from '@/components/locationData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: locationCard,
    },
    {
      path: '/data/:id',
      name: 'data',
      component: locationData,
    }





  ],
})

export default router
