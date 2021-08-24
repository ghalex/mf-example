import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/components/App.vue'
import routes from '@/routes'

import '@/assets/css/main.css'

function start () {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

start()
