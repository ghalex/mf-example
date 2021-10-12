<template>
  <div class="layout layout-gray flex-col  items-center">
    <steps :steps="stepsTitle" :currentStep="currentStep" />
    <div class="max-w-screen-md mt-24 px-4 w-full">
      <step-signup v-if="currentStep === 0" @next="onSignup" :error="error" :loading="loading" />
      <step-project v-if="currentStep === 1" @next="onProject" :error="error" :loading="loading" />
      <step-summary v-if="currentStep === 2" />
    </div>
  </div>
</template>

<script lang="ts">
import * as api from '@/api'
import { defineComponent, ref, computed } from 'vue'
import { Steps, StepSignup, StepProject, StepSummary } from '@/components'
import { useRouter } from 'vue-router'
import { usePromise } from 'vue-composable'

export default defineComponent({
  name: 'SignupPage',
  components: { Steps, StepSignup, StepSummary, StepProject },
  props: {
    step: {
      type: String
    }
  },
  setup (props) {
    const router = useRouter()
    const stepsTitle = ref(['Account', 'Project', 'Finish'])
    const currentStep = computed(() => {
      const param = props.step ? props.step : '0'
      return parseInt(param) - 1
    })

    const { exec: register, error: registerError } = usePromise((data) => api.register(data), { lazy: true })
    const { exec: createProject, error: projectError } = usePromise((data) => api.createProject(data), { lazy: true })
    const error = computed(() => registerError.value || projectError.value)
    const loading = ref(false)

    async function onSignup (data) {
      loading.value = true
      register(data).then(() => {
        loading.value = false
        if (!registerError) {
          router.push('/signup/2')
        }
      })
    }

    async function onProject (data) {
      const user = api.currentUser()

      if (user) {
        loading.value = true
        createProject(data).then(() => {
          loading.value = false
          if (!projectError) {
            router.push('/signup/3')
          }
        })
      }
    }

    return { stepsTitle, currentStep, loading, error, onSignup, onProject }
  }
})
</script>
