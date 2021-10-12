<template>
  <form class="w-full" @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label class="text-gray-700 ml-2">Name *</label>
      <v-input v-model="formData.name" class="primary w-full" type="text" placeholder="Name: ex. Yoda" />
    </div>
    <div class="mb-4">
      <label class="text-gray-700 ml-2">Email *</label>
      <v-input
        v-model="formData.email"
        class="primary w-full"
        type="text"
        placeholder="Email: ex. yoda@gmail.com"
      />
    </div>
    <div class="flex items-stretch">
      <div class="mb-4 mr-4 flex-1">
        <label class="text-gray-700 ml-2">Password *</label>
        <v-input
          v-model="formData.password"
          class="primary w-full"
          type="password"
          placeholder="Don't use 1234 :)"
        />
      </div>
      <div class="mb-4 flex-1">
        <label class="text-gray-700 ml-2">Confirm Password *</label>
        <v-input
          v-model="formData.passwordConfirmation"
          class="primary w-full"
          type="password"
          placeholder="Same as password"
        />
      </div>
    </div>
    <label class="flex items-center mb-2">
      <v-checkbox class="primary mr-4" v-model="formData.agreeTerms">
        <div class="w-full ml-1">
          I agree to the TesaHRa
          <a href="#" target="_blank">terms conditions</a>
          and
          <a href="#" target="_blank">privacy policy</a>
        </div>
      </v-checkbox>
    </label>
    <div class="mt-4">
      <v-button class="primary btn-signup" :disabled="!valid" :class="{ loading }">
        Sign-up Now
      </v-button>
    </div>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormSignup',
  props: {
    loading: Boolean
  },
  setup (_, { emit }) {
    const formData = ref({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      agreeTerms: false,
      joinNewsletter: true
    })

    const validEmail = computed(() => {
      const exp = /\S+@\S+\.\S+/
      return exp.test(formData.value.email)
    })

    const valid = computed(() => {
      return (
        formData.value.agreeTerms &&
        formData.value.name.length > 3 &&
        formData.value.password.length > 3 &&
        validEmail.value
      )
    })

    function handleSubmit () {
      emit('signup', { ...formData.value, email: formData.value.email.toLowerCase() })
    }

    return { formData, validEmail, valid, handleSubmit }
  }
})
</script>
