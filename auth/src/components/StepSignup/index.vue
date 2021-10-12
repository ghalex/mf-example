<template>
  <div>
    <div class="panel-signup items-center flex-col py-16 px-12 text-center bg-panel">
      <h1 class="leading-none mb-4">Welcome to <b>ZapAnt</b></h1>
      <p class="text-white text-lg font-light">Hi 👋! We are very happy to meet you.</p>
    </div>
    <div v-if="error" class="panel p-2 sm:p-4 mt-4 bg-red-200 text-red-700 -mb-2">
      {{ error }}
    </div>
    <div class="panel p-4 sm:p-8" :class="{ 'mt-4': !error }">
      <form-signup :loading="loading" @signup="handleSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormSignup from '../FormSignup/index.vue'
import { SignupData } from '@/types'

export default defineComponent({
  name: 'StepSignup',
  props: {
    error: String,
    loading: Boolean
  },
  components: { FormSignup },
  methods: {
    handleSubmit (data: SignupData) {
      this.$emit('next', data)
    }
  }
})
</script>

<style scoped>
.panel-signup {
  @apply flex rounded-lg overflow-hidden shadow-md bg-purple-800 text-white;
}
</style>
