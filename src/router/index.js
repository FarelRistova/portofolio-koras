import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
]

const router = createRouter({  // <-- Ini yang hilang
  history: createWebHistory(),
  routes
})

export default router