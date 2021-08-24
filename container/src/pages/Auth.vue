<template>
  <div>
    <div>
      <router-link to="/">Go Home</router-link>
      <router-link to="/login">Go Login</router-link>
      <router-link to="/signup">Go Signup</router-link>
    </div>
    <div class="auth-frontend">
      <AuthApp />
    </div>
  </div>
</template>

<script lang="ts">
import { AuthApp } from '@/components'

export default {
  components: { AuthApp },
  setup () {
    function onClick () {
      // history.push('/login')

      console.log('history to login')
    }

    return { onClick }
  }
}
</script>

<style scoped>
.auth-frontend {
  margin: 16px;
  border: 1px solid red;
}
</style>
