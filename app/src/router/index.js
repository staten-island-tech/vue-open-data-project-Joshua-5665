import { createRouter, createWebHistory } from 'vue-router'
import DataData from '@/views/DataData.vue'
import locationCard from '@/components/locationCard.vue'
import locationData from '@/views/locationData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DataData,
    },
    {
      path: '/data/:id',
      name: 'data',
      component: locationData,
    }





  ],
})

export default router
