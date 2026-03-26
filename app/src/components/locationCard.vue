<template>
    <div class="years">
   
    </div>

    <router-link :to="dataPath" class="card">
        <h2>Year: {{ loc.year }}</h2>
        <h2>NYC Population: {{ loc.new_york_city_population }}</h2>
        <h2>NYC Consumption Gallons per Day Millions: {{ loc.nyc_consumption_million_gallons_per_day }}</h2>
    </router-link>
</template>

<script setup>
    import { computed } from 'vue'
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
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: rgb(228, 255, 223);
    margin-top: 50px;
}
.years{
    font-size: 20px;
}
</style>