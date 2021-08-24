<template>
  <div>
    <h2>Login</h2>
    <router-link to="/signup">
      <button>Sign-up</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  setup () {
    onMounted(() => {
      console.log('login page')
    })
  }
})
</script>

<style>

</style>
