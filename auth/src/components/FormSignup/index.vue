<template>
  <form class="w-full" @submit.prevent="handleSubmit">
    <!-- <div class="flex flex-col sm:flex-row">
      <div class="mb-4 flex-1">
        <label class="text-gray-700 ml-2">Company Name *</label>
        <v-input
          v-model="companyName"
          class="primary w-full"
          type="text"
          placeholder="Name: ex. Empire"
        />
      </div>
    </div>
    <div class="mb-4">
      <label class="text-gray-700 ml-2">Company Type *</label>
      <select class="w-full v-select primary" v-model="companyType">
        <option value="">Select type</option>
        <option value="agency">Agency</option>
        <option value="alt">Alt tip</option>
      </select>
    </div> -->
    <div class="mb-4">
      <label class="text-gray-700 ml-2">Name *</label>
      <v-input v-model="name" class="primary w-full" type="text" placeholder="Name: ex. Yoda" />
    </div>
    <div class="mb-4">
      <label class="text-gray-700 ml-2">Email *</label>
      <v-input
        v-model="email"
        class="primary w-full"
        type="text"
        placeholder="Email: ex. yoda@gmail.com"
      />
    </div>
    <div class="mb-4">
      <label class="text-gray-700 ml-2">Password *</label>
      <v-input
        v-model="password"
        class="primary w-full"
        type="password"
        placeholder="Don't use 1234 :)"
      />
    </div>
    <div class="mb-4">
      <label class="text-gray-700 ml-2">Confirm Password *</label>
      <v-input
        v-model="passwordConfirmation"
        class="primary w-full"
        type="password"
        placeholder="Same as password"
      />
    </div>
    <label class="flex items-center mb-2">
      <v-checkbox class="primary mr-4" v-model="agreeTerms">
        <div class="w-full">
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
      companyName: '',
      companyType: '',
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
        formData.value.companyName.length > 3 &&
        formData.value.agreeTerms &&
        validEmail.value &&
        formData.value.password.length > 3
      )
    })

    function handleSubmit () {
      emit('signup', { ...formData.value, email: formData.value.email.toLowerCase() })
    }

    return { formData, validEmail, valid, handleSubmit }
  }
})
</script>
