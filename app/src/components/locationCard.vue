<template>
    <div v-for="time in times" class="years">
        <p>{{ time.year }}</p>
    </div>

    <router-link :to="dataPath" class="card">

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

    const times = computed(() => {
    return data.value.filter((time) => time.year == selected.value)
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
</style>