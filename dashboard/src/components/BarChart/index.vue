<template>
  <Responsive class="bar-chart bg-white rounded shadow">
    <template #main="{ width }">
      <div>
        <div class="px-6 py-4">
          <h3>{{ title }}</h3>
        </div>
        <Chart :size="{ width, height }" :data="data" :axis="axis" :margin="margin">
          <template #layers>
            <Grid strokeDasharray="3,3" :hideX="true" :center="false" />
            <HoverBar :barStyle="{ fill: '#ddd6fe', 'fill-opacity': 0.2 }" />
            <Bar :dataKeys="dataKeys" :barStyle="{ fill: '#ddd6fe' }" />
            <Marker
              v-if="avg > 0"
              :value="avg"
              :label="`Mean: ${avg} ${dataKeys[1]}`"
              color="#6b46c1"
            />
          </template>
          <template #widgets>
            <Tooltip
              color="#6b47c0"
              :hideLine="true"
              :config="{
                date: { format }
              }"
            />
          </template>
        </Chart>
      </div>
    </template>
  </Responsive>
</template>

<script lang="ts">
import * as r from 'ramda'
import * as ra from 'ramda-analytics'

import dayjs from 'dayjs'
import { defineComponent, ref, computed } from 'vue'
import { Responsive, Chart, Bar, Grid, Tooltip, HoverBar, Marker } from 'vue3-charts'

export default defineComponent({
  name: 'BarChart',
  props: {
    title: {
      type: String
    },
    data: {
      type: Array as () => any[],
      default: () => []
    },
    dataKeys: {
      type: Array as () => string[],
      default: () => ['date', 'value']
    },
    unit: {
      type: String as () => 'day' | 'month',
      default: 'day'
    },
    height: {
      type: Number,
      default: 280
    }
  },
  components: { Responsive, Chart, Bar, Grid, Tooltip, HoverBar, Marker },
  setup (props) {
    const format = (val: string) => dayjs(val).format(props.unit === 'day' ? 'DD MMM' : 'MMM YYYY')
    const margin = ref({
      left: -41,
      top: 0,
      right: -1,
      bottom: 20
    })

    const avg = computed(() => {
      return Math.round(r.mean(ra.getCol(props.dataKeys[1], props.data))) || -1
    })

    // const tickValues = ref([])
    const axis = computed(() => {
      let tickValues = ra.getCol('date', props.data)

      if (tickValues.length > 14) {
        tickValues = r.addIndex(r.filter)((_, idx) => idx % 2 !== 0, tickValues)
      }

      return {
        primary: {
          type: 'band',
          format: (val: string) => {
            return dayjs(val).format(props.unit === 'day' ? 'DD' : 'MMM')
          },
          tickValues
        },
        secondary: {
          domain: ['dataMin', 'dataMax + Math.ceil(dataMax * 0.2)'],
          type: 'linear',
          ticks: 8
        }
      }
    })

    return { axis, margin, format, avg }
  }
})
</script>

<style>
.layer-axis-x path,
.layer-axis-x g line {
  stroke: theme('colors.gray.300');
}

.layer-axis-x g text {
  font-size: 14px;
  fill: theme('colors.gray.500');
}

.tooltip-line-horizontal,
.tooltip-line-vertical {
  background-color: theme('colors.purple.700') !important;
}
</style>
