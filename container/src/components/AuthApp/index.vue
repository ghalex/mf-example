<template>
  <div ref="el"></div>
</template>

<script lang="ts">
/// <reference path="../types/index.d.ts" />

import { defineComponent, ref, onMounted } from 'vue'
import { mount } from 'auth/Main'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AuthApp',
  setup () {
    const el = ref(null)
    const router = useRouter()

    onMounted(() => {
      const { onParentNavigate } = mount(el.value, { initialPath: router.currentRoute.value.path })

      router.afterEach((to, from) => {
        onParentNavigate(to, from)
      })
    })
    return { el }
  }
})
</script>

<style>

</style>
