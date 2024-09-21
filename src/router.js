import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@pages/HomePage.vue'
import NotFoundPage from '@pages/NotFoundPage.vue'

const routes = [
  {
    path: '/:lang(en|es)?',
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

export default router;
