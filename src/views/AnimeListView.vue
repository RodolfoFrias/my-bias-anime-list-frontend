<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import AnimeCard from '../components/AnimeCard.vue'
import getAnimes from '../helpers/GetAnimes';

let animeLists = reactive([])

onMounted(async () => {
    animeLists = await getAnimes()
})

</script>

<template>
    <div class="anime_list_section">
        <div v-for="anime in animeLists" :key="anime.id">
            <AnimeCard :animeData="anime" />
        </div>
    </div>
</template>

<style scoped>
    .anime_list_section {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
