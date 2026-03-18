<template>
    <router-link :to="dataPath" class="card">
        <h2>{{ data.borough }}</h2>
        <h3>{{ id }}</h3>
    </router-link>
</template>

<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        data: {
            type: Object,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
    })
    const dataPath = computed(()=> {
        return `/data/${props.data.borough}`
    })
</script>

<style scoped>
.card {
width: 28%;
height: 500px;
background-color: aliceblue;
margin: 30px 0;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
text-transform: uppercase;
}
</style>