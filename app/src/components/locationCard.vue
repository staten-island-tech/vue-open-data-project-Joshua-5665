<template>
    <router-link :to="dataPath" class="card">
        <h2>{{ loc.borough }}</h2>
        <h2>{{ loc.cd_number }}</h2>
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
    display: flex;
}
</style>