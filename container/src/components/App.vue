<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
// import { useAuth } from '@/stores'
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    // const auth = useAuth()
    // onMounted(async () => {
    //   auth.init()
    // })
  }
})
</script>
