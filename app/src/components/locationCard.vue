<template>
    <div class="years">
   
    </div>

    <router-link :to="dataPath" class="card">
        <h2>Year: {{ loc.year }}</h2>
        <h2>NYC Population: {{ loc.new_york_city_population }}</h2>
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
        return `/data/${props.loc.cd_number}`
    })
</script>

<style scoped>
.card{
    height: 200px;
    width: 28%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgb(228, 255, 223);
}
.years{
    font-size: 20px;
}
</style>