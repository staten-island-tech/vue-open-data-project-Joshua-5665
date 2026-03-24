<template>
    <div>
       <label>Select Year:
       <select v-model="selected">
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
       </select>
    </label>
      <locationCard v-for="kor in loc" :key="kor.cd_number" :loc="kor"/>
    </div>
</template>

<script setup>
  import locationCard from '@/components/locationCard.vue'
  import {onMounted, ref, watch} from 'vue'
  import {useRoute} from 'vue-router'
  const selected = ref("2024")
  const route = useRoute()
  const loc = ref({})
  async function getData(id) { 
    const response = await fetch(`https://data.cityofnewyork.us/resource/ia2d-e54m.json`)
    const data = await response.json()
    loc.value = data
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