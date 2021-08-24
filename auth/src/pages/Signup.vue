<template>
  <div>
    <h2>Signup</h2>
    <router-link to="/login">
    <button>Login</button>
    </router-link>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  setup () {
    onMounted(() => {
      console.log('signup page')
    })
  }
}
</script>

<style>

</style>
