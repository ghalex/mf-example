<template>
  <div class="logo">
    <img v-if="svg" src="@/assets/images/logo.svg" :style="{ height: `${height}px` }" />
    <img v-else src="@/assets/images/logo-color.png" :style="{ height: `${height}px` }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    svg: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 80
    }
  }
})
</script>

<style></style>
