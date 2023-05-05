<script setup lang="ts">
 import type { Anime } from '../models/AnimeModel';

 interface Props {
    animeData: Anime
 }

 const statusMap = {
    'finished_airing': {
        text: "Finalized",
        class: "red_circle"
    }
 }

 const selectAnime = (animeName) => {
    alert(`You have selected ${animeName}`)
 }

 const props = defineProps<Props>()

</script>
<template>
  <v-card>
    <v-img
        :src="props.animeData.main_picture.large"
        height="100%"
    >
    </v-img>
    <v-card-text>
      <div class="text-h6 font-weight-bold">{{ props.animeData.title }}</div>
      <div class="status_container">
        <p class="text--primary mr-3">
            {{ statusMap[props.animeData.status].text }}
        </p>
        <div :class="statusMap[props.animeData.status].class"></div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="tonal"
        color="primary"
        @click="selectAnime(props.animeData.title)"
      >
        Select
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<style scoped>
    .red_circle {
        margin-top: 5px;
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 50%;
    }

    .status_container {
        padding-top: 1rem;
        display: flex;
    }
</style>