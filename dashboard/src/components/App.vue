<template>
  <div class="dashboard-app">
    <router-view />
  </div>
</template>

<script lang="ts">
// import { useAuth } from '@/stores'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardApp',
  setup () {
    // const auth = useAuth()
    // onMounted(async () => {
    //   auth.init()
    // })
  }
})
</script>
