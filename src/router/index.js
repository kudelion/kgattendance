import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [ 
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView,
  },
  {
    // path: '/AboutView',
    // name: 'AboutView',
    // component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/StudentView',
    name: 'StudentView',
    component: () => import('../views/StudentView.vue')
  },
  {
    path: '/TestingPage',
    name: 'TestingPage',
    component: () => import('../components/TestingPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
