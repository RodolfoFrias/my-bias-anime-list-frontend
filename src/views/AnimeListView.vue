<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AnimeCard from '../components/AnimeCard.vue';
import getAnimes from '../helpers/GetExternalAnimes';
import { Alert, AlertType } from '../models/Alert';

let animeLists = ref<Array<Object>>([]);
let isLoading = ref<boolean>(true);
let isError = ref<boolean>(false)

const errorDetails: Alert = {
    text: 'Something went wrong when retrieving the list... xd',
    type: AlertType.error,
    title: 'Error xd'
}

const infoDetails: Alert = {
    text: 'Looks like no animes were returned! :c',
    type: AlertType.info,
    title: 'Caracoles!'
}

onMounted(async () => {
    try {
      animeLists.value = await getAnimes();
      console.table(animeLists.value)
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
            <AlertItem :details="errorDetails" />
        </div>
        <div class="center" v-if="isLoading">
            <LoadingItem/>
        </div>
        <div class="center" v-if="!animeLists || animeLists.length === 0">
            <AlertItem :details="infoDetails" />
        </div>
        <v-row v-else>
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