import { RouteRecordRaw } from 'vue-router'
import { DashboardPage } from '@/pages'

const routes: Array<RouteRecordRaw> = [{
  path: '/dashboard',
  name: 'dashboard',
  component: DashboardPage
}]

export default routes
