<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AnimeCard from '../components/AnimeCard.vue'
import getAnimes from '../helpers/GetAnimes';

let animeLists = ref([])

onMounted(async () => {
    animeLists.value = await getAnimes()
})

</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="anime in animeLists" :key="anime.id" cols="3">
                <AnimeCard :animeData="anime" />
            </v-col>
        </v-row>
    </v-container>
</template>

