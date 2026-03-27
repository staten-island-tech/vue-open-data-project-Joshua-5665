<template>
  <div style="width: 600px; height: 400px;">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'


ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [42, 75, 60, 90, 55, 110],
      borderColor: '#4F81BD',
      backgroundColor: 'rgba(79, 129, 189, 0.2)',
      tension: 0.4,      // smooth curve
      fill: true,
      pointRadius: 5,
      pointHoverRadius: 7
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Sales Over Time'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
})
</script>