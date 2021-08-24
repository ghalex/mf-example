import { RouteRecordRaw } from 'vue-router'
import { LoginPage, SignupPage } from '@/pages'

const routes: Array<RouteRecordRaw> = [{
  path: '/login',
  name: 'login',
  component: LoginPage
}, {
  path: '/signup',
  name: 'signup',
  component: SignupPage
}]

export default routes
