<template>
  <div class="home-page">
    <div class="flex">
      <div>Go To Login:</div>
      <Button @click="onClick">Click me</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@/components'

export default {
  components: { Button },
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
