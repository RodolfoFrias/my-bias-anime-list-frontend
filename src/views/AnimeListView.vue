<script setup lang="ts">
import AlertItem from '../components/shared/AlertItem.vue';
import LoadingItem from '../components/shared/LoadingItem.vue';

import { onMounted, ref } from 'vue';
import AnimeCard from '../components/AnimeCard.vue';
import getAnimes from '../helpers/GetAnimes';
import type { Alert } from '../models/Alert';

let animeLists = ref<Array<Object>>([]);
let isLoading = ref<boolean>(true);
let isError = ref<boolean>(false)

const errorDetails: Alert = {
    text: 'Something went wrong when retrieving the list... xd',
    type: 'error',
    title: 'Error xd'
}

onMounted(async () => {
    try {
      animeLists.value = await getAnimes();
    } catch (error) {
      isError.value = true
    } finally {
      isLoading.value = false
    }
})

</script>

<template>
    <v-container>
        <div class="center" v-if="isError">
            <AlertItem :errorDetails="errorDetails" />
        </div>
        <div class="center" v-if="isLoading">
            <LoadingItem/>
        </div>
        <v-row>
            <v-col v-for="anime in animeLists" :key="anime.title+'-'+anime.id" cols="3">
                <AnimeCard :animeData="anime" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>