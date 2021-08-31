<template>
  <div class="w-full max-w-screen-md">
      <div
        class="
          mx-2
          bg-red-200
          text-red-700
          p-4
          pt-3
          rounded-t-lg
          transition-all
          capitalize
          opacity-0
          text-center
        "
        :class="{ 'opacity-100': error }"
      >
        <i class="fas fa-exclamation-circle opacity-75 mr-2"></i>
        {{ error }}
      </div>
      <div class="panel flex-col mx-2 -mt-2 sm:flex-row">
        <div class="bg-white flex-1 p-8 text-gray-800 flex flex-col justify-between">
          <div>
            <Logo />
            <h1 class="font-thin leading-none mt-6">Welcome to</h1>
            <h1 class="font-bold text-primary-600 leading-snug">TesaHRa</h1>
          </div>
          <div class="mt-6">
            Forgot your password ? No problem reset it
            <router-link to="/resetPassword">here.</router-link>
          </div>
        </div>
        <div class="bg-gray-100 border-l border-gray-200 flex-1 p-8 flex items-center">
          <slot />
        </div>
      </div>
      <slot name="footer">
        <div class="mt-4 text-center">
          Don't have an account yet?
          <router-link to="/signup">Sign up here</router-link>
        </div>
      </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '../Logo/index.vue'

export default defineComponent({
  components: { Logo },
  props: {
    error: {
      type: String,
      required: false
    }
  }
})
</script>

<style>

</style>
