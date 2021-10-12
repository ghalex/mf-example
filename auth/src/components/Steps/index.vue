<template>
  <div class="steps">
    <div class="relative flex items-center" :style="{ width }">
      <div class="line-container">
        <div class="line bg-gray-300" :style="{ width: '100%' }"></div>
        <div class="line bg-purple-500" :style="{ width: lineWidth }"></div>
      </div>
      <div class="steps-container flex-1">
        <div
          class="step bg-gray-300"
          v-for="(step, idx) in steps"
          :key="idx"
          :class="{
            'bg-purple-500': currentStep >= idx,
            'hover:bg-purple-700': currentStep >= idx,
            'cursor-pointer': currentStep >= idx
          }"
          @click="() => handleStepClick(idx)"
        >
          <div class="step-icon"></div>
          <div class="step-label">{{ step }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'steps',
  props: {
    steps: { type: Array as () => string[], default: () => [] },
    widthPerStep: { type: Number, default: 80 },
    currentStep: { type: Number, default: 0 }
  },
  setup (props, { emit }) {
    const width = computed(() => props.steps.length * props.widthPerStep + 'px')
    const lineWidth = computed(() => (100 / (props.steps.length - 1)) * props.currentStep + '%')

    const handleStepClick = (step: number) => {
      if (step <= props.currentStep) {
        emit('step-click', step)
      }
    }

    return { width, lineWidth, handleStepClick }
  }
})
</script>

<style scoped>
.steps {
  @apply bg-white shadow h-20 flex items-center justify-center px-2 pb-3;

  position: fixed;
  left: 0;
  right: 0;
  min-height: 40px;
  z-index: 1;
}

.steps-container {
  @apply flex justify-between;
}

.step {
  @apply relative rounded-full flex items-center justify-center;
  width: 22px;
  height: 22px;
}

.step-icon {
  @apply bg-white rounded-full;
  width: 8px;
  height: 8px;
}

.step-label {
  @apply text-xs absolute;
  top: 24px;
}

.line-container {
  position: absolute;
  height: 4px;
  left: 1px;
  position: absolute;
  right: 1px;
}

.line {
  position: absolute;
  height: 4px;
  left: 0px;
  right: 0px;
}
</style>
