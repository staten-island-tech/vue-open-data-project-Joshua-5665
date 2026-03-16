<template>
  <div>

  </div>
</template>

<script setup>
  import {onMounted, ref, watch} from 'vue'
  import {useRoute} from 'vue-router'

  async function getData {
    const response = await fetch(`https://data.cityofnewyork.us/resource/xi7c-iiu2.json`)
    const data = await response.json()
  }
</script>

<style scoped>

</style>
