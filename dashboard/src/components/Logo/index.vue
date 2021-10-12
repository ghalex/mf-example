<template>
  <div class="logo">
    <img src="@/assets/images/logo.svg" :style="{ height: `${height}px` }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    height: {
      type: Number,
      default: 80
    }
  }
})
</script>

<style></style>
