<template>
  <form class="w-full" @submit.prevent="login">
    <div class="mb-4">
      <label class="text-gray-700">Email:</label>
      <v-input v-model="email" class="w-full primary" type="text" placeholder="Your email" />
    </div>
    <div class="mb-4">
      <label class="text-gray-700">Password:</label>
      <v-input v-model="password" class="w-full primary" type="password" placeholder="Password" />
    </div>
    <div>
      <v-button class="primary" :style="{ width: '150px' }" :disabled="!valid" :class="{ loading }">
        Login
      </v-button>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'FormLogin',
  props: {
    loading: Boolean
  },
  setup (_, { emit }) {
    const email = ref('')
    const password = ref('')

    const valid = computed(() => {
      return password.value.length > 3 && email.value.length > 3
    })

    function login () {
      const data = { email: email.value.toLowerCase(), password: password.value }
      emit('login', data)
    }

    return { email, password, valid, login }
  }
})
</script>

<style></style>
