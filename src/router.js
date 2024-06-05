import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import NotFoundPage from './components/NotFoundPage.vue'


const routes = [
  {
    path: '/',
    component: HomePage,
    alias: '/en',
  },
  {
    path: '/es',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
