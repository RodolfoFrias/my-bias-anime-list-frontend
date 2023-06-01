<script setup lang="ts">
 import type { Anime } from '../models/Anime';
 import ReviewDialog from './ReviewDialog.vue';

 interface Props {
    animeData: Anime
 }

 const statusMap = {
    finished_airing: {
        text: "Finalized",
        class: "red_circle"
    },
    currently_airing: {
      text: 'In progress',
      class: 'green_circle'
    },
    default: {
      text: 'unknown',
      class: 'red_circle'
    }
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
            {{( statusMap[props.animeData.status] || statusMap['default']).text }}
        </p>
        <div :class="(statusMap[props.animeData?.status] || statusMap['default']).class"></div>
      </div>
    </v-card-text>
    <v-card-actions>
      <ReviewDialog :animeId="props.animeData.id" :animeName="props.animeData.title" />
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
    .green_circle {
      margin-top: 5px;
      width: 10px;
      height: 10px;
      background-color:green;
      border-radius: 50%;
    }
    .status_container {
      padding-top: 1rem;
      display: flex;
    }
</style>