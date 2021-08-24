import { RouteRecordRaw } from 'vue-router'

import HomePage from '@/pages/Home.vue'
import ContactPage from '@/pages/Contact.vue'
import AuthPage from '@/pages/Auth.vue'

const routes: Array<RouteRecordRaw> = [{
  path: '/',
  name: 'home',
  component: HomePage
}, {
  path: '/contact',
  name: 'contact',
  component: ContactPage
}, {
  path: '/login',
  name: 'login',
  component: AuthPage
}, {
  path: '/signup',
  name: 'signup',
  component: AuthPage
}]

export default routes
