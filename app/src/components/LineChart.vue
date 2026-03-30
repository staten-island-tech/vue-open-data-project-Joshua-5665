<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  data: Array,
  type: String 
})

const canvasRef = ref(null)
let chartInstance = null

function renderChart() {
  if (!props.data || props.data.length === 0) return

  const labels = props.data.map(item => item.year)

  let values = []
  let label = ''

  // 👇 Decide what to graph
  if (props.type === 'water') {
    values = props.data.map(item =>
      Number(item.nyc_consumption_million_gallons_per_day)
    )
    label = 'Water Consumption (Million Gallons)'
  } else {
    values = props.data.map(item =>
      Number(item.new_york_city_population)
    )
    label = 'Population'
  }

  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(canvasRef.value, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label,
          data: values,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          title: {
            display: true,
            text: label
          }
        }
      }
    }
  })
}

onMounted(renderChart)
watch(
  () => [props.data, props.type],
  () => {
    renderChart()
  },
  { deep: true }
)
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>