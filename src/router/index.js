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
      name: 'project',
      component: () => import('../views/projectView.vue')
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('../views/aboutView.vue')
    },

    // Rotas de cada membro

    {
      path: '/developers/Ana',
      name: 'Ana',
      component: () => import('../views/devsViews/devAnaView.vue')
    },
    {
      path: '/developers/Isabelli',
      name: 'Isabelli',
      component: () => import('../views/devsViews/devIsabelliView.vue')
    },
    {
      path: '/developers/Julia',
      name: 'Julia',
      component: () => import('../views/devsViews/devJuliaView.vue')
    },
    {
      path: '/developers/Juliana',
      name: 'Juliana',
      component: () => import('../views/devsViews/devJulianaView.vue')
    },
    {
      path: '/developers/Rafaela',
      name: 'Rafaela',
      component: () => import('../views/devsViews/devRafaelaView.vue')
    },
    {
      path: '/developers/Vinicius',
      name: 'Vinicius',
      component: () => import('../views/devsViews/devViniciusView.vue')
    },

    // Rotas de cada projeto

    {
      path: '/projetos/TPInterativa',
      name: 'TPInterativa',
      component: () => import('../views/projectsViews/projectTPInterativaView.vue')
    },
    {
      path: '/projetos/Poeirao',
      name: 'Poeirao',
      component: () => import('../views/projectsViews/projectPoeiraoView.vue')
    },
    {
      path: '/projetos/Arthisto',
      name: 'Arthisto',
      component: () => import('../views/projectsViews/projectArthistoView.vue')
    },
    {
      path: '/projetos/FabricaClass',
      name: 'FabricaClass',
      component: () => import('../views/projectsViews/projectFabricaClassView.vue')
    },
    {
      path: '/projetos/FabricaNode',
      name: 'FabricaNode',
      component: () => import('../views/projectsViews/projectFabricaNodeView.vue')
    },
  ]
})

export default router
