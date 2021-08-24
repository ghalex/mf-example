import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory, RouterHistory } from 'vue-router'
import App from '@/components/App.vue'
import routes from '@/routes'

import '@/assets/css/main.css'

const mount = (el: Element, options: any) => {
  const history: RouterHistory = options.history || createMemoryHistory()

  const router = createRouter({
    history,
    routes
  })

  // router.afterEach((to, from) => {
  //   console.log('listen', to)
  // })

  const app = createApp(App)

  app.use(router)
  app.mount(el)

  if (options.initialPath) {
    router.push(options.initialPath)
  }

  return {
    onParentNavigate: (to, from) => {
      if (from.path !== to.path) {
        router.push(to.path)
        console.log('change path')
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
