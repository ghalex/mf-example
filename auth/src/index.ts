import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory, RouterHistory } from 'vue-router'
import Vue3Foundation from 'vue3-foundation'
import App from '@/components/App.vue'
import routes from '@/routes'

import '@/assets/css/main.css'

const mount = (el: Element, options: any) => {
  const history: RouterHistory = options.history || createMemoryHistory()

  const router = createRouter({
    history,
    routes
  })

  router.afterEach((to, from) => {
    if (options.onChildNavigate) {
      options.onChildNavigate(to, from)
    }
  })

  const app = createApp(App)

  app.use(router)
  app.use(Vue3Foundation)
  app.mount(el)

  if (options.initialPath) {
    router.push(options.initialPath)
  }

  return {
    onParentNavigate: (to, from) => {
      if (from.path !== to.path) {
        router.push(to.path)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#__dev-auth')

  if (devRoot) {
    console.log('mount dev root')
    mount(devRoot, { history: createWebHistory() })
  }
}

export { mount }
