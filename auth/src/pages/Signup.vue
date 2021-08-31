<template>
  <div class="layout-full flex-col">
    <Panel>
      <template #default>
        <form-signup :loading="false" @signup="onSignup" />
      </template>
      <template #footer>
        <div class="mt-4 text-center">
          Already have an account?
          <router-link to="/login">Log in here</router-link>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FormSignup, Panel } from '@/components'

export default defineComponent({
  name: 'SignupPage',
  components: { FormSignup, Panel },
  setup () {
    // const router = useRouter()
    // const auth = useAuth()

    async function onSignup () {
      // data.ref = referrer.ref
      // data.refUrl = referrer.refUrl
      // const { error } = await auth.register(data)
      // if (!error) {
      //   router.push('/')
      // }
    }

    return { onSignup }
  }
})
</script>
