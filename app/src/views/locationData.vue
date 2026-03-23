<template>
    <div>
      <locationCard v-for="kor in loc" :key="kor.cd_number" :loc="kor"/>
    </div>
</template>

<script setup>
  import locationCard from '@/components/locationCard.vue'
  import {onMounted, ref, watch} from 'vue'
  import {useRoute} from 'vue-router'
  const route = useRoute()
  const loc = ref({})
  async function getData(id) { 
    const response = await fetch(`https://data.cityofnewyork.us/resource/xi7c-iiu2.json`)
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