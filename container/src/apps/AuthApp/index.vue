<template>
  <div ref="el"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { mount } from 'auth/Main'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AuthApp',
  setup () {
    const el = ref(null)
    const router = useRouter()

    onMounted(() => {
      if (el.value) {
        const { onParentNavigate } = mount(
          el.value,
          {
            initialPath: router.currentRoute.value.path,
            onChildNavigate: (to, from) => {
              if (to.path !== from.path) {
                router.push(to.path)
              }
            }
          }
        )

        router.afterEach((to, from) => {
          onParentNavigate(to, from)
        })
      }
    })
    return { el }
  }
})
</script>

<style>

</style>
