<template>
  <div class="auth-page">
    <AuthApp />
  </div>
</template>

<script lang="ts">
import { AuthApp } from '@/apps'

export default {
  components: { AuthApp },
  setup () {
    return { }
  }
}
</script>

<style scoped>
</style>
