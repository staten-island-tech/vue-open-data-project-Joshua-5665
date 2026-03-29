<template>
      <div class="years">
      </div>
    <router-link :to="dataPath" class="card">
        <p>Population: {{ loc.new_york_city_population }}</p>
        <p>Gallons of Water Consumed Daily in Millions: {{ loc.nyc_consumption_million_gallons_per_day }}</p>
        <p>Per Capita Gallons per Person per Day: {{ loc.per_capita_gallons_per_person_per_day }}</p>
    </router-link>
</template>

<script setup>
    import { computed, ref } from 'vue'
    const props = defineProps({
        loc: {
            type: Object,
            required: true,
        },
    })
    const dataPath = computed(()=> {
        return `/data/${props.loc.year}`
    })
</script>

<style scoped>
.card{
    height: 200px;
    width: 32%;
    display: flex;
    flex-direction: column;
    background-color: rgb(228, 255, 223);
    margin-top: 50px;
}
.years{
    font-size: 20px;
}
p{
    font-size: 20px;
}
</style>