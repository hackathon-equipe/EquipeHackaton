import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/developers/:id',
      name: 'developers',
      component: () => import('../views/developersView.vue')
    },
    {
      path: '/projetos',
      name: 'project',
      component: () => import('../views/projectView.vue')
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('../views/aboutView.vue')
    }
  ]
})

export default router
