<template>
    <div>
      <h2>NYC Water Consumption</h2>
       <label>Select Year:
       <select class="years" v-model="selected">
        <option disabled value= ''>Select a Year</option>
        <option v-for="year in years">{{ year }}</option>
       </select>
    </label>
      <locationCard v-for="loc in times" :loc="loc"/>
    </div>
</template>

<script setup>
  import locationCard from '@/components/locationCard.vue'
  import {onMounted, ref, watch, computed} from 'vue'
  import {useRoute} from 'vue-router'

  const times = computed(() => {
    return loc.value.filter((loc) => loc.year === selected.value)
    })

const selected = ref('')

const years = []

let currentYear = 2025

while(currentYear >= 1961) {
  currentYear--
  years.push(currentYear)
}

  const route = useRoute()
  const loc = ref([])
  async function getData() { 
    const response = await fetch(`https://data.cityofnewyork.us/resource/ia2d-e54m.json`)
    const data = await response.json()
    loc.value = data
  }
  onMounted(function() {
    getData(route.params)
  })
  watch(
    ()=> route.params,
    function() {
      getData()
    },
  )

  

</script>

<style scoped>
.years {
  font-size: 15px;
  overflow-y: scroll;
}
</style>