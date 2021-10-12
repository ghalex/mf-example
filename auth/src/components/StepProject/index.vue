<template>
  <div>
    <div class="panel-signup items-center flex-col py-16 px-12 text-center">
      <div class="text-4xl leading-none mb-4">Create your <b>project</b></div>
      <p class="text-white text-lg font-light max-w-lg">Before we start 😜 let's create your first project.</p>
    </div>
    <div v-if="error" class="rounded p-2 sm:p-4 mt-4 bg-red-200 text-red-700 -mb-2">
      {{ error }}
    </div>
    <div class="panel p-4 sm:p-8" :class="{ 'mt-4': !error }">
      <form-project :loading="loading" @data="handleSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormProject from '../FormProject/index.vue'

export default defineComponent({
  name: 'StepProject',
  props: {
    error: String,
    loading: Boolean
  },
  components: { FormProject },
  methods: {
    handleSubmit (data: any) {
      this.$emit('next', data)
    }
  }
})
</script>

<style scoped>
.panel-signup {
  @apply flex rounded-lg overflow-hidden shadow-md bg-purple-700 text-white;
  background-image: url('~@/assets/images/tra-bg-2.png');
  background-repeat: no-repeat;
}
</style>
