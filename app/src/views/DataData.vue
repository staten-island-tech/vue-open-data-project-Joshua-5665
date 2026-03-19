<template>
    <div class="box">
        <h2>yo</h2>
        <LocationCard/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LocationCard from '@/components/locationCard.vue';
const car = ref([])

async function getData() {
    try {
    const response = await fetch('https://data.cityofnewyork.us/resource/xi7c-iiu2.json')
    const data = await response.json()
    car.value = data.results
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getData()
})
</script>
<style scoped>
    .box {
        width: 100px;
        height: 1000px;
        background-color: blue;
    }
</style>