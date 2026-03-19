<template>
    <router-link :to="dataPath" class="card">
        <h2>{{ car.borough }}</h2>
        <h3>{{ id }}</h3>
    </router-link>
</template>

<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        car: {
            type: Object,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
    })
    const dataPath = computed(()=> {
        return `/data/${props.car.borough}`
    })
</script>

<style scoped>
.card {
width: 28%;
height: 500px;
margin: 30px 0;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
}
</style>