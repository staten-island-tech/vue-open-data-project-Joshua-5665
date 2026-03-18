<template>
    <div>
      <h2>{{ car.cd_name }}</h2>
    </div>
</template>

<script setup>
  import {onMounted, ref, watch} from 'vue'
  import {useRoute} from 'vue-router'
  const route = useRoute()
  const car = ref({})
  async function getData(id) {
    const response = await fetch(`https://data.cityofnewyork.us/resource/xi7c-iiu2.json${id}`)
    const data = await response.json()
    car.value = data
  }
  onMounted(function() {
    getData(route.params.id)
  })
  watch(
    ()=> route.params.id,
    function(id) {
      getData(id)
    },
  )
</script>

<style scoped>

</style>