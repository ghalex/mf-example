<template>
  <div>
    <div class="flex">
      <div>Go To Login:</div>
      <button @click="onClick">Click me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    function onClick () {
      router.push('/login')
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
