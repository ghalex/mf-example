<template>
  <div class="layout">
    <div class="grid lg:grid-cols-2 gap-2 mt-4">
        <bar-chart
          :title="`New Users`"
          :unit="dashboard.unit"
          :data="dashboard.newUsers"
          :dataKeys="['date', 'users']"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BarChart } from '@/components'
import { useDashboard } from '@/stores'

export default defineComponent({
  name: 'DashboardPage',
  components: { BarChart },
  setup () {
    const dashboard = useDashboard()

    return { dashboard }
  }
})
</script>
