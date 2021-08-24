<template>
  <div class="auth-page">
    <div>
      <router-link to="/">Go Home</router-link>
      <router-link to="/login">Go Login</router-link>
      <router-link to="/signup">Go Signup</router-link>
    </div>
    <div class="auth-frontend">
      <h2>Another h2</h2>
      <div>
        <Button>Blue Button</Button>
      </div>
      <AuthApp />
    </div>
  </div>
</template>

<script lang="ts">
import { AuthApp, Button } from '@/components'

export default {
  components: { AuthApp, Button },
  setup () {
    return { }
  }
}
</script>

<style scoped>
.auth-frontend {
  margin: 16px;
  border: 1px solid red;
}
</style>
