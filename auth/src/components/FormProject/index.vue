<template>
  <form class="w-full" @submit.prevent="handleSubmit">
    <div class="mb-4 flex-1">
      <label class="text-gray-700 ml-2">Project Name *</label>
      <v-input v-model="data.name" class="primary w-full" type="text" placeholder="ex. Google" />
    </div>

    <div class="mb-4 flex-1">
      <label class="text-gray-700 ml-2">URL *</label>
      <div class="flex">
        <v-button class="primary rounded-r-none border-r" >https://</v-button>
        <v-input class="primary rounded-l-none w-full" v-model="data.url" type="text" placeholder="ex. google.com" />
      </div>
      <label class="mt-2 ml-2 block text-gray-700">
        The domain that you will embed ZapAnt on <i>(including subdomain)</i>
      </label>
    </div>
    <div>
      <v-button class="btn-project primary" :disabled="!valid" :class="{ loading }">Create Project</v-button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  name: 'FormProject',
  components: {},
  props: {
    loading: Boolean
  },
  setup (_, { emit }) {
    const data = reactive({
      name: '',
      url: ''
    })

    const valid = computed(() => {
      return data.name.length > 3 && data.url.length > 3
    })

    function handleSubmit () {
      emit('data', data)
    }

    return { data, valid, handleSubmit }
  }
})
</script>
