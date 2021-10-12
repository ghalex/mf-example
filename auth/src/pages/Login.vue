<template>
  <div class="layout-full layout-gray flex-col">
    <Panel :error="error">
      <form-login :loading="loading" @login="onLogin" />
    </Panel>
  </div>
</template>

<script lang="ts">
import * as api from '@/api'
import { defineComponent } from 'vue'
import { usePromise } from 'vue-composable'
import { FormLogin, Panel } from '@/components'
import { useRouter } from 'vue-router'
import { LoginData } from '@/types'

export default defineComponent({
  name: 'LoginPage',
  components: { FormLogin, Panel },
  setup () {
    const router = useRouter()
    const { exec, error, loading } = usePromise((data: LoginData) => api.signIn(data), { lazy: true })

    async function onLogin (data: LoginData) {
      exec(data).then(() => {
        if (!error) {
          router.push('/')
        }
      })
    }

    return { loading, error, onLogin }
  }
})
</script>
