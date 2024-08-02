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
      path: '/developers',
      name: 'developers',
      component: () => import('../views/developersView.vue')
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('../views/projectView.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/aboutView.vue')
    },
    {
      path: '/developers/:id',
      name: 'developersMembro',
      component: () => import('../views/developersMembroView.vue'),
      params: true
    },
    {
      path: '/projetos/:id',
      name: 'projetosInfo',
      component: () => import('../views/projectsInfoView.vue'),
      params: true
    }
  ]
})

export default router
