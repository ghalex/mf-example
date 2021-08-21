import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/Home.vue'

const routes: Array<RouteRecordRaw> = [{
  path: '/',
  name: 'home',
  component: HomePage
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
