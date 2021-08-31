<template>
  <div class="layout-full flex-col">
    <Panel>
      <form-login :loading="false" @login="onLogin" />
    </Panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useRouter } from 'vue-router'
import { FormLogin, Panel } from '@/components'

export default defineComponent({
  name: 'LoginPage',
  components: { FormLogin, Panel },
  setup () {
    // const router = useRouter()
    // const auth = useAuth()

    async function onLogin () {
      // const { error } = await auth.login(data)
      // if (!error) router.push('/')
    }

    return { onLogin }
  }
})
</script>
