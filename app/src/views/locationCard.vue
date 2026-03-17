<template>
    <router-link :to="dataPath" class="card">
        <h2>{{ data.borough }}</h2>
        <h3>{{ id }}</h3>
    </router-link>
</template>

<script setup>
    import {computed} from 'vue'
    const props = defineProps({
        data: {
            type: Object,
            required: true,
        },
        id: {
            type: Number,
            required: true
        },
    })
    const dataPath = computed(()=> {
        return `/data/${props.data.borough}`
    })
</script>

<style scoped>

</style>