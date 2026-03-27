<template>
    <div>
       <label placeholder="Select Year">Select Year:
       <select class="years" v-model="selected">
        <option value="2024">{{ selected }}</option>
       </select>
    </label>
      <locationCard v-for="kor in loc" :key="kor.year" :loc="kor"/>
    </div>
</template>

<script setup>
  import locationCard from '@/components/locationCard.vue'
  import {onMounted, ref, watch} from 'vue'
  import {useRoute} from 'vue-router'

  const selected = ref("2024");


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
.years {
  font-size: 15px;
  overflow-y: scroll;
}
</style>